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

title: Prochaines étapes
---

# Prochaines étapes

Pour les développeurs qui ont une compréhension de comment utiliser le CLI de Cordova et faire utiliser des plugins, il y a quelques petites choses, vous voudrez peut-être recherche à côté de reconstruire mieux, applications de Cordova plus performant. Le document suivant fournit des conseils sur divers sujets relatifs aux meilleures pratiques, tests, mises à niveau et autres rubriques, mais n'est pas censé être prescriptif. Considérez ceci votre point de départ pour votre croissance en tant que développeur Cordova. Aussi, si vous voyez quelque chose qui peut être amélioré, Merci de [contribuer][1]!

 [1]: http://cordova.apache.org/#contribute

Ce guide contient les rubriques suivantes :

*   Meilleures pratiques
*   Gestion des mises à niveau
*   Tester les applications de Cordova
*   Débogage des applications de Cordova
*   Interface utilisateur
*   Considérations particulières
*   Jonglant
*   Obtention d'aide 

# Développement d'application de meilleures pratiques Cordova

## 1) SPA est votre ami

Tout d'abord - vos applications Cordova devraient adopter la conception SPA (Single Page Application). Vaguement défini, un SPA est une application côté client qui s'exécute à partir d'une seule demande d'une page web. L'utilisateur charge un ensemble initial de ressources (HTML, CSS et JavaScript), et plus les mises à jour (montrant une nouvelle vue, chargement de données) se fait via AJAX. Stations thermales sont couramment utilisés pour des applications plus complexes de côté client. GMail est un bon exemple de cela. Après avoir chargé GMail, vues de courrier, l'édition et organisation sont tout fait en mettant à jour le DOM au lieu de laisser effectivement la page en cours pour charger un complètement nouveau.

Utiliser un SPA peut vous aider à organiser votre application de manière plus efficace, mais il a aussi des avantages spécifiques pour des applications de Cordova. Une application de Cordova doit attendre pour l'événement [deviceready](../../cordova/events/events.deviceready.html) au feu avant les plug-ins peuvent être utilisés. Si vous n'utilisez pas un SPA, et votre utilisateur clique pour passer d'une page à l'autre, vous devrez attendre pour [deviceready](../../cordova/events/events.deviceready.html) au feu encore une fois avant de vous faire utiliser un plugin. C'est facile d'oublier que votre application s'agrandit.

Même si vous choisissez de ne pas utiliser de Cordova, création d'une application mobile sans utiliser une architecture de page unique aura des implications graves performance. C'est parce que la navigation entre les pages exigera des scripts, actifs, etc., pour être rechargé. Même si ces biens sont mis en cache, il y aura toujours des problèmes de performances.

Exemples de bibliothèques SPA, que vous pouvez utiliser dans vos applications de Cordova sont :

*   [AngularJS][2]
*   [EmberJS][3]
*   [Colonne vertébrale][4]
*   [Kendo UI][5]
*   [Monaca][6]
*   [ReactJS][7]
*   [Sencha Touch][8]
*   [jQuery Mobile][9]

 [2]: http://angularjs.org
 [3]: http://emberjs.com
 [4]: http://backbonejs.org
 [5]: http://www.telerik.com/kendo-ui
 [6]: http://monaca.mobi/en/
 [7]: http://facebook.github.io/react/
 [8]: http://www.sencha.com/products/touch/
 [9]: http://jquerymobile.com

Et beaucoup, beaucoup, plus.

## 2) considérations relatives aux performances

Une des plus grandes erreurs qu'un nouveau développeur de Cordova peut faire est de supposer que les résultats qu'ils obtiennent sur une machine de bureau sont la même qu'ils auront sur un appareil mobile. Alors que nos appareils mobiles ont obtenu plus puissante chaque année, ils manquent encore de la puissance et les performances d'un ordinateur de bureau. Les appareils mobiles ont généralement beaucoup moins de RAM et un GPU qui est bien loin de leur bureau (ou même un ordinateur portable) frères. Une liste complète des conseils ici serait trop, mais voici quelques petites choses à garder à l'esprit (avec une liste de ressources plus longtemps à la fin de poursuivre les recherches).

