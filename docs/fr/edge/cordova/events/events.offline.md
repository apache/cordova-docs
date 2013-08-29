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

# en mode hors connexion

L'événement se déclenche lorsqu'une application se déconnecte, et l'appareil n'est pas connecté à Internet.

    document.addEventListener("offline", yourCallbackFunction, false);
    

## Détails

Le `offline` événement se déclenche lorsqu'un appareil connecté précédemment perd une connexion réseau afin qu'une application ne peut plus accéder l'Internet. Il s'appuie sur les mêmes informations que l'API de connexion et se déclenche quand le `connection.type` passe de `NONE` à une autre valeur.

Les applications doivent généralement utiliser `document.addEventListener` pour attacher un écouteur d'événements une fois le `deviceready` événement se déclenche.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Paciarelli
*   Windows 8

## Petit exemple

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Quirks

Durant le démarrage initial, le premier événement en mode hors connexion (si applicable) prend au moins une seconde au feu.

## Windows Phone 7 Quirks

Lors de l'exécution dans l'émulateur, le `connection.status` est toujours inconnue, ainsi cet événement ne fait *pas* de feu.

## Windows Phone 8 Quirks

L'émulateur signale le type de connexion comme `Cellular` , qui ne change pas, ainsi l'événement ne fait *pas* de feu.