* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android-Plattform-Guide

Diese Anleitung zeigt wie Ihr SDK-Umgebung einrichten, um Cordova apps für Android-Geräte bereitzustellen sowie optional mithilfe von Befehlszeilentools Android-zentrierte in Ihrem Entwicklungs-Workflow. Sie müssen installieren Sie das Android SDK unabhängig davon, ob Sie für die Entwicklung dieser Plattform-zentrierte Shell-Werkzeugen oder plattformübergreifende Cordova CLI verwenden möchten. Einen Vergleich der zwei Entwicklungswege finden Sie in der Übersicht. Details über die CLI finden Sie unter The Command-Line Interface.

## Anforderungen und Unterstützung

Cordova für Android ist das Android SDK erforderlich. Finden Sie unter das Android SDK- [Systemanforderungen][1].

 [1]: http://developer.android.com/sdk/index.html

Cordova unterstützt Android 2.3.x (Lebkuchen, beginnend mit Android API-Ebene 10) und 4.x. Als allgemeine Regel werden Android Versionen von Cordova nicht unterstützt, wie sie unter 5 % auf Googles [Verteilung Dashboard][2]sinken. Androide Versionen früher als API Stufe 10 und die 3.x-Versionen (Waben, API-Level 11-13) unterschreiten deutlich die 5 %-Schwelle.

 [2]: http://developer.android.com/about/dashboards/index.html

## Cordova Shell Tools installieren

Wenn Sie Cordova's Android-zentrierte Shell-Werkzeugen in Verbindung mit dem SDK verwenden möchten, laden Sie Cordova von [cordova.apache.org][3]. Andernfalls überspringen Sie diesen Abschnitt, wenn Sie das Cross-Plattform-CLI-Tool beschrieben in der Befehlszeilenschnittstelle verwenden möchten.

 [3]: http://cordova.apache.org

Der Cordova-Download enthält separate Archiv für jede Plattform. Achten Sie darauf, um das entsprechende Archiv zu erweitern `android` in diesem Fall in ein leeres Verzeichnis. Die entsprechenden ausführbaren Dienstprogramme sind in der obersten Ebene `bin` Verzeichnis. (Konsultieren Sie die **README** -Datei, ggf. für eine genauere Wegbeschreibung.)

Diese Shell-Tools können Sie erstellen, erstellen und Ausführen von Android apps. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten. Details zum Entwickeln von Plugins finden Sie in der Anwendung-Plugins.

