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

# notification.alert

Muestra un cuadro de alerta o diálogo personalizado.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **message**: mensaje de diálogo. *(String)*

*   **alertCallback**: Callback para invocar al diálogo de alerta es desestimada. *(Función)*

*   **título**: título de diálogo. *(String)* (Opcional, por defecto`Alert`)

*   **buttonName**: nombre del botón. *(String)* (Opcional, por defecto`OK`)

## Descripción

La mayoría de las implementaciones de Cordova utilizan un cuadro de diálogo nativa para esta característica, pero algunas plataformas de utilizan la función de `alert` del navegador, que es típicamente menos personalizable.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

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
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Windows Phone 7 y 8 rarezas

*   No hay ninguna alerta del navegador integrado, pero puede enlazar uno proceda a llamar `alert()` en el ámbito global:
    
        window.alert = navigator.notification.alert;
        

*   `alert` y `confirm` son non-blocking llamadas, cuyos resultados sólo están disponibles de forma asincrónica.