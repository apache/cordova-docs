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

## Anforderungen und Unterstützung

Die Entwicklung von Cordova apps für Amazon Fire OS erfordert das Android SDK und das Amazon-WebView-SDK. Überprüfen Sie die Anforderungen für diese SDKs an den Verbindungen unten:

*   [Android SDK-System][1]

*   [Amazon WebView SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## Installation

### Android SDK

Installieren Sie das Android SDK von [developer.android.com/sdk][1]. Sie können mit einer Wahl, wo das SDK installieren vorgelegt werden sonst die heruntergeladenen verschieben `adt-bundle` Baum, wo Sie Entwicklungstools zu speichern.

Für Cordova Kommandozeilen-Tools arbeiten, müssen Sie das SDK enthalten `tools` und `platform-tools` Verzeichnisse in Ihrer PATH-Umgebung.

Auf Mac, Linux oder andere Unix-ähnliche Plattformen, können Sie einen Text-Editor zum Erstellen oder ändern die `~/.bash_profile` -Datei eine Zeile wie die folgende, je nachdem, wo das SDK installiert:

    Export PATH = ${PATH}: / Entwicklung/Adt-Bundle/Sdk/Plattform-Tools: / Entwicklung/Adt-Bundle/Sdk/Tools


Dies macht die SDK-Tools im neu eröffneten terminal-Fenster verfügbar. Sonst laufen Sie hier, um sie in der aktuellen Sitzung zur Verfügung stellen:

    $ Quelle ~/.bash_profile


Die PATH-Umgebung unter Windows 7 zu ändern:

*   Im Menü " **Start** " in der unteren linken Ecke des Desktops mit der rechten Maustaste auf **Computer**, klicken, **Eigenschaften**.

*   Klicken Sie in der Spalte auf der linken Seite auf **Erweiterte Systemeinstellungen** .

*   Drücken Sie im daraufhin angezeigten Dialogfeld **Umgebungsvariablen**.

*   Wählen Sie die **PATH** -Variable und klicken Sie **Bearbeiten**.

*   Fügen Sie Folgendes in den Pfad basierend auf dem Sie das SDK, zum Beispiel installiert:

        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools


*   Speichern Sie den Wert und schließen Sie beide Dialogfelder zu.

Sie müssen möglicherweise auch Java und Ant öffnen eine Eingabeaufforderung und geben aktivieren `java` , und geben Sie auch `ant` . Hängen Sie an den Pfad, welcher nicht ausgeführt:

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin


### Amazon WebView SDK

Laden Sie das Amazon WebView SDK aus dem [Amazon-Entwicklerportal][2].

*   Erstellen einer `libs/` Ordner im `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` Ordner.
*   Fügen Sie die `awv_interface.jar` aus dem heruntergeladenen SDK zu`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## Öffnen Sie ein Projekt im SDK

Verwendung der `cordova` Utility für ein neues Projekt, wie in der Cordova The Command-Line Interface beschrieben einrichten. Zum Beispiel in einem Quellcode-Verzeichnis:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


Einmal erstellt, wird hier das SDK zu verwenden, um es zu ändern:

*   Starten Sie die **Eclipse** -Anwendung.

*   Wählen Sie **Neues Projekt** .

*   Wählen Sie **Android Projekt aus vorhandenem Code** aus dem daraufhin angezeigten Dialogfeld, und klicken Sie auf **weiter**: ![][3]

*   Navigieren Sie zu `hello` , oder welches Verzeichnis Sie für das Projekt erstellt, dann auf die `platforms/amazon-fireos` Unterverzeichnis.

*   Drücken Sie **Fertig stellen**.

 [3]: {{ site.baseurl }}/static/img/guide/platforms//eclipse_new_project.png

Sobald das Eclipse-Fenster wird geöffnet, erscheint ein rotes **X** auf ungelöste Probleme hinweisen. Wenn ja, gehen Sie zusätzlichen folgendermaßen:

*   Rechtsklick auf das Projektverzeichnis.

*   Wählen Sie in den daraus resultierenden **Eigenschaften** im Navigationsbereich des **Android** .

*   Erstellen Sie Ziel für das Projekt zu, wählen Sie die höchste Android API-Ebene, die Sie installiert haben.

*   Klicken Sie auf **OK**.

*   Wählen Sie im Menü **Projekt** **Clean** . Dies sollten alle Fehler im Projekt korrigieren.

## Bereitstellung auf Gerät

Um eine app direkt auf das Gerät zu drücken, stellen Sie sicher, dass USB debugging auf dem Gerät wie beschrieben auf der [Android Developer-Website][4]aktiviert ist, und verwenden Sie einen Mini-USB-Kabel zu, um es an Ihr System anschließen.

 [4]: http://developer.android.com/tools/device.html

Drücken Sie die app auf das Gerät von der Befehlszeile aus:

    $ cordova run amazon-fireos


Abwechselnd innerhalb von Eclipse, Maustaste auf das Projekt, und wählen Sie **Ausführen als → Android-Anwendung**.

**Hinweis**: derzeit über einen Emulator testen wird nicht unterstützt für Amazon WebView-apps basierte.
