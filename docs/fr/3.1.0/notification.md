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


# Notification

> Notifications de l'appareil visuel, sonore et tactile.

## Méthodes

*   `notification.alert`
*   `notification.Confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   iOS (en`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# notification.Alert

Affiche une boîte de dialogue ou d'alerte personnalisé.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **message**: message de la boîte de dialogue. *(String)*

*   **alertCallback**: rappel à appeler lorsque la boîte de dialogue alert est rejeté. *(Fonction)*

*   **titre**: titre de dialogue. *(String)* (Facultatif, par défaut`Alert`)

*   **buttonName**: nom de bouton. *(String)* (Facultatif, par défaut`OK`)

## Description

La plupart des implémentations de Cordova utilisent une boîte de dialogue natives pour cette fonctionnalité, mais certaines plates-formes du navigateur `alert` fonction, qui est généralement moins personnalisable.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
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
    

## Windows Phone 7 et 8 Quirks

*   Il n'y a aucune alerte navigateur intégré, mais vous pouvez lier un comme suit pour appeler `alert()` dans la portée globale :
    
        window.alert = navigator.notification.alert;
        

*   Les deux `alert` et `confirm` sont sans blocage des appels, des résultats qui ne sont disponibles que de façon asynchrone.


# notification.Confirm

Affiche une boîte de dialogue de confirmation personnalisable.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **message**: message de la boîte de dialogue. *(String)*

*   **confirmCallback**: rappel d'invoquer avec l'index du bouton pressé (1, 2 ou 3) ou lorsque la boîte de dialogue est fermée sans une presse de bouton (0). *(Fonction)*

*   **titre**: titre de dialogue. *(String)* (Facultatif, par défaut`Confirm`)

*   **buttonLabels**: tableau de chaînes spécifiant les étiquettes des boutons. *(Array)* (Optionnel, par défaut, [ `OK,Cancel` ])

## Description

La `notification.confirm` méthode affiche une boîte de dialogue natif qui est plus personnalisable que le navigateur `confirm` fonction.

## confirmCallback

Le `confirmCallback` s'exécute lorsque l'utilisateur appuie sur un bouton dans la boîte de dialogue de confirmation.

Le rappel prend l'argument `buttonIndex` *(nombre)*, qui est l'index du bouton activé. Notez que l'index utilise base d'indexation, la valeur est `1` , `2` , `3` , etc..

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
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
    

## Windows Phone 7 et 8 Quirks

*   Il n'y a aucune fonction de navigateur intégré pour `window.confirm` , mais vous pouvez le lier en affectant :
    
        window.confirm = navigator.notification.confirm;
        

*   Les appels à `alert` et `confirm` sont non-bloquante, donc le résultat est seulement disponible de façon asynchrone.


# notification.prompt

Affiche une boîte de dialogue d'invite personnalisable.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **message**: message de la boîte de dialogue. *(String)*

*   **promptCallback**: rappel à appeler lorsque vous appuyez sur un bouton. *(Fonction)*

*   **titre**: titre *(String)* (facultatif, la valeur par défaut de dialogue`Prompt`)

*   **buttonLabels**: tableau de chaînes spécifiant les bouton *(Array)* (facultatif, par défaut, les étiquettes`["OK","Cancel"]`)

*   **defaultText**: zone de texte par défaut entrée valeur ( `String` ) (en option, par défaut : chaîne vide)

## Description

La `notification.prompt` méthode affiche une boîte de dialogue natif qui est plus personnalisable que le navigateur `prompt` fonction.

## promptCallback

Le `promptCallback` s'exécute lorsque l'utilisateur appuie sur un bouton dans la boîte de dialogue d'invite. Le `results` objet passé au rappel contient les propriétés suivantes :

*   **buttonIndex**: l'index du bouton activé. *(Nombre)* Notez que l'index utilise base d'indexation, la valeur est `1` , `2` , `3` , etc..

*   **entrée 1**: le texte entré dans la boîte de dialogue d'invite. *(String)*

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
    

## Bizarreries Android

*   Android prend en charge un maximum de trois boutons et ignore plus que cela.

*   Sur Android 3.0 et versions ultérieures, les boutons sont affichés dans l'ordre inverse pour les appareils qui utilisent le thème Holo.


# notification.Beep

Le dispositif joue un bip sonore.

    navigator.notification.beep(times);
    

*   **temps**: le nombre de fois de répéter le signal sonore. *(Nombre)*

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8

## Petit exemple

    // Beep twice!
    navigator.notification.beep(2);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## Bizarreries Android

*   Android joue la **sonnerie de Notification** spécifié sous le panneau des **réglages/son et affichage** de valeur par défaut.

## Windows Phone 7 et 8 Quirks

*   S'appuie sur un fichier générique bip de la distribution de Cordova.

## Bizarreries de paciarelli

*   Paciarelli implémente les bips en lisant un fichier audio via les médias API.

*   Le fichier sonore doit être court, doit se trouver dans un `sounds` sous-répertoire du répertoire racine de l'application et doit être nommé`beep.wav`.


# notification.VIBRATE

Vibre le dispositif pour la durée spécifiée.

    navigator.notification.vibrate(milliseconds)
    

*   **temps**: millisecondes à vibrer l'appareil, où 1000 millisecondes est égal à 1 seconde. *(Nombre)*

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8

## Petit exemple

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## iOS Quirks

*   **temps**: ne tient pas compte de la durée spécifiée et vibre pendant un temps prédéterminé.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored
        

## BB10 Quirks

vibreur fonction appartenue à l'objet navigator

        navigator.vibrate(1000);  // vibrate for 1 second
