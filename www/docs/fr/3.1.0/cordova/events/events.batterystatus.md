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

# batterystatus

L'évènement se déclenche lorsque l'état de la batterie évolue.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## Détails

L'évènement se déclenche lorsque le taux de charge de la batterie gagne ou perd au moins un pourcent, ou quand l'appareil est branché ou débranché.

Le gestionnaire est appelé avec un objet contenant deux propriétés :

*   **level** : le taux de charge de la batterie (0-100). *(Number)*

*   **isPlugged** : un booléen indiquant si l'appareil est en cours de chargement ou non. *(Boolean)*

Les applications devraient en général utiliser `window.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   Windows Phone 7 et 8
*   Paciarelli

## Notes au sujet de Windows Phone 7 et 8

Windows Phone 7 ne fournit pas d'API native pour déterminer le niveau de la batterie, de ce fait la propriété `level` n'est pas disponible. La propriété `isPlugged` *est* quant à elle prise en charge.

## Exemple court

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>