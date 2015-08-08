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

Ce guide montre comment configurer votre environnement de développement SDK pour déployer des applications de Cordova pour les appareils Android. Il montre comment installer le SDK Android, ouvrez un projet Android dans le SDK et déployer sur un émulateur ou un périphérique. Vous devez suivre les instructions pour installer le SDK Android, que vous utilisiez le flux de travail multi-plateforme discutée dans la vue d'ensemble, ou les outils axés sur la plate-forme de shell à Android Command-line Tools.

Voir ci-dessous pour plus d'informations spécifiques à la plateforme :

*   Configuration d'Android
*   WebViews Android
*   Plugins Android
*   Mettre à jour Android
*   Outils en ligne de commande Android

Les outils de ligne de commande ci-dessus se référer aux versions antérieures à la 3.0 de Cordova. Voir l'Interface de ligne de commande pour plus d'informations sur l'interface actuelle.

## Configuration requise et support

Consultez la [Configuration requise][1] pour le SDK Android.

 [1]: http://developer.android.com/sdk/index.html

Cordova supporte Android 2.2, 2.3 et 4.x. En règle générale, les plates-formes sont déconseillés car ils plonger au-dessous de 5 % sur Google [dashboard de distribution][2].

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

Les développeurs doivent utiliser les `cordova` utilitaire conjointement avec le SDK Android. Voir l'Interface de ligne de commande pour plus d'informations comment faire pour l'installer, d'ajouter des projets, puis de créer et de déployer un projet.

Installer le SDK Android de [developer.android.com/sdk][3]. Le sdk android est distribué sous forme de fichier 'adt - bundle - < os > - < arch > - < ver >'. Sous windows, l'adt-bundle est livré avec un installeur. Sur OSX et Linux, simplement décompresser le « adt-bundle » à l'emplacement vous stockez les outils de développement. [Plus d'informations sur l'installation du SDK Android peuvent être trouvées ici][4]

 [3]: http://developer.android.com/sdk/
 [4]: http://developer.android.com/sdk/installing/bundle.html

Pour les outils de ligne de commande de Cordova pour travailler, vous devez inclure le SDK `tools` et `platform-tools` des répertoires dans votre environnement de chemin d'accès. Vous devez également `java` et `ant` . Vous avez déjà `java` et `ant` dans votre environnement de chemin, essayez leur appel à partir d'une invite de ligne de commande pour voir si ils sont absents et n'ajoute que ce qui manque à votre chemin. Sachez que les Mavericks omet `ant` par rapport aux versions précédentes de Mac OS x, alors vous devrez peut-être installer `ant` séparément si vous utilisez Mavericks ou version ultérieure de Mac OS x. Sur OSX ou Linux, vous pouvez utiliser un éditeur de texte pour créer ou modifier le `~/.bash_profile` fichier, en ajoutant une ligne comme celle-ci (modifiez les emplacements où le SDK est installé sur votre poste de travail) :

    export PATH = ${chemin}: / / adt-bundle/sdk/plateforme-outils de développement: / développement/adt-bundle/sdk/tools


Ajouter les chemins d'accès pour `java` et `ant` si nécessaire. Cette ligne dans `~/.bash_profile` expose ces outils dans windows terminales nouvellement ouverts. Si votre fenêtre de terminal est déjà ouvert dans OSX ou d'éviter une déconnexion/connexion sur Linux, exécutez ceci pour les rendre disponibles dans la fenêtre du terminal actuelle :

    $ source ~/.bash_profile


Pour modifier l'environnement PATH sous Windows :

*   Cliquez sur le menu **Démarrer** dans le coin en bas à gauche du bureau, faites un clic droit sur **ordinateur**, puis cliquez sur **Propriétés**.

*   Cliquez sur **Paramètres système avancés** dans la colonne de gauche.

*   Dans la boîte de dialogue, appuyez sur **Variables d'environnement**.

*   Sélectionnez la variable **PATH** et appuyer sur **modifier**.

*   Le chemin d'accès basé sur lequel vous avez installé le SDK, par exemple, ajoutez ce qui suit :

        ;C:\Development\adt-bundle\sdk\platform-Tools ;C:\Development\adt-bundle\sdk\tools


*   Enregistrez la valeur et fermez les deux boîtes de dialogue.

*   Vous devrez peut-être également ajouter Java et ant. ouvrent une invite de commandes et tapez `java` , puis tapez également `ant` . Pour celui qui ne parviennent pas à courir, ajoute au chemin comme ceci :

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin


## Ouvrez un projet dans le SDK

Utilisation du `cordova` utilitaire de mettre en place un nouveau projet, tel que décrit dans The Cordova The Command-Line Interface. Par exemple, dans un répertoire de code source :

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build


Une fois créé, vous pouvez utiliser l'éclipse qui est livré avec le SDK Android pour le modifier :

*   Lancez l'application **Eclipse** .

*   Sélectionnez l'élément de menu **Nouveau projet** .

*   Choisissez **Un projet Android à partir de Code existant** dans la boîte de dialogue, puis appuyez sur **suivant**: ![][5]

*   Accédez à `hello` , ou n'importe quel répertoire vous avez créé pour le projet, puis à la `platforms/android` sous-répertoire.

