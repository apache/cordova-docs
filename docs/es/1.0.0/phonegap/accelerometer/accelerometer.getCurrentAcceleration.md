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

accelerometer.getCurrentAcceleration
====================================

Obtiene la aceleración actual sobre los ejes x, y, z.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

Descripción
-----------

El acelerómetro es un sensor de movimiento que detecta los movimientos relativos a la actual orientación del dispositivo (la diferencia). El acelerómetro puede detectar movimiento 3D sobre los ejes x, y, z.

La aceleración se obtiene mediante la función 'callback' `accelerometerSuccess`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
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

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Obtiene el resultado
        //
        function onSuccess(acceleration) {
            alert('Aceleración X: '  + acceleration.x + '\n' +
                  'Aceleración Y: '  + acceleration.y + '\n' +
                  'Aceleración Z: '  + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Ocurrio un error
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
    
Peculiaridades en iPhone
------------------------

- iPhone no soporta obtener la aceleración exacta en un preciso momento.
- Debes estar muy atento a la aceleración y la captura de los datos en cada intervalo.
- Porque `getCurrentAcceleration` simplemente proporciona el ultimo valor que se obtuvo en la llamada `watchAccelerometer`.