**Cliquez sur versus Touch** - l'erreur plus grande et la plus simple, vous pouvez faire est d'utiliser les événements click. Alors que ces « » très bien fonctionnent sur mobile, la plupart des périphériques imposent un délai de 300 ms sur eux afin de distinguer entre un contact et un événement de "tenir" touch. À l'aide de `touchstart` , ou `touchend` , se traduira par une amélioration spectaculaire - 300ms ne ressemble beaucoup, mais elle peut aboutir à des mises à jour de l'interface utilisateur et le comportement saccadé. Vous devriez également considérer le fait que « toucher » les événements ne sont pas supportés dans les navigateurs non-webkit, voir [CanIUse][10]. Pour remédier à ces limitations, vous pouvez commander différentes bibliothèques comme HandJS et Fastouch.

 [10]: http://caniuse.com/#search=touch

**Transitions CSS par rapport à la Manipulation du DOM** - utilisant l'accélération matérielle des transitions CSS sera nettement meilleure que l'utilisation de JavaScript pour créer des animations. Voir la liste des ressources à la fin de cette section pour obtenir des exemples.

**Sucer des réseaux** - réseaux, Ok ne toujours sucer, mais la latence des réseaux mobiles, même de bons réseaux de téléphonie mobile, est bien pire que vous pensez probablement. Une application de bureau qui slurps bas 500 lignes de données JSON, toutes les 30 secondes, seront les deux plus lent sur un appareil mobile comme un gros mangeur de batterie. Gardez à l'esprit que les applications de Cordova ont plusieurs façons pour rendre persistantes les données dans l'application (LocalStorage et le système de fichiers, par exemple). Mettre en cache les données localement et être conscient de la quantité de données que vous envoyez en arrière. Il s'agit d'une considération particulièrement importante lorsque votre application est connectée via un réseau cellulaire.

**Ressources et Articles de performances supplémentaires**

*   [« Vous la moitié cul il »][11]
*   [« Top dix conseils de Performance pour PhoneGap et hybride Apps »][12]
*   [« Des applications rapides et des Sites avec JavaScript »][13]

 [11]: http://sintaxi.com/you-half-assed-it
 [12]: http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/
 [13]: https://channel9.msdn.com/Events/Build/2013/4-313

## 3) reconnaître et gérer l'état hors connexion

Voir le Conseil précédent sur les réseaux. Non seulement vous pouvez être sur un réseau lent, il est tout à fait possible pour votre application d'être complètement déconnecté. Votre application doit gérer cela de manière intelligente. Si votre application ne fonctionne pas, les gens penseront que votre application est cassée. Vu comment il est facile à manipuler (supports de Cordova à l'écoute pour un événement à la fois en ligne et hors ligne), il n'y a absolument aucune raison pour que votre application ne répond ne pas bien quand exécuter en mode hors connexion. Veillez à tester (voir la section tests ci-dessous) votre demande et n'oubliez pas de tester comment votre application gère quand vous commencez dans un État et ensuite passez à l'autre.

Notez que les événements en ligne et hors ligne, ainsi que l'API de connexion de réseau n'est pas parfait. Vous devrez compter sur via une requête XHR afin de déterminer si l'appareil est vraiment hors ligne ou en ligne. À la fin de la journée, être bien sûr ajouter une forme d'assistance pour les problèmes de réseau - en fait, l'Apple store (et probablement d'autres magasins) rejettera les applications qui ne gèrent correctement les États hors ligne/en ligne. Pour plus d'informations sur ce sujet, voir ["Is This Thing sur?"][14]

 [14]: http://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29

# Gestion des mises à niveau

## La mise à niveau de projets de Cordova

Si votre projet existant a été créé à l'aide de Cordova 3.x, vous pouvez mettre à niveau le projet en émettant ce qui suit :

    Cordova plate-forme mise à jour-nom de la plate-forme ios, android, etc.
    

