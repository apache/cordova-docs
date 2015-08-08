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

# Guide de la plate-forme Windows

Ce guide montre comment configurer votre environnement de développement SDK pour créer et déployer des applications Cordova pour Windows 8, Windows 8.1, 8.1 de Windows Phone et Windows 10 Universal App Platform. Il montre comment utiliser deux outils de coquille pour générer et créer des applications, ou le multi-plateforme Cordova CLI discutés dans l'Interface de ligne de commande. (Reportez-vous à la présentation pour une comparaison de ces options de développement). Cette section montre également comment modifier Cordova apps dans Visual Studio. Peu importe l'approche que vous prenez, vous devez installer le kit SDK de Visual Studio, tel que décrit ci-dessous.

Voir la mise à niveau de Windows 8 pour plus d'informations sur comment mettre à niveau les projets existants de Windows 8 Cordova.

Séjours 8 Téléphone (wp8) fenêtre comme une plate-forme distincte, voir Guide de plateforme Windows Phone 8 pour plus de détails.

Cordova WebViews fonctionnant sous Windows s'appuient sur Internet Explorer 10 (Windows 8.0) et Internet Explorer 11 (8.1 de Windows et Windows Phone 8.1) comme leur moteur de rendu, donc en pratique vous pouvez utiliser le débogueur puissant de IE pour tester n'importe quel contenu web qui n'est pas invoquer Cordova APIs. Le Blog des développeurs Windows Phone fournit des [indications utiles][1] sur comment soutien IE avec les navigateurs WebKit comparables.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Exigences et soutien

Pour développer des applications pour la plate-forme Windows, vous devez :

*   Une machine de 8.1 de Windows, 32 ou 64 bits (éditions*Home*, *Pro*ou *entreprise* ) au minimum 4 Go de RAM.

*   Windows 8.0, 8.1 ou 10, 32 ou 64-bit *Home*, *Pro*ou *Enterprise* Edition, ainsi que [Visual Studio 2012 Express][2] ou Visual Studio 2013. Visual Studio 2015 n'est pas en mesure de créer des applications Windows 8.0.

 [2]: http://www.visualstudio.com/downloads

Pour développer des applications pour Windows 8.0 et 8.1 (y compris Windows Phone 8.1) :

*   8.1 de Windows ou Windows 10, 32 ou 64 bits *Home*, *Pro*ou *Enterprise* Edition, ainsi que [Visual Studio Express de 2013][2] ou supérieur. Une version d'évaluation de Windows Enterprise 8.1 est disponible à partir du [Microsoft Developer Network][3].

*   Pour les émulateurs Windows Phone, Professional edition 8.1 de Windows (x 64) ou supérieur et un processeur qui prend en charge [Client Hyper-V et le deuxième niveau adresse traduction (lamelle)][4]. Une version d'évaluation de Windows Enterprise 8.1 est disponible à partir du [Microsoft Developer Network][3].

*   [Visual Studio 2013 pour Windows][5] (Express ou supérieur).

 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [5]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Pour développer des applications pour Windows 10 :

*   8.1 de Windows ou Windows 10 techniques Preview 2, 32 ou 64 bits, ainsi que [Visual Studio 2015 RC][6] ou supérieur.

 [6]: http://www.visualstudio.com/preview

Compatibilité de l'application est déterminée par le système d'exploitation que l'application cible. Les apps sont compatible vers l'avant, mais pas rétroactivement compatible, donc impossible d'exécuter une application ciblant Windows 8.1 8.0, mais une application construite pour 8.0 peut fonctionner sur 8.1.

Suivez les instructions à [windowsstore.com][7] pour soumettre l'application pour Windows Store.

 [7]: http://www.windowsstore.com/

Pour développer des applications de Cordova pour Windows, vous pouvez utiliser un PC fonctionnant sous Windows, mais vous pouvez également développer sur un Mac, un environnement de machine virtuelle en cours d'exécution ou à l'aide de Boot Camp pour partition de Duel-initialisez un 8.1 de Windows. Consulter les ressources à mettre en place l'environnement de développement requis Windows sur un Mac :

*   [VMWare Fusion][8]

*   [Parallels Desktop][9]

*   [Boot Camp][10]

 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [9]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [10]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## À l'aide d'outils de Cordova Shell

Si vous souhaitez utiliser les outils axés sur le Windows shell de Cordova en conjonction avec le SDK, vous avez deux options de base :

*   Y accéder localement à partir de code de projet généré par la CLI. Ils sont disponibles dans les `platforms/windows/` répertoire après avoir ajouté la plate-forme `windows` , tel que décrit ci-dessous.

*   Téléchargez-les sur une distribution séparée à [cordova.apache.org][11]. La distribution de Cordova contient des archives distincts pour chaque plate-forme. N'oubliez pas d'élargir l'archive appropriée, `cordova-windows` dans ce cas, dans un répertoire vide. Les utilitaires lot pertinents sont disponibles dans le répertoire `package/bin` . (Consultez le fichier **README** si nécessaire pour des directions plus détaillées).

 [11]: https://www.apache.org/dist/cordova/platforms/

Ces outils de coquille vous permettent d'exécuter des applications Windows, créer et construire. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins.

## Installer le SDK

Installer n'importe quelle édition de [Visual Studio][2] correspondant à la version aux exigences énumérées ci-dessus.

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

Pour 10 de Windows, le programme d'installation de Visual Studio a une option pour installer les outils pour créer des applications Windows universel. Vous devez vous assurer que cette option est sélectionnée lors de l'installation pour installer le SDK requis.

## Créez un nouveau projet

