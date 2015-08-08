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

# Die Befehlszeilenschnittstelle

Diese Anleitung zeigt Ihnen, wie Anwendungen zu erstellen und auf verschiedene native mobile Plattformen mit Bereitstellen der `cordova` Befehlszeilenschnittstelle (CLI). Dieses Tool ermöglicht das Erstellen neuer Projekte, auf verschiedenen Plattformen zu bauen und diese in einem Emulator ausführen. Sie können auch die CLI verwenden, Projektcode, initialisiert werden, woraufhin Sie verschiedene Plattformen SDKs verwenden, um sie weiter zu entwickeln.

## Voraussetzungen

Sie müssen vor dem Ausführen alle Kommandozeilen-Tools, SDKs für jede Plattform zu installieren, möchten Sie als Ziel. (Siehe die Plattform-Führer für weitere Details).

Hinzufügen von Unterstützung oder ein Projekt für jede Plattform neu erstellen, müssen Sie die Befehlszeilenschnittstelle aus dem gleichen Computer ausführen, die die Plattform SDK unterstützt. Die CLI unterstützt die folgenden Kombinationen:

*   iOS (Mac)
*   Android (Mac, Linux)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox Betriebssystem (Mac, Linux, Windows)

Auf dem Mac ist die Befehlszeile über die *Terminal* -Anwendung verfügbar. Auf dem PC steht als *Eingabeaufforderung* unter *Zubehör*.

Desto wahrscheinlicher ist es, dass die CLI von verschiedenen Maschinen ausführen, desto mehr macht es Sinn, einen entfernten Quellcode-Repository, deren Vermögen verwalten Sie zu lokalen Arbeitsverzeichnisse-down Pull.

Installieren der `cordova` Command-line tool, gehen Sie folgendermaßen vor:

1.  Downloaden und Installieren von [Node.js][1]. Nach der Installation sollte man in der Lage sein, rufen Sie `node` oder `npm` auf der Befehlszeile.

2.  Installieren der `cordova` Dienstprogramm. Unter Unix voranstellen der zusätzliche `sudo` Befehl möglicherweise erforderlich, installieren Sie die Programme zur Softwareentwicklung in sonst eingeschränkt Verzeichnisse:

        $ sudo npm install -g cordova


    Das Installationsprotokoll kann Fehler für alle deinstallierten Platform SDKs erzeugen. Nach der Installation sollte man laufen `cordova` in der Befehlszeile.

 [1]: http://nodejs.org/

## Erstellen Sie die App

Gehe in das Verzeichnis wo verwalten Sie Ihren Quellcode, und führen Sie einen Befehl wie den folgenden:

        $ cordova create hello com.example.hello HelloWorld


Es kann einige Zeit dauern für den Befehl abgeschlossen, also etwas Geduld. Führen Sie die `cordova -d` Informationen zum Fortschritt zu sehen.

Das erste Argument gibt ein *Hallo* -Verzeichnis für Ihr Projekt generiert werden. Seine `www` Unterverzeichnis Häuser Ihre Anwendung-Homepage, zusammen mit verschiedenen Ressourcen unter `css` , `js` , und `img` , die gemeinsame Web Entwicklung Dateibenennungskonventionen folgen. Die `config.xml` -Datei enthält wichtige Metadaten erzeugen und Verteilen der Anwendung erforderlich.

Die anderen beiden Argumente sind optional: das `com.example.hello` Argument stellt Ihr Projekt mit einem Bezeichner reverse Domain-Stil und der `HelloWorld` bietet die Anwendung Anzeigetext. Sie können bearbeiten beide Werte später in der `config.xml` Datei.

## Hinzufügen von Plattformen

Alle nachfolgenden Befehle müssen in das Verzeichnis des Projekts oder eines der Unterverzeichnisse innerhalb des Bereichs ausgeführt werden:

        $ cd hello


Bevor Sie das Projekt erstellen, müssen Sie eine Reihe von Zielplattformen angeben. Ihre Fähigkeit, diese Befehle ausführen hängt davon ab, ob Ihre Maschine jede SDK unterstützt, und ob Sie bereits installiert jedes SDK. Führen Sie einen der folgenden von einem Mac:

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Führen Sie einen aus einer Windows-Maschine, wo verschiedene Versionen des Betriebssystems Windows Phone *wp* bezeichnet:

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Führen Sie diese um Ihren aktuellen Satz von Plattformen zu überprüfen:

        $ cordova platforms ls


(Beachten Sie die `platform` und `platforms` Befehle werden synonym verwendet.)

Führen Sie einen der folgenden Synonym Befehle, eine Plattform zu entfernen:

        $ cordova platform remove blackberry10
        $ cordova platform rm android


Ausführen Befehle hinzufügen oder Entfernen von Plattformen wirkt sich auf den Inhalt des Verzeichnis des Projekts *Plattformen* , wo jede angegebene Plattform als Unterverzeichnis angezeigt wird. Das *Www* -Quellverzeichnis wird wiedergegeben in jede Plattform-Unterverzeichnis, erscheinen zum Beispiel in `platforms/ios/www` oder `platforms/android/assets/www` . Standardmäßig ist jede Plattform-Konfigurationsdatei eingerichtet, um alle Cordova's APIs zugreifen zu können.

