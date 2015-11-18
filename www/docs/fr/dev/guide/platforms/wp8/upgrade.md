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

title: La mise à niveau de Windows Phone 8
---

# La mise à niveau de Windows Phone 8

Ce guide montre comment modifier des projets Windows Phone 8, mise à niveau d'anciennes versions de Cordova. Certaines de ces instructions s'appliquent aux projets créés avec un ensemble plu d'outils de ligne de commande qui précèdent le `cordova` utilitaire CLI. Voir l'Interface de ligne de commande pour plus d'informations comment mettre à jour la version de l'interface CLI. La section suivante montre comment mettre à niveau des projets de la CLI et de non-CLI.

## Mise à jour 3.6.0 Projects to 4.0.0

Pour les projets non-CLI, exécutez :

        bin/update path/to/project
    

Pour les projets de la CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez `cordova platform update wp8` dans vos projets existants.

## Mise à niveau vers 3.2.0 de 3.1.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update wp8`

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin\update < project_path >
    

## Mise à niveau vers 3.1.0 de 3.0.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update wp8`

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin\update < project_path >
    

## Mise à niveau à la CLI (3.0.0) de 2.9.0

1.  Créez un projet Apache Cordova 3.0.0 utilisant le cordova CLI, tel que décrit dans l'Interface de ligne de commande.

2.  Ajoutez vos plates-formes cordova au projet, par exemple :`cordova
platform add wp8`.

3.  Copiez le contenu du projet `www` Répertoire de la `www` répertoire à la racine du projet Cordoue vous venez de créer.

4.  Copier ou écraser tout actif natif de votre projet d'origine ( `SplashScreen` , `ApplicationIcon` , etc.), ce qui bien sûr d'ajouter de nouveaux fichiers à la `.csproj` fichier. Le windows mobile de générations de projets à l'intérieur le `platforms\wp8` répertoire.

5.  Utilisez l'outil CLI de cordova pour installer des plugins dont vous avez besoin. Notez que la CLI gère toutes les principales API comme plugins, donc ils peuvent avoir besoin d'être ajouté. Seulement 3.0.0 plugins sont compatibles avec l'interface CLI.

6.  Générer et tester.

## Mise à niveau vers 3.0.0 (non-CLI) de 2.x

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer une nouvelle Apache Cordova WP8 3.0.0 du projet.

2.  Copiez le contenu de la `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

4.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

5.  Générer et tester.

**NOTE**: tous les core API est supprimés de la version 3.0 de Cordova et doit être installé séparément comme les plugins. Pour plus d'informations sur la façon de réactiver ces fonctionnalités dans un flux de travail non-CLI, voir Plugman à l'aide à gérer les Plugins.