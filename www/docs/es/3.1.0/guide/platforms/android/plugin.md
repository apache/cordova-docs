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

title: Android Plugins
---

# Android Plugins

Escribir un plugin requiere una comprensión de la arquitectura de Córdoba-Android. Cordova-Android consta de un WebView androide con ganchos conectados a él. Estos plugins son representados como asignaciones de clase en el `config.xml` archivo.

Un plugin consiste en por lo menos una clase Java que extiende la `CordovaPlugin` clase. Un plugin debe reemplazar uno de los `execute` métodos de `CordovaPlugin` . Como mejor práctica, debe manejar el plugin `[pause](../../../cordova/events/events.pause.html)` y `[resume](../../../cordova/events/events.resume.html)` eventos y cualquier mensaje pasando entre plugins. Plugins con solicitudes de larga duración, actividad de fondo como medios de reproducción, los oyentes o estado interno debe implementar el `onReset()` método también. Se ejecuta cuando el `WebView` se desplaza a una nueva página o actualizaciones, que vuelve a cargar el JavaScript.

## Asignación de clase plugin

La porción de un plugin de JavaScript siempre utiliza el método `cordova.exec` como sigue:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Esto mariscales una solicitud de la WebView al lado nativo Android, más o menos hirviendo a llamar al método de `action` en la clase de `service`, con los argumentos pasados en la `args` Array.

Si usted distribuye su plugin como archivo de Java o un frasco de su propio, el plugin debe agregarse a la `config.xml` archivo en de su aplicación Cordova-Android `res/xml/` Directorio.

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>
    

El nombre de servicio debe coincidir con la que se utiliza en la llamada `exec` de JavaScript, y el valor es el nombre completo de clases Java, incluyendo el espacio de nombres. De lo contrario el plugin puede compilar pero siendo inalcanzable por Córdoba.

## Escribir un Plugin de Java Android

JavaScript dispara una solicitud plugin nativo al lado. El plugin de Java Android se asigna correctamente mediante el archivo `config.xml`. Así qué ¿te parece la clase final de Android Java Plugin?

¿Qué obtiene despachó al plugin vía la función de JavaScript `exec` se pasa en el método de `ejecución` de la clase de Plugin. La mayoría de las implementaciones de `execute` este aspecto:

    @Override public boolean ejecutar (acción de las cuerdas, JSONArray args, CallbackContext callbackContext) lanza JSONException {si ("beep".equals(action)) {this.beep(args.getLong(0));
            callbackContext.success();
            devuelve true;
        } return false;  / / Devolver resultados falsos en un error de "MethodNotFound".
    }
    

Comparamos el valor del parámetro `action` y enviar la solicitud de un método (privada) en la clase, opcionalmente pasando algunos de los parámetros del método.

Cuando captura de excepciones y devolver errores, es importante en aras de la claridad que los errores devueltos a nombres de excepción de JavaScript partido Java tanto como sea posibles.

### Threading

JavaScript en el WebView hace *no* ejecuta en el subproceso de la interfaz de usuario. Se ejecuta en el subproceso WebCore. El `execute` método también se ejecuta en el subproceso WebCore.

Si usted necesita interactuar con la interfaz de usuario, debe usar la siguiente:

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
    

Si no tienes que correr en el subproceso de la interfaz de usuario, pero no queremos bloquear el subproceso WebCore:

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
    

### Ejemplo de Plugin Android echo

Añadir lo siguiente a nuestro archivo `config.xml`:

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>
    

Luego añadir el siguiente archivo a `src/org/apache/cordova/plugin/Echo.java` dentro de nuestra aplicación de Cordova-Android:

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
    

Echemos un vistazo al código. Las necesarias `imports` están en la parte superior. Nuestra clase se extiende desde `CordovaPlugin`. Sobreescribimos el método execute() para poder recibir mensajes de exec(). Nuestro método compara primero contra `action`: este plugin soporta sólo una acción, la acción de `echo`. Cualquier otra acción devuelve `false` , que se traduce en un error de tipo `INVALID_ACTION` , que se traduce en una invocación de callback de error en el lado de JavaScript. A continuación, tomamos la cadena Eco, usando el método `getString` sobre nuestro `args`, diciendo lo que queremos conseguir el décimo parámetro en la matriz de parámetros. Hacemos un poco de control de parámetro: Asegúrese de que no es `null` y asegúrese de que no es una cadena de longitud cero. Si lo es, lo llamamos `callbackContext.error()` (que, por ahora, deberías saber invoca la devolución de llamada de error). Si todos esos cheques pasan, entonces nos llame `callbackContext.success()` y pase en la cadena de `message` que hemos recibido como parámetro. Esto finalmente se traduce en una invocación de devolución de llamada de éxito en el lado de JavaScript. También pasa el parámetro del `message` como un parámetro a la función de devolución de llamada JavaScript éxito.

## Plugins de depuración

Eclipse puede utilizarse para depurar un proyecto de Android, y los plugins puede ser depurados si la fuente de Java está incluida en el proyecto. Sólo la versión más reciente de las herramientas de Desarrollador Android es conocida para permitir el apego de código fuente a dependencias JAR, así que esto no es totalmente compatible en este momento.

## Errores comunes

*   Plugins tienen acceso a un `CordovaInterface` objeto. Este objeto tiene acceso al androide `Activity` que está ejecutando la aplicación. Esta es la `Context` necesaria para lanzar un nuevo Android `Intent` . El `CordovaInterface` permite plugins comenzar una `Activity` para obtener un resultado y para establecer el plugin de devolución de llamada para cuando el `Intent` vuelve a la aplicación. Esto es importante, desde el `Intent` el sistema es cómo Android se comunica entre procesos.

*   Plugins no tienen acceso directo a la `Context` como lo han hecho en el pasado. El legado `ctx` miembro es obsoleto y se quitarán seis meses después de haber liberado 2.0. Todos `ctx` , existen métodos en el `Context` , así que ambos `getContext()` y `getActivity()` son capaces de devolver el objeto correcto es necesario.

## Uso de la fuente

Una de las mejores maneras de prepararse para escribir tu propio plugin es para [revisar plugins existentes][1].

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

También debería leer los comentarios en [CordovaPlugin.java][2].

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java