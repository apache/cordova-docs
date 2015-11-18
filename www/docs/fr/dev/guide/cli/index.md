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

title: L'Interface en ligne de commande
---

# L'Interface en ligne de commande

Ce guide a pour but de vous montrer comment créer des applications et les déployer sur différentes plates-formes mobiles natives à l'aide de l'Interface en Ligne de Commande (CLI) `cordova`. Cet outil vous permet de créer de nouveaux projets, les construire sur différentes plates-formes et exécuter sur des appareils réels ou au sein d'émulateurs. La CLI est le principal outil à utiliser pour le multi-plateforme de workflow décrit dans la vue d'ensemble. Dans le cas contraire, vous pouvez également utiliser la CLI pour initialiser le code du projet, puis basculez vers SDK et des outils de coquille pour la poursuite du développement des différentes plates-formes.

## Prérequis

Avant d'exécuter tout outil en ligne de commande, vous devez installer le SDK correspondant à chaque plate-forme ciblée. (Voir les Guides des Plates-formes pour plus de détails.)

Afin d'ajouter le support ou de recompiler un projet pour n'importe quelle plate-forme, vous devez exécuter l'interface en ligne de commande depuis la même machine prenant en charge le SDK de la plate-forme concernée. La CLI supporte les combinaisons suivantes :

*   iOS (Mac)
*   Amazon Fire OS (Mac, Linux, Windows)
*   Android (Mac, Linux, Windows)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 8 (Windows)
*   Windows (Windows)
*   Firefox OS (Mac, Linux, Windows)

Sous Mac, la ligne de commande est accessible via l'application *Terminal*. Sur PC, celle-ci est disponible via l'*invite de commande* sous *accessoires*.

**NOTE**: pour les plates-formes Windows uniquement, vous pouvez toujours faire votre développement sur matériel Mac en exécutant Windows dans un environnement de machine virtuelle ou en mode dual-boot. Pour les options disponibles, consultez le Guide de plate-forme Windows Phone 8 ou Windows Platform.

Plus il est probable que vous exécutez le CLI de machines différentes, plus il est logique de maintenir un référentiel de code source éloignée, dont les actifs vous tirez vers le bas pour les répertoires de travail local.

## Installation de la CLI de Cordova

L'outil de ligne de commande de Cordova est distribué comme un paquet de npm dans un format prêt à l'emploi. Il n'est pas nécessaire de compiler depuis les sources.

Pour installer le `cordova` de ligne de commande outil, procédez comme suit :

1.  Télécharger et installer [Node.js][1]. Après installation, vous devriez être capable d'appeler `node` et `npm` sur votre ligne de commande. Si vous le souhaitez, vous pouvez éventuellement utiliser un outil tel que `nvm` ou `nave` pour gérer votre installation de Node.js.

2.  Téléchargez et installez un [client git][2], si vous n'avez pas déjà un. Après installation, vous devriez être en mesure d'invoquer `git` sur votre ligne de commande. Même si vous n'utilisez pas `git` manuellement, la CLI l'utilise dans les coulisses pour télécharger certains actifs lorsque vous créez un nouveau projet.

3.  Installer le `cordova` à l'aide du module `npm` utilitaire de Node.js. Le `cordova` module sera automatiquement téléchargée par le `npm` utilitaire.

 [1]: http://nodejs.org/
 [2]: http://git-scm.com/

*   sur OS X et Linux :
    
            $ sudo npm install -g cordova
        
    
    Sur OS X et Linux, faisant précéder la `npm` commande avec `sudo` peut être nécessaire d'installer cette évolution utilitaire dans autrement limité répertoires tels que `/usr/local/share` . Si vous utilisez l'outil optionnel nvm/nef ou avez accès en écriture sur le répertoire d'installation, vous pourrez omettre la `sudo` préfixe. Il y a [plus de conseils][3] sur l'utilisation `npm` sans `sudo` , si vous désirez le faire.

