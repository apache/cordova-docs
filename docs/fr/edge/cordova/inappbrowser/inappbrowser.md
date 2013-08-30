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

> Le `InAppBrowser` est un navigateur web qui s'affiche dans l'application lors de l'appel`window.open`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

## Description

L'objet retourné par un appel à`window.open`.

## Méthodes

*   addEventListener
*   removeEventListener
*   fermer
*   Voir l'établissement
*   executeScript
*   insertCSS

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android (dans`app/res/xml/config.xml`)
    
        < nom de la fonction = "InAppBrowser" >< param name = "android-package" value="org.apache.cordova.InAppBrowser" / >< / fiction >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « InAppBrowser » >< param name = « ios-paquet » value = « CDVInAppBrowser » / >< / fiction >
        

*   Windows Phone 7 et 8 (en`config.xml`)
    
        < nom de la fonction = « InAppBrowser » / >
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.

# addEventListener

> Ajoute un écouteur pour un événement de la`InAppBrowser`.

    ref.addEventListener (eventname, callback) ;
    

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

    var Réf = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
    ref.addEventListener ('loadstart', function() {alert(event.url);}) ;
    

## Exemple complet

    < !DOCTYPE html >< html >< tête >< titre > exemple InAppBrowser.addEventListener < / titre >< script type = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< script type = "text/javascript" charset = "utf-8" > / / attendre pour les bibliothèques de périphérique API charger / / document.addEventListener ("deviceready", onDeviceReady, false) ;
    
        / / périphérique API sont disponibles / / function onDeviceReady() {var Réf = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
             ref.addEventListener (« loadstart », function(event) {alert (' commencer: "+ event.url);}) ;
             ref.addEventListener (« loadstop », function(event) {alert (' arrêter: "+ event.url);}) ;
             ref.addEventListener (« loaderror », function(event) {alert ("error:" + event.message);}) ;
             ref.addEventListener ("exit", function(event) {alert(event.type);}) ;
        } < /script >< / chef >< corps >< body / >< / html >
    

# removeEventListener

> Supprime un écouteur pour un événement de la`InAppBrowser`.

    ref.removeEventListener (eventname, callback) ;
    

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

    var Réf = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
    myCallback var = function() {alert(event.url);} ref.addEventListener ('loadstart', myCallback) ;
    ref.removeEventListener ('loadstart', myCallback) ;
    

## Exemple complet

    < !DOCTYPE html >< html >< tête >< titre > exemple InAppBrowser.removeEventListener < / titre >< script type = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< script type = "text/javascript" charset = "utf-8" > / / attendre pour les bibliothèques de périphérique API charger / / document.addEventListener ("deviceready", onDeviceReady, false) ;
    
        / / InAppBrowser global référence var iabRef = null ;
    
        function iabLoadStart(event) {alert (event.type + «-» + event.url) ;
        } function iabLoadStop(event) {alert (event.type + «-» + event.url) ;
        } function iabLoadError(event) {alert (event.type + «-» + event.message) ;
        } function iabClose(event) {alert(event.type) ;
             iabRef.removeEventListener ('loadstart', iabLoadStart) ;
             iabRef.removeEventListener ('loadstop', iabLoadStop) ;
             iabRef.removeEventListener ('loaderror', iabLoadError) ;
             iabRef.removeEventListener ("quitter", iabClose) ;
        } / / périphérique API sont disponibles / / function onDeviceReady() {iabRef = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
             iabRef.addEventListener ('loadstart', iabLoadStart) ;
             iabRef.addEventListener ('loadstop', iabLoadStop) ;
             iabRef.removeEventListener ('loaderror', iabLoadError) ;
             iabRef.addEventListener ("quitter", iabClose) ;
        } < /script >< / chef >< corps >< body / >< / html >
    

# fermer

> Ferme la `InAppBrowser` fenêtre.

    Ref.Close() ;
    

*   **Réf**: référence à la `InAppBrowser` fenêtre *(InAppBrowser)*

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 et 8

## Petit exemple

    var Réf = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
    Ref.Close() ;
    

## Exemple complet

    < !DOCTYPE html >< html >< tête >< titre > exemple InAppBrowser.close < / titre >< script type = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< script type = "text/javascript" charset = "utf-8" > / / attendre pour les bibliothèques de périphérique API charger / / document.addEventListener ("deviceready", onDeviceReady, false) ;
    
        / / périphérique API sont disponibles / / function onDeviceReady() {var Réf = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
             / / fermer InAppBrowser après 5 secondes setTimeout(function() {ref.close() ;
             }, 5000) ;
        } < /script >< / chef >< corps >< body / >< / html >
    

# Voir l'établissement

> Afficher une fenêtre de InAppBrowser qui ouvrit ses portes cachée. Appeler cela n'a aucun effet si la InAppBrowser était déjà visible.

    Ref.Show() ;
    

*   **Réf :** référence à la fenêtre () InAppBrowser`InAppBrowser`)

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS

## Petit exemple

    var Réf = window.open (« http://apache.org », « _blank », ' caché = « Oui) ;
    Ref.Show() ;
    

## Exemple complet

    < !DOCTYPE html >< html >< tête >< titre > exemple InAppBrowser.show < / titre >< script type = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< script type = "text/javascript" charset = "utf-8" > / / attendre Cordova charger / / document.addEventListener ("deviceready", onDeviceReady, false) ;
    
        / / Cordova est prêt / / function onDeviceReady() {var Réf = window.open (« http://apache.org », « _blank », ' caché = « Oui) ;
             ref.addEventListener ('loadstop', function(event) {alert ('arrière-plan fenêtre chargé") ; 
             });
             / / fermer InAppBrowser après 5 secondes setTimeout(function() {ref.close() ;
             }, 5000) ;
        } < /script >< / chef >< corps >< body / >< / html >
    

# executeScript

> Injecte du code JavaScript dans la `InAppBrowser` fenêtre

    ref.executeScript (détails, callback) ;
    

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

    var Réf = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
    ref.addEventListener (« loadstop », function() {ref.executeSript ({fichier: « myscript.js »});}) ;
    

## Exemple complet

    < !DOCTYPE html >< html >< tête >< titre > exemple InAppBrowser.executeScript < / titre >< script type = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< script type = "text/javascript" charset = "utf-8" > / / attendre pour les bibliothèques de périphérique API charger / / document.addEventListener ("deviceready", onDeviceReady, false) ;
    
        / / InAppBrowser global référence var iabRef = null ;
    
        / / Injecter notre JavaScript personnalisé dans la fenêtre de InAppBrowser / / function replaceHeaderImage() {iabRef.executeScript ({code: "var img=document.querySelector ('#header img') ; "img.src= 'http://cordova.apache.org/images/cordova_bot.png';"}, function() {alert ("Image élément avec succès détourné") ;
            }} function iabClose(event) {iabRef.removeEventListener ('loadstop', replaceHeaderImage) ;
             iabRef.removeEventListener ("quitter", iabClose) ;
        } / / périphérique API sont disponibles / / function onDeviceReady() {iabRef = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
             iabRef.addEventListener ('loadstop', replaceHeaderImage) ;
             iabRef.addEventListener ("quitter", iabClose) ;
        } < /script >< / chef >< corps >< body / >< / html >
    

# insertCSS

> Injecte CSS dans le `InAppBrowser` fenêtre.

    ref.insertCSS (détails, callback) ;
    

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

    var Réf = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
    ref.addEventListener (« loadstop », function() {ref.insertCSS ({fichier: « Messtyles.CSS »});}) ;
    

## Exemple complet

    < !DOCTYPE html >< html >< tête >< titre > exemple InAppBrowser.insertCSS < / titre >< script type = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< script type = "text/javascript" charset = "utf-8" > / / attendre pour les bibliothèques de périphérique API charger / / document.addEventListener ("deviceready", onDeviceReady, false) ;
    
        / / InAppBrowser global référence var iabRef = null ;
    
        / / Injecter notre CSS personnalisé dans la fenêtre de InAppBrowser / / function changeBackgroundColor() {iabRef.insertCSS ({code: "corps {background : #ffff00"}, function() {alert ("Styles modifiés") ;
            }} function iabClose(event) {iabRef.removeEventListener ('loadstop', changeBackgroundColor) ;
             iabRef.removeEventListener ("quitter", iabClose) ;
        } / / périphérique API sont disponibles / / function onDeviceReady() {iabRef = window.open (« http://apache.org », « _blank », ' emplacement = « Oui) ;
             iabRef.addEventListener ('loadstop', changeBackgroundColor) ;
             iabRef.addEventListener ("quitter", iabClose) ;
        } < /script >< / chef >< corps >< body / >< / html >
    

# InAppBrowserEvent

L'objet qui est passé à la fonction de rappel d'un `addEventListener` donne la parole à un `InAppBrowser` objet.

## Propriétés

*   **type**: l'eventname, soit `loadstart` , `loadstop` , `loaderror` , ou `exit` . *(String)*

*   **URL**: l'URL qui a été chargé. *(String)*

*   **code**: le code d'erreur, que dans le cas de `loaderror` . *(Nombre)*

*   **message**: le message d'erreur que dans le cas de `loaderror` . *(String)*