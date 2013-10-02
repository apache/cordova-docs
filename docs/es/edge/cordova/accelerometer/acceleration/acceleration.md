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

# Aceleración

Contiene data del `Accelerometer` capturada en un punto específico en el tiempo.

## Propiedades

*   **x**: Cantidad de aceleración en el eje X. (en m/s^2) *(Number)*
*   **y**: Cantidad de aceleración en el eje Y. (en m/s^2) *(Number)*
*   **z**: Cantidad de aceleración en el eje Z. (en m/s^2) *(Number)*
*   **timestamp**: Momento de la captura en milisegundos.*(DOMTimeStamp)*

## Descripción

Un objeto del tipo `Acceleration` se rellena y es devuelto por cualquier método de la API `Accelerometer`. Los valores de aceleración incluyen el efecto de la gravedad (9.81 m/s^2), así que cuando un dispositivo esta en posición horizontal con la pantalla hacia arriba, los valores *x*, *y*, y *z* devueltos deberían ser ``, ``, y `9.81`, respectivamente..

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>