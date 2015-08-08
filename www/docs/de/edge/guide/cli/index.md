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

# Die Befehlszeilenschnittstelle

Diese Anleitung zeigt Ihnen, wie Anwendungen zu erstellen und auf verschiedene native mobile Plattformen mit Bereitstellen der `cordova` Befehlszeilenschnittstelle (CLI). Mit diesem Tool können Sie neue Projekte erstellen und bauen sie auf verschiedenen Plattformen laufen auf echten Geräten oder innerhalb von Emulatoren. Die CLI ist das wichtigste Hilfsmittel für die Cross-Plattform-Workflow in der Übersicht beschrieben verwenden. Ansonsten können Sie auch die CLI Projektcode zu initialisieren, dann wechseln Sie in die verschiedenen Plattformen SDKs und Shell-Hilfsmittel für die weitere Entwicklung.

## Voraussetzungen

Sie müssen vor dem Ausführen alle Kommandozeilen-Tools, SDKs für jede Plattform zu installieren, möchten Sie als Ziel. (Siehe die Plattform-Führer für weitere Details).

Hinzufügen von Unterstützung oder ein Projekt für jede Plattform neu erstellen, müssen Sie die Befehlszeilenschnittstelle aus dem gleichen Computer ausführen, die die Plattform SDK unterstützt. Die CLI unterstützt die folgenden Kombinationen:

*   iOS (Mac)
*   Amazon Fire Betriebssystem (Mac, Linux, Windows)
*   Android (Mac, Linux, Windows)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 8 (Windows)
*   Windows (Windows)
*   Firefox Betriebssystem (Mac, Linux, Windows)

Auf dem Mac ist die Befehlszeile über die *Terminal* -Anwendung verfügbar. Auf dem PC steht als *Eingabeaufforderung* unter *Zubehör*.

**Hinweis**: für nur-Windows-Plattformen, noch kann Ihre Entwicklung auf Mac-Hardware unter Windows in einer virtuellen Umgebung oder im Dual-Boot-Modus. Verfügbaren Optionen finden Sie unter der Windows Phone 8 Platform Guide oder die Anleitung für die Windows-Plattform.

Desto wahrscheinlicher ist es, dass die CLI von verschiedenen Maschinen ausführen, desto mehr macht es Sinn, einen entfernten Quellcode-Repository, deren Vermögen verwalten Sie zu lokalen Arbeitsverzeichnisse-down Pull.

## Installieren der Cordova-CLI

Das Befehlszeilentool Cordova ist als Npm-Paket in ein Ready-to-Use-Format verteilt. Es ist nicht notwendig, um es von Quellcode kompilieren.

Installieren der `cordova` Command-line tool, gehen Sie folgendermaßen vor:

1.  Downloaden und Installieren von [Node.js][1]. Nach der Installation sollte man in der Lage, rufen Sie `node` und `npm` auf der Befehlszeile. Falls gewünscht, optional verwenden Sie ein Tool wie `nvm` oder `nave` , Ihre Node.js-Installation zu verwalten.

2.  Downloaden Sie und installieren Sie ein [Git-Client][2], wenn Sie nicht bereits ein haben. Nach der Installation sollte man in der Lage, rufen Sie `git` auf der Befehlszeile. Auch wenn Sie nicht verwenden `git` manuell, nutzt die CLI es hinter den Kulissen um einige Vermögenswerte herunterladen, wenn Sie ein neues Projekt zu erstellen.

3.  Installieren der `cordova` Modul mit `npm` von Node.js-Dienstprogramm. Das `cordova` Modul wird automatisch heruntergeladen werden, indem die `npm` Dienstprogramm.

 [1]: http://nodejs.org/
 [2]: http://git-scm.com/

*   auf OS X und Linux:

            $ sudo npm install -g cordova


    Auf OS X und Linux voranstellen der `npm` mit Befehl `sudo` kann erforderlich sein, um diese Entwicklung zu installieren-Dienstprogramm in andere Art eingeschränkt Verzeichnisse wie `/usr/local/share` . Wenn Sie für das Installationsverzeichnis Schreibrechte oder das optionale Nvm/Kirchenschiff-Tool verwenden, können Sie möglicherweise auslassen der `sudo` Präfix. Es gibt [Weitere Tipps][3] zur Verwendung von `npm` ohne `sudo` , wenn Sie das tun wollen.