*   sur Windows :
    
            C:\>npm install -g cordova
        
    
    Le `-g` option ci-dessus indique `npm` pour installer `cordova` dans le monde. Dans le cas contraire il sera installé dans le `node_modules` sous-répertoire du répertoire de travail courant.
    
    Vous devrez peut-être ajouter le `npm` répertoire à votre `PATH` pour BENEFICIER installés dans le monde `npm` modules. Sous Windows, `npm` peut habituellement être trouvé à `C:\Users\username\AppData\Roaming\npm` . Sur OS X et Linux, il peut généralement être trouvé à`/usr/local/share/npm`.
    
    Le journal d'installation peut générer des erreurs pour n'importe quelle plateforme désinstallé SDK.
    
    Après installation, vous devriez être en mesure d'exécuter `cordova` sur la ligne de commande avec aucun argument et il doit imprimer le texte d'aide.

 [3]: http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears

## Créer l'application

Allez dans le répertoire où vous conservez votre code source et exécutez une commande comme suit :

        $ cordova create hello com.example.hello HelloWorld
    

Il peut prendre un certain temps pour la commande pour terminer, alors soyez patient. L'exécution de la commande avec le `-d` option affiche des informations sur ses progrès.

Le premier argument *Bonjour* spécifie un répertoire à générer pour votre projet. Ce répertoire ne devrait pas déjà exister, Cordova il créera pour vous. Sa `www` sous-répertoire maisons page d'accueil de votre application, ainsi que diverses ressources sous `css` , `js` , et `img` , qui suivent les conventions de dénomination de fichier du développement des web commun. Ces actifs seront stockées sur le système de fichiers local de l'appareil, n'a ne pas servi à distance. Le `config.xml` fichier contient des métadonnées importantes nécessaires pour générer et distribuer l'application.

Le deuxième argument `com.example.hello` met à votre projet avec un identificateur de domaine inverse-style. Cet argument est facultatif, mais seulement si vous omettez également le troisième argument, puisque les arguments sont positionnels. Vous pouvez modifier cette valeur par la suite dans le `config.xml` du fichier, mais sachez qu'il peut y avoir de code généré en dehors de `config.xml` à l'aide de cette valeur, comme les noms de package Java. La valeur par défaut est `io.cordova.hellocordova` , mais il est recommandé que vous sélectionnez une valeur appropriée.

Le troisième argument `HelloWorld` fournit le titre d'affichage de l'application. Cet argument est facultatif. Vous pouvez modifier cette valeur par la suite dans le `config.xml` du fichier, mais sachez qu'il peut y avoir de code généré en dehors de `config.xml` à l'aide de cette valeur, tels que les noms de classes Java. La valeur par défaut est `HelloCordova` , mais il est recommandé que vous sélectionnez une valeur appropriée.

## Ajouter des plates-formes

Toutes les commandes suivantes doivent être exécutées dans le répertoire du projet ou les sous-répertoires dans sa portée :

        $ cd hello
    

Avant que vous pouvez générer le projet, vous devez spécifier un jeu de plates-formes cibles. Votre capacité d'exécuter ces commandes dépend de savoir si votre ordinateur prend en charge chaque SDK, et si vous avez déjà installé chaque SDK. Courir à chacun d'entre eux d'un Mac :

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos
    

Courir à chacun d'entre eux depuis une machine Windows, où *wp* se réfère aux différentes versions du système d'exploitation Windows Phone :

        plate-forme cordova $ ajouter wp8 $ cordova plate-forme ajouter windows plate-forme cordova $ ajouter amazon-fireos plateforme de cordova $ ajouter $ android plate-forme cordova ajoutez blackberry10 $ cordova plate-forme ajouter firefoxos
    

Exécutez-le pour vérifier votre noyau de plateformes :

        $ cordova platforms ls
    

(Note du `platform` et `platforms` commandes sont synonymes.)

Exécutez une des commandes suivantes synonymes d'enlever une plate-forme :

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android
    

