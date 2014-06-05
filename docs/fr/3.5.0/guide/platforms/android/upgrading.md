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

# Mise à jour Android

Ce guide montre comment modifier des projets Android mise à niveau d'anciennes versions de Cordova. La plupart de ces instructions s'appliquent aux projets créés avec un ensemble plu d'outils de ligne de commande qui précèdent le `cordova` utilitaire CLI. Voir l'Interface de ligne de commande pour plus d'informations comment mettre à jour la version de l'interface CLI.

## Mise à niveau vers 3.3.0 de 3.2.0

Suivez les mêmes instructions que pour`3.2.0`.

À partir de 3.3.0, le runtime de Cordova est maintenant compilé comme une bibliothèque Android au lieu d'un pot. Ceci ne devrait avoir aucun effet pour l'utilisation de ligne de commande, mais IDE utilisateurs auront besoin d'importer le nouvellement ajouté `MyProject-CordovaLib` projet dans leur espace de travail.

## Mise à niveau vers 3.2.0 de 3.1.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update android`

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin/update <project_path>
    

**Avertissement :** Commençant sur Android 4.4, création d'un élément du fichier d'entrée avec type = « file » n'ouvrira pas la boîte de dialogue Sélecteur. Il s'agit d'une régression avec Chrome sur Android et le problème peut être reproduit dans le navigateur de Chrome autonome sur Android (voir http://code.google.com/p/android/issues/detail?id=62220) la solution de contournement suggérée est d'utiliser le transfert de fichiers et fichiers plugins pour Android 4.4. Vous pouvez écouter un événement onClick du input type = « file » et ensuite apparaître un sélecteur de fichier UI. Afin de relier les données du formulaire avec le téléchargement, vous pouvez utiliser JavaScript pour fixer des valeurs de formulaire à la requête POST plusieurs partie qui fait du transfert de fichiers. Ce bug existe toujours à partir de Android 4.4.2

## Mise à niveau vers 3.1.0 de 3.0.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update android`

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin/update <project_path>
    

## Mise à niveau à la CLI (3.0.0) de 2.9.0

1.  Créez un projet Apache Cordova 3.0.0 utilisant le cordova CLI, tel que décrit dans l'Interface de ligne de commande.

2.  Ajoutez vos plates-formes le projet cordova, par exemple :`cordova
platform add android`.

3.  Copiez le contenu de votre projet `www` Répertoire de la `www` répertoire à la racine du projet Cordoue vous venez de créer.

4.  Copiez tout actif natif de votre ancien projet dans les répertoires appropriés sous `platforms/android` : ce répertoire est où votre projet cordova-android natif existe.

5.  Utilisez l'outil CLI de cordova pour installer des plugins dont vous avez besoin. Notez que la CLI gère toutes les principales API comme plugins, donc ils peuvent avoir besoin d'être ajouté. Seulement 3.0.0 plugins sont compatibles avec l'interface CLI.

## Mise à niveau vers 3.0.0 de 2.9.0

1.  Créez un nouveau projet Apache Cordova Android.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet.

3.  Copier n'importe quel actif Android natif de votre `res` répertoire vers le nouveau projet.

4.  Copie sur les plug-ins que vous avez installé de la `src` sous-répertoires dans le nouveau projet.

5.  Assurez-vous de mettre à niveau tout obsolète `<plugin>` les références de votre ancien `config.xml` fichier pour le nouveau `<feature>` spécification.

6.  Mise à jour toutes les références à la `org.apache.cordova.api` paquet d'être`org.apache.cordova`.
    
    **NOTE**: toutes les principales API ont été supprimées et doit être installé comme plugins. S'il vous plaît voir les Plugman à l'aide à gérer les Plugins Guide pour plus de détails.

## Mise à niveau vers 2.9.0 de 2.8.0

1.  Exécutez`bin/update <project_path>`.

## Mise à niveau vers 2.8.0 de 2.7.0

1.  Supprimer `cordova-2.7.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.8.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

<!-- SS Eclipse -->

1.  Copiez le nouveau `cordova.js` dans votre projet.

2.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova.js` fichier.

3.  Copie le `res/xml/config.xml` fichier corresponde à`framework/res/xml/config.xml`.

4.  Mise à jour `framework/res/xml/config.xml` pour avoir des paramètres similaires comme il l'a fait précédemment.

5.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.7.0 de 2.6.0

1.  Supprimer `cordova-2.6.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.7.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.7.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.7.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Mise à jour `framework/res/xml/config.xml` pour avoir des paramètres similaires comme il l'a fait précédemment.

8.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau à 2.6.0 de 2.5.0

1.  Supprimer `cordova-2.5.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.6.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.6.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.6.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Mise à jour `framework/res/xml/config.xml` pour avoir des paramètres similaires comme il l'a fait précédemment.

8.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

Exécuter `bin/update <project>` avec le chemin d'accès du projet figurant dans le répertoire Source de Cordova.

## Mise à niveau vers la version 2.5.0 de 2.4.0

