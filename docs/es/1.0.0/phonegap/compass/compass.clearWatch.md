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

compass.clearWatch
========================

Detiene el visor de dirección con ese ID.

    navigator.compass.clearWatch(watchID);

- __watchID__: El ID retornado por `compass.watchHeading`.

Plataformas Soportadas
----------------------

- Android
- iPhone

Ejemplo Rápido
--------------

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... mas tarde ...
    
    navigator.compass.clearWatch(watchID);
    
Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Compass</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // El ID que referencia al visor
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
            
            // Actualiza cada 3 segundos
            var options = { frequency: 3000 };
            
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
        
        // Deja de observar el compás
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
            element.innerHTML = 'Heading: ' + heading;
        }

        // onError: Ocurrió un error
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="heading">Esperando la dirección...</div>
        <button onclick="startWatch();">Empezar a observar</button>
        <button onclick="stopWatch();">Dejar de observar</button>
      </body>
    </html>
