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

title: Imballaggio di Windows
---

# Imballaggio di Windows

Si può imparare di più sulla firma e confezionamento di App Store Windows su [MSDN](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx).

Per poter correttamente pacchetto e firmare Windows apps ci sono poche cose necessarie:

  * Un certificato di firma
  * Dettagli di identità, il certificato di firma fornito di corrispondenza

Nel progetto Windows, identità sono conservati in un file denominato appxmanifest. Questo file viene popolato automaticamente ogni volta che un'app di Cordova è costruita. Identità contiene 3 campi importanti.

  * Name
  * Publisher
  * Version

*Name* e *Versoin* possono essere impostati da **config. XML**. *Publisher* può essere fornito come un parametro di compilazione o può essere impostato il file di **build.json** .

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

Un certificato di firma può essere fornito da entrambi CLI o tramite file di build.json. Il certificato relativo flag CLI sono:

  * `--packageCertificateKeyFile` : una volta creato un pacchetto certificato di firma, questo parametro può essere utilizzato per associare il certificato con l'app. Questo flag accetta un percorso di file come argomento. Es. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `--packageThumbprint` : identificazione personale pacchetto viene utilizzato per convalidare l'autenticità del file della chiave di pacchetto certificato. Quando si crea un file di chiave del certificato, questo valore sarà fornito all'utente finale. Es. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

In alternativa, questi valori possono essere specificati utilizzando un file di configurazione di compilazione (build.json) tramite CLI (..--buildConfig). Un file di configurazione di compilazione di esempio:

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
    

C'è anche il supporto di mescolare e abbinare gli argomenti della riga di comando e i parametri nel file di build.json. Valori da argomenti della riga di comando avranno la precedenza.

# Come creare un certificato chiave e segno Cordova windows Apps

La firma è richiesta per la distribuzione e l'installazione di app di Windows Store. Questo processo è normalmente gestito da Visual Studio quando si distribuisce un pacchetto per il rilascio. Per fare tmhis senza Visual Studio abbiamo bisogno di creare i nostri propri certificati.

Per la creazione di certificati abbiamo bisogno di usare [makecert.exe](https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx) util. Questo strumento viene fornito con Windows SDK e può essere trovato sotto `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x64` o `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x86`.

La prima cosa che dobbiamo fare è quello di creare una chiave principale per la firma del nostro app.

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

Per comprendere quali makecert, ecco una breve spiegazione di cosa fanno i parametri:

  * -n "CN=FakeCorp.com": questo è il nome di soggetto del certificato [x. 509](http://en.wikipedia.org/wiki/X.509) . In questo esempio è ame=FakeCorp.com comune**N** **C**.
  * -r: crea un [certificato autofirmato](http://en.wikipedia.org/wiki/Self-signed_certificate).
  * -eku #EKU_VAL #: separati da virgola migliorato l'utilizzo della chiave OID. 
      * 1.3.6.1.5.5.7.3.3 indica che il certificato è valido per la firma del codice. Sempre specificare questo valore per limitare l'uso previsto per il certificato.
      * 1.3.6.1.4.1.311.10.3.13 indica che il certificato rispetta la vita firma. In genere, se una firma è il time stampato, purché il certificato era valido al punto quando è stato aggiunto il time stampato, la firma rimane valida anche se il certificato è scaduto. Questo EKU impone la firma in scadenza indipendentemente dal fatto se la firma è il time stampato.
  * -e "01/01/2020": imposta la data di scadenza del certificato. 
  * -h 0: imposta l'altezza massima dell'albero sotto questo certificato su 0 per impedire che il certificato venga utilizzato come un'autorità di certificazione (CA) che possono emettere altri certificati.
  * -sv FakeCorp.com.pvk: Output PVK file. Windows utilizza i file PVK per memorizzare le chiavi private di firma del codice.
  * FakeCorp.com.cer: File di Output del certificato. CER file è utilizzato per memorizzare il certificato x. 509.

Dopo aver eseguito makecert per la prima volta, è necessario immettere la password privata sulla schermata che si apre:

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

Una volta creato il file pvk e cer, abbiamo bisogno di creare un file pfx da questi certificati. Un file pfx (Personal Exchange Format) contiene una varietà di informazioni di crittografia, quali certificati, certificati di autorità principale, catene di certificati e chiavi private. Per assemblare il CERT, useremo l'uno strumento chiamato [pvk2pfx](https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx). Questo strumento viene fornito con Windows SDK e può essere trovato sotto `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` o`%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

Dove:

  * pvk: nome del file di Input pvk
  * pi: pvk password
  * spc: nome del file di Input cert
  * pfx: nome file di Output pfx
  * po: pfx password; uguale alla password pvk se non fornito

Se mettiamo a disposizione questo file pfx file build.json, avremo il seguente errore: "il file di chiave può essere protetto da password. Per risolvere il problema, provare a importare manualmente il certificato nell'archivio certificati personali dell'utente corrente. ". Per importarlo dobbiamo utilizzare [certutil](https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx) da un prompt di admin:

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

Dove:

  * user: specifica "utente corrente" archivio personale
  * p: Password per file pfx
  * importPfx: nome del file pfx

Una volta installato, il passo successivo consiste nell'aggiungere packageThumbprint e packageCertificateKeyFile a build.json. Al fine di trovare il packageThumbprint, ricerca per il CommonName abbiamo abbiamo associato il certificato:

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

Una volta che questi valori finali sono forniti. Cordova con successo il package e firmare l'app.