Si votre projet existant a été créé sous une version antérieure à Cordova 3.x, il serait probablement préférable de créer un nouveau projet de 3.x de Cordova et copiez code et les actifs de votre projet existant vers le nouveau projet. Étapes typiques :

*   Créez un nouveau projet de 3.x Cordova (cordova créer...)
*   Copiez le dossier www de votre ancien projet vers le nouveau projet
*   Copier les paramètres de configuration de l'ancien projet vers le nouveau projet
*   Ajouter les plug-ins utilisés dans l'ancien projet vers le nouveau projet
*   Générez votre projet
*   Tester, tester, tester !

Quelle que soit la version antérieure du projet, il est absolument essentiel que vous lire sur ce qui a été changé dans la version mise à jour, car la mise à jour pourrait casser votre code. Il sera le meilleur endroit pour trouver ces informations dans les notes publiées sur le blog de Cordova tant dans les dépôts. Vous voudrez tester votre application soigneusement afin de vérifier qu'il fonctionne correctement après avoir effectué la mise à jour.

Remarque : certains plugins n'est peut-être pas compatibles avec la nouvelle version de Cordova. Si un plugin n'est pas compatible, vous pouvez être en mesure de trouver un plugin de remplacement qui ne ce dont vous avez besoin, ou vous devrez peut-être retarder la mise à niveau de votre projet. Vous pouvez également modifier le plugin afin qu'il fonctionne en vertu de la nouvelle version et contribuer à la collectivité.

## Mises à jour du plugin

À partir de Cordova 3.4, il n'y a aucun mécanisme pour la mise à niveau de plugins modifiées à l'aide d'une seule commande. Au lieu de cela, supprimez le plugin et ajouter de nouveau à votre projet, et la nouvelle version sera installée :

    Cordova plugin rm com.some.plugin cordova plugin ajouter com.some.plugin
    

N'oubliez pas de vérifier la documentation de la mise à jour du plugin, que vous devrez peut-être modifier votre code pour utiliser la nouvelle version. Aussi, le double de vérifier que la nouvelle version du plugin fonctionne avec la version de votre projet de Cordova.

Testez toujours vos applications pour faire en sorte qu'installer le nouveau plugin a cassé pas quelque chose que vous n'avez pas prévu.

Si votre projet comporte beaucoup de plugins dont vous avez besoin de mise à jour, il pourrait gagner du temps pour créer un script shell ou le lot qui supprime et ajoute les plugins avec une seule commande.

# Tester les applications de Cordova

Il est super important de tester vos applications. L'équipe de Cordova utilise Jasmine mais toute solution de test web convivial unité va faire.

## Test sur un simulateur vs sur un périphérique réel

Il n'est pas rare d'utiliser les navigateurs de bureau et de simulateurs/émulateurs de périphérique lors du développement d'une application de Cordova. Toutefois, il est extrêmement important que vous testiez votre application sur les périphériques physiques autant que vous le pouvez :

*   Les simulateurs sont exactement cela : simulateurs. Par exemple, votre application peut fonctionner dans le simulateur iOS sans problème, mais il peut échouer sur un périphérique réel (en particulier dans certaines circonstances, comme un état de manque de mémoire). Ou, votre application peut ne pas réellement sur le simulateur alors qu'il fonctionne très bien sur un périphérique réel. 
*   Émulateurs sont que cela : émulateurs. Ils ne représentent pas bien votre application s'exécute sur un périphérique physique. Par exemple, certains émulateurs peuvent rendre votre application avec un affichage brouillé, alors qu'un véritable appareil n'a aucun problème. (Si vous ne rencontrez pas ce problème, désactivez l'hôte GPU dans l'émulateur.)
*   Les simulateurs sont généralement plus rapides que votre périphérique physique. En revanche, les émulateurs, sont généralement plus lentes. Ne jugez pas les performances de votre application de comment il se comporte dans un simulateur ou un émulateur. Ne jugez pas les performances de votre application de comment il fonctionne sur un éventail de dispositifs réels.
*   Il est impossible d'avoir une bonne idée de comment votre application répond à votre contact à l'aide d'un simulateur ou un émulateur. Au lieu de cela, l'application en cours d'exécution sur un périphérique réel peut signaler des problèmes avec les tailles des éléments d'interface utilisateur, réactivité, etc..
*   Bien qu'il serait agréable de pouvoir tester uniquement sur un périphérique par la plate-forme, il est préférable de tester sur de nombreux appareils sportifs de nombreuses versions OS. Par exemple, ce qui fonctionne sur votre smartphone Android particulière peut échouer sur un autre appareil Android. Ce qui fonctionne sur un appareil iOS 7 peut échouer sur un appareil iOS 6.

