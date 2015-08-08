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

# Handbuch für die Plattform von Windows Phone-8

Diese Anleitung zeigt Ihre Entwicklungsumgebung SDK einrichten, Cordova apps für Windows Phone Geräte bereitstellen. Es konzentriert sich auf Windows Phone 8, sondern enthält weitere Details zum Windows Phone 7 Unterstützung.

Es veranschaulicht, wie mithilfe von entweder Windows Phone-spezifischen Shell Tools generieren und bauen apps oder die plattformübergreifende Cordova CLI diskutiert in der Command-Line Interface. (Siehe die Übersicht für einen Vergleich dieser Entwicklung-Workflows). In diesem Abschnitt veranschaulicht auch Cordova apps zu öffnen, so dass diese innerhalb von Visual Studio ändern zu können. Unabhängig davon, welchen Ansatz Sie nehmen, müssen Sie das Windows Phone SDK installieren, wie unten beschrieben.

Im folgenden Details, die spezifisch auf die Windows Phone-Plattform finden Sie:

*   Windows Phone 8 Plugins
*   Aktualisieren von Windows Phone 8

Für die Plattform Windows Phone 8 setzt die Cordova WebView auf Internet Explorer 10 als die Rendering-Engine, so als eine praktische Sache IE10s leistungsstarken Debugger können Sie verwenden Web-Inhalte testen, die Cordova-APIs aufrufen nicht. Die Windows Phone Developer Blog enthält [hilfreiche Anleitungen][1] , IE10 zusammen mit vergleichbaren WebKit-Browser zu unterstützen.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Anforderungen und Unterstützung

Sie benötigen Folgendes:

*   Eine 64-Bit-Version von Windows 8 Pro, eine Installations-CD oder eine *ISO* -Imagedatei. Eine Testversion steht auf der [Microsoft Developer Network][2]zur Verfügung. Die Pro-Version ist erforderlich, Device Emulator ausführen.

*   Das [Windows Phone SDK][3].

*   Um über die Kommandozeile mit dem Windows Phone 8.0 SDK bereitstellen, muss [Visual Studio 2012 Update 2][4] installiert sein.

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [4]: https://support.microsoft.com/en-us/kb/2797912

Um Cordova apps für Windows Phone Geräte zu entwickeln, können einen PC mit Windows, aber Sie können auch entwickeln auf einem Mac oder mit einer VM-Umgebung mithilfe von Boot Camp für duales Booten eine Windows-Partition. Finden Sie diese Ressourcen die erforderlichen Windows-Entwicklungsumgebung auf einem Mac einrichten:

*   **VMWare Fusion**: um die Windows 8 virtuelle Maschine einzurichten, folgen Sie die Anweisungen im [Microsoft Developer Network][5], dann finden Sie unter Konfigurieren von VMWare Fusion Informationen zum Vorbereiten der virtuellen Umgebung gebündelt mit dem SDK Emulator ausführen.

*   **Parallels Desktop**: um die Windows 8 virtuelle Maschine einzurichten, folgen Sie die Anweisungen im [Microsoft Developer Network][6], dann finden Sie unter Konfigurieren von Parallels Desktop Informationen zum Vorbereiten der virtuellen Umgebung gebündelt mit dem SDK Emulator ausführen.

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **Boot Camp**: um die Windows 8-Partition einzurichten, befolgen Sie die Installationsanweisungen, die [Microsoft Developer Network][7].

 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

Wenn Sie auf einem PC entwickeln, muss der Prozessor Virtualisierung (Intel*VT-X* ) und [Second Level Address Translation (Stab)][8]unterstützen. Konsultieren Sie [Intels Prozessoren unterstützen][9]. Virtualisierung ist in der Regel standardmäßig deaktiviert, also musst du es in den BIOS-Einstellungen aktivieren. Der PC sollte mindestens 6,5 GB freier Festplattenspeicher und 4 GB RAM verfügen.

 [8]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [9]: http://ark.intel.com/Products/VirtualizationTechnology

## Mithilfe von Cordova Shell Tools

Wenn Sie Cordovas Windows Phone-zentrierte Shell-Werkzeugen in Verbindung mit dem SDK verwenden möchten, müssen Sie zwei grundlegende Optionen:

*   Greifen sie lokal von Projektcode generiert durch die CLI. Sie stehen in den `platforms/wp8/cordova` Verzeichnis nach dem Hinzufügen der `wp8` Plattform wie unten beschrieben.

*   Aus eine separate Verteilung auf [cordova.apache.org][10]herunterladen. Die Cordova-Distribution enthält separate Archiv für jede Plattform. Achten Sie darauf, um das entsprechende Archiv zu erweitern `cordova-wp8\wp8` in diesem Fall in ein leeres Verzeichnis. Die entsprechenden Batch-Dienstprogramme sind in der obersten Ebene `bin` Verzeichnis. (Konsultieren Sie die **README** -Datei, ggf. für eine genauere Wegbeschreibung.)

 [10]: http://cordova.apache.org

Diese Shell-Tools können Sie erstellen, erstellen und Ausführen von Windows Phone apps. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten. Finden Sie unter Application Plugins, Anleitungen, Plugins und Windows Phone 8 Plugins für Informationen speziell für die Windows Phone-Plattform zu entwickeln.

