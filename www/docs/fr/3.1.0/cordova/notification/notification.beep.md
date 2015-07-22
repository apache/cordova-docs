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

# notification.Beep

Le dispositif joue un bip sonore.

    navigator.notification.beep(times);
    

*   **temps**: le nombre de fois de répéter le signal sonore. *(Nombre)*

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8

## Petit exemple

    // Beep twice!
    navigator.notification.beep(2);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## Bizarreries Android

*   Android joue la **sonnerie de Notification** spécifié sous le panneau des **réglages/son et affichage** de valeur par défaut.

## Windows Phone 7 et 8 Quirks

*   S'appuie sur un fichier générique bip de la distribution de Cordova.

## Bizarreries de paciarelli

*   Paciarelli implémente les bips en lisant un fichier audio via les médias API.

*   Le fichier sonore doit être court, doit se trouver dans un `sounds` sous-répertoire du répertoire racine de l'application et doit être nommé`beep.wav`.