Il est, bien sûr, impossible de tester sur chaque dispositif possible sur le marché. Pour cette raison, il est sage de recruter de nombreux testeurs qui ont différents périphériques. Bien qu'ils n'attrapent pas tous les problèmes, les chances sont bonnes qu'ils découvriront les bizarreries et les questions que vous trouveriez jamais seul.

Astuce : Il est possible sur les appareils Android Nexus pour flasher facilement différentes versions d'Android sur le périphérique. Ce procédé simple vous permettra de facilement tester votre application sur différents niveaux d'Android avec un seul appareil, sans annulation de votre garantie ou vous obligeant à « jailbreak » ou « racine » de votre appareil. Les images de Google Android usine et les instructions situent trouve à: https://developers.google.com/android/nexus/images#instructions

# Débogage des applications de Cordova

Débogage Cordova nécessite certaine configuration. Contrairement à une application de bureau, vous ne pouvez pas simplement ouvrir outils sur votre appareil mobile et démarrez le débogage, heureusement il y a des alternatives beaucoup.

## iOS débogage

### Xcode

Avec Xcode, vous pouvez déboguer le côté natif iOS de votre application de Cordova. Assurez-vous que la zone Debug est montrant (vue-> zone Debug). Une fois que votre application s'exécute sur l'appareil (ou simulateur), vous pouvez afficher la sortie du journal dans la zone de débogage. C'est où des erreurs ou des avertissements seront imprimera. Vous pouvez également définir des points d'arrêt dans les fichiers source. Cela vous permettra de parcourir le code une ligne à la fois et d'afficher l'état des variables à cette époque. L'état des variables apparaît dans la zone de débogage lorsqu'un point d'arrêt est atteint. Une fois que votre application est en cours d'exécution sur le périphérique, vous pouvez faire apparaître inspecteur web de Safari (comme décrit ci-dessous) pour déboguer le côté webview et js de votre application. Pour plus d'informations et d'aide, consultez le guide de Xcode : [Guide de débogage de Xcode][15]

 [15]: https://developer.apple.com/library/mac/documentation/ToolsLanguages/Conceptual/Xcode_Overview/DebugYourApp/DebugYourApp.html#//apple_ref/doc/uid/TP40010215-CH18-SW1

### Distance de Safari débogage avec Web Inspector

Avec l'inspecteur web de Safari, vous pouvez déboguer le code webview et js dans votre application de Cordova. Cela fonctionne seulement sur OSX et qu'avec iOS 6 (et versions ultérieures). Il utilise Safari pour vous connecter à votre appareil (ou le simulateur) et reliera les outils du navigateur à la demande de Cordova. Vous obtenez ce que vous attendez d'outils / DOM inspection/manipulation, un débogueur JavaScript, inspection de réseau, la console et plus. Comme Xcode, avec l'inspecteur web de Safari, vous pouvez définir des points d'arrêt dans le code JavaScript et afficher l'état des variables à cette époque. Vous pouvez afficher les erreurs, des avertissements ou des messages qui sont affichés dans la console. Vous pouvez également exécuter des commandes JavaScript directement à partir de la console, que votre application s'exécute. Pour plus de détails sur la façon de mettre en place et ce que vous pouvez faire, voir cet excellent blog : <http://moduscreate.com/enable-remote-web-inspector-in-ios-6/> et ce guide : [Guide de Safari Web Inspector][16]

 [16]: https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html

## Débogage distant chrome

