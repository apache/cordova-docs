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

Preveri trenutno dejanje omrežje vez.

## Opis

Ta lastnost ponuja hiter način za določitev naprave stanje omrežne povezave, in vrsto povezave.

## Podprte platforme

*   iOS
*   Android
*   BlackBerry WebWorks 5.0 +
*   Tizen
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

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
    

## Celoten primer

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
    

## API sprememb

Do Cordova 2.3.0, bo `Connection` predmet je dostopen prek `navigator.network.connection` , po kateri was sprememba v `navigator.connection` ustreza specifikaciji W3C. Še vedno na voljo na prvotno mesto, vendar je zastarela in bo sčasoma odstrani.

## iOS Quirks

*   iOS ne zazna vrsto cellular omrežje vez. 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Windows Phone Quirks

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone ne zazna vrsto cellular omrežje vez.
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Tizen Quirks

*   Tizen lahko le zazna WiFi ali celične povezave. 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.