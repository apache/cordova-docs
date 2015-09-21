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

title: Guide de la liste blanche
---

# Guide de la liste blanche

## Vue d'ensemble

Ressources liste blanche est un modèle de sécurité qui contrôle l'accès aux ressources réseau externe, tel que `http://google.com` . Stratégie de sécurité par défaut de Apache Cordova permet d'accéder à toute ressource sur n'importe quel site sur Internet. Avant de déplacer votre application à la production, vous devriez revoir la liste blanche et déclarer l'accès au réseau des domaines et sous-domaines.

## Spécification

Domaine whitelisting jette les bases pour la spécification [W3C Widget accès][1] . Dans la spécification de l'accès de Widget, le `<access>` élément est utilisé pour déclarer l'accès aux ressources de réseau spécifiques. Apache Cordova s'étend ce concept afin de permettre la liste blanche des ressources réseau individuel (URLs). À l'avenir, Apache Cordova va résumer les implémentations de liste blanche de plate-forme. Toutefois, pour l'instant chaque plate-forme implémente sa propre liste blanche de ressource ou de domaine. Les différences entre les implémentations de plate-forme sont décrites plus loin dans ce document.

 [1]: http://www.w3.org/TR/widgets-access/

Le modèle général pour les entrées de la liste blanche conforme à la spécification "[correspondre modèle][2]" pour Google Chrome emballés Apps. Les ressources sont spécifiées par l'URL, mais un astérisque (*) caractère peut être utilisé comme « Joker » dans plusieurs endroits pour indiquer « n'importe quelle valeur peut aller ici ». Des exemples précis sont indiqués ci-dessous.

 [2]: http://developer.chrome.com/apps/match_patterns.html

## Syntaxe

Accès à toutes les ressources à [google.com][3]:

 [3]: http://google.com

    http://google.com/*
    

Accès à toutes les ressources à sûr [google.com][4] ( `https://` ) :

 [4]: https://google.com

    https://Google.com/ *
    

Accès pour le sous-domaine spécifique [maps.google.com][5]:

 [5]: http://maps.google.com

    http://maps.google.com/*
    

Accès à tous les sous-domaines sur [google.com][3] (p. ex., [mail.google.com][6] et [docs.google.com][7]) :

 [6]: http://mail.google.com
 [7]: http://docs.google.com

    http://*.google.com/*
    

Accès à toutes les ressources sur [www.google.com][8] sous le chemin d'accès "/ mobile" :

 [8]: http://www.google.com

    http://www.google.com/mobile/*
    

Accès à [google.com][3] sur n'importe quel protocole (HTTP, HTTPS, FTP, etc.) :

    *://google.com/*
    

Accès à toutes les ressources sur Internet (par exemple, [google.com][3] et [developer.mozilla.org][9]) :

 [9]: http://developer.mozilla.org

    *
    

## Android

### Détails

Les règles de liste blanche se trouvent dans `res/xml/config.xml` et déclarée avec l'élément`<access origin="..." />`.

Android soutient pleinement la syntaxe de la liste blanche.

### Syntaxe

Accès à [google.com][3]:

    <access origin="http://google.com/*" />
    

## BlackBerry 10

### Détails

Les règles de liste blanche se trouvent dans `www/config.xml` et déclarée avec l'élément`<access origin="..." />`.

BlackBerry 10 gère les caractères génériques différemment des autres plates-formes de deux façons :

1) Contenu accédé par XMLHttpRequest doit être déclarée explicitement. origine = "*" on respectera pas pour ce cas d'utilisation. Sinon, toute sécurité web peut être désactivée à l'aide d'une préférence.

2) sous-domaines = "true" peut être utilisé à la place de "* *.domain"

### Syntaxe

Accès à [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Accès à [maps.google.com][5]:

    <access origin="http://maps.google.com" subdomains="false" />
    

Accès à tous les sous-domaines sur [Google.fr][3]:

    <access origin="http://google.com" subdomains="true" />
    

Accès à tous les domaines, y compris `file://` protocole :

    <access origin="*" subdomains="true" />
    

Désactiver toute sécurité web :

    <preference name="websecurity" value="disable" />
    

## iOS

### Détails

Les règles de liste blanche se trouvent dans `AppName/config.xml` et déclarée avec l'élément`<access origin="..." />`.

iOS soutient pleinement la syntaxe de la liste blanche.

### Changé en 3.1.0 :

Avant la version 3.1.0, Cordova-iOS inclus quelques extensions non standards pour le régime de whilelisting de domaine pris en charge par les autres plateformes de Cordova. En 3.1.0, le whitelist iOS est maintenant conforme à la syntaxe de liste blanche de ressource décrite en haut de ce document. Si vous mettez à niveau pre-3.1.0, et que vous utilisiez ces extensions, vous devrez peut-être modifier votre `config.xml` fichier afin de continuer la liste blanche du même ensemble de ressources comme avant.

Plus précisément, ces motifs doivent être actualisés :

*   " `apache.org` " (pas de protocole): cela correspondrait précédemment `http` , `https` , `ftp` , et `ftps` des protocoles. Remplacez " `*://apache.org/*` " d'inclure tous les protocoles, ou inclure une ligne pour chaque protocole, vous devez appuyer.

*   " `http://apache.*` " (caractère générique à la fin du domaine): cela correspondrait auparavant tous les top domaines niveau, y compris tous les TLDs possibles de deux lettres (mais pas utiles domaines aiment. co.uk). Inclure une ligne pour chaque TLD qui vous en fait Contrôlez et devez whitelist.

*   " `h*t*://ap*he.o*g` " (caractères génériques pour les lettres manquantes au hasard): ceux-ci ne sont plus supportés ; changement à inclure une ligne pour chaque domaine et protocole que vous avez réellement besoin de liste blanche.

### Syntaxe

Accès à [google.com][3]:

    <access origin="http://google.com/*" />
    

## Windows Phone (7 & 8)

Les règles de liste blanche se trouvent dans `config.xml` et déclarée avec l'élément`<access origin="..." />`.

### Syntaxe

Accès à [google.com][3]:

    <access origin="http://google.com" />
    

## Paciarelli

### Détails

Du répertoire racine l'application `config.xml` fichier spécifie les règles de liste blanche de domaine, en utilisant le `<access origin="..." />` élément. Pour une référence complète, consultez la [documentation de paciarelli accès à des ressources du réseau externe][10].

 [10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources

### Syntaxe

Accès à [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Accès sécurisé [google.com][4] ( `https://` ) :

    <access origin="https://google.com" subdomains="false" />
    

Accès à tous les sous-domaines sur [Google.fr][3]:

    <access origin="http://google.com" subdomains="true" />
    

Accès à tous les domaines, y compris `file://` protocole :

    <access origin="*" subdomains="true" />