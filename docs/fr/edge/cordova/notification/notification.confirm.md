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

# notification.Confirm

Affiche une boîte de dialogue de confirmation personnalisable.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **message**: message de la boîte de dialogue. *(String)*

*   **confirmCallback**: callback à appeler avec l'index du bouton pressé (1, 2 ou 3) ou lorsque la boîte de dialogue est fermée sans qu'un bouton ne soit pressé (0). *(Fonction)*

*   **titre**: titre de dialogue. *(String)* (Facultatif, par défaut`Confirm`)

*   **buttonLabels**: tableau de chaînes spécifiant les étiquettes des boutons. *(Array)* (Optionnel, par défaut, [ `OK,Cancel` ])

## Description

La méthode `notification.confirm` affiche une boîte de dialogue native qui est plus personnalisable que la fonction `confirm` du navigateur .

## confirmCallback

Le callback `confirmCallback` s'exécute lorsque l'utilisateur appuie sur un bouton dans la boîte de dialogue de confirmation.

Le callback prend l'argument `buttonIndex` *(nombre)*, qui est l'index du bouton activé. Notez que l'index utilise une indexation de base 1, donc la valeur est `1` , `2` , `3` , etc..

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Tizen
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Spécificités Windows Phone 7 et 8

*   Il n'y a aucune fonction intégrée au navigateur pour `window.confirm`, mais vous pouvez en lier une en affectant :
    
        window.confirm = navigator.notification.confirm;
        

*   Les appels à `alert` et `confirm` sont non-bloquants, donc le résultat est seulement disponible de façon asynchrone.