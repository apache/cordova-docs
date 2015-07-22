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

# Guide de la plate-forme blackBerry

Ce guide vous montre comment configurer un environnement SDK pour les applications cibles pour la plateforme BlackBerry antérieures à la version 10. Si vous souhaitez cibler la version la plus récente, consultez le Guide de plateforme BlackBerry 10. Voir ci-dessous pour plus d'informations spécifiques à la plateforme :

*   Configuration de blackBerry
*   Mise à jour de BlackBerry
*   Plugins de blackBerry
*   Outils de ligne de commande de blackBerry

Les outils de ligne de commande ci-dessus se référer aux versions antérieures à la 3.0 de Cordova. Voir l'Interface de ligne de commande pour plus d'informations sur l'interface actuelle.

## Exigences et soutien

Cette version de BlackBerry n'est pas pris en charge par le `cordova` utilitaire décrit dans l'Interface de ligne de commande, mais par un ensemble distinct d'outils de ligne de commande. Télécharger la distribution de Cordova sur [cordova.apache.org][1].

 [1]: http://cordova.apache.org/#download

Cordova pour BlackBerry s'appuie sur le [cadre de BlackBerry WebWorks][2], qui est disponible pour Windows XP (32 bits), Windows 7 (32 bits et 64 bits) et Mac (OS X 10.6.4+). WebWorks demandes de can le *seulement* être déployé sur les plates-formes suivantes de BlackBerry :

 [2]: https://bdsc.webapps.blackberry.com/html5

*   BlackBerry OS 5.0 et plus
*   BlackBerry PlayBook
*   BlackBerry 10 (QNX)

