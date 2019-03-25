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

title: Firefox OS Platform Guide
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

    cordova plugin add cordova-plugin-device
    cordova plugin add cordova-plugin-vibration
    

Lorsque le code de votre application est écrit, déployer les modifications apportées à l'application Firefox OS avec que vous avez ajouté à votre projet

    $ cordova préparer firefoxos
    

Pour créer une app emballé un peut zip du répertoire de plates-formes/firefoxos/www. Vous pouvez aussi tout simplement construire à l'aide

    $ cordova construire firefoxos
    

L'app emballé Firefox OS sera construit à platforms/firefoxos/build/package.zip

## Test et le débogage

L'app peut être testée en utilisant l' OS Firefox [Web IDE][4].

 [4]: https://developer.mozilla.org/en-US/docs/Tools/WebIDE

Lorsque vous avez connecté l'IDE Web à votre périphérique/simulateur de test, sélectionnez l'option « Open App emballés », alors assurez-vous que vous pointez sur le test-app/plateformes/firefoxos/www/annuaire d'inclure l'application dans l'interface Manager.

Car ici, vous pouvez installer l'application sur votre appareil/simulateur de test (avec le bouton « Play »). À l'aide de la « Pause » bouton, vous pouvez déboguer l'application et modifier son code en direct.

Remarque : Avant d'essayer de publier votre application, vous devez envisager la validation à l'aide du [validateur de l'App][5].

 [5]: https://marketplace.firefox.com/developers/validator

## Publier votre application sur le Marketplace de Firefox

Vous pouvez soumettre votre application sur le marché de Firefox, ou publiez-le vous-même. Visitez la [Zone de marché de Firefox][6] le MDN pour obtenir des renseignements sur la façon de le faire ; [Options de publication App][7] est le meilleur endroit pour commencer.

 [6]: https://developer.mozilla.org/en-US/Marketplace
 [7]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options