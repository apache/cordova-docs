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

# Anleitung zur Windows Platform

Diese Anleitung zeigt wie die SDK-Entwicklungsumgebung zum Erstellen und Bereitstellen von Cordova apps für Windows 8, Windows 8.1 und Windows Phone 8.1 Windows 10 Universal-App-Plattform eingerichtet. Es zeigt, wie mit beiden Kommandozeilenanwendungen generieren und apps zu bauen oder die plattformübergreifende Cordova CLI diskutiert in der Command-Line Interface. (Siehe die Übersicht für einen Vergleich dieser Entwicklung-Optionen.) In diesem Abschnitt wird auch veranschaulicht, Cordova apps innerhalb von Visual Studio zu ändern. Unabhängig davon, welchen Ansatz Sie nehmen, müssen Sie die Visual Studio-SDK installieren, wie unten beschrieben.

Informationen zum Aktualisieren von bestehender Windows 8 Cordova-Projekten finden Sie unter Aktualisieren von Windows 8.

Einzelheiten siehe Fenster Telefon 8 (wp8) Aufenthalte als separate Plattform Windows Phone 8 Platform Guide.

Cordova WebViews unter Windows sind auf Internet Explorer 10 (Windows 8.0) und Internet Explorer 11 (Windows 8.1 und Windows Phone 8.1) als ihre Rendering-Engine, also als eine praktische Sache Sie IE leistungsstarken Debugger verwenden können, um alle Webinhalte testen, die Cordova-APIs aufrufen nicht. Die Windows Phone Developer Blog enthält [hilfreiche Hinweise][1] zum Support IE sowie vergleichbare WebKit-Browser.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Anforderungen und Unterstützung

Entwickeln von Anwendungen für Windows-Plattform, die Sie brauchen:

*   Eine Windows-8.1, 32 oder 64-Bit-Maschine (*Home*, *Pro*oder *Enterprise* -Editionen) mit mindestens 4 GB RAM.

*   Windows 8.0, 8.1 oder 10, 32 oder 64-Bit *Home*, *Pro*oder *Enterprise* -Editionen, zusammen mit [Visual Studio 2012 Express][2] oder Visual Studio-2013. Visual Studio-2015 kann nicht Windows 8.0 apps zu bauen.

 [2]: http://www.visualstudio.com/downloads

Entwickeln Sie Anwendungen für Windows 8.0 und 8.1 (einschließlich Windows Phone 8.1):

*   8.1 für Windows oder Windows 10, 32 oder 64-Bit *Home*, *Pro*oder *Enterprise* -Editionen, die zusammen mit [Visual Studio 2013 Express Edition][2] oder höher. Eine Evaluierungsversion von Windows 8.1 Enterprise steht aus dem [Microsoft Developer Network][3].

*   Für die Windows Phone-Emulatoren, Professional Edition Windows 8.1 (X 64) oder höher, und ein Prozessor unterstützt [Client Hyper-V und Second Level Address Translation (Stab)][4]. Eine Evaluierungsversion von Windows 8.1 Enterprise steht aus dem [Microsoft Developer Network][3].

*   [Visual Studio-2013 für Windows][5] (Ausdrückliche oder höher).

 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [5]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Entwickeln Sie Anwendungen für Windows 10

*   8.1 für Windows oder Windows 10 Technical Preview 2, 32 oder 64-Bit ist, zusammen mit [Visual Studio 2015 RC][6] oder höher.

 [6]: http://www.visualstudio.com/preview

APP-Kompatibilität wird durch das Betriebssystem bestimmt, die die app ausgerichtet. Apps sind forwardly-kompatible, aber nicht rückwärts-kompatibel ist, so eine app für Windows 8.1 nicht unter 8.0 ausgeführt, aber eine app gebaut für 8.0 auf 8.1 ausgeführt.

Folgen Sie den Anweisungen auf [windowsstore.com][7] , die app zu Windows Store einzureichen.

 [7]: http://www.windowsstore.com/

Entwicklung von Cordova apps für Windows können Sie einen PC mit Windows, aber Sie können auch auf einem Mac entwickeln, entweder durch eine VM-Umgebung ausführen oder mithilfe von Boot Camp Partition Dualboot Windows-8.1. Finden Sie diese Ressourcen die erforderlichen Windows-Entwicklungsumgebung auf einem Mac einrichten:

