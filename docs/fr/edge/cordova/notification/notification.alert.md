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

# notification.Alert

Affiche une boîte de dialogue ou d'alerte personnalisée.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **message**: message de la boîte de dialogue. *(String)*

*   **alertCallback**: callback à appeler lorsque la boîte de dialogue d'alerte est fermée. *(Fonction)*

*   **titre**: titre de la boîte de dialogue. *(String)* (Facultatif, par défaut`Alert`)

*   **buttonName**: nom de bouton. *(String)* (Facultatif, par défaut`OK`)

## Description

La plupart des implémentations de Cordova utilisent une boîte de dialogue native pour cette fonctionnalité, mais certaines plates-formes utilisent la boîte de dialogue `alert` du navigateur, qui est généralement moins personnalisable.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Tizen
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    // Android / BlackBerry WebWorks 5.0+ / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

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
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Spécificités Windows Phone 7 et 8

*   Il n'y a aucune boîte de dialogue d'alerte intégrée au navigateur, mais vous pouvez en lier une pour appeler `alert()` dans le scope global :
    
        window.alert = navigator.notification.alert;
        

*   Les deux appels `alert` et `confirm` sont non-blocants, leurs résultats ne sont disponibles que de façon asynchrone.