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

Vérifie la connexion réseau en cours d'activité.

## Description

Cette propriété offre un moyen rapide pour déterminer l'état et le type de la connexion réseau de l'appareil.

## Plates-formes supportées

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

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
    

## Exemple complet

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
    

## Changement d'API

Jusqu'à Cordova 2.3.0, l'objet `Connection` était accessible via `navigator.network.connection` ; ceci a été changé pour `navigator.connection` afin de concorder avec la spécification du W3C. L'accès est toujours possible à l'emplacement d'origine, mais est considéré comme obsolète et sera bientôt supprimé.

## Notes au sujet d'iOS

*   iOS ne permet pas de détecter le type de connexion pour un réseau cellulaire. 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Notes au sujet de Windows Phone

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone ne permet pas de détecter le type de connexion pour un réseau cellulaire.
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Notes au sujet de Paciarelli

*   Paciarelli peut uniquement détecter une connexion cellulaire ou bien WiFi. 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.