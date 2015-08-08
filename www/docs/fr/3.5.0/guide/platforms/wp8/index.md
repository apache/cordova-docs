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

# Guide de la plate-forme Windows Phone

Ce guide montre comment configurer votre environnement de développement SDK pour déployer Cordova apps pour les appareils Windows Phone. Il se concentre sur Windows Phone 8, mais fournit des détails supplémentaires sur la façon de soutenir Windows Phone 7.

Il montre comment utiliser deux outils de shell Windows Phone spécifiques pour générer et créer des applications, ou de multi-plateforme Cordova CLI discutés dans l'Interface de ligne de commande. (Reportez-vous à la présentation d'une comparaison de ces flux de travail de développement). Cette section montre aussi comment ouvrir Cordova apps afin que vous pouvez les modifier dans Visual Studio. Peu importe l'approche que vous prenez, vous devez installer le SDK de Windows Phone, comme décrit ci-dessous.

Voir ce qui suit pour plus de détails spécifiques à la plate-forme Windows Phone :

*   Windows Phone Plugins
*   La mise à niveau de Windows Phone

Pour la plateforme Windows Phone 8, les Cordova WebView s'appuie sur Internet Explorer 10 comme son moteur de rendu, donc en pratique vous pouvez utiliser le débogueur puissant de IE10 pour tester n'importe quel contenu web qui n'est pas invoquer Cordova APIs. Le Blog des développeurs Windows Phone fournit des [indications utiles][1] sur comment soutenir IE10 avec les navigateurs WebKit comparables.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Exigences et soutien

Vous avez besoin de ce qui suit :

*   Une version 64 bits de Windows 8 Pro, un disque d'installation ou un fichier d'image disque *ISO* . Une version d'évaluation est disponible sur le [Microsoft Developer Network][2]. La version Pro est nécessaire pour faire fonctionner l'émulateur de périphérique,

*   Le [Windows Phone SDK][3].

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: https://dev.windowsphone.com/en-us/downloadsdk

Pour développer des applications de Cordova pour les appareils Windows Phone, vous pouvez utiliser un PC fonctionnant sous Windows, mais vous pouvez également développer sur un Mac, un environnement de machine virtuelle en cours d'exécution ou à l'aide de Camp d'entraînement à double amorçage une partition Windows. Consulter les ressources à mettre en place l'environnement de développement requis Windows sur un Mac :

*   **VMWare Fusion**: pour installer la machine virtuelle de Windows 8, suivez les instructions fournies par le [Microsoft Developer Network][4], puis voir la configuration de VMWare Fusion pour plus d'informations sur la préparation de l'environnement virtuel pour exécuter l'émulateur fourni avec le SDK.

*   **Parallels Desktop**: pour installer la machine virtuelle de Windows 8, suivez les instructions fournies par le [Microsoft Developer Network][5], puis voir la configuration de Parallels Desktop pour plus d'informations sur la préparation de l'environnement virtuel pour exécuter l'émulateur fourni avec le SDK.

 [4]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **Boot Camp**: pour configurer la partition de Windows 8, suivez les instructions d'installation fournies par le [Microsoft Developer Network][6].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