*   unter Windows:

            C:\>npm install -g cordova


    Das `-g` Flag oben teilt `npm` Installieren `cordova` weltweit. Andernfalls wird es installiert werden, der `node_modules` Unterverzeichnis des aktuellen Arbeitsverzeichnis.

    Möglicherweise müssen Sie Hinzufügen der `npm` Verzeichnis in Ihrem `PATH` weltweit installierten Inanspruchnahme `npm` Module. Unter Windows `npm` in der Regel finden Sie unter `C:\Users\username\AppData\Roaming\npm` . Auf OS X und Linux kann es in der Regel bei gefunden werden`/usr/local/share/npm`.

    Das Installationsprotokoll kann Fehler für alle deinstallierten Platform SDKs erzeugen.

    Nach der Installation sollte man laufen `cordova` in der Befehlszeile keine Argumente und es sollte Hilfetext drucken.

 [3]: http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears

## Erstellen Sie die App

Gehe in das Verzeichnis wo verwalten Sie Ihren Quellcode, und führen Sie einen Befehl wie den folgenden:

        $ cordova create hello com.example.hello HelloWorld


Es kann einige Zeit dauern für den Befehl abgeschlossen, also etwas Geduld. Ausführen des Befehls mit der `-d` Option zeigt Informationen über den Fortschritt.

Das erste Argument *Hallo* gibt ein Verzeichnis für Ihr Projekt generiert werden. Dieses Verzeichnis sollte nicht bereits vorhanden, Cordova wird es für Sie erstellen. Seine `www` Unterverzeichnis Häuser Ihre Anwendung-Homepage, zusammen mit verschiedenen Ressourcen unter `css` , `js` , und `img` , die gemeinsame Web Entwicklung Dateibenennungskonventionen folgen. Diese Vermögenswerte werden lokalen Dateisystem des Geräts, nicht aus der Ferne bedient gespeichert. Die `config.xml` -Datei enthält wichtige Metadaten erzeugen und Verteilen der Anwendung erforderlich.

Das zweite Argument `com.example.hello` stellt Ihr Projekt mit einem reverse Domain-Stil-Bezeichner. Dieses Argument ist optional, aber nur, wenn Sie auch das dritte Argument weglassen, da die Argumente positionelle sind. Sie können diesen Wert später in bearbeiten die `config.xml` Datei, aber beachten Sie, dass es möglicherweise außerhalb der generierte Code `config.xml` mit diesem Wert, wie z. B. Java-Package-Namen. Der Standardwert ist `io.cordova.hellocordova` , aber es wird empfohlen, dass Sie einen geeigneten Wert auswählen.

Das dritte Argument `HelloWorld` bietet die Anwendung Anzeigetitel. Dieses Argument ist optional. Sie können diesen Wert später in bearbeiten die `config.xml` Datei, aber beachten Sie, dass es möglicherweise außerhalb der generierte Code `config.xml` mit diesem Wert, wie z. B. Java Klassennamen. Der Standardwert ist `HelloCordova` , aber es wird empfohlen, dass Sie einen geeigneten Wert auswählen.

## Hinzufügen von Plattformen

Alle nachfolgenden Befehle müssen in das Verzeichnis des Projekts oder eines der Unterverzeichnisse innerhalb des Bereichs ausgeführt werden:

        $ cd hello


Bevor Sie das Projekt erstellen, müssen Sie eine Reihe von Zielplattformen angeben. Ihre Fähigkeit, diese Befehle ausführen hängt davon ab, ob Ihre Maschine jede SDK unterstützt, und ob Sie bereits installiert jedes SDK. Führen Sie einen der folgenden von einem Mac:

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Führen Sie einen aus einer Windows-Maschine, wo verschiedene Versionen des Betriebssystems Windows Phone *wp* bezeichnet:

        $ Cordova Plattform hinzufügen wp8 $ Cordova Plattform hinzufügen Fügen Sie $ Cordova Plattform Windows Amazon-Fireos $ Cordova Plattform hinzufügen android $ Cordova Plattform hinzufügen blackberry10 $ Cordova Plattform hinzufügen Firefoxos


