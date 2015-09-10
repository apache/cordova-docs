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

# device.version

Ottenere la versione del sistema operativo.

    var string = device.version;
    

## Piattaforme supportate

*   Android 2.1 +
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    / / Android: Froyo OS sarebbe tornato "2.2" / / OS Eclair restituirebbe "2.1", "2.0.1" o "2.0" / / versione può restituire anche aggiornare il livello "2.1-update1" / / / / BlackBerry: Torch 9800 con OS 6.0 restituirebbe "6.0.0.600" / / / / iPhone: iOS 3.2 restituisce "3.2" / / / / Windows Phone 7: restituisce il numero di versione corrente del sistema operativo, es. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + <a href="device.model.html">device.model</a>    + '<br />' +
                                'Device Cordova: '  + <a href="device.cordova.html">device.cordova</a>  + '<br />' +
                                'Device Platform: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                'Device UUID: '     + <a href="device.uuid.html">device.uuid</a>     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>