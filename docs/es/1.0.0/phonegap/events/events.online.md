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

online
===========

Este evento se dispara cuando una aplicación PhoneGap se encuentra online (con conexión a internet).

    document.addEventListener("online", yourCallbackFunction, false);

Detalles
--------

Cuando la conectividad de la aplicación establece conexión, el evento online se disparara.

En la mayoría de los casos solo necesitaras enlazar una función al evento con `document.addEventListener` justo después de que PhoneGap dispare 'deviceready'.

Plataformas Soportadas
----------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 y superior)

Ejemplo Rápido
--------------

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Maneja el evento 'online'
    }

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Events</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Llama a onDeviceReady cuando PhoneGap se inicie
        //
        // En este momento, el documento esta cargado pero phonegap-1.0.0.js aun no.
        // Cuando PhoneGap este listo y se comunique con el dispositivo nativo
        // se lanzara el evento `deviceready`.
        // 
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo y ahora ya se pueden hacer llamadas a PhoneGap
        //
        function onDeviceReady() {
		    document.addEventListener("online", onOnline, false);
        }

        // Maneja el evento online
        //
        function onOnline() {
        }
        
        </script>
      </head>
      <body>
      </body>
    </html>

Peculiaridades iOS
------------------
Durante el primer arranque, el primer evento online (Si lo hubiera) podría tardar al menos un segundo en dispararse.
