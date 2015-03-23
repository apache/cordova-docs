* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guide de la liste blanche

Domaine liste blanche est un modèle de sécurité qui contrôle l'accès à des domaines externes sur lesquels votre application n'a aucun contrôle. Stratégie de sécurité par défaut de Cordova permet d'accéder à n'importe quel site. Avant de déplacer votre application à la production, vous devez formuler une liste blanche et permettre l'accès au réseau des domaines et sous-domaines.

Cordova respecte la spécification [W3C Widget accès][1] , qui s'appuie sur le `<access>` élément au sein du PPA `config.xml` fichier pour activer l'accès réseau à des domaines spécifiques. Pour les projets qui s'appuient sur le workflow de CLI décrit dans l'Interface de ligne de commande, ce fichier se trouve dans le répertoire racine du projet. Autrement pour les chemins de développement spécifiques à la plateforme, les endroits sont énumérés dans les sections ci-dessous. (Voir les différents Guides de plate-forme pour plus d'informations sur chaque plate-forme).

 [1]: http://www.w3.org/TR/widgets-access/

Les exemples suivants illustrent la syntaxe de la liste blanche :

*   Accès à [google.com][2]:
    
        <access origin="http://google.com" />
        

*   Accès sécurisé [google.com][3] ( `https://` ) :
    
        <access origin="https://google.com" />
        

*   Accès pour le sous-domaine [maps.google.com][4]:
    
        <access origin="http://maps.google.com" />
        

*   Accès à tous les sous-domaines sur [google.com][2], par exemple [mail.google.com][5] et [docs.google.com][6]:
    
        <access origin="http://*.google.com" />
        

*   Accès à *tous les* domaines, par exemple, [google.com][2] et [developer.mozilla.org][7]:
    
        <access origin="*" />
        
    
    C'est la valeur par défaut pour les projets CLI nouvellement créés.

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

Sachez que certains sites Web peut rediriger automatiquement depuis leur page d'accueil à une autre url, par exemple en utilisant le protocole https ou à un domaine de chaque pays. Par exemple, http://www.google.com redirigera pour utiliser SSL/TLS à https://www.google.com et puis peut également rediriger vers une géographie comme https://www.google.co.uk. Ces scénarios peuvent nécessiter des entrées de liste blanche modifiées ou supplémentaires au-delà de votre condition initiale. Pensez ce que vous construisez votre liste blanche.

Notez que la liste d'autorisation s'applique uniquement à la principale webview Cordova et ne s'applique pas à une webview InAppBrowser ou l'ouverture des liens dans le navigateur web de système.

## Amazon Fire OS liste blanche

Règles spécifiques à la plateforme whitelisting se trouvent dans`res/xml/config.xml`.

## Android liste blanche

Règles spécifiques à la plateforme whitelisting se trouvent dans`res/xml/config.xml`.

**NOTE**: sous Android 2.3 et avant, domaine liste blanche ne fonctionne que pour `href` , les liens hypertexte non référencé ressources telles que les images et les scripts. Prendre des mesures pour éviter les scripts d'être injecté dans l'application.

**NOTE**: afin d'éviter des URL externes telles que `mailto:` de s'ouvrir dans le webview Cordova à partir de Cordova 3.6.0, en spécifiant `origin="*"` implicitement ajoutera des règles pour les protocoles http et https. Si vous souhaitez accéder à des protocoles personnalisés supplémentaires, puis vous devez également les ajouter explicitement à la liste blanche. Aussi voir « Externe demande Whitelist » ci-dessous pour plus d'informations sur le lancement d'applications externes par URL.

**NOTE**: certaines demandes de réseau ne passent pas par la Cordova Whitelist. Cela inclut < vidéo > et < audio > resouces, WebSocket connexions (sur Android 4.4 +) et éventuellement d'autres demandes non-http. Sur Android 4.4 +, vous pouvez inclure un en-tête [CSP][8] dans vos documents HTML pour restreindre l'accès à ces ressources. Sur les anciennes versions d'Android, ce n'est pas possible de les limiter.

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### Application externe Whitelist

Cordova 3.6.0 introduit une deuxième liste blanche, pour restreindre qui URLs sont autorisés à lancer des applications externes. Dans les versions précédentes de Cordova, toutes les URLs non-http, tels que `mailto:` , `geo:` , `sms:` et `intent` , ont été implicitement autorisé à être la cible d'une balise < a >. En raison du potentiel pour une demande d'informations des fuites, si une vulnérabilité XSS permet à un attaquant de construire des liens arbitraires, ces URL doit être également, en liste blanche à partir de Cordova 3.6.0.

Pour permettre à un modèle d'URL lancer une application externe, utiliser une balise < accès > dans votre `config.xml` fichier, avec la `launch-external` attribut défini.

Exemples :

*   Pour autoriser les liens envoyer des messages SMS :
    
        < accéder origine = "sms: *" lancement-externe = « yes » / >
        

*   Pour autoriser les liens pour ouvrir les cartes :
    
        < accéder origine = "geo: *" lancement-externe = « yes » / >
        

*   Pour autoriser les liens vers example.com pour ouvrir dans un navigateur externe :
    
        < accéder origine = "http://example.com/ *" lancement-externe = « yes » / >
        

*   Pour permettre à tous les sites Web non-liste blanche ouvrir dans un navigateur externe: (c'est le même que le comportement précédent lorsque l'URL dans la liste non-blanche)
    
        < accéder origine = « http://* » lancement-externe = « yes » / >< origine d'accès = « https://* » lancement-externe = « yes » / >
        

*   Pour permettre l'accès à toutes les URL, revenant sur la politique de Cordova 3.5.0 (non recommandée) :
    
        < accéder origine = "*" lancement-externe = « yes » / >
        

Lorsque vous naviguez vers une URL à partir de votre application, la whitelist interal est testé tout d'abord, et si l'URL n'est pas là en liste blanche, puis la liste d'autorisation externe est testé. Cela signifie que toute `http:` ou `https:` les URLs qui correspondent à ces deux listes blanches sera ouvert à l'intérieur de l'application de Cordova, plutôt que de lancer le navigateur externe.

## iOS liste blanche

Règles de liste blanche de la plate-forme sont trouvent dans le répertoire application nommé `config.xml` fichier.

Origines spécifiés sans un protocole, tel que `www.apache.org` plutôt que `http://www.apache.org` , par défaut à tous les `http` , `https` , `ftp` , et `ftps` régimes.

Caractères génériques sur la plateforme iOS sont plus souples que dans la spécification [W3C Widget accès][1] . Par exemple, le texte suivant accède à tous les sous-domaines et domaines de premier niveau tels que `.com` et `.net` :

        <access origin="*.google.*" />
    

Contrairement à la plateforme Android susmentionnée, en accédant à des domaines non-liste blanche via `href` lien hypertexte sur iOS empêche la page d'ouverture à tous.

## BlackBerry 10 liste blanche

Les règles de liste blanche se trouvent dans`www/config.xml`.

Utilisation de quelques dizaines de blackBerry de caractères génériques se distingue des autres plates-formes de deux façons :

*   Tout contenu accédé par `XMLHttpRequest` doivent être déclarées explicitement. Mise en `origin="*"` ne fonctionne pas dans ce cas. Sinon, toutes les sécurités de web peuvent être désactivée à l'aide de la `WebSecurity` préférence décrite dans Configuration de BlackBerry :
    
        <preference name="websecurity" value="disable" />
        

*   Comme alternative au paramètre `*.domain` , définissez une nouvelle `subdomains` attribuent à `true` . Il doit avoir la valeur `false` par défaut. Par exemple, ce qui suit permet d'accéder à `google.com` , `maps.google.com` , et `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Le passage suivant l'accès à `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    L'accès à tous les domaines, y compris le local `file://` protocole :
    
    <access origin="*" subdomains="true" />

(Pour plus d'informations sur la prise en charge, consultez documentation de BlackBerry sur l' [élément access][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox OS

Dans Firefox OS il n'y a aucun concept de liste blanche un domaine spécifique. Au lieu de cela, il y a une autorisation spéciale appelée [SystemXHR][10]. Il est nécessaire d'ajouter cette autorisation à `config.xml` :

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    < nom de plate-forme = « firefoxos » >< nom de permission = privilégié « systemXHR » = « vraie » description = « charger les données du serveur » / >< / plate-forme >
    

Le `XMLHttpRequest` objet doit être instancié avec deux paramètres `mozAnon` et `mozSystem` :

    demande de var = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true}) ;
    

Cette solution est transparente, donc il n'y a pas de différence pour d'autres plateformes.

## Changements d'iOS 3.1.0

Avant la version 3.1.0, Cordova-iOS inclus quelques extensions non standards pour le régime de whilelisting de domaine pris en charge par les autres plateformes de Cordova. En 3.1.0, le whitelist iOS est maintenant conforme à la syntaxe de liste blanche de ressource décrite en haut de ce document. Si vous mettez à niveau pre-3.1.0, et que vous utilisiez ces extensions, vous devrez peut-être modifier le `config.xml` fichier pour continuer la liste blanche le même ensemble de ressources comme avant.

Plus précisément, ces motifs doivent être actualisés :

*   " `apache.org` " (pas de protocole): cela correspondrait précédemment `http` , `https` , `ftp` , et `ftps` des protocoles. Remplacez " `*://apache.org/*` " d'inclure tous les protocoles, ou inclure une ligne pour chaque protocole, vous devez appuyer.

*   " `http://apache.*` " (caractère générique à la fin du domaine): cela correspondrait auparavant tous les top domaines niveau, y compris tous les TLDs possibles de deux lettres (mais pas utiles domaines aiment. co.uk). Inclure une ligne pour chaque TLD qui vous en fait Contrôlez et devez whitelist.

*   " `h*t*://ap*he.o*g` " (caractères génériques pour les lettres manquantes au hasard): ceux-ci ne sont plus supportés ; changement à inclure une ligne pour chaque domaine et protocole que vous avez réellement besoin de liste blanche.

## Windows Phone liste blanche

Les règles de liste blanche pour Windows Phone 8 se trouvent dans l'application `config.xml` fichier.

## Liste blanche paciarelli

Règles de liste blanche se trouvent dans l'application de `config.xml` fichier. La plate-forme s'appuie sur les mêmes `subdomains` attribut comme la plateforme BlackBerry. (Pour plus d'informations sur la prise en charge, consultez documentation de paciarelli sur l' [élément access][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm