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

La meilleure façon de mettre en place une application est d'utiliser l'utilitaire en ligne de commande `cordova`, aussi connu sous le nom d'*interface en ligne de commande* (CLI). (Pour installer le CLI, voir The Command-Line Interface). Selon l'ensemble des plateformes que vous souhaitez cibler, vous pouvez compter sur la CLI pour des actions plus en plus importantes du cycle de développement :

*   Dans le scénario le plus basique, vous pourrez vous servir de l'interface CLI simplement pour créer un nouveau projet comprenant des valeurs par défaut qu'il faudra modifier.

*   Pour de nombreuses plates-formes mobiles, vous pourrez également utiliser la CLI afin de mettre en place des fichiers supplémentaire nécessaires à la compilation du projet dans chaque SDK. Pour ce faire, vous devez installer le SDK correspondant à chaque plate-forme ciblée. (Voir les Guides de la plate-forme pour obtenir des instructions.) Comme il est indiqué dans le tableau de prise en charge, vous devrez peut-être exécuter la CLI sur différents systèmes d'exploitation selon la plateforme ciblée.

*   Pour les plates-formes supportées, la CLI est capable de compiler des applications et les exécuter dans un émulateur d'appareil contenu dans le SDK associé. Pour le test complet, vous pouvez également générer des fichiers d'application et les installer directement sur un périphérique.

À tout moment dans le cycle de développement, vous aurez la possibilité de préférer utiliser les outils du SDK propre à une plate-forme donnée, ceux-ci pouvant offrir un plus large panel d'options. (Voir les Guides des plates-formes pour plus d'informations concernant le panel des outils des SDK propres à chaque plate-forme). Un environnement SDK est plus approprié dans le cadre de l'implémentation d'une application hybride mêlant des composants applicatifs Web et natifs. Vous pouvez utiliser l'utilitaire de ligne de commande pour générer initialement l'app, ou de manière itérative par la suite pour nourrir code mis à jour pour les outils du kit de développement logiciel. Vous pouvez également construire vous-même le fichier de configuration de l'application. (Voir le fichier config.xml File pour plus de détails.)