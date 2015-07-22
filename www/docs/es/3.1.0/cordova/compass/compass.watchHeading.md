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