Pratiquement identique à la version de Safari, cela fonctionne seulement avec Android, mais peut être utilisé à partir de n'importe quel système d'exploitation. Il nécessite un minimum de 4,4 Android (KitKat), niveau API minimum de 19 et Chrome 30 + (sur le bureau). Une fois connecté, vous obtenez la même expérience de Chrome Dev Tools pour vos applications mobiles comme vous le faites avec vos applications de bureau. Mieux encore, les outils de Dev Chrome ont une option de miroir qui montre votre application en cours d'exécution sur le périphérique mobile. C'est plus qu'un avis - vous pouvez faire défiler et cliquez sur à partir des outils de dev et il met à jour sur le périphérique mobile. Plus d'informations sur le débogage distant de Chrome peuvent être trouvés ici : <https://developers.google.com/chrome/mobile/docs/debugging>

Il est possible d'utiliser Chrome Dev Tools pour inspecter les applications iOS, à travers un proxy WebKit : <https://github.com/google/ios-webkit-debug-proxy/>

## Ondulation

Ondulation est un émulateur basé fonds pour projets de Cordova. Essentiellement, il vous laisse exécuter une application de Cordova dans votre application cliente et de faux diverses fonctionnalités de Cordova. Par exemple, il vous permet de simuler l'accéléromètre pour tester le shake événements. Il faux la caméra API en vous permettant de sélectionner une image depuis votre disque dur. Ondulation permet de que vous concentrerez davantage sur votre code personnalisé, plutôt que de vous inquiéter au sujet des plugins de Cordova. Vous pouvez en savoir plus sur l'ondulation ici : <http://ripple.incubator.apache.org/>

## Weinre

Weinre crée un serveur local qui peut héberger un client de débogage distant pour vos applications de Cordova. Après avoir installé et démarré il vers le haut, vous copiez une ligne de code dans votre application de Cordova et puis redémarrez. Vous pouvez alors ouvrir un panel d'outil de dev sur votre bureau pour travailler avec l'application. Weinre n'est pas tout à fait aussi fantaisie comme le Chrome et le débogage distant Safari mais a l'avantage de travailler avec un beaucoup plus grand nombre de plates-formes et de systèmes d'exploitation. Plus d'informations peuvent être trouvées ici : <http://people.apache.org/~pmuellr/weinre/docs/latest/>

## Autres Options

*   BlackBerry 10 prend en charge le débogage ainsi : [Documentation][17]
*   Vous pouvez déboguer à l'aide de Firefox App Manager aussi bien, voir [ce blog][18] et cet [article MDN][19].
*   Pour plus d'exemples et d'explication des conseils ci-dessus de débogage, consultez : <http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/>

 [17]: https://developer.blackberry.com/html5/documentation/v2_0/debugging_using_web_inspector.html
 [18]: https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/
 [19]: https://developer.mozilla.org/en-US/Apps/Tools_and_frameworks/Cordova_support_for_Firefox_OS#Testing_and_debugging

# Interface utilisateur

Création d'une application de Cordoue qui est très joli sur mobile peut être un défi, surtout pour les développeurs. Beaucoup de gens ont choisi d'utiliser une infrastructure d'interface utilisateur pour faciliter cette opération. Voici une courte liste des options, que vous voudrez peut-être.

*   [jQuery Mobile][9] - jQuery Mobile améliore automatiquement votre mise en page pour l'optimisation des mobile. Il gère également la création d'un SPA pour vous automatiquement.
*   [ionique][20] -cette infrastructure d'interface utilisateur puissante a fait son propre indicateur composite avancé pour gérer la création d'un projet. 
*   [Ratchet][21] - présentée par les personnes qui ont créé le Bootstrap. 
*   [Kendo UI][5] - interface Open source et applicative de Telerik.
*   [Couche de finition][22]
*   [ReactJS][7]

 [20]: http://ionicframework.com/
 [21]: http://goratchet.com/
 [22]: http://topcoat.io

