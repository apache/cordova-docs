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

title: Guide de sécurité
---

# Guide de sécurité

Le guide suivant contient quelques meilleures pratiques de sécurité que vous devriez considérer lors du développement d'une application de Cordova. S'il vous plaît être conscient que la sécurité est un sujet très compliqué et c'est pourquoi ce guide n'est pas exhaustif. Si vous croyez que vous pouvez contribuer à ce guide, s'il vous plaît n'hésitez pas à déposer une question au traqueur de bogue de Cordova sous ["Documentation"][1]. Ce guide est conçu pour être applicable au développement général de Cordova (toutes plates-formes), mais on notera des considérations particulières spécifiques à la plateforme.

 [1]: https://issues.apache.org/jira/browse/CB/component/12316407

## Ce guide aborde les sujets suivants :

*   Liste blanche
*   Iframes et le mécanisme de rappel Id
*   Certificat épinglage
*   Les certificats auto-signés
*   [Stockage](../../../cordova/storage/storage.html) crypté
*   Conseils généraux
*   Articles recommandés et autres ressources

## Liste blanche

*   Lire et comprendre le Guide liste blanche

*   Domaine liste blanche ne fonctionne pas sur Android API 10 et en dessous et WP8 pour iframes et XMLHttpRequest. Autrement dit, un attaquant peut charger n'importe quel domaine dans un iframe et tout script sur cette page au sein de l'iframe peut accéder directement à Cordova JavaScript objets et les objets de Java natives correspondantes. Prenez cela en considération lors de la génération d'applications pour ces plateformes. En pratique, cela signifie veiller à ce que vous ciblez un Android API supérieur à 10, et si possible ne pas utiliser un iframe pour charger le contenu externe - utilisent le plugin d'inAppBrowser ou d'autres plugins tiers.

## Iframes et le mécanisme de rappel Id

Si le contenu est servi dans une iframe d'un domaine dans la liste blanche, ce domaine auront accès au pont de Cordova native. Cela signifie que si vous liste blanche un réseau publicitaire de tierce partie et servir ces annonces via un iframe, il est possible qu'une annonce malveillant sera en mesure de sortir de l'iframe et effectuer des actions malveillantes. Pour cette raison, vous devez généralement pas utiliser iframes à moins que vous contrôlez le serveur qui héberge le contenu de l'iframe. Notez également qu'il existe des plugins tiers disponibles pour soutenir les réseaux de publicité. Notez que cette instruction n'est pas vraie pour iOS, qui intercepte tout, y compris les connexions de l'iframe.

## Certificat épinglage

Cordova ne supporte pas le vrai certificat épinglage. Le principal obstacle à cela est un manque d'API natives dans Android d'interception des connexions SSL pour effectuer la vérification du certificat du serveur. (Même si il est possible de de certificat épinglage sur Android en Java à l'aide de la JSSE, le mode Web sur Android est écrit en C++ et connexions au serveur sont gérées pour vous par le webview, donc il n'est pas possible d'utiliser Java et JSSE là.) Depuis Apache Cordova est destinée à offrir une API cohérente sur plusieurs plateformes, n'ayant ne pas une capacité dans une plateforme importante casse que l'uniformité.

Il y a des façons de rapprocher l'épinglage de certificat, par exemple, vérifier la que clé publique du serveur (empreinte digitale) est la valeur attendue lorsque votre application démarre ou à d'autres moments différents au cours de la durée de vie de votre application. Il y a des plugins tiers disponibles pour Cordova qui peut le faire. Cependant, ce n'est pas la même chose que le vrai certificat épinglage qui vérifie automatiquement la valeur attendue à chaque connexion au serveur.

## Les certificats auto-signés

Il n'est pas recommandé d'utiliser des certificats auto-signés sur votre serveur. Si tu désires SSL, il est fortement recommandé que votre serveur possède un certificat qui a été dûment signé par une CA connue (autorité de certification). L'incapacité de vrai certificat épinglage fait c'est important.

La raison est qu'accepter les certificats auto-signés contourne la validation de chaîne de certificat, qui permet à n'importe quel certificat de serveur à être considéré comme valide par l'appareil. Cela ouvre la communication aux attaques man-in-the-middle. Il devient très facile pour un pirate d'intercepter et de lire toutes les communications entre l'appareil et le serveur non seulement, mais aussi à modifier la communication. L'appareil ne saura jamais que ce qui se passe parce qu'il ne vérifie pas que le certificat du serveur est signé par une autorité de certification approuvée. Le dispositif n'a aucune preuve que le serveur est qui elle attend. En raison de la facilité de faire une attaque man-in-the-middle, acceptant des certificats auto-signés est seulement marginalement mieux que juste en cours d'exécution http au lieu de https sur un réseau non approuvé. Oui, le trafic devrait être crypté, mais il pourrait être cryptée avec la clé d'un man-in-the-middle, donc le man-in-the-middle peut accéder à tout, si le chiffrement est inutile sauf pour des observateurs passifs. Utilisateurs confiance SSL pour être sûr, et cela délibérément rendrait il précaires, donc l'utilisation SSL devienne trompeuse. Si cela doit être utilisé sur un réseau fiable (c'est-à-dire, vous êtes tout à fait à l'intérieur d'une entreprise contrôlée), puis les certificats auto-signés ne sont pas toujours recommandées. Les deux recommandations dans un réseau de confiance sont simplement utiliser http parce que le réseau lui-même est approuvé, ou d'obtenir un certificat signé par une autorité de certification (ne pas self-signed). Le réseau est approuvé ou il ne l'est pas.

