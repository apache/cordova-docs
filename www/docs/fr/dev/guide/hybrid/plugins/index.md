---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: Guide de développement de plugin
---

# Guide de développement de plugin

Un *plugin* est un ensemble de code injecté qui permet le webview Cordova, dans lequel l'application restitue pour communiquer avec la plate-forme native sur lequel il s'exécute. Plugins permettent d'accéder aux fonctionnalités de périphérique et de la plate-forme habituellement non disponible pour les applications web. Toutes les fonctionnalités principales de Cordova API sont implémentées comme des plugins, et beaucoup d'autres n'est disponibles qu'enable caractéristiques tels que les scanners de codes à barres, communication NFC, ou d'adapter le calendrier des interfaces. Il y a un [Registre][1] des plugins disponibles.

 [1]: http://plugins.cordova.io

Plugins comportent une seule interface JavaScript ainsi que les bibliothèques de code natif correspondant pour chaque plate-forme prise en charge. En substance, cela masque les diverses implémentations de code natif derrière une interface commune de JavaScript.

Étapes de cette section à un plugin simple *écho* qui transmet une chaîne à partir de JavaScript pour la plate-forme native et le retour, que vous pouvez utiliser comme modèle pour créer des fonctionnalités beaucoup plus complexes. Cette section traite de la structure du plugin de base et l'interface JavaScript donnant sur l'extérieur. Pour chaque interface native correspondante, consultez la liste à la fin de cette section.

En plus de ces instructions, avant de commencer à écrire un plugin qu'il est préférable de chercher sur [les plugins][2] pour l'orientation.

 [2]: http://cordova.apache.org/#contribute

## Construction d'un Plugin

Les développeurs d'applications utilisent de la CLI `plugin add` commande (discuté dans l'Interface de ligne de commande) d'appliquer un plugin pour un projet. L'argument de cette commande est l'URL pour un dépôt *git* contenant le code du plugin. Cet exemple implémente Device API de Cordova :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

Le référentiel plugin doit disposent d'un niveau supérieur `plugin.xml` fichier manifeste. Il existe de nombreuses façons de configurer ce fichier, détails pour lesquels n'existent pas dans la spécification de Plugin. Cette version abrégée de la `Device` plugin fournit un exemple simple d'utiliser un modèle :

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="cordova-plugin-device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

Le niveau supérieur `plugin` de tag `id` attribut utilise le même format de domaine inverse pour identifier le paquet plugin que les apps à elles sont ajoutées. Le `js-module` balise spécifie le chemin d'accès à l'interface commune de JavaScript. Le `platform` balise spécifie un jeu correspondant du code natif, pour le `ios` plate-forme dans ce cas. Le `config-file` tag encapsule un `feature` tag qui est injecté dans le spécifique à la plateforme `config.xml` fichier pour sensibiliser la plate-forme de la bibliothèque de code supplémentaire. Le `header-file` et `source-file` balises spécifient le chemin d'accès aux fichiers de composant de la bibliothèque.

## Validation d'un Plugin

Vous pouvez utiliser le `plugman` utilitaire vérifie si le plugin est installé correctement pour chaque plate-forme. Installer `plugman` avec la commande suivante de [nœud][3] :

 [3]: http://nodejs.org/

        $ npm install -g plugman
    

Vous avez besoin d'un répertoire source app valides, tels que le niveau supérieur `www` répertoire inclus dans un projet de CLI-généré par défaut tel que décrit dans l'Interface de ligne de commande. S'assurer de l'application `index.html` page d'accueil de référence le nom de JavaScript interface du plugin, comme si elle était dans le même répertoire source :

        <script src="myplugin.js"></script>
    

Puis, exécutez une commande semblable à la suivante pour vérifier si les dépendances iOS chargent correctement :

         $ plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin
    

Pour plus d'informations sur `plugman` options, voir Plugman à l'aide à gérer les Plugins. Pour plus d'informations sur la façon de *Déboguer* en fait des plugins, voir interface native de chaque plate-forme figurant au bas de cette page.

## L'Interface JavaScript

