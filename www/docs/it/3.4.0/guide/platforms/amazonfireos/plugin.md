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

# Amazon fuoco OS Plugins

Seguire le istruzioni fornite nella guida Plugins Android per una panoramica di sviluppo plugin personalizzato.

## Esempio di Plugin Echo Amazon fuoco OS

Per abbinare la caratteristica di *eco* dell'interfaccia JavaScript descritto nel plugin di applicazione, utilizzare il `plugin.xml` per iniettare una `feature` specifica per la piattaforma locale `config.xml` file:

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
    </platform>
    

Quindi aggiungere il codice seguente per la `src/org/apache/cordova/plugin/Echo.java` file:

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
    

Se si desidera riutilizzare codice Android Plugin per la piattaforma Amazon fuoco OS poi modificare il plugin per puntare il `android` file origine specifica. Ad esempio,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

Se volete scrivere un plugin su misura per la piattaforma Amazon fuoco OS quindi creare una cartella denominata `amazon` sotto il vostro plugin src / cartella e modificare il plugin per puntare il `amazon` file origine specifica. Ad esempio,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## Utilizzando Amazon WebView nel vostro plugin

Cordova per OS fuoco Amazon fa uso di personalizzato WebView Amazon che è costruito sul progetto open source Chromium. È la GPU accelerati e ottimizzato per prestazioni fluide sul Kindle Fire.

Per capire come utilizzare al meglio Amazon WebView nel vostro progetto, controllare il [Portale per sviluppatori di Amazon][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html