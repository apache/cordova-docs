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

deviceready
===========

Este evento se dispara cuando PhoneGap esta completamente listo.

    document.addEventListener("deviceready", yourCallbackFunction, false);

Detalles
--------

Este evento es muy importante y todas las aplicaciones deben usarlo.

PhoneGap consiste en dos partes de código, la parte nativa y la JavaScript. Mientras el código nativo esta cargando, se muestra una imagen personalizada. En cambio, JavaScript solo se inicia cuando el DOM carga. Por tanto si no usamos este evento su aplicación podría, potencialmente, llamar a funciones PhoneGap antes de que PhoneGap este listo para usarse.

El evento `deviceready` se dispara una vez PhoneGap este totalmente iniciado. Después de este evento, ya puedes hacer llamadas a las funciones de PhoneGap de una forma segura.

En la mayoría de los casos solo necesitaras enlazar una función al evento con `document.addEventListener` justo después de que el árbol DOM se halla cargado.


Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Ahora es seguro utilizar la API PhoneGap
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
            // Ahora es seguro usar la API PhoneGap
        }

        </script>
      </head>
      <body>
      </body>
    </html>
    
Peculiaridades BlackBerry (OS 4.6)
----------------------------------

Los Eventos personalizados no estan soportados por el componente "RIM BrowserField" (el webviewer del sistema RIM), por lo que el evento `deviceready` nunca sera disparado.

Un aproximación similar seria consultar manualmente la variable `PhoneGap.available` hasta que PhoneGap indique que fue totalmente iniciado.

    function onLoad() {
        // El navegador de BlackBerry OS 4 no soporta eventos,
        // entonces esperaremos hasta que PhoneGap este disponible.
        //
        var intervalID = window.setInterval(
          function() {
              if (PhoneGap.available) {
                  window.clearInterval(intervalID);
                  onDeviceReady();
              }
          },
          500
        );
    }

    function onDeviceReady() {
        // Ahora es seguro usar la API PhoneGap
    }
