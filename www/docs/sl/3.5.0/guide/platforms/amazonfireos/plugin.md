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

# Amazon ogenj OS Plugins

Sledite navodilom v priročniku Android Plugins za pregled razvoja meri plugins.

## ECHO Amazon ogenj OS Plugin primer

Primerjal JavaScript vmesnik *echo* funkcija, opisana v uporabo Plugins, uporabite na `plugin.xml` injicirati a `feature` Specifikacija za lokalne platforme `config.xml` datoteke:

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
    </platform>
    

Nato dodamo naslednje v `src/org/apache/cordova/plugin/Echo.java` datoteke:

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
    

Če želite ponovno uporabiti Android Plugin kode za platformo Amazon ogenj OS potem spremenite plugin.xml usmeriti k je `android` posebne izvorne datoteke. Na primer,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

Če želite napisati prilagojeno plugin za platformo Amazon ogenj OS potem ustvarite mapo z imenom `amazon` pod vaš plugin src / mapo in spreminjanje plugin.xml usmeriti k je `amazon` posebne izvorne datoteke. Na primer,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## Z uporabo Amazon spletni pogled v vaš plugin

Cordova za Amazon ogenj OS pomožen raba od šega presenetiti spletni pogled, ki je zgrajen na odprtokodni projekt kroma. Je GPU pospešiti in optimizirana za tekočine nastop na Kindle Fire.

Razumeti, kako najbolje uporabiti Amazon spletni pogled v vašem projektu, Oglejte si [Amazon Developer Portal][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html