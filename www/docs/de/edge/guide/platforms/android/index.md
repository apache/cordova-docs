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

# Android-Plattform-Guide

Diese Anleitung zeigt wie Ihr SDK-Umgebung einrichten, um Cordova apps für Android-Geräte bereitzustellen sowie optional mithilfe von Befehlszeilentools Android-zentrierte in Ihrem Entwicklungs-Workflow. Sie müssen installieren Sie das Android SDK unabhängig davon, ob Sie für die Entwicklung dieser Plattform-zentrierte Shell-Werkzeugen oder plattformübergreifende Cordova CLI verwenden möchten. Einen Vergleich der zwei Entwicklungswege finden Sie in der Übersicht. Details über die CLI finden Sie unter The Command-Line Interface.

## Anforderungen und Unterstützung

Cordova für Android erfordert das Android SDK, welches auf OS X, Linux oder Windows Betriebssystem installiert werden konnte. Finden Sie unter das Android SDK- [Systemanforderungen][1].

 [1]: http://developer.android.com/sdk/index.html#Requirements

Cordova unterstützt Android 4.0.x (beginnend mit Android API-Ebene 14) und höher. Als allgemeine Regel werden Android Versionen von Cordova nicht unterstützt, wie sie unter 5 % auf Googles [Verteilung Dashboard][2]sinken. Androide Versionen früher als API Stufe 10 und die 3.x-Versionen (Waben, API-Level 11-13) unterschreiten deutlich die 5 %-Schwelle.

 [2]: http://developer.android.com/about/dashboards/index.html

## Cordova Shell Tools installieren

Wenn Sie Cordova's Android-zentrierte Shell-Werkzeugen in Verbindung mit dem SDK verwenden möchten, laden Sie Cordova von [cordova.apache.org][3]. Andernfalls überspringen Sie diesen Abschnitt, wenn Sie das Cross-Plattform-CLI-Tool beschrieben in der Befehlszeilenschnittstelle verwenden möchten.

 [3]: http://cordova.apache.org

Der Cordova-Download enthält separate Archiv für jede Plattform. Achten Sie darauf, um das entsprechende Archiv zu erweitern `android` in diesem Fall in ein leeres Verzeichnis. Die entsprechenden ausführbaren Dienstprogramme sind in der obersten Ebene `bin` Verzeichnis. (Konsultieren Sie die **README** -Datei, ggf. für eine genauere Wegbeschreibung.)

Diese Shell-Tools können Sie erstellen, erstellen und Ausführen von Android apps. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten. Details zum Entwickeln von Plugins finden Sie in der Anwendung-Plugins.

## Installieren Sie das Java Development Kit (JDK)

Installieren Sie [Java Development Kit (JDK) 7][4] oder höher.

 [4]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html

Wenn Sie auf Windows installieren, müssen Sie auch `JAVA_HOME` -Umgebungsvariable nach JDK-Installationspfad (z.B. C:\Program Files\Java\jdk1.7.0_75) festgelegt.

## Das Android SDK installieren

Installieren Sie [Android eigenständige SDK Tools][5] oder das [Android-Studio][6]. Procceed mit `Android-Studio` Wenn Sie planen, entwickeln neue Cordova für Android Plugins oder Verwenden von systemeigenen Tools ausführen und Debuggen der Android-Plattform. Andernfalls sind `Android Stand-Alone-SDK-Tools` genug, um erstellen und Bereitstellen von Android-Anwendung.

 [5]: http://developer.android.com/sdk/installing/index.html?pkg=tools
 [6]: http://developer.android.com/sdk/installing/index.html?pkg=studio

Detaillierte Installationsanweisungen finden Sie im Rahmen der Installationslinks oben.

Für Cordova Befehlszeilen-Tools für die Arbeit oder die CLI, das darauf basiert, müssen Sie das SDK `Tools` und `Plattform` Verzeichnisse im `Pfad`enthalten. Auf einem Mac können Sie einen Text-Editor zum Erstellen oder Ändern der Datei `~/.bash_profile` eine Zeile wie die folgende, je nachdem, wo das SDK installiert:

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools


Diese Zeile in `~/.bash_profile` macht diese Werkzeuge in neu eröffneten terminal-Fenster verfügbar. Wenn Ihr terminal-Fenster bereits geöffnet in OSX oder ein Logout/Login auf Linux zu vermeiden ist, führen Sie dies, um sie in aktuellen terminal-Fenster zur Verfügung stellen:

        $ source ~/.bash_profile