*   [VMWare Fusion][8]

*   [Parallels Desktop][9]

*   [Boot Camp][10]

 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [9]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [10]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Mithilfe von Cordova Shell Tools

Wenn Sie Cordova's Windows-zentrierte Shell-Werkzeugen in Verbindung mit dem SDK verwenden möchten, müssen Sie zwei grundlegende Optionen:

*   Greifen sie lokal von Projektcode generiert durch die CLI. Sie stehen in den `platforms/windows/` Verzeichnis, nachdem Sie die `windows` -Plattform hinzufügen, wie unten beschrieben.

*   Aus eine separate Verteilung bei [cordova.apache.org][11]herunterladen. Die Cordova-Distribution enthält separate Archiv für jede Plattform. Achten Sie darauf, um das entsprechende Archiv, `Cordova-Windows` in diesem Fall in ein leeres Verzeichnis zu erweitern. Die relevanten Batch-Dienstprogramme sind im `package/bin` -Verzeichnis. (Konsultieren Sie die **README** -Datei, ggf. für eine genauere Wegbeschreibung.)

 [11]: https://www.apache.org/dist/cordova/platforms/

Diese Shell-Tools können Sie erstellen, erstellen und Ausführen von Windows-Anwendungen. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten.

## Das SDK installieren

Installieren Sie eine beliebige Edition von [Visual Studio][2] die Version, die obengenannten Anforderungen entsprechen.

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

Für Windows 10 hat der Visual Studio Installer eine Option zum Installieren des Tools zur universellen Windows-Anwendungen erstellen. Sie müssen sicherstellen, dass die Auswahl dieser Option bei der Installation das erforderliche SDK installieren.

## Erstellen eines neuen Projekts

Zu diesem Zeitpunkt zum Erstellen eines neuen Projekts können Sie zwischen das Cross-Plattform-CLI-Tool in The Command-Line Interface oder die Reihe von Windows-spezifische Kommandozeilenanwendungen beschrieben. Der CLI-Ansatz unten wird eine app mit dem Namen *"HelloWorld"* eines neue `hello` Projekt-Verzeichnis:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


Hier ist der entsprechende Low-Level-Shell-Tool-Ansatz:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


Dieses Projekt richtet sich an Windows 8.1 als Standardziel OS. Du kannst deiner Wahl 8.0 oder 10.0 (siehe "Konfigurieren deiner Windows-Version" unten) für alle Builds oder Sie Ziel bestimmte eine bestimmte Version bei jedem Build.

## Erstellen Sie das Projekt

Bei Verwendung von CLI in der Entwicklung ist das Projektverzeichnis der obersten Ebene `www` Verzeichnis enthält die Quellcode-Dateien. Führen Sie einen dieser dem Projektverzeichnis, die app neu zu erstellen:

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


Hier ist der entsprechende Low-Level-Shell-Tool-Ansatz:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


Der `clean` Befehl können Sie die Verzeichnisse in der Vorbereitung für die nächste auszuschwemmen `build` :

        C:\path\to\project\cordova\clean.bat


## Ziel-Windows-Version zu konfigurieren

Von Standard `build` Befehl erzeugt zwei Pakete: Windows 8.0 und 8.1 Windows Phone. Aktualisieren von Windows-Paket auf Version 8.1, dass die Konfigurationsdatei (`"config.xml"` folgende Konfigurationseinstellung hinzugefügt werden müssen).

        <preference name="windows-target-version" value="8.1" />


Sobald Sie hinzufügen startet diese Einstellung-Befehl `build` Windows 8.1 und Windows Phone 8.1 Pakete zu produzieren.

### Der Parameter --appx

Sie können beschließen, dass Sie eine bestimmte Version der Anwendung auf einen bestimmten OS erstellen möchten (beispielsweise Sie möglicherweise haben festgelegt, dass Sie Windows 10 ansprechen möchten, aber Sie wollen bauen für Windows Phone 8.1). Hierzu können Sie den Parameter `--appx` :

        > cordova build windows -- --appx=8.1-phone


