* * *

licence : une licence à l'Apache Software Foundation (ASF) au titre d'un ou plusieurs contrats de licence pour le cotisant. Voir le fichier avis distribué avec ce travail d'information additionnelle concernant les droits d'auteur. L'ASF licenses ce fichier vous sous Apache License, Version 2.0 (la "licence") ; vous ne pouvez utiliser ce fichier sauf en conformité avec la licence. Vous pouvez obtenir une copie de la licence à

           http://www.Apache.org/licenses/License-2.0 sauf si requis par la loi applicable ou accord écrit, distribué sous la licence de logiciel est distribué sur un « Tel quel » fondement, sans garanties ou CONDITIONS d'aucune sorte, explicite ou implicite.  Voir la licence pour la langue spécifique régissant les autorisations et les limitations aux termes de la licence.
    

* * *

# Plateforme de Support

Vous trouverez ci-dessous l'ensemble des outils de développement et dispositif API disponibles pour chaque plate-forme mobile. Le dispositif API répertoriés ici sont fournis par les plugins de base, des API supplémentaires sont disponibles via [les plugins tiers][1]. Les en-têtes de colonne affichent les noms de sténographie de la CLI.

 [1]: http://plugins.cordova.io

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        <tt>Amazon-fireos</tt>
      </th>
      
      <th>
        <tt>Android</tt>
      </th>
      
      <th>
        <tt>blackberry10</tt>
      </th>
      
      <th>
        <tt>Firefox OS</tt>
      </th>
      
      <th>
        <tt>iOS</tt>
      </th>
      
      <th>
        <tt>Ubuntu</tt>
      </th>
      
      <th>
        <tt>wp8</tt><br />(Windows Phone 8)
      </th>
      
      <th>
        <tt>Windows</tt><br />(8.0, 8.1,<br />Téléphone 8.1)
      </th>
      
      <th>
        <tt>paciarelli</tt>
      </th></tr> </thead> 
      
      <tr>
        <th>
          <a href="guide_cli_index.md.html">Cordova<br />CLI</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          Mac, Windows, Linux
        </td>
        
        <td data-col="android"    class="y">
          Mac, Windows, Linux
        </td>
        
        <td data-col="blackberry10" class="y">
          Mac, Windows
        </td>
        
        <td data-col="firefoxos" class="y">
          Mac, Windows, Linux
        </td>
        
        <td data-col="ios"        class="y">
          Mac
        </td>
        
        <td data-col="ubuntu"        class="y">
          Ubuntu
        </td>
        
        <td data-col="winphone8"  class="y">
          Windows
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="guide_hybrid_webviews_index.md.html">Embedded<br />WebView</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          <a href="guide_platforms_amazonfireos_webview.md.html">(voir détails)</a>
        </td>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_webview.md.html">(voir détails)</a>
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_webview.md.html">(voir détails)</a>
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="n">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="guide_hybrid_plugins_index.md.html">Plug-in<br />Interface</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          <a href="guide_platforms_amazonfireos_plugin.md.html">(voir détails)</a>
        </td>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_plugin.md.html">(voir détails)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="guide_platforms_blackberry10_plugin.md.html">(voir détails)</a>
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_plugin.md.html">(voir détails)</a>
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
          <a href="guide_platforms_wp8_plugin.md.html">(voir détails)</a>
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
        </th>
        
        <th colspan="20">
          API de la plate-forme
        </th>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-device-motion">Accéléromètre</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-battery-status">BatteryStatus</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
          * Windows Phone 8.1 seulement
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-camera">Appareil photo</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-media-capture">Capture</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-device-orientation">Boussole</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          (3 G +)
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-network-information">Connexion</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-contacts">Contacts</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="p">
          partiellement
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-device">Dispositif</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_events_events.md.html">Événements</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-file">Fichier</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-file-transfer">Transfert de fichiers</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
          * Ne pas soutenir onprogress ni abandonner.
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
          * Ne pas soutenir onprogress ni abandonner.
        </td>
        
        <td data-col="win8"       class="y">
          * Ne pas soutenir onprogress ni abandonner.
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-geolocation">Géolocalisation</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-globalization">Mondialisation</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-inappbrowser">InAppBrowser</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="p">
          utilise les iframe
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-media">Media</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-dialogs">Notification</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-splashscreen">SplashScreen</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-statusbar">Barre d'État</a>
        </th>
        
        <td data-col="amazon-fireos" class="n">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
          8.1 de Windows Phone uniquement
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_storage_storage.md.html">Stockage</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
          localStorage & indexedDB
        </td>
        
        <td data-col="win8"       class="y">
          localStorage & indexedDB
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-vibration">Vibration</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
          * Windows Phone 8.1 seulement
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr></table> 
      
      <!-- END HTML -->