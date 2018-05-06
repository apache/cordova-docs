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

title: Amazon ogień OS Plugins
---

# Amazon ogień OS Plugins

Postępuj zgodnie z instrukcjami w podręczniku wtyczek Android przegląd rozwoju niestandardowe wtyczki.

## Echo Amazon ogień OS Plugin przykład

Do interfejsu JavaScript *echa* funkcji opisanych w aplikacji wtyczek, użyj `plugin.xml` Aby wprowadzić `feature` specyfikacji do lokalnej platformie `config.xml` pliku:

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
    </platform>
    

Następnie dodać następujące czynności, aby `src/org/apache/cordova/plugin/Echo.java` plik:

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
    

Jeśli chcesz, aby ponowne użycie kodu pluginu Android na platformie Amazon ognia systemu operacyjnego, a następnie zmodyfikować plugin.xml wskaż `android` określonego urządzenie źródłowe pliku. Na przykład,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

Jeśli chcesz napisać niestandardowe wtyczki na platformie Amazon ognia systemu operacyjnego, a następnie utwórz folder o nazwie `amazon` w twój plugin src / folderu i modyfikować plugin.xml wskaż `amazon` określonego urządzenie źródłowe pliku. Na przykład,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## Za pomocą widoku sieci Web Amazon w wtyczki

Cordova do Amazon ogień OS korzysta z niestandardowego WebView Amazon, który opiera się na projekcie open source chromu. To GPU przyspieszony i zoptymalizowany pod kątem wydajności płynu na rozpalić ogień.

Aby zrozumieć, jak najlepiej używać Amazon widoku sieci Web w projekcie, sprawdź [Amazon Developer Portal][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html