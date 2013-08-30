---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Configuration Android

Le `config.xml` fichier contrôle les différents paramètres de Cordova. Elles s'appliquent dans toute l'application et par l'instance de CordovaWebView.

## `<preference>`

Divers autres préférences (comme `<preference>` tags) par défaut sur la rupture ne pas les applications existantes. Les préférences disponibles sont :

*   `useBrowserHistory`(boolean, la valeur par défaut `true` ): la valeur `false` si vous souhaitez utiliser la cale de l'histoire qui a été utilisée pour contourner l'erreur hashtag présent dans Android 3.x avant la correction de l'histoire. (Remarque : ce paramètre sera déconseillé en avril 2013)

*   `loadingDialog`: Afficher une boîte de dialogue chargement native lors du chargement de l'application. Le format de la valeur est *titre, Message*

*   `loadingPageDialog`: Afficher une boîte de dialogue chargement native lors du chargement des sous-pages. Le format de la valeur est *titre, Message*

*   `errorUrl`: Définir la page d'erreur pour votre application. Doit se trouver dans votre projet Android dans`file://android_asset/www/`

*   `backgroundColor`: Définir la couleur d'arrière-plan pour votre application. Prend en charge une valeur hexadécimale de quatre octets, le premier octet représentant la valeur alpha et les trois octets suivants avec les valeurs RGB standard. Par exemple, `0x00000000` est noir.

*   `loadUrlTimeoutValue`: Combien temps Cordova doit attendre avant de lancer une erreur de délai d'attente relatif à l'application.

*   `keepRunning`(boolean, la valeur par défaut `true` ): détermine si Cordova reste en cours d'exécution en arrière-plan.

*   `splashscreen`: Le nom du fichier moins son extension dans le `res/drawable` répertoire. Si vous avez plusieurs actifs, ils sont tous doivent partager ce nom commun dans leur répertoire respectif.

*   `disallowOverscroll`(boolean, la valeur par défaut `false` ): la valeur `true` pour désactiver la lueur lorsqu'un utilisateur fait défiler au-delà du bord de l'affichage Web.

## `<plugin>`

Android prend en charge à l'aide de `<feature>` comme analogues aux `<plugin>` des éléments.