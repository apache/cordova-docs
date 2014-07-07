* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# iOS Shell Tool Guide

Ce guide montre comment utiliser ensemble de Cordova d'outils axés sur la plate-forme de shell pour développer des applications iOS. Cette voie de développement, discutée dans l'aperçu, vous offrent une plus grande gamme d'options de développement pour iOS que l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande. Par exemple, vous devez utiliser les outils de shell lorsque vous déployez une coutume Cordova WebView aux côtés de composants natifs. Avant d'utiliser ou l'autre voie de développement, vous devez d'abord configurer l'environnement SDK comme décrit dans le Guide de la plate-forme d'iOS. Ces outils s'appuient sur les outils de ligne de commande de Xcode tels que `xcode-select` et`xcodebuild`.

Pour activer les outils de la coquille pour iOS, Télécharger Cordova de [cordova.apache.org][1]. Le téléchargement contient les archives distincts pour chaque plate-forme. Développez chacun vous souhaitez cibler, `ios` dans ce cas. Les outils pertinents sont généralement disponibles dans le niveau supérieur `bin` répertoire, sinon, consultez le fichier **README** pour en savoir plus.

 [1]: http://cordova.apache.org

Ces outils vous permettent de créer, générer et exécuter des applications iOS. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins. Voir Application Plugins pour plus d'informations sur la façon de développer des plugins.

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