Le code JavaScript fournit l'interface de la face, ce qui en fait peut-être la partie la plus importante du plugin. Vous structurez votre plugin JavaScript mais vous aimez, mais vous devez appeler `cordova.exec` pour communiquer avec la plate-forme native, à l'aide de la syntaxe suivante :

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

Voici comment chaque paramètre fonctionne :

*   `function(winParam) {}`: Une fonction de rappel de succès. En supposant que votre `exec` appel se termine avec succès, cette fonction s'exécute avec des paramètres que vous lui passez.

*   `function(error) {}`: Une fonction de rappel d'erreur. Si l'opération ne se termine pas avec succès, cette fonction s'exécute avec le paramètre d'erreur facultatives.

*   `"service"`: Le nom de service à appeler sur le côté natif. Cela correspond à une classe native, pour laquelle plus d'informations sont disponibles dans les guides autochtones énumérées ci-dessous.

*   `"action"`: Le nom de l'action à appeler sur le côté natif. Généralement, cela correspond à la méthode de la classe native. Consultez les guides autochtones énumérées ci-dessous.

*   `[/* arguments */]`: Un tableau d'arguments à passer dans l'environnement natif.

## Exemples JavaScript

Cet exemple montre une façon d'implémenter l'interface JavaScript de plugin :

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Dans cet exemple, le plugin s'attache à la `window` d'objet comme le `echo` fonction qui appellent plugin utilisateurs comme suit :

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Regarder les trois derniers arguments pour le `cordova.exec` fonction. Les premiers appels du `Echo` *service*, un nom de classe. La deuxième demande la `echo` *action*, une méthode dans cette classe. Le troisième est un tableau d'arguments qui contient la chaîne echo, qui est le `window.echo` fonction du premier paramètre.

Le rappel du succès passé dans `exec` est simplement une référence à la fonction de rappel `window.echo` prend. Si la plate-forme native déclenche le rappel de l'erreur, il simplement solliciter le rappel de succès et lui passe une chaîne par défaut.

## Interfaces natives

Une fois que vous définissez JavaScript pour votre plugin, vous devez compléter au moins une implémentation native. Détails pour chaque plate-forme sont énumérés ci-dessous, et chacun s'appuie sur l'exemple simple de Plugin Echo ci-dessus :

*   [Amazon Fire OS Plugins](../../platforms/amazonfireos/plugin.html)
*   [Plugins Android](../../platforms/android/plugin.html)
*   [iOS Plugins](../../platforms/ios/plugin.html)
*   [BlackBerry 10 Plugins](../../platforms/blackberry10/plugin.html)
*   [Windows Phone 8 Plugins](../../platforms/wp8/plugin.html)
*   [Plugins Windows](../../platforms/win8/plugin.html)

La plateforme de paciarelli ne supporte pas les plugins.

## Plugins édition

Une fois que vous développez votre plugin, vous pouvez publier et partager avec la communauté. Vous pouvez publier votre plugin sur n'importe quel `npmjs`-base de Registre, mais celle recommandée est le [Registre de la NGP][4]. S'il vous plaît lire notre [publication plugins au guide du Musée][5].

 [4]: https://www.npmjs.com
 [5]: http://plugins.cordova.io/npm/developers.html

**NOTE**: [Cordova plugin registre][6] évolue vers un État en lecture seule. `publish`/ `unpublish` des commandes ont été retirés de la `plugman`, donc vous aurez besoin d'utiliser les commandes correspondantes de `npm` .

 [6]: https://plugins.cordova.io

Autres développeurs puissent l'installer votre plugin automatiquement à l'aide soit de `plugman` ou de la CLI de Cordova. (Pour plus de détails sur chaque voie de développement, voir Plugman à l'aide à gérer les Plugins et l'Interface de ligne de commande).

Pour publier un plugin sur le Registre du Musée, que vous devez suivre les étapes ci-dessous :

*   Créez votre plugin dans le fichier `package.json` :
    
        $ plugman createpackagejson /path/to/your/plugin
        

*   publier :
    
        $ npm adduser # that is if you don't have an account yet
        $ npm publish /path/to/your/plugin
        

C'est tout !

En cours d'exécution `plugman --help` répertorie les autres commandes disponibles basés sur le registre.