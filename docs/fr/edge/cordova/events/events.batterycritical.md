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

# batterycritical

L'événement se déclenche lorsque la batterie a atteint le seuil critique.

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## Détails

L'événement se déclenche lorsque le pourcentage de charge de la batterie a atteint le seuil critique de batterie. La valeur est spécifique au périphérique.

Le `batterycritical` est passé au gestionnaire d'un objet qui contient deux propriétés :

*   **niveau**: le pourcentage de charge de la batterie (0-100). *(Nombre)*

*   **isPlugged**: valeur booléenne qui indique si l'appareil n'est branché *(Boolean)*

Les applications doivent généralement utiliser `window.addEventListener` pour attacher un écouteur d'événements une fois le `deviceready` événement se déclenche.

## Plates-formes prises en charge

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   Paciarelli

## Petit exemple

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>
    
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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>