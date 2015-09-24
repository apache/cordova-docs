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

title: Windows Phone outils de ligne de commande
---

# Windows Phone outils de ligne de commande

Le `cordova` de l'utilitaire est un outil de haut niveau qui vous permet de créer des applications sur plusieurs plateformes à la fois. Une ancienne version du framework Cordova fournit des ensembles d'outils de ligne de commande spécifiques à chaque plate-forme. Pour les utiliser comme une alternative à la CLI, vous devez télécharger cette version de Cordova de [cordova.apache.org][1]. Le téléchargement contient les archives distincts pour chaque plate-forme. Développez la plate-forme que vous voulez cibler. Les outils décrits ici sont généralement disponibles dans le niveau supérieur `bin` répertoire, sinon, consultez le fichier **README** pour en savoir plus.

 [1]: http://cordova.apache.org

## Windows Phone

Les outils de ligne de commande Windows Phone prend en charge la création, génération et l'exécution de nouveaux projets. Commandes doivent être exécutées à partir d'une invite cmd ou powershell.

Le repo WP8 inclut maintenant le code pour construire les deux WP7 + WP8 apps. Le repo a des sous-répertoires pour chaque : `wp7/` et`wp8/`.

## Créer un projet

Il y a 2 façons de faire pour créer une nouvelle application Cordova WP7 Apache ou WP8.

### Exécutez le fichier de commandes pour créer et installer les modèles.

*   La racine de la repo contient un fichier createTemplates.bat. Un double clic sur ce fichier va générer 2 fichiers .zip. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip où x.x.x correspond au numéro de version actuel) Pour facilement utiliser ces fichiers dans Visual Studio, copie à « Mes Documents\Visual Studio 2012\Templates\ProjectTemplates\ » vous puis sera en mesure de créer de nouvelles applications de l'Apache Cordova Windows Phone du fichier Visual Studio-> menu du nouveau projet.

*   Si vous exécutez le fichier de commandes de la ligne de commande, vous pouvez aussi appeler avec un paramètre pour installer automatiquement

Exécutez le script :

    > createTemplates.bat-installer
    

### Utiliser les scripts de création sur la ligne de commande

Exécutez le `create` commande, en spécifiant le chemin d'accès existant au projet, l'identificateur de package inverse-domaine-style et nom complet de l'application. Voici la syntaxe pour Windows Phone 7 et 8 :

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Lancez Visual Studio et ouvrez le fichier Solution (.sln) en (C:\path\to\my\_new\_project)

Générer et exécuter ce

## Génération de votre projet (nettoie puis construit)

*   Débogage
    
    $ C:\path\to\my\_new\_project\cordova\build--debug

*   Libération
    
    $ C:\path\to\my\_new\_project\cordova\build--communiqué

## Lancez votre application

Exécutez la commande « exécuter » avec les paramètres *facultatifs* suivants

*   Spécification de la cible. Cela inclut `--emulator` , `--device` , ou`--target=<targetID>`.

*   Construire la spécification. Cela inclut `--debug` , `--release` , ou`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[cible\] \[construire\]

Par défaut la `run` commande s'appellera avec `--emulator --debug` si les drapeaux n'est pas fournis.

## Nettoyage

    $ C:\path\to\my_new_project\cordova\clean