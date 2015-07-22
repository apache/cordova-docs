---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Android Plugins
---

# Android Plugins

Um ein Plugin zu entwickeln, ist ein Verständnis der Architektur von Cordova-Android notwendig. Cordova-Android besteht aus einem Android WebView mit Haken verbunden. Diese Plugins werden dargestellt als Klasse Zuordnungen in der `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html).

Eine Plugin besteht aus mindestens einer Java-Klasse, die erweitert die `CordovaPlugin` Klasse. Eine Plugin muss eine der überschreiben die `execute` Methoden aus `CordovaPlugin` . Als beste Praxis, das Plugin behandeln soll `pause` und `resume` Ereignisse und jeder Nachrichtenaustausch zwischen Plugins. Plugins mit lang andauernden Anfragen, Hintergrundaktivitäten wie Medienwiedergabe, Zuhörer oder internen Zustand sollten Implementieren der `onReset()` -Methode. Es wird ausgeführt, wenn die `WebView` navigiert zu einer neuen Seite oder Aktualisierungen, die das JavaScript lädt.

## Plugin-Klasse Zuordnung

Der JavaScript-Teil eines Plugins verwendet immer die `cordova.exec` Methode wie folgt:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Dies marshallt ersuchen die WebView Android native seitlich mehr oder weniger kochendes auf Berufung der `action` -Methode für die `service` -Klasse mit der übergebenen Argumente der `args` Array.

Ob Sie Ihr Plugin als Java-Datei oder als ein Glas verteilen, das Plugin muss hinzugefügt werden die `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html) in Ihrer Cordova-Android-Anwendung `res/xml/` Verzeichnis.

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>
    

Der Dienstname sollte übereinstimmen verwendet in der JavaScript `exec` Aufruf und der Wert ist der vollständige Name von Java-Klassen, einschließlich des Namespaces. Sonst kann das Plugin kompiliert aber noch nicht von Cordova erreichbar sein.

## Schreibe ein Android Java-Plugin

JavaScript feuert eine Plugin-Anforderung an die systemeigene Seite. Das Android Java-Plugin ist richtig zugeordnet, über die `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html). Also sieht Android Java-Plugin-Endklasse wie?

Was an das Plugin per JavaScript gesendet ruft `exec` Funktion ruft in der Plugin-Klasse übergeben `execute` Methode. Die meisten `execute` Implementierungen wie folgt aussehen:

    @Override public Boolean ausführen (String Aktion, JSONArray Args, CallbackContext CallbackContext) löst JSONException {wenn ("beep".equals(action)) {this.beep(args.getLong(0));
            callbackContext.success();
            true zurück.
        } return false;  / / Falsche Ergebnisse in eine "MethodNotFound"-Fehler zurückgegeben.
    }
    

Wir vergleichen den Wert der `action` -Parameter und Versand der Anfrage aus einer (privaten) Methode in der Klasse optional einige Parameter an die Methode übergeben.

Bei Abfangen von Ausnahmen und Fehler zurückgeben, ist es wichtig aus Gründen der Klarheit, die Störungen an JavaScript Spiel Java Ausnahme Namen so weit wie möglich zurückgegeben.

### Threading

JavaScript in der WebView ist *nicht* auf dem UI-Thread ausgeführt. Es läuft auf der WebKit-Thread. Die `execute` -Methode auch auf dem WebKit-Thread ausgeführt wird.

Wenn Sie mit der Benutzeroberfläche interagieren müssen, sollten Sie Folgendes verwenden:

    @Override public Boolean ausführen (String Aktion, JSONArray Args, final CallbackContext CallbackContext) löst JSONException {wenn ("beep".equals(action)) {final langer Dauer = args.getLong(0);
            cordova.getActivity () .runOnUiThread (new Runnable() {public void run() {...}
                    callbackContext.success(); / / Thread-sicher.
                }
            });
            true zurück.
        } return false;
    }
    

Wenn Sie nicht auf dem UI-Thread ausgeführt werden müssen, aber wollen nicht den WebCore-Thread blockieren:

    @Override public Boolean ausführen (String Aktion, JSONArray Args, final CallbackContext CallbackContext) löst JSONException {wenn ("beep".equals(action)) {final langer Dauer = args.getLong(0);
            cordova.getThreadPool () .execute (new Runnable() {public void run() {...}
                    callbackContext.success(); / / Thread-sicher.
                }
            });
            true zurück.
        } return false;
    }
    

### Echo-Android-Plugin-Beispiel

Fügen Sie Folgendes zu unserer `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html):

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>
    

Fügen Sie die folgende [Datei](../../../cordova/file/fileobj/fileobj.html) auf `src/org/apache/cordova/plugin/Echo.java` innerhalb unserer Cordova-Android-Anwendung:

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
    

Werfen Sie einen Blick auf den Code. Die notwendigen `imports` stehen an der Spitze. Unsere Klasse erstreckt sich von `CordovaPlugin` . Wir überschreiben die Methode execute(), um Nachrichten von exec() empfangen. Unsere Methode vergleicht zunächst gegen `action` : dieses Plugin unterstützt nur eine Aktion, die `echo` Aktion. Jede andere Aktion gibt `false` , die führt zu einem Fehler des Typs `INVALID_ACTION` , was übersetzt in einen Fehler-Callback-Aufruf auf der Seite JavaScript. Weiter, wir holen die Echo-Zeichenfolge unter Verwendung der `getString` -Methode für unsere `args` , es zu sagen, wir wollen zum Abrufen des 10. Parameters im Parameter-Array. Wir machen ein bisschen Parameterüberprüfung: Stellen Sie sicher, es ist nicht `null` , und stellen Sie sicher, es ist keine Zeichenfolge der Länge Null. Wenn es ist, nennen wir `callbackContext.error()` (die inzwischen sollten Sie wissen Ruft den Fehler-Rückruf). Wenn alle diese Prüfungen bestehen, und wir rufen Sie dann `callbackContext.success()` und übergeben Sie die `message` Zeichenfolge, die wir, als Parameter empfangen. Das bedeutet schließlich ein Erfolg-Rückruf-Aufruf auf der Seite JavaScript. Es geht auch die `message` Parameter als Parameter in die JavaScript-Erfolg-Callback-Funktion.

## Debuggen von Plugins

Eclipse kann ein Android Projekt Debuggen verwendet werden, und die Plugins können gedebuggt werden kann wenn der Java-Quellcode in das Projekt einbezogen wird. Nur die neueste Version von Android Developer-Tools bekannt, um Quelle Code Verbundenheit mit JAR-Abhängigkeiten zu ermöglichen, so dass dies zu diesem Zeitpunkt nicht vollständig unterstützt wird.

## Häufige Probleme

*   Plugins haben Zugriff auf ein `CordovaInterface` Objekt. Dieses Objekt verfügt über Zugriff auf den Android `Activity` die Anwendung ausgeführt wird. Dies ist die `Context` eine neue Android starten erforderlich `Intent` . Die `CordovaInterface` können Plugins starten eine `Activity` für ein Ergebnis und das Rückruf-Plugin für den Zeitpunkt festlegen der `Intent` kommt zurück an die Anwendung. Dies ist wichtig, da die `Intent` s-System ist wie Android zwischen Prozessen kommuniziert.

*   Plugins müssen keinen direkten Zugriff auf die `Context` wie in der Vergangenheit. Das Erbe `ctx` Mitglied ist veraltet und wird sechs Monate nach der Veröffentlichung von 2.0 entfernt. Alle `ctx` Methoden bestehen auf der `Context` , also beide `getContext()` und `getActivity()` sind in der Lage wieder das richtige Objekt erforderlich.

## Verwenden Sie die Quelle

Eine der besten Möglichkeiten, sich Ihr eigenes Plugin schreiben vorzubereiten ist über [vorhandene plugins][1].

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

Sie sollten auch durch die Kommentare in [CordovaPlugin.java][2] lesen.

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java