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

## Exigences et soutien

Développement d'applications de Cordova pour Amazon Fire OS requiert le SDK Android et le SDK de WebView d'Amazon. Vérifier les conditions requises pour ces kits de développement logiciel en utilisant les liens ci-dessous :

*   [Système Android SDK][1]

*   [Amazon WebView SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## Installation

### Android SDK

Installer le SDK Android de [developer.android.com/sdk][1]. Dans le cas contraire vous pouvez être présentées avec un choix de l'endroit où installer le SDK, déplacer le fichier téléchargé `adt-bundle` arbre à chaque fois que vous stockez des outils de développement.

Pour les outils de ligne de commande de Cordova pour travailler, vous devez inclure le SDK `tools` et `platform-tools` des répertoires dans votre environnement de chemin d'accès.

Sur Mac, Linux ou autres plates-formes de type Unix, vous pouvez utiliser un éditeur de texte pour créer ou modifier le `~/.bash_profile` fichier, en ajoutant une ligne comme ci-dessous, en fonction d'où le kit de développement logiciel installe :

    export PATH = ${chemin}: / / adt-bundle/sdk/plateforme-outils de développement: / développement/adt-bundle/sdk/tools


Cela expose les outils SDK dans windows terminales nouvellement ouverts. Dans le cas contraire, exécutez-le pour les rendre disponibles dans la session en cours :

    $ source ~/.bash_profile


Pour modifier l'environnement PATH sur Windows 7 :

*   Cliquez sur le menu **Démarrer** dans le coin en bas à gauche du bureau, faites un clic droit sur **ordinateur**, puis cliquez sur **Propriétés**.

*   Cliquez sur **Paramètres système avancés** dans la colonne de gauche.

*   Dans la boîte de dialogue, appuyez sur **Variables d'environnement**.

*   Sélectionnez la variable **PATH** et appuyer sur **modifier**.

*   Le chemin d'accès basé sur lequel vous avez installé le SDK, par exemple, ajoutez ce qui suit :

        ;C:\Development\adt-bundle\sdk\platform-Tools ;C:\Development\adt-bundle\sdk\tools


*   Enregistrez la valeur et fermez les deux boîtes de dialogue.

Vous devrez peut-être également activer Java et Open ant une invite de commandes et tapez `java` , puis tapez également `ant` . Ajoutez le chemin d'accès si elle ne pas s'exécuter :

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin


### Amazon WebView SDK

Télécharger le SDK de WebView Amazon depuis [Amazon Developer Portal][2].

*   Créer un `libs/` dossier `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` dossier.
*   Ajouter le `awv_interface.jar` depuis le SDK téléchargé à`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## Ouvrez un projet dans le SDK

Utilisation du `cordova` utilitaire de mettre en place un nouveau projet, tel que décrit dans The Cordova The Command-Line Interface. Par exemple, dans un répertoire de code source :

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


Une fois créé, voici comment utiliser le SDK pour le modifier :

*   Lancez l'application **Eclipse** .

*   Sélectionnez l'élément de menu **Nouveau projet** .

*   Choisissez **Un projet Android à partir de Code existant** dans la boîte de dialogue, puis appuyez sur **suivant**: ![][3]

*   Accédez à `hello` , ou n'importe quel répertoire vous avez créé pour le projet, puis à la `platforms/amazon-fireos` sous-répertoire.

*   Appuyez sur **Terminer**.

 [3]: {{ site.baseurl }}/static/img/guide/platforms//eclipse_new_project.png

Une fois que la fenêtre de Eclipse s'ouvre, un rouge **X** peut apparaître pour indiquer les problèmes non résolus. Dans l'affirmative, suivez ces étapes supplémentaires :

*   Faites un clic droit sur le répertoire du projet.

*   Dans la boîte de dialogue **Propriétés** , sélectionnez **Android** du volet de navigation.

*   Pour le projet construire cible, sélectionnez le plus haut niveau de l'API Android que vous avez installé.

*   Cliquez sur **OK**.

*   Sélectionnez **nettoyer** dans le menu **projet** . Cela devrait corriger toutes les erreurs dans le projet.

## Déployer sur le périphérique

Pour repousser un $ $ etAPP directement sur l'appareil, assurez-vous que débogage USB est activé sur votre appareil tel que décrit sur le [Site des développeurs Android][4]et utiliser un câble mini USB à brancher sur votre système.

 [4]: http://developer.android.com/tools/device.html

Vous pouvez pousser l'app à l'appareil de la ligne de commande :

    $ cordova run amazon-fireos


En alternance au sein d'Eclipse, cliquez droit sur le projet et choisissez **exécute en tant que → Application Android**.

**Note**: actuellement, test via un émulateur n'est pas pris en charge pour Amazon WebView basé apps.
