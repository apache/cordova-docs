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

# Guida piattaforma blackBerry 10

Questa guida illustra come impostare il tuo ambiente SDK per distribuire Cordova apps per dispositivi BlackBerry 10. Per le precedenti versioni di BlackBerry, è necessario utilizzare un diverso ambiente SDK e set di strumenti da riga di comando, descritto nella guida alla piattaforma BlackBerry. Per BlackBerry 10, è necessario installare il SDK indipendentemente dal fatto se si desidera utilizzare piattaforme Cordova CLI per lo sviluppo, o un più ristretto set di strumenti da riga di comando piattaforma-centrato. Per un confronto tra i percorsi di due sviluppo, vedere la panoramica. Per informazioni dettagliate su ciascuno, vedere la BlackBerry 10 Shell strumento di guida e l'interfaccia della riga di comando.

## Requisiti

L'ambiente di sviluppo è disponibile su Windows, Mac e Linux.

Gli sviluppatori devono utilizzare il `cordova` utilità in combinazione con il SDK nativo BlackBerry o BlackBerry WebWorks SDK. L'interfaccia della riga di comando per informazioni, vedere come installare `cordova` , aggiungere progetti, quindi creare e distribuire per ogni piattaforma.

Simulatore di dispositivo BlackBerry 10:

*   Processore: Intel dual core 2.0 GHz/AMD Athlon 4200 + o superiore
*   Spazio su disco: 10 GB
*   Memoria RAM: 4 GB
*   Virtualizzazione: uno dei seguenti:
    *   **Tecnologia di virtualizzazione Intel** (VT, VT-x, vmx) → [Intel VT-x supportati elenco processore][1]
    *   **AMD Virtualization** (AMD-V, SVM) (Dal maggio 2006 tutte le CPU AMD includono tranne Sempron AMD-V).

 [1]: http://ark.intel.com/products/virtualizationtechnology

