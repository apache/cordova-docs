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

# Outils de ligne de commande de blackBerry

Le `cordova` de l'utilitaire est un outil de haut niveau qui vous permet de créer des applications sur plusieurs plateformes à la fois. Une ancienne version du framework Cordova fournit des ensembles d'outils de ligne de commande spécifiques à chaque plate-forme. Pour les utiliser comme une alternative à la CLI, vous devez télécharger cette version de Cordova de [cordova.apache.org][1]. Le téléchargement contient les archives distincts pour chaque plate-forme. Développez la plate-forme que vous voulez cibler. Les outils décrits ici sont généralement disponibles dans le niveau supérieur `bin` répertoire, sinon, consultez le fichier **README** pour en savoir plus.

 [1]: http://cordova.apache.org

## Créer un projet

Exécutez le `create` commande, en spécifiant le chemin d'accès existant au projet, l'identificateur de package inverse-domaine-style et nom complet de l'application. Voici la syntaxe pour Mac et Windows :

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName
    

**Remarque :** La plateforme BlackBerry ne tient pas compte de l'espace réservé du nom paquet ( `com.example.project_name` ), mais il a néanmoins nécessaire pour l'utilisation par les outils multi-plateforme.

## Construire un projet

Pour les projets de BlackBerry, assurez-vous que vous personnalisez le `project.properties` fichier dans le répertoire racine de votre projet de Cordova. Vous devez faire pour alimenter votre BlackBerry signature clé de passe et spécifier les emplacements pour le SDK WebWorks BlackBerry et BlackBerry émulateur exécutables.

    $ /path/to/my_new_project/cordova/build <platform>
    $ /path/to/my_new_project/cordova/build.bat <platform>
    

## Lancez l'émulateur

Pour les projets de BlackBerry, assurez-vous que vous personnalisez le `project.properties` fichier à la racine de votre répertoire de projet Cordova. Vous devez faire pour alimenter votre BlackBerry signature clé de passe et spécifier les emplacements pour le SDK WebWorks BlackBerry et BlackBerry émulateur exécutables.

    $ /path/to/my_new_project/cordova/run <platform>
    

et puis choisissez « non » lorsque vous êtes invité avec :

    Vous avez un téléphone intelligent BlackBerry connecté à votre ordinateur ? (o/n) $ /path/to/my_new_project/cordova/run <platform>
    

et puis choisissez « non » lorsque vous êtes invité avec :

    Vous avez un téléphone intelligent BlackBerry connecté à votre ordinateur ? (o/n)
    

## Exploitation forestière

Malheureusement, le streaming de journaux directement à partir de l'appareil est actuellement non pris en charge. Cependant, BlackBerry offre un support Web Inspector intégré pour Playbook et BlackBerry smartphone exécutant BlackBerry OS 7.0 et plus. Vous pouvez aussi accéder aux journaux de votre application (y compris tous les appels à `console.log` ) sur votre appareil en maintenant enfoncée la touche « ALT » depuis l'écran d'accueil et en tapant les touches '' lglg''.