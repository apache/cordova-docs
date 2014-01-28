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

# pause

El evento se desencadena cuando una aplicación se coloca en el fondo.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Detalles

El evento de `pause` se desencadena cuando la plataforma nativa pone la aplicación en el fondo, normalmente cuando el usuario cambia a otra aplicación.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Amazon fuego OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
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
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS rarezas

En el `pause` controlador, todas las llamadas a la API de Córdoba o plugins nativos que atraviesan Objective-C no funciona, junto con cualquier llamadas interactivas, tales como alertas o `console.log()` . Sólo son procesados cuando se reanuda la aplicación, en el siguiente bucle ejecución.

El evento específico de iOS `resign` está disponible como una alternativa para hacer una` pause` y detecta cuando los usuarios activar el botón de **Lock** bloquear el dispositivo con la aplicación que se ejecuta en primer plano. Si la aplicación (y dispositivo) está habilitados para multitarea, esto está emparejado con un evento posterior `pause`, pero sólo bajo iOS 5. En efecto, todas las apps bloqueadas en iOS 5 que tienen habilitado multi-tasking son empujadas al fondo. Para que aplicaciones seguirá corriendo cuando encerrado bajo iOS 5, deshabilitar multi-tasking de la aplicación estableciendo [UIApplicationExitsOnSuspend][1] a `YES`. Debe ejecutar cuando se trabó en iOS 4, que esta configuración no importa.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html