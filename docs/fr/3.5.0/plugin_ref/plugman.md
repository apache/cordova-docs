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

# Aide de Plugman pour gérer les Plugins

Depuis la version 3.0, Cordova implémente toutes les API de périphérique API comme des plugins et les laisse désactivé par défaut. Il prend également en charge deux méthodes différentes pour ajouter et supprimer des plugins, selon votre choix de flux de travail dans la vue d'ensemble :

*   Si vous utilisez un flux de travail multi-plateforme, vous utilisez le `cordova` utilitaire CLI d'ajouter des plugins, comme décrit dans l'Interface de ligne de commande. La CLI modifie les plugins pour toutes les plates-formes spécifiés à la fois.

*   Si vous utilisez un flux de travail axée sur la plate-forme, vous utilisez une interface de ligne de commande [Plugman][1] de niveau inférieur, séparément pour chaque plateforme ciblée.

 [1]: https://github.com/apache/cordova-plugman/

Cette section décrit en détail l'utilitaire Plugman. Pour plus d'informations sur la consommation Plugman comme un module de nœud ou modifier le code source, consultez [le fichier README dans son référentiel][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Installation de Plugman

Pour installer plugman, vous devez avoir le [noeud][3] installé sur votre machine. Vous pouvez exécuter ce qui suit, puis commande de n'importe où dans votre environnement pour installer plugman dans le monde, afin qu'il soit accessible depuis n'importe quel répertoire :

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

Vous devez également avoir `git` sur votre `PATH` pour pouvoir installer des plugins directement à partir d'URL distant git.

**Astuce**: Si vous estimez qu'après l'installation de plugman avec `npm` vous ne parvenez pas à exécuter un `plugman` commandes, assurez-vous que vous avez ajouté le `/npm/` répertoire dans votre`PATH`.

**Remarque**: vous pouvez ignorer cette étape si vous ne souhaitez pas polluer votre global `npm` namespace en installant des Plugman dans le monde. Si c'est le cas, alors lorsque vous créez un projet de Cordoue avec les outils de la coquille, il y aura un `node_modules` répertoire à l'intérieur de votre projet qui contient Plugman. Puisque vous n'avez pas installé dans le monde, vous devez appeler `node` pour chaque commande de Plugman, par exemple `node
./node_modules/plugman/main.js -version` . Le reste du présent guide suppose que vous avez installé Plugman dans le monde, ce qui signifie que vous pouvez l'appeler avec juste`plugman`.

## Créez un projet de Cordova

Avant de pouvoir utiliser Plugman, vous devez créer un projet de Cordova. Vous pouvez le faire avec l'Interface de ligne de commande ou avec les scripts de shell de niveau inférieurs. Instructions pour l'utilisation des scripts shell pour créer votre projet sont situées dans les différents guides « Command-line Tools » figurant sur la page des Guides de la plate-forme.

## Ajout d'un Plugin

Une fois que vous avez installé Plugman et que vous avez créé un projet de Cordova, vous pouvez commencer à ajouter des plugins à la plate-forme avec :

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

À l'aide de paramètres minimum, cette commande installe un plugin dans un projet de cordova. Vous devez spécifier un emplacement de projet de plate-forme et cordova pour cette plateforme. Vous devez également spécifier un plugin, avec les différentes `--plugin` paramètre forme étant :

*   `name`: Le nom du répertoire où le contenu du plugin existe. Il doit s'agir d'un répertoire existant en vertu de la `--plugins_dir` chemin d'accès (voir ci-dessous pour plus d'informations) ou un plugin dans le registre de Cordova.
*   `url`: Une URL commençant par https:// ou git: / /, pointant vers un dépôt git valide qui peut être clonée et contient un `plugin.xml` fichier. Le contenu de ce dépôt devrait être copié dans le`--plugins_dir`.
*   `path`: Un chemin vers un répertoire contenant un plugin valide qui comprend un `plugin.xml` fichier. Contenu de ce tracé sera copié dans le`--plugins_dir`.

Autres paramètres :

*   `--plugins_dir`valeur par défaut est `<project>/cordova/plugins` , mais peut être n'importe quel répertoire contenant un sous-répertoire pour chaque extrait plugin.
*   `--www`par défaut, du projet `www` emplacement du dossier, mais peut être n'importe quel répertoire qui doit être utilisé comme patrimoine de cordova projet applicatif web.
*   `--variable`permet de spécifier certaines variables au moment de l'installation, nécessaire pour certains plugins, exigeant que les clés de l'API ou d'autres paramètres personnalisés, définis par l'utilisateur. Veuillez consulter la [spécification de plugin][4] pour plus d'informations.

 [4]: plugin_spec.md

## Supprimer un Plugin

Pour désinstaller un plugin, vous transmettez simplement le `--uninstall` d'un drapeau et fournir l'ID du plugin.

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Aide commandes

Plugman dispose d'une commande globale d'aide qui peut-être vous aider si vous êtes coincé ou rencontrez des problèmes. Il affiche une liste de toutes les commandes disponibles de Plugman et de leur syntaxe :

    plugman -help
    plugman  # same as above
    

**Remarque**: `plugman -help` peut montrer quelques commandes supplémentaires associés au registre. Ces commandes sont pour les développeurs de plugins et ne peuvent pas être implémentées sur les registres de plugin tiers.

Vous pouvez également ajouter le `--debug|-d` drapeau à n'importe quelle commande de Plugman pour exécuter cette commande en mode détaillé, qui permet d'afficher des messages de débogage internes car ils sont émis et peuvent vous aider à traquer les problèmes tels que des fichiers manquants.

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status
    

Enfin, vous pouvez utiliser le `--version|-v` drapeau pour voir quelle version de Plugman que vous utilisez.

    plugman -v
    

## Registre des Actions

Il y a un certain nombre de commandes plugman qui peut être utilisé pour interagir avec le [Plugin registry][5]. Veuillez noter que ces commandes de Registre sont au plugin *plugins.cordova.io* Registre et ne peuvent pas être exécutées en plugin tiers registres.

 [5]: http://plugins.cordova.io

### La recherche d'un Plugin

Vous pouvez utiliser Plugman pour rechercher le [Registre Plugin][5] plugin ID qui correspondent à la liste séparés par un espace donné de mots clés.

    plugman search <plugin keywords>
    

### Changer le Registre du Plugin

Vous pouvez obtenir ou définir l'URL de l'actuel Registre plugin qui utilise plugman. Généralement, vous devriez laisser ce jeu à http://registry.cordova.io, à moins que vous voulez utiliser un registre de plugin tiers.

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### Obtenir des informations du Plugin

Vous pouvez obtenir des informations sur n'importe quel plugin spécifique stocké dans le référentiel de plugin avec :

    plugman info <id>
    

Cela prendra contact avec le plugin Registre et l'extraction des informations comme numéro de version du plugin.

## Installation des Plugins du Core

Les exemples ci-dessous montrent comment ajouter des plugins nécessaires afin que toute APIs Cordova vous utilisez dans votre projet fonctionne toujours après que vous mettez à niveau vers la version 3.0. Pour chaque commande, vous devez sélectionner la plate-forme cible et le répertoire de projet de la plate-forme de référence.

*   Cordova-plugin-batterie-statut
    
    plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.battery-statut

*   Cordova-plugin-caméra plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.camera

*   Cordova-plugin-console plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.console

*   Cordova-plugin-contacts plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.contacts

*   Cordova-plugin-appareil plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.device

*   Cordova-plugin-périphérique-mouvement (accéléromètre) plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.device-motion

*   Cordova-plugin-périphérique-orientation (boussole) plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.device-orientation

*   Cordova-plugin-dialogues plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.dialogs

*   Cordova-plugin-file plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.file

*   Cordova-plugin-fichier-transfert plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.file-transfert

*   Cordova-plugin-géolocalisation plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.geolocation

*   Cordova-plugin-mondialisation plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.globalization

*   Cordova-plugin-inappbrowser plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.inappbrowser

*   Cordova-plugin-médias plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.media

*   Cordova-plugin-médias-capture plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin capture d'org.apache.cordova.media

*   Cordova-plugin-réseau-informations plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.network-informations

*   Cordova-plugin-splashscreen plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.splashscreen

*   Cordova-plugin-vibration plugman--projet de plate-forme < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.vibration