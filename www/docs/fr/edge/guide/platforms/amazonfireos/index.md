---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Amazon Fire OS Platform Guide

Ce guide montre comment configurer votre environnement de développement SDK pour déployer Cordova apps de dispositifs tels les HDX feu Kindle Amazon Fire OS.

Voir ci-dessous pour plus d'informations spécifiques à la plateforme :

*   Amazon Fire OS Configuration
*   Amazon Fire OS WebViews
*   Amazon Fire OS Plugins

## Introduction

En ciblant la plateforme Amazon Fire OS, Cordova les développeurs peuvent créer des applications web hybrides qui tirent profit du moteur web avancés intégré dans les appareils Kindle Fire. Amazon WebView API (AWV) est un runtime de dérivés chrome web exclusif à feu OS. Un remplacement rapide pour l'affichage Web qui est livré avec les appareils Android, AWV permet de créer le plus performant et plus puissant hybride web apps en fournissant un soutien pour un moteur plus rapide de JavaScript (V8), débogage distant et optimisations matérielle pour les périphériques de Kindle Fire notamment un Canvas 2D accélérée, et accéder aux fonctionnalités HTML5, ne pas pris en charge par Android construit en mode Web tels que: CSS Calc, Validation de formulaire, getUserMedia, IndexedDB, Web Workers, WebSockets et WebGL.

Pour plus d'informations sur l'API d'affichage Web Amazon, s'il vous plaît voir du Portail développeur Amazon [page HTML5 hybride Apps][1]. Pour toute question sur getting started et autres soutiennent des questions, veuillez consulter le portail des développeurs Amazon [Forums - HTML5 hybride Apps][2].

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## Exigences et soutien

Développement d'applications de Cordova pour Amazon Fire OS nécessite l'installation d'une variété de fichiers de support, y compris tous les éléments nécessaires pour le développement Android, ainsi que le SDK de WebView d'Amazon. Consultez la liste ci-dessous pour l'installation du système requis :

