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

# Guide de plateforme Windows Phone 8

Ce guide montre comment configurer votre environnement de développement SDK pour déployer des applications de Cordova pour Windows Phone 8 appareils. Si vous souhaitez cibler des périphériques 7,5 et 8, développer pour Windows Phone 7 à la place, tel qu'indiqué dans le Windows Phone 7 Guide de la plate-forme. Version 7 n'a pas toutes les fonctionnalités avancées incluses dans IE10, mais implémente le même ensemble d'API. Apps Windows Phone 8 font *pas* exécuter sur des appareils Windows Phone 7.

Voir ci-dessous pour plus d'informations spécifiques à la plate-forme qui s'applique aux deux versions :

*   La mise à niveau de Windows Phone
*   Windows Phone Plugins
*   Windows Phone outils de ligne de commande

Les outils de ligne de commande ci-dessus se référer aux versions antérieures à la 3.0 de Cordova. Voir l'Interface de ligne de commande pour plus d'informations sur l'interface actuelle.

## 1. Configuration requise

*   Système d'exploitation:

    *   Windows 8 ou Windows 8 Pro
        *   La version 64-bit (x 64) de Windows est requise pour le SDK.
        *   La version Pro est recommandée afin de pouvoir exécuter un Microsoft device emulator.

*   Matériel :

    *   6,5 Go d'espace libre sur disque dur
    *   4 GO DE RAM
    *   Processeur 64 bits (x 64)

*   Émulateur de Windows Phone 8

    *   L'émulateur de téléphone utilise Hyper-V, donc cette liste inclut les pré-requis.
    *   Edition Pro 64-bit Windows 8 ou supérieur
    *   Nécessite un processeur qui prend en charge la virtualisation et [Deuxième niveau adresse traduction (lattes)][1]
        *   Voir la [liste des processeurs Intel prenant en charge VT-x (virtualisation) et EPT (latte)][2]
    *   Activez la fonction de virtualisation (c.-à-d., VT-x sur Intel) dans les paramètres du BIOS, car habituellement c'est désactivé par défaut.

*   SDK + IDE (Visual Studio)

    *   Visual Studio Professional de 2012, Premium ou Ultimate. Notez que Visual Studio Express pour Windows Phone (inclus dans le SDK) n'est pas recommandé parce que vous ne pouvez pas construire le modèle (voir ci-dessous) avec VS Express, car il n'a pas la fonctionnalité **d'Exportation de modèle** , qui est seulement en VS Pro ou supérieur.

*   S'inscrire et payer pour un compte [Windows Phone Dev Center][3] , si vous souhaitez installer votre application sur un périphérique réel ou de soumettre à la Place du marché.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Remarque :** Le kit de développement logiciel en cours d'exécution dans la Machine virtuelle peut présenter certains défis. Vous pouvez lire ce billet de blog qui donne un aperçu sur les solutions à développer pour [Windows Phone sur un Mac][4].

 [4]: http://aka.ms/BuildaWP8apponaMac

## 2. Installer le SDK + Cordova

*   Téléchargez et installez le [SDK Windows Phone][5]

*   Téléchargez et décompressez la dernière version de [Cordova][6]. Vous travaillerez le `lib\windows-phone-8\wp8` sous-répertoire, `lib\windows-phone-8\wp7` contient la version de Windows Phone 7 de Cordova.

*   Copie le `CordovaWP8_x_x_x.zip` fichier pour le `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` répertoire.

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [6]: http://phonegap.com/download

## 2.1. Construction du modèle

**Remarque :** cette étape n'est peut-être pas nécessaire. Si le répertoire lib\windows-téléphone contient déjà un fichier CordovaWP8\_x\_x_x.zip, puis vous pouvez ignorer cette étape.

Afin de simplifier le processus de développement, Cordova est livré avec un script pour construire des modèles Visual Studio. Cela permet la création rapide d'applications de Cordova à l'intérieur de Visual Studio. Ce modèle peut être modifié si nécessaire et les étapes suivantes indiquent comment procéder si vous souhaitez générer le modèle.

### Exécutez le fichier de commandes pour créer et installer les modèles.

*   La racine de la repo contient un fichier createTemplates.bat. Un double clic sur ce fichier va générer 2 fichiers .zip. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip où x.x.x correspond au numéro de version actuel) Pour facilement utiliser ces fichiers dans Visual Studio, copie à « Mes Documents\Visual Studio 2012\Templates\ProjectTemplates\ » vous puis sera en mesure de créer de nouvelles applications de l'Apache Cordova Windows Phone du fichier Visual Studio-> menu du nouveau projet.

*   Si vous exécutez le fichier de commandes de la ligne de commande, vous pouvez aussi appeler avec un paramètre pour installer automatiquement

Exécutez le script :

    > createTemplates.bat-installer


## 3. Mettre en place le nouveau projet

*   Ouvrez Visual Studio Express pour Windows Phone et choisissez **Nouveau projet**.

*   Sélectionnez **CordovaWP8**. (Le numéro de version est affiché dans la description du modèle).

*   Donnez un nom au projet, puis sélectionnez **OK**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## 4. Passer en revue la structure du projet

*   Le `www` répertoire contient votre Cordova `html/js/css` et toutes les autres ressources inclus dans votre application.

*   Tout contenu que vous ajoutez ici doit faire partie du projet Visual Studio, et il doit être défini en tant que contenu.

*   Remarque : Cette capture d'écran effectuée depuis le téléchargement de cordova-2.3.0, votre liste variera selon la version actuelle installée.

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 5. Créer et déployer dans l'émulateur

*   Assurez-vous que **l'Émulateur de Windows Phone** est sélectionné dans le menu déroulant principal.

*   Appuyez sur le bouton vert de **jouer** à côté du menu déroulant ci-bas pour démarrer le débogage ou appuyez sur **F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## 6. Générez votre projet pour le dispositif

Afin de tester votre application sur un périphérique, le périphérique doit être enregistré. Cliquez [ici][10] pour lire la documentation sur le déploiement et de test sur votre Windows Phone 8.

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Assurez-vous que votre téléphone est connecté, et l'écran est déverrouillé.

*   Dans Visual Studio, sélectionnez « Périphérique » dans le menu déroulant ci-haut.

*   Appuyez sur le bouton vert de **jouer** à côté du menu déroulant principal pour démarrer le débogage ou appuyez sur **F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## Fait !

## Autres lectures

Pour plus de détails sur les différences spécifiques entre les navigateurs IE10 et WebKit et comment soutenir les deux MS a un utile [guide ici][12]

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
