---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# BlackBerry-Plugins

Dieser Abschnitt enthält Informationen für das native Plugin-Code auf der BlackBerry-Plattform zu implementieren. Finden Sie bevor Sie dies lesen einen Überblick über die Plugin-Struktur und ihre gemeinsame JavaScript-Schnittstelle Anwendung Plugins. In diesem Abschnitt weiterhin das Beispiel- *Echo* -Plugin, das zum einheitlichen Plattform und zurück von Cordova-Webview kommuniziert.

Darüber hinaus laden Sie [Cordova BlackBerry-Repository][1]. Das `Cordova-BlackBerry` Projekt können Sie an BlackBerry-Geräte wie die Fackel, kühn und Playbook bereitstellen. Dem Textbuch verwendet einen anderen Code base als andere BlackBerry-handheld-Geräte, für die Sie benötigen, um Ihre Entwicklungsprojekte zu duplizieren. Dieses Handbuch konzentriert sich auf handheld-Geräten statt Tabletten.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## Ändern von plugins.xml

Das `Echo` Plugin gibt was gesendet ein Benutzer mit der `window.echo` Funktion auf der Seite JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Des Projekts `www/plugins.xml` -Datei enthält alle erforderlichen Verweise zu des Projekts Cordova Plugins. Fügen Sie einen zusätzlichen Verweis so, dass bei `cordova.exec` ist aufgerufen, Cordova weiß, wie man die Karte das `Echo` Argument für die Native `Echo` Klasse:

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## Die Echo.java-Datei

Die `feature` Spezifikation `value` -Attribut verweist auf einen reverse Domain-Stil-Bezeichner. Dies entspricht einem Pfad innerhalb des Cordova BlackBerry WebWorks-Repo `framework/ext/src` Verzeichnis. Fügen Sie ein `framework/ext/src/org/apache/cordova/echo` Verzeichnis und fügen Sie eine `Echo.java` Datei.

Die `Echo.java` muss eine Klasse definieren, die erweitert die `Plugin` Klasse. Es muss auch umsetzen einer `execute` Methode, die zurückgibt eine `PluginResult` Klasse. Jeder Aufruf von `cordova.exec` übergibt die Aktion innerhalb der Klasse ausgeführt, sowie die Argumente. In diesem Fall die `Echo` -Klasse `echo` Methode ist die Aktion, und `[str]` ist ein zusätzliches Argument an die Methode übergeben.

        package org.apache.cordova.echo;
    
        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {
    
            public static final String echo = "echo";
    
            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }
    

Im Code oben die `execute` Methode bringt zunächst in einer Aktion. In diesem Fall, es ist nur eine gültige `echo` Aktion, so dass es einfach für diesen Wert überprüft.

Die eingehende Nachricht als übergeben `[str]` von JavaScript steht die `Echo` -Klasse als ein `args` Array. In diesem Fall gibt es nur ein Argument, zugänglich über ein nullbasiertes Array-Index:

        String theMsg = args.getString(0);
    

Nach verschiedenen Fehlerüberprüfung auf die Nachricht Wert, die-Methode instanziiert ein neues `PluginResult` mit einem `OK` Status und gibt die Meldung zurück. Dieser Wert wird wiederum als ein Argument an den JavaScript-Erfolg-Rückruf zurückgegeben. Im Fehlerfall werden verschiedene Statuscodes an das JavaScript-Fehler-Callback zurückgesendet.

## Aktualisierung der .jar in das Projekt Www Verzeichnis

Die zusätzlichen `Echo.java` in Ihrem Projekt aktualisiert werden muss. Baut die `.jar` Datei, navigieren Sie zu dem BlackBerry WebWorks-Repo-Root-Verzeichnis und führen Sie den `ant` Befehl:

        ant update -Dproject.path="~/path_to_my_project"
    

Dies baut eine neue `.jar` Datei das `build/ext` Verzeichnis. Kopie der `build/ext/cordova.jar` -Datei in das `project/www/ext` Verzeichnis.

Wenn alles gut geht, können Sie verwenden die `Echo` Plugin in BlackBerry.