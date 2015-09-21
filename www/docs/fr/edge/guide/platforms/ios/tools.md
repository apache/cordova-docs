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

title: iOS Shell Tool Guide
---

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

        $ /path/to/my_new_project/cordova/run--émulateur
    

## Exécuter l'application sur un périphérique

        $ /path/to/my_new_project/cordova/run--dispositif
    

## Signature de l'App

Vous pouvez apprendre plus sur la signature, distribuant des applications iOS, création d'un certificat et le provisionnement profil sur l' [iOS Developer Library][2].

 [2]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html

Pour signer l'application à Cordoue, vous devez le texte suivant :

*   Identité (`--codeSignIdentity`) de signature de code : [à l'aide de XCode][3] , vous pouvez créer un nouveau iOS signant l'identité et l'ajouter à votre trousseau. Le type de l'identité - typiquement de distribution ou de développement, de la signature de code doit être spécifié ici.

*   Provisioning profil (`--provisioningProfile`): [l'utilisation du centre de membre Apple][4] vous pouvez créer un profil de configuration. Télécharger le profil de configuration sur votre ordinateur et lancez-le dans XCode pour l'enregistrer. Elle est copiée ici sur votre Mac : profils de ~/Library/MobileDevice/Provisioning\ /. Ouvrir dans un éditeur de texte, vous pouvez trouver l'UUID qui doit être spécifiées ici.

*   Signature règles (`--codeSignResourceRules`) (en option) de la ressource de code : permet de spécifier des règles personnalisées de ressource signature.

 [3]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6
 [4]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61

Ces paramètres peuvent être spécifiés en utilisant les arguments de ligne de commande ci-dessus à `buile` ou `run` des scripts :

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 
    

Alternativement, vous pouvez spécifier les dans un fichier (build.json) de configuration de build à l'aide (`--buildConfig`) argument. Voici un exemple de fichier de configuration de génération :

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }
    

Il y a aussi des soutien à mélanger et assortir les arguments de ligne de commande et les paramètres dans le fichier build.json. Les valeurs de la ligne de commande arguments obtiendrez priorité.

## Exploitation forestière

        $ /path/to/my_new_project/cordova/log