1.  Supprimer `cordova-2.4.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.5.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.5.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.5.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Mise à jour `framework/res/xml/config.xml` pour avoir des paramètres similaires comme il l'a fait précédemment.

8.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.4.0 de 2.3.0

1.  Supprimer `cordova-2.3.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.4.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.4.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.4.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.3.0 de 2.2.0

1.  Supprimer `cordova-2.2.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.3.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.3.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.3.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.2.0 de 2.1.0

1.  Supprimer `cordova-2.1.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.2.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.2.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.2.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.1.0 de 2.0.0

1.  Supprimer `cordova-2.0.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.1.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.1.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.1.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

7.  Copier les fichiers `bin/templates/cordova` pour le projet `cordova` répertoire.

## Mise à niveau vers 2.0.0 de 1.9.0

1.  Supprimer `cordova-1.9.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-2.0.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-2.0.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.0.0.js` fichier.

6.  Copie le `res/xml/config.xml` faire correspondre`framework/res/xml/config.xml`.

Dans la 2.0.0 version, le `config.xml` fichier combine et remplace `cordova.xml` et `plugins.xml` . Les anciens fichiers sont obsolètes et pendant qu'ils travaillent toujours en 2.0.0, cessera de fonctionner dans une version ultérieure.

## Mise à niveau vers 1.9.0 de 1.8.1

1.  Supprimer `cordova-1.8.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-1.9.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.9.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.9.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

En raison de l'introduction de la `CordovaWebView` dans le 1.9.0 libération, plugins tiers peuvent ne pas fonctionner. Ces plugins ont besoin d'obtenir un contexte de le `CordovaInterface` à l'aide de `getContext()` ou `getActivity()` . Si vous n'êtes pas un développeur Android expérimenté, veuillez contacter le responsable de plugin et ajouter cette tâche à leur traqueur de bug.

## Mise à niveau vers 1.8.0 de 1.8.0

1.  Supprimer `cordova-1.8.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-1.8.1.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.8.1.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.8.1.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.8.0 de 1.7.0

1.  Supprimer `cordova-1.7.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-1.8.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.8.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.8.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.8.0 de 1.7.0

1.  Supprimer `cordova-1.7.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-1.8.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.8.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.8.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.7.0 de 1.6.1

1.  Supprimer `cordova-1.6.1.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-1.7.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.7.0.js` dans votre projet.

5.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.6.1 de 1.6.0

1.  Supprimer `cordova-1.6.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-1.6.1.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.6.1.js` dans votre projet.

5.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.6.0 de 1.5.0

1.  Supprimer `cordova-1.5.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-1.6.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.6.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.6.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Remplacer `res/xml/phonegap.xml` avec `res/xml/cordova.xml` pour correspondre`framework/res/xml/cordova.xml`.

## Mise à niveau vers 1.5.0 de 1.4.0

1.  Supprimer `phonegap-1.4.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `cordova-1.5.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `cordova-1.5.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.5.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Remplacer `res/xml/phonegap.xml` avec `res/xml/cordova.xml` pour correspondre`framework/res/xml/cordova.xml`.

## Mise à niveau vers 1.4.0 de 1.3.0

1.  Supprimer `phonegap-1.3.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `phonegap-1.4.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.4.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `phonegap-1.4.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Mise à jour `res/xml/phonegap.xml` pour correspondre`framework/res/xml/phonegap.xml`.

## Mise à niveau vers 1.3.0 de 1.2.0

1.  Supprimer `phonegap-1.2.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `phonegap-1.3.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.3.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `phonegap-1.2.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Mise à jour `res/xml/phonegap.xml` pour correspondre`framework/res/xml/phonegap.xml`.

## Mise à niveau vers 1.2.0 de 1.1.0

1.  Supprimer `phonegap-1.1.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `phonegap-1.2.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.2.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `phonegap-1.2.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

7.  Mise à jour `res/xml/phonegap.xml` pour correspondre`framework/res/xml/phonegap.xml`.

## Mise à niveau vers 1.1.0 de 1.0.0

1.  Supprimer `phonegap-1.0.0.jar` partir du projet `libs` répertoire.

2.  Ajouter `phonegap-1.1.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.1.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `phonegap-1.1.0.js` fichier.

6.  Mise à jour `res/xml/plugins.xml` pour correspondre`framework/res/xml/plugins.xml`.

## Mise à niveau vers 1.0.0 de 0.9.6

1.  Supprimer `phonegap-0.9.6.jar` partir du projet `libs` répertoire.

2.  Ajouter `phonegap-1.0.0.jar` au projet `libs` répertoire.

3.  Si vous utilisez Eclipse, veuillez actualiser votre projet Eclipse et faire un nettoyage.

4.  Copiez le nouveau `phonegap-1.0.0.js` dans votre projet.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `phonegap-1.0.0.js` fichier.

6.  Ajouter le `res/xml/plugins.xml` faire correspondre`framework/res/xml/plugins.xml`.