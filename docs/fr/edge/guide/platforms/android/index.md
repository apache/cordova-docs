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

# Guide pour la plate-forme Android

Ce guide explique comment configurer l'environnement de développement de votre SDK pour déployer des applications de Cordova destinées aux appareils sous Android. Voir ci-dessous pour plus d'informations relatives à cette plate-forme :

*   Configuration d'Android
*   WebViews Android
*   Plugins Android
*   Mettre à jour Android
*   Outils en ligne de commande Android

Les outils en ligne de commande listés ci-dessus font référence aux versions de Cordova antérieures à 3.0. Voir l'Interface en Ligne de Commande pour plus d'informations concernant les outils actuels.

## Configuration requise et support

Voir la [Configuration requise][1] par le SDK Android.

 [1]: http://developer.android.com/sdk/index.html

Cordova supporte Android 2.2, 2.3 et 4.x. En règle générale, les plates-formes sont considérées comme obsolètes lorsque leur usage annoncé par Google sur son [tableau de bord de distribution][2] descend sous la barre des 5%.

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

Les développeurs doivent utiliser l'utilitaire `cordova` conjointement avec le SDK Android. Voir l'Interface en Ligne de Commande pour plus d'informations concernant son installation, l'ajout de projets, ainsi que la compilation et le déploiement de projets.

## Installation du SDK

