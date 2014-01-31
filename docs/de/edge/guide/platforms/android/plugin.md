---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android Plugins

Dieser Abschnitt enthält Informationen für das native Plugin-Code auf der Android-Plattform zu implementieren. Finden Sie bevor Sie dies lesen einen Überblick über die Plugin-Struktur und ihre gemeinsame JavaScript-Schnittstelle Anwendung Plugins. In diesem Abschnitt weiterhin das Beispiel- *Echo* -Plugin, das zum einheitlichen Plattform und zurück von Cordova-Webview kommuniziert. Ein weiteres Beispiel finden Sie auch die Kommentare in [CordovaPlugin.java][1].

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android Plugins basieren auf Cordova-Android, bestehend aus einem Android WebView mit Haken verbunden. Plugins werden dargestellt als Klasse Zuordnungen in der `config.xml` Datei. Eine Plugin besteht aus mindestens einer Java-Klasse, die erweitert die `CordovaPlugin` -Klasse überschreiben eines seiner `execute` Methoden. Als beste Praxis, das Plugin sollte auch behandeln, `pause` und `resume` Veranstaltungen, zusammen mit jeder Nachrichtenaustausch zwischen Plugins. Plugins mit lang andauernden Anfragen, Hintergrundaktivitäten wie Medienwiedergabe, Zuhörer oder internen Zustand sollten Implementieren der `onReset()` -Methode. Es wird ausgeführt, wenn die `WebView` navigiert zu einer neuen Seite oder Aktualisierungen, die das JavaScript lädt.

## Plugin-Klasse Zuordnung

Das Plugin-JavaScript-Schnittstelle verwendet die `cordova.exec` -Methode, wie folgt:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Dies marshallt ersuchen die WebView Android native seitlich effektiv Aufrufen der `action` -Methode für die `service` -Klasse, mit zusätzlichen übergebenen Argumente der `args` Array.

Ob Sie eine Plugin als Java-Datei oder als eine *Jar* -Datei eigene verteilen, kann das Plugin angegeben werden, in Ihrer Cordova-Android-Anwendung `res/xml/config.xml` Datei. Weitere Informationen zur Verwendung finden Sie Anwendung Plugins die `plugin.xml` Datei, dies zu injizieren `feature` Element:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

Der verwendet in der JavaScript übereinstimmt `exec` aufrufen. Der Wert ist die Java-Klasse voll qualifizierten Namespacebezeichner. Andernfalls kann das Plugin kompiliert, aber noch nicht verfügbar, Cordova.

## Plugin-Initialisierung und Lebensdauer

Wird eine Instanz eines Plugin-Objekts erstellt, für das Leben eines jeden `WebView` . Plugins werden nicht instanziiert bis sie zuerst durch einen Aufruf von JavaScript, verwiesen wird, es sei denn, `<param>` mit einem `onload` `name` Attribut auf festgelegt ist `"true"` in `config.xml` . Z.B.:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

Plugins sollten verwenden die `initialize` -Methode für ihre Start-up-Logik.

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Schreibe ein Android Java-Plugin

Ein JavaScript-Aufruf feuert eine Plugin-Anforderung an die systemeigene Seite und das Java-Plugin von Correspoinding zugeordnet ist, richtig in die `config.xml` -Datei, aber was bedeutet die endgültige Android Java Plugin Klasse aussehen? Was auch immer an das Plugin mit JavaScript gesendet wird `exec` Funktion ist in der Plugin-Klasse übergeben `execute` Methode. Die meisten `execute` Implementierungen wie folgt aussehen:

        @Override public Boolean ausführen (String Aktion, JSONArray Args, CallbackContext CallbackContext) löst JSONException {wenn ("beep".equals(action)) {this.beep(args.getLong(0));
                callbackContext.success();
                true zurück.
            } return false;  / / Falsche Ergebnisse in eine "MethodNotFound"-Fehler zurückgegeben.
        }
    

Das JavaScript `exec` Funktion `action` Parameter entspricht einer private Klasse-Methode mit optionalen Parametern zu versenden.

