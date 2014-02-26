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

# Android Plugins

Esta sección proporciona información sobre cómo implementar código plugin nativo en la plataforma Android. Antes de leer esto, vea aplicación Plugins para tener una visión general de la estructura del plugin y su interfaz común de JavaScript. Esta sección sigue demostrando el plugin *Eco* muestra que comunica desde la webview Cordova a la plataforma nativa y de regreso. Otro ejemplo, vea también los comentarios en [CordovaPlugin.java][1].

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android plugins se basan en Córdoba-Android, el cual consiste en un WebView androide con ganchos conectados a él. Plugins son representados como asignaciones de clase en el `config.xml` archivo. Un plugin consiste en por lo menos una clase Java que extiende la `CordovaPlugin` clase, reemplazando a uno de sus `execute` métodos. Como mejor práctica, el plugin debe también manejar `pause` y `resume` eventos, junto con cualquier mensaje pasando entre plugins. Plugins con solicitudes de larga duración, actividad de fondo como medios de reproducción, los oyentes o estado interno debe implementar el `onReset()` método también. Se ejecuta cuando el `WebView` se desplaza a una nueva página o actualizaciones, que vuelve a cargar el JavaScript.

## Asignación de clase plugin

Interfaz de JavaScript del plugin utiliza el `cordova.exec` método de la siguiente manera:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Esto mariscales una petición desde el WebView al lado nativo Android, llamando con eficacia el `action` método de la `service` clase, con argumentos adicionales en el `args` matriz.

Si usted distribuye un plugin como archivo de Java o como un archivo *jar* de su propio, el plugin debe especificarse en la aplicación Cordova-Android `res/xml/config.xml` archivo. Ver aplicación Plugins para obtener más información sobre cómo utilizar el `plugin.xml` archivo para inyectar este `feature` elemento:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

El nombre de servicio coincide con la utilizada en el JavaScript `exec` llamar. El valor es el identificador de la clase Java de nombres completos. De lo contrario, el plugin puede compilar pero todavía estar disponible a Córdoba.

## Vida e inicialización Plugin

Para la vida de cada uno se crea una instancia de un objeto plugin `WebView` . Plugins no se instancian hasta que primero se hace referencia mediante una llamada desde JavaScript, a menos que `<param>` con un `onload` `name` atributo se establece en `"true"` en `config.xml` . Por ejemplo:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

Plugins deberían utilizar el `initialize` método para su lógica puesta en marcha.

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Escribir un Plugin de Java Android

Una llamada JavaScript dispara una solicitud plugin nativo al lado, y el plugin de Java correspondiente se asigna correctamente en el `config.xml` archivo, pero ¿qué aspecto tiene el final Android Java Plugin clase? Lo que es enviado al plugin de JavaScript `exec` función se pasa a la clase plugin `execute` método. La mayoría `execute` implementaciones de este aspecto:

        @Override public boolean ejecutar (acción de las cuerdas, JSONArray args, CallbackContext callbackContext) lanza JSONException {si ("beep".equals(action)) {this.beep(args.getLong(0));
                callbackContext.success();
                devuelve true;
            } devolver false;  / / Devolver resultados falsos en un error de "MethodNotFound".
        }
    

El JavaScript `exec` de función `action` parámetro corresponde a un método de clase privada para despachar con parámetros opcionales.

Cuando captura de excepciones y devolver errores, es importante en aras de la claridad que los errores devueltos a nombres de JavaScript partido Java excepción tanto como sea posibles.

## Roscar

JavaScript del plugin hace *no* ejecuta en el subproceso principal de la `WebView` interfaz; en cambio, se ejecuta en el `WebCore` del hilo de rosca, como lo hace el `execute` método. Si usted necesita interactuar con la interfaz de usuario, debe usar las siguientes variaciones:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

Uso lo siguiente si no tienes que ejecutar en la interfaz principal del hilo, pero no queremos bloquear la `WebCore` o del hilo de rosca:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## Ejemplo de Plugin Android echo

Para hacer coincidir la función de *Eco* de la interfaz JavaScript descrita en Plugins de aplicación, utilice el `plugin.xml` para inyectar un `feature` Especificación de la plataforma local `config.xml` archivo:

        <platform name="android">
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
    

Las importaciones necesarias en la parte superior del archivo amplía la clase de `CordovaPlugin` , cuyo `execute()` método reemplaza para recibir los mensajes de `exec()` . El `execute()` método primero comprueba el valor de `action` , para que en este caso hay sólo una válida `echo` valor. Cualquier otra acción devuelve `false` y resultados en un `INVALID_ACTION` error, que se traduce en un callback de error invocado en el lado de JavaScript.

A continuación, el método recupera la cadena Eco usando el `args` del objeto `getString` método, especificando el primer parámetro pasado al método. Después de que el valor se pasa a un privado `echo` método es parámetro-verificar para asegurarse que no es `null` o una cadena vacía, en cuyo caso `callbackContext.error()` invoca callback de error de JavaScript. Si pasan los controles distintos, el `callbackContext.success()` pasa el original `message` cadena a callback éxito de JavaScript como un parámetro.

## Integración de Android

Características de Android un `Intent` sistema que permite que los procesos para comunicarse con los demás. Plugins tienen acceso a un `CordovaInterface` objeto, que puede acceder el Android `Activity` que ejecuta la aplicación. Esta es la `Context` necesaria para lanzar un nuevo Android `Intent` . El `CordovaInterface` permite plugins comenzar una `Activity` para obtener un resultado y para establecer el plugin de devolución de llamada para cuando el `Intent` devuelve a la aplicación.

Desde Córdoba 2.0, Plugins directamente ya no puede acceder a la `Context` y el legado `ctx` miembro está obsoleto. Todos `ctx` , existen métodos en el `Context` , así que ambos `getContext()` y `getActivity()` puede devolver el objeto requerido.

## Depuración Plugins Android

Eclipse permite depurar plugins como fuente Java incluida en el proyecto. Sólo la versión más reciente de las herramientas de Desarrollador Android permite asociar código fuente a dependencias *JAR* , así que esta característica no está todavía completamente soportada.