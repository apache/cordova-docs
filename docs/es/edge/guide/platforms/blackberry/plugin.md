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

# Plugins de BlackBerry

Esta sección proporciona información detallada de cómo implementar el código del plugin nativo en la plataforma BlackBerry. Antes de leer esto, vea aplicación Plugins para tener una visión general de la estructura del plugin y su interfaz común de JavaScript. Esta sección sigue demostrando el plugin *Eco* muestra que comunica desde la webview Cordova a la plataforma nativa y de regreso.

Además, descargar el [repositorio Cordova BlackBerry][1]. El `Cordova-BlackBerry` proyecto permite implementar dispositivos BlackBerry como la antorcha, negrita y Playbook. El libro de jugadas utiliza un código diferente base que otros dispositivos de mano BlackBerry, para lo cual necesita duplicar sus esfuerzos de desarrollo. Esta guía se centra en dispositivos portátiles en lugar de tabletas.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## Modificar plugins.xml

El `Echo` plugin devuelve el mensaje de que un usuario envía con el `window.echo` función del lado de JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Del proyecto `www/plugins.xml` archivo contiene todas las referencias necesarias a plugins del proyecto Cordova. Añadir una referencia adicional así que cuando `cordova.exec` es llamado, Cordova sabe cómo asignar el `Echo` el argumento de los nativos `Echo` clase:

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## El archivo Echo.java

El `feature` de especificación `value` atributo hace referencia a un identificador de dominio reverso-estilo. Esto corresponde a un camino dentro de la repo Cordova BlackBerry WebWorks `framework/ext/src` Directorio. Añadir un `framework/ext/src/org/apache/cordova/echo` Directorio y añadir un `Echo.java` archivo.

El `Echo.java` necesita definir una clase que extiende la `Plugin` clase. También debe implementar un `execute` método que devuelve un `PluginResult` clase. Cualquier llamada a `cordova.exec` pasa en la acción dentro de la clase a ejecutar, así como los argumentos. En este caso, el `Echo` de clase `echo` método es la acción, y `[str]` es un argumento adicional para pasar al método.

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
    

En el código anterior, el `execute` método trae primero en una acción. En este caso, sólo hay uno válido `echo` acción, así que simplemente comprueba para ese valor.

El mensaje entrante pasado como `[str]` de JavaScript está disponible para el `Echo` de la clase como un `args` matriz. En este caso, hay un sólo argumento, accesible utilizando un índice de base cero de la matriz:

        String theMsg = args.getString(0);
    

Después de vario comprobación de errores en el valor del mensaje, el método crea un nuevo `PluginResult` con un `OK` estado y devuelve el mensaje. Este valor, a su vez, pasa como un argumento a JavaScript callback éxito. En caso de error, varios códigos de estado son enviados a callback de error de JavaScript.

## Actualizando el .jar en www del proyecto directorio

El agregado `Echo.java` necesita ser actualizado en su proyecto. Para construir el `.jar` archivo, desplácese hasta el directorio raíz de la repo BlackBerry WebWorks y ejecutar el `ant` comando:

        ant update -Dproject.path="~/path_to_my_project"
    

Esto construye una nueva `.jar` de los archivos en el `build/ext` Directorio. Copia del `build/ext/cordova.jar` de archivos a la `project/www/ext` Directorio.

Si todo va bien, que le permite utilizar el `Echo` plugin en BlackBerry.