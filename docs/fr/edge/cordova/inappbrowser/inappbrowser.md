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

# InAppBrowser

> The `InAppBrowser` is a web browser view that displays when calling `window.open()`, or when opening a link formed as `<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**NOTE:** The InAppBrowser window behaves like a standard web browser, and cannot access Cordova APIs.

## Description

The object returned from a call to `window.open`.

## Méthodes

*   addEventListener
*   removeEventListener
*   close
*   show
*   executeScript
*   insertCSS

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android (dans`app/res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>
        

*   iOS (en`config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7 et 8 (en`config.xml`)
    
        <feature name="InAppBrowser" />
        

Some platforms may support this feature without requiring any special configuration. See *Platform Support* in the Overview section.

# addEventListener

> Ajoute un écouteur pour un événement de la`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **Réf**: référence à la `InAppBrowser` fenêtre *(InAppBrowser)*

*   **EventName**: l'événement pour écouter les *(String)*
    
    *   **loadstart**: événement déclenche quand le `InAppBrowser` commence à charger une URL.
    *   **loadstop**: événement déclenche lorsque la `InAppBrowser` finit de charger une URL.
    *   **LoadError**: événement déclenche lorsque la `InAppBrowser` rencontre une erreur lors du chargement d'une URL.
    *   **sortie**: événement déclenche quand le `InAppBrowser` fenêtre est fermée.

*   **rappel**: la fonction qui s'exécute lorsque l'événement se déclenche. La fonction est passée un `InAppBrowserEvent` objet comme paramètre.

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 et 8

## Petit exemple

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# removeEventListener

> Supprime un écouteur pour un événement de la`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **Réf**: référence à la `InAppBrowser` fenêtre. *(InAppBrowser)*

*   **EventName**: l'événement pour arrêter l'écoute. *(String)*
    
    *   **loadstart**: événement déclenche quand le `InAppBrowser` commence à charger une URL.
    *   **loadstop**: événement déclenche lorsque la `InAppBrowser` finit de charger une URL.
    *   **LoadError**: événement déclenche lorsque la `InAppBrowser` rencontre une erreur lors du chargement d'une URL.
    *   **sortie**: événement déclenche quand le `InAppBrowser` fenêtre est fermée.

*   **rappel**: la fonction à exécuter lorsque l'événement se déclenche. La fonction est passée un `InAppBrowserEvent` objet.

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 et 8

## Petit exemple

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }
    
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# fermer

> Ferme la `InAppBrowser` fenêtre.

    ref.close();
    

*   **Réf**: référence à la `InAppBrowser` fenêtre *(InAppBrowser)*

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 et 8

## Petit exemple

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# Voir l'établissement

> Afficher une fenêtre de InAppBrowser qui ouvrit ses portes cachée. Appeler cela n'a aucun effet si la InAppBrowser était déjà visible.

    ref.show();
    

*   **Réf :** référence à la fenêtre () InAppBrowser`InAppBrowser`)

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS

## Petit exemple

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# executeScript

> Injecte du code JavaScript dans la `InAppBrowser` fenêtre

    ref.executeScript(details, callback);
    

*   **Réf**: référence à la `InAppBrowser` fenêtre. *(InAppBrowser)*

*   **injectDetails**: Détails du script à exécuter, spécifiant soit un `file` ou `code` clés. *(Objet)*
    
    *   **fichier**: URL du script à injecter.
    *   **code**: texte du script à injecter.

*   **rappel**: la fonction qui s'exécute après le code JavaScript est injecté.
    
    *   Si le script injecté est de type `code` , le rappel s'exécute avec un seul paramètre, qui est la valeur renvoyée par le script, enveloppé dans une `Array` . Pour les scripts multilignes, c'est la valeur de retour de la dernière instruction, ou la dernière expression évaluée.

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS

## Petit exemple

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# insertCSS

> Injecte CSS dans le `InAppBrowser` fenêtre.

    ref.insertCSS(details, callback);
    

*   **Réf**: référence à la `InAppBrowser` fenêtre *(InAppBrowser)*

*   **injectDetails**: Détails du script à exécuter, spécifiant soit un `file` ou `code` clés. *(Objet)*
    
    *   **fichier**: URL de la feuille de style à injecter.
    *   **code**: texte de la feuille de style à injecter.

*   **rappel**: la fonction qui s'exécute après que le CSS est injecté.

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS

## Petit exemple

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00"
            }, function() {
                alert("Styles Altered");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# InAppBrowserEvent

The object that is passed to the callback function from an `addEventListener` call on an `InAppBrowser` object.

## Propriétés

*   **type**: l'eventname, soit `loadstart` , `loadstop` , `loaderror` , ou `exit` . *(String)*

*   **URL**: l'URL qui a été chargé. *(String)*

*   **code**: le code d'erreur, que dans le cas de `loaderror` . *(Nombre)*

*   **message**: le message d'erreur que dans le cas de `loaderror` . *(String)*