*   L'Interface de ligne de commande
*   [Android SDK][3]
*   [Apache Ant][4]
*   [Amazon WebView SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## Installation

### Android SDK et Apache Ant

Installer le SDK Android de [developer.android.com/sdk][3]. Dans le cas contraire vous pouvez être présentées avec un choix de l'endroit où installer le SDK, déplacer le fichier téléchargé `adt-bundle` arbre à chaque fois que vous stockez des outils de développement.

Vous aurez besoin pour exécuter le gestionnaire de SDK Android ( `android` partir d'une ligne de commande) au moins une fois avant de commencer votre projet de Cordova. Assurez-vous d'installer la dernière version de l' Android SDK Tools et kit de développement logiciel de plate-forme **plus précisément le niveau API 19**. S'il vous plaît, voir [Paramétrage de votre environnement de développement][5] sur le portail des développeurs pour plus d'informations sur le paramétrage de votre environnement de développement pour les appareils Kindle Fire OS Amazon.

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

Installer l'Apache Ant construire outil en [Téléchargement une distribution binaire Ant][6], décompresser dans un répertoire, vous pouvez consulter ultérieurement. Voir le [Manuel de fourmi][7] pour plus d'informations.

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

Pour les outils de ligne de commande de Cordova pour travailler, vous devez inclure le Android SDK `tools` , `platform-tools` et `apache-ant/bin` des répertoires dans votre environnement de chemin d'accès.

#### Chemin d'accès de Mac/Linux

Sur Mac, Linux ou autres plates-formes de type Unix, vous pouvez utiliser un éditeur de texte pour créer ou modifier le `~/.bash_profile` fichier, en ajoutant une ligne comme ci-dessous, en fonction d'où sont installés les SDK et la fourmi :

    export PATH = ${chemin}: / / adt-bundle/sdk/plateforme-outils de développement: / développement/adt-bundle/sdk/tools: / développement/apache-ant/bin


Cela expose les outils SDK dans windows terminales nouvellement ouverts. Dans le cas contraire, exécutez-le pour les rendre disponibles dans la session en cours :

    $ source ~/.bash_profile


#### Chemin d'accès Windows

Pour modifier l'environnement PATH sous Windows :

*   Cliquez sur le menu **Démarrer** dans le coin en bas à gauche du bureau, faites un clic droit sur **ordinateur**, puis cliquez sur **Propriétés**.

*   Cliquez sur **Paramètres système avancés** dans la colonne de gauche.

*   Dans la boîte de dialogue, appuyez sur **Variables d'environnement**.

*   Sélectionnez la variable **PATH** et appuyer sur **modifier**.

*   Le chemin d'accès basé sur lequel vous avez installé le SDK et les fourmis, par exemple, ajoutez ce qui suit :

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin


*   Enregistrez la valeur et fermez les deux boîtes de dialogue.

*   Vous devrez aussi activer Java. Ouvrez une invite de commandes et tapez `java` , si elle ne s'exécute pas, ajoutez l'emplacement des fichiers binaires Java à votre chemin aussi bien. Assurez-vous de JAVA_HOME % pointe vers le répertoire JDK installé. Vous devrez peut-être ajouter JAVA_HOME environnement variable séparément.

        ; %JAVA_HOME%\bin


### Amazon WebView SDK

Afin de créer des applications de Cordoue à l'aide de la plateforme cible de Amazon Fire OS, vous devrez télécharger, décompresser et installer les fichiers de support d'Amazon WebView SDK. Cette étape ne devrons faire votre premier projet d'Amazon Fire OS.

*   Télécharger le SDK de WebView Amazon depuis [Amazon Developer Portal][1].

*   Copie `awv_interface.jar` du SDK téléchargé au répertoire de travail de Cordova. Créer le dossier commonlibs(shown below) si il n'existe pas :

    **Mac/Linux:** `~/.cordova/lib/commonlibs/`

    **Windows:** `%USERPROFILE%\.cordova\lib\commonlibs`

## Créer le nouveau projet pour Amazon Fire OS

Utilisation du `cordova` utilitaire de mettre en place un nouveau projet, tel que décrit dans The Cordova The Command-Line Interface. Par exemple, dans un répertoire de code source :

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


***Remarque :*** La première fois que la plate-forme amazon-fireos est installée sur votre système, il va télécharger les fichiers appropriés dans le répertoire de travail de Cordova, mais échouera alors qu'il manque les fichiers de support AWV SDK (voir ci-dessus). Suivez les instructions ci-dessus pour installer le `awv_interface.jar` , puis supprimer et rajouter la plate-forme amazon-fireos à votre projet. Cette étape ne devrons être fait pour le premier projet Amazon Fire OS.

## Déployer sur le périphérique

Pour repousser un $ $ etAPP directement sur l'appareil, assurez-vous que débogage USB est activé sur votre appareil tel que décrit sur le [Site des développeurs Android][8]et utiliser un câble mini USB à brancher sur votre système.

 [8]: http://developer.android.com/tools/device.html

Vous pouvez pousser l'app à l'appareil de la ligne de commande :

    $ cordova exécuter amazon-fireos


En alternance au sein d'Eclipse, cliquez droit sur le projet et choisissez **Exécuter en tant que → Application Android**.

**Note**: actuellement, test via un émulateur n'est pas supporté pour Amazon WebView basé applications, en outre l'Amazone WebView API est disponible uniquement sur appareils OS feu. Pour plus d'informations, consultez la documentation de [Amazon WebView API SDK][1] .

### Exécuter des drapeaux

La commande exécuter accepte des paramètres optionnels comme spécifié dans le document d'Interface de ligne de commande de Cordova, feu OS accepte également un supplément `--debug` drapeau qui permettra aux outils de développement de chrome pour le débogage distant web.

Pour utiliser les outils du développeur, saisissez :

    $ cordova run --debug amazon-fireos


Cela permettra à des outils sur le client en cours d'exécution. Vous pouvez ensuite connecter au client par la redirection de port en utilisant l'Android Debug pont (adb) faisant référence au nom du paquet de l'application.

Par exemple :

    ADB tcp:9222 avant localabstract:com.example.helloworld.devtools


Vous pouvez ensuite utiliser le DevTools via un navigateur basé sur Chromium en accédant à :`http://localhost:9222`.

### Prise en charge facultative Eclipse

Une fois créé, vous pouvez utiliser l'éclipse qui est livré avec le SDK Android pour modifier le projet. Prenez garde que les modifications apportées par le biais de Eclipse seront remplacées si vous continuez à utiliser les outils de ligne de commande de Cordova.

*   Lancez l'application **Eclipse** .

*   Sélectionnez l'élément de menu **Nouveau projet** .

*   Choisissez **Un projet Android à partir de Code existant** dans la boîte de dialogue, puis appuyez sur **suivant**: ![][9]

*   Accédez à `hello` , ou n'importe quel répertoire vous avez créé pour le projet, puis à la `platforms/amazon-fireos` sous-répertoire.

*   Eclipse vous montrera Bonjour et Bonjour-CorddovaLib - 2 projets à ajouter. Ajoutez les deux.

*   Appuyez sur **Terminer**.

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Une fois que la fenêtre de Eclipse s'ouvre, un rouge **X** peut apparaître pour indiquer les problèmes non résolus. Dans l'affirmative, suivez ces étapes supplémentaires :

*   Faites un clic droit sur le répertoire du projet.

*   Dans la boîte de dialogue **Propriétés** , sélectionnez **Android** du volet de navigation.

*   Pour la cible de génération de projet, sélectionnez le plus haut niveau de Android API (actuellement API niveau 19) vous avez installé.

*   Cliquez sur **OK**.

*   Sélectionnez **nettoyer** dans le menu **projet** . Cela devrait corriger toutes les erreurs dans le projet.
