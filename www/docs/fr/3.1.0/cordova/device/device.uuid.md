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

# device.uuid

Retourne l'Identifiant Unique Universel de l'appareil ([UUID][1]).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## Description

La façon dont est généré l'UUID est déterminée par le fabricant et est spécifique à la plate-forme ou le modèle de l'appareil.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // Android : retourne un nombre entier 64-bit aléatoire (sous la forme d'une chaîne de caractères, encore !)
    // Ce nombre entier est généré lors du premier démarrage de l'appareil
    //
    // BlackBerry : retourne le numéro PIN de l'appareil
    // Il s'agit d'un nombre entier unique à neuf chiffres (sous la forme d'une chaîne de caractères cependant !)
    //
    // iPhone : (copié depuis la documentation de la classe UIDevice)
    // Retourne une chaîne de caractères générée à partir de plusieurs caractéristiques matérielles.
    // Il est garanti unique pour chaque appareil et ne peut être lié
    // à un compte utilisateur.
    // Windows Phone 7 : retourne un hashage généré à partir de appareil+utilisateur actuel,
    // si aucun utilisateur n'est défini, un guid est généré persistera jusqu'à ce que l'application soit désinstallée
    // Tizen : retourne le numéro IMEI (International Mobile Equipment Identity) de l'appareil, ce numéro est
    // unique pour chaque téléphone GSM et UMTS.
    var deviceID = device.uuid;
    

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
    

## Notes au sujet d'iOS

Sur iOS, l'`uuid` n'est pas propre à un appareil mais varie pour chaque application et pour chaque installation d'une même application. Il changera ainsi si une application est supprimée puis réinstallée, et éventuellement aussi lorsqu'iOS est mis à jour ; ou même lorsque l'application est mise à jour (notamment sous iOS 5.1). Par conséquent, l'`uuid` n'est pas considéré comme fiable.

## Notes au sujet de Windows Phone 7 et 8

Sous Windows Phone 7, l'autorisation `ID_CAP_IDENTITY_DEVICE` est requise afin d'accéder à l'`uuid`. Microsoft va probablement bientôt rendre cette propriété obsolète. Si la fonctionnalité n'est pas accessible, un guid persistant (maintenu pendant toute la durée de l'installation de l'application sur l'appareil) est généré.