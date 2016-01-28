---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: Windows-Verpackungen
---

# Windows-Verpackungen

Sie erfahren mehr über die Unterzeichnung und Verpackung von Windows Store Apps auf [MSDN](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx).

Um in der Lage, richtig packen und Signieren von Windows sind apps da paar Dinge erforderlich:

  * Ein Signaturzertifikat
  * Identität-Informationen, die passend mitgelieferten Signaturzertifikats

In Windows-Projekt bleiben Identität Informationen in einer Datei namens package.appxmanifest. Diese Datei wird automatisch ausgefüllt, jedes Mal, wenn eine Cordova-app integriert ist. Identität hat 3 wichtige Felder.

  * Name
  * Publisher
  * Version

*Name* und *Version* kann von **"config.xml"**festgelegt werden. *Publisher* kann als Buildparameter bereitgestellt werden oder lassen sich in **build.json** -Datei.

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

Ein Signaturzertifikat kann entweder CLI oder durch build.json-Datei bereitgestellt werden. Das Zertifikat Verwandte CLI-Flags sind:

  * `--packageCertificateKeyFile` : Sobald ein Paket Signaturzertifikat erstellt wurde, kann dieser Parameter verwendet werden, ordnen Sie das Zertifikat mit der app zu. Dieses Flag annimmt Dateipfad als Argument. ZB. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `--packageThumbprint` : Paket-Fingerabdruck wird verwendet, um die Echtheit der Paket-Zertifikat-Schlüssel-Datei zu überprüfen. Wenn Sie eine Schlüsseldatei Zertifikat zu erstellen, wird dieser Wert für den Endbenutzer bereitgestellt werden. ZB. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

Alternativ können diese Werte angegeben werden mit einer Build-Konfigurationsdatei (build.json) mit CLI (--buildConfig). Eine Beispielkonfigurationsdatei für Build:

    {
        "windows": {
            "debug": {
                "packageCertificateKeyFile": "platforms\\windows\\CordovaApp_TemporaryKey.pfx"
            },
            "release": {
                "packageCertificateKeyFile": "c:\\path-to-key\\keycert.pfx",
                "packageThumbprint": "ABCABCABCABC123123123123",
                "publisherId": "CN=FakeCorp.com, L=Redmond, S=Washington, C=US"
            }
        }
    }
    

Es gibt auch Unterstützung zu kombinieren, Kommandozeilen-Parameter und Parameter in der Datei build.json. Werte aus der Befehlszeilenargumente erhalten Vorrang.

# Ein Zertifikat Schlüssel und Zeichen Cordova Windows Apps erstellen

Anmeldung ist erforderlich zum Verteilen und installieren Windows Store apps. Dieser Prozeß wird normalerweise von Visual Studio behandelt, wenn Sie ein Paket für Freigabe bereitstellen. Wir müssen unsere eigene Zertifikate erstellen, um Tmhis ohne Visual Studio zu tun.

Zum Erstellen von Zertifikaten müssen wir [makecert.exe](https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx) util.c verwenden Dieses Tool im Lieferumfang von Windows SDK und finden Sie unter `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x64` oder `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x86`.

Das erste, was, das wir tun müssen, was ist einen Root-Schlüssel zum Signieren unsere app zu erstellen.

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

Um zu verstehen was Makecert tut, ist hier eine kurze Erläuterung was tun Parameter:

  * -n "CN=FakeCorp.com": Dies ist die [x. 509](http://en.wikipedia.org/wiki/X.509) -Zertifikatantragstellername. In diesem Beispiel ist es **C**Ommon**N**ame=FakeCorp.com.
  * -R: erstellt ein [selbstsigniertes Zertifikat](http://en.wikipedia.org/wiki/Self-signed_certificate).
  * -Eku #EKU_VAL #: kommaseparierte erweiterte Schlüsselverwendung OIDs. 
      * 1.3.6.1.5.5.7.3.3 bedeutet, dass das Zertifikat zum Signieren von Code gültig ist. Geben Sie immer diesen Wert, um den Verwendungszweck für das Zertifikat zu begrenzen.
      * 1.3.6.1.4.1.311.10.3.13 bedeutet, dass das Zertifikat signieren Lebensdauer respektiert. In der Regel ist eine Signatur Zeitstempel, solange das Zertifikat zum Zeitpunkt gültigen war Zeitstempel wurde, bleibt die Signatur gültig, selbst wenn das Zertifikat abläuft. Diese EKU zwingt die Signatur unabhängig davon, ob die Signatur Zeitstempel abläuft.
  * -e "01.01.2020": setzt das Ablaufdatum des Zertifikats. 
  * -h 0: setzt max. Höhe der Struktur unterhalb dieses Zertifikat auf 0 zu verhindern, dass das Zertifikat als eine Certification Authority (CA), die andere Zertifikate ausstellen kann verwendet werden.
  * -sv FakeCorp.com.pvk: Ausgabe PVK Datei. Windows verwendet PVK-Dateien zum Speichern von privater Schlüsseln zum Signieren von Code.
  * FakeCorp.com.cer: Ausgabedatei Zertifikat. CER-Datei wird verwendet, um die x. 509-Zertifikatsspeicher.

Nach dem Ausführen von Makecert zum ersten Mal, geben Sie ein Kennwort für den privaten auf dem Bildschirm, der eingeblendet wird:

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

Sobald Pvk und Cer-Datei erstellt wurde, müssen wir eine Pfx-Datei aus dieser Zertifikate zu erstellen. Eine (persönliche Austauschformat) Pfx-Datei enthält eine Vielzahl von kryptografischen Informationen, z. B. Zertifikate, Wurzel-Zertifikate, Zertifikatketten und privaten Schlüssel. Um die Zertifikate zu packen, wir verwenden die ein Tool namens [pvk2pfx](https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx). Dieses Tool im Lieferumfang von Windows SDK und finden Sie unter `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` oder`%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

Wo:

  * pvk: Eingabedatei Pvk
  * pi: Pvk-Passwort
  * spc: Eingabedatei Cert
  * pfx: Ausgabedateinamen Pfx
  * po: Pfx Passwort; Pvk-Kennwort Wenn nicht identisch

Wenn wir dieses Pfx-Datei build.json-Datei zur Verfügung stellen, haben wir die folgende Fehlermeldung: "die Schlüsseldatei kann passwortgeschützt sein. Um dies zu beheben, versuchen, importieren Sie das Zertifikat in den persönlichen Zertifikatspeicher des aktuellen Benutzers manuell. ". Um es zu importieren, müssen wir [Certutil](https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx) eine Admin-Eingabeaufforderung verwenden:

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

Wo:

  * user: "aktuellen Benutzer" gibt privaten [Speicher](../../../cordova/storage/storage.html)
  * p: Kennwort für die Pfx-Datei
  * importPfx: Name der Pfx-Datei

Einmal installiert, ist die nächste Schritt build.json PackageThumbprint und PackageCertificateKeyFile hinzu. Um die PackageThumbprint zu finden, suchen Sie nach den CommonName haben wir das Zertifikat zugeordnet:

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

Sobald diese Endwerte bereitgestellt werden. Cordova sollte erfolgreich packen und signieren die app.
