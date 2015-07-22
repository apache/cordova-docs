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
*   Windows Phone 7 et 8
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