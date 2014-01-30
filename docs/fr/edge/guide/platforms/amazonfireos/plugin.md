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

Suivez les instructions fournies dans le Guide de Plugins Android pour une vue d'ensemble du développement de plugins personnalisés.

## Echo Amazon Fire OS Plugin exemple

Pour trouver *l'écho de l'interface JavaScript décrite dans les Plugins de l'Application* , utilisez le `plugin.xml` pour injecter un `feature` spécification à de la plate-forme locale `config.xml` fichier :

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
    </platform>
    

Puis ajoutez le code suivant à la `src/org/apache/cordova/plugin/Echo.java` fichier :

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
    

Si vous souhaitez réutiliser le code Android Plugin pour la plateforme Amazon Fire OS puis modifier la plugin.xml pour pointer vers le `android` fichier source spécifique. Par exemple,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

Si vous voulez écrire un plugin personnalisé pour la plateforme Amazon Fire OS, puis créez un dossier nommé `amazon` dans votre plugin src / dossier et modifier la plugin.xml pour pointer vers le `amazon` fichier source spécifique. Par exemple,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## À l'aide de Amazon WebView dans votre plugin

Cordova pour Amazon Fire OS utilise personnalisé WebView Amazon qui repose sur le projet open source Chromium. C'est le GPU accéléré et optimisée pour des performances fluides sur Kindle Fire.

Pour comprendre comment mieux utiliser Amazon WebView dans votre projet, consultez le [Portail des développeurs Amazon][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html