Lorsque vous générez votre interface utilisateur, il est important de penser à toutes les plateformes que vous ciblez et les différences entre les attentes de l'utilisateur. Par exemple, une application Android qui a une interface style iOS ira probablement pas plus de bien avec les utilisateurs. C'est parfois même appliquée par les divers magasins de l'application. Pour cette raison, il est important de respecter les conventions de chaque plateforme et sont donc familiers avec les différentes directives d'Interface humaine :

*   [iOS][23]
*   [Androïde][24]
*   [Windows Phone][25]

 [23]: https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html
 [24]: https://developer.android.com/designWP8
 [25]: http://dev.windowsphone.com/en-us/design/library

## Ressources et Articles d'interface utilisateur supplémentaires

Bien que le navigateur moteurs deviennent plainte de normes de plus en plus, nous vivons encore dans un monde avec des préfixes (-webkit et - Mme) l'article suivant est utile lors du développement de l'interface utilisateur dans des Croix navigateur apps: <http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx>

# Considérations particulières

Bien que Cordova facilite le développement interplate-forme, c'est juste pas possible d'assurer une isolation 100 % de la plate-forme native sous-jacente. Il ne faut pas être au courant des restrictions.

## Bizarreries de la plate-forme

En lisant la documentation, chercher des sections qui décrivent les exigences sur plusieurs plates-formes ou des comportements différents. S'il est présent, il s'agit dans une section intitulée « Bizarreries Android », « iOS Quirks », etc.. Lisez ces bizarreries et être conscients d'eux pendant que vous travaillez avec Cordova.

## Chargement du contenu distant

Appel de fonctions de Cordova JavaScript d'une page HTML de chargement à distance (une page HTML ne pas stockée localement sur l'appareil) est une configuration non prise en charge. C'est parce que Cordova n'a pas été conçu pour cela, et la communauté Apache Cordova ne fait aucun test de cette configuration. Même si elle peut fonctionner dans certaines circonstances, il n'est pas recommandé ni pris en charge. Il existe des défis avec la stratégie de même origine, gardant le JavaScript et portions natives de Cordova synchronisées à la même version (puisqu'ils sont couplés via API privé qui peut changer), la fiabilité du contenu distant en appelant les fonctions locales natives et potentiels app store rejet.

L'affichage du chargement à distance HTML contenu dans une webview devrait être fait à l'aide de InAppBrowser de Cordova. Le InAppBrowser est conçu pour que JavaScript exécutant il n'a pas accès aux APIs JavaScript Cordova pour les raisons énumérées ci-dessus. Veuillez consulter le Guide de la sécurité.

# Jonglant

Voici quelques façons de tenir à jour avec Cordova.

*   S'abonner au [blog de Cordova][26].
*   S'abonner à la [liste des développeurs][27]. Note - ce n'est pas un groupe de soutien ! Plutôt, c'est un endroit où le développement de Cordova est discutée.

 [26]: http://cordova.apache.org/#news
 [27]: http://cordova.apache.org/#mailing-list

# Obtention d'aide

Les liens suivants sont les meilleurs endroits pour obtenir de l'aide pour Cordova :

*   StackOverflow : <http://stackoverflow.com/questions/tagged/cordova> à l'aide de la balise de Cordova, vous pouvez afficher et parcourir toutes les questions de Cordova. Notez que StackOverflow convertit automatiquement le tag « Phonegap » à « Cordova », sorte de cette façon, vous serez en mesure d'accéder aux questions historiques aussi bien
*   PhoneGap Google Group : [https://groups.google.com/forum/#! forum/phonegap][28] ce groupe de Google a été l'ancien forum de soutien lorsque Cordova s'appelait encore PhoneGap. Bien qu'il existe encore beaucoup d'utilisateurs de Cordoue qui fréquentent ce groupe, la communauté de Cordova a exprimé un intérêt en se concentrant moins sur ce groupe et à la place utiliser StackOverflow pour un support
*   Meetup : <http://phonegap.meetup.com> - pensez à trouver un groupe local de meetup Cordova/PhoneGap

 [28]: https://groups.google.com/forum/#!forum/phonegap