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

# splashscreen.Hide

Fait disparaître l'écran de démarrage.

    navigator.splashscreen.hide();
    

## Description

Cette méthode fait disparaître l'écran de démarrage de l'application.

## Plates-formes prises en charge

*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    navigator.splashscreen.hide();
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>
    

## Spécificités iOS

Le paramètre `AutoHideSplashScreen</code du fichier <code>config.xml` doit être réglé à `false` . Pour retarder la disparition de l'écran de démarrage de deux secondes, ajoute un minuteur comme ci-dessous dans le gestionnaire d'événements `deviceready` :

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);