Wann Abfangen von Ausnahmen und Fehler zurückgeben, ist es wichtig aus Gründen der Klarheit, die Störungen an JavaScript Spiel Java Ausnahme Namen so weit wie möglich zurückgegeben.

## Threading

Das Plugin-JavaScript ist *nicht* führen Sie in der Haupt-Thread der die `WebView` Schnittstelle; stattdessen läuft auf die `WebCore` thread, wie die `execute` Methode. Wenn Sie mit der Benutzeroberfläche interagieren müssen, verwenden Sie die folgende Variante:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

Verwendung Folgendes, wenn Sie nicht benötigen, führen Sie auf dem Hauptbildschirm thread ist, aber wollen nicht blockieren die `WebCore` thread entweder:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## Echo-Android-Plugin-Beispiel

Um die JavaScript-Schnittstelle in Anwendung Plugins beschriebene *Echo* -Funktion, verwenden die `plugin.xml` zu injizieren eines `feature` Spezifikation der lokalen Plattform `config.xml` Datei:

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

Fügen Sie die folgenden Schritte, um die `src/org/apache/cordova/plugin/Echo.java` Datei:

        package org.apache.cordova.plugin;
    
        import org.apache.cordova.CordovaPlugin;
        import org.apache.cordova.CallbackContext;
    
        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;
    
        /**
         * This class echoes a string called from JavaScript.
         */
        public class Echo extends CordovaPlugin {
    
            @Override
            public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
                if (action.equals("echo")) {
                    String message = args.getString(0);
                    this.echo(message, callbackContext);
                    return true;
                }
                return false;
            }
    
            private void echo(String message, CallbackContext callbackContext) {
                if (message != null && message.length() > 0) {
                    callbackContext.success(message);
                } else {
                    callbackContext.error("Expected one non-empty string argument.");
                }
            }
        }
    

Die notwendigen Importe am oberen Rand der Datei erweitert die Klasse von `CordovaPlugin` , deren `execute()` Methode überschreibt Nachrichten empfangen `exec()` . Die `execute()` -Methode prüft zunächst den Wert des `action` , auf die in diesem Fall kommt nur eine gültige `echo` Wert. Jede andere Aktion gibt `false` und führt zu einem `INVALID_ACTION` Fehler, der eine Fehler-Callback aufgerufen, auf der Seite JavaScript übersetzt.

Als nächstes die-Methode ruft die Echo-Zeichenfolge unter Verwendung der `args` des Objekts `getString` Methode, Angabe des ersten Parameters an die Methode übergeben. Nachdem der Wert, zu einem privaten übergeben wird `echo` Methode, es ist Parameter überprüft, um sicherzustellen, dass es ist nicht `null` oder eine leere Zeichenfolge, in diesem Fall `callbackContext.error()` ruft JavaScript-Fehler-Callback. Wenn die verschiedenen Prüfungen übergeben, die `callbackContext.success()` übergibt das Original `message` an JavaScripts-Erfolg-Rückruf als Parameter zurück.

## Android Integration

Android-Funktionen ein `Intent` System, das Prozesse miteinander kommunizieren kann. Plugins haben Zugriff auf ein `CordovaInterface` Objekt, das die Android zugreifen können `Activity` , die die Anwendung ausgeführt wird. Dies ist die `Context` eine neue Android starten erforderlich `Intent` . Die `CordovaInterface` können Plugins starten eine `Activity` für ein Ergebnis und das Rückruf-Plugin für den Zeitpunkt festlegen der `Intent` an die Anwendung zurückgegeben.

Ab Cordova 2.0, Plugins können nicht mehr direkt zugreifen, die `Context` , und das Erbe `ctx` Mitglied ist veraltet. Alle `ctx` Methoden gibt es auf der `Context` , also beide `getContext()` und `getActivity()` kann das gewünschte Objekt zurückgeben.

## Debuggen von Android Plugins

Eclipse können Sie Debuggen von Plugins wie Java-Quellcode in das Projekt einbezogen. Nur die neueste Version von Android Developer-Tools können Sie *JAR-* Abhängigkeiten, Source-Code zuordnen, so dass diese Funktion noch nicht vollständig unterstützt wird.