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

# notification.prompt

Muestra un cuadro de diálogo pronto personalizables.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **mensaje**: mensaje de diálogo. *(String)*

*   **promptCallback**: devolución de llamada que invocar cuando se presiona un botón. *(Función)*

*   **título**: título *(String)* (opcional, por defecto de diálogo`Prompt`)

*   **buttonLabels**: matriz de cadenas especificando botón etiquetas *(Array)* (opcional, por defecto`["OK","Cancel"]`)

*   **defaultText**: valor de la entrada predeterminada textbox ( `String` ) (opcional, por defecto: cadena vacía)

## Descripción

El método `notification.prompt` muestra un cuadro de diálogo nativa que es más personalizable que función de `símbolo del sistema` del navegador.

## promptCallback

El `promptCallback` se ejecuta cuando el usuario presiona uno de los botones en el cuadro de diálogo pronto. El objeto de `resultados` pasado a la devolución de llamada contiene las siguientes propiedades:

*   **buttonIndex**: el índice del botón presionado. *(Número)* Observe que el índice utiliza indexación basada en uno, entonces el valor es `1` , `2` , `3` , etc..

*   **INPUT1**: el texto introducido en el cuadro de diálogo pronto. *(String)*

## Plataformas soportadas

*   Android
*   iOS

## Ejemplo rápido

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
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
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## Rarezas Android

*   Android soporta un máximo de tres botones e ignora nada más.

*   En Android 3.0 y posteriores, los botones aparecen en orden inverso para dispositivos que utilizan el tema Holo.