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
*   Windows Phone 7 et 8
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