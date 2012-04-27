---
license: Licensed to the Apache Software Foundation (ASF) under one
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

Acceleration
============

Obtiene información actual sobre el sensor de movimiento.

Atributos
-----------

- __x:__ Valor de movimiento en el eje X. Rango [0, 1] (`Number`)
- __y:__ Valor de movimiento en el eje Y. Rango [0, 1] (`Number`)
- __z:__ Valor de movimiento en el eje Z. Rango [0, 1] (`Number`)
- __timestamp:__ Timestamp de cuando se obtuvo (milisegundos). (`DOMTimeStamp`)

Descripción
-----------

Este objeto es creado y compuesto por PhoneGap, luego es retornado por el metodo `Accelerometer`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rapido
--------------

    function onSuccess(acceleration) {
        alert('Aceleración X: ' + acceleration.x + '\n' +
              'Aceleración Y: ' + acceleration.y + '\n' +
              'Aceleración Z: ' + acceleration.z + '\n' +
              'Timestamp: '     + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('onError!');
    };

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Acceleration</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que Phonegap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }

        // onSuccess: Obtiene el resultado
        //
        function onSuccess() {
            alert('Aceleración X: ' + acceleration.x + '\n' +
                  'Aceleración Y: ' + acceleration.y + '\n' +
                  'Aceleración Z: ' + acceleration.z + '\n' +
                  'Timestamp: '     + acceleration.timestamp + '\n');
        }

        // onError: Ocurrió un error
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
