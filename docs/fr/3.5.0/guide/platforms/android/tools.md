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

# Outils de ligne de commande Android

Le `cordova` de l'utilitaire est un outil de haut niveau qui vous permet de créer des applications sur plusieurs plateformes à la fois. Une ancienne version du framework Cordova fournit des ensembles d'outils de ligne de commande spécifiques à chaque plate-forme. Pour les utiliser comme une alternative à la CLI, vous devez télécharger cette version de Cordova de [cordova.apache.org][1]. Le téléchargement contient les archives distincts pour chaque plate-forme. Développez la plate-forme que vous voulez cibler. Les outils décrits ici sont généralement disponibles dans le niveau supérieur `bin` répertoire, sinon, consultez le fichier **README** pour en savoir plus.

 [1]: http://cordova.apache.org

Pour plus d'informations sur l'interface de bas niveau qui permet aux plugins, voir Plugman à l'aide à gérer les Plugins. Pour une vue d'ensemble, consultez Application Plugins.

## Créer un projet

Exécutez le `create` commande, en spécifiant le chemin d'accès existant au projet, l'identificateur de package inverse-domaine-style et nom complet de l'application. Voici la syntaxe pour Mac et Windows :

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## Construire

Cela nettoie puis génère un projet.

Debug, sur Mac ou Windows :

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

Date de sortie, sur Mac ou Windows :

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## Exécuter l'application

Le `run` commande accepte les paramètres *optionnels* suivants :

*   Spécification de la cible. Cela inclut `--emulator` , `--device` , ou`--target=<targetID>`.

*   Construire la spécification. Cela inclut `--debug` , `--release` , ou`--nobuild`.
    
    $ /path/to/project/cordova/run \[cible\] \[construire\] $ C:\path\to\project\cordova\run.bat \[cible\] \[construire\]

Assurez-vous que vous créez au moins un Android Virtual Device, autrement vous êtes invité à le faire avec la `android` commande. Si plusieurs AVD est disponible en tant que cible, vous êtes invité à sélectionner un. Par défaut la `run` commande détecte un appareil ou un émulateur en cours d'exécution si aucun périphérique n'est trouvé.

## Exploitation forestière

    $ /path/to/project/cordova/log $ C:\path\to\project\cordova\log.bat
    

### Nettoyage

    $ /path/to/project/cordova/clean $ C:\path\to\project\cordova\clean.bat