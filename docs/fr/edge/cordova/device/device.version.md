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

# device.version

Retourne la version du système d'exploitation de l'appareil.

    var string = device.version;
    

## Plates-formes supportées

*   Android 2.1+
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // Android : Froyo OS renvoie "2.2"
    // Eclair OS renvoie "2.1", "2.0.1", ou "2.0"
    // Peut également renvoyer par exemple "2.1-update1"
    //
    // BlackBerry : Torch 9800 sous OS 6.0 renvoie "6.0.0.600"
    //
    // iPhone : iOS 3.2 renvoie "3.2"
    //
    // Windows Phone 7 : renvoie la version actuelle de l'OS, par exemple on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

## Exemple complet

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