WebWorks nécessite le Kit de développement Java (JDK). Pour Windows, utilisez la version 32 bits du [JDK d'Oracle][3]. Java dans installé par défaut sur Mac OS X jusqu'à la version 10.7, qui nécessite [une installation séparée][4]. Il exige également de Apache Ant, qui sur Mac fait partie de l'installation de Java. La version Windows est disponible à partir de [ant.apache.org][5].

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## Installer le SDK

Télécharger et installer le SDK WebWorks approprié pour votre développement. BlackBerry PlayBook et Smartphone de BlackBerry WebWorks SDK peuvent être téléchargé à partir des emplacements suivants.

*   \[BlackBerry PlayBook SDK\] (https://developer.blackberry.com/html5/download/#playbook) et [Adobe Air SDK][6]

*   \[BlackBerry Smartphones SDK\] (https://developer.blackberry.com/html5/download/#smartphones)

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## S'inscrire pour les clés de signature

Si vous souhaitez publier votre application sur BlackBerry App World, ou sur un périphérique réel, vous devrez vous inscrire à un jeu de clés de signature de Code libre. Pour ce faire, remplissez le [Formulaire de commande de touches BlackBerry][7]. Une fois que vous recevez vos clés de signature, ils nécessitent une installation. Voir le [site Web de BlackBerry HTML5/WebWorks][8] pour plus d'informations.

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Installer Cordova

Téléchargez et décompressez la dernière version de [Cordova][1].

## Mettre en place un nouveau projet

*   Ouvrir un terminal en ligne de commande et naviguez vers lequel vous avez extrait Cordova.

*   Il y a un répertoire pour chaque plate-forme qui supporte de Cordova. Naviguez vers le `blackberry` répertoire.

*   Le `blackberry` répertoire contient plusieurs sous-répertoires. Le `example` répertoire contient un projet complet de Cordova. Copie le `example` répertoire vers un autre emplacement sur votre ordinateur et y naviguer.

*   Modifier le `project.properties` fichier pour spécifier le SDK WebWorks vous utilisez. Par exemple, Voici les paramètres respectifs pour PlayBook de BlackBerry, BlackBerry, Smartphone (OS5-7) ou BlackBerry 10 (QNX) :
    
        PlayBook.bbwp.dir=C:\\Program Files\\Research en Motion\\BlackBerry WebWorks SDK pour Tablet 2.1.0.6\\bbwp blackberry.bbwp.dir=C:\\Program Files\\Research en Motion\\BlackBerry WebWorks emballeur qnx.bbwp.dir=C:\\Program Files (x 86) \\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9
        

Ceux-ci correspondent aux paramètres que vous spécifiez lorsque vous générez votre projet. La première fois que vous exécutez ces commandes, ils génèrent une application « HelloWorld » :

        Cordova/construction playbook cordova/construction blackberry qnx de cordova/construction
    

Avec le SDK, vous devez également vous inscrire pour une clé de signature de code et le débogage de jeton. La clé de signature vous permet de distribuer des applications via BlackBerry World. Le jeton de débogage permet de tester des applications non signées sur un émulateur du BlackBerry ou un périphérique. Vous n'avez pas besoin de créer et d'installer le jeton de débogage vous-même ; Si vous fournissez le mot de passe de fichier de clés, le script de compilation crée et installe le jeton de débogage pour vous. Pour configurer la clé de signature, allez sur le site de BlackBerry pour l'obtenir, en veillant à conserver le mot de passe que vous spécifiez. Puis exécutez le `blackberry-signer` utilitaire fourni avec le SDK. BlackBerry fournit plus d'informations ici :

*   [S'inscrire à votre clé de signature de code][9]

*   [Configurer votre ordinateur pour la signature de code][10]

*   [guide complet de la configuration de votre environnement SDK][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## Déployer sur émulateur

Émulateurs smartphone blackBerry ne sont disponibles que sous Windows. Émulateurs PlayBook blackBerry nécessitent VMWare Player (Windows) ou VMWare Fusion (Mac OS X). Le SDK WebWorks fournit un émulateur par défaut, mais les émulateurs supplémentaires sont [disponibles par l'intermédiaire de BlackBerry][12].

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

À partir de votre répertoire de projet, tapez `./cordova/run <target>` , remplaçant `<target>` soit `qnx` , `playbook` , ou `blackberry` . Notez que pour BlackBerry 10 et PlayBook, l'émulateur virtual image doit déjà être démarré.

Voir ci-dessous pour plus d'informations :

*   [BlackBerry PlayBook][13]

*   [Smartphone blackBerry][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

Pour BlackBerry Playbook, modifier le `project.properties` fichier pour personnaliser les `playbook.sim.ip` et `playbook.sim.password` Propriétés. Adresse IP de l'émulateur est disponible par le biais de l'application de **paramètres** sur l'écran d'accueil. Activez le **→ sécurité et vie privée Mode de développement** option pour afficher l'adresse. Le mot de passe peut également être définie dans l'onglet **sécurité et confidentialité** .

Pour téléphone intelligent BlackBerry, modifier le `project.properties` fichier pour personnaliser les `blackberry.sim.dir` et `blackberry.sim.bin` Propriétés. Vous devez échapper des séparateurs de chemin d'accès lorsque vous spécifiez des chemins de répertoire sur Windows, par exemple :`C:\\Program
Files\\BlackBerry\\Simulator`.

Une fois que l'émulateur est installé et en cours d'exécution, exécutez une des opérations suivantes pour installer une application sur l'écran d'accueil :

        blackberry cordova/exécuter Cordova/exécuter playbook
    

Si vous êtes invité si un périphérique est connecté à votre ordinateur, répondez non.

**Remarque :** Sur BlackBerry OS 5, l'application est installée dans le `Downloads` répertoire.

## Déployer sur le périphérique

Pour déployer votre application sur un périphérique, il doit être raccordé, et vous devez être inscrit pour le code clés de signature comme décrit ci-dessus. Aussi, pour déployer des applications sur le BlackBerry PlayBook, le **paramètres → sécurité → Mode de développement** option doit être activée.

Le BlackBerry PlayBook, modifier la `project.properties` du fichier et modifier ce qui suit afin de refléter des IP et le mot de passe de l'appareil comme décrites ci-dessus, le long avec la clé de signature passe vous mis en place :

À partir de votre répertoire de projet, tapez `./cordova/run <target>` , remplaçant `<target>` soit `qnx` , `playbook` , ou`blackberry`.

Téléphone intelligent BlackBerry (OS5-7), spécifiez la `blackberry.sigtool.password` propriété comme mot de passe clé signature.

Puis du répertoire du projet, exécutez une des commandes que vous le feriez pour visualiser l'application dans l'émulateur :

        blackberry cordova/exécuter Cordova/exécuter playbook
    

Si vous êtes invité si un périphérique est connecté à votre ordinateur, répondre Oui.

**Remarque :** Sur BlackBerry OS 5, l'application est installée dans le `Downloads` répertoire.

## Plus d'informations

Les articles suivants peuvent aider à résoudre des problèmes courants lors du développement d'applications conçues pour l'infrastructure BlackBerry WebWorks :

*   [BlackBerry WebWorks développement pièges][15]

*   [Méthodes conseillées pour empaqueter des applications WebWorks][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html