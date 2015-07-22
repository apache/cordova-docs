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

Domaine liste blanche est un modèle de sécurité qui contrôle l'accès à des domaines externes sur lesquels votre application n'a aucun contrôle. Cordova fournit une stratégie de sécurité configurables pour définir quels sites externes sont accessibles. Par défaut, de nouvelles applications sont configurées pour autoriser l'accès à n'importe quel site. Avant de déplacer votre application à la production, vous devez formuler une liste blanche et permettre l'accès au réseau des domaines et sous-domaines.

Pour Android et iOS (à partir de leurs 4,0 versions), politique de sécurité de Cordova est extensible via une interface plugin. Votre application doit utiliser le [cordova-plugin-whitelist][1], car il fournit la meilleure sécurité et configurabilité que les versions précédentes de Cordova. Bien qu'il soit possible d'implémenter votre propre plugin whitelist, il n'est pas recommandée à moins que votre application a des besoins de politique de sécurité très spécifiques. Voir le [cordova-plugin-whitelist][1] pour plus de détails sur son utilisation et de configuration.

 [1]: https://github.com/apache/cordova-plugin-whitelist

Pour d'autres plateformes, Cordova respecte la spécification [W3C Widget accès][2], qui se fonde sur l'élément `< access >` dans le fichier `config.xml` du PPA pour activer l'accès réseau à des domaines spécifiques. Pour les projets qui s'appuient sur le workflow de CLI décrit dans l'Interface de ligne de commande, ce fichier se trouve dans le répertoire racine du projet. Autrement pour les chemins de développement spécifiques à la plateforme, les endroits sont énumérés dans les sections ci-dessous. (Voir les différents Guides de plate-forme pour plus d'informations sur chaque plate-forme).

 [2]: http://www.w3.org/TR/widgets-access/

Les exemples suivants illustrent la syntaxe de `< access >` liste blanche :

*   Accès à [google.com][3]:
    
        <access origin="http://google.com" />
        

*   Accès sécurisé [google.com][4] ( `https://` ) :
    
        <access origin="https://google.com" />
        

*   Accès pour le sous-domaine [maps.google.com][5]:
    
        <access origin="http://maps.google.com" />
        

*   Accès à tous les sous-domaines sur [google.com][3], par exemple [mail.google.com][6] et [docs.google.com][7]:
    
        <access origin="http://*.google.com" />
        

*   Accès à *tous les* domaines, par exemple, [google.com][3] et [developer.mozilla.org][8]:
    
        <access origin="*" />
        
    
    C'est la valeur par défaut pour les projets CLI nouvellement créés.

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

Sachez que certains sites Web peut rediriger automatiquement depuis leur page d'accueil à une autre url, par exemple en utilisant le protocole https ou à un domaine de chaque pays. Par exemple, http://www.google.com redirigera pour utiliser SSL/TLS à https://www.google.com et puis peut également rediriger vers une géographie comme https://www.google.co.uk. Ces scénarios peuvent nécessiter des entrées de liste blanche modifiées ou supplémentaires au-delà de votre condition initiale. Pensez ce que vous construisez votre liste blanche.

Notez que la liste d'autorisation s'applique uniquement à la principale webview Cordova et ne s'applique pas à une webview InAppBrowser ou l'ouverture des liens dans le navigateur web de système.

## Amazon Fire OS liste blanche

Règles spécifiques à la plateforme whitelisting se trouvent dans`res/xml/config.xml`.

## Android liste blanche

Comme ci-dessus, voir [cordova-plugin-whitelist][1] pour plus de détails. Pour cordova-android avant 4.0.0, voir les anciennes versions de cette documentation.

## iOS liste blanche

Comme ci-dessus, voir [cordova-plugin-whitelist][1] pour plus de détails. Cordova-iOS avant 4.0.0, voir les anciennes versions de cette documentation.

## BlackBerry 10 liste blanche

Les règles de liste blanche se trouvent dans `www/config.xml`.

Utilisation de quelques dizaines de blackBerry de caractères génériques se distingue des autres plates-formes de deux façons :

*   Tout contenu accédé par `XMLHttpRequest` doit être déclarée explicitement. Réglage `origin="*"` ne fonctionne pas dans ce cas. Sinon, tous sécurité web peut être désactivée à l'aide de la préférence `WebSecurity` décrite dans Configuration de BlackBerry :
    
        <preference name="websecurity" value="disable" />
        

*   Comme alternative au paramètre `*.domain`, définir un attribut supplémentaire `subdomains` `true`. Il devrait être la valeur `false` par défaut. Par exemple, le texte suivant permet d'accéder à `google.com`, `maps.google.com` et `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    L'accès de passage suivant vers `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Spécifier l'accès à tous les domaines, y compris le protocole local `file://` :
    
        <access origin="*" subdomains="true" />
        

(Pour plus d'informations sur la prise en charge, consultez documentation de BlackBerry sur l' [élément access][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox OS

Dans Firefox OS il n'y a aucun concept de liste blanche un domaine spécifique. Au lieu de cela, il y a une autorisation spéciale appelée [SystemXHR][10]. Il est nécessaire d'ajouter cette autorisation à `config.xml` :

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

L'objet `XMLHttpRequest` doit être instancié avec deux paramètres `mozAnon` et `mozSystem` :

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

Cette solution est transparente, donc il n'y a pas de différence pour d'autres plateformes.

## Windows Phone liste blanche

Les règles de liste blanche pour Windows Phone 8 se trouvent dans le fichier `config.xml` du PPA.

## Liste blanche paciarelli

Règles de liste blanche sont trouvent dans le fichier `config.xml` du PPA. La plate-forme repose sur le même attribut de `subdomains` comme la plateforme BlackBerry. (Pour plus d'informations sur la prise en charge, consultez documentation de paciarelli sur l' [élément access][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm