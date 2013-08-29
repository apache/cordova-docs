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

# iOS Configuration

Le `config.xml` fichier de paramètres de contrôle divers paramètres de Cordova. Il s'agit d'application large et non réglage par instance de CDVViewController. Le `config.xml` fichier se trouve dans votre `<project folder>/<appname>` répertoire.

## `< préférence >`

Diverses préférences (comme `<preference>` tags) par défaut sur la rupture ne pas les applications existantes. Les préférences disponibles sont :

*   `DisallowOverscroll`(boolean, la valeur par défaut `false` ): la valeur `true` si vous ne voulez pas le WebView à élastique.

*   `TopActivityIndicator`(string, la valeur par défaut `gray` ): il s'agit de l'indicateur d'activité spinning haut de la page dans la barre de statut/batterie, les valeurs valides sont `whiteLarge` , `white` , et`gray`.

*   `EnableLocation`(boolean, la valeur par défaut `false` ): la valeur `true` , pour initialiser le plugin géolocalisation au démarrage (donc le correctif sur votre emplacement peut être plus précis) **DEPRECATED**: veuillez régler le `onload` attribut de la `Geolocation` plugin pour `true` à la place.

*   `EnableViewportScale`(boolean, la valeur par défaut `false` ): la valeur `true` pour empêcher la fenêtre de mise à l'échelle par une balise meta.

*   `AutoHideSplashScreen`(boolean, la valeur par défaut `true` ): la valeur `false` pour contrôler quand il est caché le splashscreen via une API JavaScript.

*   `FadeSplashScreen`(boolean, la valeur par défaut `true` ): la valeur `false` pour empêcher l'écran de démarrage se faner dedans et dehors en affichant ou en masquant.

*   `FadeSplashScreenDuration`(float, la valeur par défaut 2): la durée de fondu d'écran de démarrage en quelques secondes.

*   `ShowSplashScreenSpinner`(boolean, la valeur par défaut `true` ): la valeur `false` pour cacher le cône de l'écran de démarrage.

*   `MediaPlaybackRequiresUserAction`(boolean, la valeur par défaut `false` ): la valeur true pour ne pas autoriser autoplayed HTML5 vidéo.

*   `AllowInlineMediaPlayback`(boolean, la valeur par défaut `false` ): la valeur true pour permettre la lecture du média en ligne HTML5, et en outre, l'élément vidéo dans le document HTML doit inclure également l'attribut webkit-playsinline.

*   `BackupWebStorage`(string, la valeur par défaut `cloud` ): les valeurs valides sont `none` , `cloud` et `local` . La valeur `cloud` afin que les données de stockage web à être sauvegardé sur iCloud et la valeur `local` pour autoriser uniquement les sauvegardes locales (iTunes sync). La valeur `none` de ne pas permettre des sauvegardes de stockage web.

*   `KeyboardDisplayRequiresUserAction`(boolean, la valeur par défaut `true` ): la valeur false pour ouvrir le clavier lorsque les éléments de formulaire se concentrer via l'appel de focus() JavaScript.

*   `SuppressesIncrementalRendering`(boolean, la valeur par défaut `false` ): la valeur true à attendre jusqu'à ce que tout nouveau afficher le contenu a été reçue avant sa restitution.

*   `HideKeyboardFormAccessoryBar`(boolean, la valeur par défaut `false` ): définie sur true pour masquer la barre d'outils supplémentaire située au dessus du clavier. Cette barre d'outils comporte les boutons **Prev**, **Next**et **fait** .

*   `KeyboardShrinksView`(boolean, la valeur par défaut `false` ): la valeur `true` à rétrécir l'affichage Web lorsque le clavier est en place. Le mode Web se contracte au lieu du rétrécissement de la fenêtre d'affichage et la défilement de page. Cela vaut pour les apps qui placent leurs éléments par rapport à la partie inférieure de l'affichage Web. C'est le comportement par défaut sur Android et fait beaucoup de sens lorsque vous générez des applications plutôt que des pages Web.