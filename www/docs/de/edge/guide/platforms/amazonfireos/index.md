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

# Handbuch für die OS-Plattform von Amazon-Feuer

Diese Anleitung zeigt Ihre Entwicklungsumgebung SDK einrichten, Cordova apps für Amazon-Feuer-OS-Geräte wie der Kindle Fire HDX bereitstellen.

Finden Sie im folgenden detaillierte Plattform-spezifischen Informationen:

*   Amazon Fire OS Konfiguration
*   Amazon Fire OS Webansichten für
*   Amazon Fire OS Plugins

## Einführung

Behandlungsansatz der Amazon Fire OS-Plattform können Cordova Entwickler Hybrid-Web-Anwendungen erstellen, die die erweiterte Web-Engine integriert Kindle Fire-Geräte nutzen. Amazon WebView API (AWV) ist ein Chrom-abgeleitete Web Runtime exklusiv für Feuer-OS. Als Ersatz für die WebView, die mit Android-Geräten kommt, AWV macht es möglich, besser durchführen und leistungsfähiger Hybrid-Web-Anwendungen zu erstellen, indem er Unterstützung für eine schnellere JavaScript-Engine (V8), remote-debugging und Hardware-Optimierungen für Kindle Fire-Geräte, einschließlich einer beschleunigten 2D Canvas und Zugriff auf HTML5-Features von Android nicht unterstützt erbaute WebView wie: CSS Calc, Formularüberprüfung, GetUserMedia, IndexedDB, Webworker, WebSockets und WebGL.

Weitere Informationen über die Amazon-WebView-API finden Sie im Amazon-Entwicklerportal [HTML5 Hybrid Apps Seite][1]. Unterstützen Sie für weitere Fragen immer gestartet und andere Probleme zu, finden Sie auf den Amazon-Entwicklerportal [Foren - HTML5-Hybrid-Apps][2].

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## Anforderungen und Unterstützung

Entwicklung von Cordova apps für Amazon Fire OS erfordert die Installation einer Vielzahl von Support-Dateien, einschließlich alles für Android Entwicklung, als auch die Amazon-WebView-SDK. Überprüfen Sie die Liste unten für die erforderlichen Installationen:

