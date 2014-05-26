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

L'application est présentée sous la forme d'une page Web nommée par défaut *index.html*, faisant appel à tous les fichiers CSS, JavaScript, images, multimédias, ou toutes autres ressources nécessaires à son fonctionnement. L'application est également exécutée en tant que *WebView* dans le wrapper applicatif natif destiné à la distribution via les magasins d'applications.

La WebView Cordova peut être chargée d'afficher entièrement l'interface utilisateur de l'application. Sur certaines plateformes, il peut aussi être un composant dans une application hybride plus grande, qui mêle le mode Web avec des composants de l'application native. (Voir intégration WebViews pour plus de détails.)

Une interface *plugin* est disponible pour Cordova et les composants natifs de communiquer entre eux. Depuis la version 3.0, plugins fournir des liaisons de périphérique standard API. Plugins tiers fournissent des liaisons supplémentaires aux fonctionnalités n'est pas nécessairement disponibles sur toutes les plateformes. Vous pouvez également développer vos propres plugins, comme décrit dans le Guide de développement de Plugin. Plugins peut être nécessaire, par exemple, pour communiquer entre Cordoue et les composants natifs personnalisés.

## Voies de développement

Depuis la version 3.0, vous pouvez utiliser deux workflows de base pour créer une application mobile. Alors que vous pouvez souvent utiliser un flux de travail à accomplir la même tâche, ils ont chacun des avantages :

*   **Flux de travail multi-plateforme**: utiliser ce flux de travail si vous souhaitez que votre application pour exécuter le plus grand nombre des différents systèmes d'exploitation mobiles que possible, avec peu besoin spécifique à la plateforme de développement. Ce workflow est centrée autour de la `cordova` utilitaire, autrement connu comme le Cordova *CLI*, qui a été introduite avec le 3.0 de Cordova. La CLI est un outil de haut niveau qui vous permet d'élaborer des projets pour de nombreuses plateformes à la fois, faisant abstraction bien loin des fonctionnalités des scripts shell de niveau inférieur. La CLI copie un ensemble commun de ressources web dans des sous-répertoires pour chaque plate-forme mobile, apporte des changements de configuration nécessaires pour chacun, s'exécute les scripts de compilation pour générer les fichiers binaires d'application. La CLI fournit également une interface commune pour appliquer des plugins pour votre application. (Pour plus de détails sur la CLI, voir The Command-Line Interface).

*   **Flux de travail axée sur la plate-forme**: utilisez ce flux de travail si vous voulez mettre l'accent sur la construction d'une application pour une plateforme unique et doivent être en mesure de le modifier à un niveau inférieur. Vous devez utiliser cette approche, par exemple, si vous souhaitez que votre application pour mélanger les composants natifs personnalisés avec des composants de Cordoue sur le web, tel que discuté dans l'intégration WebViews. En règle générale, utilisez ce flux de travail si vous devez modifier le projet dans le SDK. Ce flux de travail s'appuie sur un ensemble de scripts shell de niveau inférieur qui sont adaptés pour chaque plate-forme prise en charge et un utilitaire distinct de Plugman qui vous permet d'appliquer des plugins. Alors que vous pouvez utiliser ce flux de travail pour créer des applications multi-plateformes, il est généralement plus difficile parce que l'absence d'un outil de niveau supérieur signifie cycles distincts construction et modifications de plugin pour chaque plate-forme. Pourtant, ce flux de travail vous permet un meilleur accès à des options de développement fournis par chaque SDK et est essentiel pour les applications hybrides complexes. (Voir les différents Guides de plate-forme pour plus de détails sur utilitaires coquille disponible de chaque plateforme.)

Lors du premier démarrage, il peut être plus facile d'utiliser le flux de travail multi-plateforme pour créer une application, tel que décrit dans l'Interface de ligne de commande. Vous avez alors la possibilité de passer à un flux de travail axée sur la plate-forme si vous avez besoin du contrôle que le SDK fournit. Utilitaires shell de niveau inférieur sont disponibles à [cordova.apache.org][2] dans une distribution distincte que le CLI. Pour les projets initialement générés par la CLI, ces outils de coquille sont également disponibles dans le projet de divers `platforms/*/cordova` répertoires.

 [2]: http://cordova.apache.org

**Remarque**: une fois que vous passez dans le flux de travail axée sur la CLI à l'une centrée sur les kits de développement logiciel spécifique à la plateforme et les outils de shell, vous ne pouvez pas revenir en arrière. La CLI maintient un ensemble de code source multi-plateforme qui, sur chacun, générez-le utilisations d'écrire plus de code source spécifique à la plateforme. Pour conserver les modifications que vous apportez aux actifs spécifiques à la plate-forme, vous devez basculer vers les outils axés sur la plate-forme de shell, qui ignorent le code source multi-plateforme, et au contraire s'appuie sur le code source spécifique à la plateforme.