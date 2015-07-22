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

# batterylow

El evento se desencadena cuando la batería ha alcanzado el umbral de bajo nivel.

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## Detalles

El evento se desencadena cuando el porcentaje de carga de la batería ha alcanzado el umbral de batería baja, el valor específico del dispositivo.

El controlador de `batterylow` se pasa un objeto que contiene dos propiedades:

*   **nivel**: el porcentaje de carga de la batería (0-100). *(Número)*

*   **isPlugged**: un valor booleano que indica si el dispositivo está conectado pulg *(Boolean)*

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Tizen

## Ejemplo rápido

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
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
            window.addEventListener("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>