So ändern Sie die `PATH` -Umgebung unter Windows:

1.  Klicken Sie auf das **Start** -Menü in der unteren linken Ecke des Desktops, mit der rechten Maustaste auf **Computer**, und wählen Sie **Eigenschaften**.

2.  Wählen Sie die **Erweiterte Systemeinstellungen** in der Spalte auf der linken Seite.

3.  Drücken Sie im daraufhin angezeigten Dialogfeld **Umgebungsvariablen**.

4.  Wählen Sie die **PATH** -Variable und klicken Sie **Bearbeiten**.

5.  Fügen Sie Folgendes, um die `PATH` auf der Grundlage von wo Sie das SDK, zum Beispiel installiert:

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools


6.  Speichern Sie den Wert und schließen Sie beide Dialogfelder zu.

## SDK-Pakete installieren

Android SDK Manager öffnen (z.B. über Terminal: `android`) und installieren:

1.  Android 5.1.1 (API 22) Platform SDK
2.  Android SDK-Build-Tools Version 19.1.0 oder höher
3.  Android Unterstützung Repository (Extras)

Weitere Informationen finden Sie im [SDK-Pakete installieren][7] .

 [7]: http://developer.android.com/sdk/installing/adding-packages.html

## Konfigurieren Sie einen Emulator

Android Sdk kein Standardinstanz Emulator standardmäßig zur Verfügung. Sie können eine neue mit `android` in der Befehlszeile erstellen. Die Presse **Tools → verwalten AVDs** (Android Virtual Devices), dann wählen Sie ein Element aus **Gerätedefinitionen** in dem daraufhin angezeigten Dialogfeld:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Presse **AVD erstellen**, ändern optional den Namen und drücken Sie **OK** um die Änderungen zu übernehmen.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

Der AVD wird dann in der Liste **Android Virtual Devices** angezeigt:

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Um den Emulator als separate Anwendung zu öffnen, wählen Sie den AVD und **Starten**. Es bringt viel, wie es auf dem Gerät mit zusätzliche Steuerelemente für Hardware-Tasten zur Verfügung:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

Für eine schnellere Erfahrung können Sie die `Virtual Machine-Beschleunigung` verwenden, um die Ausführungsgeschwindigkeit zu verbessern. Viele moderne CPUs bieten Erweiterungen um virtuelle Maschinen effizienter auszuführen. Bevor Sie versuchen, diese Art von Beschleunigung verwenden, müssen Sie bestimmen, ob Ihre aktuelle Entwicklungssystem CPU, unterstützt man die folgenden Virtualisierungstechnologien:

*   **Intel Virtualization Technology** (VT-X, Vmx) → [Intel VT-X unterstützt Prozessor Liste][12]
*   **AMD Virtualization** (AMD-V, SVM), nur für Linux unterstützt (seit Mai 2006 gehören alle CPUs AMD AMD-V, außer Sempron).

 [12]: http://ark.intel.com/products/virtualizationtechnology

Eine weitere Möglichkeit herauszufinden, ob Ihr Prozessor Intel VT-X-Technologie unterstützt, es ist durch Ausführen des `Intel ® Processor Identification Utility`, für `Windows`Sie es im Intel [Download Center][13]herunterladen können oder können Sie das [Booteable-Dienstprogramm][14], das ist `Betriebssystemunabhängig`.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Nach dem Installieren und Ausführen des `Intel Processor Identification Utility` über Windows, erhalten Sie folgende Fenster, um zu prüfen, ob deine CPU den Virtualisierungs-Technologien unterstützt:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

Um den Emulator zu beschleunigen, müssen Sie downloaden und installieren Sie ein oder mehrere Bilder der `Intel X 86 Atom` -System sowie die `Intel Hardware beschleunigte Ausführung Manager (HAXM)`.

Öffnen Sie Ihr Android SDK Manager, und wählen Sie das `X 86 Intel Atom` Systemabbild, unabhängig davon, welche Version, die Sie testen möchten. Dann gehen Sie auf `Extras` und wählen Sie `Intel X 86 Emulator Accelerator (HAXM)`, und installieren Sie diese Pakete zu:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

