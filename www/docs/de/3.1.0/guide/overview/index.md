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

title: Übersicht
---

# Übersicht

Cordova ist ein Open-Source-mobile-Entwicklung-Framework. Sie können standard-Web-Technologien wie HTML5, CSS3 und JavaScript für Cross-Plattform-Entwicklung, Vermeidung jeder mobilen Plattformen native Entwicklung der Sprache zu verwenden. Anwendungen werden in Verpackungen, die gezielt auf jede Plattform und verlassen sich auf standardkonforme API Anbindungen an jedes [Gerät](../../cordova/device/device.html) Sensoren, Daten und Netzwerkstatus zugreifen.

Verwenden Sie Cordova, falls Sie sind:

*   mobile Entwickler und wollen eine Anwendung über mehrere Plattformen hinweg zu erweitern, ohne es erneut mit Sprache und Tool jede Plattform implementieren festgelegt.

*   Speichern Portale, Webentwickler und wollen eine Webanwendung bereitstellen, die für den Vertrieb in verschiedenen app gepackt ist.

*   mobile Entwickler interessiert mischen systemeigene Anwendungskomponenten mit einer *WebView* (Browser-Fenster), die auf Geräteebene APIs, zugreifen kann oder wollen Sie eine Plugin-Schnittstelle zwischen systemeigenen und WebView Komponenten entwickeln.

## Basiskomponenten

Cordova-Anwendungen basieren auf einer gemeinsamen `config.xml` -Datei, enthält Informationen über die app und gibt Parameter, die beeinflussen, wie es funktioniert, z. B. ob es reagiert auf Orientierung verschiebt. Diese [Datei](../../cordova/file/fileobj/fileobj.html) entspricht der W3C-Spezifikation für [Verpackt Web App][1]oder *Widget*.

 [1]: http://www.w3.org/TR/widgets/

Die Anwendung selbst ist als eine Web-Seite implementiert, mit dem Namen *index.html* standardmäßig die verweist, was CSS, JavaScript, Bilder, Mediendateien, oder andere Ressourcen sind notwendig für die Ausführung. Die app führt als ein *WebView* in der Ausgangsanwendung-Wrapper, die Sie auf app Stores zu verteilen. Für die Web-app für die Interaktion mit verschiedenen Gerätefunktionen Weg native apps zu tun, muss es auch verweisen eine `cordova.js` -Datei, die API Bindungen bietet. <!-- XREF
(See the API Reference for an overview, and the Application
Development Guide for examples of how to use them.)
XREF -->

Der Cordova-fähigen WebView kann die Anwendung mit der gesamten Benutzeroberfläche bereitstellen. Es kann auch eine Komponente innerhalb einer größeren, Hybridanwendung sein, die die WebView mit nativen Komponenten mischt. Cordova bietet eine *Plugin* -Schnittstelle für diese Komponenten miteinander kommunizieren.

## Entwicklungspfade

Die einfachste Möglichkeit, eine Anwendung eingerichtet ist, führen Sie die `cordova` Befehlszeilen-Dienstprogramm, auch bekannt als die *Befehlszeilenschnittstelle* (CLI). (Um die CLI zu installieren, siehe The Command-Line Interface). Abhängig von den Plattformen richten möchten, können Sie auf der CLI für schrittweise größere Anteile des Entwicklungszyklus verlassen:

*   Im einfachsten Szenario können die CLI Sie einfach erstellen ein neues Projekt, das gefüllt ist mit Standard-Konfiguration zu ändern.

*   Für viele mobile Plattformen können Sie auch die CLI einrichten weitere Projekt-Dateien erforderlich, um innerhalb jedes SDK kompilieren. Damit dies funktioniert müssen Sie jede gezielte Plattform-SDK installieren. (Siehe den Plattform-Führern Anweisungen.) Wie in der folgenden Tabelle der Plattformunterstützung angegeben, müssen Sie möglicherweise die CLI auf verschiedenen Betriebssystemen abhängig von der Zielplattform ausgeführt.

*   Zur Unterstützung der Plattformen, kann die CLI Dienstprogramme kompilieren und führen sie in einem SDK-basiertes Gerät-Emulator. <!--XREF (Siehe Application Development Guide für Details.) XREF--> für umfassende Tests, können Sie auch Anwendungsdateien zu generieren und installieren Sie sie direkt auf einem [Gerät](../../cordova/device/device.html).

