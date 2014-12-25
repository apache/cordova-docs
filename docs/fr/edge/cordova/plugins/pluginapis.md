---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Plugin API

Cordova est livré avec un ensemble minimal d'API, et projets ajoutent quelles API supplémentaire dont ils ont besoin grâce à des plugins.

Vous pouvez rechercher parmi tous les plugins existants (y compris plugins tiers) en utilisant le [Plugin Registry][1].

 [1]: http://plugins.cordova.io/

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

 [2]: http://plugins.cordova.io/#/package/org.apache.cordova.battery-status
 [3]: http://plugins.cordova.io/#/package/org.apache.cordova.camera
 [4]: http://plugins.cordova.io/#/package/org.apache.cordova.console
 [5]: http://plugins.cordova.io/#/package/org.apache.cordova.contacts
 [6]: http://plugins.cordova.io/#/package/org.apache.cordova.device
 [7]: http://plugins.cordova.io/#/package/org.apache.cordova.device-motion
 [8]: http://plugins.cordova.io/#/package/org.apache.cordova.device-orientation
 [9]: http://plugins.cordova.io/#/package/org.apache.cordova.dialogs
 [10]: http://plugins.cordova.io/#/package/org.apache.cordova.file
 [11]: http://plugins.cordova.io/#/package/org.apache.cordova.file-transfer
 [12]: http://plugins.cordova.io/#/package/org.apache.cordova.geolocation
 [13]: http://plugins.cordova.io/#/package/org.apache.cordova.globalization
 [14]: http://plugins.cordova.io/#/package/org.apache.cordova.inappbrowser
 [15]: http://plugins.cordova.io/#/package/org.apache.cordova.media
 [16]: http://plugins.cordova.io/#/package/org.apache.cordova.media-capture
 [17]: http://plugins.cordova.io/#/package/org.apache.cordova.network-information
 [18]: http://plugins.cordova.io/#/package/org.apache.cordova.splashscreen
 [19]: http://plugins.cordova.io/#/package/org.apache.cordova.vibration
 [20]: https://github.com/apache/cordova-plugin-statusbar/blob/master/doc/index.md

Non anglais traductions de ces documents plugin se trouvent en regardant les anciennes versions de la documentation de Cordova. Utilisez le menu déroulant en très haut à droite de ce site les versions.