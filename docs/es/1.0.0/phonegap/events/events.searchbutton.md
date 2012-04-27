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

searchbutton
===========

Este evento se dispara cuando el usuario presiona el botón de búsqueda en Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);

Detalles
--------

Si necesitas cambiar la funcionalidad del botón "Búsqueda" en Android, puedes registrar una función para el evento 'searchbutton'. Ya no es necesario llamar a otros métodos para sobreescribir el evento "searchbutton", solo necesitas registrar un función 'callback' para este evento.

En la mayoría de los casos lo que querrás sera añadir una función al evento con `document.addEventListener` justo después de que PhoneGap dispara `deviceready`

Plataformas Soportadas
----------------------

- Android

Ejemplo Rápido
--------------

    document.addEventListener("searchbutton", onSearchKeyDown, false);

    function onSearchKeyDown() {
        // Maneja el evento del botón search
    }

Ejemplo Completo
----------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Ejemplo de Events</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Llama a onDeviceReady cuando PhoneGap se inicie
        //
        // En este momento, el documento esta cargado pero phonegap-1.0.0.js aun no.
        // Cuando PhoneGap esta listo y se comunica con el dispositivo nativo
        // se lanzara el evento `deviceready`.
        // 
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap esta listo y ahora ya se pueden hacer llamadas a PhoneGap
        //
        function onDeviceReady() {
            // Registra una función 'callback' al evento.
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
        
        // Maneja el evento del botón search
        //
        function onSearchKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
