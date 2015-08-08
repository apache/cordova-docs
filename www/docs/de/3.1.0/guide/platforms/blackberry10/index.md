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

# Handbuch für die Plattform von BlackBerry 10

Diese Anleitung zeigt wie Sie die Entwicklungsumgebung zum Erstellen und Bereitstellen von Cordova apps für BlackBerry 10 Geräte aufsetzen. Für frühere Versionen von BlackBerry müssen Sie einen anderen Satz von Befehlszeilentools, beschrieben im Handbuch der BlackBerry-Plattform zu verwenden.

## Anforderungen

Die Entwicklungsumgebung ist auf Windows, Mac und Linux verfügbar.

Entwickler sollten verwenden, die `cordova` in Verbindung mit der Blackberry-Native-SDK-Dienstprogramm. Die Command-Line Interface Informationen finden Sie unter Gewusst wie: Installieren Sie `cordova` , Projekte, hinzufügen dann erstellen und bereitstellen für jede Plattform.

## Das BlackBerry-Native-SDK installieren

Die BlackBerry-Native-SDK steht von [developer.blackberry.com][1]zur Verfügung. Nach der Installation müssen Sie die Befehlszeilenprogramme zum Systempfad hinzufügen.

 [1]: http://developer.blackberry.com/native/download/

Unter Windows:

*   Gehen Sie zu **mein Computer → Eigenschaften → erweitert → Umgebungsvariablen**.

*   Hängen Sie die Native SDK-Installationsverzeichnis auf den Pfad, z.B.:

    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

Auf Mac und Linux:

*   Bearbeiten Sie die `~/.bash_profile` -Datei eine Zeile wie die folgende, je nachdem, wo die Native SDK installiert wurde hinzugefügt:

    $ Export PATH = ${PATH}: / Anwendungen/Bbndk/host\_10\_1\_0\_132/Darwin/X 86/Usr/bin /

    oder für das 10.2 Native SDK:

    $ Export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Führen Sie folgendermaßen vor, um die Änderung in der aktuellen Sitzung zu übernehmen:

    $ Quelle ~/.bash_profile

## Für Signierung einrichten

Wenn Sie auf einem Gerät zu testen oder apps durch BlackBerry World verteilen möchten, muss Ihr System Setup zum Signieren von Code sein.

Um einen Signaturschlüssel zu erhalten, besuchen Sie die BlackBerry-Website, und achten Sie darauf, das Kennwort zu kennen, die, das Sie angeben. Führen Sie das `blackberry-signer` -Dienstprogramm, das mit dem systemeigenen BlackBerry-SDK enthalten ist.

Detaillierte Anweisungen finden Sie hier:

*   [Registrieren Sie sich für Ihren Code signing-Key.][2]

*   [Einrichten des Systems zum Signieren von Code.][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Erstellen Sie ein Projekt

Verwendung der `cordova` Utility für ein neues Projekt, wie in der Command-Line Interface beschrieben einrichten. Zum Beispiel in einem Quellcode-Verzeichnis:

    $ cordova create hello com.example.hello
    $ cd hello
    $ cordova platform add blackberry10
    $ cordova build


## Bereitstellen auf Emulator

Wenn Sie einen Geräteemulator ausführen möchten, downloaden und Installieren der BlackBerry-10-Simulator.

*   [Download][1]
*   [Erste Schritte][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Sie müssen vor der Prüfung einer app auf einem Emulator oder ein Gerät, ein *Ziel* zu Ihrem Projekt hinzufügen. Jedes ist mit einem eindeutigen Namen identifiziert und einer IP-Adresse zugeordnet. Sie müssen die IP-Adresse vom Emulator zu erhalten, bevor Sie es verwenden, um apps anzusehen.

Starten Sie das Emulator-Image, dann wählen Sie **Einstellungen** aus dem home-Bildschirm:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Navigieren Sie zu der **Sicherheit und Datenschutz → Entwicklungsmodus** section, aktivieren Sie die Option und die IP-Adresse beziehen:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Eine weitere Gruppe von Befehlszeilen-Dienstprogramme sind enthalten, wenn Sie die BlackBerry 10-Plattform für Ihr Projekt einrichten. Der folgende Befehl, in diesem Fall aus dem Projektverzeichnis auf oberster Ebene aufgerufen verknüpft ein Ziel mit dem Namen *emu* mit oben angezeigten IP-Adresse.

*   Unter Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator

*   Auf Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator

Führen Sie dann den `emulate` Befehl, um die app anzuzeigen:

    $ cordova emulate blackberry10


## Bereitstellung auf Gerät

Um auf ein Gerät bereitzustellen, sicherzustellen Sie, dass es an Ihrem Computer angeschlossen ist. Entwicklungsmodus aktivieren und die IP-Adresse als beschriebenen Emulator oben im Abschnitt zu erhalten. Sie müssen auch den Anschluß von erhalten die **lagereinstellungsanwendung unter** **über → Hardware**:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Führen Sie das Ziel-Befehlszeilenprogramm, um eine IP-Adresse, Gerätekennwort und PIN einen Namen zuzuordnen.

*   Unter Windows:

    $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

*   Auf Mac/Linux:

    $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

Wo:

*   `--password`bezieht sich auf das Kennwort zum Entsperren.

*   `--pin`bezieht sich auf das Gerät PIN **die Einstellungsanwendung** eingeholt.

Führen Sie dann den `run` Befehl, um die app anzuzeigen:

    $ cordova run blackberry10


Wenn ein Debug-Token nicht noch für das Gerät eingerichtet ist, fordert eine Fehlermeldung Sie nutzen die Plattform, das Skript mit dem Kennwort, die Sie bei Registrierung für Signaturschlüssel.

*   Unter Windows:

    $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret

*   Auf Mac/Linux:

    $ platforms/blackberry10/cordova/run --device --keystorepass mysecret

## Debuggen mit WebInspector

Beim Debuggen auf dem Gerät oder einen Emulator können Sie WebInspector aus der Ferne, um den internen Zustand der Anwendung anzuzeigen ausführen. Eine Eingabeaufforderung zeigt die URL, die Sie zum Herstellen einer Verbindung mit Ihrer app mit einem standard-Webbrowser ermöglicht. Weitere Informationen finden Sie unter [Debuggen verwenden WebInspector][8].

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Erstellen einer Releaseversion

Standardmäßig läuft der `cordova build` Befehl erstellt eine vorzeichenlose *...verlegt* -Paketdatei geeignet zum Testen auf einem Gerät oder Simulator.

Sie müssen eine andere ausführen `build` Befehl aus, um eine Release-Version zu erstellen, die für Verteilung durch BlackBerry Welt geeignet. Es ist nicht angewiesen auf die `cordova` CLI-Tool, und stattdessen verwendet die folgende Syntax:

*   Unter Windows:

    $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret

*   Auf Mac/Linux:

    $ platforms/blackberry10/cordova/build --release --keystorepass mysecret

Die `--keystorepass` Option gibt das Kennwort, die Sie beim Konfigurieren des Computers zum Signieren definiert Anwendungen.
