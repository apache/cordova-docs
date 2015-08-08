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

## Installer le SDK natif de BlackBerry

Le kit de développement natif de BlackBerry est disponible chez [developer.blackberry.com][1]. Après installation, vous devez ajouter ses outils de ligne de commande à votre path système.

 [1]: http://developer.blackberry.com/native/download/

Sur Windows :

*   Aller à **mon ordinateur → propriétés → avancé → Variables d'environnement**.

*   Ajoute le répertoire d'installation du SDK natif au chemin, par exemple :

    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

Sur Mac et Linux :

*   Modifier la `~/.bash_profile` fichier, en ajoutant une ligne semblable à la suivante, selon lequel le kit de développement natif a été installé :

    $ export PATH = ${chemin}: / Applications/bbndk/host\_10\_1\_0\_132/darwin/x 86/usr/bin /

    ou pour le kit de développement natif 10.2 :

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Exécutez la commande suivante pour appliquer la modification à la présente session :

    $ source ~/.bash_profile

## Mis en place pour la signature

Si vous souhaitez tester sur un périphérique ou de distribuer des applications via BlackBerry World, votre système doit être configuré pour la signature de code.

Pour obtenir une clé de signature, allez sur le site de BlackBerry et assurez-vous de conserver le mot de passe que vous spécifiez. Puis exécutez le `blackberry-signer` utilitaire fourni avec le kit de développement natif de BlackBerry.

Instuctions détaillées se trouvent ici :

*   [S'inscrire à votre clé de signature de code.][2]

*   [Configurer votre système pour la signature de code.][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Créer un projet

Utilisation du `cordova` utilitaire de mettre en place un nouveau projet, tel que décrit dans l'Interface de ligne de commande. Par exemple, dans un répertoire de code source :

    $ cordova créer Bonjour com.example.hello $ cd $ Bonjour cordova plate-forme ajouter blackberry10 $ cordova build


## Déployer sur émulateur

Si vous souhaitez lancer un émulateur de périphérique, téléchargez et installez le simulateur de 10 BlackBerry.

*   [Télécharger][1]
*   [Mise en route][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Avant de tester une application sur un émulateur ou un périphérique, vous devez ajouter une *cible* à votre projet. Chacune est identifiée par un nom unique et associé à une adresse IP. Vous avez besoin obtenir l'adresse IP de l'émulateur avant de l'utiliser pour afficher les applications.

Lancer l'image de l'émulateur, puis cliquez sur **paramètres** depuis l'écran d'accueil :

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Accédez à la **→ sécurité et vie privée Mode de développement** section, activez l'option et obtenir l'adresse IP :

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Un jeu supplémentaire d'utilitaires de ligne de commande sont inclus lorsque vous configurez la plate-forme BlackBerry 10 pour votre projet. La commande suivante, appelée dans ce cas depuis le répertoire racine du projet, associe une cible nommée *l'UEM* avec l'adresse IP affichée ci-dessus.

*   Sur Windows :

    $ platforms\blackberry10\cordova\target.bat ajouter simulateur -t emu 169.254.0.1

*   Sur Mac/Linux :

    $ plates-formes/blackberry10/Cordoue/cible ajouter simulateur -t emu 169.254.0.1

Ensuite, exécutez le `emulate` commande pour visualiser l'application :

    $ cordova émuler blackberry10


## Déployer sur le périphérique

À déployer sur un périphérique, assurez-vous qu'elle est branchée à votre ordinateur. Activer le mode de développement et d'obtenir l'adresse IP comme décrit dans la section émulateur ci-dessus. Vous devrez également obtenir le NIP de la l'application de **paramètres** sous **sur → matériel**:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Exécutez l'utilitaire de ligne de commande cible pour associer un nom à une adresse IP, mot de passe de périphérique et un code PIN.

*   Sur Windows :

    $ platforms\blackberry10\cordova\target.bat ajouter mydevice 169.254.0.1 -t périphérique--mot de passe 123456--broche FFFF972E

*   Sur Mac/Linux :

    $ plates-formes/blackberry10/Cordoue/cible ajouter mydevice 169.254.0.1 -t périphérique--mot de passe 123456--broche FFFF972E

où :

*   `--password`veut dire le mot de passe pour déverrouiller l'appareil.

*   `--pin`désigne le périphérique PIN provenant de l'application de **paramètres** .

Ensuite, exécutez le `run` commande pour visualiser l'application :

    $ cordova, exécutez blackberry10


Si un jeton de débogage n'est pas encore configuré pour le périphérique, un message d'erreur vous invite à utiliser la plateforme d'exécuter le script avec le mot de passe que vous avez fourni lors de l'inscription pour les clés de signature.

*   Sur Windows :

    $ platforms\blackberry10\cordova\run.bat--dispositif--keystorepass mysecret

*   Sur Mac/Linux :

    $ plates-formes/blackberry10/Cordoue/exécuter--dispositif--keystorepass mysecret

## Débogage avec WebInspector

Lorsque vous déboguez sur l'appareil ou un émulateur, vous pouvez exécuter WebInspector à distance pour afficher état interne de l'application. Une invite de commandes affiche l'URL qui vous permet de vous connecter à votre application avec un navigateur web standard. Pour plus d'informations, consultez [débogage à l'aide de WebInspector][8].

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Générer une Version finale

Par défaut, exécutez la `cordova build` commande crée un fichier de package non signé *.bar* appropriée aux essais sur un appareil ou un simulateur.

Vous devez exécuter une autre `build` commande pour créer une version adaptée à la distribution par l'intermédiaire de BlackBerry World. Il ne s'appuie pas sur le `cordova` outil CLI et utilise à la place de la syntaxe suivante :

*   Sur Windows :

    $ platforms\blackberry10\cordova\build.bat--libération--keystorepass mysecret

*   Sur Mac/Linux :

    $ plates-formes/blackberry10/Cordoue/build--libération--keystorepass mysecret

Le `--keystorepass` option spécifie le mot de passe vous avez défini lors de la configuration de votre ordinateur pour signer les applications.
