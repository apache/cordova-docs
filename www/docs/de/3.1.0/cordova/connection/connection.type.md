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

Prüft die aktive Netzwerkverbindung.

## Beschreibung

Diese Eigenschaft bietet eine schnelle Möglichkeit, um den Netzwerkverbindungsstatus und die Art der Verbindung zu bestimmen.

## Unterstützte Plattformen

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Schnelles Beispiel

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
    

## Vollständiges Beispiel

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
    

## API Änderung

Bis Cordova 2.3.0 wurde auf das `Connection` Objekt über `navigator.network.connection` zugegriffen, danach wurde der Zugriff auf `navigator.connection` geändert, um der W3C-Spezifikation zu entsprechen. Es steht immer noch an seiner ursprünglichen Stelle, aber ist veraltet und wird schliesslich entfernt.

## iOS Macken

*   iOS kann den Verbindungstyp des Mobilfunknetzes nicht erkennen. 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Windows Phone Macken

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone kann den Verbindungstyp des Mobilfunknetzes nicht erkennen.
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Tizen Macken

*   Tizen kann nur eine Wi-Fi- oder Mobilfunkverbindung erkennen. 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.