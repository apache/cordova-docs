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

# L'Interface en ligne de commande

Ce guide a pour but de vous montrer comment créer des applications et les déployer sur différentes plates-formes mobiles natives à l'aide de l'Interface en Ligne de Commande (CLI) `cordova`. Cet outil vous permet de créer de nouveaux projets, les construire sur différentes plates-formes et exécuter sur des appareils réels ou au sein d'émulateurs. La CLI est le principal outil à utiliser pour le multi-plateforme de workflow décrit dans la vue d'ensemble. Dans le cas contraire, vous pouvez également utiliser la CLI pour initialiser le code du projet, puis basculez vers SDK et des outils de coquille pour la poursuite du développement des différentes plates-formes.

## Prérequis

Avant d'exécuter tout outil en ligne de commande, vous devez installer le SDK correspondant à chaque plate-forme ciblée. (Voir les Guides des Plates-formes pour plus de détails.)

Afin d'ajouter le support ou de recompiler un projet pour n'importe quelle plate-forme, vous devez exécuter l'interface en ligne de commande depuis la même machine prenant en charge le SDK de la plate-forme concernée. La CLI supporte les combinaisons suivantes :

*   iOS (Mac)
*   Amazon Fire OS (Mac, Linux, Windows)
*   Android (Mac, Linux)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox OS (Mac, Linux, Windows)

Sous Mac, la ligne de commande est accessible via l'application *Terminal*. Sur PC, celle-ci est disponible via l'*invite de commande* sous *accessoires*.

**NOTE**: pour les plates-formes Windows uniquement, vous pouvez toujours faire votre développement sur matériel Mac en exécutant Windows dans un environnement de machine virtuelle ou en mode dual-boot. Pour plus d'options disponibles, consultez le Guide de la plate-forme Windows Phone ou le Guide de la plateforme Windows 8.

Plus il est probable que vous exécutez le CLI de machines différentes, plus il est logique de maintenir un référentiel de code source éloignée, dont les actifs vous tirez vers le bas pour les répertoires de travail local.

Pour installer le `cordova` de ligne de commande outil, procédez comme suit :

1.  Téléchargez et installez [Node.js][1]. Après installation, vous devriez pouvoir exécuter `node` ou `npm` depuis votre ligne de commande.

2.  Installez l'utilitaire `cordova`. Sous Unix, utiliser la commande additionnelle `sudo` peut être nécessaire pour permettre l'installation d'utilitaires de développement dans des répertoires aux droits restreints :

        $ sudo npm install -g cordova


    Le journal d'installation peut présenter des erreurs correspondant à chaque SDK de plate-forme manquant. Après installation, vous devriez être en mesure d'exécuter `cordova` depuis la ligne de commande.

    **NOTE**: le `-g` option ci-dessus indique `npm` pour installer cordova à l'échelle mondiale. Vous devrez peut-être ajouter le `npm` répertoire à votre `PATH` pour BENEFICIER installés dans le monde `npm` modules. Sous Windows, `npm` peut habituellement être trouvé à `C:\Users\username\AppData\Roaming\npm` et sur Unix à`/usr/local/share/npm`.

 [1]: http://nodejs.org/

## Créer une application

Allez dans le répertoire où vous conservez votre code source et exécutez une commande comme suit :

        $ cordova create hello com.example.hello HelloWorld


Il peut prendre un certain temps pour la commande pour terminer, alors soyez patient. L'exécution de la commande avec le `-d` option affiche des informations sur ses progrès.

Le premier argument *Bonjour* spécifie un répertoire à générer pour votre projet. Ce répertoire ne devrait pas déjà exister, Cordova il créera pour vous. Sa `www` sous-répertoire maisons page d'accueil de votre application, ainsi que diverses ressources sous `css` , `js` , et `img` , qui suivent les conventions de dénomination de fichier du développement des web commun. Le `config.xml` fichier contient des métadonnées importantes nécessaires pour générer et distribuer l'application.

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

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Exécutez-le pour vérifier votre noyau de plateformes :

        $ cordova platforms ls


(Note du `platform` et `platforms` commandes sont synonymes.)

Exécutez une des commandes suivantes synonymes d'enlever une plate-forme :

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


