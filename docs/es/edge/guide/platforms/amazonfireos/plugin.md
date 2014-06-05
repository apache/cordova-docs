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

# Amazon fuego OS Plugins

Siga las instrucciones proporcionadas en la guía de Plugins de Android para tener una visión general de desarrollo de plugins personalizados.

## Ejemplo de Plugin de fuego OS echo Amazon

Para hacer coincidir la función de *Eco* de la interfaz JavaScript descrita en Plugins de aplicación, utilice el `plugin.xml` para inyectar un `feature` Especificación de la plataforma local `config.xml` archivo:

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
    </platform>
    

Luego agregar lo siguiente a la `src/org/apache/cordova/plugin/Echo.java` archivo:

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
    

Si quieres reutilizar código Android Plugin para la plataforma de Amazon fuego OS entonces modificar el plugin.xml para señalar el `android` archivo fuente específica. Por ejemplo,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

Si desea escribir un plugin modificado para requisitos particulares para la plataforma Amazon fuego OS creará una carpeta llamada `amazon` bajo tu plugin src / carpeta y modificar el plugin.xml para señalar el `amazon` archivo fuente específica. Por ejemplo,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## Usando Amazon WebView en tu plugin

Cordova para Amazon fuego OS hace uso de personalizado WebView de Amazon que está construido sobre el proyecto de código abierto de cromo. Es GPU acelerada y optimizado para funcionamiento fluido en Kindle Fire.

Para entender cómo utilizar mejor Amazon WebView en su proyecto, revisa el [Amazonas Developer Portal][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html