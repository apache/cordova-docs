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

title: Panoramica
---

# Panoramica

Cordova è un framework di sviluppo mobile open source. Esso consente di utilizzare tecnologie standard web come HTML5, CSS3 e JavaScript per lo sviluppo di piattaforme, evitando il linguaggio di sviluppo nativo di ogni mobile platforms. Le applicazioni vengono eseguite nel wrapper mirati per ogni piattaforma e si basano su standard-compliant associazioni API per accedere ai sensori ogni dispositivo, dati e lo stato della rete.

Usare Cordova se siete:

*   impostare un sviluppatore mobile e si desidera estendere un'applicazione in più di una piattaforma, senza dover reimplementare con lingua e strumento di ogni piattaforma.

*   un sviluppatore web e si desidera distribuire una web app che è confezionata per la distribuzione in varie app store portali.

*   uno sviluppatore mobile interessato nella miscelazione di componenti dell'applicazione nativa con una *WebView* (finestra del browser) che può accedere alle API di livello dispositivo, o se si desidera sviluppare un'interfaccia plugin tra nativi e componenti WebView.

## Componenti di base

Cordova applicazioni si basano su una comune `config.xml` file che fornisce informazioni sull'app e specifica i parametri che interessano come funziona, come se esso risponde all'orientamento si sposta. Questo file conforme alla specifica di [Confezionato Web App][1]o *widget*, di W3C.

 [1]: http://www.w3.org/TR/widgets/

L'applicazione stessa è implementato come una pagina web, denominato *index. html* per impostazione predefinita, che fa riferimento a qualunque CSS, JavaScript, immagini, file multimediali, o altre risorse sono necessarie per essere eseguito. L'app viene eseguita come una *WebView* all'interno del wrapper di applicazione nativa, che distribuiscono ai negozi di app. Per l'applicazione web interagire con varie caratteristiche dispositivo fare le applicazioni in modo native, deve anche fare riferimento a un `cordova.js` file che fornisce API associazioni. <!-- XREF
(See the API Reference for an overview, and the Application
Development [Guide](../../index.html) for examples of how to use them.)
XREF -->

WebView Cordova abilitato può fornire l'applicazione con l'intera interfaccia utente. Può anche essere un componente all'interno di un'applicazione ibrida più grande, che mescola WebView con componenti di un'applicazione nativa. Cordova fornisce un'interfaccia di *plugin* per questi componenti comunicare con a vicenda.

## Percorsi di sviluppo