Exécution de commandes pour ajouter ou supprimer des affects de plates-formes le contenu du répertoire de *plates-formes* du projet, où chaque plate-forme spécifiée apparaît comme un sous-répertoire. Le répertoire de source *www* est reproduit dans le sous-répertoire de la plate-forme, qui apparaît par exemple dans `platforms/ios/www` ou `platforms/android/assets/www` . Parce que la CLI constamment des copies des fichiers du dossier source *www* , vous devez uniquement modifier ces fichiers et pas ceux situés dans les sous-répertoires de *plates-formes* . Si vous utilisez un logiciel de contrôle de version, vous devez ajouter ce dossier *www* source, ainsi que le dossier *se confond* , à votre système de contrôle de version. (On trouvera dans la section personnaliser chaque plate-forme ci-dessous plus d'informations sur le dossier *fusionne* .)

**Avertissement**: lorsque vous utilisez l'interface CLI pour générer votre application, vous devriez modifier *n'est pas* tous les fichiers dans le `/platforms/` répertoire sauf si vous savez ce que vous faites, ou si la documentation spécifie autrement. Les fichiers dans ce répertoire sont systématiquement remplacés lors de la préparation des demandes de construction, ou lorsque les plugins sont réinstallés.

Si vous le souhaitez à ce stade, vous pouvez utiliser un SDK comme Eclipse ou Xcode pour ouvrir le projet que vous avez créé. Vous devez ouvrir l'ensemble dérivé de l'actif de la `/platforms/` Répertoire de développer avec un SDK. C'est parce que les fichiers de métadonnées spécifiques de SDK sont stockés dans le cas échéant `/platform/` sous-répertoire. (Voir les [Guides de la plate-forme](../platforms/index.html) pour plus d'informations sur la façon de développer des applications au sein de chaque IDE.) Utilisez cette approche si vous souhaitez simplement initialiser un projet à l'aide de la CLI, puis passer à un SDK pour le travail indigène.

Lire sur si vous souhaitez utiliser l'approche de flux de travail multi-plateforme (CLI) pour le cycle de développement complet.

## Construire l'application

Par défaut, le `cordova create` script génère une squelettique application web dont la page d'accueil est du projet `www/index.html` fichier. Modifier cette application, mais vous voulez, mais toute initialisation doit être spécifiée dans le cadre de la `[deviceready](../../cordova/events/events.deviceready.html)` gestionnaire d'événements, référencé par défaut de`www/js/index.js`.

Exécutez la commande suivante pour générer itérativement le projet :

        $ cordova build
    

Cela génère un code spécifique à la plateforme au sein du projet `platforms` sous-répertoire. Vous pouvez éventuellement restreindre la portée de chaque génération de plates-formes spécifiques :

        $ cordova build ios
    

Le `cordova build` commande est un raccourci pour la suivante, qui, dans cet exemple, est également visé à une plate-forme unique :

        $ cordova prepare ios
        $ cordova compile ios
    

Dans ce cas, une fois que vous exécutez `prepare` , vous pouvez utiliser Apple Xcode SDK comme alternative pour modifier et compiler le code spécifique à la plateforme qui génère de Cordova dans `platforms/ios` . Vous pouvez utiliser la même approche avec les kits de développement logiciel des autres plates-formes.

## Tester l'application sur un émulateur ou un périphérique

Kits de développement logiciel pour les plates-formes mobiles sont souvent livrés avec les émulateurs qui exécutent un élément image, afin que vous pouvez lancer l'application depuis l'écran d'accueil et voir comment il interagit avec de nombreuses fonctionnalités de la plate-forme. Exécuter une commande telle que la suivante pour reconstruire l'app et il découvre au sein de l'émulateur une spécifique de la plate-forme :

        $ cordova emulate android
    

Certaines plates-formes mobiles émulent un périphérique par défaut, tels que l'iPhone pour les projets de l'iOS. Pour d'autres plateformes, vous devrez tout d'abord associer un périphérique avec un émulateur.

**NOTE**: support d'émulateur n'est actuellement pas disponible pour Amazon Fire OS.

