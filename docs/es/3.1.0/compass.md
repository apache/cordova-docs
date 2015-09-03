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
---


# Brújula

> Obtiene la dirección que apunta el dispositivo.

## Métodos

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (obsolete)
*   compass.clearWatchFilter (obsolete)

## Argumentos

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android (en`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   (en iOS`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


# compass.getCurrentHeading

Conseguir el actual rumbo de la brújula.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
    

## Descripción

La brújula es un sensor que detecta la dirección o rumbo que el dispositivo está apuntado, normalmente desde la parte superior del dispositivo. Mide el rumbo en grados de 0 a 359.99, donde 0 es el norte.

La información de rumbo de la brújula es devuelta mediante un objeto `CompassHeading`, utilizando la función de devolución de llamada `compassSuccess`.

## Plataformas soportadas

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 y 8 (si está disponible en el hardware)
*   Windows 8

## Ejemplo rápido

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    
    function onError(error) {
        alert('CompassError: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>


# compass.watchHeading

A intervalos regulares, conseguir la brújula en grados.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## Descripción

La brújula es un sensor que detecta la dirección o rumbo que el dispositivo está apuntando. Mide el rumbo en grados de 0 a 359.99.

El `compass.watchHeading` obtiene el rumbo actual del dispositivo a intervalos regulares. Cada vez que el título es obtenido, se ejecuta la función de devolución de llamada `headingSuccess`. Especificar el intervalo en milisegundos mediante el parámetro de `frecuencia` en el objeto `compassOptions`.

El identificador devuelto reloj hace referencia al intervalo de reloj brújula. El ID del reloj puede utilizarse con `compass.clearWatch` para dejar de mirar la brújula.

## Plataformas soportadas

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 y 8 (si está disponible en el hardware)
*   Windows 8

## Ejemplo rápido

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS rarezas

En iOS `compass.watchHeading` también puede obtener rumbo actual del dispositivo cuando cambia un número especificado de grados. Cada vez los cambios de rumbo el número especificado de grados o más, ejecuta la función de devolución de llamada `headingSuccess`. Especifique los grados de cambio a través del parámetro de `filtro` en el objeto `compassOptions`. Claro como siempre el reloj pasando el identificador devuelto reloj al `compass.clearWatch`. Esta funcionalidad sustituye las funciones de `clearWatchFilter`, que fueron quitadas en la versión 1.6 y previamente separadas, sólo iOS `watchHeadingFilter`.

Sólo un `watchHeading` puede ser en efecto a la vez en iOS. Si un `watchHeading` utiliza un filtro, llamando al `getCurrentHeading` o `watchHeading` utiliza el valor existente de filtro para especificar los cambios de rumbo. Observando los cambios de rumbo con un filtro es más eficiente que con intervalos de tiempo.


# compass.clearWatch

Deja de mirar la brújula al que hace referencia el parámetro ID de reloj.

    navigator.compass.clearWatch(watchID);
    

*   **watchID**: el identificador devuelto por `compass.watchHeading`.

## Plataformas soportadas

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 y 8 (si está disponible en el hardware)
*   Windows 8

## Ejemplo rápido

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>


# compass.watchHeadingFilter

Ya no se admite a partir de 1.6, consulte `compass.watchHeading` para obtener la funcionalidad equivalente.


# compass.clearWatchFilter

No se admite a partir de 1.6. Ver `compass.clearWatch`.


# compassSuccess

función callback onSuccess que proporciona la brújula información vía un `compassHeading` objeto.

    function(heading) {
        // Do something
    }
    

## Parámetros

*   **Dirección**: la información de encabezado. *(compassHeading)*

## Ejemplo

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };


# compassError

función de callback onError para funciones de brújula.

## Ejemplo

    function(CompassError) {
        // Handle the error
    }


# compassOptions

Un parámetro opcional para personalizar la recuperación de la brújula.

## Opciones

*   **frecuencia**: frecuencia con la que recuperar el rumbo de la brújula en milisegundos. *(Número)* (Por defecto: 100)

*   **filtro**: el cambio de grados necesarios para iniciar una llamada de éxito watchHeading. *(Número)*

Rarezas Android

---

*   `filter`No se admite.

## Rarezas Tizen

*   `filter`No se admite.

## Windows Phone 7 y 8 rarezas

*   `filter`No se admite.


# compassHeading

A `CompassHeading` objeto es devuelto a la `compassSuccess` función de callback.

## Propiedades

*   **magneticHeading**: el rumbo en grados de 0-359.99 en un solo momento. *(Número)*

*   **trueHeading**: el título en relación con el polo norte geográfico en grados 0-359.99 en un solo momento. Un valor negativo indica que no se puede determinar el rumbo verdadero. *(Número)*

*   **headingAccuracy**: la desviación en grados entre el rumbo divulgado y el rumbo verdadero. *(Número)*

*   **timestamp**: el momento en el cual se determinó esta partida. *(milisegundos)*

## Descripción

El `CompassHeading` objeto es devuelto a la `compassSuccess` función de callback.

## Rarezas Android

*   `trueHeading`No es compatible, pero el mismo valor que los informes`magneticHeading`

*   `headingAccuracy`es siempre 0 porque no hay ninguna diferencia entre el `magneticHeading` y`trueHeading`.

## iOS rarezas

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Para los dispositivos iOS 4 y superiores, factores de rumbo en la orientación actual del dispositivo, no en referencia a su posición absoluta, para aplicaciones que apoya esa orientación.


# CompassError

A `CompassError` objeto es devuelto a la `compassError` función de devolución de llamada cuando se produce un error.

## Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación.

## Constantes

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## Descripción

Cuando ocurre un error, el `CompassError` objeto se pasa como parámetro a un `compassError` función de callback.