Führen Sie diese um Ihren aktuellen Satz von Plattformen zu überprüfen:

        $ cordova platforms ls


(Beachten Sie die `platform` und `platforms` Befehle werden synonym verwendet.)

Führen Sie einen der folgenden Synonym Befehle, eine Plattform zu entfernen:

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


Ausführen Befehle hinzufügen oder Entfernen von Plattformen wirkt sich auf den Inhalt des Verzeichnis des Projekts *Plattformen* , wo jede angegebene Plattform als Unterverzeichnis angezeigt wird. Das *Www* -Quellverzeichnis wird wiedergegeben in jede Plattform-Unterverzeichnis, erscheinen zum Beispiel in `platforms/ios/www` oder `platforms/android/assets/www` . Da die CLI ständig über Dateien aus dem *Www* -Quellordner kopiert, sollten Sie nur diese Dateien und nicht diejenigen, die die *Plattformen* Unterverzeichnisse unterhalb bearbeiten. Wenn Sie Software für die Versionskontrolle verwenden, sollten Sie diese Quelle *Www* Ordner, zusammen mit Ordner *führt* zu Ihrem Versionsverwaltungssystem hinzufügen. (Weitere Informationen zum *verschmilzt* -Ordner finden Sie im Abschnitt Anpassen von jeder Plattform).

**Warnung**: Wenn die CLI verwenden, um Ihre Anwendung zu erstellen, sollten Sie *nicht* bearbeiten, Dateien in, das `/platforms/` Verzeichnis, wenn Sie wissen, was du tust, oder wenn die Dokumentation nicht anders angegeben. Die Dateien in diesem Verzeichnis werden routinemäßig überschrieben, wenn Anwendungen für Gebäude vorbereiten oder Plugins installiert werden.

Möchten Sie an dieser Stelle, können Sie eine SDK wie Eclipse oder Xcode verwenden, um das Projekt zu öffnen, die, das Sie erstellt. Sie müssen die abgeleitete Gruppe von Vermögenswerten aus öffnen die `/platforms/` Verzeichnis mit einem SDK entwickeln. Dies ist da die SDK-spezifische Metadaten-Dateien, innerhalb der entsprechenden gespeichert werden `/platform/` Unterverzeichnis. (Siehe die Plattform-Führer für Informationen zum Entwickeln von Anwendungen in jeder IDE.) Verwenden Sie diese Methode, wenn Sie möchten einfach Initialisieren eines Projekts mit der CLI und wechseln Sie dann zu einem SDK für native Arbeit.

Lesen Sie weiter, wenn Sie das plattformübergreifende Workflow-Konzept (CLI) für den gesamten Entwicklungszyklus verwenden möchten.

## Die App zu bauen

In der Standardeinstellung der `cordova create` Skript generiert eine Skeletts Web-basierte Anwendung, deren Homepage des Projekts ist `www/index.html` Datei. Diese Anwendung zu bearbeiten, aber Sie wollen, aber Initialisierungen werden, als Teil angegeben sollte der `deviceready` -Ereignishandler, standardmäßig von verwiesen`www/js/index.js`.

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


Einige mobilen Plattformen emulieren ein bestimmtes Gerät wie das iPhone für iOS-Projekte in der Standardeinstellung. Für die anderen Plattformen müssen Sie zuerst ein Gerät mit einem Emulator zuordnen.

**Hinweis**: Emulator Unterstützung ist derzeit nicht für Amazon Fire OS.

(Siehe die Plattform-Führer für Details.) Beispielsweise Sie möglicherweise zunächst führen Sie den `android` Befehl zum Starten des Android SDK, dann führen Sie ein bestimmtes Gerät-Image, das es laut sein Standardverhalten startet:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Folgende oben mit den `cordova emulate` Befehl aktualisiert das Emulator-Bild, um die neueste Anwendung angezeigt, die jetzt für den Start aus dem home-Bildschirm vorhanden ist:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativ können Sie schließen den Hörer an den Computer und testen die app direkt:

        $ cordova run android


Bevor Sie diesen Befehl ausführen, müssen Sie das Gerät zum Testen einrichten nach Verfahren, die für jede Plattform variieren. In Android und Amazon-Feuer-OS-Geräte müssten Sie eine Option **USB-debugging** auf dem Gerät zu aktivieren, und vielleicht einen USB-Treiber je nach Ihrer Entwicklung-Environmnent. Einzelheiten über jede Plattform Anforderungen finden Sie unter Plattform Guides.

## Plugin-Features hinzufügen

Wenn Sie erstellen und eines neues Projekts anzeigen, nicht sehr viel die Standardanwendung, die angezeigt wird. Sie können ändern, die app in vielerlei Hinsicht zu standard-Web-Technologien nutzen, aber für die app eng mit verschiedenen Geräteebene Features zu kommunizieren, müssen Sie Plugins hinzufügen, die Zugriff auf Kern-Cordova-APIs.

Ein *Plugin* ist ein Add-on-Code, die eine Schnittstelle zu systemeigenen Komponenten bereitstellt. Sie können Ihr eigenes Plugin-Schnittstelle, z. B. wenn eine Hybrid-app zu entwerfen, die einen Cordova WebView mit systemeigenen Komponenten mischt entwerfen. (Siehe Einbettung Webansichten für und [Plugin Development Guide][6] für Details.) Häufiger, fügen Sie eine Plugin um eine Cordovas Geräteebene Grundfunktionen in der API-Referenz detailliert aktivieren.

 [6]: guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide

Ab der Version 3.0 beim Erstellen eines Projekts Cordova hat es irgendwelche Plugins vorhanden keinen. Dies ist das neue Standardverhalten. Alle Plugins, die Sie wünschen, die auch die Core-Plugins muss explizit hinzugefügt werden.

Eine Liste dieser Plugins, einschließlich zusätzliche Drittanbieter Plug-ins der Gemeinschaft finden Sie in der Registrierung unter [plugins.cordova.io][7]. Die CLI können Sie Plugins aus dieser Registrierung suchen. Z. B. Suche nach `bar` und `code` erzeugt ein einzelnes Ergebnis, die beide Begriffe als groß-und Kleinschreibung Teilzeichenfolgen entspricht:

 [7]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


Nur bei der Suche nach der `bar` Erträge und weiteres Ergebnis:

        cordova-plugin-statusbar - Cordova StatusBar Plugin


Der `cordova plugin add` Befehl müssen Sie das Repository für den Plugin-Code angeben. Hier sind Beispiele für die Verwendung der CLI die app Features hinzugefügt:

*   Grundlegenden Geräteinformationen (Device-API):

        $ cordova plugin add cordova-plugin-device


*   Netzwerkverbindung und Batterie-Veranstaltungen:

        $ cordova plugin add cordova-plugin-network-information
        $ cordova plugin add cordova-plugin-battery-status


*   Beschleunigungssensor, Kompass und Geolocation:

        $ cordova plugin add cordova-plugin-device-motion
        $ cordova plugin add cordova-plugin-device-orientation
        $ cordova plugin add cordova-plugin-geolocation


*   Kamera, Medien-Wiedergabe und Aufnahme:

        $ cordova plugin add cordova-plugin-camera
        $ cordova plugin add cordova-plugin-media-capture
        $ cordova plugin add cordova-plugin-media


*   Zugriff auf Dateien auf Gerät oder Netzwerk (File API):

        $ cordova plugin add cordova-plugin-file
        $ cordova plugin add cordova-plugin-file-transfer


*   Benachrichtigung per Dialogfeld oder Vibration:

        $ cordova plugin add cordova-plugin-dialogs
        $ cordova plugin add cordova-plugin-vibration


*   Kontakte:

        $ cordova plugin add cordova-plugin-contacts


*   Globalisierung:

        $ cordova plugin add cordova-plugin-globalization


*   SplashScreen:

        $ cordova plugin add cordova-plugin-splashscreen


*   Neue Browserfenster öffnen (InAppBrowser):

        $ cordova plugin add cordova-plugin-inappbrowser


*   Debug-Konsole:

        $ cordova plugin add cordova-plugin-console


**Hinweis**: die CLI fügt Plugin-Code entsprechend für jede Plattform. Wenn Sie mit Low-Level-Shell-Werkzeugen oder Platform SDKs wie in der Übersicht beschrieben entwickeln wollen, müssen Sie das Plugman-Dienstprogramm zum Hinzufügen von Plugins separat für jede Plattform ausführen. (Weitere Informationen finden Sie unter Using Plugman zu Plugins verwalten.)

Verwendung `plugin ls` (oder `plugin list` , oder `plugin` von selbst) derzeit anzeigen Plugins installiert. Jede zeigt durch seinen Bezeichner:

        $ cordova plugin ls    # or 'plugin list'
        [ 'cordova-plugin-console' ]


Um ein Plugin zu entfernen, finden Sie es durch den gleichen Bezeichner, der in der Liste angezeigt wird. Zum Beispiel, ist hier, wie Sie Unterstützung für eine Debug-Konsole aus einer Release-Version entfernen würde:

        $ cordova plugin rm cordova-plugin-console
        $ cordova plugin remove cordova-plugin-console    # same


Sie können Batch-entfernen oder Hinzufügen von Plugins durch mehr als ein Argument für jeden Befehl angeben:

        $ cordova plugin add cordova-plugin-console cordova-plugin-device


## Erweiterte Plugin-Optionen

Wenn Sie eine Plugin hinzufügen, können mehrere Optionen Sie angeben, wo Sie das Plugin zu holen. Die obigen Beispiele verwenden eine bekannte `registry.cordova.io` Registrierung und das Plugin wird angegeben durch die `id` :

        $ cordova plugin add cordova-plugin-console


Die `id` kann auch die Plugin-Versionsnummer, angefügt nach enthalten einen `@` Charakter. Die `latest` Version ist ein Alias für die aktuellste Version. Zum Beispiel:

        $ cordova plugin add cordova-plugin-console@latest
        $ cordova plugin add cordova-plugin-console@0.2.1


Wenn das Plugin nicht registriert ist `registry.cordova.io` aber befindet sich in einem anderen Git Repository, Sie können eine Alternative URL angeben:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git


Das Git-Beispiel oben holt das Plugin vom Ende des Zweiges master, aber eine Alternative Git-Ref z. B. einen Tag oder Zweig kann angehängt werden, nach einem `#` Charakter:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0


Wenn das Plugin (und seine `plugin.xml` Datei) ist in einem Unterverzeichnis innerhalb der Git Repo, können Sie angeben, dass es mit einem `:` Charakter. Beachten Sie, dass der `#` Charakter wird noch benötigt:

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir


Sie können auch kombinieren, die Git-Ref und das Unterverzeichnis:

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir


Alternativ geben Sie einen lokalen Pfad zu dem Pluginverzeichnis, enthält die `plugin.xml` Datei:

        $ cordova plugin add ../my_plugin_dir


## Verwendung *führt* , auf jeder Plattform anpassen

Während Cordova auf einfache Weise eine app für viele verschiedene Plattformen bereitstellen kann, müssen Sie manchmal Anpassungen hinzufügen. In diesem Fall wollen Sie die Quellcode-Dateien in verschiedenen ändern `www` Verzeichnisse innerhalb der obersten Ebene `platforms` Verzeichnis, da sie regelmäßig mit der obersten Ebene ersetzt sind `www` des Verzeichnisses Cross-Plattform-Quelle.

Stattdessen der obersten Ebene `merges` Verzeichnis bietet Ihnen einen Ort zu geben Vermögen auf bestimmten Plattformen bereitstellen. Jedes plattformspezifischen Unterverzeichnis innerhalb `merges` spiegelt die Verzeichnisstruktur des der `www` Source-Tree, sodass Sie überschreiben oder Dateien nach Bedarf hinzufügen. Zum Beispiel hier ist, wie Sie verwendet möglicherweise `merges` zur Erhöhung der Standardschriftgrad für Android und Amazon-Feuer-OS-Geräte:

