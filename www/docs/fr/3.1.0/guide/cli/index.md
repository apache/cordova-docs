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

Ce guide vous montre comment créer des applications et déployez-les sur différentes plates-formes mobiles natives à l'aide de la `cordova` Command-line interface (CLI). Cet outil permet de créer de nouveaux projets, les construire sur différentes plates-formes et de les exécuter dans un émulateur. Vous pouvez également utiliser la CLI pour initialiser le code du projet, après quoi vous utilisez kits de développement logiciel des différentes plates-formes pour les développer davantage.

## Conditions préalables

Avant d'exécuter tous les outils de ligne de commande, vous devez installer le SDK pour chaque plate-forme que vous voulez cibler. (Voir les Guides de la plate-forme pour plus de détails.)

Pour ajouter le support ou reconstruire un projet pour n'importe quelle plateforme, vous devez exécuter la commande-ligne interface de la même machine qui prend en charge SDK de la plate-forme. L'ICA prend en charge les combinaisons suivantes :

*   iOS (Mac)
*   Android (Mac, Linux)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox OS (Mac, Linux, Windows)

Sur le Mac, la ligne de commande est accessible via l'application *Terminal* . Sur le PC, il est disponible en *invite de commande* sous *accessoires*.

Plus il est probable que vous exécutez le CLI de machines différentes, plus il est logique de maintenir un référentiel de code source éloignée, dont les actifs vous tirez vers le bas pour les répertoires de travail local.

Pour installer le `cordova` de ligne de commande outil, procédez comme suit :

1.  Télécharger et installer [Node.js][1]. Après installation, vous devriez être capable d'appeler `node` ou `npm` sur votre ligne de commande.

2.  Installer le `cordova` utilitaire. Sous Unix, faisant précéder la supplémentaires `sudo` commande peut être nécessaire pour installer les utilitaires de développement en autrement limité des répertoires :

        $ sudo npm install -g cordova


    Le journal d'installation peut générer des erreurs pour n'importe quelle plateforme désinstallé SDK. Après installation, vous devriez être en mesure d'exécuter `cordova` sur la ligne de commande.

 [1]: http://nodejs.org/

## Créer l'application

Allez dans le répertoire où vous conservez votre code source et exécutez une commande comme suit :

        $ cordova create hello com.example.hello HelloWorld


Il peut prendre un certain temps pour la commande pour terminer, alors soyez patient. Exécutez le `cordova -d` pour voir les informations sur la progression.

Le premier argument spécifie un répertoire *Bonjour* à générer pour votre projet. Sa `www` sous-répertoire maisons page d'accueil de votre application, ainsi que diverses ressources sous `css` , `js` , et `img` , qui suivent les conventions de dénomination de fichier du développement des web commun. Le `config.xml` fichier contient des métadonnées importantes nécessaires pour générer et distribuer l'application.

Les deux autres arguments sont facultatifs : le `com.example.hello` argument donne à votre projet avec un identificateur de domaine inverse-style et la `HelloWorld` fournit le texte d'affichage de l'application. Vous pouvez modifier ces deux valeurs plus tard dans le `config.xml` fichier.

## Ajouter des plates-formes

Toutes les commandes suivantes doivent être exécutées dans le répertoire du projet ou les sous-répertoires dans sa portée :

        $ cd hello


Avant que vous pouvez générer le projet, vous devez spécifier un jeu de plates-formes cibles. Votre capacité d'exécuter ces commandes dépend de savoir si votre ordinateur prend en charge chaque SDK, et si vous avez déjà installé chaque SDK. Courir à chacun d'entre eux d'un Mac :

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Courir à chacun d'entre eux depuis une machine Windows, où *wp* se réfère aux différentes versions du système d'exploitation Windows Phone :

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Exécutez-le pour vérifier votre noyau de plateformes :

        $ cordova platforms ls


(Note du `platform` et `platforms` commandes sont synonymes.)

Exécutez une des commandes suivantes synonymes d'enlever une plate-forme :

        $ cordova platform remove blackberry10
        $ cordova platform rm android


