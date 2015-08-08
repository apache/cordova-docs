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

# Handbuch für die Plattform von Windows Phone-8

Diese Anleitung zeigt Ihre Entwicklungsumgebung SDK einrichten, Cordova apps für Windows Phone 8 Geräte bereitstellen. Wenn Sie 7,5 und 8 Geräte ansprechen möchten, entwickeln Sie für Windows Phone 7 stattdessen, wie detailliert die Windows Phone 7 Plattform-Guide. Version 7 verfügt nicht über die erweiterten Funktionen im IE10 enthalten, aber den gleichen Satz von APIs implementiert. Windows Phone 8 apps tun *nicht* laufen auf Windows Phone 7 Geräte.

Finden Sie im folgenden detaillierte Plattform-spezifischen Informationen, die für beide Versionen gilt:

*   Aktualisieren von Windows Phone
*   Windows Phone Plugins
*   Windows Phone Befehlszeilentools

Die Befehlszeilentools, die oben beziehen sich auf Versionen vor 3.0 Cordova. Informationen über die aktuelle Schnittstelle finden Sie unter The Command-Line Interface.

## 1. Systemanforderungen

*   Betriebssystem:

    *   Windows 8 oder Windows 8 Pro
        *   Die 64-Bit Version (X 64) von Windows ist für das SDK erforderlich.
        *   Die Pro-Version wird empfohlen, damit Sie einen Geräteemulator ausführen können.

*   Hardware:

    *   6,5 GB freier Festplattenspeicher
    *   4 GB RAM
    *   64-Bit (x 64)-CPU

*   Windows Phone 8 Emulator

    *   Der Telefon-Emulator verwendet Hyper-V, so dass diese Liste die Voraussetzungen enthält.
    *   Pro 64-Bit-Edition von Windows 8 oder größer
    *   Erfordert einen Prozessor die Virtualisierung unterstützt und [Zweite Level Address Translation (SLAT)][1]
        *   Siehe auch die [Liste der Intel-Prozessoren, die Unterstützung von VT-X (Virtualisierung) und EPT (Stab)][2]
    *   Aktivieren Sie die Virtualisierungsfunktionen (d.h., VT-X auf Intel) in den BIOS-Einstellungen, wie dies in der Regel standardmäßig deaktiviert ist.

*   SDK + IDE (Visual Studio)

    *   Visual Studio 2012 Professional, Premium oder Ultimate. Beachten Sie, dass Visual Studio Express für Windows Phone (enthalten im SDK) ist nicht empfehlenswert da Sie nicht die Vorlage (siehe unten) mit VS Express erstellen können, da es nicht die **Vorlage exportieren** -Funktionalität, die nur in VS Pro oder höher ist.

*   Anmelden und bezahlen für ein [Windows Phone Dev Center][3] -Konto, wenn Sie Ihre app auf einem echten Gerät anbringen oder an Marktplatz übermitteln möchten.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Hinweis:** Das SDK im virtuellen Maschine ausgeführt wird, könnte einige Herausforderung dar. Sie können dieses Blog-Post lesen, die Einblick auf die Lösungen zur Entwicklung für [Windows Phone auf einem Mac][4] gibt.

 [4]: http://aka.ms/BuildaWP8apponaMac

## 2. Installieren Sie SDK + Cordova

*   [Windows Phone SDK][5] herunterladen und installieren

*   Herunterladen Sie und extrahieren Sie die neueste Kopie von [Cordova][6]. Arbeiten Sie der `lib\windows-phone-8\wp8` Unterverzeichnis `lib\windows-phone-8\wp7` enthält die Windwos Phone 7-Version von Cordova.

*   Kopie der `CordovaWP8_x_x_x.zip` -Datei in das `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` Verzeichnis.

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [6]: http://phonegap.com/download

## 2.1. Aufbau der Vorlage

**Hinweis:** dieser Schritt kann nicht verlangt werden. Wenn das Lib\windows-Telefon-Verzeichnis bereits eine CordovaWP8\_x\_x_x.zip-Datei enthält, können Sie diesen Schritt überspringen.

Um den Entwicklungsprozess zu vereinfachen, kommt Cordova mit einem Skript zum Erstellen der Visual Studio-Vorlagen. Dies ermöglicht schnelle Erstellung von Cordova-Anwendungen in Visual Studio. Diese Vorlage kann bei Bedarf geändert werden und die unten aufgeführten Schritte zeigen wie Sie vorgehen, wenn Sie die Vorlage generieren möchten.

### Führen Sie die Batchdatei erstellen und installieren Sie die Vorlagen.

*   Der Stamm der Repo enthält eine Datei createTemplates.bat. Doppelklick auf diese Datei wird 2 Zip-Dateien generieren. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip wo x.x.x die aktuelle Versionsnummer ist) Um diese Dateien in Visual Studio kopieren leicht zu verwenden werden sie zu "Mein Dateien\Visual Studio 2012\Templates\ProjectTemplates\" Sie dann neue Apache Cordova Windows Phone apps aus der Visual Studio-Datei-> neues Projekt im Menü erstellen können.

*   Wenn Sie die Batch-Datei von der Befehlszeile aus ausführen, können Sie auch mit einem Parameter automatisch installieren aufrufen

Führen Sie das Skript:

    > createTemplates.bat-installieren


## 3. Einrichten des neuen Projekts

*   Öffnen Sie Visual Studio Express für Windows Phone, und wählen Sie **Neues Projekt**.

*   Wählen Sie **CordovaWP8**. (Die Versionsnummer wird in der Vorlagenbeschreibung angezeigt.)

*   Geben Sie dem Projekt einen Namen, und wählen Sie **OK**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## 4. Überprüfung der Projektstruktur

*   Das `www` Verzeichnis enthält Ihre Cordova `html/js/css` und andere Ressourcen, die in Ihrer Anwendung enthalten.

*   Alle Inhalte, die Sie hinzufügen, muss hier ein Teil der Visual Studio-Projekt zu sein, und als Inhalt festgelegt werden.

*   Hinweis: Diese Bildschirmaufnahme war aus dem Cordova-2.3.0-Download, Ihr Angebot variiert basierend auf der aktuellen Version installiert.

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 5. Erstellen und Bereitstellen von Emulator

*   Stellen Sie sicher, dass **Windows Phone Emulator** im wichtigsten Dropdown-Menü ausgewählt ist.

*   Drücken Sie die Taste grün **spielen** neben dem Dropdown-Menü Debuggen zu beginnen, oder geben Sie **F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## 6. Erstellen Sie das Projekt für das Gerät

Um die Anwendung auf einem Gerät zu testen, muss das Gerät registriert werden. Klicken Sie [hier][10] , um auf bereitstellen und Testen auf Ihrem Windows Phone 8 die Dokumentation lesen.

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Stellen Sie sicher, Ihr Telefon angeschlossen ist, und der Bildschirm ist entsperrt.

*   Wählen Sie in Visual Studio 'Gerät' aus dem oberen Dropdown-Menü.

*   Drücken Sie die Taste grün **spielen** neben dem wichtigsten Dropdown-Menü Debuggen zu beginnen, oder geben Sie **F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## Fertig!

## Weiterführende Literatur

Für weitere Details über die spezifischen Unterschiede zwischen IE10 und WebKit-Browser und wie unterstützen beide MS hat eine hilfreiche [Anleitung hier][12]

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