*   Bearbeiten Sie die `www/index.html` Datei, Hinzufügen eines Links zu einer weiteren CSS-Datei `overrides.css` in diesem Fall:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Erstellen Sie optional ein leeres `www/css/overrides.css` Datei, die für alle nicht-Android Builds, einen fehlende Datei-Fehler zu verhindern, gelten würden.

*   Erstellen einer `css` Unterverzeichnis innerhalb `merges/android` , fügen Sie eine entsprechende `overrides.css` Datei. Angeben von CSS, die den angegebenen innerhalb 12-Punkt-Standard-Schriftgrad überschreibt `www/css/index.css` , zum Beispiel:

        body { font-size:14px; }


Wenn Sie das Projekt neu erstellen, verfügt die Android Version die benutzerdefinierte Schriftgröße, während andere unverändert bleiben.

Sie können auch `merges` hinzufügen, Dateien nicht vorhanden, im Original `www` Verzeichnis. Beispielsweise eine app kann integrieren eine *Zurück-Schaltfläche* Grafik in die iOS-Benutzeroberfläche, gespeichert `merges/ios/img/back_button.png` , während die Android Version stattdessen erfassen kann `backbutton` Ereignisse über die entsprechende Taste.

## Hilfebefehle

Cordova verfügt über ein paar globale Befehle, die Ihnen helfen können, wenn Sie stecken bleiben oder ein Problem. Der `help` Befehl zeigt alle verfügbaren Cordova-Befehle und deren Syntax:

    $ cordova help
    $ cordova        # same


Darüber hinaus erhalten Sie weitere detaillierte Hilfe zu einem bestimmten Befehl. Zum Beispiel:

    $ cordova run --help


Der `info` Befehl erzeugt eine Liste von potentiell nützliche Details, wie derzeit installierten Plattformen und Plugins, SDK-Versionen für jede Plattform und die CLI-Versionen und `node.js` :

    $ cordova info


Es stellt die Informationen zum Bildschirm sowohl erfasst die Ausgabe in einer lokalen `info.txt` Datei.

**Hinweis**: derzeit sind nur Details auf iOS und Android-Plattformen verfügbar.

## Aktualisierung von Cordova und Ihr Projekt

Nach der Installation der `cordova` Dienstprogramm, Sie können immer aktualisieren auf die neueste Version durch Ausführen des folgenden Befehls:

        $ sudo npm update -g cordova


Verwenden Sie diese Syntax, um eine bestimmte Version zu installieren:

        $ sudo npm install -g cordova@3.1.0-0.2.0


Führen Sie `cordova -v` zu sehen, welche Version aktuell installiert ist. Führen Sie den `npm
info` Befehl für eine längere Liste, die die aktuelle Version zusammen mit anderen Nummern für verfügbare Version enthält:

        $ npm info cordova


Cordova 3.0 ist die erste Version, die in diesem Abschnitt beschriebenen Befehlszeilenschnittstelle zu unterstützen. Wenn Sie von einer Version vor 3.0 aktualisieren, müssen Sie ein neues Projekt erstellen, wie oben beschrieben, dann kopieren Sie die ältere Anwendung Vermögenswerte in der obersten Ebene `www` Verzeichnis. Gegebenenfalls stehen weitere Informationen zum Upgrade auf 3.0 in den Plattform-Führern. Nach der Aktualisierung auf die `cordova` Befehlszeilenschnittstelle und Nutzung `npm update` um dem Laufenden zu bleiben, die mehr Zeit in Anspruch, dort beschriebenen Verfahren sind nicht mehr relevant.

Cordova 3.0 oder höher benötigen noch verschiedene Änderungen auf Projektebene Verzeichnisstrukturen und andere Abhängigkeiten. Nach dem Ausführen der `npm` Befehls über Cordova selbst aktualisieren, möglicherweise müssen Sie die Ressourcen des Projekts entsprechen den aktuellsten Anforderungen zu gewährleisten. Führen Sie einen Befehl wie den folgenden für jede Plattform, dass Sie erstellen:

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