Exécution de commandes pour ajouter ou supprimer des affects de plates-formes le contenu du répertoire de *plates-formes* du projet, où chaque plate-forme spécifiée apparaît comme un sous-répertoire. Le répertoire de source *www* est reproduit dans le sous-répertoire de la plate-forme, qui apparaît par exemple dans `platforms/ios/www` ou `platforms/android/assets/www` . Par défaut, le fichier de configuration de chaque plateforme est configuré pour pouvoir accéder à l'ensemble des API de Cordova.

Si vous le souhaitez, vous pouvez utiliser un SDK à ce stade d'ouvrir le projet que vous avez créé. Toutefois, les modifications que vous apportez au projet au sein d'un affect SDK le dérivé ensemble de biens, pas les fichiers source multi-plateforme d'origine. Utilisez cette approche si vous souhaitez simplement initialiser un projet. (Voir les Guides de la plate-forme pour plus d'informations sur la façon de développer des applications au sein de chaque SDK.) Lire sur si vous souhaitez utiliser les outils de ligne de commande pour le cycle de développement complet.

## Construire l'application

Par défaut, le `cordova create` script génère une squelettique application web dont la page d'accueil est du projet `www/index.html` fichier. Modifier cette application, mais vous voulez, mais toute initialisation doit être spécifiée dans le cadre de la `deviceready` gestionnaire d'événements, référencé par défaut de `www/js/index.js` . <!-- XREF
(See the Application Development Guide for details.)
XREF -->

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


Certaines plates-formes mobiles émulent un périphérique par défaut, tels que l'iPhone pour les projets de l'iOS. Pour d'autres plateformes, vous devrez tout d'abord associer un périphérique avec un émulateur. (Voir les Guides de la plate-forme pour plus de détails.) Par exemple, vous pouvez d'abord exécuter la `android` commande pour lancer le SDK Android, puis exécutez une image de périphérique particulier, dont il lance selon son comportement par défaut :

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Suivi auprès du `cordova emulate` commande actualise l'image de l'émulateur pour afficher la dernière application, qui est maintenant disponible pour le lancement de l'écran d'accueil :

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativement, vous pouvez brancher le combiné dans votre ordinateur et tester l'application directement :

        $ cordova run android


Avant d'exécuter cette commande, vous devez mettre en place le dispositif de test, suivant des procédures qui varient pour chaque plate-forme. Dans le cas d'Android, vous devrez activer une option de **Débogage USB** sur l'appareil et peut-être ajouter un pilote USB selon votre environnement de développement. Consultez les Guides de la plate-forme pour plus de détails sur les exigences de chaque plateforme.

## Ajouter des fonctionnalités

Lorsque vous générez et découvre un nouveau projet, l'application par défaut qui s'affiche n'est pas faire grand-chose. Vous pouvez modifier l'application de plusieurs façons de tirer parti des technologies web standard, mais l'application de communiquer étroitement avec diverses fonctions au niveau du périphérique, vous devez ajouter des plugins qui permettent d'accéder au noyau Cordova APIs.

Un *plugin* est un peu de code complémentaire qui fournit une interface pour les composants natifs. Vous pouvez concevoir votre propre interface plugin, par exemple, lorsque vous concevez une application hybride qui mêle une Cordova WebView composants natifs. (Voir intégration WebViews et Plugin Development Guide pour plus de détails). Plus généralement, vous devez ajouter un plugin pour activer une des caractéristiques fondamentales de niveau périphérique de Cordova <!--XRÉF examinée dans le Guide de Développement d'Application et XREF--> décrites dans la référence de l'API.

Le `cordova plugin add` commande nécessite vous permet de spécifier le référentiel pour le code du plugin. Voici des exemples de fonctionnalités, que vous pouvez ajouter :

*   Informations de base périphérique (Device API) :

        $ cordova plugin add org.apache.cordova.device


*   Connexion réseau et événements de la batterie :

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status


*   Accéléromètre, boussole et géolocalisation :

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation


*   Appareil photo, lecture et Capture :

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media


*   Accéder aux fichiers sur un périphérique réseau (fichier API) :

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer


*   Notification via la boîte de dialogue ou de vibration :

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration


*   Contacts :

        $ cordova plugin add org.apache.cordova.contacts


*   Mondialisation :

        $ cordova plugin add org.apache.cordova.globalization


*   SplashScreen :

        $ cordova plugin add org.apache.cordova.splashscreen


*   Fenêtres ouvertes du navigateur nouvelle (InAppBrowser) :

        $ cordova plugin add org.apache.cordova.inappbrowser


*   Console de débogage :

        $ cordova plugin add org.apache.cordova.console


Utilisation `plugin ls` (ou `plugin list` , ou `plugin` en soi) à Découvre actuellement les plugins installés. Chacun affiche par son identificateur :

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


Pour supprimer un plugin, faire référence à elle par le même identificateur qui apparaît dans la liste. Par exemple, voici comment vous enlèverait le soutien pour une console de débogage d'une version :

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


Vous pouvez lot-supprimer ou ajouter des plugins en spécifiant plusieurs arguments pour chaque commande.

## Personnaliser chaque plate-forme

Alors que Cordoue vous permet de déployer facilement une application pour nombreuses plates-formes, parfois vous avez besoin d'ajouter des personnalisations. Dans ce cas, vous ne voulez pas modifier les fichiers source dans divers `www` répertoires à l'intérieur du premier niveau `platforms` répertoire, car ils sont remplacés régulièrement avec le niveau supérieur `www` source multi-plateforme de l'annuaire.

Au lieu de cela, le niveau supérieur `merges` répertoire offre un endroit pour spécifier des actifs de déployer sur des plates-formes spécifiques. Chaque sous-répertoire spécifique à la plateforme dans `merges` reflète la structure de répertoire de la `www` l'arbre source, ce qui vous permet de substituer ou ajouter des fichiers au besoin. Par exemple, voici comment vous pourriez utilise `merges` pour augmenter la taille de police par défaut pour les appareils Android :

*   Modifier la `www/index.html` fichier, en ajoutant un lien vers un fichier CSS supplémentaire, `overrides.css` dans ce cas :

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Créer éventuellement un vide `www/css/overrides.css` fichier, qui s'applique pour toutes les versions non-Android, empêchant une erreur de fichier manquant.

*   Créer un `css` sous-répertoire dans `merges/android` , puis ajoutez un correspondant `overrides.css` fichier. Spécifier CSS qui remplace la taille de police de 12 points par défaut spécifiée dans `www/css/index.css` , par exemple :

        body { font-size:14px; }


Lorsque vous régénérez le projet, la version Android dispose de la taille de police personnalisée, tandis que d'autres restent inchangés.

Vous pouvez également utiliser `merges` pour ajouter des fichiers non présents dans l'original `www` répertoire. Par exemple, une application peut intégrer un *bouton* graphique à l'interface d'iOS, stocké dans `merges/ios/img/back_button.png` , tandis que la version Android peut au lieu de capter `backbutton` événements de la touche correspondante de la quincaillerie.

## Mise à jour de Cordova

Après avoir installé la `cordova` utilitaire, vous pouvez toujours mettre à jour elle vers la dernière version en exécutant la commande suivante :

        $ sudo npm update -g cordova


Utilisez cette syntaxe pour installer une version spécifique :

        $ sudo NGP installer -g cordova@3.1.0


Exécutez `cordova -v` pour voir la version en cours d'exécution. Exécutez le `npm
info` commande pour obtenir une liste plus longue qui inclut la version actuelle ainsi que d'autres numéros de version disponible :

        $ npm info cordova


Cordova 3.0 est la première version à supporter l'interface de ligne de commande décrite dans cette section. Si vous mettez à jour depuis une version antérieure à 3.0, vous devez créer un nouveau projet, tel que décrit ci-dessus, puis copiez les actifs les plus âgés de l'application dans le niveau supérieur `www` répertoire. Le cas échéant, plus amples détails sur la mise à niveau vers 3.0 sont disponibles dans les Guides de la plate-forme. Une fois que vous mettez à niveau vers le `cordova` Command-line interface et utilisation `npm update` pour rester à jour, les plus longues procédures décrits là ne sont plus pertinentes.
