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

# device.model

Retourne le nom du modèle de l'appareil.

    var string = device.model;
    

## Description

L'objet `device.model` retourne le nom du modèle de l'appareil/produit. Cette valeur est définie par le fabricant du périphérique et peut varier entre les différentes versions d'un même produit.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // Android : pour un Nexus One, la valeur retournée est "Passion" (le nom de code du Nexus One)
    // pour un Motorola Droid, la valeur retournée est "voles"
    // BlackBerry : pour un Torch 9800, la valeur retournée est "9800"
    // iOS : pour un iPad Mini et un iPhone 5, les valeurs retournées sont "iPad2,5" et "iPhone 5,1" respectivement. Voir http://theiphonewiki.com/wiki/index.php?title=Models
    //
    var model = device.model;
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## Notes au sujet d'Android

*   Retourne le [nom du produit][1] au lieu du [nom du modèle][2], ce qui équivaut souvent au nom de code de production. Par exemple, `Passion` pour le Nexus One et `voles` pour le Motorola Droid.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Notes au sujet de Paciarelli

*   Retourne le modèle du dispositif, assigné par le vendeur, par exemple `TIZEN`

## Notes au sujet de Windows Phone 7 et 8

*   Retourne le modèle de l'appareil spécifié par le fabricant. Par exemple `SGH-i917` pour le Samsung Focus.