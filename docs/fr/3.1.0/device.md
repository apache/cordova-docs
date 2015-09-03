---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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


# Appareil

> L'objet `device` décrit les caractéristiques matérielles et logicielles de l'appareil.

## Propriétés

*   device.model
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.name

## Portée des variables

Étant donné que `device` est affecté à l'object `window`, il s'agit donc implicitement d'une variable globale.

    // These reference the same `device`
    var phoneModel = window.device.model;
    var phoneModel = device.model;
    

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add org.apache.cordova.device
        $ cordova plugin ls
        [ 'org.apache.cordova.device' ]
        $ cordova plugin rm org.apache.cordova.device
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.Device" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Device">
            <param name="blackberry-package" value="org.apache.cordova.device.Device" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app" required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>read_device_identifying_information</rim:permit>
        </rim:permissions>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
            <Capability Name="ID_CAP_IDENTITY_DEVICE" />
            <Capability Name="ID_CAP_IDENTITY_USER" />
        </Capabilities>
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

*   Paciarelli (dans`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Référence : [manifeste d'Application pour l'Application Web paciarelli][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

Renvoie le nom du modèle de l'appareil.

    var string = device.name;
    

## Description

`device.name` retourne le nom du modèle de l'appareil ou du produit. Cette valeur est définie par le fabricant du périphérique et peut varier entre les différentes versions d'un même produit.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

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
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
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

## Notes au sujet de Windows Phone 7 et 8

*   Retourne le modèle du périphérique spécifié par le fabricant. Par exemple `SGH-i917` pour le Samsung Focus.

## Notes au sujet de Paciarelli

*   Retourne le modèle du dispositif, assigné par le vendeur, par exemple `TIZEN`


# device.cordova

Retourne la version de Cordova en cours d'exécution sur l'appareil.

    var string = device.cordova;
    

## Description

`device.cordova` retourne la version de Cordova en cours d'exécution sur le périphérique.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    var name = device.cordova;
    

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


# device.platform

Retourne le nom du système d'exploitation de l'appareil.

    var string = device.platform;
    

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

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
    

## Notes au sujet de BlackBerry

Le numéro de version de plate-forme de l'appareil peut être retourné au lieu du nom de la plate-forme. Par exemple `2.13.0.95` pour le Storm2 9550.

## Notes au sujet de Windows Phone 7

Le nom de plate-forme retourné pour les appareils sous Windows Phone 7 est `WinCE`.

## Notes au sujet de Windows Phone 8

Le nom de plate-forme retourné pour les appareils sous Windows Phone 8 est `Win32NT`.


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


# device.version

Retourne la version du système d'exploitation de l'appareil.

    var string = device.version;
    

## Plates-formes supportées

*   Android 2.1+
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // Android : Froyo OS renvoie "2.2"
    // Eclair OS renvoie "2.1", "2.0.1", ou "2.0"
    // Peut également renvoyer par exemple "2.1-update1"
    //
    // BlackBerry : Torch 9800 sous OS 6.0 renvoie "6.0.0.600"
    //
    // iPhone : iOS 3.2 renvoie "3.2"
    //
    // Windows Phone 7 : renvoie la version actuelle de l'OS, par exemple on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

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
