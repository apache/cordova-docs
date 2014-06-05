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

# notification.vibrate

Vibra el dispositivo para la cantidad de tiempo especificada.

    navigator.notification.vibrate(milliseconds)
    

*   **time**: milisegundos a vibrar el dispositivo, donde 1000 milisegundos es igual a 1 segundo. *(Número)*

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8

## Ejemplo rápido

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## iOS rarezas

*   **time**: ignora el tiempo especificado y vibra por un tiempo preestablecido.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored
        

## BB10 rarezas

vibre la función de objeto navigator

        navigator.vibrate(1000);  // vibrate for 1 second