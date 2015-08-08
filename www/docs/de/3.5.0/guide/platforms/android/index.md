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

# Android-Plattform-Guide

Diese Anleitung zeigt wie Ihre Entwicklungsumgebung SDK eingerichtet, Cordova apps für Android-Geräte bereitzustellen. Es führt Sie durch den Prozess der Installation des Android SDK, öffnen ein Android-Projekt in Eclipse SDK und Bereitstellung auf einem Emulator oder Gerät. Sie müssen folgen dieser Anleitung um mindestens das Android SDK installieren, unabhängig davon, welcher Workflow du folgst. (Die Workflows *Web Projekt Dev* und *Einheitlichen Plattform Dev* erfordern das Android SDK installiert und Ihren Pfad erreichbar werden.)

Finden Sie im folgenden detaillierte Plattform-spezifischen Informationen:

*   Android-Konfiguration
*   Android Webansichten für
*   Android Plugins
*   Aktualisierung von Android
*   Android-Befehlszeilenprogrammen

Die Befehlszeilentools, die oben beziehen sich auf Versionen vor 3.0 Cordova. Informationen über die aktuelle Schnittstelle finden Sie unter The Command-Line Interface.

## Anforderungen und Unterstützung

Finden Sie die [Systemanforderungen][1] für das Android SDK.

 [1]: http://developer.android.com/sdk/index.html

Cordova unterstützt Android 2.2, 2.3 und 4.x. Als allgemeine Regel sind Plattformen veraltet, da sie weniger als 5 % auf Googles [Verteilung Dashboard][2] Tauchen.

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

Entwickler sollten verwenden das `cordova` -Dienstprogramm in Verbindung mit dem Android SDK. Finden Sie unter The Command-Line Interface Informationen installieren Sie es, Projekte, hinzufügen dann erstellen und Bereitstellen eines Projekts.

Installieren Sie das Android SDK von [Developer.Android.com/SDK][3]. Das androide Sdk wird vertrieben als ein ' Adt-Bündel -<os>-<arch>-<ver>' Datei. Unter Windows ist das Adt-Bundle mit einem Installer gepackt. Einfach entpacken Sie auf OSX und Linux, das Adt-Bundle in der Lage, die Sie speichern Entwicklungstools. [Weitere detaillierte Informationen über Android SDK Setup finden Sie hier][4]

 [3]: http://developer.android.com/sdk/
 [4]: http://developer.android.com/sdk/installing/bundle.html

Für Cordova Kommandozeilen-Tools arbeiten, müssen Sie das SDK enthalten `tools` und `platform-tools` Verzeichnisse in Ihrer PATH-Umgebung. Auf Mac, können Sie einen Text-Editor zum Erstellen oder ändern die `~/.bash_profile` -Datei eine Zeile wie die folgende, je nachdem, wo das SDK installiert:

    Export PATH = ${PATH}: / Entwicklung/Adt-Bundle/Sdk/Plattform-Tools: / Entwicklung/Adt-Bundle/Sdk/Tools


Dies macht die SDK-Tools im neu eröffneten terminal-Fenster verfügbar. Sonst laufen Sie hier, um sie in der aktuellen Sitzung zur Verfügung stellen:

    $ Quelle ~/.bash_profile


Die PATH-Umgebung unter Windows 7 zu ändern:

*   Im Menü " **Start** " in der unteren linken Ecke des Desktops mit der rechten Maustaste auf **Computer**, klicken, **Eigenschaften**.

*   Klicken Sie in der Spalte auf der linken Seite auf **Erweiterte Systemeinstellungen** .

*   Drücken Sie im daraufhin angezeigten Dialogfeld **Umgebungsvariablen**.

*   Wählen Sie die **PATH** -Variable und klicken Sie **Bearbeiten**.

*   Fügen Sie Folgendes in den Pfad basierend auf dem Sie das SDK, zum Beispiel installiert:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools


*   Speichern Sie den Wert und schließen Sie beide Dialogfelder zu.

Sie müssen möglicherweise auch Java und Ant öffnen eine Eingabeaufforderung und geben aktivieren `java` , und geben Sie auch `ant` . Hängen Sie an den Pfad, welcher nicht ausgeführt:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin


## Öffnen Sie ein Projekt im SDK

Verwendung der `cordova` Utility für ein neues Projekt, wie in der Cordova The Command-Line Interface beschrieben einrichten. Zum Beispiel in einem Quellcode-Verzeichnis:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build


Einmal erstellt, wird hier das SDK zu verwenden, um es zu ändern:

*   Starten Sie die **Eclipse** -Anwendung.

