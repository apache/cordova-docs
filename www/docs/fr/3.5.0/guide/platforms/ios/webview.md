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

# iOS WebViews

Cette section montre comment intégrer un composant WebView Cordova-activée dans une application iOS plus grande. Pour plus d'informations sur la façon dont ces composants peuvent communiquer entre eux, voir Application Plugins.

Soutien à iOS WebViews commencé avec Cordova version 1.4, en utilisant un `Cleaver` composant dont le modèle de Xcode est une implémentation de référence. Cordova 2.0 et versions ultérieures ne prennent en charge l'implémentation Cleaver sous-projet.

Ces instructions exigent au moins 2.3 Cordova et Xcode 4.5, avec un `config.xml` fichier à partir d'un projet d'iOS nouvellement créé. Vous pouvez utiliser la procédure dans l'Interface de ligne de commande pour créer un nouveau projet, puis obtenir le `config.xml` dans le sous-répertoire de l'application nommé au sein du fichier de`platforms/ios`.

Pour suivre ces instructions, vérifiez que vous avez la dernière distribution de Cordova. Téléchargez-le sur [cordova.apache.org][1] et décompressez le paquet de son iOS.

 [1]: http://cordova.apache.org

## Ajout de Cleaver au projet Xcode (sous-projet CordovaLib)

1.  Quittez Xcode s'exécute.

2.  Ouvrez un terminal et accédez au répertoire source pour iOS Cordova.

3.  Copie le `config.xml` fichier mentionné ci-dessus dans le répertoire du projet.

4.  Ouvrez Xcode et utilisez le Finder pour copier le `config.xml` fichier dans sa fenêtre de **Navigateur du projet** .

5.  Choisir de **créer des groupes pour tous les dossiers ajoutés** , puis appuyez sur **Terminer**.

6.  Utilisez le Finder pour copier le `CordovaLib/CordovaLib.xcodeproj` fichier dans de Xcode **Projet Navigator**

7.  Sélectionnez `CordovaLib.xcodeproj` dans le **navigateur de projet**.

8.  Tapez la combinaison de touches **Commande-Option-1** pour afficher **Fichier inspecteur**.

9.  Choisissez **Relative au groupe** dans **Fichier inspecteur** pour le menu déroulant ci-bas pour **emplacement**.

10. Sélectionnez l' **icône du projet** dans le **Navigateur du projet**, sélectionnez la **cible**, puis sélectionnez l'onglet **Paramètres de génération** .

11. Ajouter `-force_load` et `-Obj-C` pour la valeur **d'Autres indicateurs de Linker** .

12. Cliquez sur l' **icône du projet** dans le projet de navigation, sélectionnez la **cible**, puis sélectionnez l'onglet **Générer des Phases** .

13. Développez **les binaires de lien avec les bibliothèques**.

14. Sélectionnez le **+** bouton et ajoutez le suivant **les cadres**. Éventuellement dans le **Navigateur du projet**, déplacez-les dans le groupe des **cadres** :
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

15. Développez les **Dépendances de la cible**, la zone supérieure avec cette étiquette s'il y a plusieurs cases.

16. Sélectionnez le **+** bouton et ajoutez le `CordovaLib` construire le produit.

17. Développez **Les binaires de lien avec les bibliothèques**, la top box avec cette étiquette s'il y a plusieurs cases.

18. Sélectionnez le **+** bouton et ajoutez`libCordova.a`.

19. Définir la **Xcode préférences → lieux → dérivée données → avancé...** à **Unique**.

20. Sélectionnez l' **icône du projet** dans le projet de navigation, sélectionnez votre **cible**, puis sélectionnez l'onglet **Paramètres de génération** .

21. Recherche de **chemins de recherche de Header**. Pour ce paramètre, ajoutez ces trois valeurs inférieures, y compris les guillemets :
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    À partir de Cordova 2.1.0, `CordovaLib` a été mis à niveau pour utiliser le **Comptage de référence automatique (ARC)**. Vous n'avez pas besoin de passer à l' **ARC** à utiliser `CordovaLib` , mais si vous souhaitez mettre à niveau votre projet pour utiliser un **ARC**, vous devez utiliser l'Assistant de migration de Xcode de la **édition → Refactoriser → convertir en Objective-C ARC...** menu, **désélectionnez libCordova.a**, puis exécutez l'Assistant jusqu'à la fin.

## À l'aide de CDVViewController

1.  Ajoutez l'en-tête suivant :
    
        #import <Cordova/CDVViewController.h>
        

2.  Instancier un nouveau `CDVViewController` et le conserver quelque part, par exemple, à une propriété de classe :
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  Vous pouvez définir la `wwwFolderName` propriété, qui est par défaut à `www` :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  Vous pouvez définir la page de démarrage le `config.xml` du fichier `<content>` tag, soit un fichier local :
    
        < src="index.html de contenu" / >
        
    
    .. .ou un site distant :
    
        <content src="http://apache.org" />
        

5.  Vous pouvez définir la `useSplashScreen` propriété, qui est par défaut à `NO` :
    
        viewController.useSplashScreen = YES;
        

6.  Définir le **cadre de l'avis**. Toujours définir cela comme la dernière propriété :
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Ajoutez Cleaver à l'affichage :
    
        [myView addSubview:viewController.view];
        

## Ajout de HTML, CSS et JavaScript actif

1.  Créez un nouveau répertoire dans le cadre du projet, `www` par exemple.

2.  Placer les éléments HTML, CSS et JavaScript dans ce répertoire.

3.  Utilisez le Finder pour copier le répertoire dans la fenêtre **Projet Navigator** de Xcode.

4.  Sélectionnez **créer dossier Références pour tous les dossiers ajoutés**.

5.  Définir le cas échéant `wwwFolderName` et `startPage` Propriétés du répertoire que vous avez initialement créé, ou utiliser les valeurs par défaut (spécifiées dans la section précédente) lors de l'instanciation du`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"