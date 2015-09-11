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

# <a href="splashscreen.html">SplashScreen</a>.Hide

Despedir a la splash screen.

    navigator.splashscreen.hide();
    

## Descripción

Este método despide la pantalla de la aplicación.

## Plataformas soportadas

*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    navigator.splashscreen.hide();
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
      </body>
    </html>
    

## iOS chanfle

Ajuste de `AutoHide<a href="splashscreen.html">SplashScreen</a>` del archivo `config.xml` debe ser `false`. Para retrasar oculta la pantalla splash durante dos segundos, agregue un temporizador como el siguiente en el controlador de eventos `<a href="../events/events.deviceready.html">deviceready</a>`:

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);