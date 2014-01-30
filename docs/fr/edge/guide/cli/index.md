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

# L'Interface de ligne de commande

Ce guide a pour but de vous montrer comment créer des applications et les déployer sur différentes plates-formes mobiles natives à l'aide de l'Interface en Ligne de Commande (CLI) `cordova`. Il s'agit d'un outil permettant de créer de nouveaux projets, les compiler sur différentes plates-formes et de les exécuter dans un émulateur. Vous pouvez également utiliser la CLI pour initialiser le code du projet, après quoi vous utiliseriez les SDK des différentes plates-formes pour continuer le développement.

## Prérequis

Avant d'exécuter tout outil en ligne de commande, vous devez installer le SDK correspondant à chaque plate-forme ciblée. (Voir les Guides des Plates-formes pour plus de détails.)

Afin d'ajouter le support ou de recompiler un projet pour n'importe quelle plate-forme, vous devez exécuter l'interface en ligne de commande depuis la même machine prenant en charge le SDK de la plate-forme concernée. La CLI supporte les combinaisons suivantes :

*   iOS (Mac)
*   Android (Mac, Linux)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox OS (Mac, Linux, Windows)

Sous Mac, la ligne de commande est accessible via l'application *Terminal*. Sur PC, celle-ci est disponible via l'*invite de commande* sous *accessoires*.

Plus il est probable que vous exécutiez la CLI sur différentes machines, plus il est logique de maintenir un dépôt de code source distant dont le contenu serait ensuite téléchargé vers des répertoires de travail en local.

Pour installer l'outil en ligne de commande `cordova`, procédez comme suit :

1.  Téléchargez et installez [Node.js][1]. Après installation, vous devriez pouvoir exécuter `node` ou `npm` depuis votre ligne de commande.

2.  Installez l'utilitaire `cordova`. Sous Unix, utiliser la commande additionnelle `sudo` peut être nécessaire pour permettre l'installation d'utilitaires de développement dans des répertoires aux droits restreints :
    
        $ sudo npm install -g cordova
        
    
    Le journal d'installation peut présenter des erreurs correspondant à chaque SDK de plate-forme manquant. Après installation, vous devriez être en mesure d'exécuter `cordova` depuis la ligne de commande.

 [1]: http://nodejs.org/

## Créer une application

Rendez-vous dans le répertoire où vous souhaitez conserver votre code source et exécutez une commande telle que celle-ci :

        $ cordova create hello com.example.hello HelloWorld
    

L'exécution de la commande peut prendre un certain temps, à ce stade patientez. Vous pouvez choisir d'exécuter `cordova -d` pour obtenir des informations sur la progression en temps voulu.

Le premier argument spécifie un répertoire *hello* à générer pour votre projet. Son sous-répertoire `www` contient la page d'accueil de votre application ainsi que diverses ressources, sous `css`, `js` et `img`, suivant les conventions communes de dénomination de fichier en développement Web. Le fichier `config.xml` contient des métadonnées nécessaires à la génération et la distribution de l'application.

Les deux autres arguments sont facultatifs : l'argument `com.example.hello` donne à votre projet un identificateur de type domaine inversé, `HelloWorld` définit quant à lui un texte d'affichage pour l'application. Vous pourrez modifier ces deux valeurs plus tard dans le fichier `config.xml`.

## Ajouter des plates-formes

Toutes les commandes suivantes doivent être exécutées dans le répertoire du projet ou les sous-répertoires dans sa portée :

        $ cd hello
    

Avant de pouvoir compiler le projet, vous devez spécifier un ensemble de plates-formes ciblées. La possibilité d'exécuter ces commandes dépend du support de votre machine pour chaque SDK et de l'installation préalable des SDK en question. Exécutez chacune d'entre elles sur un Mac :

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos
    

Exécutez chacune d'entre elles sur une machine sous Windows, où *wp* fait référence aux différentes versions du système d'exploitation Windows Phone :

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos
    

Exécutez cette commande pour afficher l'ensemble des plates-formes ajoutées :

        $ cordova platforms ls
    

(Notez que les commandes `platform` et `platforms` sont synonymes.)

Exécutez une des commandes synonymes suivantes afin de retirer une plate-forme :

        $ cordova platform remove blackberry10
        $ cordova platform rm android
    