Il modo più semplice per impostare un'applicazione è quello di eseguire il `cordova` utilità da riga di comando, anche conosciuto come l' *interfaccia della riga di comando* (CLI). (Per installare il CLI, vedere l'interfaccia della riga di comando). A seconda dell'insieme di piattaforme che si desidera fare riferimento, è possibile affidarsi CLI per azioni progressivamente maggiore del ciclo di sviluppo:

*   Nello scenario più semplice, è possibile utilizzare la CLI semplicemente per creare un nuovo progetto che viene popolato con configurazione di default per modificare.

*   Per molte piattaforme mobili, è possibile utilizzare anche il CLI per impostare i file di progetto supplementare necessari per compilare all'interno di ogni SDK. Per questo lavoro, è necessario installare il SDK su ogni piattaforma mirati. (Vedi le guide di piattaforma per istruzioni). Come indicato nella seguente tabella supporto piattaforma, potrebbe essere necessario eseguire il CLI su sistemi operativi diversi, a seconda della piattaforma di destinazione.

*   Per il supporto di piattaforme, CLI può compilare applicazioni eseguibile ed eseguirli in un emulatore di dispositivo basato su SDK. <!-XRIF XRIF (Vedere Applicazione Guida allo Sviluppo per i dettagli.)--> per la prova completa, si può anche generare file di applicazione e installarli direttamente su un dispositivo.

In qualsiasi punto del ciclo di sviluppo, può anche contare su strumenti SDK specifico della piattaforma, che possono fornire un insieme più ricco di opzioni. (Vedi le guide di piattaforma per ulteriori informazioni sullo strumento SDK su ogni piattaforma impostato). Un ambiente SDK è più appropriato se si desidera implementare un'applicazione ibrida che mescola i componenti dell'applicazione web-based e nativo. <!-XRIF XRIF (Vedi Ibrido Applicazione Guida per maggiori informazioni.)--> si possono utilizzare l'utilità della riga di comando per generare inizialmente l'app, o in modo iterativo successivamente per alimentare il codice aggiornato a strumenti SDK. Si può anche costruire il file di configurazione dell'app te stesso. <!-- XREF
(See The config.xml [File](../../cordova/file/fileobj/fileobj.html) for details.)
XREF -->

<!-- XREF
To build projects on some platforms, you may need to apply digital signatures.
See Distributing Applications for information on how to upload your app to various store portals.
XREF -->

## Supporto di piattaforma

Nell'esempio seguente viene illustrato il set di strumenti di sviluppo e dispositivo API disponibili per ogni piattaforma mobile. (Intestazioni di colonna visualizzare mozziconi di stenografia di CLI).

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        <tt>Android</tt>
      </th>
      
      <th>
        <tt>BlackBerry</tt> (6)
      </th>
      
      <th>
        <tt>blackberry10</tt>
      </th>
      
      <th>
        <tt>iOS</tt>
      </th>
      
      <th>
        <tt>WP7</tt> (Windows<br />Phone 7)
      </th>
      
      <th>
        <tt>WP8</tt> (Windows<br />Telefono 8)
      </th>
      
      <th>
        <tt>Win8</tt><br />(Windows 8)
      </th>
      
      <th>
        <tt>firefoxos</tt>
      </th>
      
      <th>
        <tt>Tizen</tt>
      </th></tr> </thead> 
      
      <tr>
        <th>
          <a href="../cli/index.html">Cordova<br />CLI</a>
        </th>
        
        <td data-col="android"    class="y">
          Mac, Windows, Linux
        </td>
        
        <td data-col="blackberry" class="n">
          Mac, Windows
        </td>
        
        <td data-col="blackberry10" class="y">
          Mac, Windows
        </td>
        
        <td data-col="ios"        class="y">
          Mac
        </td>
        
        <td data-col="winphone7"  class="y">
          Windows
        </td>
        
        <td data-col="winphone8"  class="y">
          Windows
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../hybrid/webviews/index.html">Incorporato<br />WebView</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="../platforms/android/webview.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="../platforms/ios/webview.html">(vedi dettagli)</a>
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
          <a href="../hybrid/plugins/index.html">Plug-in<br />Interfaccia</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="../guide/platforms/android/plugin.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="blackberry" class="y">
          <a href="../guide/platforms/blackberry/plugin.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="../guide/platforms/blackberry10/plugin.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="ios"        class="y">
          <a href="../guide/platforms/ios/plugin.html">(vedi dettagli)</a>
        </td>
        
        <td data-col="winphone7"  class="y">
          <a href="../guide/platforms/wp8/plugin.html">(vedi dettagli)</a>
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
        </th>
        
        <th colspan="20">
          API della piattaforma
        </th>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/accelerometer/accelerometer.html">Accelerometro</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/camera/camera.html">Fotocamera</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/media/capture/capture.html">Cattura</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/compass/compass.html">Bussola</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
          (3GS +)
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
          <a href="../../cordova/connection/connection.html">Connessione</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/contacts/contacts.html">Contatti</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/device/device.html">Dispositivo</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/events/events.html">Eventi</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/file/file.html">File</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          nessun <a href="../../cordova/file/filetransfer/filetransfer.html">FileTransfer</a>
        </td>
        
        <td data-col="winphone8"  class="p">
          nessun <a href="../../cordova/file/filetransfer/filetransfer.html">FileTransfer</a>
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/geolocation/geolocation.html">Geolocalizzazione</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/globalization/globalization.html">Globalizzazione</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="n">
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
          <a href="../../cordova/inappbrowser/inappbrowser.html">InAppBrowser</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/media/media.html">Media</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/notification/notification.html">Notifica</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/splashscreen/splashscreen.html">Splashscreen</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
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
          <a href="../../cordova/storage/storage.html">Archiviazione</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> solo
        </td>
        
        <td data-col="winphone8"  class="p">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> solo
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr></table> 
      
      <!-- END HTML -->