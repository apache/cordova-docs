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

compass.watchHeading
====================

Obtiene la dirección del compás en grados cada un cierto intervalo de tiempo.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
                                                           
Descripción
-----------

El compás es un sensor que detecta la dirección a la que el dispositivo esta apuntando. Estas medidas están representadas en grados, desde 0 a 359.99.

El metodo `compass.watchHeading` obtiene la dirección del compás cada ciertos intervalos de tiempo. Cada vez que la dirección se retorna, se dispara la función 'callback' `headingSuccess`. Puedes especificar el intervalo de tiempo en milisegundos usando la opción `frequency` del objeto `compassOptions`.

Un ID es retornado por la función, ese ID apunta a este visor de dirección, puedes usarlo en la función `compass.clearWatch` para detener el visor.

Plataformas Soportadas
-------------------

- Android
- iPhone


Ejemplo Rápido
--------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Dirección: ' + heading;
    };

    function onError() {
        alert('onError!');
    };

    var options = { frequency: 3000 };  // Actualizar cada 3 segundos
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Compass</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // El ID del actual visor de dirección `watchHeading`
        var watchID = null;
        
        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            startWatch();
        }

        // Empieza a observar el compás
        //
        function startWatch() {
            
            // Actualizar el compás cada 3 segundos
            var options = { frequency: 3000 };
            
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
        
        // Dejar de observar el compás
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: Obtiene el resultado
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Dirección: ' + heading;
        }

        // onError: Ocurrió un error
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="heading">Esperando dirección...</div>
        <button onclick="startWatch();">Iniciar el visor de dirección</button>
        <button onclick="stopWatch();">Detener el visor de dirección</button>
      </body>
    </html>
    
