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

# offline

El evento se desencadena cuando una aplicación está desconectada, y el dispositivo no está conectado a Internet.

    document.addEventListener("offline", yourCallbackFunction, false);
    

## Detalles

El evento `offline` se desencadena cuando un dispositivo conectado previamente pierde una conexión de red para que una aplicación no puede acceder a Internet. Se basa en la misma información que la API de conexión y se desencadena cuando el `connection.type` cambia de `ninguno` a cualquier otro valor.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Tizen
*   Windows 8

## Ejemplo rápido

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
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
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS rarezas

Durante el arranque inicial, el primer evento offline (si es aplicable) tarda al menos un segundo en fuego.

## Windows Phone 7 rarezas

Cuando se ejecuta en el emulador, la `connection.status` siempre es desconocido, así que este evento no se ** fuego.

## Windows Phone 8 rarezas

El emulador informa el tipo de conexión como `celular`, que no cambia, así que el evento *no se* fuego.