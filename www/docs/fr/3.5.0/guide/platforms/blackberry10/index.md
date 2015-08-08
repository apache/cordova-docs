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

# Guide de la plate-forme blackBerry 10

Ce guide montre comment configurer votre environnement de développement pour créer et déployer des applications de Cordova pour BlackBerry 10 appareils. Pour les versions précédentes de BlackBerry, vous devez utiliser un ensemble d'outils de ligne de commande, décrits dans le Guide de la plate-forme BlackBerry différent.

## Exigences

L'environnement de développement est disponible sur Windows, Mac et Linux.

Les développeurs doivent utiliser les `cordova` utilitaire en conjonction avec le kit de développement natif de Blackberry. Voir l'Interface de ligne de commande pour plus d'informations comment faire pour installer `cordova` , ajouter des projets, puis générer et déployer pour chaque plate-forme.

BlackBerry 10 appareil simulateur :

    * `Processor:`Intel dual core 2.0 GHz/AMD Athlon 4200+ or higher
    * `Disk space: 10 GB`
    * `RAM Memory: 4 GB`
    * `Virtualization:
        * __Intel Virtualization Technology__ (VT, VT-x, vmx) &rarr; [Intel VT-x supported processor list](http://ark.intel.com/products/virtualizationtechnology)
        * __AMD Virtualization__ (AMD-V, SVM) (Since May 2006, all CPUs AMD include AMD-V, except Sempron).


Plus d'informations sur la configuration requise : [BB10 simulateur requeriments][1].

 [1]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## Installer le SDK natif de BlackBerry

Afin d'obtenir le kit de développement natif de BlackBerry, télécharger et installer l'IDE pour Blackberry disponible de [developer.blackberry.com][2], puis à l'aide de l'IDE, installez le kit de développement natif de Blackberry. Après installation, vous devez ajouter ses outils de ligne de commande à votre path système.

 [2]: http://developer.blackberry.com/native/download/

Sur Windows :

*   Aller à **mon ordinateur → propriétés → avancé → Variables d'environnement**.

*   Ajoute le répertoire d'installation du SDK natif au chemin, par exemple :

    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

Sur Mac et Linux :

*   Modifier la `~/.bash_profile` fichier, en ajoutant une ligne semblable à la suivante, selon lequel le kit de développement natif a été installé :

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Exécutez la commande suivante pour appliquer la modification à la présente session :

    $ source ~/.bash_profile

Si tu as un problème environnemental, en utilisant le kit de développement natif de la ligne de commande, exécutez le fichier approprié pour votre plate-forme, située dans le chemin d'installation :

    * On Windows:
        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`

    * On Linux &rarr; Installed as root user:
        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`

    * On Linux &rarr; Installed as non-root user:
        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`

    * On Mac:
        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## Mis en place pour la signature

Si vous souhaitez tester sur un périphérique ou de distribuer des applications via BlackBerry World, votre système doit être configuré pour la signature de code.

Pour obtenir une clé de signature, aller à votre \[BlackBerry touches Commande\] (https://www.blackberry.com/SignedKeys/codesigning.html).

Cochez la première case: "pour BlackBerry10 apps développées à l'aide de BlackBerry NDK" et puis connectez-vous ou créez un BBID.

Entrez un mot de passe et cliquez sur « Get jeton » pour télécharger bbidtoken.csk. Enregistrez ce fichier dans l'emplacement par défaut pour votre système d'exploitation qui s'affichera sur la page de téléchargement.

La dernière étape consiste à générer un certificat de signature :

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## Créer un projet

Utilisation du `cordova` utilitaire de mettre en place un nouveau projet, tel que décrit dans l'Interface de ligne de commande. Par exemple, dans un répertoire de code source :

    $ cordova create hello com.example.hello
    $ cd hello
    $ cordova platform add blackberry10
    $ cordova build


## Déployer sur émulateur

Si vous souhaitez lancer un émulateur de périphérique, téléchargez et installez le simulateur de 10 BlackBerry.

*   [Télécharger][2]
*   [Mise en route][3]

 [3]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Avant de tester une application sur un émulateur ou un périphérique, vous devez activer le mode de développement.

Lancer l'image de l'émulateur, puis cliquez sur **paramètres** depuis l'écran d'accueil :

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Accédez à la **→ sécurité et vie privée Mode de développement** section et activer l'option :

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Ensuite, exécutez le `emulate` commande pour visualiser l'application :

    $ cordova emulate blackberry10 --devicepass <password>


## Déployer sur le périphérique

À déployer sur un périphérique, assurez-vous qu'elle est branchée à votre ordinateur et le mode de développement est activé.

Ensuite, exécutez le `run` commande pour visualiser l'application :

    $ cordova run blackberry10 --devicepass <password>


Si un jeton de débogage n'est pas encore mis en place pour le périphérique, un message d'erreur vous demande de fournir le mot de passe, vous avez défini lors de la configuration de votre ordinateur pour vous connecter à des applications.

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>


## Débogage avec WebInspector

Lorsque vous déboguez sur l'appareil ou un émulateur, vous pouvez exécuter WebInspector à distance pour afficher état interne de l'application. Une invite de commandes affiche l'URL qui vous permet de vous connecter à votre application avec un navigateur web standard. Pour plus d'informations, consultez [débogage à l'aide de WebInspector][6].

 [6]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Générer une Version finale

Par défaut, exécutez la `cordova build` commande crée un fichier de package non signé *.bar* appropriée aux essais sur un appareil ou un simulateur.

Utiliser `--release` pour créer une version adaptée à la distribution par l'intermédiaire de BlackBerry World.

    $ cordova build --release --keystorepass <signing password>


Le `--keystorepass` option spécifie le mot de passe vous avez défini lors de la configuration de votre ordinateur pour signer les applications.

## Déployer dans d'autres endroits

Les instructions ci-dessus supposent un appareil est branché via USB ou d'un simulateur est en cours d'exécution sur l'ordinateur local. Il est également possible de déployer dans d'autres endroits.

Un jeu supplémentaire d'utilitaires de ligne de commande sont inclus lorsque vous configurez la plate-forme BlackBerry 10 pour votre projet. La commande suivante, appelée dans ce cas depuis le répertoire racine du projet, associe une cible nommée *l'UEM* avec une adresse IP.

*   Sur Windows :

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   Sur Mac/Linux :

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

Une fois que la cible est définie, vous pouvez le fournir à la commande d'exécution à l'aide `--target` :

    $ cordova run blackberry10 --target=emu
