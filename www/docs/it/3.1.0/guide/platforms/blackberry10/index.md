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

    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

Su Mac e Linux:

*   Modificare il `~/.bash_profile` file, aggiungendo una riga come la seguente, a seconda di dove è stato installato il SDK nativo:

    esportazione $ PATH = ${PATH}: / applicazioni/bbndk/host\_10\_1\_0\_132/darwin/x86/usr/bin /

    o per il SDK nativo 10.2:

    esportazione di $ PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Eseguire le operazioni seguenti per applicare la modifica nella sessione corrente:

    $ fonte ~/.bash_profile

## Istituito per firma

Se si desidera testare su un dispositivo o distribuire applicazioni attraverso BlackBerry World, il sistema deve essere setup per la firma del codice.

Per ottenere una chiave di firma, visitare il sito Web di BlackBerry e assicurarsi di mantenere la password specificata. Quindi eseguire il `blackberry-signer` utilità che è incluso con il SDK nativo BlackBerry.

Istruzioni dettagliate possono essere trovate qui:

*   [Registrati per il codice chiave di firma.][2]

*   [Configurare il sistema per la firma del codice.][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Creare un progetto

Uso il `cordova` utility per impostare un nuovo progetto, come descritto in l'interfaccia della riga di comando. Ad esempio, in una directory del codice sorgente:

    $ cordova creare Ciao com.example.hello $ cd $ Ciao cordova piattaforma aggiungere compilazione di cordova $ blackberry10


## Distribuire all'emulatore

Se si desidera eseguire un emulatore del dispositivo, scaricare e installare il BlackBerry 10 simulatore.

*   [Scarica][1]
*   [Guida introduttiva][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Prima di testare un'app su un emulatore o un dispositivo, è necessario aggiungere una *destinazione* al progetto. Ognuno è identificato con un nome univoco e associato a un indirizzo IP. È necessario ottenere l'indirizzo IP dall'emulatore prima di utilizzarlo per visualizzare applicazioni.

Lanciare l'immagine di emulatore, quindi scegliere **Impostazioni** dalla schermata iniziale:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Passare al **sicurezza e Privacy → modalità di sviluppo** sezione, attivare l'opzione e ottenere l'indirizzo IP:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Un ulteriore insieme di utilità della riga di comando sono inclusi quando si configura la piattaforma BlackBerry 10 per il progetto. Il comando riportato di seguito, in questo caso richiamato dalla directory principale del progetto, associa una destinazione denominata *UEM* con l'indirizzo IP visualizzato sopra.

*   Su Windows:

    $ platforms\blackberry10\cordova\target.bat aggiungere simulatore di emu 169.254.0.1 -t

*   Su Mac/Linux:

    $ piattaforme/blackberry10/cordova/destinazione aggiungere simulatore di emu 169.254.0.1 -t

Quindi, eseguire il `emulate` comando per visualizzare l'app:

    $ cordova emulare blackberry10


## Distribuire al dispositivo

Per distribuire un dispositivo, assicurarsi che sia collegato al computer. Abilitare la modalità di sviluppo e ottenere l'indirizzo IP come desribed nella sezione emulatore precedente. Sarà inoltre necessario ottenere il PIN dall'applicazione **Impostazioni** sotto **circa → Hardware**:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Eseguire l'utilità della riga di destinazione per associare un nome a un indirizzo IP, password dispositivo e PIN.

*   Su Windows:

    $ platforms\blackberry10\cordova\target.bat aggiungere mydevice 169.254.0.1 dispositivo di -t - password 123456 - perno FFFF972E

*   Su Mac/Linux:

    $ piattaforme/blackberry10/cordova/destinazione aggiungere mydevice 169.254.0.1 dispositivo di -t - password 123456 - perno FFFF972E

dove:

*   `--password`si riferisce alla password per sbloccare il dispositivo.

*   `--pin`si riferisce al dispositivo PIN ottenuti dall'applicazione **Impostazioni** .

Quindi, eseguire il `run` comando per visualizzare l'app:

    $ cordova eseguire blackberry10


Se un token di debug non è ancora impostato per il dispositivo, un messaggio di errore richiede di utilizzare la piattaforma di eseguire script con la password che hai fornito durante la registrazione per chiavi di firma.

*   Su Windows:

    $ platforms\blackberry10\cordova\run.bat - dispositivo - keystorepass mysecret

*   Su Mac/Linux:

    $ piattaforme/blackberry10/cordova/run - dispositivo - keystorepass mysecret

## Debug con WebInspector

Quando il debug sul dispositivo o un emulatore, è possibile eseguire WebInspector in remoto per visualizzare lo stato interno dell'applicazione. Un prompt dei comandi viene visualizzato l'URL che consente di connettersi all'app con un browser web standard. Per ulteriori informazioni, vedere [debug utilizzando WebInspector][8].

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Costruzione di una versione di rilascio

Per impostazione predefinita, esegue il `cordova build` comando crea un file di pacchetto non firmato *bar* adatto per il test su un dispositivo o un simulatore.

È necessario eseguire una diversa `build` comando per creare una versione non adatta per la distribuzione attraverso il mondo BlackBerry. Non fa affidamento sul `cordova` strumento CLI e invece utilizza la seguente sintassi:

*   Su Windows:

    $ platforms\blackberry10\cordova\build.bat - rilascio - keystorepass mysecret

*   Su Mac/Linux:

    $ piattaforme/blackberry10/cordova/build--rilascio - keystorepass mysecret

Il `--keystorepass` opzione specifica la password che definito quando si configura il computer per firmare applicazioni.