Installer le SDK Android depuis [developer.android.com/sdk][3]. Le SDK Android est distribué sous la forme d'un fichier 'adt-bundle-<os>-<arch>-<ver>'. Sous windows, ce fichier est livré avec un installeur. Sous OSX et Linux, il s'agira simplement de décompresser l'archive à l'emplacement où vous stockez vos outils de développement. [Vous pouvez trouver ici d'avantage d'informations à propos de l'installation du SDK Android.][4]

 [3]: http://developer.android.com/sdk/
 [4]: http://developer.android.com/sdk/installing/bundle.html

Afin que les outils en ligne de commande de Cordova puissent fonctionner correctement, vous devrez également ajouter les répertoires `tools` et `platform-tools` du SDK à votre variable d'environnement PATH. Sur Mac, il est possible d'utiliser un éditeur de texte pour créer ou modifier le fichier `~/.bash_profile`, en lui ajoutant une ligne telle que celle présentée ci-dessous, en fonction de l'emplacement où le SDK a été installé :

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools
    

Ceci a pour effet d'exposer les outils correspondants du SDK à chaque nouvelle fenêtre de terminal. Autrement, exécutez la commande ci-dessous afin de les rendre disponibles dans la session en cours :

    $ source ~/.bash_profile
    

Pour modifier la variable d'environnement PATH sous Windows 7 :

*   Cliquez sur le menu **Démarrer** dans le coin en bas à gauche du bureau, faites un clic droit sur **ordinateur**, puis cliquez sur **Propriétés**.

*   Cliquez sur **Paramètres système avancés** dans la colonne de gauche.

*   Dans la boîte de dialogue, pressez ensuite **Variables d'environnement**.

*   Sélectionnez la variable **PATH** et appuyez sur **Modifier**.

*   Ajoutez le chemin d'accès correspondant au répertoire d'installation du SDK, par exemple, ajoutez ceci :
    
        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools
        

*   Enregistrez la nouvelle valeur et fermez les deux boîtes de dialogue.

Vous devrez peut-être également activer Java et Ant. Ouvrez alors une invite de commandes et entrez d'abord `java` puis `ant`. Ajoutez enfin à la variable d'environnement PATH tout chemin nécessaire :

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## Ouvrir un projet dans le SDK

Utiliser l'utilitaire `cordova` afin de mettre en place un nouveau projet, tel que décrit dans l'Interface en Ligne de Commande Cordova. Dans un répertoire de code source par exemple :

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

Une fois le projet créé, voici comment utiliser le SDK pour le modifier :

*   Lancez l'application **Eclipse**.

*   Sélectionnez l'élément de menu **Nouveau projet**.

*   Choisissez **Un projet Android à partir de code existant** dans la boîte de dialogue, puis cliquez sur **suivant** : ![][5]

*   Accédez à `hello`, ou n'importe quel répertoire créé pour contenir le projet, puis au sous-répertoire `platforms/android`.

*   Cliquez sur **Terminer**.

 [5]: img/guide/platforms/android/eclipse_new_project.png

Lors de l'ouverture de la fenêtre d'Eclipse, un **X** rouge peut apparaître indiquant d'eventuels problèmes non résolus. Dans ce cas, suivez ces quelques étapes supplémentaires :

*   Faites un clic droit sur le répertoire du projet.

*   Dans la boîte de dialogue **Propriétés**, sélectionnez **Android** dans le volet de navigation.

*   Comme cible de compilation du projet, sélectionnez le plus haut niveau de l'API Android que vous avez installé.

*   Cliquez sur **OK**.

*   Sélectionnez **Nettoyer** dans le menu **Projet**. Cela devrait alors corriger toutes les erreurs dans le projet.

## Déployer sur l'émulateur

Vous pouvez utiliser l'utilitaire `cordova` pour lancer une application dans l'émulateur, ou bien l'exécuter à partir du SDK. Quoi qu'il en soit, le SDK doit tout d'abord être configuré pour afficher au moins un appareil. Pour ce faire, utilisez l'Android SDK Manager, une application Java s'exécutant séparément d'Eclipse. Il existe deux façons d'ouvrir celle-ci :

*   Exécuter `android` via la ligne de commande.

*   Cliquer sur l'icône suivante dans la barre d'outils d'Eclipse :
    
    ![][6]

 [6]: img/guide/platforms/android/eclipse_android_sdk_button.png

Une fois ouvert, l'Android SDK Manager affiche diverses bibliothèques d'exécution :

![][7]

 [7]: img/guide/platforms/android/asdk_window.png

Choisissez **Tools → Manage AVDs** (périphériques virtuels Android), puis cliquez sur n'importe quel élément de **Définitions de périphérique** dans la boîte de dialogue :

![][8]

 [8]: img/guide/platforms/android/asdk_device.png

Cliquez sur **Create AVD**, modifiez éventuellement le nom affiché, puis pressez **OK** afin de valider les modifications :

![][9]

 [9]: img/guide/platforms/android/asdk_newAVD.png

L'AVD apparaît alors dans la liste **Android Virtual Devices** :

![][10]

 [10]: img/guide/platforms/android/asdk_avds.png

Pour ouvrir l'émulateur en tant qu'application distincte, sélectionnez l'AVD créé et cliquez sur **Démarrer**. L'émulateur se comportera quasiment de la même façon qu'un appareil, avec des contrôles additionnels prévus en remplacement des boutons matériels :

![][11]

 [11]: img/guide/platforms/android/asdk_emulator.png

À ce stade, vous pouvez utiliser l'utilitaire `cordova` pour déployer l'application sur l'émulateur depuis la ligne de commande :

        $ cordova emulate android
    

Si au lieu de cela, vous travaillez dans Eclipse, faites un clic droit sur le projet et choisissez **Exécuter en tant que → Application Android**. Vous devrez peut-être spécifier un AVD, si aucun n'est encore ouvert.

Pour une expérience plus rapide en général, utilisez une image d'émulateur basée sur Intel :

*   Installez une ou plusieurs images systèmes `Intel x86 Atom` ainsi que le `Intel Hardware Accelerated Execution Manager`, disponible sous **Extras**.

*   Exécutez le programme d'installation d'Intel, disponible dans votre Android SDK sous `extras/intel/Hardware_Accelerated_Execution_Manager`.

*   Créez un nouvel AVD dont la cible est orientée vers une image Intel.

*   Lorsque vous démarrez l'émulateur, assurez-vous qu'aucun message d'erreur indiquant un problème de chargement des modules HAX ne s'affiche.

## Déployer sur un appareil

Pour envoyez une application directement sur un appareil, assurez-vous que le débogage USB soit activé sur l'appareil en question tel que décrit sur le [Portail Développeur Android][12], et utilisez un cordon mini USB pour brancher l'appareil à votre ordinateur.

 [12]: http://developer.android.com/tools/device.html

Vous pourrez ensuite envoyer l'application sur l'appareil via la ligne de commande :

        $ cordova run android
    

De même depuis Eclipse, faites un clic droit sur le projet et choisissez **Exécuter en tant que → Application Android**.