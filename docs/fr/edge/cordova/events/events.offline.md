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

# offline

L'évènement se déclenche lorsqu'une application se déconnecte, quand l'appareil n'est pas connecté à Internet.

    document.addEventListener("offline", yourCallbackFunction, false);
    

## Détails

L'évènement `offline` se déclenche lorsqu'un appareil précédemment connecté perd sa connexion au réseau, empêchant ainsi l'application d'accéder à Internet. Il repose sur les mêmes informations que l'API Connection et se déclenche quand `connection.type` passe de `NONE` à une autre valeur.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Paciarelli
*   Windows 8

## Exemple court

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
    

## Notes au sujet d'iOS

Lors du démarrage initial, le déclenchement du premier évènement offline (si applicable) prend au moins une seconde.

## Notes au sujet de Windows Phone 7

Lorsque l'application est exécutée dans l'émulateur, la valeur de la propriété `connection.status` est toujours inconnue, ainsi cet évènement n'est *pas* déclenché.

## Notes au sujet de Windows Phone 8

L'émulateur signale le type de connexion comme `Cellular`, type qui ne change jamais, ainsi l'évènement n'est *pas* déclenché.