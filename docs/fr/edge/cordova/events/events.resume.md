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

# curriculum vitae

L'événement se déclenche lorsqu'une application est Récupérée de l'arrière-plan.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Détails

Le `resume` événement se déclenche quand la plate-forme native sort l'application de l'arrière-plan.

Les applications doivent généralement utiliser `document.addEventListener` pour attacher un écouteur d'événements une fois le `deviceready` événement se déclenche.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

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
    

## iOS Quirks

Toutes les fonctions interactives appelées à partir d'un `pause` gestionnaire d'événements exécute plus tard lorsque le $ $ etAPP reprend, comme signalé par le `resume` événement. Il s'agit d'alertes, `console.log()` et tous les appels de plugins ou de l'API, de Cordoue qui passent par l'Objective-C.

*   événements **actifs**
    
    L'iOS spécifiques `active` événement est disponible comme alternative à `resume` et détecte le moment où les utilisateurs de désactiver la touche **verrou** pour déverrouiller l'appareil avec l'application en cours d'exécution au premier plan. Si le $ $ etAPP (et dispositif) sont activées pour le multitâche, il est jumelé avec un ultérieur `resume` événement, mais seulement sous iOS 5. En effet, toutes les apps verrouillées dans iOS 5 qui ont le multitâche activé sont poussés à l'arrière-plan. Pour les applications de continuer à s'exécuter lorsque verrouillé sous iOS 5, désactiver multitâche l'application en définissant [UIApplicationExitsOnSuspend][1] sur `YES` . Pour exécuter lorsqu'ils sont bloqués sur iOS 4, ce paramètre n'est pas grave.

*   **reprendre** l'événement
    
    Lorsqu'elle est appelée depuis une `resume` gestionnaire d'événements, des fonctions interactives, telles que `alert()` besoin d'être enveloppé dans une `setTimeout()` appel d'une valeur de délai d'attente de zéro, ou bien l'accroche de l'app. Par exemple :
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html