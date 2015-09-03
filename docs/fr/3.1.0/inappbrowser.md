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


# InAppBrowser

> `InAppBrowser` désigne une vue de navigateur Web s'affichant après un appel à `window.open()`, ou via un lien formulé de la façon suivante `<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**Remarque :** une fenêtre InAppBrowser se comporte comme un navigateur Web standard et ne peut pas accéder aux API Cordova.

## Description

L'objet retourné par un appel à `window.open`.

## Méthodes

*   addEventListener
*   removeEventListener
*   close
*   show
*   executeScript
*   insertCSS

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android (dans `app/res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>
        

*   iOS (dans `config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7 et 8 (dans `config.xml`)
    
        <feature name="InAppBrowser" />
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.

# addEventListener

> Ajoute un écouteur pour un évènement de la fenêtre `InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **ref** : référence à la fenêtre `InAppBrowser`. *(InAppBrowser)*

*   **eventname** : l'évènement à écouter *(String)*
    
    *   **loadstart** : évènement déclenché lorsque le chargement d'une URL débute dans la fenêtre `InAppBrowser`.
    *   **loadstop** : évènement déclenché lorsque la fenêtre `InAppBrowser` finit de charger une URL.
    *   **loaderror** : évènement déclenché si la fenêtre `InAppBrowser` rencontre une erreur lors du chargement d'une URL.
    *   **exit** : évènement déclenché lorsque la fenêtre `InAppBrowser` est fermée.

*   **callback** : la fonction à exécuter lorsque l'évènement se déclenche. Un objet `InAppBrowserEvent` lui est transmis comme paramètre.

## Plates-formes supportées

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

> Supprime un écouteur pour un évènement de la fenêtre `InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **ref** : référence à la fenêtre `InAppBrowser`. *(InAppBrowser)*

*   **eventname** : l'évènement pour lequel arrêter l'écoute. *(String)*
    
    *   **loadstart** : évènement déclenché lorsque le chargement d'une URL débute dans la fenêtre `InAppBrowser`.
    *   **loadstop** : évènement déclenché lorsque la fenêtre `InAppBrowser` finit de charger une URL.
    *   **loaderror** : évènement déclenché si la fenêtre `InAppBrowser` rencontre une erreur lors du chargement d'une URL.
    *   **exit** : évènement déclenché lorsque la fenêtre `InAppBrowser` est fermée.

*   **callback** : la fonction à exécuter lorsque l'évènement se déclenche. Un objet `InAppBrowserEvent` lui est transmis comme paramètre.

## Plates-formes supportées

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 et 8

## Exemple court

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
    

# close

> Ferme la fenêtre `InAppBrowser`.

    ref.close();
    

*   **ref** : référence à la fenêtre `InAppBrowser`. *(InAppBrowser)*

## Plates-formes supportées

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 et 8

## Exemple court

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
    

# show

> Affiche une fenêtre InAppBrowser qui a été ouverte cachée. Appeler cette méthode n'a aucun effet si la fenêtre en question est déjà visible.

    ref.show();
    

*   **ref :** référence à la fenêtre InAppBrowser. (`InAppBrowser`)

## Plates-formes supportées

*   Android
*   BlackBerry
*   iOS

## Exemple court

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

> Injecte du code JavaScript dans la fenêtre `InAppBrowser`

    ref.executeScript(details, callback);
    

*   **ref** : référence à la fenêtre `InAppBrowser`. *(InAppBrowser)*

*   **injectDetails** : détails du script à exécuter, requérant une propriété `file` ou `code`. *(Object)*
    
    *   **file** : URL du script à injecter.
    *   **code** : texte du script à injecter.

*   **callback** : une fonction exécutée après l'injection du code JavaScript.
    
    *   Si le script injecté est de type `code`, un seul paramètre est transmis à la fonction callback, correspondant à la valeur de retour du script enveloppée dans un `Array`. Pour les scripts multilignes, il s'agit de la valeur renvoyée par la dernière instruction ou la dernière expression évaluée.

## Plates-formes supportées

*   Android
*   BlackBerry
*   iOS

## Exemple court

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

> Injecte des règles CSS dans la fenêtre `InAppBrowser`.

    ref.insertCSS(details, callback);
    

*   **ref** : référence à la fenêtre `InAppBrowser`. *(InAppBrowser)*

*   **injectDetails** : détails du fichier à injecter, requérant une propriété `file` ou `code`. *(Object)*
    
    *   **file** : URL de la feuille de style à injecter.
    *   **code** : contenu de la feuille de style à injecter.

*   **callback** : une fonction exécutée après l'injection du fichier CSS.

## Plates-formes supportées

*   Android
*   BlackBerry
*   iOS

## Exemple court

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

L'objet passé à la fonction callback d'un écouteur d'évènement ajouté via un appel à `addEventListener` sur un objet `InAppBrowser`.

## Propriétés

*   **type** : le nom de l'évènement, soit `loadstart`, `loadstop`, `loaderror` ou `exit`. *(String)*

*   **url** : l'URL ayant été chargée. *(String)*

*   **code** : le code d'erreur, seulement pour `loaderror`. *(Number)*

*   **message** : un message d'erreur, seulement pour `loaderror`. *(String)*


# window.open

Ouvre une URL dans une nouvelle instance de la classe `InAppBrowser`, une instance déjà existante ou dans le navigateur système.

    var ref = window.open(url, target, options);
    

*   **ref** : référence à la fenêtre `InAppBrowser`. *(InAppBrowser)*

*   **url** : l'URL à charger *(String)*. À encoder au préalable via `encodeURI()` si celle-ci contient des caractères Unicode.

*   **target** : la cible du chargement de l'URL, ce paramètre est optionnel, sa valeur par défaut est `_self`. *(String)*
    
    *   `_self` : dirige le chargement vers la WebView Cordova si l'URL figure dans la liste blanche, sinon dans une fenêtre `InAppBrowser`.
    *   `_blank` : dirige le chargement vers une fenêtre `InAppBrowser`.
    *   `_system` : dirige le chargement vers le navigateur Web du système.

*   **options** : permet de personnaliser la fenêtre `InAppBrowser`. Paramètre facultatif dont la valeur par défaut est `location=yes`. *(String)*
    
    La chaîne `options` ne doit contenir aucun caractère vide, chaque paire nom/valeur représentant une fonctionnalité doit être séparée de la précédente par une virgule. Les noms de fonctionnalités sont sensibles à la casse. Toutes les plates-formes prennent en charge la valeur ci-dessous :
    
    *   **location** : régler à `yes` ou `no` afin d'afficher ou masquer la barre d'adresse de la fenêtre `InAppBrowser`.
    ## Android uniquement
    
    *   **closebuttoncaption** : permet de modifier la valeur du texte du bouton "Terminé". 
    *   **hidden** : régler à 'yes' pour créer la fenêtre et charger la page, mais ne pas la montrer. L'événement load se déclenche lorsque le chargement est terminé. Ne pas préciser de valeur ou régler sur 'no' (par défaut) afin que la fenêtre soit affichée normalement. 
    *   **clearcache** : régler sur 'yes' pour que les cookies du navigateur soient effacés avant l'ouverture de la nouvelle fenêtre
    *   **clearsessioncache** : régler sur 'yes' afin que les cookies de session soient supprimés avant l'ouverture de la nouvelle fenêtre
    ## iOS uniquement
    
    *   **closebuttoncaption** : permet de modifier la valeur du texte du bouton "Terminé". Dans le cas d'une application multilingue, vous devrez localiser cette valeur par vos propres moyens.
    *   **hidden** : régler à 'yes' pour créer la fenêtre et charger la page, mais ne pas la montrer. L'événement load se déclenche lorsque le chargement est terminé. Ne pas préciser de valeur ou régler sur 'no' (par défaut) afin que la fenêtre soit affichée normalement. 
    *   **toolbar** : régler sur 'yes' ou 'no' afin d'afficher ou masquer la barre d'outils de la fenêtre InAppBrowser ('yes' par défaut).
    *   **enableViewportScale** : selon si la valeur est `yes` ou `no`, une balise meta est injectée avec pour but de permettre ou empêcher l'utilisateur de zoomer dans le viewport (`no` par défaut).
    *   **mediaPlaybackRequiresUserAction** : selon si la valeur est `yes` ou `no`, la lecture automatique de contenus HTML5 audio ou vidéo (c'est à dire sans action préalable de l'utilisateur) est désactivée ou activée (`no` par défaut).
    *   **allowInlineMediaPlayback** : régler sur `yes` ou `no` pour permettre ou interdire la lecture de contenu HTML5 audio ou vidéo directement au sein du navigateur plutôt que dans une fenêtre de lecture spécifique à l'appareil. L'élément HTML `video` doit également comporter l'attribut `webkit-playsinline` (`no` par défaut)
    *   **keyboardDisplayRequiresUserAction** : régler sur `yes` ou `no` pour interdire ou autoriser l'ouverture du clavier lorsque des éléments de formulaire reçoivent le focus par l'intermédiaire d'un appel à la méthode JavaScript `focus()` (`yes` par défaut).
    *   **suppressesIncrementalRendering** : selon si la valeur est `yes` ou `no`, le rendu de la vue attendra ou non que tout nouveau contenu soit reçu (`no` par défaut).
    *   **presentationstyle** : régler sur `pagesheet`, `formsheet` ou `fullscreen` afin d'obtenir le [style de présentation][1] de fenêtre souhaité (`fullscreen` par défaut).
    *   **transitionstyle**: régler la valeur à `fliphorizontal`, `crossdissolve` ou `coververtical` afin de définir le [style de transition][2] de fenêtre souhaité (`coververtical` par défaut).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## Plates-formes supportées

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 et 8

## Exemple court

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
