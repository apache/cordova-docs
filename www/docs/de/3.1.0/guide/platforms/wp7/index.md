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

## 1. Systemanforderungen

*   Betriebssystem:

    *   Windows 7, Windows 8 (Pro) oder Windows Vista mit SP2
        *   Die 64-Bit Version (X 64) von Windows ist für das SDK erforderlich.
        *   Die Pro-Version wird empfohlen, für die Ausführung von eines Geräteemulators.

*   Anmelden und bezahlen für ein [Windows Phone Dev Center][1] -Konto, wenn Sie Ihre app auf einem echten Gerät anbringen oder an Marktplatz übermitteln möchten.

 [1]: http://dev.windowsphone.com/en-us/publish

**Hinweis:** Das SDK in der virtuellen Maschine ausführen könnte einige Herausforderung dar. Sie können dieses Blog-Post lesen, die einen Einblick auf die Lösungen zur Entwicklung für [Windows Phone auf einem Mac][2] gibt.

 [2]: http://aka.ms/BuildaWP8apponaMac

## 2. Installieren Sie SDK + Cordova

*   Downloaden Sie und installieren Sie das [Windows Phone SDK][3]

*   Unterladen Sie her und extrahieren Sie die neueste Kopie von [Cordova][4]. Arbeiten Sie der `lib\windows-phone-8\wp7` Unterverzeichnis `lib\windows-phone-8\wp8` enthält die Windwos Phone 8 Version von Cordova.

*   Kopie der `CordovaWP7_x_x_x.zip` -Datei in das `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` Verzeichnis.

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/
 [4]: http://phonegap.com/download

## 2.1. Aufbau der Vorlage

**Hinweis:** dieser Schritt kann nicht verlangt werden. Wenn das Lib\windows-Telefon-Verzeichnis bereits eine CordovaWP7\_x\_x_x.zip-Datei enthält, können Sie diesen Schritt überspringen.

Um den Entwicklungsprozess zu vereinfachen, kommt Cordova mit einem Skript zum Erstellen der Visual Studio-Vorlagen. Dies ermöglicht schnelle Erstellung von Cordova-Anwendungen in Visual Studio. Diese Vorlage kann bei Bedarf geändert werden und die unten aufgeführten Schritte zeigen wie Sie vorgehen, wenn Sie die Vorlage generieren möchten.

### Führen Sie die Batchdatei erstellen und installieren Sie die Vorlagen.

*   Der Stamm der Repo enthält eine Datei createTemplates.bat. Doppelklick auf diese Datei wird 2 Zip-Dateien generieren. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip wo x.x.x die aktuelle Versionsnummer ist) Um diese Dateien in Visual Studio kopieren leicht zu verwenden werden sie zu "Mein Dateien\Visual Studio 2012\Templates\ProjectTemplates\" Sie dann neue Apache Cordova Windows Phone apps aus der Visual Studio-Datei-> neues Projekt im Menü erstellen können.

*   Wenn Sie die Batch-Datei von der Befehlszeile aus ausführen, können Sie auch mit einem Parameter automatisch installieren aufrufen

Führen Sie das Skript:

    > createTemplates.bat-installieren


## 3. Einrichten des neuen Projekts

*   Öffnen Sie Visual Studio Express für Windows Phone, und wählen Sie **Neues Projekt**.

*   Wählen Sie **CordovaWP7**. (Die Versionsnummer wird in der Vorlagenbeschreibung angezeigt.)

*   Geben Sie dem Projekt einen Namen, und wählen Sie **OK**.

## 4. Überprüfung der Projektstruktur

*   Das `www` Verzeichnis enthält Ihre Cordova `html/js/css` und andere Ressourcen, die in Ihrer Anwendung enthalten.

*   Alle Inhalte, die Sie hinzufügen, muss hier ein Teil der Visual Studio-Projekt zu sein, und als Inhalt festgelegt werden.

*   Hinweis: Diese Bildschirmaufnahme war aus dem wp8-Cordova-2.3.0-Download, Ihr Angebot variiert basierend auf der aktuellen Version installiert.

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 6. Erstellen Sie das Projekt für das Gerät

Um die Anwendung auf einem Gerät zu testen, muss das Gerät registriert werden. Klicken Sie [hier][6] , um Dokumentation zu lesen, auf bereitstellen und Testen auf Ihrem Windows Phone 7.

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Stellen Sie sicher, Ihr Telefon angeschlossen ist, und der Bildschirm ist entsperrt.

*   Wählen Sie in Visual Studio 'Gerät' aus dem oberen Dropdown-Menü.

*   Drücken Sie die Taste grün **spielen** neben dem Haupt-Dropdown-Menü Debuggen zu beginnen, oder geben Sie **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## Fertig!