(Voir les [Guides de la plate-forme](../platforms/index.html) pour plus de détails.) Par exemple, vous pouvez d'abord exécuter la `android` commande pour lancer le SDK Android, puis exécutez une image de périphérique particulier, dont il lance selon son comportement par défaut :

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Suivi auprès du `cordova emulate` commande actualise l'image de l'émulateur pour afficher la dernière application, qui est maintenant disponible pour le lancement de l'écran d'accueil :

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativement, vous pouvez brancher le combiné dans votre ordinateur et tester l'application directement :

        $ cordova run android
    

Avant d'exécuter cette commande, vous devez mettre en place le dispositif de test, suivant des procédures qui varient pour chaque plate-forme. Dans les appareils Android et OS feu Amazon, vous devrez activer une option de **Débogage USB** sur l'appareil et peut-être ajouter un pilote USB selon votre environnement de développement. Consultez les [Guides de la plate-forme](../platforms/index.html) pour plus de détails sur les exigences de chaque plateforme.

## Ajouter des fonctionnalités du Plugin

Lorsque vous générez et découvre un nouveau projet, l'application par défaut qui s'affiche ne fait pas grand chose. Vous pouvez modifier l'application de plusieurs façons de tirer parti des technologies web standard, mais l'application de communiquer étroitement avec diverses fonctions au niveau du périphérique, vous devez ajouter des plugins qui permettent d'accéder au noyau Cordova APIs.

Un *plugin* est un peu de code complémentaire qui fournit une interface pour les composants natifs. Vous pouvez concevoir votre propre interface plugin, par exemple, lorsque vous concevez une application hybride qui mêle une Cordova WebView composants natifs. (Voir intégration WebViews et [Plugin Development Guide][6] pour plus de détails). Habituellement, vous devez ajouter un plugin pour permettre à l'une des caractéristiques de niveau périphérique base de Cordova, détaillées dans la référence de l'API.

 [6]: guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide

Depuis la version 3.0, lorsque vous créez un projet de Cordova il n'a pas les plug-ins présents. C'est le nouveau comportement par défaut. Les plug-ins que vous désirez, même les plugins de base, doivent être ajoutés explicitement.

On trouvera une liste de ces plugins, y compris les plugins tiers supplémentaires fournies par la Communauté, dans le registre à [plugins.cordova.io][7]. Vous pouvez utiliser l'interface CLI à la recherche de plugins de ce registre. Par exemple, la recherche de `bar` et `code` produit un résultat unique qui correspond à ces deux termes comme des sous-chaînes insensible à la casse :

 [7]: http://plugins.cordova.io/

        $ cordova plugin search bar code
    
        com.phonegap.plugins.barcodescanner - Scans Barcodes
    

Vous cherchez seulement le `bar` à terme les rendements et résultats supplémentaires :

        cordova-plugin-statusbar - Cordova StatusBar Plugin
    

Le `cordova plugin add` commande nécessite vous permet de spécifier le référentiel pour le code du plugin. Voici des exemples d'utilisation de l'interface CLI pour ajouter des fonctionnalités à l'application :

*   Informations de base périphérique (Device API) :
    
        $ cordova plugin add cordova-plugin-device
        

*   Connexion réseau et événements de la batterie :
    
        $ cordova plugin add cordova-plugin-network-information
        $ cordova plugin add cordova-plugin-battery-status
        

*   Accéléromètre, boussole et géolocalisation :
    
        $ cordova plugin add cordova-plugin-device-motion
        $ cordova plugin add cordova-plugin-device-orientation
        $ cordova plugin add cordova-plugin-geolocation
        

*   Appareil photo, lecture et Capture :
    
        $ cordova plugin add cordova-plugin-camera
        $ cordova plugin add cordova-plugin-media-capture
        $ cordova plugin add cordova-plugin-media
        

*   Accéder aux fichiers sur un périphérique réseau (fichier API) :
    
        $ cordova plugin add cordova-plugin-file
        $ cordova plugin add cordova-plugin-file-transfer
        

*   Notification via la boîte de dialogue ou de vibration :
    
        $ cordova plugin add cordova-plugin-dialogs
        $ cordova plugin add cordova-plugin-vibration
        

