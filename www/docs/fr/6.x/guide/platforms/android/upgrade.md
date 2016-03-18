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

title: Mise à jour Android
---

# Mise à jour Android

Ce guide montre comment modifier des projets Android mise à niveau d'anciennes versions de Cordova. La plupart de ces instructions s'appliquent aux projets créés avec un ensemble plu d'outils de ligne de commande qui précèdent le `cordova` utilitaire CLI. Voir l'Interface de ligne de commande pour plus d'informations comment mettre à jour la version de l'interface CLI.

## Mise à niveau vers 4.0.0

Il y a des mesures spécifiques de mise à niveau indispensable pour tirer parti des changements importants en 4.0.0. Tout d'abord, les étapes de mise à niveau communes sont nécessaires comme ci-dessous.

Pour les projets non-CLI, exécutez :

        bin/update path/to/project


Pour les projets de la CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez `cordova platform update android` dans vos projets existants.

### La mise à niveau de la liste blanche

Toutes les fonctionnalités de liste blanche sont maintenant implémentée via plugin. Sans un plugin, votre application n'est plus protégée par une liste blanche après mise à niveau vers 4.0.0. Cordova a deux plugins de liste blanche, qui offrent différents niveaux de protection.

1.  Le plugin de `cordova-plugin-whitelist` *(recommandé)*

    *   Ce plugin est fortement recommandé, car il est plus sûr et plus configurable que la liste blanche dans les versions précédentes
    *   Voir [cordova-plugin-whitelist][1] pour plus de détails sur les modifications de configuration requises
    *   Run : `cordova plugin ajouter cordova-plugin-crosswalk-webview`

2.  Le plugin de `cordova-plugin-legacy-whitelist`

    *   Ce greffon fournit le même comportement de la liste blanche que les versions précédentes. Voir [cordova-plugin-legacy-whitelist][2]
    *   Aucune modification de configuration est requise, mais il fournit une protection moindre que le plugin recommandé
    *   Run : `cordova plugin ajouter cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### En utilisant le tableau de Crosswalk WebView

Par défaut, votre application continuera d'utiliser le système WebView fournie par l'appareil. Si vous souhaitez utiliser le tableau de concordance WebView au lieu de cela, il suffit d'ajouter le plugin de passage pour piétons :

    cordova plugin add cordova-plugin-crosswalk-webview


À ajouté le plugin, votre application obtient le passage pour piétons de WebView installé et configuré correctement.

### La mise à niveau vers le Plugin de Splashscreen

Si votre application, utilisation d'un écran de démarrage, que la fonctionnalité a été transférée à un plugin. Les options de configuration pour les écrans de démarrage sont inchangées. La seule mise à niveau étape nécessaire consiste à ajouter le plugin :

    cordova plugin add cordova-plugin-splashscreen


## Mise à niveau vers 3.7.1 de 3.6.0

Pour les projets non-CLI, exécutez :

        bin/update path/to/project


Pour les projets de la CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez `cordova platform update android` dans vos projets existants.

## Mise à niveau vers 3.3.0 de 3.2.0

Suivez les mêmes instructions que pour `3.2.0`.

À partir de 3.3.0, le runtime de Cordova est maintenant compilé comme une bibliothèque Android au lieu d'un pot. Cela ne devrait avoir aucun effet pour l'utilisation de ligne de commande, mais IDE utilisateurs auront besoin d'importer le projet `MyProject-CordovaLib` nouvellement ajouté dans leur espace de travail.

## Mise à niveau vers 3.2.0 de 3.1.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Consultez l'Interface de ligne de commande.

2.  Exécutez `cordova platform update android`

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin/update <project_path>


**AVERTISSEMENT :** Sur Android 4.4 - 4.4.3 Android, création d'un fichier d'entrée élément avec type = « file » n'ouvrira pas la boîte de dialogue Sélecteur. Il s'agit d'une régression avec Chrome sur Android et le problème peut être reproduit dans le navigateur de Chrome autonome sur Android (voir http://code.google.com/p/android/issues/detail?id=62220) la solution de contournement suggérée est d'utiliser le transfert de fichiers et fichiers plugins pour Android 4.4. Vous pouvez écouter un événement onClick du input type = « file » et ensuite apparaître un sélecteur de fichier UI. Afin de relier les données du formulaire avec le téléchargement, vous pouvez utiliser JavaScript pour fixer des valeurs de formulaire à la requête POST plusieurs partie qui fait du transfert de fichiers.

## Mise à niveau vers 3.1.0 de 3.0.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Consultez l'Interface de ligne de commande.

2.  Exécutez `cordova platform update android`

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin/update <project_path>


## Mise à niveau à la CLI (3.0.0) de 2.9.0

1.  Créez un projet Apache Cordova 3.0.0 utilisant le cordova CLI, comme décrit dans l'Interface de ligne de commande.

2.  Ajouter vos plates-formes le projet cordova, par exemple : `cordova platform add android`.

3.  Copiez le contenu du répertoire `www` de votre projet dans le répertoire `www` à la racine du projet Cordoue que vous venez de créer.

4.  Copiez tout actif natif de votre ancien projet dans les répertoires appropriés sous `platforms/android` : ce répertoire est où votre projet cordova-android natif existe.

5.  Utilisez l'outil CLI de cordova pour installer des plugins dont vous avez besoin. Notez que la CLI gère toutes les principales API comme des plugins, donc ils peuvent avoir besoin d'être ajouté. Seulement 3.0.0 plugins sont compatibles avec l'interface CLI.

## Mise à niveau vers 3.0.0 de 2.9.0

1.  Créez un nouveau projet Apache Cordova Android.

2.  Copiez le contenu du répertoire `www` dans le nouveau projet.

3.  Copiez tout actif Android native du répertoire `res` au nouveau projet.

4.  Copier les plugins que vous avez installé des `src` de sous-répertoires dans le nouveau projet.

5.  Veillez à mettre à niveau tout déconseillé `< plugin >` références de votre ancien fichier `config.xml` à la nouvelle `<feature>` spécification.

6.  Mise à jour toutes les références à l'ensemble de `org.apache.cordova.api` pour être `org.apache.cordova`.

    **NOTE** : toutes les principales API ont été supprimées et doit être installé comme plugins. S'il vous plaît voir les Plugman à l'aide à gérer les Plugins Guide pour plus de détails.

## Mise à niveau vers 2.9.0 de 2.8.0

1.  Run `bin/update <project_path>`.

## Mise à niveau vers 2.8.0 de 2.7.0

1.  Retirer `cordova-2.7.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.8.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

