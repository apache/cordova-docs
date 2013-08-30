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

# Domain Whitelist Guide

## Vue d'ensemble

Domaine liste blanche est un modèle de sécurité qui contrôle l'accès à des domaines externes, tels que `http://google.com` . Stratégie de sécurité par défaut de Apache Cordova permet d'accéder à n'importe quel site. Avant de déplacer votre application à la production, vous devriez revoir la liste blanche et déclarer l'accès au réseau des domaines et sous-domaines.

## Spécification

Domaine whitelisting jette les bases pour la spécification [W3C Widget accès][1] . Dans la spécification de l'accès de Widget, le `<access>` élément est utilisé pour déclarer l'accès aux domaines réseau spécifiques. À l'avenir, Apache Cordova va résumer les implémentations de liste blanche de plate-forme à la spécification W3C Widget accès. Toutefois, pour l'instant, chaque plate-forme doit implémenter sa propre liste blanche du domaine.

 [1]: http://www.w3.org/TR/widgets-access/

## Syntaxe

Accès à [google.com][2]:

 [2]: http://google.com

    http://Google.com
    

Accès sécurisé [google.com][3] ( `https://` ) :

 [3]: https://google.com

    https://Google.com
    

Accès pour le sous-domaine [maps.google.com][4]:

 [4]: http://maps.google.com

    http://Maps.google.com
    

Accès à tous les sous-domaines sur [google.com][2] (p. ex., [mail.google.com][5] et [docs.google.com][6]) :

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

Accès à tous les domaines (par exemple, [google.com][2] et [developer.mozilla.org][7]) :

 [7]: http://developer.mozilla.org

    *
    

## Android

### Détails

Les règles de liste blanche se trouvent dans `res/xml/config.xml` et déclarée avec l'élément`<access origin="..." />`.

Android souscrit pleinement la syntaxe de la liste blanche.

### Syntaxe

Accès à [google.com][2]:

    < accéder origin="http://google.com" / >
    

## BlackBerry

### Détails

Les règles de liste blanche se trouvent dans `www/config.xml` et déclarée avec l'élément`<access uri="..." />`.

Pour une référence complète, consultez la [documentation de l'élément d'accès BlackBerry WebWorks][8].

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### Syntaxe

Accès à [google.com][2]:

    < accéder uri="http://google.com" sous-domaines = "false" / >
    

Accès à [maps.google.com][4]:

    < accéder uri="http://maps.google.com" sous-domaines = "false" / >
    

Accès à tous les sous-domaines sur [Google.fr][2]:

    < accéder uri="http://google.com" sous-domaines = "true" / >
    

Accès à tous les domaines, y compris `file://` protocole :

    < accès uri = "*" sous-domaines = « true » / >
    

## iOS

### Détails

Les règles de liste blanche se trouvent dans `AppName/config.xml` et déclarée avec l'élément`<access origin="..." />`.

iOS soutient pleinement la syntaxe de la liste blanche.

**Remarque :** origines spécifiés sans un protocole, tel que `www.apache.org` plutôt que `http://www.apache.org` , par défaut à tous les `http` , `https` , `ftp` , et `ftps` régimes.

### Syntaxe

Caractères génériques sur iOS ( `*` ) sont plus souples que la spécification [W3C Widget accès][1] .

Accès à tous les sous-domaines et les TLDs ( `.com` , `.net` , etc.) :

    *. google.*
    

## Windows Phone (7 & 8)

Les règles de liste blanche se trouvent dans `config.xml` et déclarée avec l'élément`<access origin="..." />`.

Android soutient pleinement la syntaxe de la liste blanche.

### Syntaxe

Accès à [google.com][2]:

    < accéder origine = « http://google.com » / >
    

## Paciarelli

### Détails

Du répertoire racine l'application `config.xml` fichier spécifie les règles de liste blanche de domaine, en utilisant le `<access origin="..." />` élément. Pour une référence complète, consultez la \[documentation de paciarelli accès à des ressources du réseau externe\] \[10\].

### Syntaxe

Accès à [google.com][2]:

    < accéder origin="http://google.com" sous-domaines = "false" / >
    

Accès sécurisé [google.com][3] ( `https://` ) :

    < accéder origin="https://google.com" sous-domaines = "false" / >
    

Accès à tous les sous-domaines sur [Google.fr][2]:

    < accéder origin="http://google.com" sous-domaines = "true" / >
    

Accès à tous les domaines, y compris `file://` protocole :

    < accéder origine = "*" sous-domaines = « true » / >