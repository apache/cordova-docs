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

# Obsługa platformy

Poniżej przedstawiono zestaw narzędzi i urządzeń interfejsów API dostępne dla każdej z platform mobilnych. Urządzenie, które API tutaj wymienione są dostarczane przez podstawowe pluginy, dodatkowe funkcje API są dostępne za pośrednictwem [innej wtyczki][1]. CLI skrót nazwy wyświetlane nagłówki kolumn.

 [1]: http://plugins.cordova.io

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        <tt>Amazonka fireos</tt>
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
        <tt>WP7</tt> (W systemie Windows<br />Phone 7)
      </th>
      
      <th>
        <tt>wp8</tt> (W systemie Windows<br />Telefon 8)
      </th>
      
      <th>
        <tt>Win8</tt><br />(Windows 8)
      </th>
      
      <!--        <th><tt>firefoxos</tt></th> -->
      
      <th>
        <tt>tizen</tt>
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
        
        <td data-col="winphone7"  class="y">
          Windows
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
          <a href="guide_hybrid_webviews_index.md.html">Osadzony<br />Widok sieci Web</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          <a href="guide_platforms_amazonfireos_webview.md.html">(zobacz szczegóły)</a>
        </td>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_webview.md.html">(zobacz szczegóły)</a>
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_webview.md.html">(zobacz szczegóły)</a>
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone7"  class="n">
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
          <a href="guide_hybrid_plugins_index.md.html">Plug-in<br />Interfejs</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          <a href="guide_guide_platforms_amazonfireos_plugin.md.html">(zobacz szczegóły)</a>
        </td>
        
        <td data-col="android"    class="y">
          <a href="guide_guide_platforms_android_plugin.md.html">(zobacz szczegóły)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="guide_guide_platforms_blackberry10_plugin.md.html">(zobacz szczegóły)</a>
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_guide_platforms_ios_plugin.md.html">(zobacz szczegóły)</a>
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
          <a href="guide_guide_platforms_wp8_plugin.md.html">(zobacz szczegóły)</a>
        </td>
        
        <td data-col="winphone8"  class="y">
          <a href="guide_guide_platforms_wp8_plugin.md.html">(zobacz szczegóły)</a>
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
          Platforma API
        </th>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-device-motion/blob/dev/doc/index.md">Akcelerometr</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-camera/blob/dev/doc/index.md">Aparat</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-media-capture/blob/dev/doc/index.md">Przechwytywania</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-device-orientation/blob/dev/doc/index.md">Kompas</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-network-information/blob/dev/doc/index.md">Połączenie</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-contacts/blob/dev/doc/index.md">Kontakty</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-device/blob/dev/doc/index.md">Urządzenia</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_events_events.md.html">Wydarzenia</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-file/blob/dev/doc/index.md">Plik</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-geolocation/blob/dev/doc/index.md">Geolocation</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-globalization/blob/dev/doc/index.md">Globalizacja</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-inappbrowser/blob/dev/doc/index.md">InAppBrowser</a>
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
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="p">
          używa iframe
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-media/blob/dev/doc/index.md">Media</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-dialogs/blob/dev/doc/index.md">Powiadomienia</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="https://github.com/apache/cordova-plugin-splashscreen/blob/dev/doc/index.md">Ekranu powitalnego</a>
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
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_storage_storage.md.html">Magazyn</a>
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
        
        <td data-col="winphone7"  class="y">
          localStorage & indexedDB
        </td>
        
        <td data-col="winphone8"  class="y">
          localStorage & indexedDB
        </td>
        
        <td data-col="win8"       class="y">
          localStorage & indexedDB
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr></table> 
      
      <!-- END HTML -->