*   Die Befehlszeilenschnittstelle
*   [Android SDK][3]
*   [Apache Ant][4]
*   [Amazon WebView SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## Installation

### Android SDK und Apache Ant

Installieren Sie das Android SDK von [developer.android.com/sdk][3]. Sie können mit einer Wahl, wo das SDK installieren vorgelegt werden sonst die heruntergeladenen verschieben `adt-bundle` Baum, wo Sie Entwicklungstools zu speichern.

Sie müssen den Android-SDK-Manager ausführen ( `android` von einer Befehlszeile aus) mindestens einmal vor Beginn Ihres Cordova-Projekts. Vergewissern Sie sich, installieren Sie die neueste Version des Android SDK-Tools und SDK-Plattform **speziell API-Ebene 19**. [Einrichten der Entwicklungsumgebung][5] finden Sie im Amazon-Entwicklerportal für weitere Informationen zum Einrichten der Entwicklungsumgebung für Kindle Fire-OS-Geräte.

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

Installation Apache Ant Bauwerkzeug [eine Ant-binary-Distribution herunterladen][6], entpacken in ein Verzeichnis, das Sie später zurückgreifen können. Sehen Sie das [Ant-Handbuch][7] für weitere Informationen.

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

Für Cordova Kommandozeilen-Tools arbeiten, müssen Sie das Android SDK enthalten `tools` , `platform-tools` und `apache-ant/bin` Verzeichnisse in Ihrer PATH-Umgebung.

#### Mac/Linux-Pfad

Auf Mac, Linux oder andere Unix-ähnliche Plattformen, können Sie einen Text-Editor zum Erstellen oder ändern die `~/.bash_profile` -Datei eine Zeile wie die folgende, je nachdem, wo das SDK und Ant installiert sind:

    Export PATH = ${PATH}: / Entwicklung/Adt-Bundle/Sdk/Plattform-Tools: / Entwicklung/Adt-Bundle/Sdk/Tools: / Entwicklung/Apache-Ant/bin


Dies macht die SDK-Tools im neu eröffneten terminal-Fenster verfügbar. Sonst laufen Sie hier, um sie in der aktuellen Sitzung zur Verfügung stellen:

    $ source ~/.bash_profile


#### Windows-Pfad

So ändern Sie die PATH-Umgebung unter Windows:

*   Im Menü " **Start** " in der unteren linken Ecke des Desktops mit der rechten Maustaste auf **Computer**, klicken, **Eigenschaften**.

*   Klicken Sie in der Spalte auf der linken Seite auf **Erweiterte Systemeinstellungen** .

*   Drücken Sie im daraufhin angezeigten Dialogfeld **Umgebungsvariablen**.

*   Wählen Sie die **PATH** -Variable und klicken Sie **Bearbeiten**.

*   Fügen Sie Folgendes in den Pfad basierend auf dem Sie das SDK und die Ameise, z. B. installiert:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin


*   Speichern Sie den Wert und schließen Sie beide Dialogfelder zu.

*   Auch müssen Sie Java aktivieren. Öffnen Sie eine Eingabeaufforderung und geben `java` , wenn es nicht ausgeführt wird, fügen Sie den Speicherort der Java-Binärdateien an Ihren Weg auch. Stellen Sie sicher, dass %JAVA_HOME% auf installierte JDK-Verzeichnis verweist. Sie müssen möglicherweise JAVA_HOME Umgebung Variable separat hinzufügen.

        ; %JAVA_HOME%\bin


### Amazon WebView SDK

Um Cordova-Anwendungen mittels der Zielplattform Amazon Fire OS zu erstellen, müssen Sie herunterladen, entpacken und Installieren der Unterstützungsdateien für den Amazon WebView SDK. Diesen Schritt müssen nur bei Ihrem ersten Amazon Fire OS-Projekt durchgeführt werden.

*   Laden Sie das Amazon WebView SDK aus dem [Amazon-Entwicklerportal][1].

*   Kopie `awv_interface.jar` aus dem heruntergeladenen SDK in Cordova Arbeitsverzeichnis. Erstellen Sie Commonlibs(shown below)-Ordner, wenn es nicht vorhanden ist:

    **Mac/Linux:** `~/.cordova/lib/commonlibs/`

    **Windows:** `%USERPROFILE%\.cordova\lib\commonlibs`

## Neues Projekt für Amazon Fire OS erstellen

Verwendung der `cordova` Utility für ein neues Projekt, wie in der Cordova The Command-Line Interface beschrieben einrichten. Zum Beispiel in einem Quellcode-Verzeichnis:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


***Hinweis:*** Zum ersten Mal, das die Amazon-Fireos-Plattform auf Ihrem System installiert ist, es downloadet die entsprechenden Dateien in das Arbeitsverzeichnis von Cordova, aber schlägt dann fehl, da es die AWV SDK-Support-Dateien (siehe oben) fehlt. Folgen Sie die obigen Anweisungen zum Installieren der `awv_interface.jar` , dann entfernen und erneut hinzufügen die Amazon-Fireos-Plattform für Ihr Projekt. Dieser Schritt muss nur für erste Amazon Fire OS-Projekt durchgeführt werden.

## Bereitstellung auf Gerät

Um eine app direkt auf das Gerät zu drücken, stellen Sie sicher, dass USB debugging auf dem Gerät wie beschrieben auf der [Android Developer-Website][8]aktiviert ist, und verwenden Sie einen Mini-USB-Kabel zu, um es an Ihr System anschließen.

 [8]: http://developer.android.com/tools/device.html

Drücken Sie die app auf das Gerät von der Befehlszeile aus:

    $ Cordova führen Sie Amazon-fireos


Abwechselnd innerhalb von Eclipse, Maustaste auf das Projekt, und wählen Sie **Ausführen als → Android-Anwendung**.

**Hinweis**: derzeit über einen Emulator testen wird nicht unterstützt für Amazon WebView-basierte apps, zusätzlich die Amazon WebView-API ist nur verfügbar auf Feuer-OS-Geräten. Weitere Informationen finden Sie auf der [Amazon-WebView-API-SDK][1] -Dokumentation.

### Führen Sie Flags

Der Befehl "ausführen" akzeptiert optionale Parameter entsprechend den Angaben im Dokument Cordova Command Line Interface, Feuer OS akzeptiert auch eine zusätzliche `--debug` Flag die Chrom Developer-Tools für remote Webdebuggen ermöglichen.

Developer Tools verwenden, indem Sie:

    $ cordova run --debug amazon-fireos


Dadurch werden die Tools auf dem Client ausgeführt. Sie können dann an den Client von Port-Weiterleitung mit der Android Debug Bridge (Adb) unter Bezugnahme auf die app-Paketname.

Zum Beispiel:

    ADB vorwärts Tcp:9222 localabstract:com.example.helloworld.devtools


Die DevTools über einen Chrom-basierte Browser können Sie durch die Navigation zu:`http://localhost:9222`.

### Optionale Unterstützung für Eclipse

Einmal erstellt, können Sie die Sonnenfinsternis, die zusammen mit dem Android SDK ändern Sie das Projekt kommt. Beachten Sie, dass Änderungen über Eclipse überschrieben werden, wenn Sie weiterhin Cordova-Befehlszeilen-Tools verwenden.

*   Starten Sie die **Eclipse** -Anwendung.

*   Wählen Sie **Neues Projekt** .

*   Wählen Sie **Android Projekt aus vorhandenem Code** aus dem daraufhin angezeigten Dialogfeld, und klicken Sie auf **weiter**: ![][9]

*   Navigieren Sie zu `hello` , oder welches Verzeichnis Sie für das Projekt erstellt, dann auf die `platforms/amazon-fireos` Unterverzeichnis.

*   Eclipse zeigt Ihnen Hallo und Hallo-CorddovaLib - 2 Projekte hinzugefügt werden. Fügen Sie beide.

*   Drücken Sie **Fertig stellen**.

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Sobald das Eclipse-Fenster wird geöffnet, erscheint ein rotes **X** auf ungelöste Probleme hinweisen. Wenn ja, gehen Sie zusätzlichen folgendermaßen:

*   Rechtsklick auf das Projektverzeichnis.

*   Wählen Sie in den daraus resultierenden **Eigenschaften** im Navigationsbereich des **Android** .

*   Wählen Sie für das Projekt-Ziel erstellen die höchste Android API (derzeit API Level 19) Sie installiert haben.

*   Klicken Sie auf **OK**.

*   Wählen Sie im Menü **Projekt** **Clean** . Dies sollten alle Fehler im Projekt korrigieren.