Wenn Sie möchten, können Sie eine SDK an dieser Stelle verwenden, um das Projekt zu öffnen, die, das Sie erstellt. Legen jedoch alle Bearbeitungen an das Projekt im SDK beeinflusst die Ableitung vorgenommenen Vermögenswerte, nicht die original Cross-Plattform-Quellcode-Dateien. Verwenden Sie diese Methode, wenn Sie einfach ein Projekt initialisieren möchten. (Siehe die Plattform-Führer für Informationen zum Entwickeln von Anwendungen innerhalb jedes SDK.) Lesen Sie weiter, wenn Sie Befehlszeilenprogramme für den gesamten Entwicklungszyklus verwenden möchten.

## Die App zu bauen

In der Standardeinstellung der `cordova create` Skript generiert eine Skeletts Web-basierte Anwendung, deren Homepage des Projekts ist `www/index.html` Datei. Diese Anwendung zu bearbeiten, aber Sie wollen, aber Initialisierungen werden, als Teil angegeben sollte der `deviceready` -Ereignishandler, standardmäßig von verwiesen `www/js/index.js` . <!-- XREF
(See the Application Development Guide for details.)
XREF -->

Führen Sie den folgenden Befehl, um das Projekt iterativ zu erstellen:

        $ cordova build


Dies erzeugt plattformspezifischer Code innerhalb des Projekts `platforms` Unterverzeichnis. Optional können Sie den Bereich der einzelnen Builds auf bestimmten Plattformen einschränken:

        $ cordova build ios


Der `cordova build` Befehl ist eine Kurzform für die folgenden, die in diesem Beispiel auch auf einer einzigen Plattform ausgerichtet ist:

        $ cordova prepare ios
        $ cordova compile ios


In diesem Fall einmal ausführen `prepare` , können Sie Apples Xcode SDK als Alternative zu ändern und kompilieren Sie den Plattform-spezifischen Code, die in Cordova generiert `platforms/ios` . Sie können den gleichen Ansatz mit anderen Plattformen SDKs.

## Testen Sie die App auf einem Emulator oder Gerät

SDKs für mobile Plattformen kommen oft mit Emulatoren, die ein Gerätebild ausgeführt, so dass Sie können starten Sie die app aus dem home-Bildschirm und Interaktion mit vielen Plattformfeatures gebündelt. Führen Sie einen Befehl wie den folgenden erstellen Sie die Anwendung neu und innerhalb einer bestimmten Plattform Emulator anzeigen:

        $ cordova emulate android


Einige mobilen Plattformen emulieren ein bestimmtes Gerät wie das iPhone für iOS-Projekte in der Standardeinstellung. Für die anderen Plattformen müssen Sie zuerst ein Gerät mit einem Emulator zuordnen. (Siehe die Plattform-Führer für Details.) Beispielsweise Sie möglicherweise zunächst führen Sie den `android` Befehl zum Starten des Android SDK, dann führen Sie ein bestimmtes Gerät-Image, das es laut sein Standardverhalten startet:

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Folgende oben mit den `cordova emulate` Befehl aktualisiert das Emulator-Bild, um die neueste Anwendung angezeigt, die jetzt für den Start aus dem home-Bildschirm vorhanden ist:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativ können Sie schließen den Hörer an den Computer und testen die app direkt:

        $ cordova run android


Bevor Sie diesen Befehl ausführen, müssen Sie das Gerät zum Testen einrichten nach Verfahren, die für jede Plattform variieren. In Androids Fall müssten Sie eine Option **USB-debugging** auf dem Gerät zu aktivieren, und vielleicht einen USB-Treiber je nach Ihrer Entwicklung-Environmnent. Einzelheiten über jede Plattform Anforderungen finden Sie unter Plattform Guides.

## Hinzufügen von Features

Wenn Sie erstellen und eines neues Projekts anzeigen, nicht sehr viel die Standardanwendung, die angezeigt wird. Sie können ändern, die app in vielerlei Hinsicht zu standard-Web-Technologien nutzen, aber für die app eng mit verschiedenen Geräteebene Features zu kommunizieren, müssen Sie Plugins hinzufügen, die Zugriff auf Kern-Cordova-APIs.

Ein *Plugin* ist ein Add-on-Code, die eine Schnittstelle zu systemeigenen Komponenten bereitstellt. Sie können Ihr eigenes Plugin-Schnittstelle, z. B. wenn eine Hybrid-app zu entwerfen, die einen Cordova WebView mit systemeigenen Komponenten mischt entwerfen. (Siehe Einbettung Webansichten für und Plugin Development Guide für Details.) Häufiger vorkommt, würde Sie eine Plugin um eine Cordovas Grundfunktionen auf Device-Ebene aktivieren hinzufügen <!--XREF diskutiert in der Application Development Guide und XREF--> in der API-Referenz.

Der `cordova plugin add` Befehl müssen Sie das Repository für den Plugin-Code angeben. Hier sind Beispiele für Funktionen, die Sie hinzufügen können:

*   Grundlegenden Geräteinformationen (Device-API):

        $ cordova plugin add org.apache.cordova.device


*   Netzwerkverbindung und Batterie-Veranstaltungen:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status


*   Beschleunigungssensor, Kompass und Geolocation:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation


*   Kamera, Medien-Wiedergabe und Aufnahme:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media


*   Zugriff auf Dateien auf Gerät oder Netzwerk (File API):

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer


*   Benachrichtigung per Dialogfeld oder Vibration:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration


*   Kontakte:

        $ cordova plugin add org.apache.cordova.contacts


*   Globalisierung:

        $ cordova plugin add org.apache.cordova.globalization


*   SplashScreen:

        $ cordova plugin add org.apache.cordova.splashscreen


*   Neue Browserfenster öffnen (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser


*   Debug-Konsole:

        $ cordova plugin add org.apache.cordova.console


Verwendung `plugin ls` (oder `plugin list` , oder `plugin` von selbst) derzeit anzeigen Plugins installiert. Jede zeigt durch seinen Bezeichner:

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


Um ein Plugin zu entfernen, beziehen sich auf es durch den gleichen Bezeichner, der in der Liste angezeigt wird. Zum Beispiel, ist hier, wie Sie Unterstützung für eine Debug-Konsole aus einer Release-Version entfernen würde:

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


Sie können Batch-entfernen oder Hinzufügen von Plugins durch mehr als ein Argument für jeden Befehl angeben.

## Jede Plattform anpassen

Während Cordova auf einfache Weise eine app für viele verschiedene Plattformen bereitstellen kann, müssen Sie manchmal Anpassungen hinzufügen. In diesem Fall wollen Sie die Quellcode-Dateien in verschiedenen ändern `www` Verzeichnisse innerhalb der obersten Ebene `platforms` Verzeichnis, da sie regelmäßig mit der obersten Ebene ersetzt sind `www` des Verzeichnisses Cross-Plattform-Quelle.

Stattdessen der obersten Ebene `merges` Verzeichnis bietet Ihnen einen Ort zu geben Vermögen auf bestimmten Plattformen bereitstellen. Jedes plattformspezifischen Unterverzeichnis innerhalb `merges` spiegelt die Verzeichnisstruktur des der `www` Source-Tree, sodass Sie überschreiben oder Dateien nach Bedarf hinzufügen. Zum Beispiel hier ist, wie Sie verwendet möglicherweise `merges` zur Erhöhung der Standardschriftgrad für Android-Geräte:

*   Bearbeiten Sie die `www/index.html` Datei, Hinzufügen eines Links zu einer weiteren CSS-Datei `overrides.css` in diesem Fall:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Erstellen Sie optional ein leeres `www/css/overrides.css` Datei, die für alle nicht-Android Builds, einen fehlende Datei-Fehler zu verhindern, gelten würden.

*   Erstellen einer `css` Unterverzeichnis innerhalb `merges/android` , fügen Sie eine entsprechende `overrides.css` Datei. Angeben von CSS, die den angegebenen innerhalb 12-Punkt-Standard-Schriftgrad überschreibt `www/css/index.css` , zum Beispiel:

        body { font-size:14px; }


Wenn Sie das Projekt neu erstellen, verfügt die Android Version die benutzerdefinierte Schriftgröße, während andere unverändert bleiben.

Sie können auch `merges` hinzufügen, Dateien nicht vorhanden, im Original `www` Verzeichnis. Beispielsweise eine app kann integrieren eine *Zurück-Schaltfläche* Grafik in die iOS-Benutzeroberfläche, gespeichert `merges/ios/img/back_button.png` , während die Android Version stattdessen erfassen kann `backbutton` Ereignisse über die entsprechende Taste.

## Aktualisieren von Cordova

Nach der Installation der `cordova` Dienstprogramm, Sie können immer aktualisieren auf die neueste Version durch Ausführen des folgenden Befehls:

        $ sudo npm update -g cordova


Verwenden Sie diese Syntax, um eine bestimmte Version zu installieren:

        $ Sudo Npm installieren -g cordova@3.1.0


Führen Sie `cordova -v` , die aktuell ausgeführte Version zu sehen. Führen Sie den `npm
info` Befehl für eine längere Liste, die die aktuelle Version zusammen mit anderen Nummern für verfügbare Version enthält:

        $ npm info cordova


Cordova 3.0 ist die erste Version, die in diesem Abschnitt beschriebenen Befehlszeilenschnittstelle zu unterstützen. Wenn Sie von einer Version vor 3.0 aktualisieren, müssen Sie ein neues Projekt erstellen, wie oben beschrieben, dann kopieren Sie die ältere Anwendung Vermögenswerte in der obersten Ebene `www` Verzeichnis. Gegebenenfalls stehen weitere Informationen zum Upgrade auf 3.0 in den Plattform-Führern. Nach der Aktualisierung auf die `cordova` Befehlszeilenschnittstelle und Nutzung `npm update` um dem Laufenden zu bleiben, die mehr Zeit in Anspruch, dort beschriebenen Verfahren sind nicht mehr relevant.
