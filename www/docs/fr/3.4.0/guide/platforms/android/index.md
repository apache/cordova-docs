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

Ce guide montre comment configurer votre environnement de développement SDK pour déployer des applications de Cordova pour les appareils Android. Il vous guide dans le processus d'installation du SDK Android, ouverture d'un projet Android dans Eclipse SDK et déploiement sur un émulateur ou un périphérique. Vous aurez besoin de suivre ce guide pour au moins installer le SDK Android, peu importe quel workflow que vous suivez. (Le flux de production *Web projet Dev* et *Natif plate-forme Dev* requièrent le SDK Android à être installé et accessible par l'intermédiaire de votre chemin d'accès).

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

Installer le SDK Android de [Developer.Android.com/SDK][3]. Le sdk android est distribué comme un ' adt-bundle -<os>-<arch>-<ver>' fichier. Sous windows, l'adt-bundle est livré avec un installeur. Sur OSX et Linux, simplement décompresser le « adt-bundle » à l'emplacement vous stockez les outils de développement. [Plus d'informations sur l'installation du SDK Android peuvent être trouvées ici][4]

 [3]: http://developer.android.com/sdk/
 [4]: http://developer.android.com/sdk/installing/bundle.html

Pour les outils de ligne de commande de Cordova pour travailler, vous devez inclure le SDK `tools` et `platform-tools` des répertoires dans votre environnement de chemin d'accès. Sur Mac, vous pouvez utiliser un éditeur de texte pour créer ou modifier le `~/.bash_profile` fichier, en ajoutant une ligne comme ci-dessous, en fonction d'où le kit de développement logiciel installe :

    export PATH = ${chemin}: / / adt-bundle/sdk/plateforme-outils de développement: / développement/adt-bundle/sdk/tools


Cela expose les outils SDK dans windows terminales nouvellement ouverts. Dans le cas contraire, exécutez-le pour les rendre disponibles dans la session en cours :

    $ source ~/.bash_profile


Pour modifier l'environnement PATH sur Windows 7 :

*   Cliquez sur le menu **Démarrer** dans le coin en bas à gauche du bureau, faites un clic droit sur **ordinateur**, puis cliquez sur **Propriétés**.

*   Cliquez sur **Paramètres système avancés** dans la colonne de gauche.

*   Dans la boîte de dialogue, appuyez sur **Variables d'environnement**.

*   Sélectionnez la variable **PATH** et appuyer sur **modifier**.

*   Le chemin d'accès basé sur lequel vous avez installé le SDK, par exemple, ajoutez ce qui suit :

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools


*   Enregistrez la valeur et fermez les deux boîtes de dialogue.

Vous devrez peut-être également activer Java et Open ant une invite de commandes et tapez `java` , puis tapez également `ant` . Ajoutez le chemin d'accès si elle ne pas s'exécuter :

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin


## Ouvrez un projet dans le SDK

Utilisation du `cordova` utilitaire de mettre en place un nouveau projet, tel que décrit dans The Cordova The Command-Line Interface. Par exemple, dans un répertoire de code source :

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build


Une fois créé, voici comment utiliser le SDK pour le modifier :

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

        $ cordova emulate android


Si au lieu de cela, vous travaillez au sein d'Eclipse, cliquez droit sur le projet et choisissez **exécute en tant que → Application Android**. Vous devrez peut-être spécifier un AVD si aucun n'est encore ouvert.

Pour une expérience plus rapide, utiliser une image d'émulateur de processeur Intel :

*   Installer un ou plusieurs `Intel x86 Atom` des Images du système ainsi que le `Intel Hardware Accelerated Execution Manager` , disponible sous **Extras**.

*   Exécutez le programme d'installation d'Intel, qui est disponible dans votre Android SDK à`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   Créer un nouvel AVD avec l'objectif fixé à une image d'Intel.

*   Lorsque vous démarrez l'émulateur, assurez-vous il n'y a aucun message d'erreur indiquant une panne de charger les modules HAX.

## Déployer sur le périphérique

Pour repousser un $ $ etAPP directement sur l'appareil, assurez-vous que débogage USB est activé sur votre appareil tel que décrit sur le [Site des développeurs Android][12]et utiliser un câble mini USB à brancher sur votre système.

 [12]: http://developer.android.com/tools/device.html

Vous pouvez pousser l'app à l'appareil de la ligne de commande :

        $ cordova run android


En alternance au sein d'Eclipse, cliquez droit sur le projet et choisissez **exécute en tant que → Application Android**.