Si vous développez sur un PC, son processeur doit prendre en charge la virtualisation (*VT-x* sur Intel) et le [Deuxième niveau adresse traduction (lamelle)][7]. Consulter la [liste d'Intel de processeurs avec][8]. Virtualisation est généralement désactivée par défaut, vous devez l'activer dans les paramètres du BIOS. Le PC doit avoir au moins 6,5 Go d'espace libre sur le disque dur et 4 Go de RAM.

 [7]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [8]: http://ark.intel.com/Products/VirtualizationTechnology

## À l'aide d'outils de Cordova Shell

Si vous souhaitez utiliser les outils de shell Windows Phone-centrée de Cordova en conjonction avec le SDK, vous avez deux options de base :

*   Y accéder localement à partir de code de projet généré par la CLI. Ils sont disponibles dans le `platforms/wp8/cordova` répertoire après avoir ajouté la `wp8` plateforme tel que décrit ci-dessous.

*   Téléchargez-les sur une distribution séparée à [cordova.apache.org][9]. La distribution de Cordova contient des archives distincts pour chaque plate-forme. N'oubliez pas d'élargir l'archive appropriée, `cordova-wp8\wp8` dans ce cas, dans un répertoire vide. Les utilitaires lot pertinents sont disponibles dans le niveau supérieur `bin` répertoire. (Consultez le fichier **README** si nécessaire pour des directions plus détaillées).

 [9]: http://cordova.apache.org

Ces outils de coquille permettent de créer, construire et exécuter des applications Windows Phone. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins. Voir Application Plugins pour des conseils sur la façon de développer des plugins et Windows Phone Plugins pour plus d'informations spécifiques à la plate-forme Windows Phone.

## Installer le SDK

Installez la dernière version du SDK Windows Phone de la zone de **téléchargements** de [dev.windowsphone.com][3]. Vous pouvez également installer les packages de mise à jour plus récentes émulateur.

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_downloadSDK.png

Après avoir installé le SDK, vous devez modifier le PATH système pour rendre le SDK disponible à Cordoue sur la ligne de commande Windows :

*   Tout d'abord, vous avez besoin obtenir la chaîne de chemin d'accès. Ouvrez l' **Explorateur Windows**, naviguez jusqu'à `C:\Windows\Microsoft.NET\Framework` , puis ouvrez le cadre plus récent. Cliquer sur la droite du chemin de navigation pour afficher la chaîne de chemin d'accès complet, puis tapez **CTRL-c** pour le copier :

    ![][11]

*   Ensuite vous devez modifier le chemin d'accès. Ouvrez le **Panneau de configuration** de dans le domaine des **applications** de l'écran d'accueil Windows 8 :

    ![][12]

*   Ouvrez l'élément de panneau de contrôle de **système** :

    ![][13]

*   Choisissez les **Paramètres système avancés** dans la liste sur la gauche :

    ![][14]

*   Au bas du panneau qui en résulte, appuyez sur le bouton **Variables d'environnement** :

    ![][15]

*   Choisissez le **chemin d'accès** dans les **Variables utilisateur**, puis appuyez sur **modifier**:

    ![][16]

    Sinon, s'il n'y a aucun **chemin d'accès** disponible, appuyez sur **New** pour le créer.

*   Si une valeur de chemin d'accès existe déjà, ajoutez un point-virgule et collez la chaîne de chemin d'accès que vous avez copié précédemment. Sinon il suffit de coller la chaîne :

    ![][17]

    Voici un exemple de valeur de **chemin d'accès** qui précise également les `npm` utilitaire qui est nécessaire pour installer le Cordova CLI :

    C:\Users\me\AppData\Roaming\npm ;C:\Windows\Microsoft.NET\Framework\v4.0.30319

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp8/modpath_copy.png
 [12]: {{ site.baseurl }}/static/img/guide/platforms/wp8/modpath_control_panel.png
 [13]: {{ site.baseurl }}/static/img/guide/platforms/wp8/modpath_system.png
 [14]: {{ site.baseurl }}/static/img/guide/platforms/wp8/modpath_advanced.png
 [15]: {{ site.baseurl }}/static/img/guide/platforms/wp8/modpath_environment.png
 [16]: {{ site.baseurl }}/static/img/guide/platforms/wp8/modpath_edit.png
 [17]: {{ site.baseurl }}/static/img/guide/platforms/wp8/modpath_append.png

## Créez un nouveau projet

À ce stade, pour créer un nouveau projet, vous pouvez choisir entre l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande, ou l'ensemble des outils de shell Windows Phone spécifiques. Partir dans un répertoire de code source, voici l'approche de la CLI :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8


Voici l'approche de shell-outil de niveau inférieur correspondant :

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Générez le projet

Si vous utilisez l'interface CLI dans le développement, le niveau supérieur du répertoire du projet `www` répertoire contenant les fichiers sources. Exécutez un de ces dans le répertoire du projet pour reconstruire l'application :

        > cordova build
        > cordova build wp8   # do not rebuild other platforms


Si vous utilisez les outils de shell Windows Phone spécifiques au développement, il y a une approche différente. Une fois que vous générez le projet, source de l'application par défaut est disponible dans le `projects\wp8\www` sous-répertoire. Les commandes suivantes sont disponibles dans la `cordova` sous-répertoire au même niveau.

Le `build` commande nettoie les fichiers projet et régénère le $ $ etAPP. Le premier exemple génère des informations de débogage, et le second signe les apps pour diffusion immédiate :

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


Le `clean` commande aide à débusquer les répertoires en préparation pour le prochain `build` :

        C:\path\to\project\cordova\clean.bat


## Déployer sur émulateur

À ce stade, vous pouvez utiliser le `cordova` utilitaire CLI pour déployer l'application sur l'émulateur de la ligne de commande :

        > cordova emulate wp8


Sinon, utilisez l'interface de coquille alternative :

        C:\path\to\project\cordova\run


Par défaut, le `run` script appelle le drapeau de l'émulateur et accepte des drapeaux de construction supplémentaire, pour lequel `--debug` fournit la valeur par défaut :

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild


L'émulateur lance un élément image avec l'application installée. Depuis l'écran d'accueil, accédez au panneau apps pour lancer l'application **HelloWorld** . Cela montre l'application lance avec son écran de démarrage, suivi par son interface principale :

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator.png

Commandes de base de l'émulateur sur le haut à droite de l'écran de l'appareil permettent de passer d'une orientation portrait et paysage. Le bouton **>** s'ouvre plus de contrôles qui vous permettent de tester des orientations plus complexes et les gestes :

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_orient.png

Ces commandes avancées vous permettent également de modifier l'emplacement de l'appareil ou pour simuler des séquences de mouvements :

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_loc.png

## Déployer sur le périphérique

Avant de tester votre application sur un périphérique, le périphérique doit être enregistré. Pour plus de détails sur comment déployer et tester sur Windows Phone 8, consultez la [documentation de Microsoft][21] . En outre, assurez-vous que le téléphone est connecté à l'ordinateur et l'écran est déverrouillé.

 [21]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

Puis exécutez la commande CLI suivante pour exécuter l'application sur le périphérique :

        > cordova run wp8


Elle correspond à cette commande de shell de niveau inférieur :

        C:\path\to\project\cordova\run --device


Alternativement, si vous travaillez dans Visual Studio, sélectionnez **Périphérique Windows Phone** dans le menu déroulant en haut, puis appuyez sur le vert **jouer** touche à proximité ou bien tapez **F5**.

## Modifier le projet dans le SDK

Une fois que vous générez une application Cordova comme décrit ci-dessus, vous pouvez l'ouvrir avec le SDK. Les différents `build` commandes génère un fichier de Visual Studio Solution (*.sln*). Ouvrez le fichier pour modifier le projet dans Visual Studio. Le code source sur le web est disponible au sein du projet `www` répertoire. Ainsi que d'autres outils le SDK fournit, le contrôle au-dessous du menu vous permet de lancer l'app dans un émulateur de Windows Phone :

![][22]

 [22]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_vs.png

Consultez l'Aperçu pour obtenir des conseils sur la façon d'utiliser les outils de ligne de commande de Cordova ou le SDK dans votre flux de travail. La CLI Cordova s'appuie sur le code source de multi-plateforme qui remplace régulièrement les fichiers spécifiques à la plateforme utilisées par le SDK. Si vous souhaitez travailler dans le SDK, utilisez les outils de la coquille de niveau inférieur comme alternative à la CLI.

## Support pour Windows Phone 7

Il est aussi facile de générer une application Windows Phone 7 comme pour Windows Phone 8, mais il fonctionne bien comme l'ajout d'une plate-forme distincte. Si vous utilisez le CLI, il suffit de spécifier `wp7` avec ou au lieu de `wp8` :

        > cordova platform add wp7
        > cordova build wp7
        > cordova emulate wp7


Le `emulate` commande produit un émulateur de périphérique de Windows Phone 7 qui affiche une interface différente :

![][23]

 [23]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp7_emulator.png

Si vous utilisez le workflow axée sur la plate-forme de shell-outil, suivez toutes les étapes dans la section *Installer les outils de Shell Cordova* ci-dessus, sauf extraire les outils de la `cordova-wp8\wp7` répertoire au lieu de cela. Tous ces outils fonctionnent de la même comme leurs `wp8` homologues.

**NOTE**: The WebViews que sous Windows Phone 7 Cordova apps n'utilisez *pas* Internet Explorer 10 dans leur moteur de rendu et rate ainsi une partie des fonctionnalités disponibles dans les applications Windows Phone 8 avancées. Pourtant, deux implémentent le même ensemble d'API. Vous pouvez exécuter une application Windows Phone 7 sur un périphérique Windows Phone 8, mais pas l'inverse : les apps Windows Phone 8 font *pas* exécuter sur des appareils Windows Phone 7.
