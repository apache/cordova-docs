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

title: Présentation
---

# Présentation

Cordova est un framework de développement mobile open-source. Il permet d'exploiter les technologies Web courantes telles que HTML5, CSS3 et JavaScript pour développer des applications multi-plateformes, évitant ainsi l'utilisation des langages natifs propres aux différentes plates-formes mobiles. Les applications s'exécutent dans des wrappers ciblés pour chaque plate-forme, elles s'appuient sur des API conformes aux standards permettant l'accès aux capteurs de chaque appareil, aux données ainsi qu'à l'état du réseau.

Utilisez Cordova si vous êtes :

*   un développeur mobile et que vous voulez étendre une application à plusieurs plates-formes sans avoir à réimplémenter celle-ci dans chacun des langages et avec chacun des outils propres aux différentes plates-formes.

*   un développeur Web et que vous souhaitez déployer une application Web prête à être distribuée dans divers portails de vente d'applications.

*   un développeur de mobile intéressé par la combinaison de composants natifs avec une *WebView* (fenêtre de navigateur) capable d'accéder aux API liées à l'appareil, ou bien si vous souhaitez développer une interface (plugin) rattachant une Webview à des composants natifs.

## Composants de base

Les applications Cordova reposent sur un fichier commun `config.xml` fournissant des informations sur l'application et définissant les paramètres affectant son fonctionnement, si elle répond aux changements d'orientation par exemple. Ce fichier est conforme aux spécifications W3C [Packaged Web App][1] ou *widget*.

 [1]: http://www.w3.org/TR/widgets/

L'application est présentée sous la forme d'une page Web nommée par défaut *index.html*, faisant appel à tous les fichiers CSS, JavaScript, images, multimédias, ou toutes autres ressources nécessaires à son fonctionnement. L'application est également exécutée en tant que *WebView* dans le wrapper applicatif natif destiné à la distribution via les magasins d'applications. Afin que l'application puisse interagir avec diversions fonctionnalités de l'appareil tout comme les applications natives, celle-ci doit référencer le fichier `cordova.js`, chargé de fournir les API nécessaires.

La WebView Cordova peut être chargée d'afficher entièrement l'interface utilisateur de l'application. Elle peut également ne constituer qu'un plus petit composant au sein d'une application hybride plus conséquente mêlant WebView et composants applicatifs natifs. Cordova fournit une interface *plugin* permettant à tous ces composants de communiquer entre eux.

## Voies de développement

Depuis la version 3.0, vous pouvez utiliser deux workflows de base pour créer une application mobile. Alors que vous pouvez accomplir la même chose en utilisant les deux flux de travail, certaines tâches sont mieux adaptés à l'utilisation d'un flux de travail sur l'autre. Pour cette raison, vous devez comprendre les deux flux de travail afin que vous pouvez utiliser le meilleur outil pour la meilleure situation.

Les deux flux de travail principaux qui est pris en charge est le workflow *Web projet Dev* et le flux de travail *Natif plate-forme Dev* .

### Web projet Dev

Vous pouvez penser le premier flux de travail comme le workflow *Web projet Dev* . Utilisez ce flux de travail lorsque vous voulez créer une application de Cordoue qui s'exécute sur les systèmes d'exploitation mobiles autant que possible avec aussi peu de travail spécifique à la plateforme de développement possible. Ce flux de travail est entrée en existence avec Cordova 3.0 et la création de le Cordova *Command-Line Interface* (CLI). La CLI abstracts loin beaucoup des fonctionnalités de scripts shell de niveau inférieur qui s'occuper des détails impliqués avec la construction de votre application, telles que la copie vos ressources web dans les dossiers corrects pour chaque plate-forme mobile, apporter des modifications de configuration spécifiques plate-forme, ou en cours d'exécution spécifiques générer des scripts pour générer les fichiers binaires d'application. Vous pouvez en savoir plus sur le flux de travail de *Dev de projet Web* dans l'Interface de ligne de commande. Veuillez noter que souvent quand les gens parlent de la "CLI", ils parlent ce workflow *Web projet Dev* .

### Plate-forme native Dev

Le deuxième flux de travail peut être considéré comme un flux de travail *Natif plate-forme Dev* . Vous devriez l'utiliser lorsque vous voulez mettre l'accent sur la création d'une application pour une plateforme unique et sont intéressé à changer les détails de la plate-forme de niveau inférieur. Alors que vous pouvez toujours utiliser ce flux de travail pour créer des applications multi-plateformes, le manque d'outils pour abstraire les diverses étapes de génération rendra plus difficile. Par exemple, vous devrez utiliser Plugman pour installer le plugin même une fois pour chaque programme que vous souhaitez prendre en charge. L'avantage à l'utilisation de ce flux de travail *Natif plate-forme Dev* c'est qu'il vous donne accès aux scripts de shell de niveau inférieur pour compiler et tester l'application, donc si vous est le piratage sur le côté natif des choses, ce flux de travail est le moyen le plus efficace pour tester vos modifications. Ce flux de travail est également approprié si vous souhaitez utiliser le CordovaWebView comme un petit rôle dans une application native plus grande (voir le guide d'intégration WebViews.) Vous pouvez lire sur ce flux de travail dans les différents guides d'outil Shell, par exemple, Android Shell Tool Guide et iOS Shell Tool Guide.

Lors du premier démarrage, il pourrait être plus facile d'utiliser le flux de travail de *Dev de projet Web* pour créer une application. (Pour installer le CLI, voir The Command-Line Interface). Selon l'ensemble des plateformes que vous souhaitez cibler, vous pouvez compter sur la CLI pour des actions plus en plus importantes du cycle de développement :

*   Dans le scénario le plus basique, vous pourrez vous servir de l'interface CLI simplement pour créer un nouveau projet comprenant des valeurs par défaut qu'il faudra modifier.

*   Pour de nombreuses plates-formes mobiles, vous pourrez également utiliser la CLI afin de mettre en place des fichiers supplémentaire nécessaires à la compilation du projet dans chaque SDK. Pour ce faire, vous devez installer le SDK correspondant à chaque plate-forme ciblée. (Voir les [Guides de la plate-forme](../platforms/index.html) pour obtenir des instructions.) Comme il est indiqué dans le tableau de prise en charge, vous devrez peut-être exécuter la CLI sur différents systèmes d'exploitation selon la plateforme ciblée.

*   Pour les plates-formes supportées, la CLI est capable de compiler des applications et les exécuter dans un émulateur d'appareil contenu dans le SDK associé. Pour le test complet, vous pouvez également générer des fichiers d'application et les installer directement sur un périphérique.

À tout moment dans le cycle de développement, vous pouvez basculer vers davantage de workflow *Natif plate-forme Dev* . Les outils spécifiques à la plate-forme SDK peuvent fournir un ensemble plus large d'options. (Voir les [Guides de la plate-forme](../platforms/index.html) pour plus d'informations sur l'outil du SDK de la plate-forme chaque jeu).

Un environnement SDK est plus approprié si vous voulez implémenter une application hybride qui mêle des composants d'applications web et natives. Vous pouvez utiliser l'utilitaire de ligne de commande pour générer initialement l'app, ou de manière itérative par la suite pour nourrir code mis à jour pour les outils du kit de développement logiciel. Vous pouvez également créer fichier de configuration de l'application vous-même. (Voir le fichier config.xml File pour plus de détails.)