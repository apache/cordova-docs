* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guide pour la plate-forme Android

Ce guide montre comment configurer votre environnement SDK pour déployer des applications de Cordova pour les appareils Android et comment éventuellement utiliser Android-centré des outils de ligne de commande dans votre flux de travail de développement. Vous devez installer le SDK Android indépendamment si vous voulez utiliser ces outils axés sur la plate-forme de shell ou la CLI de Cordova multi-plateforme pour le développement. Pour une comparaison entre les voies de deux développement, consultez la vue d'ensemble. Pour plus d'informations sur la CLI, consultez l'Interface de ligne de commande.

## Configuration requise et support

Cordova pour Android nécessite le SDK Android. Voir du SDK Android [Configuration du système requise][1].

 [1]: http://developer.android.com/sdk/index.html

Cordova supporte Android 2.3.x (Gingerbread, commençant par le niveau de l'API Android 10) et 4.x. En règle générale, les versions Android deviennent non étayées par Cordova comme ils plonger au-dessous de 5 % sur Google [dashboard de distribution][2]. Android versions antérieures à la version API de niveau 10 et les versions 3.x (Honeycomb, niveaux API 11-13) tombent nettement au-dessous de ce seuil de 5 %.

 [2]: http://developer.android.com/about/dashboards/index.html

## Installer les outils de Cordova Shell

Si vous souhaitez utiliser les outils de coquille Android-centrée de Cordova conjointement avec le SDK, Télécharger Cordova de [cordova.apache.org][3]. Sinon ignorer cette section si vous envisagez d'utiliser l'outil CLI de multi-plateforme décrit dans l'Interface de ligne de commande.

 [3]: http://cordova.apache.org

Le téléchargement de Cordova contient des archives distincts pour chaque plate-forme. N'oubliez pas d'élargir l'archive appropriée, `android` dans ce cas, dans un répertoire vide. Les utilitaires les pertinents sont disponibles dans le niveau supérieur `bin` répertoire. (Consultez le fichier **README** si nécessaire pour des directions plus détaillées).

Ces outils de coquille permettent de créer, générer et exécuter des applications Android. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins. Voir Application Plugins pour plus d'informations sur la façon de développer des plugins.

Installer le SDK Android de [developer.android.com/sdk][4]. Le sdk android est distribué sous forme de fichier 'adt - bundle - < os > - < arch > - < ver >'. Sous windows, l'adt-bundle est livré avec un installeur. Sur OSX et Linux, simplement décompresser le « adt-bundle » à l'emplacement vous stockez les outils de développement. [Plus d'informations sur l'installation du SDK Android peuvent être trouvées ici][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

Pour les outils de ligne de commande de Cordova au travail, ou à la CLI qui repose sur eux, vous devez inclure le SDK `tools` et `platform-tools` des répertoires dans votre `PATH` . Sur un Mac, vous pouvez utiliser un éditeur de texte pour créer ou modifier le `~/.bash_profile` fichier, en ajoutant une ligne comme ci-dessous, en fonction d'où le kit de développement logiciel installe :

        export PATH = ${chemin}: / / adt-bundle/sdk/plateforme-outils de développement: / développement/adt-bundle/sdk/tools
    

Ajouter les chemins d'accès pour `java` et `ant` si nécessaire. Cette ligne dans `~/.bash_profile` expose ces outils dans windows terminales nouvellement ouverts. Si votre fenêtre de terminal est déjà ouvert dans OSX ou d'éviter une déconnexion/connexion sur Linux, exécutez ceci pour les rendre disponibles dans la fenêtre du terminal actuelle :

        $ source ~/.bash_profile
    

Pour modifier la `PATH` environnement sur Windows 7 :

1.  Cliquez sur le menu **Démarrer** dans le coin en bas à gauche du bureau, faites un clic droit sur **ordinateur**, puis sélectionnez **Propriétés**.

2.  Sélectionnez **Paramètres système avancés** dans la colonne de gauche.

3.  Dans la boîte de dialogue, appuyez sur **Variables d'environnement**.

4.  Sélectionnez la variable **PATH** et appuyer sur **modifier**.

5.  Ajouter ce qui suit à le `PATH` basé sur lequel vous avez installé le SDK, par exemple :
    
        ;C:\Development\adt-bundle\sdk\platform-Tools ;C:\Development\adt-bundle\sdk\tools
        

6.  Enregistrez la valeur et fermez les deux boîtes de dialogue.

Vous devrez peut-être également activer Java et Open ant une invite de commandes et tapez `java` , puis tapez également `ant` . Ajouter à la `PATH` selon ce qui d'entre eux ne fonctionne pas :

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## Ouvrez un nouveau projet dans le SDK

À ce stade, pour créer un nouveau projet, vous pouvez choisir entre l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande, ou l'ensemble des outils de coquille spécifiques à Android. Partir dans un répertoire de code source, voici l'approche de la CLI :

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

Voici l'approche de shell-outil de niveau inférieur correspondant pour Unix et Windows :

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

Voici comment utiliser le SDK pour le modifier :

1.  Lancez l'application **Eclipse** .

2.  Sélectionnez l'élément de menu **Nouveau projet** .

3.  Choisissez **Un projet Android à partir de Code existant** dans la boîte de dialogue, puis appuyez sur **suivant**:
    
    ![][6]

4.  Si vous utilisez l'interface CLI, accédez à la `hello` répertoire créé pour le projet, puis à la `platforms/android` sous-répertoire. Alternativement, si vous utilisez le `create` shell utilitaire, naviguez simplement vers le `hello` répertoire.

5.  Appuyez sur **Terminer**.

 [6]: img/guide/platforms/android/eclipse_new_project.png

Une fois que la fenêtre de Eclipse s'ouvre, un rouge **X** peut apparaître pour indiquer les problèmes non résolus. Dans l'affirmative, suivez ces étapes supplémentaires :

1.  Faites un clic droit sur le répertoire du projet.

2.  Dans la boîte de dialogue **Propriétés** , sélectionnez **Android** du volet de navigation.

3.  Pour le projet construire cible, sélectionnez le plus haut niveau de l'API Android que vous avez installé.

4.  Cliquez sur **OK**.

5.  Sélectionnez **nettoyer** dans le menu **projet** . Cela devrait corriger toutes les erreurs dans le projet.

## Générez le projet

Si vous utilisez l'interface CLI dans le développement, le niveau supérieur du répertoire du projet `www` répertoire contenant les fichiers sources. Exécutez un de ces dans le répertoire du projet pour reconstruire l'application :

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

Si vous utilisez les outils de coquille spécifiques à Android en développement, il y a une approche différente. Une fois que vous générez le projet, source de l'application par défaut est disponible dans le `assets/www` sous-répertoire. Les commandes suivantes sont disponibles dans ses `cordova` sous-répertoire.

Le `build` commande nettoie les fichiers projet et régénère le $ $ etAPP. Voici la syntaxe pour Mac et Windows. Les deux premiers exemples génèrent des informations de débogage, et le second signe les apps pour diffusion immédiate :

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## Configurer un émulateur

Vous pouvez utiliser soit le `cordova` utilitaire CLI ou coquille d'Android-centrée de Cordova outils pour exécuter une application dans l'émulateur. Quoi qu'il en soit, le SDK doit tout d'abord être configuré pour afficher au moins un appareil. Pour ce faire, utilisez l'Android SDK Manager, une application de Java qui s'exécute séparément d'Eclipse. Il y a deux façons pour l'ouvrir :

1.  Exécutez `android` sur la ligne de commande.

2.  Partir au sein d'Eclipse, appuyez sur cette icône de la barre d'outils :
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

Une fois ouvert, le Android SDK Manager affiche diverses bibliothèques d'exécution :

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

Choisissez **Outils → gérer AVDs** (périphériques virtuels Android), puis cliquez sur n'importe quel élément de **Définitions de périphérique** dans la boîte de dialogue :

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

Appuyez sur **Créer AVD**, éventuellement modifier le nom, puis appuyez sur **OK** pour accepter les modifications :

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

L'AVD apparaît alors dans la liste **Des périphériques virtuels Android** :

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

Pour ouvrir l'émulateur comme une demande distincte, l'AVD et cliquez sur **Démarrer**. Il lance autant qu'il le ferait sur le dispositif, avec des contrôles supplémentaires disponibles pour les boutons matériels :

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## Déployer sur émulateur

À ce stade, vous pouvez utiliser le `cordova` utilitaire CLI pour déployer l'application sur l'émulateur de la ligne de commande :

        $ cordova emulate android
    

Sinon, utilisez l'interface de coquille alternative :

        $ /path/to/project/cordova/run --emulator
    

Au lieu de compter sur n'importe quel émulateur est actuellement activé dans le SDK, vous pouvez faire référence à chacun des noms que vous fournissez :

        $ /path/to/project/cordova/run --target=NAME
    

Cela pousse l'app à l'écran d'accueil et il lance :

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

Lorsque vous `run` le $ $ etAPP, vous aussi `build` il. Vous pouvez ajouter des `--debug` , `--release` , et `--nobuild` drapeaux pour contrôler comment il est construit, ou même si une reconstruction est nécessaire :

        $ /path/to/project/cordova/run --emulator --nobuild
    

Si au lieu de cela, vous travaillez au sein d'Eclipse, cliquez droit sur le projet et choisissez **Exécuter en tant que → Application Android**. Vous devrez peut-être spécifier un AVD si aucun n'est encore ouvert.

Pour une expérience plus rapide, vous pouvez utiliser le `Virtual Machine Acceleration` pour améliorer la vitesse d'exécution. De nombreux processeurs modernes fournissent des extensions pour exécuter des Machines virtuelles plus efficacement. Avant d'utiliser ce type d'accélération, vous devez déterminer si CPU de votre système actuel de développement, on supporte les technologies de virtualisation suivants :

*   **Technologie de virtualisation Intel** (VT-x, vmx) → [Intel VT-x pris en charge la liste des processeurs][14]
*   **AMD Virtualization** (AMD-V, SVM), pris en charge uniquement pour Linux (depuis mai 2006, tous les processeurs AMD incluent AMD-V, sauf Sempron).

 [14]: http://ark.intel.com/products/virtualizationtechnology

Une autre façon pour savoir si votre processeur supporte la technologie de VT-x, c'est par l'exécution de la `Intel Processor Identification Utility` , pour `Windows` vous pouvez le télécharger depuis le [Centre de téléchargement][15]de Intel, ou vous pouvez utiliser l' [utilitaire booteable][16], qui est`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Après avoir installer et exécuter le `Intel Processor Identification Utility` sur Windows, vous obtiendrez la fenêtre suivante, afin de vérifier si votre processeur supporte les Technologies de virtualisation :

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

Afin d'accélérer l'émulateur, vous devez télécharger et installer un ou plusieurs `Intel x86 Atom` des Images de système, ainsi que la`Intel Hardware Accelerated Execution Manager (HAXM)`.

Ouvrez votre gestionnaire de SDK Android et sélectionnez le `Intel x86 Atom` Image du système, quelle que soit la version que vous souhaitez tester. Ensuite, allez à `Extras` et sélectionnez `Intel x86 Emulator Accelerator (HAXM)` et d'installer ces paquets :

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

Après le téléchargement, exécuter le programme d'installation d'Intel, qui est disponible au sein de votre Android SDK à `extras/intel/Hardware_Accelerated_Execution_Manager` . **Remarque**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [Article Intel][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Installer un ou plusieurs `Intel x86 Atom` des Images du système ainsi que le `Intel Hardware Accelerated Execution Manager` , disponible sous **Extras**.

2.  Exécutez le programme d'installation d'Intel, qui est disponible dans votre Android SDK à`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  Créer un nouvel AVD avec l'objectif fixé à une image d'Intel.

4.  Lorsque vous démarrez l'émulateur, assurez-vous il n'y a aucun message d'erreur indiquant une panne de charger les modules HAX.

## Déployer sur le périphérique

Pour repousser un $ $ etAPP directement sur l'appareil, assurez-vous que débogage USB est activé sur votre appareil tel que décrit sur le [Site des développeurs Android][20]et utiliser un câble mini USB à brancher sur votre système.

 [20]: http://developer.android.com/tools/device.html

Vous pouvez utiliser cette commande CLI pour pousser l'application sur le périphérique :

        $ cordova run android
    

.. .ou utiliser cette interface shell centrée sur Android :

        $ /path/to/project/cordova/run --device
    

Sans indicateurs spécifiés, la `run` commande détecte un appareil ou un émulateur en cours d'exécution si aucun périphérique n'est trouvée, sinon il vous invite à spécifier un émulateur.

Pour exécuter l'application à partir d'Eclipse, cliquez droit sur le projet et choisissez **Exécuter en tant que → Application Android**.

## Autres commandes

Ce qui suit génère un journal détaillé de l'application en cours d'exécution :

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

Le texte suivant nettoie les fichiers de projet :

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat