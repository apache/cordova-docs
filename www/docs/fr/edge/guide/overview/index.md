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

Apache Cordova est un framework de développement mobile open-source. Il permet d'exploiter les technologies Web courantes telles que HTML5, CSS3 et JavaScript pour développer des applications multi-plateformes, évitant ainsi l'utilisation des langages natifs propres aux différentes plates-formes mobiles. Les applications s'exécutent dans des wrappers ciblés pour chaque plate-forme, elles s'appuient sur des API conformes aux standards permettant l'accès aux capteurs de chaque appareil, aux données ainsi qu'à l'état du réseau.

Apache Cordova a obtenu son diplôme en octobre 2012 comme un projet de niveau supérieur au sein de l'Apache Software Foundation (ASF). Par le biais de l'ASF, développement futur de Cordova assurera intendance ouvert du projet. Il restera toujours gratuit et open source sous Apache License, Version 2.0. Visitez [cordova.apache.org][1] pour plus d'informations.

 [1]: http://cordova.apache.org

Utiliser Apache Cordova, si vous êtes :

*   un développeur mobile et que vous voulez étendre une application à plusieurs plates-formes sans avoir à réimplémenter celle-ci dans chacun des langages et avec chacun des outils propres aux différentes plates-formes.

*   un développeur Web et que vous souhaitez déployer une application Web prête à être distribuée dans divers portails de vente d'applications.

*   un développeur de mobile intéressé par la combinaison de composants de l'application native avec une *WebView* (fenêtre de navigateur spécial) qui peut accéder aux API de niveau périphérique, ou si vous voulez développer une interface plugin entre les autochtones et les composants WebView.

## Composants de base

Apache Cordova applications s'appuient sur un commun `config.xml` fichier qui fournit des informations sur l'application et spécifie les paramètres qui affectent comment ça marche, comme si elle répond à l'orientation se déplace. Ce fichier respecte [Emballés Web App][2]ou *widget*, spécification de la W3C.

 [2]: http://www.w3.org/TR/widgets/

L'application elle-même est implémentée comme une page web, par défaut, un fichier local nommé *index.html*, qui fait référence à quelque CSS, JavaScript, images, fichiers multimédias ou autres ressources sont nécessaires pour son exécution. L'application s'exécute sous une *WebView* dans le wrapper de l'application native, qui vous distribuez à l'app store.

Le WebView Cordova-activé peut prévoir l'application grâce à son interface utilisateur entière. Sur certaines plateformes, il peut aussi être un composant dans une application hybride plus grande, qui mêle le mode Web avec des composants de l'application native. (Voir intégration WebViews pour plus de détails.)

Une interface *plugin* est disponible pour Cordova et les composants natifs de communiquer entre eux. Cela vous permet d'invoquer le code natif de JavaScript. Idéalement, les API JavaScript que code natif concordent sur de multiples plates-formes de périphérique. Depuis la version 3.0, plugins fournir des liaisons de périphérique standard API. Plugins tiers fournissent des liaisons supplémentaires aux fonctionnalités n'est pas nécessairement disponibles sur toutes les plateformes. Vous pouvez trouver ces plugins tierce partie dans le [Registre du plugin][3] et les utiliser dans votre application. Vous pouvez également développer vos propres plugins, comme décrit dans le Guide de développement de Plugin. Plugins peut être nécessaire, par exemple, pour communiquer entre Cordoue et les composants natifs personnalisés.

 [3]: http://plugins.cordova.io

**NOTE**: depuis la version 3.0, lorsque vous créez un projet de Cordova, il n'a pas les plug-ins présents. C'est le nouveau comportement par défaut. Les plug-ins que vous désirez, même les plugins de base, doivent être ajoutés explicitement.

Cordova ne fournit pas les widgets de l'interface utilisateur ou cadres de MV. Cordova fournit seulement le runtime dans lequel ceux qui peuvent s'exécuter. Si vous souhaitez utiliser les widgets de l'interface utilisateur et/ou un cadre MV *, vous devrez sélectionner celles et les inclure dans votre demande vous-même comme matériel de tierces parties.

## Voies de développement

Depuis la version 3.0, vous pouvez utiliser deux workflows de base pour créer une application mobile. Alors que vous pouvez souvent utiliser un flux de travail à accomplir la même tâche, ils ont chacun des avantages :

*   **Flux de travail multi-plateforme (CLI)**: utiliser ce flux de travail si vous souhaitez que votre application pour exécuter le plus grand nombre des différents systèmes d'exploitation mobiles que possible, avec peu besoin spécifique à la plateforme de développement. Ce workflow est centrée autour de la `cordova` utilitaire, autrement connu comme le Cordova *CLI*, qui a été introduite avec le 3.0 de Cordova. La CLI est un outil de haut niveau qui vous permet d'élaborer des projets pour de nombreuses plateformes à la fois, faisant abstraction bien loin des fonctionnalités des scripts shell de niveau inférieur. La CLI copie un ensemble commun de ressources web dans des sous-répertoires pour chaque plate-forme mobile, apporte des changements de configuration nécessaires pour chacun, s'exécute les scripts de compilation pour générer les fichiers binaires d'application. La CLI fournit également une interface commune pour appliquer des plugins pour votre application. Pour plus de détails sur la CLI, consultez l'Interface de ligne de commande. Sauf si vous avez un besoin pour le flux de travail axée sur la plate-forme, le flux de travail multi-plateforme est recommandé.

*   **Flux de travail axée sur la plate-forme**: utilisez ce flux de travail si vous voulez mettre l'accent sur la construction d'une application pour une plateforme unique et doivent être en mesure de le modifier à un niveau inférieur. Vous devez utiliser cette approche, par exemple, si vous souhaitez que votre application pour mélanger les composants natifs personnalisés avec des composants de Cordoue sur le web, tel que discuté dans l'intégration WebViews. En règle générale, utilisez ce flux de travail si vous devez modifier le projet dans le SDK. Ce flux de travail s'appuie sur un ensemble de scripts shell de niveau inférieur qui sont adaptés pour chaque plate-forme prise en charge et un utilitaire distinct de Plugman qui vous permet d'appliquer des plugins. Alors que vous pouvez utiliser ce flux de travail pour créer des applications multi-plateformes, il est généralement plus difficile parce que l'absence d'un outil de niveau supérieur signifie cycles distincts construction et modifications de plugin pour chaque plate-forme. Pourtant, ce flux de travail vous permet un meilleur accès à des options de développement fournis par chaque SDK et est essentiel pour les applications hybrides complexes. Voir les différents Guides de plate-forme pour plus de détails sur les utilitaires de coquille disponible de chaque plateforme.

Lors du premier démarrage, il peut être plus facile d'utiliser le flux de travail multi-plateforme pour créer une application, tel que décrit dans l'Interface de ligne de commande. Vous avez alors la possibilité de passer à un flux de travail axée sur la plate-forme si vous avez besoin du contrôle que le SDK fournit. Utilitaires shell de niveau inférieur sont disponibles à [cordova.apache.org][1] dans une distribution distincte que le CLI. Pour les projets initialement générés par la CLI, ces outils de coquille sont également disponibles dans le projet de divers `platforms/*/cordova` répertoires.

**Remarque**: une fois que vous passez dans le flux de travail axée sur la CLI à l'une centrée sur les kits de développement logiciel spécifique à la plateforme et les outils de shell, vous ne pouvez pas revenir en arrière. La CLI maintient un ensemble de code source multi-plateforme qui, sur chacun, générez-le utilisations d'écrire plus de code source spécifique à la plateforme. Pour conserver les modifications que vous apportez aux actifs spécifiques à la plate-forme, vous devez basculer vers les outils axés sur la plate-forme de shell, qui ignorent le code source multi-plateforme, et au contraire s'appuie sur le code source spécifique à la plateforme.

## Installation Cordova

L'installation de Cordova diffèrera selon le flux de travail ci-dessus que vous choisissez :

*   Flux de travail multi-plateforme : Voir l'Interface de ligne de commande.

*   Flux de travail axée sur la plate-forme : consultez les [Guides de la plate-forme](../platforms/index.html).

Après l'installation de Cordova, il est recommandé de consulter les [Guides de la plate-forme](../platforms/index.html) pour les plates-formes mobiles qui vous mettra au point pour. Il est également recommandé que vous examiniez également le [Guide de la vie privée](../appdev/privacy/index.html), sécurité Guide et prochaines étapes. Pour la configuration de Cordova, consultez le fichier config.xml File. Pour accéder à une fonction native sur un périphérique de JavaScript, consultez le Plugin APIs. Et consulter les autres guides inclus tel qu'il est nécessaire.