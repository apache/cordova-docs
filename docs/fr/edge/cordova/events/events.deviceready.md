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

L'événement se déclenche lorsque Cordova est entièrement chargé.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Détails

Cet événement est essentiel pour n'importe quelle application. Il signale que dispositif de Cordova API ont chargé et êtes prêt à accéder.

Cordova est constitué de deux bases de code : native et JavaScript. Alors que le code natif des charges, une image de chargement personnalisé s'affiche. Toutefois, JavaScript charge uniquement une fois que le DOM charge. Cela signifie que votre application web peut potentiellement appeler une fonction Cordova JavaScript, avant que le code natif correspondant est disponible.

Le `deviceready` événement se déclenche une fois pleinement chargé Cordova. Une fois l'événement se déclenche, vous pouvez en toute sécurité faire appels à Cordova APIs. Les applications en général attachent un écouteur d'événements avec `document.addEventListener` une fois chargé DOM du document HTML.

Le `deviceready` événement se comporte de manière un peu différente des autres. Tout gestionnaire d'événements enregistré après le `deviceready` événement se déclenche a sa fonction de rappel appelée immédiatement.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

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