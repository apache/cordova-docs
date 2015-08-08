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

# Guide de plateforme Windows Phone 7

Ce guide montre comment configurer votre environnement de développement SDK pour déployer des applications de Cordova pour appareils Windows Phone 7. Apps également exécuter sur les périphériques Windows Phone 8 en utilisant les mêmes API, mais la version 7 ne possède pas certaines des fonctionnalités avancées de IE10 disponibles sur Windows Phone 8. Apps Windows Phone 8 font *pas* exécuter sur des appareils Windows Phone 7.

Voir ci-dessous pour plus d'informations spécifiques à la plate-forme qui s'applique aux deux versions :

*   La mise à niveau de Windows Phone
*   Windows Phone Plugins
*   Windows Phone outils de ligne de commande

Les outils de ligne de commande ci-dessus se référer aux versions antérieures à la 3.0 de Cordova. Voir l'Interface de ligne de commande pour plus d'informations sur l'interface actuelle.

## Configuration du système requise

Utilisez Windows 7 ou Windows 8 (Pro) ou Windows Vista avec Service Pack 2. La version 64-bit (x 64) de Windows est requise pour le SDK. La version Pro est recommandée pour exécuter un Microsoft device emulator.

S'inscrire et payer pour un compte [Windows Phone Dev Center][1] , si vous voulez installer une application sur un périphérique réel ou de soumettre à la Place du marché.

 [1]: http://dev.windowsphone.com/en-us/publish

**Remarque**: le kit de développement logiciel en cours d'exécution dans la Machine virtuelle peut présenter des défis. Lire [Windows Phone sur un Mac][2] pour mieux comprendre le développement de solutions.

 [2]: http://aka.ms/BuildaWP8apponaMac

## Installer le SDK et Cordova

Téléchargez et installez le [SDK Windows Phone][3].

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

Téléchargez et décompressez la dernière version de [Cordova][4]. Vous devez travailler le `lib\windows-phone-8\wp7` sous-répertoire, `lib\windows-phone-8\wp8` contient la version de Windwos téléphone 8 de Cordova.

 [4]: http://phonegap.com/download

Copie le `CordovaWP7_x_x_x.zip` fichier pour le `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` répertoire.

## Le modèle de construction

**Remarque**: passez cette étape si le `lib\windows-phone` répertoire contient déjà un `CordovaWP7_x_x_x.zip` fichier.

Pour simplifier le développement, Cordova embarque un script pour construire des modèles Visual Studio. Ceux-ci permettent de générer rapidement des applications de Cordova, et vous pouvez les modifier si nécessaire. Les étapes suivantes indiquent comment générer.

### Exécutez le fichier Batch pour créer et installer les modèles

La racine de la repo contient un `createTemplates.bat` fichier. En double-cliquant sur ce fichier génère deux `.zip` fichiers : `CordovaWP7_x_x_x.zip` et `CordovaWP8_x_x_x.zip` , où *x.x.x* correspond au numéro de version actuelle. Pour utiliser ces fichiers facilement dans Visual Studio, copiez-les dans le `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` sous-répertoire. Vous êtes alors en mesure de créer de nouvelles **applications Apache Cordova Windows Phone_ à partir de Visual Studio __File → nouveau projet** menu.

Si vous exécutez le fichier de commandes de la ligne de commande, vous pouvez aussi appeler avec un paramètre pour installer automatiquement :

        > createTemplates.bat-installer


## Mettre en place un nouveau projet

*   Ouvrez Visual Studio Express pour Windows Phone et choisissez **Nouveau projet**.

*   Sélectionnez **CordovaWP7**. L'affiche numéro de version dans la description du modèle.

*   Donnez un nom au projet, puis sélectionnez **OK**.

## Revoir la Structure du projet

Le `www` caractéristiques du répertoire `html` , `js` , et `css` sous-répertoires ainsi que les autres ressources nécessite de votre application. Tout contenu supplémentaire doit faire partie du projet Visual Studio, et il doit être défini en tant que contenu.

Le suivant échantillon structure représente un 2.3.0 du projet, mais peut varier selon la version installée :

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Générez le projet pour le dispositif

Avant de tester votre application sur un périphérique, le périphérique doit être enregistré. Pour plus de détails sur comment déployer et tester sur Windows Phone 7, consultez la [documentation de Microsoft][6] . Voici les étapes de base :

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Assurez-vous que votre téléphone est connecté, et l'écran est déverrouillé.

*   Dans Visual Studio, sélectionnez le **périphérique** dans le menu déroulant en haut.

*   Appuyez sur le bouton vert de **jouer** à côté du menu déroulant principal pour démarrer le débogage, ou bien tapez **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

À ce stade, vous avez terminé.