Installieren Sie das Android SDK von [developer.android.com/sdk][4]. Das androide Sdk wird als 'Adt - Bundle - < os > - < Arch > - < Ver >' Datei verteilt. Unter Windows ist das Adt-Bundle mit einem Installer gepackt. Einfach entpacken Sie auf OSX und Linux, das Adt-Bundle in der Lage, die Sie speichern Entwicklungstools. [Weitere detaillierte Informationen über Android SDK Setup finden Sie hier][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

Für Cordova Befehlszeilentools zur Arbeit oder die CLI, das darauf basiert, müssen Sie das SDK enthalten `tools` und `platform-tools` Verzeichnisse in Ihrem `PATH` . Auf einem Mac können Sie einen Text-Editor zum Erstellen oder ändern die `~/.bash_profile` -Datei eine Zeile wie die folgende, je nachdem, wo das SDK installiert:

        Export PATH = ${PATH}: / Entwicklung/Adt-Bundle/Sdk/Plattform-Tools: / Entwicklung/Adt-Bundle/Sdk/Tools
    

Fügen Sie die Pfade für `java` und `ant` bei Bedarf. Diese Zeile in `~/.bash_profile` macht diese Werkzeuge in neu eröffneten terminal-Fenster verfügbar. Wenn Ihr terminal-Fenster bereits geöffnet in OSX oder ein Logout/Login auf Linux zu vermeiden ist, führen Sie dies, um sie in aktuellen terminal-Fenster zur Verfügung stellen:

        $ Quelle ~/.bash_profile
    

Ändern Sie die `PATH` -Umgebung unter Windows 7:

1.  Klicken Sie auf das **Start** -Menü in der unteren linken Ecke des Desktops, mit der rechten Maustaste auf **Computer**, und wählen Sie **Eigenschaften**.

2.  Wählen Sie die **Erweiterte Systemeinstellungen** in der Spalte auf der linken Seite.

3.  Drücken Sie im daraufhin angezeigten Dialogfeld **Umgebungsvariablen**.

4.  Wählen Sie die **PATH** -Variable und klicken Sie **Bearbeiten**.

5.  Fügen Sie Folgendes, um die `PATH` auf der Grundlage von wo Sie das SDK, zum Beispiel installiert:
    
        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools
        

6.  Speichern Sie den Wert und schließen Sie beide Dialogfelder zu.

Sie müssen möglicherweise auch Java und Ant öffnen eine Eingabeaufforderung und geben aktivieren `java` , und geben Sie auch `ant` . Hängen Sie an den `PATH` je davon nicht ausgeführt:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## Öffnen Sie ein neues Projekt im SDK

Zu diesem Zeitpunkt zum Erstellen eines neuen Projekts können Sie zwischen das Cross-Plattform-CLI-Tool in der Kommandozeilen-Schnittstelle oder die Menge der Android-spezifischen Shell Tools beschrieben. Von in einem Quellcode-Verzeichnis ist hier der CLI-Ansatz:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

Hier ist der entsprechende Low-Level-Shell-Tool-Ansatz für Unix und Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

Hier ist, wie man das SDK zu verwenden, um es zu ändern:

1.  Starten Sie die **Eclipse** -Anwendung.

2.  Wählen Sie **Neues Projekt** .

3.  Wählen Sie **Android Projekt aus vorhandenem Code** aus dem daraufhin angezeigten Dialogfeld, und klicken Sie auf **weiter**:
    
    ![][6]

4.  Wenn Sie die CLI verwenden, navigieren Sie zu dem `hello` Verzeichnis, die Sie für das Projekt erstellt, dann auf die `platforms/android` Unterverzeichnis. Alternativ verwenden Sie die `create` shell-Dienstprogramm, navigieren Sie einfach zu den `hello` Verzeichnis.

5.  Drücken Sie **Fertig stellen**.

 [6]: img/guide/platforms/android/eclipse_new_project.png

Sobald das Eclipse-Fenster wird geöffnet, erscheint ein rotes **X** auf ungelöste Probleme hinweisen. Wenn ja, gehen Sie zusätzlichen folgendermaßen:

1.  Rechtsklick auf das Projektverzeichnis.

2.  Die daraus resultierenden **Eigenschaften** wählen Sie im Dialogfeld **Android** aus dem Navigationsbereich.

3.  Erstellen Sie Ziel für das Projekt zu, wählen Sie die höchste Android API-Ebene, die Sie installiert haben.

4.  Klicken Sie auf **OK**.

5.  Wählen Sie im Menü **Projekt** **Clean** . Dies sollten alle Fehler im Projekt korrigieren.

## Erstellen Sie das Projekt

Bei Verwendung von CLI in der Entwicklung ist das Projektverzeichnis der obersten Ebene `www` Verzeichnis enthält die Quellcode-Dateien. Führen Sie einen dieser dem Projektverzeichnis, die app neu zu erstellen:

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

Verwenden Sie die Android-spezifische-Shell-Werkzeugen in der Entwicklung, gibt es ein anderen Ansatz. Sobald Sie das Projekt generieren, die Standard-app-Quelle steht in den `assets/www` Unterverzeichnis. Nachfolgende Befehle stehen in seiner `cordova` Unterverzeichnis.

Der `build` Befehl reinigt Projektdateien und Umbauten, die app. Hier ist die Syntax für Mac und Windows. Das erste paar Beispiele Debuginformationen generiert, und das zweite Zeichen der apps für Release:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## Konfigurieren Sie einen Emulator

Sie können entweder die `cordova` CLI-Dienstprogramm oder Cordova's Android-zentrierte Shell tools eine app in einem Emulator ausgeführt. In jedem Fall muss das SDK zuerst konfiguriert werden um mindestens ein Gerät anzuzeigen. Verwenden Sie hierzu das Android SDK Manager, eine Java-Anwendung, die separat von Eclipse verläuft. Es gibt zwei Möglichkeiten, es zu öffnen:

1.  Führen Sie `android` in der Befehlszeile.

2.  Eclipse, drücken Sie dieses Symbol in der Symbolleiste:
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

Nach dem Öffnen zeigt das Android SDK Manager verschiedene Laufzeit-Bibliotheken:

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

Wählen Sie **Extras → Verwaltung AVDs** (Android Virtual Devices), dann wählen Sie ein Element aus **Gerätedefinitionen** in dem daraufhin angezeigten Dialogfeld:

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

Presse **AVD erstellen**, ändern optional den Namen und drücken Sie **OK** um die Änderungen zu übernehmen.

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

Der AVD wird dann in der Liste **Android Virtual Devices** angezeigt:

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

Um den Emulator als separate Anwendung zu öffnen, wählen Sie den AVD und **Starten**. Es bringt viel, wie es auf dem Gerät mit zusätzliche Steuerelemente für Hardware-Tasten zur Verfügung:

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## Bereitstellen auf Emulator

An dieser Stelle können Sie die `cordova` CLI-Dienstprogramm zum Bereitstellen der Anwendung für den Emulator von der Befehlszeile aus:

        $ cordova emulate android
    

Andernfalls verwenden Sie die Alternative Shell-Schnittstelle:

        $ /path/to/project/cordova/run --emulator
    

Standardvorrang welcher Emulator derzeit im SDK aktiviert ist, finden Sie in jeder von den Namen, den, die Sie bereitstellen:

        $ /path/to/project/cordova/run --target=NAME
    

Dies drückt die app zum home-Bildschirm und startet es:

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

Wenn Sie `run` die app Sie auch `build` es. Sie können zusätzliche anhängen, `--debug` , `--release` , und `--nobuild` Flags an, die Steuern, wie sie gebaut ist, oder sogar ob ein Umbau notwendig ist:

        $ /path/to/project/cordova/run --emulator --nobuild
    

Wenn Sie stattdessen in Eclipse arbeiten, Maustaste auf das Projekt, und wählen Sie **Ausführen als → Android-Anwendung**. Sie möglicherweise aufgefordert, eine AVD angeben, wenn keine bereits geöffnet.

Für eine schnellere Erfahrung können Sie die `Virtual Machine Acceleration` um die Ausführungsgeschwindigkeit zu verbessern. Viele moderne CPUs bieten Erweiterungen um virtuelle Maschinen effizienter auszuführen. Bevor Sie versuchen, diese Art von Beschleunigung verwenden, müssen Sie bestimmen, ob Ihre aktuelle Entwicklungssystem CPU, unterstützt man die folgenden Virtualisierungstechnologien:

*   **Intel Virtualization Technology** (VT-X, Vmx) → [Intel VT-X unterstützt Prozessor Liste][14]
*   **AMD Virtualization** (AMD-V, SVM), nur für Linux unterstützt (seit Mai 2006 gehören alle CPUs AMD AMD-V, außer Sempron).

 [14]: http://ark.intel.com/products/virtualizationtechnology

Eine weitere Möglichkeit, herauszufinden, ob Ihr Prozessor Intel VT-X-Technologie unterstützt, ist es durch Ausführen der `Intel Processor Identification Utility` , für `Windows` können Sie es im Intel [Download Center][15]herunterladen, oder Sie können das [Booteable-Dienstprogramm][16], das ist`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Nach Installation und Ausführung der `Intel Processor Identification Utility` über Windows, erhalten Sie folgende Fenster, um zu prüfen, ob deine CPU den Virtualisierungs-Technologien unterstützt:

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

Um den Emulator zu beschleunigen, müssen Sie downloaden und installieren eine oder mehrere `Intel x86 Atom` System-Images, als auch die`Intel Hardware Accelerated Execution Manager (HAXM)`.

Ihr Android SDK Manager zu öffnen, und wählen Sie die `Intel x86 Atom` Systemabbild, unabhängig davon, welche Version, die Sie testen möchten. Dann gehen Sie zu `Extras` und wählen Sie `Intel x86 Emulator Accelerator (HAXM)` , und diese Pakete installieren:

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

Führen Sie nach dem Download das Intel-Installationsprogramm, das innerhalb Ihres Android SDK unter `extras/intel/Hardware_Accelerated_Execution_Manager` . **Hinweis**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [Intel-Artikel][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Installieren eine oder mehrere `Intel x86 Atom` System-Images als auch die `Intel Hardware Accelerated Execution Manager` , finden Sie unter **Extras**.

2.  Führen Sie das Intel-Installationsprogramm aus, das innerhalb Ihres Android SDK unter verfügbar ist`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  Erstellen Sie eine neue AVD, mit dem Ziel, die auf einem Intel-Bild festgelegt.

4.  Wenn Sie den Emulator zu starten, stellen Sie sicher, es gibt keine Fehlermeldungen angezeigt, der angibt, einer Störungsmeldung HAX Module laden.

## Bereitstellung auf Gerät

Um eine app direkt auf das Gerät zu drücken, stellen Sie sicher, dass USB debugging auf dem Gerät wie beschrieben auf der [Android Developer-Website][20]aktiviert ist, und verwenden Sie einen Mini-USB-Kabel zu, um es an Ihr System anschließen.

 [20]: http://developer.android.com/tools/device.html

Dieser CLI-Befehl können Sie die app auf das Gerät übertragen:

        $ cordova run android
    

... oder verwenden Sie diese Android-zentrierte Shellschnittstelle:

        $ /path/to/project/cordova/run --device
    

Mit keine Flags angegeben der `run` Befehl erkennt ein angeschlossenes Gerät oder einen laufenden Emulator, wenn kein Gerät gefunden wird, andernfalls es fordert einen Emulator angeben.

Führen Sie die app von Eclipse, Maustaste auf das Projekt und wählen Sie **Ausführen als → Android-Anwendung**.

## Andere Befehle

Im folgenden wird ein detailliertes Protokoll der app, wie es läuft:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

Folgende reinigt die Projektdateien:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat