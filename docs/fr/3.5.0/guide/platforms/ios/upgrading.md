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

# Mise à jour d'iOS

Ce guide montre comment modifier des projets iOS mise à niveau d'anciennes versions de Cordova. La plupart de ces instructions s'appliquent aux projets créés avec un ensemble plu d'outils de ligne de commande qui précèdent le `cordova` utilitaire CLI. Voir l'Interface de ligne de commande pour plus d'informations comment mettre à jour la version de l'interface CLI.

**NOTE**: Xcode 5 est requis. Actuellement, pour soumettre à l'Apple App Store, vous devez utiliser la dernière version embarquée de l'iOS SDK, qui est iOS 7 et c'est inclus uniquement avec Xcode 5.

## 3.3.0 mise à niveau de projets à 3.4.0

Pour les projets non-CLI, exécutez :

        bin/mise à jour chemin/de/projet
    

Pour les projets de la CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update ios`

## 3.2.0 mise à niveau de projets à 3.3.0

Pour les projets non-CLI, exécutez :

        bin/mise à jour chemin/de/projet
    

Pour les projets de la CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update ios`

## Mise à jour 3.1.0 projets à 3.2.0

Pour les projets non-CLI, exécutez :

        bin/mise à jour chemin/de/projet
    

Pour les projets de la CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update ios`

## Projets de modernisation 3.0.0 à 3.1.0

Pour les projets non-CLI, exécutez :

        bin/mise à jour chemin/de/projet
    

Pour les projets de la CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update ios`

iOS 7 questions :

1.  Supprimer `width=device-width, height=device-height` de la `index.html` du fichier `viewport` `meta` tag. (Voir [le bogue pertinent][1].)

2.  Mettre à jour vos plugins principaux médias, médias-capture et splashscreen pour iOS 7 soutien.

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 questions :

1.  Mettre à jour vos paramètres de projet Xcode 5 vous invite à le faire (dans les questions de navigation).

2.  Mise à jour de votre **compilateur pour C / C + c++ / Objective-C** définissant, sous l'onglet **Paramètres de génération** , la section des **Options de compilation** . Choisir **par défaut du compilateur (Apple LLVM 5.0)**.

## Mise à niveau à la CLI (3.0.0) de 2.9.0

1.  Créez un projet Apache Cordova 3.0.0 utilisant le cordova CLI, tel que décrit dans l'Interface de ligne de commande.

2.  Ajoutez vos plates-formes cordova au projet, par exemple :`cordova
platform add ios`.

3.  Copiez le contenu du projet `www` Répertoire de la `www` répertoire à la racine du projet Cordoue vous venez de créer.

4.  Copier ou écraser tout actif natif de votre projet d'origine ( `Resources` , etc.), ce qui bien sûr d'ajouter de nouveaux fichiers à la `.xcodeproj` projet. Le projet iOS s'appuie à l'intérieur le `platforms\ios` répertoire.

5.  Copie votre `config.xml` dans le `www` répertoire et supprimer les définitions de n'importe quel plugin. Modifier les paramètres ici au lieu du répertoire de la plate-forme.

6.  Utilisez l'outil CLI de cordova pour installer des plugins dont vous avez besoin. Notez que la CLI gère toutes les principales API comme plugins, donc ils peuvent avoir besoin d'être ajouté. Seulement 3.0.0 plugins sont compatibles avec l'interface CLI.

7.  Générer et tester.

## 2.9.0 mise à niveau de projets à 3.0.0

1.  Téléchargez et extrayez la source Cordova 3.0.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-3.0.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova.js` (Notez qu'il n'a plus un suffixe de version, la version est dans le fichier lui-même dans l'en-tête) fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova.js` fichier.

7.  Supprimer votre `CordovaLib` répertoire et copier le `CordovaLib` répertoire du nouveau projet dans le répertoire racine de votre projet.

**NOTE**: à partir de Cordova 3.0.0, plugins ne sont pas pré-installé, et vous devez utiliser le `plugman` de l'utilitaire à installer manuellement. Voir l'utilisation de Plugman pour gérer les Plugins.

## 2.8.0 mise à niveau de projets à 2.9.0

1.  Téléchargez et extrayez la source Cordova 2.9.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.9.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova.js` (Notez qu'il n'a plus un suffixe de version, la version est dans le fichier lui-même dans l'en-tête) fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova.js` fichier.

7.  Supprimer votre `CordovaLib` répertoire et copier le `CordovaLib` répertoire du nouveau projet dans le répertoire racine de votre projet.

## 2.7.0 mise à niveau de projets à 2.8.0

1.  Téléchargez et extrayez la source Cordova 2.8.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.8.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova.js` (Notez qu'il n'a plus un suffixe de version, la version est dans le fichier lui-même dans l'en-tête) fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-2.7.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova.js` fichier.

7.  Mettre à jour les `<plugin>` tags dans le `config.xml` fichier pour `<feature>` balises. Notez que celui qui existe `<plugin>` tags encore travailler, mais sont déconseillés. Vous pouvez copier ces informations dans le `config.xml` fichier pour un nouveau projet. Par exemple :
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  Supprimer le `CordovaLib` répertoire et copier le `CordovaLib` répertoire du nouveau projet dans le répertoire racine de votre projet.

9.  Ajouter ces deux cadres à votre projet :
    
        ImageIO openAL
        

10. Mise à jour de cible de votre projet **Paramètres de génération**. Sous **Liaison → autres Linker drapeaux**, edit **"- Obj - C"** pour être **«-ObjC "**.

11. Mise à jour de cible de votre projet **Paramètres de génération**. **Linking → autres drapeaux de Linker**, de changement **«-all_load »** d'être `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` . Vous devez seulement faire ceci si vous avez le problème défini dans [ce problème.][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## Projets de modernisation 2.6.0 à 2.7.0

1.  Téléchargez et extrayez la source Cordova 2.7.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.7.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova-2.7.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-2.6.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-2.7.0.js` fichier.

7.  Mise à jour (ou les remplacer, si vous avez jamais modifié le fichier) votre `AppDelegate.m` fichier en fonction de celui du nouveau projet (voir [cette diff][3]).

8.  Dans votre `config.xml` fichier, [supprimez cette ligne][4].

9.  Supprimer votre `CordovaLib` répertoire et copier le `CordovaLib` répertoire du nouveau projet dans le répertoire racine de votre projet.

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## Projets de modernisation 2.5.0 à 2.6.0

1.  Téléchargez et extrayez la source Cordova 2.6.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.6.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copier le projet `www/cordova-2.6.0.js` fichier dans votre `www` directory et supprimer votre `www/cordova-2.5.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (ainsi que tous les autres fichiers qui référencent le script) pour désigner le nouveau `cordova-2.6.0.js` fichier.

7.  Mise à jour (ou les remplacer, si vous avez jamais modifié le fichier) votre `AppDelegate.m` fichier en fonction de celui du nouveau projet (voir [cette diff][5]).

8.  Dans votre `config.xml` du fichier, [Ajoutez cette ligne nouvelle][6].

9.  Dans votre `config.xml` du fichier, [Ajoutez cette ligne nouvelle][7].

10. Dans votre `config.xml` dossier, [UIWebViewBounce a été changé en DisallowOverscroll, et les valeurs par défaut sont différents][8].

11. Dans votre `config.xml` fichier, le `EnableLocation` préférence a été désapprouvée.

12. Supprimer votre `CordovaLib` répertoire et copier le `CordovaLib` répertoire du nouveau projet dans le répertoire racine de votre projet.

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## Mise à jour 2.4.0 projets à 2.5.0

1.  Téléchargez et extrayez la source Cordova 2.5.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.5.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova-2.5.0.js` fichier à partir du nouveau projet dans votre `www` répertoire et supprimer votre `www/cordova-2.4.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-2.5.0.js` fichier.

7.  Mise à jour (ou les remplacer, si vous avez jamais modifié le fichier) votre `AppDelegate.m` fichier en fonction de celui du nouveau projet (voir [cette diff][9]).

8.  Dans votre `config.xml` du fichier, [Ajoutez ces lignes nouvelles][10].

9.  Dans votre `config.xml` du fichier, [modifiez l'élément racine, changez-le de cordova à widget][11].

10. Dans votre `config.xml` déposer, [retirer la préférence OpenAllWhitelistURLsInWebView][12].

11. Supprimer votre `cordova` répertoire et copier le `cordova` répertoire du nouveau projet dans le répertoire racine de votre projet. Dans 2.5.0, cela a mis à jour des scripts.

12. Supprimer votre `CordovaLib` répertoire et copier le `CordovaLib` répertoire du nouveau projet dans le répertoire racine de votre projet.

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## 2.3.0 mise à niveau de projets à 2.4.0

1.  Téléchargez et extrayez la source Cordova 2.4.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.4.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova-2.4.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-2.3.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-2.4.0.js` fichier.

7.  Mise à jour (ou les remplacer, si vous avez jamais modifié les fichiers) votre `MainViewController.m` fichier en fonction de celui du nouveau projet (voir [cette diff][13]).

8.  Mise à jour (ou les remplacer, si vous avez jamais modifié le fichier) votre `AppDelegate.m` fichier en fonction de celui du nouveau projet (voir [cette diff][14]).

9.  Dans votre `config.xml` du fichier, [Ajoutez cette ligne nouvelle][15].

10. Supprimer votre `cordova` répertoire et copier le `cordova` répertoire du nouveau projet dans le répertoire racine de votre projet. 2.4.0, ceci a fixé scripts.

11. Supprimer votre `CordovaLib` répertoire et copier le `CordovaLib` répertoire du nouveau projet dans le répertoire racine de votre projet.

12. Ajouter AssetsLibrary.framework comme une ressource à votre projet. (Voir [documentation d'Apple][16] pour obtenir des instructions sur la façon de le faire.).

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## 2.2.0 mise à niveau de projets à 2.3.0

1.  Téléchargez et extrayez la source Cordova 2.3.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.3.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova-2.3.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-2.2.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-2.3.0.js` fichier.

7.  Mise à jour (ou les remplacer, si vous avez jamais modifié le fichier) votre `MainViewController.m` après celui du nouveau projet.

8.  Supprimer votre `cordova` répertoire et copier le `cordova` répertoire du nouveau projet dans le répertoire racine de votre projet. En 2.3.0, cela a de nouveaux scripts.

9.  Supprimer votre `CordovaLib` répertoire et copier le `CordovaLib` répertoire du nouveau projet dans le répertoire racine de votre projet.

10. Convertir votre `Cordova.plist` fichier à `config.xml` , en exécutant le script `bin/cordova\_plist\_to\_config\_xml` sur le dossier de votre projet.

11. Ajouter le plugin InAppBrowser pour votre `config.xml` , en ajoutant cette balise sous `<cordova><plugins>` :
    
        <plugin name="InAppBrowser" value="CDVInAppBrowser" />
        

12. Notez que les plugins de l'Objective-C sont *pas* dans la liste blanche plus. À la liste blanche vos connexions avec la liste blanche les app, vous devez définir la `User-Agent` en-tête de la connexion à l'agent utilisateur même comme le principal Cordova WebView. Vous pouvez obtenir cela en accédant à la `userAgent` propriété hors de la vue-contrôleur principal. La vue-contrôleur principal ( `CDVViewController` ) a aussi une `URLisAllowed` méthode vérifier si une URL passe la liste blanche.

13. Modifications de périphérique API :
    
    *   Pour iOS, device.platform permet de retourner `iPhone` , `iPad` ou `iPod Touch` ; maintenant il retourne (à juste titre)`iOS`.
    *   Pour iOS, device.name (maintenant obsolète pour toutes les plates-formes) utilisée pour retourner le nom du périphérique de l'utilisateur (par exemple ' iPhone 5′ de Shazron) ; maintenant, il retourne ce que device.platform permet de retourner : `iPhone` , `iPad` ou`iPod Touch`.
    *   Pour toutes les plateformes, il y a une nouvelle propriété appelée device.model ; Cela retourne le modèle de périphérique spécifique, par exemple `iPad2,5` (pour d'autres plateformes, il retourne ce que device.name permet de retourner).

## 2.1.0 mise à niveau de projets à 2.2.0

1.  Téléchargez et extrayez la source Cordova 2.2.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.2.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova-2.2.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-2.1.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-2.2.0.js` fichier.

7.  Mise à jour (ou les remplacer, si vous avez jamais modifié le fichier) votre `MainViewController.m` après celui du nouveau projet :
    
    *   Mise à jour → viewWillAppear

8.  Copie le `cordova` répertoire du nouveau projet dans le répertoire racine de votre projet. Dans 2.2.0, ce qui a un script de « émuler » mis à jour.

9.  Ensuite, mettez à jour votre `CordovaLib` sous-projet de référence. Commençant par Cordova 2.1.0, nous n'utilisons pas la variable CORDOVALIB Xcode plus lorsque vous référencez où les `CordovaLib` se trouve, la référence est une référence de fichier absolu maintenant.
    
    1.  Lancer Terminal.app
    2.  Accédez à l'emplacement où vous avez installé Cordova (voir étape 1), dans le `bin` sous-répertoire
    3.  Exécutez le script ci-dessous où le premier paramètre est le chemin de votre projet `.xcodeproj` fichier :
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**NOTE**: en 2.2.0, le `bin/create` script copie dans la `CordovaLib` sous-projet dans votre projet. Pour avoir le même genre d'installation, il suffit de copier dans le droit `CordovaLib` dans votre répertoire de projet, mise à jour le `CordovaLib` sous-projet emplacement (relatives au projet) dans l'inspecteur de fichier Xcode.

## Mise à jour 2.0.0 projets à 2.1.0

Avec Cordova 2.1.0, `CordovaLib` a été mis à niveau pour utiliser le **Comptage de référence automatique (ARC)**. Vous ne devez de passer à l' **ARC** à utiliser CordovaLib, mais si vous voulez mettre à niveau votre projet pour utiliser un **ARC**, veuillez utiliser l'Assistant de migration de Xcode depuis le menu : **édition → Refactoriser → convertir en Objective-C ARC...**, désélectionnez libCordova.a, puis exécutez l'Assistant jusqu'à la fin.

1.  Téléchargez et extrayez la source Cordova 2.1.0 vers un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova-2.1.0`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova-2.1.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-2.0.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-2.1.0.js` fichier.

7.  Mise à jour (ou les remplacer, si vous avez jamais modifié le fichier) votre `AppDelegate.m` après celui du nouveau projet :
    
    *   Édité → application : didFinishLaunchingWithOptions :
    *   Ajouté → application : supportedInterfaceOrientationsForWindow :

8.  Mise à jour (ou les remplacer, si vous avez jamais modifié le fichier) votre `MainViewController.m` après celui du nouveau projet :
    
    *   Ajouté → viewWillAppear

9.  Copie le `cordova` répertoire du nouveau projet dans le répertoire racine de votre projet. En 2.1.0, cela a les scripts de mise à jour pour soutenir les chemins avec des espaces.

10. Supprimer le `VERSION` fichier de référence de votre projet (*pas* celui en`CordovaLib`).

11. Ensuite, mettez à jour votre `CordovaLib` sous-projet de référence. Commençant par Cordova 2.1.0, nous n'utilisons pas la variable CORDOVALIB Xcode plus lorsque vous référencez où les `CordovaLib` se trouve, la référence est une référence de fichier absolu maintenant.
    
    1.  Lancer Terminal.app
    2.  Accédez à l'emplacement où vous avez installé Cordova (voir étape 1), dans le `bin` sous-répertoire
    3.  Exécutez le script ci-dessous où le premier paramètre est le chemin de votre projet `.xcodeproj` fichier :
        
        `update_cordova_subproject chemin/de/votre/projet/xcodeproj`

## 1.9.0 mise à niveau de projets à 2.0.0

1.  Installer Cordova 2.0.0.

2.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

3.  Copie le `www/cordova-2.0.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-1.9.0.js` fichier.

4.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-2.0.0.js` fichier.

5.  Copie le `cordova` répertoire du nouveau projet dans le répertoire racine de votre projet (si vous voulez les outils de ligne de commande de projet).

6.  Ajouter une nouvelle entrée sous `Plugins` dans votre `Cordova.plist` fichier, sous le groupe de **Fichiers de support** . La clé est `Device` et la valeur est`CDVDevice`.

7.  Supprimer`Cordova.framework`.

8.  Supprimer `verify.sh` du groupe de **Fichiers de support** .

9.  Sélectionnez l'icône du projet dans le projet de navigation, sélectionnez votre projet **cible**, puis sélectionnez l'onglet **Paramètres de génération** .

10. Recherche de **Macros préprocesseur**, puis supprimer tous les **CORDOVA_FRAMEWORK = 1** valeurs.

11. Localiser le `CordovaLib` répertoire qui a été installé dans votre disque dur sous votre dossier de départ `Documents` sous-répertoire.

12. Localiser le `CordovaLib.xcodeproj` fichier dans le `CordovaLib` répertoire, puis glisser / déplacer le fichier dans votre projet. Il doit apparaître comme un sous-projet.

13. Générez votre projet, vous devriez obtenir certaines erreurs liées à `#import` directives.

14. Pour la `#import` Erreurs, modifier toute importation axée sur la citation dans ce style :
    
        #import « CDV.h »
        
    
    pour ce style axée sur les supports :
    
        #import < Cordova/CDV.h >
        
    
    et supprimer les éléments `#ifdef` importe des wrappers autour de n'importe quel Cordova, ils ne sont plus nécessaires (les importations sont désormais unifiées)

15. Générez votre projet encore une fois, et il ne devrait avoir aucun `#import` Erreurs.

16. Sélectionnez l' **icône du projet** dans le projet de navigation, sélectionnez votre projet **cible**, puis sélectionnez l'onglet **Générer des Phases** .

17. Développez la phase **Cible dépendances** , puis sélectionnez le **+** bouton.

18. Sélectionnez le `CordovaLib` cible, puis sélectionnez le bouton **Ajouter** .

19. Développez la première phase **Binaire lien avec bibliothèques** (il devrait déjà contenir un tas de cadres), puis sélectionnez le **+** bouton.

20. Sélectionnez le `libCordova.a` bibliothèque statique, puis sélectionnez le bouton **Ajouter** .

21. Supprimer la phase **d'Exécuter le Script** .

22. Sélectionnez l' **icône du projet** dans le projet de navigation, sélectionnez votre projet **cible**, puis sélectionnez l'onglet **Paramètres de génération** .

23. Recherchez **d'Autres indicateurs de l'éditeur de liens**et ajoutez les valeurs **-force_load** et **- Obj-C**.

24. Développez la `CordovaLib` du sous-projet.

25. Localiser le `VERSION` fichier, faites-le glisser dans votre projet principal (nous voulons créer un lien vers elle, pas une copie).

26. Sélectionnez la case d'option de **créer des groupes pour tous les dossiers ajoutés** , puis cliquez sur le bouton **Terminer** .

27. Sélectionnez le `VERSION` fichier que vous avez fait glisser juste dans une étape précédente.

28. Tapez la combinaison de touches **Commande-Option-1** pour afficher **Fichier inspecteur** (ou menuitem **Découvre → utilitaires → afficher l'inspecteur fichier**).

29. Choisissez **Relative à CORDOVALIB** dans **Fichier inspecteur** pour le menu déroulant ci-bas pour **emplacement**.

30. Valeur la préférence de Xcode **Xcode préférences → lieux → données dérivées → avancé...** **Unique**, afin que se trouvent les en-têtes unifiés.

31. Sélectionnez l' **icône du projet** dans le projet de navigation, sélectionnez votre **cible**, puis sélectionnez l'onglet **Paramètres de génération** .

32. Recherche de **chemins de recherche de Header**. Pour ce paramètre, ajoutez ces trois valeurs, y compris les guillemets :
    
        "$(TARGET_BUILD_DIR) / usr/local/lib/include" "$(OBJROOT) / UninstalledProducts/include" "$(BUILT_PRODUCTS_DIR)"
        

33. Recherche **d'autres indicateurs de l'éditeur de liens**. Pour ce paramètre, ajoutez cette valeur :
    
        -weak_framework CoreFoundation
        

34. Générez votre projet, il devrait compiler et lier sans **aucun problème**.

35. Sélectionnez votre projet dans le **système de** menu déroulant et sélectionnez **iPhone 5.1 simulateur**.

36. Cliquez sur le bouton **exécuter** .

**Remarque**: Si votre projet ne fonctionne pas comme prévu dans le simulateur, veuillez prendre note des éventuelles erreurs dans le journal de console dans Xcode pour trouver des indices.

## La mise à niveau de projets 1.8.x à 1.9.0

1.  Installer Cordova 1.9.0.

2.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

3.  Copie le `www/cordova-1.9.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-1.8.x.js` fichier.

4.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-1.9.0.js` fichier.

**NOTE**: 1.9.0 prend en charge le nouveau `BackupWebStorage` booléen `Cordova.plist` réglage. Il est activé par défaut, donc mettre à `false` pour le désactiver, surtout sur iOS 6. Voir [Notes de version : Safari et UIKit Section][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## Mise à jour 1.7.0 Projects to 1.8.x

1.  Installer Cordova 1.8.0.

2.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

3.  Copie le `www/cordova-1.8.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-1.7.x.js` fichier.

4.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-1.8.0.js` fichier.

Si vous avez l'intention à l'aide de l'API de Capture, vous devez les nouveaux actifs de **rétine-écran de l'iPad** :

1.  Copie le `Resources/Capture.bundle` point de ce nouveau projet dans le répertoire de votre projet, écraser votre existant `Resources/Capture.bundle` point.

2.  Dans votre projet, sélectionnez le `Capture.bundle` point dans votre projet de navigation dans Xcode, taper la touche **Suppr** , puis sélectionnez **Supprimer une référence** dans la boîte de dialogue.

3.  Faites glisser le nouveau `Capture.bundle` de l'étape 1 ci-dessus dans votre projet de navigation dans Xcode, puis sélectionnez la case d'option de **créer des groupes pour tous les dossiers ajoutés** .

## La mise à niveau de projets 1.6.x à 1.7.0

1.  Installer Cordova 1.7.0.

2.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

3.  Copie le `www/cordova-1.7.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-1.6.0.js` fichier.

4.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-1.7.0.js` fichier.

## 1.5.0 mise à niveau de projets à 1.6.x

1.  Installer Cordova 1.6.1.

2.  Faire une sauvegarde de `AppDelegate.m` , `AppDelegate.h` , `MainViewController.m` , `MainViewController.h` , et `Cordova.plist` dans votre projet.

3.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

4.  Copier ces fichiers dans le nouveau projet dans votre répertoire de projet 1.5.0-based sur le disque, remplaçant les anciens fichiers (sauvegarde de vos fichiers tout d'abord de l'étape 2 ci-dessus) :
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  Ajouter tous les nouveaux `MainViewController` et `AppDelegate` les fichiers dans votre projet Xcode.

6.  Copie le `www/cordova-1.6.1.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-1.5.0.js` fichier.

7.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-1.6.1.js` fichier.

8.  Ajouter le nouveau `Cordova.plist` fichier dans votre projet. Ceci est nécessaire car les noms de service principaux plugin doivent évoluer pour correspondre à ceux de Android et BlackBerry, pour un (unifié) fichier Cordova JavaScript`cordova-js`).

9.  Intégrer des paramètres, **Plugins** et **ExternalHosts** des entrées que vous aviez dans votre **sauvegarde Cordova.plist** dans le nouveau`Cordova.plist`.

10. Intégrer un code spécifique au projet que vous avez dans votre sauvegarde `AppDelegate.h` et `AppDelegate.m` dans le nouveau `AppDelegate` fichiers. Toute `UIWebViewDelegate` ou `CDVCommandDelegate` dans le code `AppDelegate.m` a besoin d'aller en `MainViewController.m` maintenant (voir sections commentées dans ce fichier).

11. Intégrer un code spécifique au projet que vous avez dans votre sauvegarde `MainViewController.h` et `MainViewController.m` dans les nouveaux fichiers de MainViewController.

12. Cliquez sur l'icône de projet dans le projet de navigation, sélectionnez votre **projet**, puis sélectionnez l'onglet **Paramètres de génération** .

13. Entrez **compilateur pour C / C + c++ / Objective-C** dans le champ de recherche.

14. Sélectionnez la valeur **d'Apple 3.1 de compilateur LLVM** .

## La mise à niveau de projets 1.4.x à la 1.5.0

1.  Installer Cordova 1.5.0.

2.  Créez un nouveau projet et l'exécuter une fois. Vous aurez besoin de certains des actifs de ce nouveau projet.

3.  Copie le `www/cordova-1.5.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/phonegap-1.4.x.js` fichier.

4.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau Cordova `cordova-1.5.0.js` fichier.

5.  Trouver `PhoneGap.framework` dans votre projet de navigation, sélectionnez-le.

6.  Tapez la touche **supprimer** et supprimer la `PhoneGap.framework` référence dans le projet de navigation.

7.  Tapez la combinaison de touches **Commande-Option-A** , qui devrait tomber une feuille pour ajouter des fichiers à votre projet (la feuille **d'Ajouter des fichiers...** ). Assurez-vous que la case d'option de **création de groupes pour tous les dossiers ajoutés** est sélectionnée.

8.  Tapez la combinaison de touches **Commande-Maj-G** , qui devrait tomber d'une autre feuille pour vous rendre à un dossier (le **allez dans le dossier :** feuille).

9.  Entrez `/Users/Shared/Cordova/Frameworks/Cordova.framework` dans la **allez dans le dossier :** feuille et puis appuyez sur le bouton **OK** .

10. Appuyez sur le bouton **Ajouter** dans la feuille **d'Ajouter des fichiers...** .

11. Sélectionnez `Cordova.framework` dans le navigateur de projet.

12. Tapez la combinaison de touches **Commande-Option-1** pour afficher **Fichier inspecteur**.

13. Choisissez le **Chemin d'accès absolu** dans l' **Inspecteur de fichier** pour le menu déroulant pour **emplacement**.

14. Tapez la combinaison de touches **Commande-Option-A** , qui devrait tomber une feuille pour ajouter des fichiers à votre projet (la feuille **d'Ajouter des fichiers...** ). Assurez-vous que la case d'option de **création de groupes pour tous les dossiers ajoutés** est sélectionnée.

15. Tapez la combinaison de touches **Commande-Maj-G** , qui devrait tomber d'une autre feuille pour vous rendre à un dossier (le **allez dans le dossier :** feuille).

16. Entrez `~/Documents/CordovaLib/Classes/deprecated` dans la **allez dans le dossier :** feuille et puis appuyez sur le bouton **OK** .

17. Appuyez sur le bouton **Ajouter** dans la feuille **d'Ajouter des fichiers...** .

18. Dans votre `AppDelegate.h` , `AppDelegate.m` , et `MainViewController.h` fichiers, remplacer l'ensemble `#ifdef PHONEGAP_FRAMEWORK` bloquer avec :
    
        #import "CDVDeprecated.h"
        

19. Cliquez sur l' **icône du projet** dans le projet de navigation, sélectionnez votre **cible**, puis sélectionnez l'onglet **Paramètres de génération** .

20. Recherche de **chemins de recherche de cadre**.

21. Remplacez la valeur existante avec`/Users/Shared/Cordova/Frameworks`.

22. Recherche de **Macros préprocesseur**.

23. La première valeur (combiné), remplacez la valeur avec **CORDOVA_FRAMEWORK = YES**.

24. Sélectionnez l'onglet **Générer des Phases** .

25. Développez **exécuter Script**.

26. Remplacez toutes les occurrences de **PhoneGap** **Cordova**.

27. Trouver votre `PhoneGap.plist` dans le navigateur de projet du fichier et cliquez sur le nom du fichier une fois pour entrer dans le mode édition de nom.

28. Renommer `PhoneGap.plist` à`Cordova.plist`.

29. Faites un clic droit sur `Cordova.plist` et choisissez **Ouvrir le Code Source comme →**.

30. Appuyez sur **Commande + Option + F**, choisissez **remplacer** dans le menu déroulant en haut à gauche de la fenêtre Source.

31. Entrez `com.phonegap` pour la chaîne Find, et `org.apache.cordova` pour la chaîne de remplacement, puis appuyez sur le bouton **Remplacer tout** .

32. Entrez **PG** de la chaîne Find et **CDV** pour la chaîne de remplacement, puis appuyez sur le bouton **Remplacer tout** .

33. Appuyez sur **Commande + B** pour construire. Vous avez encore des désapprobations qui vous pouvez vous débarrasser de l'avenir (voir `CDVDeprecated.h` . Par exemple, les classes de remplacer dans votre code qui utilisent PG * au CDV *).

## 1.4.0 mise à niveau de projets à 1.4.1

1.  Installer Cordova 1.4.1.

2.  Faire une sauvegarde de`MainViewController.m`.

3.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

4.  Copie le `MainViewController.m` fichier à partir du nouveau projet dans votre répertoire de projet 1.4.0-based sur le disque, remplacer l'ancien fichier (sauvegarde vos fichiers tout d'abord de l'étape 2 ci-dessus).

5.  Ajouter le `MainViewController.m` fichier dans votre projet Xcode.

6.  Intégrer un code spécifique au projet que vous avez dans votre sauvegarde `MainViewController.m` dans le nouveau fichier.

7.  Mise à jour le `phonegap-1.4.0.js` fichier est optionnel, rien n'a changé dans le code JavaScript entre 1.4.0 et 1.4.1.

## Projets de modernisation 1.3.0 à 1.4.0

1.  Installer Cordova 1.4.0.

2.  Faire une sauvegarde de `AppDelegate.m` et `AppDelegate.h` dans votre projet.

3.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

4.  Copier ces fichiers dans le nouveau projet dans votre répertoire de projet 1.3.0-based sur le disque, remplaçant les anciens fichiers (sauvegarde de vos fichiers tout d'abord de l'étape 2 ci-dessus) :
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Ajouter tous les `MainViewController` les fichiers dans votre projet Xcode.

6.  Copie le `www/phonegap-1.4.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/phonegap-1.3.0.js` fichier.

7.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `phonegap-1.4.0.js` fichier.

8.  Ajouter une nouvelle entrée sous `Plugins` dans votre `PhoneGap.plist` fichier. La clé est `com.phonegap.battery` et la valeur est`PGBattery`.

9.  Intégrer un code spécifique au projet que vous avez dans votre sauvegarde `AppDelegate.h` et `AppDelegate.m` dans les nouveaux fichiers de AppDelegate.

## Projets de modernisation 1.2.0 à 1.3.0

1.  Installer Cordova 1.3.0.

2.  Faire une sauvegarde de `AppDelegate.m` et `AppDelegate.h` dans votre projet.

3.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

4.  Copier ces fichiers dans le nouveau projet dans votre répertoire de projet 1.2.0-based sur le disque, remplaçant les anciens fichiers (sauvegarde de vos fichiers tout d'abord de l'étape 2 ci-dessus) :
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Ajouter tous les `MainViewController` les fichiers dans votre projet Xcode.

6.  Copie le `www/phonegap-1.3.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/phonegap-1.2.0.js` fichier.

7.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `phonegap-1.3.0.js` fichier.

8.  Ajouter une nouvelle entrée sous `Plugins` dans votre `PhoneGap.plist` fichier. La clé est `com.phonegap.battery` et la valeur est`PGBattery`.

9.  Intégrer un code spécifique au projet que vous avez dans votre sauvegarde `AppDelegate.h` et `AppDelegate.m` dans les nouveaux fichiers de AppDelegate.

## Mise à jour 1.1.0 Projects to 1.2.0

1.  Installer Cordova 1.2.0.

2.  Faire une sauvegarde de `AppDelegate.m` et `AppDelegate.h` dans votre projet.

3.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

4.  Copier ces fichiers dans le nouveau projet dans votre répertoire de projet 1.1.0-based sur le disque, remplaçant les anciens fichiers (sauvegarde de vos fichiers tout d'abord de l'étape 2 ci-dessus) :
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Ajouter tous les `MainViewController` les fichiers dans votre projet Xcode.

6.  Copie le `www/phonegap-1.2.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/phonegap-1.1.0.js` fichier.

7.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `phonegap-1.2.0.js` fichier.

8.  Ajouter une nouvelle entrée sous `Plugins` dans votre `PhoneGap.plist` fichier. La clé est `com.phonegap.battery` et la valeur est`PGBattery`.

9.  Intégrer un code spécifique au projet que vous avez dans votre sauvegarde `AppDelegate.h` et `AppDelegate.m` dans les nouveaux fichiers de AppDelegate.

## Projets de modernisation 1.0.0 à 1.1.0

1.  Installer Cordova 1.1.0.

2.  Faire une sauvegarde de `AppDelegate.m` et `AppDelegate.h` dans votre projet.

3.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

4.  Copier ces fichiers dans le nouveau projet dans votre répertoire de projet 1.0.0-based sur le disque, remplaçant les anciens fichiers (sauvegarde de vos fichiers tout d'abord de l'étape 2 ci-dessus) :
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Ajouter tous les `MainViewController` les fichiers dans votre projet Xcode.

6.  Copie le `www/phonegap-1.1.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/phonegap-1.0.0.js` fichier.

7.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `phonegap-1.1.0.js` fichier.

8.  Ajouter une nouvelle entrée sous `Plugins` dans votre `PhoneGap.plist` fichier. La clé est `com.phonegap.battery` et la valeur est`PGBattery`.

9.  Intégrer un code spécifique au projet que vous avez dans votre sauvegarde `AppDelegate.h` et `AppDelegate.m` dans les nouveaux fichiers de AppDelegate.

## 0.9.6 mise à niveau de projets à 1.0.0

1.  Installer Cordova 1.0.0.

2.  Faire une sauvegarde de `AppDelegate.m` et `AppDelegate.h` dans votre projet.

3.  Créez un nouveau projet. Vous aurez besoin de certains des actifs de ce nouveau projet.

4.  Copier ces fichiers dans le nouveau projet dans votre répertoire de projet 0.9.6-based sur le disque, remplaçant les anciens fichiers (sauvegarde de vos fichiers tout d'abord de l'étape 2 ci-dessus) :
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Ajouter tous les `MainViewController` les fichiers dans votre projet Xcode.

6.  Copie le `www/phonegap-1.0.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/phonegap-0.9.6.js` fichier.

7.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `phonegap-1.0.0.js` fichier.

8.  Ajouter une nouvelle entrée sous `Plugins` dans votre `PhoneGap.plist` fichier. La clé est `com.phonegap.battery` et la valeur est`PGBattery`.

9.  Intégrer un code spécifique au projet que vous avez dans votre sauvegarde `AppDelegate.h` et `AppDelegate.m` dans les nouveaux fichiers de AppDelegate.