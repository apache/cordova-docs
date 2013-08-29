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

# pause

L'événement se déclenche quand une application est mise dans le fond.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Détails

Le `pause` événement se déclenche lorsque la plate-forme native met l'application en arrière-plan, généralement lorsque l'utilisateur bascule vers une autre application.

Les applications doivent généralement utiliser `document.addEventListener` pour attacher un écouteur d'événements une fois le `deviceready` événement se déclenche.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

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
    

## iOS Quirks

Dans le `pause` Gestionnaire, tous les appels à l'API de Cordoue ou de plugins natifs qui passent par l'Objective-C ne fonctionnent pas, ainsi que tous les appels interactifs, tels que des alertes ou `console.log()` . Elles sont traitées uniquement lorsque l'application reprend, sur la boucle d'exécution suivante.

L'iOS spécifiques `resign` événement est disponible comme alternative à `pause` et détecte le moment où les utilisateurs activer le bouton de **verrouillage** pour verrouiller l'appareil avec l'application en cours d'exécution au premier plan. Si le $ $ etAPP (et dispositif) sont activées pour le multitâche, il est jumelé avec un ultérieur `pause` événement, mais seulement sous iOS 5. En effet, toutes les apps verrouillées dans iOS 5 qui ont le multitâche activé sont poussés à l'arrière-plan. Pour les applications de continuer à s'exécuter lorsque verrouillé sous iOS 5, désactiver multitâche l'application en définissant [UIApplicationExitsOnSuspend][1] sur `YES` . Pour exécuter lorsqu'ils sont bloqués sur iOS 4, ce paramètre n'est pas grave.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html