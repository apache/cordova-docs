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

# notification.prompt

Affiche une boîte de dialogue de saisie personnalisable.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **message**: message de la boîte de dialogue. *(String)*

*   **promptCallback**: callback à appeler lorsque vous appuyez sur un bouton. *(Fonction)*

*   **titre**: titre *(String)* (facultatif, par défaut `Prompt`)

*   **buttonLabels**: tableau de chaînes spécifiant les étiquettes de boutons *(Array)* (facultatif, par défaut, les étiquettes `["OK","Cancel"]`)

*   **defaultText**: texte par défaut de la zone de texte ( `String` ) (en option, par défaut : chaîne vide)

## Description

La méthode `notification.prompt` affiche une boîte de dialogue native qui est plus personnalisable que celle de la fonction `prompt` du navigateur.

## promptCallback

Le callback `promptCallback` s'exécute lorsque l'utilisateur appuie sur un bouton dans la boîte de dialogue de saisie. L'objet `results` passé au callback contient les propriétés suivantes :

*   **buttonIndex**: l'index du bouton activé. *(Nombre)* Notez que l'index utilise une indexation de base 1, donc la valeur est `1` , `2` , `3` , etc..

*   **entrée 1**: le texte entré dans la boîte de dialogue de saisie. *(String)*

## Plates-formes prises en charge

*   Android
*   iOS

## Petit exemple

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
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
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## Spécificités Android

*   Android prend en charge un maximum de trois boutons et ignore les autres.

*   Sur Android 3.0 et versions ultérieures, les boutons sont affichés dans l'ordre inverse pour les appareils qui utilisent le thème Holo.