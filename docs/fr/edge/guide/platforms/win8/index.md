* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guide de la plate-forme Windows

Ce guide montre comment configurer votre environnement de développement SDK pour créer et déployer des applications de Cordova pour Windows 8, Windows 8.1 et Windows Phone 8.1. Il montre comment utiliser deux outils de coquille pour générer et créer des applications, ou de multi-plateforme Cordova CLI discutés dans l'Interface de ligne de commande. (Reportez-vous à la présentation pour une comparaison de ces options de développement). Cette section montre également comment modifier Cordova apps dans Visual Studio. Peu importe l'approche que vous prenez, vous devez installer le kit SDK de Visual Studio, tel que décrit ci-dessous.

Voir la mise à niveau de Windows 8 pour plus d'informations sur comment mettre à niveau les projets existants de Windows 8 Cordova.

Séjours 8 Téléphone (wp8) fenêtre comme une plate-forme distincte, voir Guide de plateforme Windows Phone 8 pour plus de détails.

Cordova WebViews fonctionnant sous Windows s'appuient sur Internet Explorer 10 (Windows 8.0) et Internet Explorer 11 (8.1 de Windows et Windows Phone 8.1) comme leur moteur de rendu, donc en pratique vous pouvez utiliser le débogueur puissant de IE pour tester n'importe quel contenu web qui n'est pas invoquer Cordova APIs. Le Blog des développeurs Windows Phone fournit des [indications utiles][1] sur comment soutien IE avec les navigateurs WebKit comparables.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Exigences et soutien

Pour développer des applications pour la plate-forme Windows, vous devez :

*   Une machine de 8.1 de Windows, 32 ou 64 bits (éditions*Home*, *Pro*ou *entreprise* ) au minimum 4 Go de RAM.

*   Pour les émulateurs Windows Phone, Professional edition 8.1 de Windows (x 64) ou supérieur et un processeur qui prend en charge [Client Hyper-V et le deuxième niveau adresse traduction (lamelle)][2]. Une version d'évaluation de Windows Enterprise 8.1 est disponible à partir du [Microsoft Developer Network][3].

*   [Visual Studio 2013 pour Windows][4] (Express ou supérieur).

 [2]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Apps compilés sous Windows 8.1 font *pas* fonctionner sous Windows 8.0. Applications compilées sous Windows 8.0 sont une compatibilité ascendante avec 8.1.

Suivez les instructions à [windowsstore.com][5] pour soumettre l'application pour Windows Store.

 [5]: http://www.windowsstore.com/

Pour développer des applications de Cordova pour Windows, vous pouvez utiliser un PC fonctionnant sous Windows, mais vous pouvez également développer sur un Mac, un environnement de machine virtuelle en cours d'exécution ou à l'aide de Boot Camp pour la partition de duel-initialisez un 8.1 de Windows. Consulter les ressources à mettre en place l'environnement de développement requis Windows sur un Mac :

*   [VMWare Fusion][6]

*   [Parallels Desktop][7],

*   [Boot Camp][8].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Installer le SDK

Installer *l'ultime*, *Premium*ou *Professional* 2013 éditions de [Visual Studio][4].

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## À l'aide d'outils de Cordova Shell

Si vous souhaitez utiliser les outils axés sur le Windows shell de Cordova en conjonction avec le SDK, vous avez deux options de base :

*   Y accéder localement à partir de code de projet généré par la CLI. Ils sont disponibles dans les `platforms/windows/` répertoire après avoir ajouté la plate-forme `windows` , tel que décrit ci-dessous.

*   Téléchargez-les sur une distribution séparée à [cordova.apache.org][10]. La distribution de Cordova contient des archives distincts pour chaque plate-forme. N'oubliez pas d'élargir l'archive appropriée, `cordova-windows` dans ce cas, dans un répertoire vide. Les utilitaires de lot pertinents sont disponibles dans le répertoire `package/bin` . (Consultez le fichier **README** si nécessaire pour des directions plus détaillées).

 [10]: https://www.apache.org/dist/cordova/platforms/

