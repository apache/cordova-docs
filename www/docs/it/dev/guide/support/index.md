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

title: Supporto di piattaforma
---

# Supporto di piattaforma

Nell'esempio seguente viene illustrato il set di strumenti di sviluppo e dispositivo API disponibili per ogni piattaforma mobile. Il dispositivo API qui elencate sono forniti dai plugin di nucleo, API aggiuntive sono disponibili tramite [plugin di terze parti][1]. Le intestazioni di colonna di visualizzare nomi di stenografia di CLI.

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
        WP8<br />(Windows Phone 8)
      </th>

      <th>
        Windows<br />(8.0, 8.1, 10,<br />Telefono 8.1)
      </th>

      <th>
        Tizen
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
          <a href="../hybrid/webviews/index.html">Incorporato<br />WebView</a>
        </th>

        <td data-col="amazon-fireos" class="y">
          <a href="../platforms/amazonfireos/webview.html">(vedi dettagli)</a>
        </td>

        <td data-col="android"    class="y">
          <a href="../platforms/android/webview.html">(vedi dettagli)</a>
        </td>

        <td data-col="blackberry10" class="n">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
          <a href="../platforms/ios/webview.html">(vedi dettagli)</a>
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
          <a href="../hybrid/plugins/index.html">Plugin<br />Interfaccia</a>
        </th>

        <td data-col="amazon-fireos" class="y">
          <a href="../platforms/amazonfireos/plugin.html">(vedi dettagli)</a>
        </td>

        <td data-col="android"    class="y">
          <a href="../platforms/android/plugin.html">(vedi dettagli)</a>
        </td>

        <td data-col="blackberry10" class="y">
          <a href="../platforms/blackberry10/plugin.html">(vedi dettagli)</a>
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
          <a href="../platforms/ios/plugin.html">(vedi dettagli)</a>
        </td>

        <td data-col="ubuntu"        class="y">
        </td>

        <td data-col="winphone8"  class="y">
          <a href="../platforms/wp8/plugin.html">(vedi dettagli)</a>
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
          API della piattaforma
        </th>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-device-motion">Accelerometro</a>
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
          * Windows Phone 8.1 solo
        </td>

        <td data-col="tizen"       class="y">
        </td>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-camera">Fotocamera</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-media-capture">Cattura</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-device-orientation">Bussola</a>
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
          (3GS +)
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
          <a href="https://www.npmjs.com/package/cordova-plugin-network-information">Connessione</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-contacts">Contatti</a>
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
          parzialmente
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-device">Dispositivo</a>
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
          <a href="../../cordova/events/events.html">Eventi</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-file">File</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-file-transfer">Trasferimento di file</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
          * Non supporta onprogress non abortire
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="n">
        </td>

        <td data-col="winphone8"  class="y">
          * Non supporta onprogress non abortire
        </td>

        <td data-col="win8"       class="y">
          * Non supporta onprogress non abortire
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-geolocation">Geolocalizzazione</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-globalization">Globalizzazione</a>
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
          utilizza iframe
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
          <a href="https://www.npmjs.com/package/cordova-plugin-dialogs">Notifica</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-splashscreen">Splashscreen</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-statusbar">Barra di stato</a>
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
          Windows Phone 8.1 solo
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr>

      <tr>
        <th>
          <a href="../../cordova/storage/storage.html">Archiviazione</a>
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
          <a href="https://www.npmjs.com/package/cordova-plugin-vibration">Vibrazione</a>
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
          * Windows Phone 8.1 solo
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr></table>

      <!-- END HTML -->
