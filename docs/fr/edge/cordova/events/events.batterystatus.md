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

L'événement se déclenche lorsqu'il y a un changement dans l'état de la batterie.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## Détails

Cet événement se déclenche lorsque le pourcentage de charge de la batterie passe au moins 1 %, ou si l'appareil est branché ou débranché.

Le gestionnaire d'état de batterie est passée à un objet qui contient deux propriétés :

*   **niveau**: le pourcentage de charge de la batterie (0-100). *(Nombre)*

*   **isPlugged**: valeur booléenne qui indique si l'appareil n'est branché *(Boolean)*

Les applications doivent généralement utiliser `window.addEventListener` pour attacher un écouteur d'événements une fois le `deviceready` événement se déclenche.

## Plates-formes prises en charge

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   Windows Phone 7 et 8
*   Paciarelli

## Windows Phone 7 et 8 Quirks

Windows Phone 7 ne fournit pas d'API natives pour déterminer le niveau de la batterie, donc le `level` propriété n'est pas disponible. Le `isPlugged` paramètre *est* pris en charge.

## Petit exemple

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