<!-- SS Eclipse -->

1.  Copiez le nouveau `cordova.js` dans votre projet.

2.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier `cordova.js`.

3.  Copiez le fichier `res/xml/config.xml` pour correspondre à `framework/res/xml/config.xml`.

4.  Mise à jour `framework/res/xml/config.xml` pour avoir des paramètres similaires comme il l'a fait précédemment.

5.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.7.0 de 2.6.0

1.  Retirer `cordova-2.6.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.7.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.7.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier de `cordova-2.7.0.js`.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Mise à jour `framework/res/xml/config.xml` pour avoir des paramètres similaires comme il l'a fait précédemment.

8.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau à 2.6.0 de 2.5.0

1.  Retirer `cordova-2.5.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.6.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.6.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-2.6.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Mise à jour `framework/res/xml/config.xml` pour avoir des paramètres similaires comme il l'a fait précédemment.

8.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

Exécutez `bin/update < projet >` avec le chemin d'accès du projet figurant dans le répertoire Source de Cordova.

## Mise à niveau vers la version 2.5.0 de 2.4.0

1.  Retirer `cordova-2.4.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.5.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.5.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-2.5.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Mise à jour `framework/res/xml/config.xml` pour avoir des paramètres similaires comme il l'a fait précédemment.

8.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.4.0 de 2.3.0

1.  Retirer `cordova-2.3.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.4.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.4.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-2.4.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.3.0 de 2.2.0

1.  Retirer `cordova-2.2.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.3.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.3.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-2.3.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.2.0 de 2.1.0

1.  Retirer `cordova-2.1.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.2.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.2.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-2.2.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.1.0 de 2.0.0

1.  Retirer `cordova-2.0.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.1.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.1.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-2.1.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.0.0 de 1.9.0

1.  Retirer `cordova-1.9.0.jar` du répertoire `libs` du projet.

2.  `Cordova-2.0.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.0.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-2.0.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

Dans la 2.0.0 version, le fichier `config.xml` combine et remplace `cordova.xml` et `plugins.xml`. Les anciens fichiers sont obsolètes et pendant qu'ils travaillent toujours en 2.0.0, cessera de fonctionner dans une version ultérieure.

## Mise à niveau vers 1.9.0 de 1.8.1