Nach dem Download, das Intel-Installationsprogramm ausführen, das in Ihrem Android SDK unter `Extras/Intel/Hardware_Accelerated_Execution_Manager`zur Verfügung steht. **Hinweis**:`Wenn Sie irgendwelche Probleme Installation des Pakets finden Sie weitere Informationen und Schritt-für-Schritt-Anleitung, check this` [Intel Artikel][17].

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Installieren Sie ein oder mehrere Bilder der `Intel X 86 Atom` -System sowie die `Intel Hardware beschleunigte Ausführung-Manager`finden Sie unter **Extras**.

2.  Führen Sie das Intel-Installationsprogramm aus, das in Ihrem Android SDK unter `Extras/Intel/Hardware_Accelerated_Execution_Manager` zur Verfügung steht.

3.  Erstellen Sie eine neue AVD, mit dem Ziel, die auf einem Intel-Bild festgelegt.

4.  Wenn Sie den Emulator zu starten, stellen Sie sicher, es gibt keine Fehlermeldungen angezeigt, der angibt, einer Störungsmeldung HAX Module laden.

## Erstellen eines neuen Projekts

Zu diesem Zeitpunkt zum Erstellen eines neuen Projekts können Sie zwischen das Cross-Plattform-CLI-Tool in der Kommandozeilen-Schnittstelle oder die Menge der Android-spezifischen Shell Tools beschrieben. Von in einem Quellcode-Verzeichnis ist hier der CLI-Ansatz:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"


Hier ist der entsprechende Low-Level-Shell-Tool-Ansatz für Unix und Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Erstellen Sie das Projekt

Wenn Sie in der Entwicklung die CLI verwenden, enthält das Projektverzeichnis der obersten Ebene `Www` -Verzeichnis die Quelldateien. Führen Sie diese im Projekt-Verzeichnis, die app neu zu erstellen:

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android


Verwenden Sie die Android-spezifische-Shell-Werkzeugen in der Entwicklung, gibt es ein anderen Ansatz. Sobald Sie das Projekt erstellen, ist die Standard-app-Quelle verfügbar im Unterverzeichnis `assets/www` . Nachfolgende Befehle stehen in dessen `Cordova` -Unterverzeichnis.

Der `build` -Befehl reinigt Projektdateien und Umbauten, die app. Hier ist die Syntax für Mac und Windows. Das erste paar Beispiele Debuginformationen generiert, und die zweite baut die apps für Release:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug

        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release


## Die app bereitstellen

`Cordova` -CLI-Dienstprogramm können Sie die Anwendung im Emulator oder das Gerät von der Befehlszeile aus bereitstellen:

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device


Verwenden Sie andernfalls die Alternative Shell-Schnittstelle:

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device


Können Sie **cordova run android --list** alle verfügbaren Ziele sehen und **cordova run android --target=target_name** Anwendung auf ein bestimmtes Gerät oder einen Emulator ausführen (z. B. `cordova run android --target="Nexus4_emulator"`).

Sie können auch **cordova run --help** finden Sie unter zusätzliche Build und Ausführungsoptionen.

Dies drückt die app zum home-Bildschirm und startet es:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png

Wenn Sie die app `run` Sie auch `build` es. Sie können zusätzliche Anhängen `--debug`, `--release`, und `--nobuild` -Flags zu steuern, wie sie gebaut ist, oder sogar ob ein Umbau notwendig ist:

        $ /path/to/project/cordova/run --emulator --nobuild


## Andere Befehle

Im folgenden wird ein detailliertes Protokoll der app, wie es läuft:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat


Folgende reinigt die Projektdateien:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat


## Öffnen Sie ein neues Projekt im SDK

Nachdem android-Plattform zu Ihrem Projekt hinzugefügt haben, können Sie es von [Android][6]-Studio öffnen:

1.  Starten Sie die **Android-Studio** -Anwendung.

2.  Wählen Sie **Import-Projekt (Eclipse ADT, Gradle usw.)**.

    ![][19]

3.  Wählen Sie die Stelle, wo die android-Plattform gespeicherten (`Ihr/Projekt/Plattformen/Android` ist).

    ![][20]

4.  Für die Frage, `Gradle Sync` können Sie einfach **Ja** beantworten.

 [19]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png
 [20]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png

Sie können sind eingestellt jetzt bauen und führen Sie die Anwendung direkt vom `Android-Studio`.

![][21]

 [21]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png

Finden Sie unter [Übersicht über Android-Studio][22] und und [erstellen und Ausführen von Android-Studio][23] für weitere Details.

 [22]: http://developer.android.com/tools/studio/index.html
 [23]: http://developer.android.com/tools/building/building-studio.html
