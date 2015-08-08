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

# Guide pour la plate-forme Android

Ce guide montre comment configurer votre environnement SDK pour déployer des applications de Cordova pour les appareils Android et comment éventuellement utiliser Android-centré des outils de ligne de commande dans votre flux de travail de développement. Vous devez installer le SDK Android indépendamment si vous voulez utiliser ces outils axés sur la plate-forme de shell ou la CLI de Cordova multi-plateforme pour le développement. Pour une comparaison entre les voies de deux développement, consultez la vue d'ensemble. Pour plus d'informations sur la CLI, consultez l'Interface de ligne de commande.

## Configuration requise et support

Cordova pour Android nécessite le SDK Android qui peut être installé sur le système d'exploitation OS X, Linux ou Windows. Voir du SDK Android [Configuration du système requise][1].

 [1]: http://developer.android.com/sdk/index.html#Requirements

Cordova supporte Android 4.0.x (en commençant par le niveau de l'API Android 14) et plus élevé. En règle générale, les versions Android deviennent non étayées par Cordova comme ils plonger au-dessous de 5 % sur Google [dashboard de distribution][2]. Android versions antérieures à la version API de niveau 10 et les versions 3.x (Honeycomb, niveaux API 11-13) tombent nettement au-dessous de ce seuil de 5 %.

 [2]: http://developer.android.com/about/dashboards/index.html

## Installer les outils de Cordova Shell

Si vous souhaitez utiliser les outils de coquille Android-centrée de Cordova conjointement avec le SDK, Télécharger Cordova de [cordova.apache.org][3]. Sinon ignorer cette section si vous envisagez d'utiliser l'outil CLI de multi-plateforme décrit dans l'Interface de ligne de commande.

 [3]: http://cordova.apache.org

Le téléchargement de Cordova contient des archives distincts pour chaque plate-forme. N'oubliez pas d'élargir l'archive appropriée, `android` dans ce cas, dans un répertoire vide. Les utilitaires les pertinents sont disponibles dans le niveau supérieur `bin` répertoire. (Consultez le fichier **README** si nécessaire pour des directions plus détaillées).

Ces outils de coquille permettent de créer, générer et exécuter des applications Android. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins. Voir Application Plugins pour plus d'informations sur la façon de développer des plugins.

## Installez le Kit de développement Java (JDK)

Installer [Java Development Kit (JDK) 7][4] ou version ultérieure.

 [4]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html

Lors de l'installation sous Windows, vous devez également définir la Variable d'environnement `JAVA_HOME` selon le chemin d'installation de JDK (par exemple, C:\Program Files\Java\jdk1.7.0_75).

## Installer le SDK Android

Installer les [outils de Android SDK autonome][5] ou [Studio Android][6]. Procceed avec `Android Studio` si vous prévoyez Cordova nouvelle pour Android plugins ou utilisant des outils natifs pour exécuter et déboguer la plateforme Android. Dans le cas contraire, `Outils du SDK Android autonome` suffisent pour créer et déployer des applications Android.

 [5]: http://developer.android.com/sdk/installing/index.html?pkg=tools
 [6]: http://developer.android.com/sdk/installing/index.html?pkg=studio

Instructions d'installation détaillées sont disponibles dans le cadre des liens d'installation ci-dessus.

Pour outils de ligne de commande de Cordova pour travailler, ou la CLI qui repose sur eux, vous devez inclure les répertoires de `plate-forme-outils` et `outils` du SDK dans votre `PATH`. Sur un Mac, vous pouvez utiliser un éditeur de texte pour créer ou modifier le fichier `~/.bash_profile` , ajoutant une ligne comme ci-dessous, en fonction d'où le kit de développement logiciel installe :

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools


Cette ligne dans `~/.bash_profile` expose ces outils dans windows terminales nouvellement ouverts. Si votre fenêtre de terminal est déjà ouvert dans OSX ou d'éviter une déconnexion/connexion sur Linux, exécutez ceci pour les rendre disponibles dans la fenêtre du terminal actuelle :

        $ source ~/.bash_profile


Pour modifier l'environnement `PATH` sous Windows :

1.  Cliquez sur le menu **Démarrer** dans le coin en bas à gauche du bureau, faites un clic droit sur **ordinateur**, puis sélectionnez **Propriétés**.

2.  Sélectionnez **Paramètres système avancés** dans la colonne de gauche.

3.  Dans la boîte de dialogue, appuyez sur **Variables d'environnement**.

4.  Sélectionnez la variable **PATH** et appuyer sur **modifier**.

5.  Ajouter ce qui suit à le `PATH` basé sur lequel vous avez installé le SDK, par exemple :

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools


6.  Enregistrez la valeur et fermez les deux boîtes de dialogue.

## Installer les paquets SDK

Ouvrez le gestionnaire de SDK Android (par exemple, par l'intermédiaire de borne : `android`) et installer :

1.  5.1.1 Android (API 22) platform SDK
2.  Version d'Android SDK Build-tools 19.1.0 ou supérieur
3.  Référentiel de prise en charge Android (Extras)

Pour plus de détails, voir [Installation de Packages de SDK][7] .

 [7]: http://developer.android.com/sdk/installing/adding-packages.html

## Configurer un émulateur

Android sdk ne fournit pas de n'importe quelle instance d'émulateur par défaut par défaut. Vous pouvez créer un nouveau en exécutant `android` sur la ligne de commande. La presse **Outils → gérer AVDs** (périphériques virtuels Android), puis choisissez n'importe quel élément du **Dispositif de définitions** dans la boîte de dialogue :

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Appuyez sur **Créer AVD**, éventuellement modifier le nom, puis appuyez sur **OK** pour accepter les modifications :

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

L'AVD apparaît alors dans la liste **Des périphériques virtuels Android** :

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Pour ouvrir l'émulateur comme une demande distincte, l'AVD et cliquez sur **Démarrer**. Il lance autant qu'il le ferait sur le dispositif, avec des contrôles supplémentaires disponibles pour les boutons matériels :

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

Pour une expérience plus rapide, vous pouvez utiliser l' `Accélération de la Machine virtuelle` pour améliorer la vitesse d'exécution. De nombreux processeurs modernes fournissent des extensions pour exécuter des Machines virtuelles plus efficacement. Avant d'utiliser ce type d'accélération, vous devez déterminer si CPU de votre système actuel de développement, on supporte les technologies de virtualisation suivants :

*   **Technologie de virtualisation Intel** (VT-x, vmx) → [Intel VT-x pris en charge la liste des processeurs][12]
*   **AMD Virtualization** (AMD-V, SVM), pris en charge uniquement pour Linux (depuis mai 2006, tous les processeurs AMD incluent AMD-V, sauf Sempron).

 [12]: http://ark.intel.com/products/virtualizationtechnology

Une autre façon de savoir si votre processeur supporte la technologie de VT-x, c'est en exécutant l' `Utilitaire Intel Processor Identification Utility`, pour `Windows`, vous pouvez le télécharger depuis le [Centre de téléchargement][13]de Intel, ou vous pouvez utiliser l' [utilitaire booteable][14], qui est `Indépendant de l'OS`.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Après avoir installer et exécuter `l'Utilitaire d'Identification des processeurs Intel` sur Windows, vous obtiendrez la fenêtre suivante, afin de vérifier si votre processeur supporte les Technologies de virtualisation :

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

Afin d'accélérer l'émulateur, vous devez télécharger et installer une ou plusieurs Images de système `Atom d'Intel x 86` , ainsi que l' `Intel matériel accéléré l'exécution Manager (HAXM)`.

Ouvrez votre gestionnaire de SDK Android et sélectionnez l'Image du système `Atom d'Intel x 86` , pour quelle que soit la version que vous souhaitez tester. Puis allez à `options` et sélectionnez `Intel x 86 Emulator accélérateur (HAXM)`et installer ces paquets :

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

Après le téléchargement, exécuter le programme d'installation d'Intel, qui est disponible dans votre Android SDK à `Options/intel/Hardware_Accelerated_Execution_Manager`. **Remarque**:`si vous avez des difficultés pour installer le package, vous pouvez trouver plus d'informations et conseils étape par étape cochez-le` [Article Intel][17].

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Installez une ou plusieurs Images de système `x 86 d'Intel Atom` ainsi que le `Gestionnaire d'exécution accélérée matériel Intel`, disponible sous **Extras**.

2.  Exécutez le programme d'installation d'Intel, qui est disponible dans votre Android SDK à `Options/intel/Hardware_Accelerated_Execution_Manager`.

3.  Créer un nouvel AVD avec l'objectif fixé à une image d'Intel.

4.  Lorsque vous démarrez l'émulateur, assurez-vous il n'y a aucun message d'erreur indiquant une panne de charger les modules HAX.

## Créez un nouveau projet

À ce stade, pour créer un nouveau projet, vous pouvez choisir entre l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande, ou l'ensemble des outils de coquille spécifiques à Android. Partir dans un répertoire de code source, voici l'approche de la CLI :

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"


Voici l'approche de shell-outil de niveau inférieur correspondant pour Unix et Windows :

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Générez le projet

Si vous utilisez l'interface CLI dans le développement, le répertoire de niveau supérieur `www` du répertoire du projet contient les fichiers sources. Courir à chacun d'entre eux dans le répertoire du projet pour reconstruire l'application :

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android


Si vous utilisez les outils de coquille spécifiques à Android en développement, il y a une approche différente. Une fois que vous générez le projet, source de l'application par défaut est disponible dans le sous-répertoire `assets/www` . Les commandes suivantes sont disponibles dans son sous-répertoire de `cordova` .

La commande `build` nettoie les fichiers projet et régénère l'app. Voici la syntaxe pour Mac et Windows. Les deux premiers exemples génèrent des informations de débogage, et le second s'appuie les apps pour diffusion immédiate :

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug

        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release


## Déployer l'application

Vous pouvez utiliser l'utilitaire CLI de `cordova` pour déployer l'application sur l'émulateur ou le dispositif de la ligne de commande :

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device


Sinon, utilisez l'interface de coquille alternative :

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device


Vous pouvez utiliser **cordova run android --list** pour voir toutes les cibles disponibles et **cordova run android --target=target_name** pour exécuter l'application sur un émulateur ou un périphérique spécifique (par exemple, `cordova run android --target="Nexus4_emulator"`).

Vous pouvez également utiliser **cordova run --help** pour voir construire supplémentaire et exécuter les options.

Cela pousse l'app à l'écran d'accueil et il lance :

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png

Lorsque vous `run` l'application, vous aussi `build` il. Vous pouvez ajouter supplémentaires `--debug`, `--release`et `--nobuild` drapeaux pour contrôler comment il est construit, ou même si une reconstruction est nécessaire :

        $ /path/to/project/cordova/run --emulator --nobuild


## Autres commandes

Ce qui suit génère un journal détaillé de l'application en cours d'exécution :

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat


Le texte suivant nettoie les fichiers de projet :

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat


## Ouvrez un nouveau projet dans le SDK

Une fois que la plateforme android est ajouté à votre projet, vous pouvez l'ouvrir depuis [Android][6]Studio :

1.  Lancez l'application **Android de Studio** .

2.  Sélectionnez **Import Project (Eclipse ADT, Gradle, etc.)**.

    ![][19]

3.  Sélectionnez l'emplacement où la plateforme android est stockée (`votre/projet/platforms/android`).

    ![][20]

4.  Pour la question `Gradle Sync` vous pouvez simplement répondre **Oui**.

 [19]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png
 [20]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png

Vous êtes tous ensemble maintenant et pouvez générer et exécuter l'application directement à partir de `Studio Android`.

![][21]

 [21]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png

Consultez [Vue d'ensemble Studio de Android][22] et et [génération et l'exécution de Studio Android][23] pour plus de détails.

 [22]: http://developer.android.com/tools/studio/index.html
 [23]: http://developer.android.com/tools/building/building-studio.html