*   Wählen Sie **Neues Projekt** .

*   Wählen Sie **Android Projekt aus vorhandenem Code** aus dem daraufhin angezeigten Dialogfeld, und klicken Sie auf **weiter**: ![][5]

*   Navigieren Sie zu `hello` , oder welches Verzeichnis Sie für das Projekt erstellt, dann auf die `platforms/android` Unterverzeichnis.

*   Stellen Sie sicher, beide `hello` und `hello-CordovaLib` Projekte werden ausgewählt, importiert werden. Das `hello-CordovaLib` Projekt wird ab Cordova 3.3.0 benötigt, da Cordova jetzt als Android-Bibliothek anstelle einer JAR-Datei verwendet wird.

*   Drücken Sie **Fertig stellen**.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Sobald das Eclipse-Fenster wird geöffnet, erscheint ein rotes **X** auf ungelöste Probleme hinweisen. Wenn ja, gehen Sie zusätzlichen folgendermaßen:

*   Rechtsklick auf das Projektverzeichnis.

*   Wählen Sie in den daraus resultierenden **Eigenschaften** im Navigationsbereich des **Android** .

*   Erstellen Sie Ziel für das Projekt zu, wählen Sie die höchste Android API-Ebene, die Sie installiert haben.

*   Klicken Sie auf **OK**.

*   Wählen Sie im Menü **Projekt** **Clean** . Dies sollten alle Fehler im Projekt korrigieren.

## Bereitstellen auf Emulator

Können Sie das `cordova` -Dienstprogramm eine app in einem Emulator, oder Sie laufen kann es im SDK ausgeführt. In jedem Fall muss das SDK zuerst konfiguriert werden um mindestens ein Gerät anzuzeigen. Verwenden Sie hierzu das Android SDK Manager, eine Java-Anwendung, die separat von Eclipse verläuft. Es gibt zwei Möglichkeiten, es zu öffnen:

*   Führen Sie `android` in der Befehlszeile.

*   Drücken Sie von Eclipse, dieses Symbol in der Symbolleiste:

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

Nach dem Öffnen zeigt das Android SDK Manager verschiedene Laufzeit-Bibliotheken:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

Wählen Sie **Extras → Verwaltung AVDs** (Android Virtual Devices), dann wählen Sie ein Element aus **Gerätedefinitionen** in dem daraufhin angezeigten Dialogfeld:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Presse **AVD erstellen**, ändern optional den Namen und drücken Sie **OK** um die Änderungen zu übernehmen.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

Der AVD wird dann in der Liste **Android Virtual Devices** angezeigt:

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Um den Emulator als separate Anwendung zu öffnen, wählen Sie den AVD, und drücken Sie **Start**. Es bringt viel, wie es auf dem Gerät mit zusätzliche Steuerelemente für Hardware-Tasten zur Verfügung:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

An dieser Stelle können Sie das `cordova` -Dienstprogramm zum Bereitstellen der Anwendung für den Emulator von der Befehlszeile aus:

        $ cordova emulate android


Wenn Sie stattdessen in Eclipse arbeiten, Maustaste auf das Projekt, und wählen Sie **Ausführen als → Android-Anwendung**. Sie möglicherweise aufgefordert, eine AVD angeben, wenn keine bereits geöffnet.

Verwenden Sie für eine schnellere Erfahrung ein Intel-basierten Emulator-Image:

*   Installieren eine oder mehrere `Intel x86 Atom` System-Images als auch die `Intel Hardware Accelerated Execution Manager` , finden Sie unter **Extras**.

*   Führen Sie das Intel-Installationsprogramm aus, das innerhalb Ihres Android SDK unter verfügbar ist`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   Erstellen Sie eine neue AVD, mit dem Ziel, die auf einem Intel-Bild festgelegt.

*   Wenn Sie den Emulator zu starten, stellen Sie sicher, es gibt keine Fehlermeldungen angezeigt, der angibt, einer Störungsmeldung HAX Module laden.

## Bereitstellung auf Gerät

Um eine app direkt auf das Gerät zu drücken, stellen Sie sicher, dass USB debugging auf dem Gerät wie beschrieben auf der [Android Developer-Website][12]aktiviert ist, und verwenden Sie einen Mini-USB-Kabel zu, um es an Ihr System anschließen.

 [12]: http://developer.android.com/tools/device.html

Drücken Sie die app auf das Gerät von der Befehlszeile aus:

        $ cordova run android


Abwechselnd innerhalb von Eclipse, Maustaste auf das Projekt, und wählen Sie **Ausführen als → Android-Anwendung**.
