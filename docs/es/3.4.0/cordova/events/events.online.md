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

# online

Este evento se desencadena cuando una aplicación va en línea, y el dispositivo se conecta a Internet.

    document.addEventListener("online", yourCallbackFunction, false);
    

## Detalles

El evento `online` se desencadena cuando un dispositivo previamente inconexos recibe una conexión de red para permitir un acceso a las aplicaciones para Internet. Se basa en la misma información que la API de conexión y fuegos cuando el valor de `connection.type` se convierte en `NONE`.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Tizen
*   Windows 8

## Ejemplo rápido

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS rarezas

Durante el arranque inicial, el primer evento `en línea` (si procede) al menos toma un segundo para disparar, antes de que `connection.type` es `desconocido`.

## Windows Phone 7 rarezas

Cuando se ejecuta en el emulador, la `connection.status` siempre es desconocido, así que este evento *no* es fuego.

## Windows Phone 8 rarezas

El emulador informa el tipo de conexión como `Cellular`, que no cambia, así que eventos *no* fuego.