L'exécution des commandes d'ajout et de suppression de plates-formes affecte le contenu du répertoire *platforms* du projet, où chaque plate-forme utilisée apparaît comme un sous-répertoire. Le répertoire source *www* est reproduit dans le sous-répertoire de chaque plate-forme, apparaissant ainsi par exemple dans `platforms/ios/www` ou `platforms/android/assets/www`. Par défaut, le fichier de configuration de chaque plateforme est configuré pour pouvoir accéder à l'ensemble des API de Cordova.

Si vous le souhaitez, vous pouvez à ce stade utiliser un SDK pour ouvrir le projet que vous venez de créer. Toutefois, les modifications que vous apporterez au projet par le SDK affecteront uniquement les fichiers associés, pas les fichiers source multi-plateforme d'origine. Utilisez cette approche si vous souhaitez simplement initialiser un projet. (Voir les Guides des Plates-formes pour plus d'informations concernant la façon de développer des applications au sein des différents SDK.) Continuez la lecture si vous souhaitez utiliser les outils de ligne de commande pour le cycle de développement complet.

## Compiler l'application

Par défaut, le script `cordova create` génère une squelette d'application Web dont la page d'accueil est le fichier `www/index.html` du projet. Modifier cette application, mais vous voulez, mais toute initialisation doit être spécifiée dans le cadre de la `deviceready` gestionnaire d'événements, référencé par défaut de`www/js/index.js`.

Exécutez la commande suivante pour compiler le projet de façon itérative :

        $ cordova build
    

Ceci a pour effet de générer un code propre à chaque plate-forme dans le sous-répertoire `platforms` du projet. Vous pouvez éventuellement restreindre la portée de chaque compilation à seulement certaines plates-formes :

        $ cordova build ios
    

La commande `cordova build` est un raccourci pour les commandes suivantes, qui, dans cet exemple, ne ciblement également qu'une seule plate-forme :

        $ cordova prepare ios
        $ cordova compile ios
    

Dans le cas présent, après l'exécution de `prepare`, vous pouvez également utiliser le SDK Xcode d'Apple comme méthode alternative de modification et de compilation du code spécifique à iOS généré par Cordova dans `platforms/ios`. La même approche est applicable pour les SDK des autres plates-formes.

## Tester l'application sur un émulateur ou un appareil

Les SDK pour plates-formes mobiles sont souvent livrés avec des émulateurs faisant tourner l'image virtuelle d'un appareil de façon à ce que vous puissiez lancer vos applications depuis un écran d'accueil et observer la manière dont celles-ci interagissent avec plusieurs fonctionnalités natives. Exécutez une commande telle que la suivante pour compiler l'application et la faire tourner dans l'émulateur d'une plate-forme donnée :

        $ cordova emulate android
    

Certaines plates-formes mobiles émulent un appareil par défaut, tel que l'iPhone pour les projets iOS. Pour les autres plates-formes, vous devrez préalablement associer un appareil à un émulateur. (Voir les Guides des Plates-forme pour davantage de détails.) Par exemple, vous devrez d'abord exécuter la commande `android` afin d'ouvrir le SDK Android, puis lancer l'image d'un appareil en particulier, qui démarrera avec son comportement par défaut :

![][2]

 [2]: img/guide/cli/android_emulate_init.png

Exécuter ensuite la commande `cordova emulate` permet d'actualiser l'image de l'émulateur pour afficher la dernière version de l'application, maintenant également disponible au lancement via l'écran d'accueil :

![][3]

 [3]: img/guide/cli/android_emulate_install.png

Ou vous pouvez brancher un appareil mobile à votre ordinateur et tester l'application directement dessus :

        $ cordova run android
    

Avant d'exécuter cette commande, vous devez activer le mode de test sur l'appareil en suivant un procédure différente pour chaque plate-forme. Dans le cas d'Android, vous devrez activer une option de **Débogage USB** et peut-être ajouter un pilote USB en fonction de votre environnement de développement. Consultez les Guides des Plates-forme pour davantage de détails sur les exigences de chaque plate-forme.

## Ajouter des fonctionnalités du Plugin

Lorsque vous compilez et visualisez un nouveau projet, l'application qui s'affiche par défaut ne fait pas vraiment grand-chose. Vous pouvez modifier cette application de bien des façons afin de tirer parti des technologies Web standard, mais vous devrez ajouter des plugins fournissant un accès aux API du noyau de Cordova afin qu'elle puisse communiquer avec diverses fonctionnalités intimement liées à l'appareil.

