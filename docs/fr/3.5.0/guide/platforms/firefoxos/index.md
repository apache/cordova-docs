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

# Firefox OS Platform Guide

Ce guide décrit comment configurer votre environnement de développement pour créer des applications de Cordova pour appareils Firefox OS, puis de tester et de publier ces apps.

## Exigences et soutien

Firefox OS apps sont fondamentalement juste web apps, avec l'ajout d'un fichier manifest.webapp qui définit les métadonnées relatives à l'application et lui permet d'être installé sur Firefox OS appareils. N'importe quelle plate-forme qui supporte Cordova peut être utilisé.Pour en savoir plus sur la création d'applications web, consultez le [Centre App][1] sur [MDN][2].

 [1]: https://developer.mozilla.org/en-US/Apps
 [2]: https://developer.mozilla.org/en-US/

## Installation et configuration de l'environnement

Commencez par installer [Node.js][3], puis installer le package de Cordoue comme suit :

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

Ensuite, créez un exemple d'application Cordova, puis naviguer dans le répertoire nouvellement créé :

    $ cordova create test-app
    $ cd test-app
    

Ajouter Firefox OS comme une plate-forme prise en charge de l'application avec le texte suivant :

    $ cordova platform add firefoxos
    

Cela crée une application Firefox OS dans le répertoire de plates-formes/firefoxos/www, qui actuellement semble le même, sauf qu'il a un fichier de manifeste de Firefox (manifest.webapp) dans le répertoire www.

## Développer votre app

À ce stade, vous êtes prêt à aller, modifiez le code à l'intérieur de test-app/www et ce que vous voulez que votre application d'être. Vous pouvez ajouter la [prise en charge de plugins]() pour l'application à l'aide de "Ajouter cordova plugin", par exemple :

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

Vous devez également ajouter un fichier personnalisé manifest.webapp dans votre répertoire de test-app/www, qui doit comprendre au moins ce qui suit :

    { 
        "launch_path":"/index.html",
        "installs_allowed_from":["*"],
        "version":"0.0.1",
        "name":"My app",
        "pkgName":"io.cordova.hellocordova",
        "icons": {
            "128": "/img/logo.png"
        }
    }
    

Pour plus d'informations sur les manifestes de Firefox App, lire [App manifeste][4] sur le MDN.

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

Lorsque le code de votre application est écrit, déployer les modifications apportées à l'application Firefox OS avec que vous avez ajouté à votre projet

    $ cordova prepare
    

Notez qu'une étape de génération (c'est-à-dire cordova build) n'est pas requise lors du déploiement de la plate-forme de Firefox OS, comme Firefox OS apps sont axées sur le HTML et donc pas compilé.

## Test et le débogage

L'app peut être testée à l'aide du Firefox OS [App Manager][5].

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

Lorsque vous avez connecté l'App Manager à votre périphérique/simulateur de test, sélectionnez l'option « Ajouter des App emballés », alors assurez-vous que vous pointez sur le test-app/plateformes/firefoxos/www/annuaire d'inclure l'application dans l'interface Manager.

Car ici, vous pouvez installer l'application sur votre appareil/simulateur de test (avec le bouton « Update »). En utilisant la bouton, vous pouvez déboguer l'application et modifier son code live « Debug ».

Remarque : Avant d'essayer de publier votre application, vous devez envisager la validation à l'aide du [validateur de l'App][6].

 [6]: https://marketplace.firefox.com/developers/validator

## Publier votre application sur le Marketplace de Firefox

Vous pouvez soumettre votre application sur le marché de Firefox, ou publiez-le vous-même. Visitez la [Zone de marché de Firefox][7] le MDN pour obtenir des renseignements sur la façon de le faire ; [Options de publication App][8] est le meilleur endroit pour commencer.

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options