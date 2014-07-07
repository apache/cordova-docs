* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android Shell Tool Guide

Ce guide montre comment utiliser ensemble de Cordova d'outils axés sur la plate-forme de shell pour développer des applications Android. Cette voie de développement, discutée dans l'aperçu, vous offrent un plus grand choix de développement que l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande. Par exemple, vous devez utiliser les outils de shell lorsque vous déployez une coutume Cordova WebView aux côtés de composants natifs. Avant d'utiliser ou l'autre voie de développement, vous devez d'abord configurer l'environnement Android SDK comme décrit dans le Guide de la plate-forme Android.

Pour activer les outils de la coquille pour Android, Télécharger Cordova de [cordova.apache.org][1]. Le téléchargement contient les archives distincts pour chaque plate-forme. Développez chacun vous souhaitez cibler, `android` dans ce cas. Les outils pertinents sont généralement disponibles dans le niveau supérieur `bin` répertoire, sinon, consultez le fichier **README** pour en savoir plus.

 [1]: http://cordova.apache.org

Ces outils vous permettent de créer, générer et exécuter des applications Android. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins. Voir Application Plugins pour plus d'informations sur la façon de développer des plugins.

## Créer un projet

Exécutez le `create` commande, en spécifiant le chemin d'accès existant au projet, l'identificateur de package inverse-domaine-style et nom complet de l'application. Voici la syntaxe pour Mac/Linux et Windows :

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Construire

Cela nettoie puis génère un projet.

Debug, sur Mac/Linux ou Windows :

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Date de sortie, sous Mac/Linux ou Windows :

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Exécuter l'application

Le `run` commande accepte les paramètres *optionnels* suivants :

*   Spécification de la cible. Cela inclut `--emulator` , `--device` , ou`--target=<targetID>`.

*   Construire la spécification. Cela inclut `--debug` , `--release` , ou`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Assurez-vous que vous créez au moins un Android Virtual Device, autrement vous êtes invité à le faire avec la `android` commande. Si plusieurs AVD est disponible en tant que cible, vous êtes invité à sélectionner un. Par défaut la `run` commande détecte un appareil ou un émulateur en cours d'exécution si aucun périphérique n'est trouvé.

## Exploitation forestière

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Nettoyage

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Utilisation manuelle de fourmi

Si vous souhaitez appeler Ant directement à partir de la ligne de commande tels que `ant debug install` , vous devez spécifier des paramètres supplémentaires pour la commande de la fourmi :

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

C'est parce que les répertoires utilisés par les scripts Ant de Cordova diffèrent de celles par défaut. Ceci est fait pour éviter des conflits lorsque Ant est exécuté à partir de la ligne de commande par rapport à l'intérieur de l'Eclipse/ADT.

Ces paramètres supplémentaires sont ajoutés automatiquement pour vous lorsque vous utilisez le `cordova/build` et `cordova/run` scripts décrits ci-dessus. C'est pourquoi il est recommandé d'utiliser le `cordova/build` et `cordova/run` scripts au lieu de Ant appel directement à partir de la ligne de commande.