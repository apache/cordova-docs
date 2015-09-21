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

title: iOS WebViews
---

# iOS WebViews

Commençant par Cordova 1.4, vous pouvez utiliser Cordova en tant que composant dans vos applications iOS. Ce composant est le nom de code « Couperet ».

Nouvelles applications basées sur Cordova créées à l'aide du modèle de Xcode fourni dans Cordova 1.4 ou une plus grande utilisation Cleaver. (Le modèle est l'implémentation de référence de Cleaver.)

Cordova 2.0.0 et les versions ultérieures ne prennent en charge la mise en œuvre de Cleaver sous-projet basé.

## Conditions préalables

*   Cordova 2.3.0 ou supérieur

*   Xcode 4.5 ou supérieur

*   `config.xml`fichier (depuis un projet nouvellement créé iOS)

## Ajout de Cleaver à votre projet Xcode (sous-projet CordovaLib)

1.  Téléchargez et extrayez la source Cordova à un emplacement de répertoire permanent sur votre disque dur, par exemple à`~/Documents/Cordova`.

2.  Quittez Xcode s'exécute.

3.  Terminal.app, accédez au répertoire où vous avez mis la source téléchargé ci-dessus.

4.  Copie le `config.xml` fichier dans votre répertoire de projet sur le disque (voir celles décrites ci-dessus).

5.  Faites glisser et déposez le `config.xml` fichier dans le navigateur de projet de Xcode.

6.  Cliquez sur le bouton radio de **créer des groupes pour tous les dossiers ajoutés** , puis appuyez sur **Terminer**.

7.  Faites glisser et déposez le `CordovaLib.xcodeproj` fichier dans le navigateur de projet de Xcode (à partir du répertoire permanent emplacement ci-dessus et il devrait être dans le `CordovaLib` sous-répertoire).

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  Tapez la combinaison de touches **Commande-Option-1** pour afficher **Fichier inspecteur**.

10. Choisissez **Relative au groupe** dans **Fichier inspecteur** pour le menu déroulant ci-bas pour **emplacement**.

11. Sélectionnez l' **icône du projet** dans le projet de navigation, sélectionnez votre **cible**, puis sélectionnez l'onglet **Paramètres de génération** .

12. Ajouter `-all_load` et `-Obj-C` pour la valeur **d'Autres indicateurs de Linker** .

13. Cliquez sur l' **icône du projet** dans le projet de navigation, sélectionnez votre **cible**, puis sélectionnez l'onglet **Générer des Phases** .

14. Développez **les binaires de lien avec les bibliothèques**.

15. Sélectionnez le **+** bouton et ajoutez le suivant **les cadres**. Éventuellement dans le projet de navigation, déplacez-les dans le groupe de **cadres** ) :
    
        AddressBook.framework AddressBookUI.framework AudioToolbox.framework AVFoundation.framework CoreLocation.framework MediaPlayer.framework QuartzCore.framework SystemConfiguration.framework MobileCoreServices.framework CoreMedia.framework
        

16. Développez les **Dépendances de la cible**, la top box étiquetée comme ça si vous avez plusieurs cases !

17. Sélectionnez le **+** bouton et ajoutez le `CordovaLib` construire le produit.

18. Développez **Les binaires de lien avec les bibliothèques**, la top box étiquetée comme ça si vous avez plusieurs cases !

19. Sélectionnez le **+** bouton et ajoutez`libCordova.a`.

20. Définir les préférences de Xcode **Xcode préférences → lieux → données dérivées → avancé...** sur **Unique**.

21. Sélectionnez l' **icône du projet** dans le projet de navigation, sélectionnez votre **cible**, puis sélectionnez l'onglet **Paramètres de génération** .

22. Recherche de **chemins de recherche de Header**. Pour ce paramètre, ajoutez ces trois valeurs ci-dessous (avec les guillemets) :
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    Avec Cordova 2.1.0, `CordovaLib` a été mis à niveau pour utiliser le **Comptage de référence automatique (ARC)**. Vous ne devez de passer à l' **ARC** à utiliser CordovaLib, mais si vous voulez mettre à niveau votre projet pour utiliser un **ARC**, veuillez utiliser l'Assistant de migration de Xcode depuis le menu : **édition → Refactoriser → convertir en Objective-C ARC...**, **désélectionnez libCordova.a**, puis exécutez l'Assistant jusqu'à la fin.

## Dans votre code à l'aide de CDVViewController

1.  Ajouter cet en-tête :
    
        #import <Cordova/CDVViewController.h>
        

2.  Instanciez une nouvelle `CDVViewController` et d'exercer quelque part (par exemple, d'une propriété dans votre classe) :
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  (*En option*) Définir la `wwwFolderName` propriété (la valeur par défaut `www` ) :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  (*En option*) Définir la page de démarrage dans votre fichier config.xml, le `<content>` tag.
    
        < src="index.html de contenu" / >
        
    
    OR
    
        <content src="http://apache.org" />
        

5.  (*En option*) Définir la `useSplashScreen` propriété (la valeur par défaut `NO` ) :
    
        viewController.useSplashScreen = YES;
        

6.  Définir le **cadre de l'avis** (toujours définir cela comme la dernière propriété) :
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Ajouter Cleaver à votre vue :
    
        [myView addSubview:viewController.view];
        

## Ajouter vos actifs HTML, CSS et JavaScript

1.  Créez un nouveau répertoire dans votre projet sur disque, `www` par exemple.

2.  Mettez vos actifs HTML, CSS et JavaScript dans ce répertoire.

3.  Glissez et déposez le répertoire dans le navigateur de projet de Xcode.

4.  Cliquez sur le bouton radio de **créer des références de dossier pour tous les dossiers ajoutés** .

5.  Le cas échéant la valeur `wwwFolderName` et `startPage` Propriétés pour le dossier que vous avez initialement créé, ou utiliser les valeurs par défaut (voir section précédente) lorsque vous instanciez le`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"