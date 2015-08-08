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

# Windows 8 Platform Guide

Ce guide montre comment configurer votre environnement de développement SDK pour déployer Cordova apps dans Windows 8. Il montre comment utiliser deux outils shell spécifiques à Windows 8 pour générer et créer des applications, ou de multi-plateforme Cordova CLI discutés dans l'Interface de ligne de commande. (Reportez-vous à la présentation pour une comparaison de ces options de développement). Cette section montre également comment modifier Cordova apps dans Visual Studio. Peu importe l'approche que vous prenez, vous devez installer le kit SDK de Visual Studio, tel que décrit ci-dessous.

Voir la mise à niveau de Windows 8 pour plus d'informations sur comment mettre à niveau les projets existants de Windows 8 Cordova.

Cordova WebViews s'exécutant sur Windows 8 s'appuient sur Internet Explorer 10 dans leur moteur de rendu, donc en pratique vous pouvez utiliser le débogueur puissant de IE10 pour tester n'importe quel contenu web qui n'est pas invoquer Cordova APIs. Le Blog des développeurs Windows Phone fournit des [indications utiles][1] sur comment soutenir IE10 avec les navigateurs WebKit comparables.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Exigences et soutien

Vous avez besoin de ce qui suit :

*   Une version 64 bits de Windows 8 Pro, un disque d'installation ou un fichier d'image disque *ISO* . Une version d'évaluation est disponible sur le [Microsoft Developer Network][2].

    <!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

*   [Visual Studio][3], les éditions 2013 soit *l'ultime*, *Premium*ou *professionnel* .

    <!-- true? -->

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: http://www.visualstudio.com/downloads

Pour développer des applications de Cordova pour Windows 8, vous pouvez utiliser un PC fonctionnant sous Windows, mais vous pouvez également développer sur un Mac, un environnement de machine virtuelle en cours d'exécution ou à l'aide de Boot Camp pour la partition de duel-initialisez un Windows 8. Consulter les ressources à mettre en place l'environnement de développement requis Windows sur un Mac :

*   [VMWare Fusion][4]

*   [Parallels Desktop][5],

*   [Boot Camp][6].

 [4]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## À l'aide d'outils de Cordova Shell

Si vous souhaitez utiliser les outils de shell Windows 8-centrée de Cordova en conjonction avec le SDK, vous avez deux options de base :

*   Y accéder localement à partir de code de projet généré par la CLI. Ils sont disponibles dans le `platforms/windows8/cordova` répertoire après avoir ajouté la `windows8` plateforme tel que décrit ci-dessous.

*   Téléchargez-les sur une distribution séparée à [cordova.apache.org][7]. La distribution de Cordova contient des archives distincts pour chaque plate-forme. N'oubliez pas d'élargir l'archive appropriée, `cordova-windows8\windows8` dans ce cas, dans un répertoire vide. Les utilitaires lot pertinents sont disponibles dans le niveau supérieur `bin` répertoire. (Consultez le fichier **README** si nécessaire pour des directions plus détaillées).

 [7]: http://cordova.apache.org

Ces outils de coquille permettent de créer, construire et exécuter des applications Windows 8. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins.

## Installer le SDK

Installer *l'ultime*, *Premium*ou *Professional* 2013 éditions de [Visual Studio][3].

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

## Créez un nouveau projet

À ce stade, pour créer un nouveau projet, vous pouvez choisir entre l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande, ou l'ensemble d'outils spécifiques 8 shell Windows. A partir d'un répertoire de code source, cette approche CLI génère une application nommée *HelloWorld* dans un nouveau `hello` Répertoire de projet :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build


Voici l'approche de shell-outil de niveau inférieur correspondant :

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Générez le projet

Si vous utilisez l'interface CLI dans le développement, le niveau supérieur du répertoire du projet `www` répertoire contenant les fichiers sources. Exécutez un de ces dans le répertoire du projet pour reconstruire l'application :

        > cordova build
        > cordova build windows8   # do not rebuild other platforms


Si vous utilisez les outils de shell Windows Phone spécifiques au développement, il y a une approche différente. Une fois que vous générez le projet, source de l'application par défaut est disponible dans le `projects\windows8\www` sous-répertoire. Les commandes suivantes sont disponibles dans la `cordova` sous-répertoire au même niveau.

Le `build` commande nettoie les fichiers projet et régénère le $ $ etAPP. Le premier exemple génère des informations de débogage, et le second signe les apps pour diffusion immédiate :

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


Le `clean` commande aide à débusquer les répertoires en préparation pour le prochain `build` :

        C:\path\to\project\cordova\clean.bat


## Ouvrez le projet dans le SDK et de déployer l'application

<!-- wasn't able to 'run' or 'emulate', so doc'ing SDK as fallback -->

Une fois que vous générez une application Cordova comme décrit ci-dessus, vous pouvez l'ouvrir avec Visual Studio. Les différents `build` commandes génèrent un fichier de Visual Studio Solution (*.sln*). Ouvrez le fichier dans l'Explorateur de fichiers pour modifier le projet dans Visual Studio :

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

Le `CordovaApp` composant affiche au sein de la solution et ses `www` répertoire contient le code source sur le web, y compris la `index.html` page d'accueil :

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Les commandes sous le menu principal de Visual Studio vous permettent de tester ou déployer l'application :

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

Avec l' **Ordinateur Local** est sélectionné, appuyez sur la flèche verte pour installer l'application sur le même ordinateur qui exécute Visual Studio. Une fois vous le faites, le $ $ etAPP apparaît dans des listes de Windows 8 app :

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

Chaque fois que vous reconstruisez l'application, la version disponible dans l'interface est régénérée.

Une fois disponibles dans les listes de l'app, maintenant la touche **CTRL** enfoncée tout en sélectionnant le app permet d'épingler dans l'écran principal :

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

Notez que si vous ouvrez l'application dans un environnement de machine virtuelle, vous devrez peut-être cliquer dans les coins ou sur les côtés des fenêtres pour basculer des applications ou accéder à des fonctionnalités supplémentaires :

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

Vous pouvez également choisir l'option déploiement sur **simulateur** pour visualiser l'application comme s'il s'exécutait sur un périphérique de tablette :

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

À la différence de déploiement de bureau, cette option vous permet de simuler l'orientation de la tablette, emplacement et de modifier ses paramètres réseau.

**Remarque**: consultez l'Aperçu pour obtenir des conseils sur la façon d'utiliser les outils de ligne de commande de Cordova ou le SDK dans votre flux de travail. La CLI Cordova s'appuie sur le code source de multi-plateforme qui remplace régulièrement les fichiers spécifiques à la plateforme utilisées par le SDK. Si vous souhaitez utiliser le SDK pour modifier le projet, utilisez les outils de la coquille de niveau inférieur comme alternative à la CLI.