Les principes décrits ici ne sont pas spécifiques à Apache Cordova, elles s'appliquent à toutes les communications client-serveur.

Lorsque vous exécutez Cordova sur Android, à l'aide de `android:debuggable="true"` dans la demande manifeste permettra Erreurs SSL par exemple certificat les erreurs de validation de chaîne sur les certificats auto-signés. Vous pouvez donc utiliser des certificats auto-signés dans cette configuration, mais ce n'est pas une configuration qui doit être utilisée lorsque votre application est en production. Il est destiné à être utilisé uniquement pendant le développement d'applications.

## Stockage crypté

(À DÉTERMINER)

## Conseils généraux

### Ne pas utiliser Android Gingerbread !

*   Définissez votre niveau min-cible-sdk supérieure à 10. 10 API est le pain d'épices et pain d'épice n'est plus supporté par les fabricants de Google ou de dispositif et n'est donc pas recommandé par l'équipe de Cordova. 
*   Pain d'épice s'est avéré être précaire et un des plus ciblés mobile OSs [http://www.mobilemag.com/2012/11/06/andriod-2-3-gingerbread-security/][2]. 
*   La liste blanche sur Android ne fonctionne pas avec le pain d'épice ou inférieur. Autrement dit, qu'un attaquant peut charger un code malveillant dans un iframe qui aurait accès à l'ensemble des APIs Cordova et pourrait utiliser cet accès pour dérober des données personnelles, envoyer des messages SMS à des numéros surtaxés et effectuer d'autres actes de violence. 

 [2]: http://bgr.com/2012/11/06/android-security-gingerbread-malware/

### Utiliser InAppBrowser pour les liens externes

*   Utilisez le InAppBrowser lors de l'ouverture des liens vers tout site Web extérieur. C'est beaucoup plus sûr que la liste blanche, un nom de domaine et y compris le contenu directement dans votre application, car le InAppBrowser utilisera les fonctions de sécurité du navigateur natif et ne donnera pas le site Web de l'accès à votre environnement de Cordova. Même si vous faites confiance au site tiers incluez directement dans votre application, le site Web de cette tierce partie pourrait relier au contenu web malveillant. 

### Valider l'entrée d'utilisateur toutes les

*   Toujours valider toutes les entrées qui accepte votre demande. Cela inclut les noms d'utilisateur, mots de passe, dates, médias téléchargés, etc.. Parce qu'un attaquant pourrait manipuler vos biens HTML et JS (que ce soit par la décompilation de votre application ou à l'aide des outils de débogage comme chrome://inspect), cette validation doit également être effectuée sur votre serveur, surtout avant le transfert des données vers n'importe quel service de back-end. 
*   Autres sources où les données doivent être validées : documents de l'utilisateur, contacts, avis de Poussée

### Ne pas mettre en cache les données sensibles

*   Si les noms d'utilisateur, mot de passe, informations de géolocalisation et autres données sensibles est mis en cache, puis il pourrait potentiellement être récupéré plus tard par une application ou un utilisateur non autorisé.

### Ne pas utiliser eval(), sauf si vous savez ce que vous faites

*   Le JavaScript fonction eval() a une longue histoire d'abus. Utilisation incorrecte peut ouvrir votre code pour les attaques par injection, débogage des difficultés et l'exécution de code plus lente. 

### Ne supposez pas que votre code source est sécurisé

*   Depuis une application de Cordova est construite à partir de HTML et JavaScript actif qui obtenir emballé dans un contenant natif, vous devriez considérer pas votre code pour être sûr. Il est possible de désosser une application de Cordova. 

## Articles recommandés et autres ressources

*   [Antisèche HTML5 sécurité, détaillant comment sécuriser votre application HTML5][3]
*   [Article de PhoneGap sur la sécurité des périphériques, telles que l'utilisation des données chiffrées][4]
*   [Hybride applications basées sur le livre blanc sur des failles de sécurité connues dans Webview][5]

 [3]: https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
 [4]: https://github.com/phonegap/phonegap/wiki/Platform-Security
 [5]: http://www.cis.syr.edu/~wedu/Research/paper/webview_acsac2011.pdf