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

# L'utilisation de Plugman pour gérer les Plugins

Depuis la version 3.0, Cordova implémente tous les périphérique API comme plugins et les laisse désactivé par défaut. Il prend également en charge deux méthodes différentes pour ajouter et supprimer des plugins. La première consiste à utiliser le `cordova` CLI décrit dans l'Interface de ligne de commande. La seconde est à l'aide d'une interface de ligne de commande de niveau inférieur [plugman][1] . Ce guide se concentre sur la deuxième approche, qui peut être utile pour les développeurs qui souhaitent mettre à jour leur version de Cordova, mais qui n'ont pas encore adopté le Cordova CLI dans leur flux de travail.

 [1]: https://github.com/apache/cordova-plugman/

Pour plus d'informations sur plugman, consultez [le fichier README dans son référentiel][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Commandes de base

Pour installer plugman, vous devez posséder le [nœud][3] installé sur votre machine :

 [3]: http://nodejs.org/

    npm install -g plugman
    

Voici la syntaxe pour ajouter un plugin pour chaque plateforme :

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Pour désinstaller un plugin :

    plugman --uninstall --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Installation des Plugins du Core

Les exemples ci-dessous montrent comment ajouter des plugins nécessaires afin que toute APIs Cordova vous utilisez dans votre projet fonctionne toujours après que vous mettez à niveau vers la version 3.0. Pour chaque commande, vous devez sélectionner la plate-forme cible et le répertoire de projet de la plate-forme de référence.

*   Cordova-plugin-batterie-statut plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git

*   Cordova-plugin-caméra plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git

*   Cordova-plugin-console plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git

*   Cordova-plugin-contacts plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git

*   Cordova-plugin-appareil plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

*   Cordova-plugin-périphérique-mouvement (accéléromètre) plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git

*   Cordova-plugin-périphérique-orientation (boussole) plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git

*   Cordova-plugin-dialogues plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git

*   Cordova-plugin-file plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git

*   Cordova-plugin-fichier-transfert plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git

*   Cordova-plugin-géolocalisation plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git

*   Cordova-plugin-mondialisation plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git

*   Cordova-plugin-inappbrowser plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

*   Cordova-plugin-médias plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git

*   Cordova-plugin-médias-capture plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git

*   Cordova-plugin-réseau-informations plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git

*   Cordova-plugin-splashscreen plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git

*   Cordova-plugin-vibration plugman--projet de plate-forme < ios|android|blackberry10|wp7|wp8 >-- <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git