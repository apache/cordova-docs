* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Anleitung zur Windows 8 Platform

Diese Anleitung zeigt wie Sie Ihre Entwicklungsumgebung SDK einrichten, Cordova apps in Windows 8 bereitstellen. Es zeigt, wie mithilfe von entweder spezifisch für Windows 8 Shell-Werkzeugen generieren und bauen apps oder die plattformübergreifende Cordova CLI diskutiert in der Command-Line Interface. (Siehe die Übersicht für einen Vergleich dieser Entwicklung-Optionen.) In diesem Abschnitt veranschaulicht auch Cordova apps innerhalb von Visual Studio zu ändern. Unabhängig davon, welchen Ansatz Sie nehmen, müssen Sie das Visual Studio-SDK installieren, wie unten beschrieben.

Informationen zum Aktualisieren von bestehender Windows 8 Cordova-Projekten finden Sie unter Aktualisieren von Windows 8.

Cordova WebViews unter Windows 8 sind auf Internet Explorer 10 als ihre Rendering-Engine, so als eine praktische Sache IE10s leistungsstarken Debugger können Sie verwenden Web-Inhalte testen, die Cordova-APIs aufrufen nicht. Die Windows Phone Developer Blog enthält [hilfreiche Anleitungen][1] , IE10 zusammen mit vergleichbaren WebKit-Browser zu unterstützen.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Anforderungen und Unterstützung

Sie benötigen eine der folgenden Kombinationen der OS/SDK, entweder von einer Installationsdiskette oder ein *ISO* Image-Datei:

*   Windows 8.0 oder 8.1, 32 oder 64-Bit *Home*, *Pro*oder *Enterprise* -Editionen, zusammen mit [Visual Studio 2012 Express][2].

*   8.1 für Windows, 32 oder 64-Bit *Home*, *Pro*oder *Enterprise* -Editionen, zusammen mit [Visual Studio 2013 Pro][2] oder höher. Eine Evaluierungsversion von Windows 8.1 Enterprise gibt es aus dem [Microsoft Developer Network][3].

 [2]: http://www.visualstudio.com/downloads
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510

Apps, die kompiliert unter Windows 8.1 tun *nicht* laufen unter Windows 8.0. Apps unter Windows 8.0 kompiliert sind aufwärtskompatibel mit 8.1.

<!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

Folgen Sie den Anweisungen auf [windowsstore.com][4] die app Windows Store einreichen.

 [4]: http://www.windowsstore.com/

<!-- true? -->

Um Cordova apps für Windows 8 entwickeln, können einen PC mit Windows, aber Sie können auch auf einem Mac entwickeln, oder mit einer VM-Umgebung mithilfe von Boot Camp eine Windows 8 Dual-Boot-Partition. Finden Sie diese Ressourcen die erforderlichen Windows-Entwicklungsumgebung auf einem Mac einrichten:

*   [VMWare Fusion][5]

*   [Parallels Desktop][6],

*   [Boot Camp][7].

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Mithilfe von Cordova Shell Tools

Wenn Sie Cordovas-Windows 8-zentrierte Shell-Werkzeugen in Verbindung mit dem SDK verwenden möchten, müssen Sie zwei grundlegende Optionen:

*   Greifen sie lokal von Projektcode generiert durch die CLI. Sie stehen in den `platforms/windows8/cordova` Verzeichnis nach dem Hinzufügen der `windows8` Plattform wie unten beschrieben.

*   Aus eine separate Verteilung auf [cordova.apache.org][8]herunterladen. Die Cordova-Distribution enthält separate Archiv für jede Plattform. Achten Sie darauf, um das entsprechende Archiv zu erweitern `cordova-windows8\windows8` in diesem Fall in ein leeres Verzeichnis. Die entsprechenden Batch-Dienstprogramme sind in der obersten Ebene `bin` Verzeichnis. (Konsultieren Sie die **README** -Datei, ggf. für eine genauere Wegbeschreibung.)

 [8]: http://cordova.apache.org

Diese Shell-Tools können Sie erstellen, erstellen und Ausführen von Windows 8 apps. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten.

## Das SDK installieren

Installieren Sie die *ultimative*, *Premium*oder *Professional* 2013 Editionen von [Visual Studio][2].

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## Erstellen eines neuen Projekts