*   Contacts :
    
        $ cordova plugin add cordova-plugin-contacts
        

*   Mondialisation :
    
        $ cordova plugin add cordova-plugin-globalization
        

*   SplashScreen :
    
        $ cordova plugin add cordova-plugin-splashscreen
        

*   Fenêtres ouvertes du navigateur nouvelle (InAppBrowser) :
    
        $ cordova plugin add cordova-plugin-inappbrowser
        

*   Console de débogage :
    
        $ cordova plugin add cordova-plugin-console
        

**NOTE**: le CLI ajoute le code du plugin comme il convient pour chaque plate-forme. Si vous souhaitez développer avec les outils de bas niveau coque ou plate-forme SDK tel que discuté dans l'aperçu, vous devez exécuter l'utilitaire Plugman pour ajouter des plugins séparément pour chaque plate-forme. (Pour plus d'informations, voir Plugman à l'aide à gérer les Plugins).

Utilisation `plugin ls` (ou `plugin list` , ou `plugin` en soi) à Découvre actuellement les plugins installés. Chacun affiche par son identificateur :

        $ cordova plugin ls    # or 'plugin list'
        [ 'cordova-plugin-console' ]
    

Pour supprimer un plugin, faire référence à elle par le même identificateur qui apparaît dans la liste. Par exemple, voici comment vous enlèverait le soutien pour une console de débogage d'une version :

        $ cordova plugin rm cordova-plugin-console
        $ cordova plugin remove cordova-plugin-console    # same
    

Vous pouvez lot-supprimer ou ajouter des plugins en spécifiant plusieurs arguments pour chaque commande :

        $ cordova plugin add cordova-plugin-console cordova-plugin-device
    

## Options du Plugin avancé

Lors de l'ajout d'un plugin, plusieurs options vous permettent de spécifier où aller chercher le plugin. Les exemples ci-dessus utilisent un célèbre `registry.cordova.io` Registre, ainsi que le plugin est spécifiée par la `id` :

        $ cordova plugin add cordova-plugin-console
    

Le `id` peut également inclure le numéro de version du plugin, reproduite après un `@` caractère. La `latest` version est un alias pour la version la plus récente. Par exemple :

        $ cordova plugin add cordova-plugin-console@latest
        $ cordova plugin add cordova-plugin-console@0.2.1
    

Si le plugin n'est pas inscrite au `registry.cordova.io` mais se trouve dans un autre dépôt git, vous pouvez spécifier une URL de substitution :

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git
    

L'exemple de git ci-dessus récupère le plugin depuis la fin de la branche master, mais un autre git-Réf tel une balise ou une branche peut être ajoutée après un `#` caractère :

Installer à partir d'une balise :

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0
    

ou une succursale :

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#CB-8438cordova-plugin-console
    

ou git-Réf pourrait également être une validation particulière :

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#f055daec45575bf08538f885e09c85a0eba363ff
    

Si le plugin (et son fichier `plugin.xml` ) sont dans un sous-répertoire dans le repo git, vous pouvez le spécifier avec un caractère `:` . Notez que le caractère `#` est toujours nécessaire :

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir
    

Vous pouvez également combiner le git-Réf tant le sous-répertoire :

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir
    

Vous pouvez également spécifier un chemin d'accès local vers le répertoire de plugin qui contient le fichier `plugin.xml` :

        $ cordova plugin add ../my_plugin_dir
    

## À l'aide de *fusionne* pour personnaliser chaque plate-forme

Alors que Cordoue vous permet de déployer facilement une application pour de nombreuses plateformes différentes, parfois vous avez besoin d'ajouter des personnalisations. Dans ce cas, vous ne voulez pas modifier les fichiers source dans divers répertoires `www` dans le répertoire de niveau supérieur de `platforms` , parce qu'ils sont régulièrement remplacés par source multi-plateforme du répertoire niveau supérieur `www` .

