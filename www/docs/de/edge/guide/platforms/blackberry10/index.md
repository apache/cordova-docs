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

# Handbuch für die Plattform von BlackBerry 10

Diese Anleitung zeigt wie Ihr SDK-Umgebung einrichten, Cordova apps für BlackBerry 10 Geräte bereitstellen. Für frühere Versionen von BlackBerry müssen Sie mit einem unterschiedlichen SDK Umgebung und Befehlszeilentools, beschrieben im Handbuch für das BlackBerry-Plattform. Sie müssen für BlackBerry 10 installieren Sie das SDK unabhängig davon, ob Sie die Cross-Plattform-Cordova-CLI für Entwicklung, oder ein schmaler Plattform-zentrierte Kommandozeilen-Tools nutzen möchten. Einen Vergleich der zwei Entwicklungswege finden Sie in der Übersicht. Einzelheiten zu jedem finden Sie unter The Command-Line Interface und der BlackBerry 10 Shell Tool Guide.

## Anforderungen

Die Entwicklungsumgebung ist auf Windows, Mac und Linux verfügbar.

Entwickler sollten verwenden, die `cordova` in Verbindung mit dem BlackBerry WebWorks SDK oder BlackBerry Native SDK-Dienstprogramm. Informationen finden Sie unter The Command-Line Interface wie installiere ich `cordova` , Projekte, hinzufügen dann erstellen und bereitstellen für jede Plattform.

BlackBerry 10 Geräte-Simulator:

*   Prozessor: Intel Dual-core 2.0 GHz/AMD Athlon 4200 + oder höher
*   Festplattenspeicher: 10 GB
*   RAM-Speicher: 4 GB
*   Virtualisierung: eine der folgenden:
    *   **Intel Virtualization Technology** (VT, VT-X, Vmx) → [Intel VT-X unterstützt Prozessor Liste][1]
    *   **AMD Virtualization** (AMD-V, SVM) (Seit Mai 2006 gehören alle AMD-CPUs AMD-V außer Sempron).

 [1]: http://ark.intel.com/products/virtualizationtechnology

