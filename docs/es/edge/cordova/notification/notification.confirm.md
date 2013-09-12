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

# notification.confirm

Muestra un cuadro de diálogo de confirmación personalizables.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **mensaje**: mensaje de diálogo. *(String)*

*   **confirmCallback**: Callback para invocar con índice del botón pulsado (1, 2 ó 3) o cuando el cuadro de diálogo es despedido sin la presión del botón (0). *(Función)*

*   **título**: título de diálogo. *(String)* (Opcional, por defecto`Confirm`)

*   **buttonLabels**: matriz de cadenas especificando las etiquetas de botón. *(Matriz)* (Opcional, por defecto [`OK, cancelar`])

## Descripción

El método `notification.confirm` muestra un cuadro de diálogo nativa que es más personalizable que función `confirmar` del navegador.

## confirmCallback

El `confirmCallback` se ejecuta cuando el usuario presiona uno de los botones en el cuadro de diálogo de confirmación.

La devolución de llamada toma el argumento `buttonIndex` *(número)*, que es el índice del botón presionado. Tenga en cuenta que el índice utiliza uno basado en la indexación, así que el valor es `1`, `2`, `3`, etc..

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

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
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7 y 8 rarezas

*   No hay ninguna función de navegador incorporado para `window.confirm`, pero lo puede enlazar mediante la asignación:
    
        window.confirm = navigator.notification.confirm;
        

*   Llamadas de `alert` y `confirm` son non-blocking, así que el resultado sólo está disponible de forma asincrónica.