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

Controlla la connessione di rete attualmente attiva.

## Descrizione

Questa proprietà offre un modo rapido per determinare stato della connessione di rete del dispositivo e il tipo di connessione.

## Piattaforme supportate

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

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
    

## Esempio completo

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
    

## Cambiamento di API

Fino a Cordova 2.3.0, il `Connection` oggetto era accessibile tramite `navigator.network.connection` , dopo che è stato cambiato in `navigator.connection` per abbinare la specifica W3C. È ancora disponibile nella sua posizione originale, ma è obsoleto e verrà rimosso alla fine.

## iOS stranezze

*   iOS non è possibile rilevare il tipo di connessione di rete cellulare. 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Stranezze di Windows Phone

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone non riesce a rilevare il tipo di connessione di rete cellulare.
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Tizen stranezze

*   Tizen può rilevare solo un WiFi o una connessione cellulare. 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.