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

# BlackBerry 10 outils de ligne de commande

Le `cordova` de l'utilitaire est un outil de haut niveau qui vous permet de créer des applications sur plusieurs plateformes à la fois. Une ancienne version du framework Cordova fournit des ensembles d'outils de ligne de commande spécifiques à chaque plate-forme. Pour les utiliser comme une alternative à la CLI, vous devez télécharger cette version de Cordova de [cordova.apache.org][1]. Le téléchargement contient les archives distincts pour chaque plate-forme. Développez la plate-forme que vous voulez cibler. Les outils décrits ici sont généralement disponibles dans le niveau supérieur `bin` répertoire, sinon, consultez le fichier **README** pour en savoir plus.

 [1]: http://cordova.apache.org

Pour plus d'informations sur l'interface de bas niveau qui permet aux plugins, voir Plugman à l'aide à gérer les Plugins. Pour une vue d'ensemble, consultez Application Plugins.

Si vous avez besoin d'aide avec n'importe quelle commande ci-dessous, tapez la commande le long avec la `-h` ou `-help` arguments, qui sont pris en charge par toutes les commandes et qui fournissent une description pour chacun des arguments disponibles.

## Créer une App

Le `create` commande crée un nouveau projet :

    bin/créer < chemin-à-projet >< projet-package ><-nom du projet >
    

où

*   `<path-to-project>`spécifie le répertoire souhaité le projet créé dans

*   `<project-package>`spécifie un identificateur de modèle de domaine inversé

*   `<project-name>`spécifie le nom complet de apps

**NOTE**: la `create` commande amorce installation de dépendance à travers la `npm install` commande. Selon les autorisations de répertoire et système d'installation, cela peut nécessiter des privilèges d'administrateur. S'il y a problème sur OSX/Linux, exécutez `sudo npm install` avant d'utiliser la `create` commande. Sous Windows, exécutez `npm install` dans un utilitaire de ligne de commande ouverte avec des privilèges d'administrateur.

## Créer une cible

Le `target` commande permet de gérer l'émulateur ou les appareils BlackBerry qui vous permet de tester votre application. Vous pouvez ajouter ou supprimer une cible ou définir une cible comme la cible par défaut.

### Ajouter une cible

    < chemin-à-projet >/Cordoue/cible add <name> < adresse ip > [-t |--type < périphérique | simulateur >] [-p |--mot de passe <password>] [--< périphérique-broche >]
    

où

*   `<name>`spécifie un nom unique pour la cible.

*   `<ip-address>`Spécifie l'adresse ip de l'appareil BlackBerry ou un simulateur.

*   `-p | --password <password>`spécifie le mot de passe pour le périphérique ou l'émulateur. Ceci est requis uniquement si le périphérique ou l'émulateur est protégé par mot.

*   `--pin <device-pin>`spécifie le code PIN de l'appareil BlackBerry, qui identifie cet appareil comme un hôte valide pour le jeton de débogage. Cet argument est obligatoire uniquement lorsque vous créez un jeton de débogage.

### Supprimer une cible

    < chemin-à-projet >/Cordoue/cibler supprimer <name>
    

### Définir une cible par défaut

    < chemin-à-projet >/Cordoue/cible par défaut <name>
    

## Construire l'application

Le `build` commande génère le projet comme un fichier .bar. Vous pouvez construire votre application en mode de sortie (ce qui produit un fichier .bar signé) ou en mode de débogage (qui produit un fichier .bar non signés).

### Construire l'application en Mode Release

    < chemin-à-projet >/Cordoue/du build [-k |--keystorepass <password>] [-b |--buildId <number>] [-p |--params < params-JSON-fichier >]
    

où

*   `-k | --keystorepass <password>`spécifie le mot de passe que vous définie lorsque vous avez configuré votre ordinateur pour signer les applications.

*   `-b | --buildId <number>`spécifie le numéro de version de version de votre application. En général, ce nombre doit être incrémenté de la précédente version signée. Cet argument est facultatif.

*   `-p | --params <params-JSON-file>`spécifie un fichier JSON qui contient des paramètres supplémentaires à passer à des outils en aval. Cet argument est facultatif.

### Générez le projet en Mode débogage

    < chemin-à-projet >/Cordoue/build debug [<target>] [-k |--keystorepass <password>] [-p |--params < params-JSON-fichier >] [-ll |--loglevel <error|warn|verbose>]
    

où

*   `<target>`spécifie le nom d'une cible précédemment ajouté. Si `<target>` n'est pas spécifié, la cible par défaut est utilisée, si l'un a été créé. Cet argument est uniquement nécessaire si vous souhaitez que le script pour déployer votre application sur un téléphone intelligent BlackBerry ou émulateur et vous n'avez pas créé une cible par défaut. En outre, si `<target>` est un appareil, puis cet appareil doit être connecté à votre ordinateur par connexion USB ou être connecté au même réseau WiFi que votre ordinateur.

*   `-k | --keystorepass <password>`spécifie le mot de passe que vous définie lorsque vous avez configuré votre ordinateur pour signer les applications. Ce mot de passe est également utilisé pour créer votre jeton de débogage. Cet argument est uniquement nécessaire si vous souhaitez que le script pour créer et installer le jeton de débogage pour vous.

*   `-p | --params <params-JSON-file>`spécifie un fichier JSON qui contient des paramètres supplémentaires à passer à des outils en aval.

*   `-ll | --loglevel <level>`spécifie le niveau de journalisation. Le niveau de journalisation peut être l'un des `error` , `warn` , ou`verbose`.

Si vous avez défini précédemment une cible par défaut (et précédemment installé un jeton de débogage, si cet objectif est un téléphone intelligent BlackBerry), vous pouvez exécuter le script avec aucun argument et les pochettes de textes votre app et déploie dans la cible par défaut. Par exemple :

    < chemin-à-projet >/Cordoue/build debug
    

## Exécuter l'application

Le `run` commande déploie de génération plus récente de l'application sur le périphérique spécifié de BlackBerry ou un émulateur. Pour déployer votre application, vous devez spécifier une cible pour le périphérique ou l'émulateur :

    < chemin-à-projet >/Cordoue/run <target>
    

.. .où `<target>` spécifie le nom d'une cible précédemment ajouté. Si `<target>` est un appareil, puis il doit être connecté à votre ordinateur via un câble USB, ou encore sur le même réseau WiFi que votre ordinateur.

## Gérer les Plugins

Le `target` commande vous permet d'ajouter et supprimer des plugins. Pour aller chercher un plugin hébergé localement :

    < chemin-à-projet > plugin fetch/Cordoue/< chemin-de-plugin >
    

Afficher la liste des plugins installés :

    < chemin-à-projet > plugin ls/Cordoue /
    

Ajouter un plugin :

    < chemin-à-projet > plugin/Cordoue/ajouter <name>
    

Supprimer un plugin :

    < chemin-à-projet > plugin rm/Cordoue/<name>