Exécution de commandes pour ajouter ou supprimer des affects de plates-formes le contenu du répertoire de *plates-formes* du projet, où chaque plate-forme spécifiée apparaît comme un sous-répertoire. Le répertoire de source *www* est reproduit dans le sous-répertoire de la plate-forme, qui apparaît par exemple dans `platforms/ios/www` ou `platforms/android/assets/www` . Parce que la CLI constamment des copies des fichiers du dossier source *www* , vous devez uniquement modifier ces fichiers et pas ceux situés dans les sous-répertoires de *plates-formes* . Si vous utilisez un logiciel de contrôle de version, vous devez ajouter ce dossier *www* source, ainsi que le dossier *se confond* , à votre système de contrôle de version. (On trouvera dans la section personnaliser chaque plate-forme ci-dessous plus d'informations sur le dossier *fusionne* .)

**Avertissement**: lorsque vous utilisez l'interface CLI pour générer votre application, vous devriez modifier *n'est pas* tous les fichiers dans le `/platforms/` répertoire sauf si vous savez ce que vous faites, ou si la documentation spécifie autrement. Les fichiers dans ce répertoire sont systématiquement remplacés lors de la préparation des demandes de construction, ou lorsque les plugins sont réinstallés.

Si vous le souhaitez à ce stade, vous pouvez utiliser un SDK comme Eclipse ou Xcode pour ouvrir le projet que vous avez créé. Vous devez ouvrir l'ensemble dérivé de l'actif de la `/platforms/` Répertoire de développer avec un SDK. C'est parce que les fichiers de métadonnées spécifiques de SDK sont stockés dans le cas échéant `/platform/` sous-répertoire. (Voir les Guides de la plate-forme pour plus d'informations sur la façon de développer des applications au sein de chaque IDE.) Utilisez cette approche si vous souhaitez simplement initialiser un projet à l'aide de la CLI, puis passer à un SDK pour le travail indigène.

Lire sur si vous souhaitez utiliser l'approche de flux de travail multi-plateforme (CLI) pour le cycle de développement complet.

## Compiler l'application

Par défaut, le `cordova create` script génère une squelettique application web dont la page d'accueil est du projet `www/index.html` fichier. Modifier cette application, mais vous voulez, mais toute initialisation doit être spécifiée dans le cadre de la `deviceready` gestionnaire d'événements, référencé par défaut de`www/js/index.js`.

Exécutez la commande suivante pour générer itérativement le projet :

        $ cordova build


Cela génère un code spécifique à la plateforme au sein du projet `platforms` sous-répertoire. Vous pouvez éventuellement restreindre la portée de chaque génération de plates-formes spécifiques :

        $ cordova build ios


Le `cordova build` commande est un raccourci pour la suivante, qui, dans cet exemple, est également visé à une plate-forme unique :

        $ cordova prepare ios
        $ cordova compile ios


Dans ce cas, une fois que vous exécutez `prepare` , vous pouvez utiliser Apple Xcode SDK comme alternative pour modifier et compiler le code spécifique à la plateforme qui génère de Cordova dans `platforms/ios` . Vous pouvez utiliser la même approche avec les kits de développement logiciel des autres plates-formes.

## Tester l'application sur un émulateur ou un appareil

Kits de développement logiciel pour les plates-formes mobiles sont souvent livrés avec les émulateurs qui exécutent un élément image, afin que vous pouvez lancer l'application depuis l'écran d'accueil et voir comment il interagit avec de nombreuses fonctionnalités de la plate-forme. Exécuter une commande telle que la suivante pour reconstruire l'app et il découvre au sein de l'émulateur une spécifique de la plate-forme :

        $ cordova emulate android


Certaines plates-formes mobiles émulent un périphérique par défaut, tels que l'iPhone pour les projets de l'iOS. Pour d'autres plateformes, vous devrez tout d'abord associer un périphérique avec un émulateur.

**NOTE**: support d'émulateur n'est actuellement pas disponible pour Amazon Fire OS.

(Voir les Guides de la plate-forme pour plus de détails.) Par exemple, vous pouvez d'abord exécuter la `android` commande pour lancer le SDK Android, puis exécutez une image de périphérique particulier, dont il lance selon son comportement par défaut :

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Suivi auprès du `cordova emulate` commande actualise l'image de l'émulateur pour afficher la dernière application, qui est maintenant disponible pour le lancement de l'écran d'accueil :

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativement, vous pouvez brancher le combiné dans votre ordinateur et tester l'application directement :

        $ cordova run android


