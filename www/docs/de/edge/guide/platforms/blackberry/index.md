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

# Handbuch der BlackBerry-Plattform

Diese Anleitung zeigt Ihnen wie ein SDK-Umfeld zu Zielanwendungen für die BlackBerry-Plattform vor Version 10 eingerichtet. Wenn Sie die aktuellste Version ansprechen möchten, finden Sie im BlackBerry-10-Plattform-Guide. Finden Sie im folgenden detaillierte Plattform-spezifischen Informationen:

*   BlackBerry Configuration
*   Aktualisieren der BlackBerry
*   BlackBerry-Plugins
*   BlackBerry-Befehlszeilentools

Die Befehlszeilentools, die oben beziehen sich auf Versionen vor 3.0 Cordova. Informationen über die aktuelle Schnittstelle finden Sie unter The Command-Line Interface.

## Anforderungen und Unterstützung

Dieser BlackBerry-Version wird nicht unterstützt, durch die `cordova` in der Command-Line Interface, sondern durch einen separaten Satz von Befehlszeilentools beschriebenen Dienstprogramm. Laden Sie die Cordova-Verteilung von [cordova.apache.org][1].

 [1]: http://cordova.apache.org/#download

Cordova für BlackBerry basiert auf dem [BlackBerry WebWorks-Rahmen][2], der für Windows XP (32-Bit) verfügbar ist, Windows 7 (32-Bit und 64-Bit) und Mac (OS X 10.6.4+). WebWorks Anwendungen können *nur* werden auf die folgenden BlackBerry Plattformen bereitgestellt:

 [2]: https://bdsc.webapps.blackberry.com/html5

*   BlackBerry OS 5.0 und höher
*   BlackBerry PlayBook
*   BlackBerry 10 (QNX)

WebWorks erfordert das Java Development Kit (JDK). Verwenden Sie für Windows 32-Bit-Version von [Oracle JDK][3]. Java in installiert standardmäßig unter Mac OS X bis Version 10.7, die [eine separate Installation][4]erfordert. Es erfordert auch Apache Ant, die auf dem Mac ist Bestandteil der Java-Installation. Die Windows-Version ist verfügbar von [ant.apache.org][5].

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## Das SDK installieren

Downloaden Sie und installieren Sie das entsprechende WebWorks-SDK für Ihre Entwicklung. BlackBerry PlayBook und BlackBerry Smartphone WebWorks SDKs können unter den folgenden Adressen heruntergeladen werden.

