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

Diese Anleitung zeigt Ihre Entwicklungsumgebung SDK einrichten, Cordova apps für Windows Phone 8 Geräte bereitstellen. Wenn Sie 7,5 und 8 Geräte ansprechen möchten, entwickeln Sie für Windows Phone 7 statt wie in der Windows Phone 7 Plattform Guide detailliert dargestellt. Version 7 verfügt nicht über die erweiterten Funktionen in Internet Explorer 10 enthalten, aber den gleichen Satz von APIs implementiert. Windows Phone 8 apps tun *nicht* laufen auf Windows Phone 7 Geräte.

Finden Sie im folgenden detaillierte Plattform-spezifischen Informationen, die für beide Versionen gilt:

*   Aktualisieren von Windows Phone
*   Windows Phone Plugins
*   Windows Phone Befehlszeilentools

Die Befehlszeilentools, die oben beziehen sich auf Versionen vor 3.0 Cordova. Informationen über die aktuelle Schnittstelle finden Sie unter The Command-Line Interface.

## Systemanforderungen

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

*   SDK und IDE (Visual Studio)
    
    *   Visual Studio 2012 Professional, Premium oder Ultimate. Beachten Sie, dass Visual Studio Express für Windows Phone (enthalten im SDK) ist nicht empfehlenswert da Sie nicht die Vorlage (siehe unten) mit VS Express erstellen können, da es nicht die **Vorlage exportieren** -Funktionalität, die nur in VS Pro oder höher ist.

*   Anmelden und bezahlen für ein [Windows Phone Dev Center][3] -Konto, wenn Sie Ihre app auf einem echten Gerät anbringen oder an Marktplatz übermitteln möchten.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Hinweis**: das SDK in virtuelle Maschine ausgeführt möglicherweise einige Herausforderungen. Sie können dieses Blog-Post lesen, die einen Einblick auf die Lösungen zur Entwicklung für [Windows Phone auf einem Mac][4] gibt.

 [4]: http://aka.ms/BuildaWP8apponaMac

## Installieren SDK und Cordova

[Windows Phone SDK][5] herunterladen und installieren.

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471

Herunterladen Sie und extrahieren Sie die neueste Kopie von [Cordova][6]. Die `lib\windows-phone-8\wp8` Unterverzeichnis ist, wo Sie Ihre Arbeit tun müssen.

 [6]: http://phonegap.com/download

Kopie der `CordovaWP8_x_x_x.zip` -Datei in das `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` Verzeichnis.

## Aufbau der Vorlage

**Hinweis**: überspringen Sie diesen Schritt, wenn das `lib\windows-phone` Verzeichnis enthält bereits eine `CordovaWP8_x_x_x.zip` Datei.

Zur Vereinfachung der Entwicklung bündelt Cordova ein Skript zum Erstellen der Visual Studio-Vorlagen. Diese ermöglichen es Ihnen, rasch Cordova apps generieren, und Sie können sie ändern, wenn nötig. Die folgenden Schritte zeigen, wie es zu generieren.

### Führen Sie die Batchdatei erstellen und installieren Sie die Vorlagen

Die Repo-Stammverzeichnis enthält eine `createTemplates.bat` Datei. Doppelklicken Sie hier, um zwei zu generieren `.zip` Dateien: `CordovaWP7_x_x_x.zip` und `CordovaWP8_x_x_x.zip` , wobei *x.x.x* die aktuelle Versionsnummer ist. Um diese Dateien einfach in Visual Studio zu verwenden, zu kopieren, sie zu `My
Documents\Visual Studio 2012\Templates\ProjectTemplates\` . Sie können dann neue Apache Cordova Windows Phone apps im Menü **Visual Studio File → New Project** erstellen.

Wenn Sie die Batch-Datei von der Befehlszeile aus ausführen, können Sie es auch mit einem Parameter automatisch installieren aufrufen:

        > createTemplates.bat-installieren
    

## Einrichten eines neuen Projekts

Öffnen Sie Visual Studio Express für Windows Phone, und wählen Sie **Neues Projekt**.

Wählen Sie **CordovaWP8**. Die Versionsnummer wird in der Vorlagenbeschreibung angezeigt.

Geben Sie dem Projekt einen Namen, und wählen Sie **OK**.

![][7]

 [7]: img/guide/platforms/wp8/StandAloneTemplate.png

## Überprüfung der Projektstruktur

Die `www` Directory-Funktionen `html` , `js` , und `css` Unterverzeichnisse und andere Ressourcen Ihre Anwendung erfordert. Alle zusätzlichen Inhalte muss ein Teil der Visual Studio-Projekt sein, und als Inhalt festgelegt werden.

Die folgende Beispiel-Struktur stellt eine 2.3.0 Projekt, sondern variieren je nach der installierten Version:

![][8]

 [8]: img/guide/platforms/wp8/projectStructure.png

## Erstellen und Bereitstellen von Emulator

Stellen Sie sicher, dass **Windows Phone Emulator** im wichtigsten Dropdown-Menü ausgewählt ist.

Dann drücken Sie die Taste grün **spielen** neben dem Dropdown-Menü Debuggen zu beginnen, oder geben Sie **F5**.

![][9]

 [9]: img/guide/platforms/wp8/BuildEmulator.png

## Erstellen Sie das Projekt für das Gerät

Vor dem Testen der Anwendung auf einem Gerät, muss das Gerät registriert werden. [Microsoft][10] Dokumentation weitere Informationen zum Bereitstellen und Testen auf Windows Phone 8. Dies sind die grundlegenden Schritte:

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Stellen Sie sicher, Ihr Telefon angeschlossen ist, und der Bildschirm ist entsperrt.

*   Wählen Sie in Visual Studio **Gerät** aus dem Dropdown-Menü oben.

*   Drücken Sie die Taste grün **spielen** neben dem wichtigsten Dropdown-Menü Debuggen zu beginnen, sonst geben Sie **F5**.

![][11]

 [11]: img/guide/platforms/wp7/wpd.png

Zu diesem Zeitpunkt sind Sie fertig.

## Weiterführende Literatur

Die Windows Phone Developer Blog bietet [hilfreiche Informationen][12] zu den Unterschieden zwischen IE10 und WebKit-Browser und wie beide unterstützen.

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx