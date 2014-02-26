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

## Amazon Fire OS liste blanche

Règles spécifiques à la plateforme whitelisting se trouvent dans`res/xml/config.xml`.

## Android liste blanche

Règles spécifiques à la plateforme whitelisting se trouvent dans`res/xml/config.xml`.

**NOTE**: sous Android 2.3 et avant, domaine liste blanche ne fonctionne que pour `href` , les liens hypertexte non référencé ressources telles que les images et les scripts. Prendre des mesures pour éviter les scripts d'être injecté dans l'application.

Navigation vers les domaines non-liste blanche via `href` lien hypertexte, la page à ouvrir dans le navigateur par défaut plutôt qu'au sein de l'application. (Comparez ceci au comportement d'iOS noté ci-dessous).

## iOS liste blanche

Règles de liste blanche de la plate-forme sont trouvent dans le répertoire application nommé `config.xml` fichier.

Origines spécifiés sans un protocole, tel que `www.apache.org` plutôt que `http://www.apache.org` , par défaut à tous les `http` , `https` , `ftp` , et `ftps` régimes.

Caractères génériques sur la plateforme iOS sont plus souples que dans la spécification [W3C Widget accès][1] . Par exemple, le texte suivant accède tous les sous-domaines et domaines de premier niveau tels que `.com` et `.net` :

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

(Pour plus d'informations sur la prise en charge, consultez documentation de BlackBerry sur l' [élément access][8].)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Changements d'iOS 3.1.0

Avant la version 3.1.0, Cordova-iOS inclus quelques extensions non standards pour le schéma de liste blanche domaine pris en charge par les autres plateformes de Cordova. En 3.1.0, le whitelist iOS est maintenant conforme à la syntaxe de liste blanche de ressource décrite en haut de ce document. Si vous mettez à niveau pre-3.1.0, et que vous utilisiez ces extensions, vous devrez peut-être modifier votre `config.xml` fichier afin de continuer la liste blanche du même ensemble de ressources comme avant.

Plus précisément, ces motifs doivent être actualisés :

*   `apache.org`(pas de protocole): cela correspondrait précédemment `http` , `https` , `ftp` , et `ftps` des protocoles. Remplacez " `*://apache.org/*` " d'inclure tous les protocoles, ou inclure une ligne pour chaque protocole, vous devez appuyer.

*   `http://apache.*`(caractère générique à la fin du domaine): cela correspondrait auparavant tous les top domaines niveau, y compris tous les TLDs possibles de deux lettres (mais pas utiles domaines aiment. co.uk). Inclure une ligne pour chaque TLD qui vous en fait Contrôlez et devez whitelist.

*   `h*t*://ap*he.o*g`(caractères génériques pour les lettres manquantes au hasard): ceux-ci ne sont plus prises en charge ; changement d'inclure une ligne pour chaque domaine et le protocole que vous devez réellement whitelist.

## Windows Phone liste blanche

Les règles de liste blanche pour Windows Phone 7 et 8 se trouvent dans l'application `config.xml` fichier.

## Liste blanche paciarelli

Règles de liste blanche se trouvent dans l'application de `config.xml` fichier. La plate-forme s'appuie sur les mêmes `subdomains` attribut comme la plateforme BlackBerry. (Pour plus d'informations sur la prise en charge, consultez documentation de paciarelli sur l' [élément access][9].)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm