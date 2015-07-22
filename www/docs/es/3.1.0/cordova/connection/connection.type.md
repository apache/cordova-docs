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

# connection.type

Comprueba la conexión de red activa.

## Descripción

Esta propiedad ofrece una forma rápida de determinar el estado de conexión de red del dispositivo y el tipo de conexión.

## Plataformas soportadas

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function checkConnection() {
        var networkState = navigator.connection.type;
    
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
    
        alert('Connection type: ' + states[networkState]);
    }
    
    checkConnection();
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.connection.type Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            checkConnection();
        }
    
            function checkConnection() {
                var networkState = navigator.connection.type;
    
                var states = {};
                states[Connection.UNKNOWN]  = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI]     = 'WiFi connection';
                states[Connection.CELL_2G]  = 'Cell 2G connection';
                states[Connection.CELL_3G]  = 'Cell 3G connection';
                states[Connection.CELL_4G]  = 'Cell 4G connection';
                states[Connection.CELL]     = 'Cell generic connection';
                states[Connection.NONE]     = 'No network connection';
    
                alert('Connection type: ' + states[networkState]);
            }
    
        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>
    

## Cambio de API

Hasta Cordova 2.3.0, el objeto de `conexión` era acceder a través de `navigator.network.connection`, tras lo cual fue cambiada a `navigator.connection` para que coincida con la especificación del W3C. Sigue estando disponible en su ubicación original, pero es obsoleto y eventualmente desaparecerá.

## iOS rarezas

*   iOS no puede detectar el tipo de conexión de red celular. 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Windows Phone rarezas

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone no puede detectar el tipo de conexión de red celular.
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Rarezas Tizen

*   Tizen sólo puede detectar un Wi-Fi o conexión celular. 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.