---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

device.name
===========

Récupère le nom de modèle du mobile.

    var string = device.name;
    
Description
-----------

`device.name` retourne le nom du modèle du mobile ou du produit. Cette valeur est renseignée par le constructeur et peut différer d'une version à une autre d'un même produit.

Plateformes supportées
----------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Android:    Nexus One       retourne "Passion" (nom de code de Nexus One)
    //             Motorola Droid  retourne "voles"
    // BlackBerry: Bold 8900       retourne "8900"
    // iOS:        Tous modèles    retourne le nom défini via iTunes, par exemple "iPhone de Joe"
    //
    var name = device.name;

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Device</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                                'Device PhoneGap: ' + device.phonegap + '<br />' + 
                                'Device Platform: ' + device.platform + '<br />' + 
                                'Device UUID: '     + device.uuid     + '<br />' + 
                                'Device Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Chargement des propriétés du mobile...</p>
      </body>
    </html>


Singularités Android
--------------------

- Récupère le nom de produit [product](http://developer.android.com/reference/android/os/Build.html#PRODUCT) au lieu du nom de modèle [model](http://developer.android.com/reference/android/os/Build.html#MODEL).
    - Le nom de produit correspond souvent au nom de code donné au modèle lors de sa production.
    - Par exemple Nexus One retourne "Passion", Motorola Droid retourne "voles"

Singularités iOS
----------------

- Récupère le nom du mobile [name](http://developer.apple.com/library/ios/#documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW13) au lieu du nom de modèle [model](http://developer.apple.com/library/ios/#documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW1).
    - Le nom du mobile est défini par son propriétaire via iTunes.
    - Par exemple "iPhone de Joe"