Un *plugin* est un peu de code additionnel fournissant une interface pour utiliser des composants natifs. Vous pouvez concevoir votre propre interface plugin, par exemple lorsque vous développez une application hybride mêlant une WebView Cordova et des composants natifs. (Voir intégration WebViews et Plugin Development Guide pour plus de détails). Plus couramment, vous ajouteriez un plugin pour permettre à l'une des caractéristiques de niveau périphérique base de Cordova, détaillées dans la référence de l'API. Une liste de ces plugins, y compris des plugins supplémentaires fournies par la Communauté, peut être trouvée à [plugins.cordova.io][4]. Vous pouvez utiliser l'interface CLI à la recherche de plugins de ce registre. Par exemple, la recherche de `bar` et `code` produit un résultat unique qui correspond à ces deux termes comme des sous-chaînes insensible à la casse :

 [4]: http://plugins.cordova.io/

        $ cordova plugin search bar code
    
        com.phonegap.plugins.barcodescanner - Scans Barcodes
    

Vous cherchez seulement le `bar` à terme les rendements et résultats supplémentaires :

        org.apache.cordova.statusbar - Cordova StatusBar Plugin
    

Le `cordova plugin add` commande nécessite vous permet de spécifier le référentiel pour le code du plugin. Voici des exemples de fonctionnalités, que vous pouvez ajouter :

*   Informations de base à propos de l'appareil (API Device) :
    
        $ cordova plugin add org.apache.cordova.device
        

*   Connexion réseau et événements liés à la batterie :
    
        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status
        

*   Accéléromètre, boussole et géolocalisation :
    
        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation
        

*   Appareil photo, lecture et capture de médias :
    
        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media
        

*   Accès aux fichiers sur l'appareil ou sur le réseau (API File) :
    
        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer
        

*   Notifications via une boîte de dialogue ou des vibrations :
    
        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        

*   Gestion des contacts :
    
        $ cordova plugin add org.apache.cordova.contacts
        

*   Mondialisation :
    
        $ cordova plugin add org.apache.cordova.globalization
        

*   Écran de chargement :
    
        $ cordova plugin add org.apache.cordova.splashscreen
        

*   Ouverture de nouvelles fenêtres de navigateur (InAppBrowser) :
    
        $ cordova plugin add org.apache.cordova.inappbrowser
        

*   Console de débogage :
    
        $ cordova plugin add org.apache.cordova.console
        

Utilisation `plugin ls` (ou `plugin list` , ou `plugin` en soi) à Découvre actuellement les plugins installés. Chacun affiche par son identificateur :

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]
    

Pour supprimer un plugin, faire référence à elle par le même identificateur qui apparaît dans la liste. Par exemple, voici comment vous enlèverait le soutien pour une console de débogage d'une version :

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same
    

Vous pouvez lot-supprimer ou ajouter des plugins en spécifiant plusieurs arguments pour chaque commande :

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device
    

## Options du Plugin avancé

Lors de l'ajout d'un plugin, plusieurs options vous permettent de spécifier où aller chercher le plugin. Les exemples ci-dessus utilisent un célèbre `registry.cordova.io` Registre, ainsi que le plugin est spécifiée par la `id` :

        $ cordova plugin add org.apache.cordova.console
    

Le `id` peut également inclure le numéro de version du plugin, reproduite après un `@` caractère. La `latest` version est un alias pour la version la plus récente. Par exemple :

        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1
    

Si le plugin n'est pas inscrite au `registry.cordova.io` mais se trouve dans un autre dépôt git, vous pouvez spécifier une URL de substitution :

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git
    

L'exemple de git ci-dessus récupère le plugin depuis la fin de la branche master, mais un autre git-Réf tel une balise ou une branche peut être ajoutée après un `#` caractère :

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0
    

Si le plugin (et ses `plugin.xml` fichier) est dans un sous-répertoire dans le repo git, vous pouvez le spécifier avec une `:` caractère. Notez que le `#` caractère est toujours nécessaire :

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir
    

Vous pouvez également combiner le git-Réf tant le sous-répertoire :

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir
    

Vous pouvez également spécifier un chemin d'accès local vers le répertoire de plugin qui contient le `plugin.xml` fichier :

        $ cordova plugin add ../my_plugin_dir
    

## À l'aide de *fusionne* pour personnaliser chaque plate-forme

