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

device.uuid
===========

Récupère le Universally Unique Identifier ([UUID](http://fr.wikipedia.org/wiki/Universal_Unique_Identifier)) du mobile.

    var string = device.uuid;
    
Description
-----------

Les détails sur la façon dont un UUID est généré sont déterminés par le fabricant et spécifiques à la plateforme ou au modèle de l'appareil.

Plateformes supportées
----------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Android: Retourne un entier aléatoire de 64 bits (sous forme de chaîne de caractères !)
    //          Cet entier est généré au premier démarrage du mobile.
    //
    // BlackBerry: Retourne le numéro PIN du mobile.
    //             Il s'agit d'un entier unique à neuf chiffres (mais sous forme de chaîne de caractères !)
    //
    // iPhone: (Tiré de la documentation de la classe UIDevice)
    //         Retourne une chaîne de hachage produite à partir de multiples identifiants matériels.
    //         Son unicité est garantie pour chaque mobile et ne peut être liée au compte utilisateur.
    // Windows Phone 7 : Retourne un hachage du mobile+utilisateur,
    // si l'utilisateur n'est pas défini, un GUID est généré et sera conservé jusqu'à ce que l'application soit désinstallée.
    // 
    var deviceID = device.uuid;

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