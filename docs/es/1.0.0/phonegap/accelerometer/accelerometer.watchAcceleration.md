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

accelerometer.watchAcceleration
===============================

Obtiene la aceleración de los ejes x, y, z, cada un cierto intervalo de tiempo.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
                                                           
Descripción
-----------

El acelerómetro es un sensor de movimiento que detecta cambios en el movimiento relativa a la posición actual (la diferencia). El acelerómetro puede detectar movimiento 3D sobre los ejes x, y, z 
La función `accelerometer.watchAcceleration` crea un visor que se encarga de observar la aceleración cada ciertos intervalos de tiempo. Cada vez que el visor de aceleración obtiene la aceleración, la función `accelerometerSuccess` se disparara.  Puedes especificar el intervalo (milisegundos) en la opción `frequency` del objeto `acceleratorOptions`.

Esta función retorna un identificador que referencia a este visor de aceleración, puedes usarlo en la función `clearWatch` para detenerlo.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone


Ejemplo Rápido
--------------

    function onSuccess(acceleration) {
        alert('Aceleración X: ' + acceleration.x + '\n' +
              'Aceleración Y: '   + acceleration.y + '\n' +
              'Aceleración Z: '   + acceleration.z + '\n' +
              'Timestamp: '       + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('onError!');
    };

    var options = { frequency: 3000 };  // Actualizar cada 3 segundos
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Acceleration</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // El identificador del visor de aceleracion `watchAcceleration`
        var watchID = null;
        
        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            startWatch();
        }

        // Empieza a observar la aceleracion
        //
        function startWatch() {
            
            // Actualizar cada 3 segundos
            var options = { frequency: 3000 };
            
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
        
        // Dejar de observar la aceleracion
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: Obtiene el resultado
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Aceleracion X: '  + acceleration.x + '<br />' +
                                'Aceleración Y: '  + acceleration.y + '<br />' +
                                'Aceleración Z: '  + acceleration.z + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }

        // onError: Ocurrio un error
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="accelerometer">Esperando al acelerómetro...</div>
      </body>
    </html>
    
Peculiaridades iPhone
---------------------

- En cada intervalo de tiempo, PhoneGap llamara a la función onSuccess y le pasara los resultados del acelerómetro.
- Sin embargo, PhoneGap restringe el intervalo a un mínimo de 40ms y un máximo de 1000ms.
  - Por ejemplo, si solicitas un intervalo de 3 segundos (3000ms), PhoneGap automáticamente obtendrá la aceleración cada 1 segundo, pero llamara a la función onSuccess cada 3 segundos.