Alors que Cordoue vous permet de déployer facilement une application pour nombreuses plates-formes, parfois vous avez besoin d'ajouter des personnalisations. Dans ce cas, vous ne voulez pas modifier les fichiers source dans divers `www` répertoires à l'intérieur du premier niveau `platforms` répertoire, car ils sont remplacés régulièrement avec le niveau supérieur `www` source multi-plateforme de l'annuaire.

Au lieu de cela, le niveau supérieur `merges` répertoire offre un endroit pour spécifier des actifs de déployer sur des plates-formes spécifiques. Chaque sous-répertoire spécifique à la plateforme dans `merges` reflète la structure de répertoire de la `www` l'arbre source, ce qui vous permet de substituer ou ajouter des fichiers au besoin. Par exemple, voici comment vous pourriez utilise `merges` pour augmenter la taille de police par défaut pour les appareils Android :

*   Modifiez le fichier `www/index.html` en lui ajoutant un lien vers un fichier CSS supplémentaire nommé par exemple `overrides.css` :
    
        <link rel="stylesheet" type="text/css" href="css/overrides.css" />
        

*   Créez éventuellement un fichier `www/css/overrides.css` vide, qui sera chargé pour toutes les autres plates-formes qu'Android, empêchant ainsi une erreur due à un fichier manquant.

*   Créez un sous-répertoire nommé `css` dans `merges/android`, puis ajoutez y le fichier `overrides.css` correspondant. Ce fichier doit contenir une règle CSS remplaçant la taille de police de 12 points par défaut spécifiée dans `www/css/index.css`, par exemple :
    
        body { font-size:14px; }
        

Lorsque vous régénérez le projet, la version Android dispose de la taille de police personnalisée, tandis que d'autres restent inchangés.

Vous pouvez également utiliser `merges` pour ajouter des fichiers non présents dans l'original `www` répertoire. Par exemple, une application peut intégrer un *bouton* graphique à l'interface d'iOS, stocké dans `merges/ios/img/back_button.png` , tandis que la version Android peut au lieu de capter `backbutton` événements de la touche correspondante de la quincaillerie.

## Aide commandes

Cordova dispose d'un couple de commandes globales, qui peuvent vous aider si vous êtes coincé ou rencontrez un problème. Le `help` commande affiche toutes les commandes disponibles de Cordova et leur syntaxe :

    $ cordova help
    $ cordova        # same
    

Le `info` commande produit une liste de détails potentiellement utiles, tels que les plates-formes actuellement installés et plugins, des versions pour chaque plate-forme SDK et versions de la CLI et `node.js` :

    $ cordova info
    

Il présente l'information à l'écran et capture la sortie dans un local `info.txt` fichier.

**NOTE**: actuellement, seuls les détails sur iOS et Android plates-formes sont disponibles.

## Mise à jour de Cordova et votre projet

Après avoir installé la `cordova` utilitaire, vous pouvez toujours mettre à jour elle vers la dernière version en exécutant la commande suivante :

        $ sudo npm update -g cordova
    

Utilisez cette syntaxe pour installer une version spécifique :

        $ sudo npm install -g cordova@3.1.0
    

Exécutez `cordova -v` pour voir quelle version est en cours d'exécution. Exécutez le `npm
info` commande pour obtenir une liste plus longue qui inclut la version actuelle ainsi que d'autres numéros de version disponible :

        $ npm info cordova
    

Cordova 3.0 est la première version à supporter l'interface de ligne de commande décrite dans cette section. Si vous mettez à jour depuis une version antérieure à 3.0, vous devez créer un nouveau projet, tel que décrit ci-dessus, puis copiez les actifs les plus âgés de l'application dans le niveau supérieur `www` répertoire. Le cas échéant, plus amples détails sur la mise à niveau vers 3.0 sont disponibles dans les Guides de la plate-forme. Une fois que vous mettez à niveau vers le `cordova` Command-line interface et utilisation `npm update` pour rester à jour, les plus longues procédures décrits là ne sont plus pertinentes.

Cordova 3.0 + peut-être encore exiger des divers changements à la structure de répertoire au niveau du projet et d'autres dépendances. Après avoir exécuté la `npm` commande ci-dessus à jour Cordoue elle-même, vous devrez peut-être les ressources de votre projet soient conformes aux exigences de la version la plus récente. Exécutez une commande semblable à la suivante pour chaque plate-forme que vous générez :

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.