Zu jedem Zeitpunkt im Entwicklungszyklus können Sie sich auf Plattform-spezifischen SDK Tools verlassen, die eine umfangreichere Optionen bieten. (Siehe die Plattform-Führer für Details über jede Plattform-SDK-Tool festgelegt.) Eine SDK-Umgebung ist besser geeignet, wenn Sie möchten, eine Hybrid-app zu implementieren, die Web-basierte und native Anwendungskomponenten mischt. <!--XREF (Siehe Hybrid Application Guide für mehr informationen.) XREF--> Sie können das Befehlszeile-Dienstprogramm verwenden, um zunächst die app generieren oder iterativ danach, aktualisierten Code zu SDK-Tools zu ernähren. Sie können die app-Konfigurationsdatei auch selbst erstellen. 

<!-- XREF
(See The config.xml File for details.)
XREF -->

<!-- XREF
To build projects on some platforms, you may need to apply digital signatures.
See Distributing Applications for information on how to upload your app to various store portals.
XREF -->

## Plattformunterstützung

Im folgenden wird die Gruppe von Entwicklungs-Tools und APIs verfügbar-Gerät für jede mobile Plattform. (Spaltenüberschriften angezeigt die CLI Kurzschrift gestorben.)

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
        <tt>Ios</tt>
      </th>
      
      <th>
        <tt>WP7</tt> (Windows<br />Phone 7)
      </th>
      
      <th>
        <tt>WP8</tt> (Windows<br />Telefon 8)
      </th>
      
      <th>
        <tt>win8</tt><br />(Windows 8)
      </th>
      
      <th>
        <tt>firefoxos</tt>
      </th>
      
      <th>
        <tt>tizen</tt>
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
          <a href="../hybrid/webviews/index.html">Eingebettete<br />WebView</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="../platforms/android/webview.html">(siehe Details)</a>
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="../platforms/ios/webview.html">(siehe Details)</a>
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
          <a href="../hybrid/plugins/index.html">Plug-in<br />Schnittstelle</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="../guide/platforms/android/plugin.html">(siehe Details)</a>
        </td>
        
        <td data-col="blackberry" class="y">
          <a href="../guide/platforms/blackberry/plugin.html">(siehe Details)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="../guide/platforms/blackberry10/plugin.html">(siehe Details)</a>
        </td>
        
        <td data-col="ios"        class="y">
          <a href="../guide/platforms/ios/plugin.html">(siehe Details)</a>
        </td>
        
        <td data-col="winphone7"  class="y">
          <a href="../guide/platforms/wp8/plugin.html">(siehe Details)</a>
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
          Plattform-APIs
        </th>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/accelerometer/accelerometer.html">Beschleunigungsmesser</a>
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
          <a href="../../cordova/camera/camera.html">Kamera</a>
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
          <a href="../../cordova/media/capture/capture.html">Erfassen</a>
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
          <a href="../../cordova/compass/compass.html">Kompass</a>
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
          <a href="../../cordova/connection/connection.html">Verbindung</a>
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
          <a href="../../cordova/contacts/contacts.html">Kontakte</a>
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
          <a href="../../cordova/device/device.html">Gerät</a>
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
          <a href="../../cordova/events/events.html">Veranstaltungen</a>
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
          <a href="../../cordova/file/file.html">Datei</a>
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
          kein <a href="../../cordova/file/filetransfer/filetransfer.html">FileTransfer</a>
        </td>
        
        <td data-col="winphone8"  class="p">
          kein <a href="../../cordova/file/filetransfer/filetransfer.html">FileTransfer</a>
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/geolocation/geolocation.html">Geolocation</a>
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
          <a href="../../cordova/globalization/globalization.html">Globalisierung</a>
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
          <a href="../../cordova/media/media.html">Medien</a>
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
          <a href="../../cordova/notification/notification.html">Benachrichtigung</a>
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
          <a href="../../cordova/splashscreen/splashscreen.html">SplashScreen</a>
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
          <a href="../../cordova/storage/storage.html">Speicher</a>
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
          LocalStorage nur
        </td>
        
        <td data-col="winphone8"  class="p">
          LocalStorage nur
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr></table> 
      
      <!-- END HTML -->