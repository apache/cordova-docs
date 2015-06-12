* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Vedere il file avviso distribuito con questo lavoro per ulteriori informazioni riguardanti la proprietà del copyright. L'ASF licenze questo file a voi con la licenza Apache, versione 2.0 (la "licenza"); non si può usare questo file se non in conformità con la licenza. È possibile ottenere una copia della licenza a

           http://www.apache.org/licenses/License-2.0 se non richiesto dalla legge o concordato per iscritto, il software distribuito sotto la licenza è distribuito su un "AS IS" base, senza garanzie o condizioni di alcun tipo, esplicita o implicita.  Vedere la licenza per la lingua specifica che disciplina le autorizzazioni e limitazioni della licenza.
    

* * *

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