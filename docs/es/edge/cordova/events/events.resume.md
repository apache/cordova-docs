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

# resume

El evento se desencadena cuando una aplicación se recupera desde el fondo.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Detalles

El evento `resume` se desencadena cuando la plataforma nativa saca la aplicación del fondo.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Amazon fuego OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
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
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS rarezas

Cualquier función interactiva llamado desde un controlador de eventos de `pausa` después ejecuta cuando se reanuda la aplicación, indicada por el evento `resume`. Estos incluyen alertas, `console.log()` y ninguna llamada de plugins o la API de Cordova, que pasan a través de Objective-C.

*   evento **active**
    
    El evento específico de iOS `active` está disponible como una alternativa para `resume` y detecta cuando los usuarios desactivan el botón de **Lock** para desbloquear el dispositivo con la aplicación que se ejecuta en primer plano. Si la aplicación (y dispositivo) está habilitados para multitarea, esto está emparejado con un evento posterior `resume`, pero sólo bajo iOS 5. En efecto, todas las apps bloqueadas en iOS 5 que tienen habilitado multi-tasking son empujadas al fondo. Para que aplicaciones seguirá corriendo cuando encerrado bajo iOS 5, deshabilitar multi-tasking de la aplicación estableciendo [UIApplicationExitsOnSuspend][1] a `YES`. Debe ejecutar cuando se trabó en iOS 4, que esta configuración no importa.

*   evento **resume**
    
    Cuando se llama desde un controlador de eventos de `resume`, funciones interactivas como `alert()` necesitan ser envuelto en una llamada `setTimeout()` con un valor de timeout de cero, o si la aplicación se bloquea. Por ejemplo:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html