Avant d'exécuter cette commande, vous devez mettre en place le dispositif de test, suivant des procédures qui varient pour chaque plate-forme. Dans les appareils Android et OS feu Amazon, vous devrez activer une option de **Débogage USB** sur l'appareil et peut-être ajouter un pilote USB selon votre environnement de développement. Consultez les Guides de la plate-forme pour plus de détails sur les exigences de chaque plateforme.

## Ajouter des fonctionnalités du Plugin

Lorsque vous générez et découvre un nouveau projet, l'application par défaut qui s'affiche ne fait pas grand chose. Vous pouvez modifier l'application de plusieurs façons de tirer parti des technologies web standard, mais l'application de communiquer étroitement avec diverses fonctions au niveau du périphérique, vous devez ajouter des plugins qui permettent d'accéder au noyau Cordova APIs.

Un *plugin* est un peu de code complémentaire qui fournit une interface pour les composants natifs. Vous pouvez concevoir votre propre interface plugin, par exemple, lorsque vous concevez une application hybride qui mêle une Cordova WebView composants natifs. (Voir intégration WebViews et Plugin Development Guide pour plus de détails). Habituellement, vous devez ajouter un plugin pour permettre à l'une des caractéristiques de niveau périphérique base de Cordova, détaillées dans la référence de l'API. Une liste de ces plugins, y compris des plugins supplémentaires fournies par la Communauté, peut être trouvée à [plugins.cordova.io][4]. Vous pouvez utiliser l'interface CLI à la recherche de plugins de ce registre. Par exemple, la recherche de `bar` et `code` produit un résultat unique qui correspond à ces deux termes comme des sous-chaînes insensible à la casse :

 [4]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


Vous cherchez seulement le `bar` à terme les rendements et résultats supplémentaires :

        org.apache.cordova.statusbar - Cordova StatusBar Plugin


Le `cordova plugin add` commande nécessite vous permet de spécifier le référentiel pour le code du plugin. Voici des exemples d'utilisation de l'interface CLI pour ajouter des fonctionnalités à l'application :

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


**NOTE**: le CLI ajoute le code du plugin comme il convient pour chaque plate-forme. Si vous souhaitez développer avec les outils de bas niveau coque ou plate-forme SDK tel que discuté dans l'aperçu, vous devez exécuter l'utilitaire Plugman pour ajouter des plugins séparément pour chaque plate-forme. (Pour plus d'informations, voir Plugman à l'aide à gérer les Plugins).

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

Au lieu de cela, le niveau supérieur `merges` répertoire offre un endroit pour spécifier des actifs de déployer sur des plates-formes spécifiques. Chaque sous-répertoire spécifique à la plateforme dans `merges` reflète la structure de répertoire de la `www` l'arbre source, ce qui vous permet de substituer ou ajouter des fichiers au besoin. Par exemple, voici comment vous pourriez utilise `merges` pour augmenter la taille de police par défaut pour les appareils Android et Amazon Fire OS :

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

## Mise à jour de Cordova et de votre Projet

Après avoir installé la `cordova` utilitaire, vous pouvez toujours mettre à jour vers la dernière version en exécutant la commande suivante :

        $ sudo npm update -g cordova


Utilisez cette syntaxe pour installer une version spécifique :

        $ sudo npm install -g cordova@3.1.0-0.2.0


Exécutez `cordova -v` pour voir quelle version est en cours d'exécution. Exécutez le `npm
info` commande pour obtenir une liste plus longue qui inclut la version actuelle ainsi que d'autres numéros de version disponible :

        $ npm info cordova


Cordova 3.0 est la première version à supporter l'interface de ligne de commande décrite dans cette section. Si vous mettez à jour depuis une version antérieure à 3.0, vous devez créer un nouveau projet, tel que décrit ci-dessus, puis copiez les actifs les plus âgés de l'application dans le niveau supérieur `www` répertoire. Le cas échéant, plus amples détails sur la mise à niveau vers 3.0 sont disponibles dans les Guides de la plate-forme. Une fois que vous mettez à niveau vers le `cordova` Command-line interface et utilisation `npm update` pour rester à jour, les plus longues procédures décrits là ne sont plus pertinentes.

Cordova 3.0 + peut-être encore exiger des divers changements à la structure de répertoire au niveau du projet et d'autres dépendances. Après avoir exécuté la `npm` commande ci-dessus à jour Cordoue elle-même, vous devrez peut-être les ressources de votre projet soient conformes aux exigences de la version la plus récente. Exécutez une commande semblable à la suivante pour chaque plate-forme que vous générez :

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
