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

Un ponts de plugin de Cordova, un peu de fonctionnalité entre le WebView alimentant une application de Cordova et la plate-forme native, l'application de Cordova s'exécute sur. Plugins sont composés d'une seule interface JavaScript utilisée sur toutes les plates-formes et des implémentations natives suite d'interfaces de Plugin spécifique à la plateforme qui appelle le code JavaScript. Tous le noyau Cordova APIs sont implémentées à l'aide de cette architecture.

Ce guide étapes le processus d'écriture d'un Plugin Echo simple qui transmet une chaîne à partir de JavaScript et l'envoie dans l'environnement natif pour les plates-formes supportées. Le code natif retourne alors la chaîne même aux rappels à l'intérieur JavaScript du plugin.

Ce guide fournit suffisamment aperçu sur lequel vous pouvez construire pour écrire des plugins plus complexes.

## JavaScript

Le point d'entrée pour n'importe quel plugin est JavaScript. L'utilisation de développeurs raison que Cordova est afin qu'ils puissent utiliser et écrire JavaScript, pas Objective-C, pas de Java, pas de langage c#. L'interface JavaScript de votre plugin est la partie frontale et sans doute plus importante de votre plugin de Cordova.

Vous pouvez structurer votre plugin JavaScript comme bon vous semble. La seule chose que vous *devez* utiliser pour communiquer entre le Cordova JavaScript et les environnements natifs est le `cordova.exec` fonction. Voici un exemple :

        cordova.exec(function(winParam) {}, function(error) {}, "service",
                     "action", ["firstArgument", "secondArgument", 42,
                     false]);
    

Les paramètres sont détaillées ci-dessous :

*   `function(winParam) {}`: Rappel de fonction succès. En supposant que votre `exec` appel se termine avec succès, cette fonction est appelée (en option avec tous les paramètres vous passez à lui).

*   `function(error) {}`: Rappel d'erreur de fonction. Si l'opération ne se termine pas avec succès, cette fonction est appelée (éventuellement avec un paramètre error).

*   `"service"`: Le nom du service pour appeler dans le côté natif. Il est mappé à une classe native, sur lequel des informations supplémentaires sont disponibles dans les guides autochtones énumérées ci-dessous.

*   `"action"`: Le nom de l'action d'appeler. C'est capté par le récepteur de la classe native le `exec` appel et, dépendant de la plate-forme, essentiellement correspond à méthode d'une classe. Les natives guides énumérés ci-dessous fournissent des détails.

*   `[/* arguments */]`: Arguments pour passer dans l'environnement natif.

### Exemple de JavaScript Plugin Echo

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Plongeons-nous dans tout cela. Le plugin s'attache à `window` , plus précisément à la `echo` fonction. Plugin utilisateurs seraient alors utilisez-le comme suit :

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Tout d'abord, nous allons jeter un regard sur les trois derniers arguments de la `exec` fonction. Nous demanderons le `Echo` « de service », demandant la `echo` « action », et en passant un tableau d'arguments qui contient la chaîne echo, qui est le premier paramètre dans la `window.echo` fonction.

Le rappel du succès passé dans `exec` est simplement une référence au rappel fonction `window.echo` prend. Nous faisons un peu plus pour le rappel de l'erreur : si le côté natif déclenche le rappel de l'erreur, nous avons simplement appeler le rappel de la réussite et transmettez-lui une chaîne « par défaut ».

## Spécification du plugin

Cordoue possède une spécification de plugin disponible pour activer l'installation automatique du plugin pour Android, iOS, plates-formes 10 BlackBerry et Windows Phone. En structurant votre plugin de façon particulière et en ajoutant un `plugin.xml` fichier manifeste, vous pouvez permettre aux utilisateurs d'installer votre plug-in via les outils de ligne de commande.

*   [Spécification du plugin](../../../plugin_ref/spec.html)

## Native

Une fois que vous définissez JavaScript pour votre plugin, vous devez compléter au moins une implémentation native. Détails de le faire pour chaque plate-forme sont répertoriées ci-dessous. Ces guides continuent de miser sur l'exemple simple de Plugin Echo discuté ci-dessus.

*   [Plugins Android](../../platforms/android/plugin.html)
*   [Plugins de blackBerry](../../platforms/blackberry/plugin.html)
*   [BlackBerry 10 Plugins](../../platforms/blackberry10/plugin.html)
*   [iOS Plugins](../../platforms/ios/plugin.html)
*   [Windows Phone Plugins](../../platforms/wp8/plugin.html)

La plate-forme paciarelli ne supporte actuellement pas de plugins.

## Plugins édition

Une fois que vous avez développé votre plugin, vous pouvez publier et partager avec la communauté. Vous pouvez publier votre plugin dans le registre de cordova (basé sur [npmjs][1]) ou à toute autre npmjs base de Registre. Utilisateurs seront en mesure de l'installer automatiquement en utilisant plugman ou cordova-cli.

 [1]: https://github.com/isaacs/npmjs.org

Pour publier un plugin, vous devez utiliser l'outil plugman et passer par les étapes suivantes :

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

C'est tout !

Autres commandes basées sur le Registre sont disponibles et `plugman --help` vous donnera une liste de ce que les commandes sont disponibles et comment les utiliser.