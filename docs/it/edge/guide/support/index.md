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

# Supporto di piattaforma

Nell'esempio seguente viene illustrato il set di strumenti di sviluppo e dispositivo API disponibili per ogni piattaforma mobile. Il dispositivo API qui elencate sono forniti dai plugin di nucleo, API aggiuntive sono disponibili tramite [plugin di terze parti][1]. Le intestazioni di colonna di visualizzare nomi di stenografia di CLI.

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
        <tt>WP8</tt><br />(Windows Phone 8)
      </th>
      
      <th>
        <tt>Windows</tt><br />(8.0, 8.1,<br />Telefono 8.1)
      </th>
      
      <th>
        <tt>Tizen</tt>
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
          <a href="guide_hybrid_webviews_index.md.html">Incorporato<br />WebView</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          <a href="guide_platforms_amazonfireos_webview.md.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_webview.md.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_webview.md.html">(vedi dettagli)</a>
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
          <a href="guide_hybrid_plugins_index.md.html">Plug-in<br />Interfaccia</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          <a href="guide_platforms_amazonfireos_plugin.md.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_plugin.md.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="guide_platforms_blackberry10_plugin.md.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_plugin.md.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
          <a href="guide_platforms_wp8_plugin.md.html">(vedi dettagli)</a>
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
          <a href="https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md">Accelerometro</a>
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
          <a href="https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md">BatteryStatus</a>
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
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md">Fotocamera</a>
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
          <a href="https://github.com/apache/cordova-plugin-media-capture/blob/master/doc/index.md">Cattura</a>
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
          <a href="https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md">Bussola</a>
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
          <a href="https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md">Connessione</a>
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
          <a href="https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md">Contatti</a>
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
          <a href="https://github.com/apache/cordova-plugin-device/blob/master/doc/index.md">Dispositivo</a>
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
          <a href="cordova_events_events.md.html">Eventi</a>
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
          <a href="https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md">File</a>
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
          <a href="https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md">Trasferimento di file</a>
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
          <a href="https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md">Geolocalizzazione</a>
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
          <a href="https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md">Globalizzazione</a>
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
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-inappbrowser/blob/master/doc/index.md">InAppBrowser</a>
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
          <a href="https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md">Media</a>
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
          <a href="https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md">Notifica</a>
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
          <a href="https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md">Splashscreen</a>
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
          <a href="cordova_storage_storage.md.html">Archiviazione</a>
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
          <a href="https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md">Vibrazione</a>
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
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr></table> 
      
      <!-- END HTML -->