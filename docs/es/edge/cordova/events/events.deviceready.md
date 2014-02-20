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

# deviceready

El evento se desencadena cuando Cordova está completamente cargado.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Detalles

Este evento es esencial para cualquier aplicación. Señales de que dispositivo de Cordova APIs han cargado y están listas para acceder.

Córdoba se compone de dos bases de código: nativo y JavaScript. Mientras se carga el código nativo, muestra una imagen de carga personalizada. Sin embargo, JavaScript sólo carga una vez que el DOM cargas. Esto significa que la aplicación web potencialmente puede llamar a una función Cordova JavaScript antes el código nativo correspondiente esté disponible.

El evento `deviceready` se desencadena una vez Cordova ha cargado completamente. Una vez los fuegos del evento, con seguridad puede hacer llamadas a APIs de Cordova. Aplicaciones típicamente Instale un detector de eventos con `document.addEventListener` una vez que ha cargado el DOM del documento HTML.

El evento `deviceready` se comporta algo diferentemente de otros. Cualquier controlador de eventos registrado después de los fuegos de `deviceready` evento tiene su función de callback llamada inmediatamente.

## Plataformas soportadas

*   Amazon fuego OS
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
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
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>