*   Assurez-vous que les deux `hello` et `hello-CordovaLib` sont sélectionnés à importer. Le `hello-CordovaLib` projet est nécessaire à partir de Cordova 3.3.0 parce que Cordova est maintenant utilisé comme une bibliothèque Android au lieu d'un fichier .jar.

*   Appuyez sur **Terminer**.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Une fois que la fenêtre de Eclipse s'ouvre, un rouge **X** peut apparaître pour indiquer les problèmes non résolus. Dans l'affirmative, suivez ces étapes supplémentaires :

*   Faites un clic droit sur le répertoire du projet.

*   Dans la boîte de dialogue **Propriétés** , sélectionnez **Android** du volet de navigation.

*   Pour le projet construire cible, sélectionnez le plus haut niveau de l'API Android que vous avez installé.

*   Cliquez sur **OK**.

*   Sélectionnez **nettoyer** dans le menu **projet** . Cela devrait corriger toutes les erreurs dans le projet.

## Déployer sur émulateur

Vous pouvez utiliser le `cordova` utilitaire de mise à exécution d'une application dans l'émulateur, ou vous pouvez l'exécuter dans le SDK. Quoi qu'il en soit, le SDK doit tout d'abord être configuré pour afficher au moins un appareil. Pour ce faire, utilisez l'Android SDK Manager, une application de Java qui s'exécute séparément d'Eclipse. Il y a deux façons pour l'ouvrir :

*   Exécutez `android` sur la ligne de commande.

*   Partir au sein d'Eclipse, appuyez sur cette icône de la barre d'outils :

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

Une fois ouvert, le Android SDK Manager affiche diverses bibliothèques d'exécution :

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

Choisissez **Outils → gérer AVDs** (périphériques virtuels Android), puis cliquez sur n'importe quel élément de **Définitions de périphérique** dans la boîte de dialogue :

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

À ce stade, vous pouvez utiliser le `cordova` utilitaire pour déployer l'application sur l'émulateur de la ligne de commande :

        $ cordova émuler android


Si au lieu de cela, vous travaillez au sein d'Eclipse, cliquez droit sur le projet et choisissez **Exécuter en tant que → Application Android**. Vous devrez peut-être spécifier un AVD si aucun n'est encore ouvert.

Pour une expérience plus rapide, vous pouvez utiliser le `Virtual Machine Acceleration` pour améliorer la vitesse d'exécution. De nombreux processeurs modernes fournissent des extensions pour exécuter des Machines virtuelles plus efficacement. Avant d'utiliser ce type d'accélération, vous devez déterminer si CPU de votre système actuel de développement, on supporte les technologies de virtualisation suivants :

*   **Technologie de virtualisation Intel** (VT-x, vmx) → [Intel VT-x pris en charge la liste des processeurs][12]
*   **AMD Virtualization** (AMD-V, SVM), pris en charge uniquement pour Linux (depuis mai 2006, tous les processeurs AMD incluent AMD-V, sauf Sempron).

 [12]: http://ark.intel.com/products/virtualizationtechnology

Une autre façon pour savoir si votre processeur supporte la technologie de VT-x, c'est par l'exécution de la `Intel Processor Identification Utility` , pour `Windows` vous pouvez le télécharger depuis le [Centre de téléchargement][13]de Intel, ou vous pouvez utiliser l' [utilitaire booteable][14], qui est`OS Independent`.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Après avoir installer et exécuter le `Intel Processor Identification Utility` sur Windows, vous obtiendrez la fenêtre suivante, afin de vérifier si votre processeur supporte les Technologies de virtualisation :

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

Afin d'accélérer l'émulateur, vous devez télécharger et installer un ou plusieurs `Intel x86 Atom` des Images de système, ainsi que la`Intel Hardware Accelerated Execution Manager (HAXM)`.

Ouvrez votre gestionnaire de SDK Android et sélectionnez le `Intel x86 Atom` Image du système, quelle que soit la version que vous souhaitez tester. Ensuite, allez à `Extras` et sélectionnez `Intel x86 Emulator Accelerator (HAXM)` et d'installer ces paquets :

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

Après le téléchargement, exécuter le programme d'installation d'Intel, qui est disponible au sein de votre Android SDK à `extras/intel/Hardware_Accelerated_Execution_Manager` . **Remarque**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [Article Intel][17] .

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

Une fois installé, afin de tester, créer de nouveau un AVD avec le `CPU/ABI` défini sur une `Intel (Atom) x86` Image :

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_new_and_dev_intel.png

Si vous utilisez `Linux-based system` , suivez les instructions dans le [Site des développeurs Android][19].

 [19]: http://developer.android.com/tools/devices/emulator.html#vm-linux

Lorsque vous démarrez l'émulateur, assurez-vous il n'y a aucun message d'erreur indiquant une panne de charger les modules HAXM.

## Déployer sur le périphérique

Pour repousser un $ $ etAPP directement sur l'appareil, assurez-vous que débogage USB est activé sur votre appareil tel que décrit sur le [Site des développeurs Android][20]et utiliser un câble mini USB à brancher sur votre système.

 [20]: http://developer.android.com/tools/device.html

Vous pouvez pousser l'app à l'appareil de la ligne de commande :

        $ cordova run android


En alternance au sein d'Eclipse, cliquez droit sur le projet et choisissez **Exécuter en tant que → Application Android**.
