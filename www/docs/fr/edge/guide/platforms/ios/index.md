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

# iOS Platform Guide

Ce guide montre comment configurer votre environnement de développement SDK pour déployer des applications de Cordova pour appareils iOS comme l'iPhone et l'iPad. Voir ci-dessous pour plus d'informations spécifiques à la plateforme :

*   iOS Configuration
*   Mise à jour d'iOS
*   iOS WebViews
*   iOS Plugins
*   iOS Command-line Tools

Les outils de ligne de commande ci-dessus se référer aux versions antérieures à la 3.0 de Cordova. Voir l'Interface de ligne de commande pour plus d'informations sur l'interface actuelle.

## Exigences et soutien

Apple ® outils nécessaires pour construire des applications iOS exécutées uniquement sur le système d'exploitation OS X sur les Macs à processeurs Intel. Xcode ® 6.0 (la version minimale requise) s'exécute uniquement sur OS X version 10.9 (Mavericks) ou supérieur et comprend l'iOS 8 SDK (Software Development Kit). Pour soumettre des applications de l'Apple App Store, il faut les dernières versions des outils Apple.

Vous pouvez tester de nombreuses fonctionnalités Cordova à l'aide de l'émulateur iOS installé avec l'iOS SDK et Xcode, mais vous avez besoin d'un périphérique réel pour tester complètement l'ensemble des fonctionnalités de l'application du dispositif avant de le soumettre à l'App Store. Le dispositif doit avoir au moins iOS 6.x installé, la version iOS minimum supporté à partir de 3.0 de Cordova. Dispositifs de soutien comprennent tous les iPad ® modèles, iPhone ® 3GS et qui précède et iPod ® Touch 3e génération ou ultérieur. Pour installer des applications sur un périphérique, vous devez également être membre d' Apple [iOS Developer Program][1], qui coûte 99 $ par an. Ce guide montre comment déployer des apps pour l'émulateur iOS, pour lequel il ne faut pas s'inscrire au programme de développeur.

 [1]: https://developer.apple.com/programs/ios/

L' [ios-sim][2] et [ios-deploy][3] outils - permet de lancer iOS apps dans le simulateur d'iOS et iOS appareil de la ligne de commande.

 [2]: https://www.npmjs.org/package/ios-sim
 [3]: https://www.npmjs.org/package/ios-deploy

## Installer le SDK

Il y a deux façons de télécharger Xcode :

*   sur l' [App Store][4], disponible en tapant "Xcode" dans l'application de **L'App Store** .

*   de [Téléchargements de développeur Apple][5], qui nécessite un enregistrement comme développeur d'Apple.

 [4]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [5]: https://developer.apple.com/downloads/index.action

Une fois installé Xcode, plusieurs outils de ligne de commande doivent être activées pour Cordova à exécuter. Dans le menu de **Xcode** , sélectionnez **Préférences**, puis l'onglet **téléchargements** . Dans le panneau **composants** , appuyez sur le bouton **installer** à côté de la liste **Des outils de ligne de commande** .

## Installer déployer des outils

Exécuter à partir de terminal Command-line :

        $ npm install -g ios-sim
        $ npm install -g ios-deploy


## Créez un nouveau projet

Utilisez l'utilitaire de `cordova` à mettre en place un nouveau projet, tel que décrit dans The Cordova The Command-Line Interface. Par exemple, dans un répertoire de code source :

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"


## Déployer l'application

Pour déployer l'application sur un appareil iOS connecté :

        $ cordova run ios --device


Pour déployer l'application sur un émulateur d'iOS par défaut :

        $ cordova emulate ios


Vous pouvez utiliser **cordova run ios --list** pour voir toutes les cibles disponibles et **cordova run ios --target=target_name** pour exécuter l'application sur un émulateur ou un périphérique spécifique (par exemple, `cordova run ios --target="iPhone-6"`).

Vous pouvez également utiliser **cordova run --help** pour voir construire supplémentaire et exécuter les options.

## Ouvrez un projet dans le SDK

Une fois que la plateforme ios est ajouté à votre projet, vous pouvez l'ouvrir depuis dans Xcode. Double-cliquez dessus pour ouvrir le fichier `hello/platforms/ios/hello.xcodeproj` . L'écran devrait ressembler à ceci :

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## Déployer sur émulateur

Pour afficher un aperçu de l'application dans l'émulateur iOS :

1.  Assurez-vous que le fichier *.xcodeproj* est sélectionné dans le panneau de gauche.

2.  Sélectionnez l'application **Bonjour** dans le panneau immédiatement à droite.

3.  Sélectionnez le dispositif prévu dans le menu de la barre d'outils **système** , tels que l'iPhone Simulator 6.0 comme mis en évidence ici :

    ![][7]

4.  Appuyez sur le bouton **exécuter** qui apparaît dans la barre d'outils même vers la gauche du **schéma**. Qui s'appuie, déploie et exécute l'application dans l'émulateur. Une demande distincte émulateur s'ouvre et affiche l'application :

    ![][8]

    Qu'un émulateur peut exécuter à la fois, donc si vous voulez tester l'app dans un émulateur différent, vous devez quitter l'application de l'émulateur et exécuter une cible différente dans Xcode.

 [7]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode est livré avec les émulateurs pour les dernières versions des iPhone et iPad. Des versions plus anciennes peuvent être obtenues auprès du **Xcode → préférences → téléchargements → composants** panneau.

## Déployer sur le périphérique

Pour plus d'informations sur les diverses exigences de déployer sur un périphérique, reportez-vous à la section *Configuration de développement et les actifs de Distribution* des [Outils Workflow Guide for iOS][9]d'Apple. En bref, vous devez effectuer les opérations suivantes avant de déployer :

 [9]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  Rejoignez l'Apple iOS Developer Program.

2.  Créer un *profil de mise en service* au sein de l' [iOS Provisioning Portal][10]. Vous pouvez utiliser son *Développement Provisioning Assistant* pour créer et installer le profil et certificat Xcode exige.

3.  Vérifiez la *Signature du Code* de la section *Identité de signature de Code* dans les paramètres de projet est définie sur votre nom de profil provisionnement.

 [10]: https://developer.apple.com/ios/manage/overview/index.action

Pour déployer sur le périphérique :

1.  Utilisez le câble USB pour brancher l'appareil à votre Mac.

2.  Sélectionnez le nom du projet dans la liste déroulante de la fenêtre de Xcode **régime** .

3.  Sélectionnez votre périphérique dans la liste déroulante **périphérique** . S'il est branché via USB, mais n'apparaît toujours pas, appuyez sur le bouton de **l'Organiseur** pour résoudre toutes les erreurs.

4.  Appuyez sur le bouton **exécuter** pour générer, déployer et exécuter l'application sur votre appareil.

## Problèmes courants

**Avertissements de désapprobation**: lorsqu'une application interface de programmation (API) est modifiée ou remplacée par une autre API, il est marqué comme *obsolète*. L'API fonctionne à court terme, mais est finalement supprimé. Certaines de ces interfaces déconseillées sont consignées dans Apache Cordova et Xcode émet des avertissements à leur sujet lorsque vous générez et déployez une application.

Avertissement de Xcode sur la méthode de `invokeString` concerne une fonctionnalité qui lance une application à partir d'une URL personnalisée. Alors que le mécanisme à charger à partir d'une URL personnalisée a changé, ce code est toujours présent pour fournir des fonctionnalités en arrière pour les applications créées avec des versions plus anciennes de Cordova. L'exemple d'application n'utilise pas cette fonctionnalité, donc ces avertissements peuvent être ignorés. Pour éviter ces avertissements d'apparaître, supprimez le code qui fait référence à l'obsolète invokeString API :

*   Modifiez le fichier *Classes/MainViewController.m* , entourent le bloc suivant de code avec `/*` et `*/` commentaires comme indiqué ci-dessous, puis tapez **commande + s** pour enregistrer le fichier :

        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];

        return [super webViewDidFinishLoad:theWebView];
        }


*   Modifiez le fichier *Classes/AppViewDelegate.m* , commentez la ligne suivante en insérant une double barre oblique, comme indiqué ci-dessous, puis tapez la **commande + s** pour enregistrer le fichier :

        //self.viewController.invokeString = invokeString;


*   Appuyez sur **commande + b** pour reconstruire le projet et à éliminer les avertissements.

<!-- Does this fix only last until the next "cordova prepare"? -->

**Missing Headers**: erreurs de Compilation relatives aux en-têtes manquants résultent de problèmes avec l'emplacement de build et peuvent être résolus via les préférences de Xcode :

1.  Sélectionnez **Xcode → préférences → emplacements**.

2.  Dans la section de **Données dérivées** , appuyez sur le bouton **avancé** et sélectionnez **Unique** comme **Emplacement de construire** , comme illustré ici :

    ![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

Il s'agit du paramètre par défaut pour une nouvelle installation de Xcode, mais elle peut être définie différemment suite à une mise à niveau d'une ancienne version de Xcode.

Pour plus d'informations, consultez la documentation d'Apple :

*   [Démarrer le développement iOS Apps aujourd'hui][12] fournit un aperçu rapide des étapes pour le développement iOS Apps.

*   [Page d'accueil membre Center][13] fournit des liens vers plusieurs iOS des ressources techniques, y compris les ressources techniques, le portail de mise en service, les guides de la distribution et les forums communautaires.

*   [Guide des flux de travail outils pour iOS][9]

*   [Guide de l'utilisateur de Xcode][14]

*   [Vidéos de session][15] depuis le Apple World Wide Developer Conference 2012 (WWDC2012)

*   La [commande de sélection xcode][16], qui permet de spécifier la version correcte de Xcode, si plus d'un est installé.

 [12]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [13]: https://developer.apple.com/membercenter/index.action
 [14]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [15]: https://developer.apple.com/videos/wwdc/2012/
 [16]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ® OS X, Apple Xcode ®, App Store, iPad ®, iPhone ®, iPod ® et Finder ® sont des marques déposées de Apple Inc.)
