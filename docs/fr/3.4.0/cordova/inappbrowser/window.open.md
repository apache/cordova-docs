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