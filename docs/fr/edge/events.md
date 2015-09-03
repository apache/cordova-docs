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


# Évènements

> Évènements du cycle de vie de Cordova.

## Types d'évènements

*   deviceready
*   pause
*   resume
*   backbutton
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Événements ajoutés par [cordova-plugin-batterie-statut][1]

 [1]: https://github.com/apache/cordova-plugin-battery-status/blob/master/README.md

*   batterycritical
*   batterylow
*   batterystatus

## Événements ajoutés par [cordova-plugin-réseau-informations][2]

 [2]: https://github.com/apache/cordova-plugin-network-information/blob/master/README.md

*   online
*   offline


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
*   Windows Phone 8
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


# pause

L'évènement se déclenche quand une application est mise en arrière-plan.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Détails

L'évènement `pause` se déclenche lorsque la plate-forme native met l'application en arrière-plan, généralement lorsque l'utilisateur bascule vers une autre application.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Exemple court

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
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
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## Notes au sujet d'iOS

Dans un gestionnaire de l'évènement `pause`, tous les appels à l'API Cordova ou vers des plugins natifs passant par l'Objective-C ne fonctionnent pas, de même pour tous les appels interactifs tels que des alertes ou `console.log()`. Ceux-ci sont traités uniquement lorsque l'application revient au premier plan, lors du prochain passage de la boucle d'exécution.

Sous iOS, l'évènement spécifique `resign` est disponible comme alternative à `pause` et détecte quand les utilisateurs pressent le bouton de **verrouillage** pour verrouiller l'appareil avec l'application en cours d'exécution au premier plan. Si l'application (et l'appareil) est prévue pour le multitâche, un évènement `pause` lui est ultérieurement associé, mais seulement sous iOS 5. En réalité, sous iOS 5, toutes les applications verrouillées prévues pour le multitâche sont envoyées à l'arrière-plan. Afin qu'une application puisse continuer à s'exécuter lorsque l'appareil est verrouillé sous iOS 5, il faudra désactiver le multitâche pour celle-ci en réglant [UIApplicationExitsOnSuspend][1] sur `YES`. Sous iOS 4, l'application continuera de s'exécuter même si l'appareil est verrouillé, modifier la valeur de ce paramètre n'a aucun effet.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# resume

L'évènement se déclenche lorsqu'une application est renvoyée au premier plan.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Détails

L'évènement `resume` se déclenche lorsque la plate-forme native sort l'application de l'arrière-plan.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Exemple court

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
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
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## Notes au sujet d'iOS

Toutes les fonctions interactives appelées à partir d'un gestionnaire de l'évènement `pause` s'exécutent plus tard, lorsque l'application est reprise, comme l'évènement `resume` l'indique. Il s'agit notamment d'alertes, `console.log()` et tous les appels vers des plugins ou l'API Cordova passant par l'Objective-C.

*   évènement **active**
    
    Sous iOS, l'évènement spécifique `active` est disponible comme alternative à `resume` et détecte quand les utilisateurs pressent le bouton de **verrouillage** pour déverrouiller l'appareil avec l'application en cours d'exécution au premier plan. Si l'application (et l'appareil) est prévue pour le multitâche, un évènement `resume` lui est ultérieurement associé, mais seulement sous iOS 5. En réalité, sous iOS 5, toutes les applications verrouillées prévues pour le multitâche sont envoyées à l'arrière-plan. Afin qu'une application puisse continuer à s'exécuter lorsque l'appareil est verrouillé sous iOS 5, il faudra désactiver le multitâche pour celle-ci en réglant [UIApplicationExitsOnSuspend][1] sur `YES`. Sous iOS 4, l'application continuera de s'exécuter même si l'appareil est verrouillé, modifier la valeur de ce paramètre n'a aucun effet.

*   évènement **resume**
    
    Si appelées depuis un gestionnaire de l'évènement `resume`, les fonctions interactives telles que `alert()` doivent être enveloppées d'un appel à `setTimeout()` avec un délai de zéro millisecondes, sinon l'application sera bloquée. Par exemple :
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# backbutton

L'évènement se déclenche lorsque l'utilisateur appuie sur le bouton retour.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Détails

Afin de modifier le comportement par défaut du bouton retour, attachez un écouteur pour l'évènement `backbutton` généralement en appelant `document.addEventListener` une fois l'évènement `deviceready` reçu. Il n'est désormais plus nécessaire d'appeler d'autres méthodes pour altérer le comportement du bouton retour.

## Plates-formes supportées

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Windows Phone 8

## Exemple court

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

L'évènement se déclenche lorsque l'utilisateur appuie sur la touche menu.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Détails

Appliquer un gestionnaire d'évènements remplace le comportement par défaut du bouton menu.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   Amazon Fire OS
*   Android
*   BlackBerry 10

## Exemple court

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Exemple complet

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

L'évènement se déclenche lorsque l'utilisateur appuie sur le bouton rechercher sous Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## Détails

Si vous souhaitez modifier le comportement par défaut de bouton rechercher sous Android, vous pouvez enregistrer un écouteur pour l'événement 'searchbutton'.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   Android

## Exemple court

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Exemple complet

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

L'évènement se déclenche lorsque l'utilisateur appuie sur la touche d'appel.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## Détails

Si vous souhaitez modifier le comportement par défaut de la touche d'appel, vous pouvez enregistrer un écouteur pour l'évènement `startcallbutton`.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   BlackBerry 10

## Exemple court

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Exemple complet

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

Cet évènement se déclenche lorsque l'utilisateur appuie sur la touche fin d'appel.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## Détails

L'évènement modifie le comportement par défaut de la touche fin d'appel.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   BlackBerry 10

## Exemple court

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## Exemple complet

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

L'évènement se déclenche lorsque l'utilisateur clique sur le bouton diminution du volume.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## Détails

Si vous souhaitez modifier le comportement par défaut du bouton diminution du volume, vous pouvez enregistrer un écouteur pour l'évènement `volumedownbutton`.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   BlackBerry 10
*   Android

## Exemple court

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## Exemple complet

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

L'évènement se déclenche lorsque l'utilisateur clique sur le bouton augmentation du volume.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## Détails

Si vous souhaitez modifier le comportement par défaut du bouton augmentation du volume, vous pouvez enregistrer un écouteur pour l'évènement `volumeupbutton`.

Les applications devraient en général utiliser `document.addEventListener` pour attacher un écouteur d'évènements, une fois l'évènement `deviceready` déclenché.

## Plates-formes supportées

*   BlackBerry 10
*   Android

## Exemple court

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## Exemple complet

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