Zu diesem Zeitpunkt zum Erstellen eines neuen Projekts können Sie zwischen das Cross-Plattform-CLI-Tool in The Command-Line Interface oder die Menge der Windows 8-spezifische Shell Tools beschrieben. In einem Quellcode-Verzeichnis dieser CLI-Ansatz generiert aus eine app mit dem Namen *HelloWorld* innerhalb eines neuen `hello` Projektverzeichnis:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build
    

Hier ist der entsprechende Low-Level-Shell-Tool-Ansatz:

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Erstellen Sie das Projekt

Bei Verwendung von CLI in der Entwicklung ist das Projektverzeichnis der obersten Ebene `www` Verzeichnis enthält die Quellcode-Dateien. Führen Sie einen dieser dem Projektverzeichnis, die app neu zu erstellen:

        > cordova build
        > cordova build windows8   # do not rebuild other platforms
    

Wenn Sie Shell-Werkzeugen von Windows Phone-spezifischen Entwicklung verwenden, gibt es ein anderen Ansatz. Sobald Sie das Projekt generieren, die Standard-app-Quelle steht in den `projects\windows8\www` Unterverzeichnis. Nachfolgende Befehle stehen in der `cordova` Unterverzeichnis auf dem gleichen Niveau.

Der `build` Befehl reinigt Projektdateien und Umbauten, die app. Das erste Beispiel generiert Debuginformationen und das zweite Zeichen der apps für Release:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

Der `clean` Befehl können Sie die Verzeichnisse in der Vorbereitung für die nächste auszuschwemmen `build` :

        C:\path\to\project\cordova\clean.bat
    

## Öffnen Sie das Projekt im SDK und Bereitstellen der Anwendung

Sobald Sie eine Cordova-Anwendung zu erstellen, wie oben beschrieben, können Sie es mit Visual Studio öffnen. Die verschiedenen `build` Befehle Generieren einer Visual Studio-Projektmappendatei (*.sln*). Öffnen Sie die Datei im Datei-Explorer ändern Sie das Projekt in Visual Studio:

![][10]

 [10]: img/guide/platforms/win8/win8_sdk_openSLN.png

Die `CordovaApp` -Komponente zeigt innerhalb der Lösung und ihrer `www` Verzeichnis enthält den Web-basierte Quellcode, einschließlich die `index.html` Homepage:

![][11]

 [11]: img/guide/platforms/win8/win8_sdk.png

Mit den Steuerelementen unter Visual Studio im Hauptmenü können Sie testen oder Bereitstellen der app:

![][12]

 [12]: img/guide/platforms/win8/win8_sdk_deploy.png

**Lokalen Computer** ausgewählt drücken Sie den grünen Pfeil um die app auf dem gleichen Computer ausführen von Visual Studio installieren. Einmal tun Sie dies, die app erscheint in Windows 8 app angeboten:

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_runApp.png

Jedes Mal, wenn Sie die Anwendung neu erstellen, wird die Version in der Schnittstelle aktualisiert.

Sobald Sie in der app-Angebote verfügbar, ermöglicht halten Sie die **STRG** -Taste beim Markieren der app um zum Hauptbildschirm zu fixieren:

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runHome.png

Beachten Sie, dass wenn Sie die app in einer virtuellen Umgebung öffnen, müssen Sie möglicherweise klicken Sie auf in den Ecken oder an den Seiten des Windows apps zu wechseln oder auf zusätzliche Funktionen zugreifen:

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_run.png

Wählen Sie alternativ die **Simulator** -Bereitstellungsoption die app anzeigen, als ob es auf einem Tablettgerät ausgeführt wurden:

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_sim.png

Im Gegensatz zu desktop-Bereitstellung mit dieser Option können Sie simulieren die Tablette Orientierung, Lage, und variieren ihre Netzwerkeinstellungen.

**Hinweis**: Rufen Sie die Übersicht für Ratschläge, wie mithilfe von Cordovas Kommandozeilen-Tools oder das SDK in Ihrem Workflow. Cordova CLI stützt sich auf Cross-Plattform-Quellcode, der routinemäßig die plattformspezifischen Dateien vom SDK verwendet überschreibt. Möchten Sie das SDK zu verwenden, ändern Sie das Projekt, verwenden Sie die Low-Level-Shell-Werkzeugen als Alternative zu den CLI.