*   \[BlackBerry PlayBook SDK\] (https://developer.blackberry.com/html5/download/#playbook) und [Adobe Air-SDK][6]

*   \[BlackBerry Smartphones SDK\] (https://developer.blackberry.com/html5/download/#smartphones)

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## Registrieren Sie sich für Signaturschlüssel

Wenn Sie Ihre Anwendung auf BlackBerry App World oder auf einem tatsächlichen Gerät veröffentlichen möchten, müssen Sie für eine Reihe von kostenlosen Code Signing Keys registrieren. Hierzu füllen Sie das [Bestellformular für BlackBerry-Schlüssel][7]. Sobald Sie Ihre Signatur-Schlüssel erhalten haben, müssen sie Setup. Siehe die [BlackBerry HTML5/WebWorks-Website][8] Informationen.

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Installieren von Cordova

Herunterladen Sie und extrahieren Sie die neueste Kopie von [Cordova][1].

## Einrichten eines neuen Projekts

*   Öffnen Sie eine Command-Line Terminal und navigieren Sie zum entpackten Cordova.

*   Es ist ein Verzeichnis für jede Plattform, Cordova unterstützt. Navigieren Sie zu dem `blackberry` Verzeichnis.

*   Das `blackberry` Verzeichnis enthält mehrere Unterverzeichnisse. Das `example` -Verzeichnis enthält ein komplettes Cordova-Projekt. Kopie der `example` Verzeichnis an einen anderen Speicherort auf Ihrem Computer, und dorthin navigieren.

*   Bearbeiten Sie die `project.properties` Datei im WebWorks-SDK angeben Sie verwenden. Hier sind beispielsweise die jeweiligen Einstellungen für BlackBerry PlayBook, BlackBerry-Smartphone (OS5-7) oder BlackBerry 10 (QNX):
    
        playbook.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks SDK for TabletOS 2.1.0.6\\bbwp
        blackberry.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks Packager
        qnx.bbwp.dir=C:\\Program Files (x86)\\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9
        

Diese entsprechen den Parametern, die Sie angeben, wenn Sie Ihr Projekt zu erstellen. Zum ersten Mal, wenn, das Sie diese Befehle ausführen, generieren sie eine Anwendung "Hello World":

        cordova/build playbook
        cordova/build blackberry
        cordova/build qnx
    

Zusammen mit dem SDK müssen Sie auch für einen Code Signaturschlüssel und Debug-Token zu registrieren. Der Signaturschlüssel können Sie apps durch BlackBerry World verteilen. Das Debug-Token können Sie unsignierte apps auf einem BlackBerry-Emulator oder Gerät zu testen. Sie müssen nicht erstellen und installieren Sie das Debug-Token; Wenn Sie das Schlüsselspeicher-Kennwort angeben, wird das Buildskript erstellt und installiert das Debug-Token für Sie. Um den Signaturschlüssel einzurichten, gehen Sie die BlackBerry-Website, erhalten Sie es, dafür zu sorgen, das Kennwort zu behalten, die, das Sie angeben. Führen Sie das `blackberry-signer` -Dienstprogramm, das im SDK enthalten ist. BlackBerry bietet weitere Informationen hier:

*   [Registrieren Sie sich für Ihren Code signing-key][9]

*   [Einrichten des Computers zum Signieren von code][10]

*   [umfassende Anleitung zur Einrichtung der SDK-Umgebung][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## Bereitstellen auf Emulator

BlackBerry-Smartphone-Emulatoren sind nur unter Windows verfügbar. BlackBerry PlayBook Emulatoren benötigen VMWare Player (Windows) oder VMWare Fusion (Mac OS X). Das WebWorks-SDK enthält einen Standard-Emulator, aber zusätzliche Emulatoren sind [über BlackBerry verfügbar][12].

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

Geben Sie Ihrem Projektverzeichnis, `./cordova/run <target>` , ersetzen `<target>` mit `qnx` , `playbook` , oder `blackberry` . Beachten Sie, dass für BlackBerry 10 und Textbuch, das Emulator-Computerbild bereits gestartet sein muss.

Weitere Informationen finden Sie unter:

*   [BlackBerry PlayBook][13]

*   [BlackBerry-Smartphone][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

Für BlackBerry Playbook, bearbeiten Sie die `project.properties` Datei zum Anpassen der `playbook.sim.ip` und `playbook.sim.password` Eigenschaften. IP-Adresse des Emulators ist durch **die Einstellungsanwendung auf dem home-Bildschirm** . Aktivieren der **Sicherheit und Datenschutz → Entwicklungsmodus** Option, um die Adresse anzuzeigen. Das Kennwort kann auch in der Registerkarte " **Sicherheit und Datenschutz** " festgelegt werden.

Für BlackBerry-Smartphone, bearbeiten Sie die `project.properties` Datei zum Anpassen der `blackberry.sim.dir` und `blackberry.sim.bin` Eigenschaften. Du musst weg Trennzeichen zu entkommen, wenn Verzeichnispfade unter Windows, z. B. die Angabe:`C:\\Program
Files\\BlackBerry\\Simulator`.

Nachdem der Emulator installiert und ausgeführt wird, führen Sie einen der folgenden Schritte zur Installation einer Anwendung auf dem home-Bildschirm:

        cordova/run playbook
        cordova/run blackberry
    

Wenn Sie gefragt werden, ob ein Gerät an Ihren Computer angeschlossen ist, Antworten Sie mit Nein.

**Hinweis:** Auf BlackBerry OS 5, die Anwendung installiert ist, das `Downloads` Verzeichnis.

## Bereitstellung auf Gerät

Zum Bereitstellen Ihrer Anwendung in ein Gerät muss verbunden sein, und Sie müssen registriert sein, für Code signing-Schlüssel wie oben beschrieben. Auch, um apps auf dem BlackBerry PlayBook Bereitstellen der **Einstellungen → Sicherheit → Entwicklungsmodus** Option muss aktiviert sein.

Auf BlackBerry PlayBook "Bearbeiten" die `project.properties` Datei und ändern Sie folgendermaßen vor, um das Gerät IP und Passwort als beschreibt oben, zusammen mit dem signing Key Passwort reflektieren Sie einrichten:

Geben Sie Ihrem Projektverzeichnis, `./cordova/run <target>` , ersetzen `<target>` mit `qnx` , `playbook` , oder`blackberry`.

Geben Sie auf BlackBerry-Smartphone (OS5-7), die `blackberry.sigtool.password` -Eigenschaft, wie das Kennwort für den Neuzugang Schlüssel.

Dann aus dem Projekt-Verzeichnis, führen Sie einen der Befehle würden Sie um die app in einem Emulator anzuzeigen:

        cordova/run playbook
        cordova/run blackberry
    

Wenn Sie gefragt werden, ob ein Gerät an Ihren Computer angeschlossen ist, Antworten Sie mit Ja.

**Hinweis:** Auf BlackBerry OS 5, die Anwendung installiert ist, das `Downloads` Verzeichnis.

## Weitere Informationen

Die folgenden Artikel können helfen, gemeinsame Probleme zu lösen, beim Entwickeln von Anwendungen für BlackBerry WebWorks Rahmen gebaut:

*   [BlackBerry WebWorks Entwicklung Fallstricke][15]

*   [Best Practices für Verpackungsanwendungen WebWorks][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html