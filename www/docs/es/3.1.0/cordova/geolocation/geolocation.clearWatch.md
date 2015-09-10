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

# geolocation.clearWatch

Deja de ver cambios en la ubicación del dispositivo al que hace referencia el parámetro `watchID`.

    navigator.geolocation.clearWatch(watchID);
    

## Parámetros

*   **watchID**: el id del intervalo `watchPosition` para despejar. (String)

## Descripción

La `geolocation.clearWatch` se detiene observando los cambios en la ubicación del dispositivo despejando la `<a href="geolocation.watchPosition.html">geolocation.watchPosition</a>` hace referenciada a `watchID`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // Opciones: ver los cambios en la posición y usar más 
    // exacta posición disponible del método de adquisición.
    //
    var watchID = navigator.<a href="geolocation.watchPosition.html">geolocation.watchPosition</a>(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
            watchID = navigator.<a href="geolocation.watchPosition.html">geolocation.watchPosition</a>(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
            // onError Callback receives a <a href="PositionError/positionError.html">PositionError</a> object
            //
            function onError(error) {
              alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>