Ulteriori informazioni sui requisiti: [simulatore BB10 avvaliamo][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## Installare il SDK di BlackBerry WebWorks

Scaricare e installare il BlackBerry WebWorks SDK da [developer.blackberry.com][3]

 [3]: https://developer.blackberry.com/html5/download/

L'installatore aggiungerà strumenti da riga di comando al tuo percorso. A seconda del sistema operativo, potrebbe essere necessario aprire una nuova finestra di terminale o nuovamente il login.

## Installare il SDK nativo BlackBerry

Se avete bisogno di compilare codice nativo, ad esempio quando si sviluppa un plugin nativo, è necessario installare il SDK nativo BlackBerry.

Al fine di ottenere il SDK nativo BlackBerry, scaricare e installare l'IDE per BlackBerry disponibile da [developer.blackberry.com][4], quindi utilizzando l'IDE, installare il SDK nativo BlackBerry. Dopo l'installazione, è necessario aggiungere i suoi strumenti da riga di comando al vostro percorso di sistema.

 [4]: http://developer.blackberry.com/native/download/

Su Windows:

*   Andare al **mio Computer → proprietà → avanzate → variabili d'ambiente**.

*   Aggiungere la directory di installazione di SDK nativo al percorso, ad esempio:

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\


Su Mac e Linux:

*   Modificare il `~/.bash_profile` file, aggiungendo una riga come la seguente, a seconda di dove è stato installato il SDK nativo:

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/


    o per il SDK nativo 10.2:

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/


*   Eseguire le operazioni seguenti per applicare la modifica nella sessione corrente:

        $ source ~/.bash_profile


Se hai qualsiasi problema ambientale, utilizzando il SDK nativo dalla riga di comando, eseguire il file appropriato per la vostra piattaforma, situato all'interno del percorso di installazione:

*   Su Windows → shell MS-DOS:

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat


*   Su Windows → git shell bash:

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`


*   Su Linux → installato come utente root:

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Su Linux → installato come utente non-root:

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Su Mac:

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## Istituito per firma

Se si desidera testare su un dispositivo o distribuire applicazioni attraverso BlackBerry World, il sistema deve essere setup per la firma del codice.

Per ottenere una chiave di firma, andare a \[BlackBerry chiavi modulo d'ordine\] (https://www.blackberry.com/SignedKeys/codesigning.html).

Selezionare la prima opzione: "per le applicazioni di BlackBerry10 sviluppati utilizzando BlackBerry NDK" e poi accedere o creare un BBID.

Immettere una password e fare clic su "Ottieni Token" per scaricare bbidtoken.csk. Salvare il file nel percorso predefinito per il sistema operativo che verrà visualizzato sulla pagina di download.

Il passo finale è quello di generare un certificato di firma:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## Creare un progetto

Uso il `cordova` utility per impostare un nuovo progetto, come descritto in l'interfaccia della riga di comando. Ad esempio, in una directory del codice sorgente:

        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build


## Distribuire all'emulatore

Se si desidera eseguire un emulatore del dispositivo, scaricare e installare il BlackBerry 10 simulatore.

*   [Scarica][4]
*   [Guida introduttiva][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Prima di testare un'app su un emulatore o un dispositivo, è necessario attivare la modalità di sviluppo.

Lanciare l'immagine di emulatore, quindi scegliere **Impostazioni** dalla schermata iniziale:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Passare al **sicurezza e Privacy → modalità di sviluppo** sezione e attivare l'opzione:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Un ulteriore insieme di utilità della riga di comando sono inclusi quando si configura la piattaforma BlackBerry 10 per il progetto. Il comando riportato di seguito, in questo caso richiamato dalla directory principale del progetto, associa una destinazione denominata *UEM* con l'indirizzo IP visualizzato sopra.

*   Su Windows:

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator


*   Su Mac/Linux:

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator


Quindi, eseguire il `emulate` comando per visualizzare l'app:

        $ cordova emulate blackberry10


## Distribuire al dispositivo

Per distribuire un dispositivo, assicurarsi che sia collegato al computer. Abilitare la modalità di sviluppo e ottenere l'indirizzo IP come desribed nella sezione emulatore precedente. Sarà inoltre necessario ottenere il PIN dall'applicazione **Impostazioni** sotto **circa → Hardware**:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Eseguire l'utilità della riga di destinazione per associare un nome a un indirizzo IP, password dispositivo e PIN.

*   Su Windows:

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


*   Su Mac/Linux:

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


dove:

*   `--password`si riferisce alla password per sbloccare il dispositivo.

*   `--pin`si riferisce al dispositivo PIN ottenuti dall'applicazione **Impostazioni** .

Quindi, eseguire il `run` comando per visualizzare l'app:

        $ cordova eseguire blackberry10


Se un token di debug non è ancora impostato per il dispositivo, un messaggio di errore richiede di utilizzare la piattaforma di eseguire script con la password che hai fornito durante la registrazione per chiavi di firma.

*   Su Windows:

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret


*   Su Mac/Linux:

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret


## Debug con WebInspector

Quando il debug sul dispositivo o un emulatore, è possibile eseguire WebInspector in remoto per visualizzare lo stato interno dell'applicazione. Un prompt dei comandi viene visualizzato l'URL che consente di connettersi all'app con un browser web standard. Per ulteriori informazioni, vedere [debug utilizzando WebInspector][9].

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Costruzione di una versione di rilascio

Per impostazione predefinita, esegue il `cordova build` comando crea un file di pacchetto non firmato *bar* adatto per il test su un dispositivo o un simulatore.

Uso `--release` per creare una versione non adatta per la distribuzione attraverso il mondo BlackBerry.

    $ cordova build --release --keystorepass <signing password>


Il `--keystorepass` opzione specifica la password che definito quando si configura il computer per firmare applicazioni.

## Distribuire in altri percorsi

Le istruzioni di cui sopra assumono un dispositivo è collegato tramite USB o un simulatore è in esecuzione sul computer locale. È anche possibile distribuire ad altre posizioni.

Un ulteriore insieme di utilità della riga di comando sono inclusi quando si configura la piattaforma BlackBerry 10 per il progetto. Il comando riportato di seguito, in questo caso richiamato dalla directory principale del progetto, associa una destinazione denominata *emu* con un indirizzo IP.

*   Su Windows:

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret


*   Su Mac/Linux:

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret


Una volta definito l'obiettivo, è possibile fornire al comando di corsa con `--target` :

    $ cordova run blackberry10 --target=emu