À ce stade, pour créer un nouveau projet, vous pouvez choisir entre l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande, ou l'ensemble d'outils de shell Windows spécifique. L'approche CLI ci-dessous génère une application nommée *HelloWorld* dans un nouveau répertoire de projet `Bonjour` :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


Voici l'approche de shell-outil de niveau inférieur correspondant :

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


Ce projet cible Windows 8.1 comme cible par défaut OS. Vous pouvez choisir de cibler 8.0 ou 10.0 (voir « Configuration cible Windows version » ci-dessous) pour toutes les constructions, ou vous ciblez spécifique à une version particulière au cours de chaque génération.

## Générez le projet

Si vous utilisez l'interface CLI dans le développement, le niveau supérieur du répertoire du projet `www` répertoire contenant les fichiers sources. Exécutez un de ces dans le répertoire du projet pour reconstruire l'application :

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


Voici l'approche de shell-outil de niveau inférieur correspondant :

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


Le `clean` commande aide à débusquer les répertoires en préparation pour le prochain `build` :

        C:\path\to\project\cordova\clean.bat


## Configurer cible Windows version

Par défaut `build` commande produit deux paquets : Windows 8.0 et 8.1 de Windows Phone. Pour installer le package Windows version 8.1 que le paramètre de configuration suivant doit être ajouté au fichier de configuration (`config.xml`).

        <preference name="windows-target-version" value="8.1" />


Une fois que vous ajoutez cette commande réglage de `build` commencera à produire des paquets 8.1 de Windows et Windows Phone 8.1.

### Le paramètre --appx

Vous pouvez décider que vous voulez construire une version particulière de votre application ciblant un OS particulier (par exemple, vous avez peut-être défini que vous souhaitez cibler Windows 10, mais vous voulez construire pour Windows Phone 8.1). Pour ce faire, vous pouvez utiliser le paramètre `--appx` :

        > cordova build windows -- --appx=8.1-phone


Le système de génération ignorera l'ensemble de préférence dans le fichier config.xml pour la version Windows de cible et strictement construire un paquet pour Windows Phone 8.1.

Les valeurs valides pour le drapeau `--appx` sont `8.1-win`, `8.1-phone`et `uap` (pour Windows 10 Apps universelle). Ces options s'appliquent également à la commande `cordova run` .

### Considérations pour la version Windows de cible

Windows 10 prend en charge un nouveau mode « Remote » pour les applications de Cordova (et applications HTML en général). Ce mode permet une plus grande liberté dans le respect de l'utilisation de la manipulation du DOM et de modèles web communs tels que l'utilisation de script inline d'apps, mais en réduisant l'ensemble des capacités de votre application peut utiliser lorsque soumis à la Banque publique de Windows le fait. Pour plus d'informations sur Windows 10 et le Mode distant, regardez la documentation de [Cordova pour Windows 10][13] .

 [13]: win10-support.md.html

Lorsque vous utilisez le Mode distant, les développeurs sont encouragés à appliquer une politique de sécurité contenu (CSP) à leur application pour prévenir les attaques par injection de script.

## Déployer l'application

Pour déployer le package de Windows :

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


Pour déployer le package de Windows Phone :

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


Vous pouvez utiliser **cordova run windows --list** pour voir toutes les cibles disponibles et **cordova run windows --target=target_name \-- -|-phone** pour exécuter l'application sur un émulateur ou un périphérique spécifique (par exemple, `cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

Vous pouvez également utiliser **cordova run --help** pour voir construire supplémentaire et exécuter les options.

## Ouvrez le projet dans le SDK et de déployer l'application

Une fois que vous générez une application Cordova comme décrit ci-dessus, vous pouvez l'ouvrir avec Visual Studio. Les diverses commandes de `build` génèrent un fichier de Visual Studio Solution (*.sln*). Ouvrez le fichier dans l'Explorateur de fichiers pour modifier le projet dans Visual Studio :

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

Le composant `CordovaApp` permet d'afficher au sein de la solution et son répertoire `www` contient le code source basé sur le web, y compris la page d'accueil `index.html` :

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Les commandes sous le menu principal de Visual Studio vous permettent de tester ou déployer l'application :

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

Avec l' **Ordinateur Local** est sélectionné, appuyez sur la flèche verte pour installer l'application sur le même ordinateur qui exécute Visual Studio. Une fois que vous le faire, l'application apparaît dans des listes de Windows 8 app :

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

Chaque fois que vous reconstruisez l'application, la version disponible dans l'interface est régénérée.

Une fois disponibles dans la liste des app, maintenez la touche **CTRL** enfoncée tout en sélectionnant l'application permet d'épingler dans l'écran principal :

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

Notez que si vous ouvrez l'application dans un environnement de machine virtuelle, vous devrez peut-être cliquer dans les coins ou sur les côtés des fenêtres pour basculer des applications ou accéder à des fonctionnalités supplémentaires :

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

Vous pouvez également choisir l'option déploiement sur **simulateur** pour visualiser l'application comme s'il s'exécutait sur un périphérique de tablette :

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

À la différence de déploiement de bureau, cette option vous permet de simuler l'orientation de la tablette, emplacement et de varier ses paramètres réseau.

**Remarque**: consultez l'Aperçu pour obtenir des conseils sur la façon d'utiliser les outils de ligne de commande de Cordova ou le SDK dans votre flux de travail. La CLI Cordova s'appuie sur le code source multi-plateforme qui remplace régulièrement les fichiers spécifiques à la plateforme utilisées par le SDK. Si vous souhaitez utiliser le SDK pour modifier le projet, utilisez les outils de niveau inférieur coquille comme une alternative à la CLI.
