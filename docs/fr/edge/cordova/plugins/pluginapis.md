* * *

licence : une licence à l'Apache Software Foundation (ASF) au titre d'un ou plusieurs contrats de licence pour le cotisant. Voir le fichier avis distribué avec ce travail d'information additionnelle concernant les droits d'auteur. L'ASF licenses ce fichier vous sous Apache License, Version 2.0 (la "licence") ; vous ne pouvez utiliser ce fichier sauf en conformité avec la licence. Vous pouvez obtenir une copie de la licence à

           http://www.Apache.org/licenses/License-2.0 sauf si requis par la loi applicable ou accord écrit, distribué sous la licence de logiciel est distribué sur un « Tel quel » fondement, sans garanties ou CONDITIONS d'aucune sorte, explicite ou implicite.  Voir la licence pour la langue spécifique régissant les autorisations et les limites
    

## aux termes de la licence.

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
 [13]: http://plugins.cordova.io/#/package/org.apache.globalization
 [14]: http://plugins.cordova.io/#/package/org.apache.cordova.inappbrowser
 [15]: http://plugins.cordova.io/#/package/org.apache.cordova.media
 [16]: http://plugins.cordova.io/#/package/org.apache.cordova.media-capture
 [17]: http://plugins.cordova.io/#/package/org.apache.cordova.network-information
 [18]: http://plugins.cordova.io/#/package/org.apache.cordova.splashscreen
 [19]: http://plugins.cordova.io/#/package/org.apache.cordova.vibration

Non anglais traductions de ces documents plugin se trouvent en regardant les anciennes versions de la documentation de Cordova. Utilisez le menu déroulant en très haut à droite de ce site les versions.