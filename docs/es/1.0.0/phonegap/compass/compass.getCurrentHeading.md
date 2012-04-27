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

compass.getCurrentHeading
=========================

Obtiene la dirección actual del dispositivo.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

Descripcion
-----------

El compás es un sensor que detecta la dirección a la que el dispositivo esta orientado. Estos valores están representadas en grados, desde 0 a 359.99.

La dirección del compás se retorna usando la función 'callback' `compassSuccess`.

Plataformas Soportadas
----------------------

- Android
- iPhone

Ejemplo Rápido
--------------

    function onSuccess(heading) {
        alert('Dirección: ' + heading);
    };

    function onError() {
        alert('onError!');
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Compass</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Obtiene el resultado
        //
        function onSuccess(heading) {
            alert('Dirección: ' + heading);
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
        <p>getCurrentHeading</p>
      </body>
    </html>
    
