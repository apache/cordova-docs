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

# Guida piattaforma blackBerry 10

Questa guida illustra come impostare il vostro ambiente di sviluppo per creare e distribuire applicazioni di Cordova per dispositivi BlackBerry 10. Per le precedenti versioni di BlackBerry, è necessario utilizzare un diverso insieme di strumenti da riga di comando, descritti nella guida piattaforma BlackBerry.

## Requisiti

L'ambiente di sviluppo è disponibile su Windows, Mac e Linux.

Gli sviluppatori devono utilizzare il `cordova` utilità in combinazione con il SDK nativo Blackberry. L'interfaccia della riga di comando per informazioni, vedere come installare `cordova` , aggiungere progetti, quindi creare e distribuire per ogni piattaforma.

## Installare il SDK nativo BlackBerry

il SDK nativo BlackBerry è disponibile da [developer.blackberry.com][1]. Dopo l'installazione, è necessario aggiungere i suoi strumenti da riga di comando al vostro percorso di sistema.

 [1]: http://developer.blackberry.com/native/download/

Su Windows:

*   Andare al **mio Computer → proprietà → avanzate → variabili di ambiente**.

*   Aggiungere la directory di installazione di SDK nativo al percorso, ad esempio:

    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

Su Mac e Linux:

*   Modificare il `~/.bash_profile` file, aggiungendo una riga come la seguente, a seconda di dove è stato installato il SDK nativo:

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Eseguire le operazioni seguenti per applicare la modifica nella sessione corrente:

    $ fonte ~/.bash_profile

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

*   [Scarica][1]
*   [Guida introduttiva][2]

 [2]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Prima di testare un'app su un emulatore o un dispositivo, è necessario attivare la modalità di sviluppo.

Lanciare l'immagine di emulatore, quindi scegliere **Impostazioni** dalla schermata iniziale:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Passare al **sicurezza e Privacy → modalità di sviluppo** sezione e attivare l'opzione:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Quindi, eseguire il `emulate` comando per visualizzare l'app:

    $ cordova emulate blackberry10 --devicepass <password>


## Distribuire al dispositivo

Per distribuire un dispositivo, assicurarsi che il computer è collegato ed è attivata la modalità di sviluppo.

Quindi, eseguire il `run` comando per visualizzare l'app:

    $ cordova run blackberry10 --devicepass <password>


Se un token di debug non è ancora impostata per il dispositivo, un messaggio di errore richiede di fornire la password è definito quando si configura il computer per firmare le applicazioni.

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>


## Debug con WebInspector

Quando il debug sul dispositivo o un emulatore, è possibile eseguire WebInspector in remoto per visualizzare lo stato interno dell'applicazione. Un prompt dei comandi viene visualizzato l'URL che consente di connettersi all'app con un browser web standard. Per ulteriori informazioni, vedere [debug utilizzando WebInspector][5].

 [5]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Costruzione di una versione di rilascio

Per impostazione predefinita, esegue il `cordova build` comando crea un file di pacchetto non firmato *bar* adatto per il test su un dispositivo o un simulatore.

Uso `--release` per creare una versione non adatta per la distribuzione attraverso il mondo BlackBerry.

    $ cordova build --release --keystorepass <signing password>


Il `--keystorepass` opzione specifica la password che definito quando si configura il computer per firmare applicazioni.

## Distribuire in altri percorsi

Le istruzioni di cui sopra assumono un dispositivo è collegato tramite USB o un simulatore è in esecuzione sul computer locale. È anche possibile distribuire ad altre posizioni.

Un ulteriore insieme di utilità della riga di comando sono inclusi quando si configura la piattaforma BlackBerry 10 per il progetto. Il comando riportato di seguito, in questo caso richiamato dalla directory principale del progetto, associa una destinazione denominata *emu* con un indirizzo IP.

*   Su Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   Su Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

Una volta definito l'obiettivo, è possibile fornire al comando di corsa con `--target` :

    $ cordova run blackberry10 --target=emu
