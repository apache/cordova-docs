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

# deviceready

L'évènement se déclenche lorsque Cordova est entièrement chargé.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Détails

Cet évènement est essentiel à n'importe quelle application. Il signale que les API matérielles Cordova ont été chargées et sont prêtes à être utilisées.

Cordova est constitué de deux bases de code : native et JavaScript. Tant que le code natif est en cours de chargement, une image personnalisée est affichée. Cependant, le code JavaScript est chargé seulement lorsque le DOM charge. Cela signifie que l'application web peut potentiellement appeler une fonction Cordova JavaScript avant le code natif correspondant soit disponible.

L'évènement `deviceready` se déclenche quand Cordova est totalement chargé. Une fois cet évènement déclenché, vous pouvez en toute sécurité faire appels aux API Cordova. Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois le DOM du document HTML chargé.

L'évènement `deviceready` se comporte différemment des autres évènements. Tout gestionnaire additionnel enregistré après le déclenchement de `deviceready` est appelé immédiatement.

## Plates-formes supportées

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
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
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>