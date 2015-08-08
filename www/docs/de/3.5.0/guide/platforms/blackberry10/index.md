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

    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

Auf Mac und Linux:

*   Bearbeiten Sie die `~/.bash_profile` -Datei eine Zeile wie die folgende, je nachdem, wo die Native SDK installiert wurde hinzugefügt:

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Führen Sie folgendermaßen vor, um die Änderung in der aktuellen Sitzung zu übernehmen:

    $ Quelle ~/.bash_profile

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

*   [Download][1]
*   [Erste Schritte][2]

 [2]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Sie müssen vor der Prüfung einer app auf einem Emulator oder ein Gerät Entwicklungsmodus aktivieren.

Starten Sie das Emulator-Image, dann wählen Sie **Einstellungen** aus dem home-Bildschirm:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Navigieren Sie zu der **Sicherheit und Datenschutz → Entwicklungsmodus** Abschnitt, und aktivieren Sie die Option:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Führen Sie dann den `emulate` Befehl, um die app anzuzeigen:

    $ cordova emulate blackberry10 --devicepass <password>


## Bereitstellung auf Gerät

Für ein Gerät bereitstellen, stellen Sie sicher, es ist an den Computer angeschlossen und Entwicklungsmodus aktiviert ist.

Führen Sie dann den `run` Befehl, um die app anzuzeigen:

    $ cordova run blackberry10 --devicepass <password>


Wenn ein Debug-Token noch nicht für das Gerät eingerichtet, eine Fehlermeldung Sie fordert auf, das Kennwort bereitstellen, werden beim Konfigurieren des Computers zum Signieren von Anwendungen definiert.

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>


## Debuggen mit WebInspector

Beim Debuggen auf dem Gerät oder einen Emulator können Sie WebInspector aus der Ferne, um den internen Zustand der Anwendung anzuzeigen ausführen. Eine Eingabeaufforderung zeigt die URL, die Sie zum Herstellen einer Verbindung mit Ihrer app mit einem standard-Webbrowser ermöglicht. Weitere Informationen finden Sie unter [Debuggen verwenden WebInspector][5].

 [5]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Erstellen einer Releaseversion

Standardmäßig läuft der `cordova build` Befehl erstellt eine vorzeichenlose *...verlegt* -Paketdatei geeignet zum Testen auf einem Gerät oder Simulator.

Verwendung `--release` zu eine Release-Version zu erstellen, die für Verteilung durch BlackBerry Welt geeignet.

    $ cordova build --release --keystorepass <signing password>


Die `--keystorepass` Option gibt das Kennwort, die Sie beim Konfigurieren des Computers zum Signieren definiert Anwendungen.

## An anderen Speicherorten bereitstellen

Die Anleitung oben übernehmen ein Gerät über USB angeschlossen ist oder ein Simulator auf dem lokalen Computer ausgeführt wird. Es ist auch möglich, an anderen Speicherorten bereitstellen.

Eine weitere Gruppe von Befehlszeilen-Dienstprogramme sind enthalten, wenn Sie die BlackBerry 10-Plattform für Ihr Projekt einrichten. Der folgende Befehl, in diesem Fall aus dem Projektverzeichnis auf oberster Ebene aufgerufen verknüpft ein Ziel mit dem Namen *emu* mit einer IP-Adresse.

*   Unter Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   Auf Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

Sobald das Ziel definiert ist, können sie den Befehl "ausführen" mit `--target` :

    $ cordova run blackberry10 --target=emu
