---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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


# Notificación

> Notificaciones de dispositivo audible, visual y táctil.

## Métodos

*   `notification.alert`
*   `notification.confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   (en iOS`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


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


# notification.beep

El dispositivo reproduce un sonido sonido.

    navigator.notification.beep(times);
    

*   **times**: el número de veces a repetir la señal. *(Número)*

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8

## Ejemplo rápido

    // Beep twice!
    navigator.notification.beep(2);
    

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
    

## Rarezas Android

*   Android juega el **tono de notificación** especificados en el panel **ajustes de sonido y pantalla** por defecto.

## Windows Phone 7 y 8 rarezas

*   Se basa en un archivo de sonido genérico de la distribución de Cordova.

## Rarezas Tizen

*   Tizen implementa pitidos por reproducir un archivo de audio a través de los medios de comunicación API.

*   El archivo de sonido debe ser corto, debe estar ubicado en un `sounds` subdirectorio del directorio raíz de la aplicación y deben ser nombrados`beep.wav`.


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