Au lieu de cela, le répertoire de niveau supérieur `merges` offre un endroit pour spécifier des actifs de déployer sur des plates-formes spécifiques. Chaque sous-répertoire `merges`, correspondant à une plate-forme donnée, reflète la structure du répertoire source `www`, ce qui vous permet de surcharger ou ajouter des fichiers au besoin. Par exemple, voici comment vous pourriez utilisations `merges` pour augmenter la taille de police par défaut pour les appareils Android et Amazon Fire OS :

*   Modifier la `www/index.html` fichier, en ajoutant un lien vers un fichier CSS supplémentaire, `overrides.css` dans ce cas :
    
        <link rel="stylesheet" type="text/css" href="css/overrides.css" />
        

*   Créer éventuellement un vide `www/css/overrides.css` fichier, qui s'applique pour toutes les versions non-Android, empêchant une erreur de fichier manquant.

*   Créer un `css` sous-répertoire dans `merges/android` , puis ajoutez un correspondant `overrides.css` fichier. Spécifier CSS qui remplace la taille de police de 12 points par défaut spécifiée dans `www/css/index.css` , par exemple :
    
        body { font-size:14px; }
        

Lorsque vous régénérez le projet, la version Android dispose de la taille de police personnalisée, tandis que d'autres restent inchangés.

Vous pouvez également utiliser `merges` pour ajouter des fichiers non présents dans le répertoire original de `www` . Par exemple, une application peut intégrer un *bouton* graphique à l'interface d'iOS, stocké dans `merges/ios/img/back_button.png`, tandis que la version Android peut au lieu de capter `ButtonBack` événements depuis le bouton matériel correspondant.

## Aide commandes

Cordoue possède quelques commandes globales, qui peuvent vous aider si vous êtes coincé ou rencontrez un problème. La commande `help` affiche toutes les commandes disponibles de Cordova et leur syntaxe :

    $ cordova help
    $ cordova        # same
    

En outre, vous pouvez obtenir une aide plus détaillée sur une commande spécifique. Par exemple :

    $ cordova run --help
    

La commande `infos` produit une liste des informations potentiellement utiles, tels que les plates-formes actuellement installés et plugins, des versions pour chaque plate-forme SDK et versions de la CLI et `node.js`:

    $ cordova info
    

Celle-ci présente l'information à l'écran et capture la sortie dans un fichier local `info.txt` .

**NOTE**: actuellement, seuls les détails sur iOS et Android plates-formes sont disponibles.

## Mise à jour de Cordova et votre projet

Après l'installation de l'utilitaire de `cordova` , vous pouvez toujours mettre à jour vers la dernière version en exécutant la commande suivante :

        $ sudo npm update -g cordova
    

Utilisez cette syntaxe pour installer une version spécifique :

        $ sudo npm install -g cordova@3.1.0-0.2.0
    

Exécutez `cordova -v` pour voir quelle version est en cours d'exécution. Exécutez la commande `npm info` pour obtenir une liste plus longue qui inclut la version actuelle ainsi que d'autres numéros de version disponible :

        $ npm info cordova
    

Cordova 3.0 est la première version à supporter l'interface de ligne de commande décrite dans cette section. Si vous mettez à jour depuis une version antérieure à 3.0, vous devez créer un nouveau projet, tel que décrit ci-dessus, puis copiez les actifs les plus âgés de l'application dans le répertoire de niveau supérieur `www` . Le cas échéant, plus amples détails au sujet de la mise à niveau vers 3.0 sont disponibles dans les [Guides de la plate-forme](../platforms/index.html). Une fois que vous passer à l'interface de ligne de commande de `cordova` et utilisez `mise à jour de la NGP` se pour tenir au courant, les plus longues procédures décrits là ne sont plus pertinentes.

Cordova 3.0 + peut-être encore exiger des divers changements à la structure de répertoire au niveau du projet et les autres dépendances. Après avoir exécuté la commande `NGP` ci-dessus pour mettre à jour de Cordoue elle-même, vous devrez peut-être s'assurer que les ressources de votre projet sont conformes aux exigences de la version la plus récente. Exécutez une commande semblable à la suivante pour chaque plate-forme que vous générez :

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
