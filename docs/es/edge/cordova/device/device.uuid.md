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

# device.uuid

Obtener identificador universalmente única del dispositivo ([UUID][1]).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## Descripción

Los detalles de cómo se genera un UUID son determinados por el fabricante del dispositivo y son específicos a la plataforma del dispositivo o modelo.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // Android: devuelve un entero de 64 bits al azar (como una cadena, otra vez!) 
    // el entero es generado en el primer arranque del dispositivo 
    // 
    // BlackBerry: devuelve el número PIN del dispositivo 
    // este es un entero único de nueve dígitos (como una cadena, aunque!) 
    // 
    // iPhone: (parafraseado de la documentación de la clase UIDevice) 
    // devuelve una cadena de valores hash creado a partir 
    //  de múltiples hardware identifica.
    // Está garantizado para ser único para cada dispositivo y no puede ser atado 
    // a la cuenta de usuario.
    // Windows Phone 7: devuelve un hash de dispositivo + usuario actual, 
    // si el usuario no está definido, un guid generado y persistirá hasta que se desinstala la aplicación 
    // 
    // Tizen: devuelve el dispositivo IMEI (identidad de equipo móvil internacional o IMEI es un número 
    // único para cada teléfono móvil GSM y UMTS.
    var deviceID = device.uuid;
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS chanfle

El `uuid` en iOS no es exclusiva de un dispositivo, pero varía para cada aplicación, para cada instalación. Cambia si borrar y volver a instalar la aplicación, y posiblemente también cuándo actualizar iOS, o incluso actualizar su aplicación por versión (evidente en iOS 5.1). El `uuid` no es un valor confiable.

## Windows Phone 7 y 8 rarezas

El `uuid` para Windows Phone 7 requiere el permiso `ID_CAP_IDENTITY_DEVICE`. Microsoft pronto probablemente desaprueban esta propiedad. Si la capacidad no está disponible, la aplicación genera un guid persistente que se mantiene durante la duración de la instalación de la aplicación en el dispositivo.