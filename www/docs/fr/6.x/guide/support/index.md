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

title: Plateforme de Support
---

# Plateforme de Support

Vous trouverez ci-dessous l'ensemble des outils de développement et dispositif API disponibles pour chaque plate-forme mobile. Le dispositif API répertoriés ici sont fournis par les plugins de base, des API supplémentaires sont disponibles via [les plugins tiers][1]. Les en-têtes de colonne affichent les noms de sténographie de la CLI.

 [1]: http://plugins.cordova.io

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        Amazon-fireos
      </th>

      <th>
        Android
      </th>

      <th>
        blackberry10
      </th>

      <th>
        Firefox OS
      </th>

      <th>
        iOS
      </th>

      <th>
        Ubuntu
      </th>

      <th>
        wp8<br />(Windows Phone 8)
      </th>

      <th>
        Windows<br />(8.0, 8.1, 10,<br />Téléphone 8.1)
      </th>

      <th>
        paciarelli
      </th></tr> </thead>

      <tr>
        <th>
          <a href="../cli/index.html">Cordova<br />CLI</a>
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
          <a href="../hybrid/webviews/index.html">Embedded<br />WebView</a>
        </th>

        <td data-col="amazon-fireos" class="y">
          <a href="../platforms/amazonfireos/webview.html">(voir détails)</a>
        </td>

        <td data-col="android"    class="y">
          <a href="../platforms/android/webview.html">(voir détails)</a>
        </td>

        <td data-col="blackberry10" class="n">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
          <a href="../platforms/ios/webview.html">(voir détails)</a>
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
          <a href="../hybrid/plugins/index.html">Plug-in<br />Interface</a>
        </th>

        <td data-col="amazon-fireos" class="y">
          <a href="../platforms/amazonfireos/plugin.html">(voir détails)</a>
        </td>

        <td data-col="android"    class="y">
          <a href="../platforms/android/plugin.html">(voir détails)</a>
        </td>

        <td data-col="blackberry10" class="y">
          <a href="../platforms/blackberry10/plugin.html">(voir détails)</a>
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
          <a href="../platforms/ios/plugin.html">(voir détails)</a>
        </td>

        <td data-col="ubuntu"        class="y">
        </td>

        <td data-col="winphone8"  class="y">
          <a href="../platforms/wp8/plugin.html">(voir détails)</a>
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
          <a href="../../cordova/events/events.html">Événements</a>
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
          <a href="../../cordova/storage/storage.html">Stockage</a>
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
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> & indexedDB
        </td>

        <td data-col="win8"       class="y">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> & indexedDB
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