Ces outils de coquille vous permettent d'exécuter des applications Windows, créer et construire. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins.

## Créez un nouveau projet

À ce stade, pour créer un nouveau projet, vous pouvez choisir entre l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande, ou l'ensemble d'outils de shell Windows spécifique. L'approche CLI ci-dessous génère une application nommée *HelloWorld* dans un nouveau répertoire de projet `hello` :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows
    

Voici l'approche de shell-outil de niveau inférieur correspondant :

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Générez le projet

Si vous utilisez l'interface CLI dans le développement, le niveau supérieur du répertoire du projet `www` répertoire contenant les fichiers sources. Exécutez un de ces dans le répertoire du projet pour reconstruire l'application :

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release
    

Voici l'approche de shell-outil de niveau inférieur correspondant :

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
        C:\path\to\project\cordova\clean.bat
    

## Configurer cible Windows version

Par défaut, `build` commande produit deux paquets : Windows 8.0 et 8.1 de Windows Phone. Pour installer le package Windows version 8.1 que le paramètre de configuration suivant doit être ajouté au fichier de configuration (`config.xml`).

        <preference name='windows-target-version' value='8.1' />
    

Une fois que vous ajoutez cette commande réglage de `construire` va commencer à produire paquets 8.1 de Windows et Windows Phone 8.1.

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

Une fois que vous générez une application Cordova comme décrit ci-dessus, vous pouvez l'ouvrir avec Visual Studio. Les diverses commandes de `génération` génèrent un fichier de Visual Studio Solution (*.sln*). Ouvrez le fichier dans l'Explorateur de fichiers pour modifier le projet dans Visual Studio :

![][11]

 [11]: img/guide/platforms/win8/win8_sdk_openSLN.png

Le composant `CordovaApp` permet d'afficher au sein de la solution, et son répertoire `www` contient le code source sur le web, y compris la page d'accueil `index.html` :

![][12]

 [12]: img/guide/platforms/win8/win8_sdk.png

Les commandes sous le menu principal de Visual Studio vous permettent de tester ou déployer l'application :

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_deploy.png

Avec l' **Ordinateur Local** est sélectionné, appuyez sur la flèche verte pour installer l'application sur le même ordinateur qui exécute Visual Studio. Une fois que vous le faire, l'application apparaît dans des listes de Windows 8 app :

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runApp.png

Chaque fois que vous reconstruisez l'application, la version disponible dans l'interface est régénérée.

Une fois disponibles dans les listes de l'app, maintenant la touche **CTRL** enfoncée tout en sélectionnant le app permet d'épingler dans l'écran principal :

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_runHome.png

Notez que si vous ouvrez l'application dans un environnement de machine virtuelle, vous devrez peut-être cliquer dans les coins ou sur les côtés des fenêtres pour basculer des applications ou accéder à des fonctionnalités supplémentaires :

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_run.png

Vous pouvez également choisir l'option déploiement sur **simulateur** pour visualiser l'application comme s'il s'exécutait sur un périphérique de tablette :

![][17]

 [17]: img/guide/platforms/win8/win8_sdk_sim.png

À la différence de déploiement de bureau, cette option vous permet de simuler l'orientation de la tablette, emplacement et de modifier ses paramètres réseau.

**Remarque**: consultez l'Aperçu pour obtenir des conseils sur la façon d'utiliser les outils de ligne de commande de Cordova ou le SDK dans votre flux de travail. La CLI Cordova s'appuie sur le code source de multi-plateforme qui remplace régulièrement les fichiers spécifiques à la plateforme utilisées par le SDK. Si vous souhaitez utiliser le SDK pour modifier le projet, utilisez les outils de la coquille de niveau inférieur comme alternative à la CLI.