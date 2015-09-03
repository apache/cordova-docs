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


# Dispositivo

> El objeto `device` describe del dispositivo hardware y software.

## Propiedades

*   device.model
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.name

## Ámbito de variable

Puesto que el `device` se asigna al objeto de `window`, es implícitamente en el ámbito global.

    // These reference the same `device`
    var phoneModel = window.device.model;
    var phoneModel = device.model;
    

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.device
        $ cordova plugin ls
        [ 'org.apache.cordova.device' ]
        $ cordova plugin rm org.apache.cordova.device
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.Device" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Device">
            <param name="blackberry-package" value="org.apache.cordova.device.Device" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app" required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>read_device_identifying_information</rim:permit>
        </rim:permissions>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
            <Capability Name="ID_CAP_IDENTITY_DEVICE" />
            <Capability Name="ID_CAP_IDENTITY_USER" />
        </Capabilities>
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

*   Tizen (en`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Referencia: [aplicación manifiesto de aplicación Web Tizen][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

Obtener el nombre del modelo del dispositivo.

    var string = device.name;
    

## Descripción

`device.name` devuelve el nombre de modelo del dispositivo o producto. Este valor es fijado por el fabricante del dispositivo y puede ser diferente a través de versiones del mismo producto.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

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
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
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
    

## Rarezas Android

*   Obtiene el [nombre del producto][1] en lugar del [nombre de la modelo][2], que es a menudo el nombre de código de producción. Por ejemplo, el Nexus One devuelve `Passion` , y devuelve el Motorola Droid`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Windows Phone 7 y 8 rarezas

*   Devuelve el modelo de dispositivo especificado por el fabricante. Por ejemplo, el Samsung Focus devuelve `SGH-i917`.

## Rarezas Tizen

*   Devuelve el modelo de dispositivo asignado por el proveedor, por ejemplo,`TIZEN`


# device.cordova

Obtener la versión de Cordova que se ejecuta en el dispositivo.

    var string = device.cordova;
    

## Descripción

`device.cordova` devuelve la versión de Cordova en el dispositivo.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    var name = device.cordova;
    

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


# device.platform

Obtener el nombre del sistema operativo del dispositivo.

    var string = device.platform;
    

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

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
    

## Rarezas de blackBerry

Dispositivos pueden devolver el número de versión de plataforma de dispositivo en lugar del nombre de la plataforma. Por ejemplo, la Storm2 9550 devuelve un valor como `2.13.0.95`.

## Windows Phone 7 rarezas

Dispositivos Windows Phone 7 informe de la plataforma como `WinCE`.

## Windows Phone 8 rarezas

Dispositivos Windows Phone 8 Informe la plataforma como `Win32NT`.


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


# device.version

Obtener la versión del sistema operativo.

    var string = device.version;
    

## Plataformas soportadas

*   Android 2.1 +
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // Android: Froyo OS volvería "2.2" 
    // Eclair OS volvería "2.1", "2.0.1" o "2.0" 
    // versión puede devolver también actualizar el nivel "2.1-update1" 
    // 
    // BlackBerry: Torch 9800 con OS 6.0 volvería "6.0.0.600" 
    //
    // iPhone: iOS 3.2 devuelve "3.2" 
    //
    // Windows Phone 7: devuelve el número de versión de sistema operativo actual, ex. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

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