1.  Retirer `cordova-1.8.0.jar` du répertoire `libs` du projet.

2.  `Cordova-1.9.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.9.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier de `cordova-1.9.0.js`.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

En raison de l'introduction de la `CordovaWebView` dans le 1.9.0 version, plugins tiers peuvent ne pas fonctionner. Ces plugins ont besoin d'obtenir un contexte de l' `CordovaInterface` à l'aide de `getContext()` ou `getActivity()`. Si vous n'êtes pas un développeur Android expérimenté, veuillez contacter le responsable de plugin et ajouter cette tâche à leur traqueur de bug.

## Mise à niveau vers 1.8.0 de 1.8.0

1.  Retirer `cordova-1.8.0.jar` du répertoire `libs` du projet.

2.  `Cordova-1.8.1.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.8.1.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier de `cordova-1.8.1.js`.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.8.0 de 1.7.0

1.  Retirer `cordova-1.7.0.jar` du répertoire `libs` du projet.

2.  `Cordova-1.8.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.8.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-1.8.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.8.0 de 1.7.0

1.  Retirer `cordova-1.7.0.jar` du répertoire `libs` du projet.

2.  `Cordova-1.8.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.8.0.js` dans votre projet.

5.  Mettre à jour votre code HTML permettant d'utiliser la nouvelle `cordova-1.8.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre `framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.7.0 de 1.6.1

1.  Retirer `cordova-1.6.1.jar` du répertoire `libs` du projet.

2.  `Cordova-1.7.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.7.0.js` dans votre projet.

5.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.6.1 de 1.6.0

1.  Retirer `cordova-1.6.0.jar` du répertoire `libs` du projet.

2.  `Cordova-1.6.1.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.6.1.js` dans votre projet.

5.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.6.0 de 1.5.0

1.  Retirer `cordova-1.5.0.jar` du répertoire `libs` du projet.

2.  `Cordova-1.6.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.6.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier de `cordova-1.6.0.js`.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Remplacez `res/xml/phonegap.xml` par `res/xml/cordova.xml` pour correspondre à `framework/res/xml/cordova.xml`.

## Mise à niveau vers 1.5.0 de 1.4.0

1.  Retirer `phonegap-1.4.0.jar` du répertoire `libs` du projet.

2.  `Cordova-1.5.0.jar` s'ajoute le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.5.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier de `cordova-1.5.0.js`.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Remplacez `res/xml/phonegap.xml` par `res/xml/cordova.xml` pour correspondre à `framework/res/xml/cordova.xml`.

## Mise à niveau vers 1.4.0 de 1.3.0

1.  Retirer `phonegap-1.3.0.jar` du répertoire `libs` du projet.

2.  Ajouter `phonegap-1.4.0.jar` pour le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.4.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier `phonegap-1.4.0.js`.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Mise à jour `res/xml/phonegap.xml` pour correspondre`framework/res/xml/phonegap.xml`.

## Mise à niveau vers 1.3.0 de 1.2.0

1.  Retirer `phonegap-1.2.0.jar` du répertoire `libs` du projet.

2.  Ajouter `phonegap-1.3.0.jar` pour le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.3.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier `phonegap-1.2.0.js`.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Mise à jour `res/xml/phonegap.xml` pour correspondre`framework/res/xml/phonegap.xml`.

## Mise à niveau vers 1.2.0 de 1.1.0

1.  Retirer `phonegap-1.1.0.jar` du répertoire `libs` du projet.

2.  Ajouter `phonegap-1.2.0.jar` pour le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.2.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier `phonegap-1.2.0.js`.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Mise à jour `res/xml/phonegap.xml` pour correspondre`framework/res/xml/phonegap.xml`.

## Mise à niveau vers 1.1.0 de 1.0.0

1.  Retirer `phonegap-1.0.0.jar` du répertoire `libs` du projet.

2.  Ajouter `phonegap-1.1.0.jar` pour le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.1.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier `phonegap-1.1.0.js`.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.0.0 de 0.9.6

1.  Retirer `phonegap-0.9.6.jar` du répertoire `libs` du projet.

2.  Ajouter `phonegap-1.0.0.jar` pour le répertoire du projet `libs`.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.0.0.js` dans votre projet.

5.  Mettez à jour votre code HTML permettant d'utiliser le nouveau fichier `phonegap-1.0.0.js`.

6.  Ajouter le `res/xml/plugins.xml` pour correspondre à `framework/res/xml/plugins.xml`.
