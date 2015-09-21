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

title: Plugin API
---

# Plugin API

Cordova est livré avec un ensemble minimal d'API, et projets ajoutent quelles API supplémentaire dont ils ont besoin grâce à des plugins.

Vous pouvez rechercher parmi tous les plugins existants (y compris les plugins tiers) sur [NPM][1].

 [1]: https://www.npmjs.com/search?q=ecosystem%3Acordova

L'ensemble traditionnel de plugins de Cordova core sont les suivantes :

*   [État de la batterie][2]
    
    > Surveiller l'état de la batterie de l'appareil.

*   [Appareil photo][3]
    
    > Capturer une photo en utilisant la caméra de l'appareil.

*   [Console][4]
    
    > Ajoutez des capacités supplémentaires à console.log().

*   [Contacts][5]
    
    > Travailler avec la base de données contacts périphériques.

*   [Dispositif][6]
    
    > Recueillir de l'information spécifique de périphérique.

*   [Mouvement de dispositif (accéléromètre)][7]
    
    > Puiser dans le détecteur de mouvement de l'appareil.

*   [Dispositif Orientation (boussole)][8]
    
    > Obtenir de la direction qui pointe vers l'appareil.

*   [Boîtes de dialogue][9]
    
    > Notifications de l'appareil visuel.

*   [Système de fichiers][10]
    
    > Crochet dans le système de fichier natif via JavaScript.

*   [Transfert de fichiers][11]
    
    > Crochet dans le système de fichier natif via JavaScript.

*   [Géolocalisation][12]
    
    > Sensibilisez votre emplacement de l'application.

*   [Mondialisation][13]
    
    > Permettre la représentation d'objets spécifiques aux paramètres régionaux.

*   [InAppBrowser][14]
    
    > Lancer URL dans une autre instance du navigateur en app.

*   [Media][15]
    
    > Enregistrer et lire des fichiers audio.

*   [Capture de médias][16]
    
    > Capturer les fichiers multimédias à l'aide des applications de capture pour le multimédia de l'appareil.

*   [Informations réseau (connexion)][17]
    
    > Vérifier rapidement l'état du réseau et informations de réseau cellulaire.

*   [SplashScreen][18]
    
    > Afficher et masquer l'écran de démarrage des applications.

*   [Vibration][19]
    
    > Une API à vibrer l'appareil.

*   [StatusBar][20]
    
    > Une API pour montrer, cacher et configuration fond barre de statut.

*   [Liste blanche][21]
    
    > Un plugin pour les requêtes réseau liste blanche. Devez installer pour que toutes les demandes réseau dans vos applications.

*   [Liste d'autorisation héritée][22]
    
    > Un plugin pour utiliser l'ancien style de liste blanche avant d'être arraché et changé dans le plugin whitelist.

 [2]: https://www.npmjs.com/package/cordova-plugin-battery-status
 [3]: https://www.npmjs.com/package/cordova-plugin-camera
 [4]: https://www.npmjs.com/package/cordova-plugin-console
 [5]: https://www.npmjs.com/package/cordova-plugin-contacts
 [6]: https://www.npmjs.com/package/cordova-plugin-device
 [7]: https://www.npmjs.com/package/cordova-plugin-device-motion
 [8]: https://www.npmjs.com/package/cordova-plugin-device-orientation
 [9]: https://www.npmjs.com/package/cordova-plugin-dialogs
 [10]: https://www.npmjs.com/package/cordova-plugin-file
 [11]: https://www.npmjs.com/package/cordova-plugin-file-transfer
 [12]: https://www.npmjs.com/package/cordova-plugin-geolocation
 [13]: https://www.npmjs.com/package/cordova-plugin-globalization
 [14]: https://www.npmjs.com/package/cordova-plugin-inappbrowser
 [15]: https://www.npmjs.com/package/cordova-plugin-media
 [16]: https://www.npmjs.com/package/cordova-plugin-media-capture
 [17]: https://www.npmjs.com/package/cordova-plugin-network-information
 [18]: https://www.npmjs.com/package/cordova-plugin-splashscreen
 [19]: https://www.npmjs.com/package/cordova-plugin-vibration
 [20]: https://www.npmjs.com/package/cordova-plugin-statusbar
 [21]: https://www.npmjs.com/package/cordova-plugin-whitelist
 [22]: https://www.npmjs.com/package/cordova-plugin-legacy-whitelist

Non anglais traductions de ces documents plugin se trouve en allant sur le plugin github repos et à la recherche dans le dossier docs