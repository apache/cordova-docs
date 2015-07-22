---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# batterystatus

El evento se desencadena cuando hay un cambio en el estado de la batería.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## Detalles

Este evento se desencadena cuando cambia el porcentaje de carga de la batería en menos de 1 por ciento, o si el aparato está enchufado o desenchufado.

El controlador del estado de batería se pasa un objeto que contiene dos propiedades:

*   **nivel**: el porcentaje de carga de la batería (0-100). *(Número)*

*   **isPlugged**: un valor booleano que indica si el dispositivo está conectado pulg *(Boolean)*

Las aplicaciones normalmente deben utilizar `window.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Windows Phone 7 y 8
*   Tizen

## Windows Phone 7 y 8 rarezas

Windows Phone 7 no proporciona una API nativa para determinar el nivel de batería, lo que `level` no está disponible. El `isPlugged` parámetro *es* apoyado.

## Ejemplo rápido

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>