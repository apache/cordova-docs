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

Diese Anleitung zeigt, wie ein Echo-Plugin auf BlackBerry zu entwickeln. Die Plugin-Entwicklung-Guide bietet einen umfassenden Überblick, mit dem Sie bereits vertraut sein sollten, und dieser Anleitung nimmt wo es aufhört. Darüber hinaus das [Cordova BlackBerry-Repository][1] herunterladen.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

Das `Cordova-BlackBerry` Projekt können Sie an BlackBerry-Geräte wie die Fackel, kühn und Playbook bereitstellen. Dem Textbuch verwendet einen anderen Code base als andere BlackBerry-handheld-Geräte, für die Sie benötigen, um Ihre Entwicklungsprojekte zu duplizieren. Dieses Handbuch konzentriert sich auf die handheld-Geräte eher als Tabletten. (In der Zukunft sollte diesem Handbuch beide Plattformen behandelt.)

Das Echo-Plugin im wesentlichen zurückgibt welcher Nachricht ein Benutzer bietet die `window.echo` Funktion:

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## Ändern von plugins.xml

Des Projekts `www/plugins.xml` Verzeichnis enthält alle erforderlichen Verweise zu Ihrem Cordova-Projekt-Plugins. Fügen Sie zusätzliche Referenz also, dass bei `cordova.exec` ist aufgerufen, Cordova weiß, wie man die Karte der `Echo` Argument der `cordova.exec` zu der `Echo` -Klasse, die wir nativ schreiben möchten:

    <feature name="Echo">
        <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
    </feature>
    

## Hinzufügen von Echo.java

Wenn Sie bemerken, dass die Struktur des Value-Attributs, sehen Sie einen definierten Pfad, der zu den Echo-Plugin führt. Suchen Sie im Root-Verzeichnis von Cordova BlackBerry WebWorks-Repo, ein Verzeichnis namens `framework` . Dieses Verzeichnis enthält alle des Quellcodes, die nativ auf dem BlackBerry ausgeführt wird. Navigieren Sie zu `framework/ext/src/org/apache/cordova` . An dieser Stelle sehen Sie alle Plugin-Verzeichnisse, die innerhalb derer der Source Code ist. So fügen Sie das Verzeichnis-Echo, `framework/ext/src/org/apache/cordova/echo` und erstellen Sie eine Datei namens `Echo.java` an`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## Schreiben Echo.java

Die Grundidee hinter eine Plugin zu schreiben ist, erstellen Sie eine Klasse, die die Plugin-Klasse erweitert und haben eine Methode namens `execute` wieder eine `PluginResult` Klasse. Jeder Aufruf von `cordova.exec` übergibt die Aktion innerhalb der Klasse als auch die Argumente ausgeführt. In diesem Fall ist "Echo", die Aktion, die wir innerhalb der Klasse "Echo" und [str] ausführen möchten sind die Argumente, die wir in übergeben.

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
    

Also wenn wir den obigen Code betrachten, können wir sehen, dass innerhalb der Execute-Methode, suchen wir zuerst was Aktionen kommen. Das Echo-Plugin hat nur eine Aktion, `echo` , so dass wir nur dafür prüfen werden wird. Hätte unser Plugin mehr Aktionen, ist es einfach eine Frage der hinzufügen weitere bedingte Tests checken für diese Aktionen.

Wir werden dann die Nachricht aus den Argumenten zu greifen, der durch den Parameter Args geliefert wird. Wir können das erste Argument greifen, indem Sie einfach`String theMsg = args.getString(0);`.

Werden wir einige Fehlerüberprüfung und wenn die Nachricht gut aussieht, werden wir eine neue PluginResult mit einem Status ok instanziieren: `PluginResult.Status.OK` und die Meldung: `theMsg` . Danach wir das Ergebnis zurückgegeben, um zurück zu JavaScript im Erfolg Rückruf ausgelöst werden übergeben werden. Wenn etwas fehlschlägt, können wir verschiedene Status-Ausnahmen wie zurück `PluginResult.Status.ERROR` , `PluginResult.Status.JSON_EXCEPTION` , oder `PluginResult.Status.INVALID_ACTION` . Wenn wieder übergeben, Feuer diese Ergebnistypen den Fail-Rückruf in JavaScript.

## Aktualisierung der .jar in Ihrem Projekt Www-Verzeichnis

Die zusätzlichen `Echo.java` in Ihrem Projekt aktualisiert werden muss. Baut die `.jar` Datei, navigieren Sie zu dem BlackBerry WebWorks-Repo-Root-Verzeichnis, und führen Sie den `ant` Befehl:

    Ameise update - Dproject.path="~/path_to_my_project"
    

Dies baut eine neue `.jar` Datei das `build/ext` Verzeichnis. Kopie der `build/ext/cordova.jar` -Datei in Ihr `project/www/ext` Verzeichnis.

Wenn alles gut geht, ermöglicht, die Echo-Plugin in BlackBerry zu verwenden.