Das Buildsystem ignoriert den Präferenz-Satz in "config.xml" für die Ziel-Windows-Version und streng Erstellen eines Pakets für Windows Phone 8.1.

Gültige Werte für das Flag `--appx` sind `8,1-win`, `8.1-phone`und `UAP` (für Windows 10 Universal Apps). Diese Optionen gelten auch für den Befehl `cordova run` .

### Überlegungen zum Ziel-Windows-version

Windows 10 unterstützt einen neuen "Remote" Modus für Cordova apps (und HTML apps im allgemeinen). Dieser Modus ermöglicht apps viel mehr Freiheit mit Respekt, der DOM-Manipulation und gängige Web-Muster wie die Verwendung von Inlineskript verwenden, aber nicht so durch Reduzierung den Satz von Funktionen Ihre app verwenden kann, wenn an den öffentlichen Windows-Informationsspeicher gesendet. Schauen Sie für weitere Informationen zu Windows 10 und Remote-Modus der [Cordova für Windows 10][13] -Dokumentation.

 [13]: win10-support.md.html

Wenn Sie Remote-Modus verwenden, werden Entwickler aufgefordert, eine Content Security Policy (CSP) gelten für ihre Anwendung, Skript-Injection-Angriffe zu verhindern.

## Die app bereitstellen

Windows-Paket bereitstellen:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


Windows Phone-Paket bereitstellen:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


Können Sie **cordova run windows --list** finden alle verfügbaren Ziele und **cordova run windows --target=target_name \-- -|-phone** Anwendung auf ein bestimmtes Gerät oder einen Emulator ausführen (z. B. `cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`Ausführen).

Sie können auch **cordova run --help** finden Sie unter zusätzliche Build und Ausführungsoptionen.

## Öffnen Sie das Projekt im SDK und Bereitstellen der Anwendung

Sobald Sie eine Cordova-Anwendung zu erstellen, wie oben beschrieben, können Sie es mit Visual Studio öffnen. Die verschiedenen `bauen` Befehle Generieren einer Visual Studio-Projektmappendatei (*.sln*). Öffnen Sie die Datei im Datei-Explorer ändern Sie das Projekt in Visual Studio:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

Die `CordovaApp` -Komponente zeigt innerhalb der Lösung und ihrer `Www` -Verzeichnis enthält den Web-basierte Quellcode, einschließlich der `index.html` -Homepage:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Die Steuerelemente unter Visual Studio im Hauptmenü können Sie testen oder die app bereitstellen:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

**Lokalen Computer** ausgewählt drücken Sie den grünen Pfeil, um die app auf dem gleichen Computer ausführen von Visual Studio installieren. Einmal tun Sie dies, die app wird in Windows 8 app Kleinanzeigen:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

Jedes Mal, wenn Sie die Anwendung neu erstellen wird aktualisiert, die Version, die in der Schnittstelle zur Verfügung.

Sobald in der app-Angebote erhältlich, kann halten Sie die **STRG** -Taste beim Markieren der app Sie um zum Hauptbildschirm zu fixieren:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

Beachten Sie, dass wenn Sie die app in einer virtuellen Umgebung öffnen, müssen Sie möglicherweise klicken in den Ecken oder an den Seiten des Windows apps zu wechseln oder auf zusätzliche Funktionen zugreifen:

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

Wählen Sie alternativ die **Simulator** -Bereitstellungsoption die app anzeigen, als ob es auf einem Tablettgerät ausgeführt wurden:

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

Im Gegensatz zu desktop-Bereitstellung mit dieser Option können Sie simulieren die Tablette Orientierung, Lage, und variieren ihre Netzwerkeinstellungen.

**Hinweis**: Rufen Sie die Übersicht für Ratschläge, wie Cordovas Kommandozeilen-Tools oder das SDK in Ihrem Workflow verwendet. Cordova CLI stützt sich auf Cross-Plattform-Quellcode, der routinemäßig die plattformspezifischen Dateien vom SDK verwendet überschreibt. Möchten Sie das SDK zu verwenden, ändern Sie das Projekt, verwenden Sie die Low-Level-Kommandozeilenanwendungen als Alternative zu den CLI.
