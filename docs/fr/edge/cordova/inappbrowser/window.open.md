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

Ouvre une URL dans une nouvelle `InAppBrowser` instance, l'instance de navigateur actuelle ou dans l'Explorateur du système.

    var ref = window.open(url, target, options);
    

*   **Réf**: référence à la `InAppBrowser` fenêtre. *(InAppBrowser)*

*   **URL**: URL pour charger *(String)*. Appelez `encodeURI()` sur cette option si l'URL contient des caractères Unicode.

*   **cible**: la cible dans lequel charger l'URL, un paramètre optionnel qui par défaut est `_self` . *(String)*
    
    *   `_self`: Ouvre le Cordova WebView si l'URL figure dans la liste blanche, dans le cas contraire, il s'ouvre dans le`InAppBrowser`.
    *   `_blank`: S'ouvre dans le`InAppBrowser`.
    *   `_system`: S'ouvre dans le navigateur web du système.

*   **options**: Options pour le `InAppBrowser` . En option, défaillant à: `location=yes` . *(String)*
    
    La `options` chaîne ne doit pas contenir n'importe quel espace vide et paires nom/valeur de chaque fonctionnalité doivent être séparés par une virgule. Les noms de fonction respectent la casse. Toutes les plates-formes prennent en charge la valeur ci-dessous :
    
    *   **localisation**: la valeur `yes` ou `no` pour mettre le `InAppBrowser` de barre d'adresses ou désactiver.
    ## Android seulement
    
    *   **closebuttoncaption** - définir une chaîne qui sera la légende pour le bouton "Terminé". 
    *   **cachée** -' Yes ' pour créer le navigateur et charger la page, mais ne pas le montrer. L'événement load se déclenche lorsque le chargement est terminé. Omettre ou la valeur « non » (par défaut) pour que le navigateur ouvrir et charger normalement. 
    *   **clearcache** - ' Yes ' pour avoir le cache du navigateur cookie effacé avant l'ouverture de la nouvelle fenêtre
    *   **clearsessioncache** - ' Yes ' pour avoir le cache de cookie de session autorisé avant l'ouverture de la nouvelle fenêtre
    ## iOS seulement
    
    *   **closebuttoncaption** - définir une chaîne qui sera la légende pour le bouton "Terminé". Notez que vous devrez localiser cette valeur vous-même.
    *   **cachée** -' Yes ' pour créer le navigateur et charger la page, mais ne pas le montrer. L'événement load se déclenche lorsque le chargement est terminé. Omettre ou la valeur « non » (par défaut) pour que le navigateur ouvrir et charger normalement. 
    *   **barre d'outils** - la valeur "Oui" ou "non" pour activer ou désactiver la la barre d'outils pour la InAppBrowser (par défaut sur 'yes')
    *   **enableViewportScale**: la valeur `yes` ou `no` pour empêcher la fenêtre de mise à l'échelle par une balise meta (par défaut,`no`).
    *   **mediaPlaybackRequiresUserAction**: la valeur `yes` ou `no` pour empêcher le HTML5 audio ou vidéo de la lecture automatique (par défaut,`no`).
    *   **allowInlineMediaPlayback**: la valeur `yes` ou `no` pour permettre la lecture du média inline HTML5, affichage dans la fenêtre du navigateur plutôt que d'une interface de lecture spécifique au périphérique. L'HTML `video` élément doit également inclure la `webkit-playsinline` attribut (par défaut,`no`)
    *   **keyboardDisplayRequiresUserAction**: la valeur `yes` ou `no` pour ouvrir le clavier lorsque les éléments reçoivent le focus par l'intermédiaire de JavaScript `focus()` appel (par défaut,`yes`).
    *   **suppressesIncrementalRendering**: la valeur `yes` ou `no` d'attendre que toutes les nouveautés de vue sont reçue avant d'être restitué (par défaut,`no`).
    *   **presentationstyle**: la valeur `pagesheet` , `formsheet` ou `fullscreen` pour définir le [style de présentation][1] (par défaut,`fullscreen`).
    *   **transitionstyle**: la valeur `fliphorizontal` , `crossdissolve` ou `coververtical` pour définir le [style de transition][2] (par défaut,`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## Plates-formes prises en charge

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 et 8

## Petit exemple

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