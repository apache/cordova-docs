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

# Amazon Fire OS Plugins

Folgen Sie den Anweisungen im Handbuch für das Android Plugins für einen Überblick über die Entwicklung von benutzerdefinierten Plugins.

## Echo Amazon Fire OS Plugin Beispiel

Um die JavaScript-Schnittstelle in Anwendung Plugins beschriebene *Echo* -Funktion, verwenden die `plugin.xml` zu injizieren eines `feature` Spezifikation der lokalen Plattform `config.xml` Datei:

    <platform name="amazon-fireos">
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
    

Wenn Sie möchten wiederverwenden Android Plugin-Code für die Amazon-Feuer-OS-Plattform dann ändern die plugin.xml darauf zu die `android` bestimmte Quelldatei. Zum Beispiel

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

Möchten Sie eine angepasste Plugin für die Amazon-Feuer-OS-Plattform zu schreiben, dann erstellen Sie einen Ordner mit dem Namen `amazon` unter Ihr Plugin-Src / Ordner und ändern die plugin.xml darauf zu die `amazon` bestimmte Quelldatei. Zum Beispiel

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## Verwendung von Amazon WebView in Ihr plugin

Cordova für Amazon Fire OS nutzt benutzerdefinierte Amazon WebView, die auf der Open-Source-Projekt Chromium basiert. Es ist GPU beschleunigt und optimiert für die flüssige Performance am Feuer zu entzünden.

Um zu verstehen, wie man am besten Amazon WebView in Ihrem Projekt verwenden, überprüfen Sie heraus das [Amazon-Entwicklerportal][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html