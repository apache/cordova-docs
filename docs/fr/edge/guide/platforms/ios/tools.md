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

# iOS Command-line Tools

Le `cordova` de l'utilitaire est un outil de haut niveau qui vous permet de créer des applications sur plusieurs plateformes à la fois. Une ancienne version du framework Cordova fournit des ensembles d'outils de ligne de commande spécifiques à chaque plate-forme. Pour les utiliser comme une alternative à la CLI, vous devez télécharger cette version de Cordova de [cordova.apache.org][1]. Le téléchargement contient les archives distincts pour chaque plate-forme. Développez la plate-forme que vous voulez cibler. Les outils décrits ici sont généralement disponibles dans le niveau supérieur `bin` répertoire, sinon, consultez le fichier **README** pour en savoir plus.

 [1]: http://cordova.apache.org

Les outils de ligne de commande iOS sont fondées sur les scripts shell et reposent sur les outils de ligne de commande de Xcode tels que `xcode-select` et`xcodebuild`.

Pour plus d'informations sur l'interface de bas niveau qui permet aux plugins, voir Plugman à l'aide à gérer les Plugins. Pour une vue d'ensemble, consultez Application Plugins.

## Créer un projet

Exécutez le `create` commande, en spécifiant le chemin d'accès existant au projet, l'identificateur de package inverse-domaine-style et nom complet de l'application.

    $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Construire un projet

    $ /path/to/my_new_project/cordova/build
    

## Exécuter l'application sur un émulateur

    $ /path/to/my_new_project/cordova/run
    

## Libérant

    $ /path/to/my_new_project/cordova/release
    

## Exploitation forestière

    $ /path/to/my_new_project/cordova/log