Weitere Informationen zu Anforderungen: [BB10-Simulator abgestimmt][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## Das BlackBerry WebWorks-SDK installieren

SDK herunterladen Sie und installieren Sie der BlackBerry WebWorks von [developer.blackberry.com][3]

 [3]: https://developer.blackberry.com/html5/download/

Das Installationsprogramm wird Befehlszeilentools zum Systempfad hinzufügen. Je nach Ihrem Betriebssystem müssen Sie ein neues Terminals-Fenster zu öffnen oder sich neu anmelden.

## Das BlackBerry-Native-SDK installieren

Möchten Sie systemeigenen Code, z. B. wenn eine native Plugin Entwicklung kompilieren müssen Sie das BlackBerry-Native-SDK installieren.

Um die BlackBerry-Native-SDK zu erhalten, downloaden Sie und installieren Sie die IDE für BlackBerry erhältlich von [developer.blackberry.com][4], dann mit der IDE, das BlackBerry-Native-SDK installieren. Nach der Installation müssen Sie die Befehlszeilenprogramme zum Systempfad hinzufügen.

 [4]: http://developer.blackberry.com/native/download/

Unter Windows:

*   Gehen Sie zu **mein Computer → Eigenschaften → erweitert → Umgebungsvariablen**.

*   Hängen Sie die Native SDK-Installationsverzeichnis auf den Pfad, z.B.:

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\


Auf Mac und Linux:

*   Bearbeiten Sie die `~/.bash_profile` -Datei eine Zeile wie die folgende, je nachdem, wo die Native SDK installiert wurde hinzugefügt:

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/


    oder für das 10.2 Native SDK:

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/


*   Führen Sie folgendermaßen vor, um die Änderung in der aktuellen Sitzung zu übernehmen:

        $ source ~/.bash_profile


Wenn Sie ein Umweltproblem, haben mit dem nativen SDK von der Befehlszeile aus, führen Sie die entsprechende Datei für Ihre Plattform, gelegen innerhalb der Installationspfad:

*   Unter Windows → MS-DOS-Shell:

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat


*   Unter Windows → Git-Bash-Shell:

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`


*   Unter Linux → als Root-Benutzer installiert:

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Unter Linux → als nicht-Root-Benutzer installiert:

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Auf dem Mac:

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## Für Signierung einrichten

Wenn Sie auf einem Gerät zu testen oder apps durch BlackBerry World verteilen möchten, muss Ihr System Setup zum Signieren von Code sein.

Um einen Signaturschlüssel zu erhalten, gehen Sie zu \[BlackBerry Schlüssel Bestellformular\] (https://www.blackberry.com/SignedKeys/codesigning.html).

Markieren Sie das erste Feld: "für BlackBerry10 Anwendungen mit BlackBerry NDK entwickelt" und dann anmelden oder erstellen eine BBID.

Geben Sie ein Kennwort, und klicken Sie auf "Token erhalten", um bbidtoken.csk zu downloaden. Speichern Sie diese Datei auf den standardmäßigen Speicherort für Ihr Betriebssystem, die auf der Downloadseite angezeigt wird.

Der letzte Schritt ist ein Signaturzertifikat zu generieren:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## Erstellen Sie ein Projekt

Verwendung der `cordova` Utility für ein neues Projekt, wie in der Command-Line Interface beschrieben einrichten. Zum Beispiel in einem Quellcode-Verzeichnis:

        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build


## Bereitstellen auf Emulator

Wenn Sie einen Geräteemulator ausführen möchten, downloaden und Installieren der BlackBerry-10-Simulator.

*   [Download][4]
*   [Erste Schritte][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Sie müssen vor der Prüfung einer app auf einem Emulator oder ein Gerät Entwicklungsmodus aktivieren.

Starten Sie das Emulator-Image, dann wählen Sie **Einstellungen** aus dem home-Bildschirm:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Navigieren Sie zu der **Sicherheit und Datenschutz → Entwicklungsmodus** Abschnitt, und aktivieren Sie die Option:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Eine weitere Gruppe von Befehlszeilen-Dienstprogramme sind enthalten, wenn Sie die BlackBerry 10-Plattform für Ihr Projekt einrichten. Der folgende Befehl, in diesem Fall aus dem Projektverzeichnis auf oberster Ebene aufgerufen verknüpft ein Ziel mit dem Namen *emu* mit oben angezeigten IP-Adresse.

*   Unter Windows:

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator


*   Auf Mac/Linux:

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator


Führen Sie dann den `emulate` Befehl, um die app anzuzeigen:

        $ cordova emulate blackberry10


## Bereitstellung auf Gerät

Um auf ein Gerät bereitzustellen, sicherzustellen Sie, dass es an Ihrem Computer angeschlossen ist. Entwicklungsmodus aktivieren und die IP-Adresse als beschriebenen Emulator oben im Abschnitt zu erhalten. Sie müssen auch den Anschluß von erhalten die **lagereinstellungsanwendung unter** **über → Hardware**:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Führen Sie das Ziel-Befehlszeilenprogramm, um eine IP-Adresse, Gerätekennwort und PIN einen Namen zuzuordnen.

*   Unter Windows:

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


*   Auf Mac/Linux:

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


Wo:

*   `--password`bezieht sich auf das Kennwort zum Entsperren.

*   `--pin`bezieht sich auf das Gerät PIN **die Einstellungsanwendung** eingeholt.

Führen Sie dann den `run` Befehl, um die app anzuzeigen:

        $ Cordova ausführen blackberry10


Wenn ein Debug-Token nicht noch für das Gerät eingerichtet ist, aufgefordert, eine Fehlermeldung, die Plattform, das Skript mit dem Kennwort, die Sie bei der Registrierung für Signaturschlüssel zu verwenden.

*   Unter Windows:

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret


*   Auf Mac/Linux:

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret


## Debuggen mit WebInspector

Beim Debuggen auf dem Gerät oder einen Emulator können Sie WebInspector aus der Ferne, um den Zustand der Anwendung interner anzuzeigen ausführen. Eine Eingabeaufforderung zeigt die URL, die Sie zum Herstellen einer Verbindung mit der app mit einem standard-Webbrowser ermöglicht. Weitere Informationen finden Sie unter [Debuggen verwenden WebInspector][9].

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Erstellen einer Releaseversion

Standardmäßig läuft der `cordova build` Befehl erstellt eine vorzeichenlose *...verlegt* -Paketdatei geeignet zum Testen auf einem Gerät oder Simulator.

Verwendung `--release` zu eine Release-Version zu erstellen, die für Verteilung durch BlackBerry Welt geeignet.

    $ cordova build --release --keystorepass <signing password>


Die `--keystorepass` Option gibt das Kennwort, die Sie beim Konfigurieren des Computers zum Signieren definiert Anwendungen.

## An anderen Speicherorten bereitstellen

Die Anleitung oben übernehmen ein Gerät über USB angeschlossen ist oder ein Simulator auf dem lokalen Computer ausgeführt wird. Es ist auch möglich, an anderen Speicherorten bereitstellen.

Eine weitere Gruppe von Befehlszeilen-Dienstprogramme sind enthalten, wenn Sie die BlackBerry 10-Plattform für Ihr Projekt einrichten. Der folgende Befehl, in diesem Fall aus dem Projektverzeichnis auf oberster Ebene aufgerufen verknüpft ein Ziel mit dem Namen *emu* mit einer IP-Adresse.

*   Unter Windows:

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret


*   Auf Mac/Linux:

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret


Sobald das Ziel definiert ist, können sie den Befehl "ausführen" mit `--target` :

    $ cordova run blackberry10 --target=emu