## Das SDK installieren

Installieren Sie die neueste Version des Windows Phone SDK von der **Downloads** -Bereich der [dev.windowsphone.com][11]. Sie können auch neuere Emulator-Update-Pakete installieren.

 [11]: https://dev.windowsphone.com/en-us/downloadsdk

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_downloadSDK.png

## Erstellen eines neuen Projekts

Zu diesem Zeitpunkt zum Erstellen eines neuen Projekts können Sie zwischen das Cross-Plattform-CLI-Tool in der Kommandozeilen-Schnittstelle oder die Menge der Windows Phone-spezifischen Shell Tools beschrieben. Von in einem Quellcode-Verzeichnis ist hier der CLI-Ansatz:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8


Hier ist der entsprechende Low-Level-Shell-Tool-Ansatz:

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Erstellen Sie das Projekt

Bei Verwendung von CLI in der Entwicklung ist das Projektverzeichnis der obersten Ebene `www` Verzeichnis enthält die Quellcode-Dateien. Führen Sie einen dieser dem Projektverzeichnis, die app neu zu erstellen:

        > cordova build
        > cordova build wp8   # do not rebuild other platforms


Wenn Sie Shell-Werkzeugen von Windows Phone-spezifischen Entwicklung verwenden, gibt es ein anderen Ansatz. Sobald Sie das Projekt generieren, die Standard-app-Quelle steht in den `projects\wp8\www` Unterverzeichnis. Nachfolgende Befehle stehen in der `cordova` Unterverzeichnis auf dem gleichen Niveau.

Der `build` Befehl reinigt Projektdateien und Umbauten, die app. Das erste Beispiel generiert Debuginformationen und das zweite Zeichen der apps für Release:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


Der `clean` Befehl können Sie die Verzeichnisse in der Vorbereitung für die nächste auszuschwemmen `build` :

        C:\path\to\project\cordova\clean.bat


## Bereitstellen auf Emulator

An dieser Stelle können Sie die `cordova` CLI-Dienstprogramm zum Bereitstellen der Anwendung für den Emulator von der Befehlszeile aus:

        > cordova emulate wp8


Andernfalls verwenden Sie die Alternative Shell-Schnittstelle:

        C:\path\to\project\cordova\run


Standardmäßig die `run` Skript ruft das Emulator-Flag und übernimmt zusätzliche Flags, die für die `--debug` stellt die Standardeinstellung:

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild


Der Emulator startet eine Geräte-Image mit der app installiert. Navigieren Sie im home-Bildschirm dem Bedienfeld "apps", die **"HelloWorld"** app zu starten. Dies zeigt die app starten mit seinen Splash-Screen, gefolgt von seiner wichtigsten Schnittstelle:

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator.png

Des Emulators grundlegenden Steuerelemente, auf die sich oben rechts auf dem Bildschirm des Geräts können Sie zwischen hoch-und Querformat zu wechseln. Die Schaltfläche **>** öffnet weitere Steuerelemente, die Sie komplexere Orientierungen und Gesten testen können:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_orient.png

Diese erweiterte Steuerelemente ermöglichen auch Ihnen, das Gerät den Speicherort ändern oder Abfolgen von Bewegungen zu simulieren:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_loc.png

## Bereitstellung auf Gerät

Vor dem Testen der Anwendung auf einem Gerät, muss das Gerät registriert werden. [Microsoft][16] Dokumentation weitere Informationen zum Bereitstellen und Testen auf Windows Phone 8. Stellen Sie außerdem sicher, dass das Telefon an den Computer angeschlossen ist, und der Bildschirm ist entsperrt.

 [16]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565.aspx

Führen Sie den folgenden CLI-Befehl die app auf dem Gerät ausführen:

    > cordova run wp8


Es entspricht dieser Low-Level Shellbefehl:

    C:\path\to\project\cordova\run --device


Alternativ, wenn Sie in Visual Studio arbeiten, wählen Sie **Windows Phone Gerät** aus dem Dropdown-Menü oben, dann drücken Sie Schaltfläche in der Nähe der grünen **spielen** , sonst geben Sie **F5**.

## Ändern Sie das Projekt im SDK

Sobald Sie eine Cordova-Anwendung zu erstellen, wie oben beschrieben, können Sie es mit dem SDK öffnen. Die verschiedenen `build` Befehle generiert eine Visual Studio-Projektmappendatei (*.sln*)-Datei. Öffnen Sie die Datei um das Projekt in Visual Studio zu ändern. Der Web-basierte Quellcode steht im Rahmen des Projektes `www` Verzeichnis. Zusammen mit anderen Tools bietet im SDK, mit dem Steuerelement unter dem Menü können Sie die app im Windows Phone-Emulator zu starten:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_vs.png

Ratschläge, wie mithilfe von Cordovas Kommandozeilen-Tools oder das SDK in Ihrem Workflow finden Sie in der Übersicht. Cordova CLI stützt sich auf Cross-Plattform-Quellcode, der routinemäßig die plattformspezifischen Dateien vom SDK verwendet überschreibt. Wenn Sie im SDK arbeiten möchten, verwenden Sie die Low-Level-Shell-Werkzeugen als Alternative zu den CLI.
