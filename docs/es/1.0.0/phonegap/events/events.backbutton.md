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

backbutton
===========

Este evento se dispara cuando el usuario presiona el botón "Atrás" en Android.

    document.addEventListener("backbutton", yourCallbackFunction, false);

Detalles
--------

Si necesitas cambiar la funcionalidad del botón "Atrás" en Android, puedes registrar una función para el evento 'backbutton'. Ya no es necesario llamar a otros métodos para sobre escribir el evento "backbutton", solo necesitas registrar un función 'callback' para este evento.

En la mayoría de los casos solo necesitaras enlazar una función al evento con `document.addEventListener` justo después de que PhoneGap dispare 'deviceready'.


Plataformas Soportadas
----------------------

- Android

Ejemplo Rápido
--------------

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Maneja el evento del botón atrás
    }

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Events</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Llama a onDeviceReady cuando PhoneGap se inicie.
        //
        // En este momento, el documento esta cargado pero phonegap-1.0.0.js aun no.
        // Cuando PhoneGap este listo y se comunique con el dispositivo nativo
        // se lanzara el evento `deviceready`.
        // 
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo y ahora ya se pueden hacer llamadas a PhoneGap
        //
        function onDeviceReady() {
            // Añade una función 'callback' al evento 'backbutton'
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
        
        // Maneja el evento del botón "Atrás"
        //
        function onBackKeyDown() {
        }

        </script>
      </head>
      <body>
      </body>
    </html>
