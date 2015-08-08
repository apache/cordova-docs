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

# Windows Phone 7 Plattform Guide

Diese Anleitung zeigt Ihre Entwicklungsumgebung SDK einrichten, Cordova apps für Windows Phone 7 Geräte bereitstellen. Apps laufen auch auf Windows Phone 8 Geräten mit derselben APIs, aber Version 7 IE10s erweiterte Features auf Windows Phone 8 fehlt. Windows Phone 8 apps tun *nicht* laufen auf Windows Phone 7 Geräte.

Finden Sie im folgenden detaillierte Plattform-spezifischen Informationen, die für beide Versionen gilt:

*   Aktualisieren von Windows Phone
*   Windows Phone Plugins
*   Windows Phone Befehlszeilentools

Die Befehlszeilentools, die oben beziehen sich auf Versionen vor 3.0 Cordova. Informationen über die aktuelle Schnittstelle finden Sie unter The Command-Line Interface.

## Systemanforderungen

Verwenden Sie Windows 7 oder Windows 8 (Pro) oder Windows Vista mit SP2. Die 64-Bit Version (X 64) von Windows ist für das SDK erforderlich. Die Pro-Version wird empfohlen, für die Ausführung von eines Geräteemulators.

Anmelden und bezahlen für ein [Windows Phone Dev Center][1] -Konto, wenn Sie eine app auf einem echten Gerät anbringen oder an Marktplatz übermitteln möchten.

 [1]: http://dev.windowsphone.com/en-us/publish

**Hinweis**: das SDK in der virtuellen Maschine ausführen kann stellt eine Herausforderung dar. Lesen Sie [Windows Phone auf einem Mac][2] für Einblicke in die Entwicklung von Lösungen.

 [2]: http://aka.ms/BuildaWP8apponaMac

## Installieren SDK und Cordova

Downloaden Sie und installieren Sie das [Windows Phone SDK][3].

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

Herunterladen Sie und extrahieren Sie die neueste Kopie von [Cordova][4]. Du musst Arbeiten der `lib\windows-phone-8\wp7` Unterverzeichnis `lib\windows-phone-8\wp8` enthält die Windwos Phone 8 Version von Cordova.

 [4]: http://phonegap.com/download

Kopie der `CordovaWP7_x_x_x.zip` -Datei in das `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` Verzeichnis.

## Aufbau der Vorlage

**Hinweis**: überspringen Sie diesen Schritt, wenn das `lib\windows-phone` Verzeichnis enthält bereits eine `CordovaWP7_x_x_x.zip` Datei.

Zur Vereinfachung der Entwicklung bündelt Cordova ein Skript zum Erstellen der Visual Studio-Vorlagen. Diese ermöglichen es Ihnen, rasch Cordova apps generieren, und Sie können sie ändern, wenn nötig. Die folgenden Schritte zeigen, wie es zu generieren.

### Führen Sie die Batchdatei erstellen und installieren Sie die Vorlagen

Der Stamm der Repo enthält eine `createTemplates.bat` Datei. Doppelklick auf diese Datei erzeugt zwei `.zip` Dateien: `CordovaWP7_x_x_x.zip` und `CordovaWP8_x_x_x.zip` , wobei *x.x.x* die aktuelle Versionsnummer ist. Um diese Dateien einfach in Visual Studio zu verwenden, kopieren sie die `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` Unterverzeichnis. Sie können dann neues **Apache Cordova Windows Phone_ Anwendungen von Visual Studio __File → neu Projekt** -Menü zu erstellen.

Wenn Sie die Batch-Datei von der Befehlszeile aus ausführen, können Sie auch mit einem Parameter automatisch installieren aufrufen:

        > createTemplates.bat-installieren


## Einrichten eines neuen Projekts

*   Öffnen Sie Visual Studio Express für Windows Phone, und wählen Sie **Neues Projekt**.

*   Wählen Sie **CordovaWP7**. Die Version Anzahl Displays in der Beschreibung der Vorlage.

*   Geben Sie dem Projekt einen Namen, und wählen Sie **OK**.

## Überprüfung der Projektstruktur

Die `www` Directory-Funktionen `html` , `js` , und `css` Unterverzeichnisse und andere Ressourcen Ihre Anwendung erfordert. Alle zusätzlichen Inhalte muss ein Teil der Visual Studio-Projekt sein, und als Inhalt festgelegt werden.

Die folgende Beispiel-Struktur stellt eine 2.3.0 Projekt, sondern variieren je nach der installierten Version:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Erstellen Sie das Projekt für das Gerät

Vor dem Testen der Anwendung auf einem Gerät, muss das Gerät registriert werden. [Microsoft][6] Dokumentation weitere Informationen zum Bereitstellen und Testen auf Windows Phone 7. Dies sind die grundlegenden Schritte:

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Stellen Sie sicher, Ihr Telefon angeschlossen ist, und der Bildschirm ist entsperrt.

*   Wählen Sie in Visual Studio **Gerät** aus dem Dropdown-Menü oben.

*   Drücken Sie die Taste grün **spielen** neben dem wichtigsten Dropdown-Menü Debuggen zu beginnen, sonst geben Sie **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

Zu diesem Zeitpunkt sind Sie fertig.
