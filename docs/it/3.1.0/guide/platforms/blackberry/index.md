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

# Guida piattaforma blackBerry

Questa guida viene illustrato come configurare un ambiente SDK per le applicazioni di destinazione per la piattaforma BlackBerry precedenti alla versione 10. Se volete la versione più recente di destinazione, vedere la guida di piattaforma BlackBerry 10. Vedere la seguente per informazioni più dettagliate specifiche della piattaforma:

*   Configurazione di blackBerry
*   L'aggiornamento di BlackBerry
*   BlackBerry Plugins
*   Strumenti della riga di comando di blackBerry

Gli strumenti della riga di comando qui sopra si riferiscono a versioni precedenti alla 3.0 di Cordova. Per informazioni sull'interfaccia corrente, vedere l'interfaccia della riga di comando.

## Requisiti e supporto

Questa versione di BlackBerry non è supportata dalla `cordova` utilità descritto in l'interfaccia della riga di comando, ma da un insieme distinto di strumenti da riga di comando. Scaricare la distribuzione di Cordova da [cordova.apache.org][1].

 [1]: http://cordova.apache.org/#download

Cordova per BlackBerry si basa sul [quadro BlackBerry WebWorks][2], che è disponibile per Windows XP (32-bit), Windows 7 (32-bit e 64-bit) e Mac (OS X 10.6.4+). WebWorks applicazioni può *solo* essere distribuiti sulle seguenti piattaforme BlackBerry:

 [2]: https://bdsc.webapps.blackberry.com/html5

*   BlackBerry OS 5.0 e superiori
*   BlackBerry PlayBook
*   BlackBerry 10 (QNX)

WebWorks richiede il Java Development Kit (JDK). Per Windows, utilizzare la versione a 32 bit del [JDK Oracle][3]. In Java è installato di default su Mac OS X fino alla versione 10.7, che richiede [un'installazione separata][4]. Si richiede inoltre di Apache Ant, che su Mac fa parte dell'installazione Java. La versione di Windows è disponibile da [ant.apache.org][5].

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## Installare il SDK

Scaricare e installare l'appropriato WebWorks SDK per lo sviluppo. BlackBerry PlayBook e BlackBerry Smartphone WebWorks SDK può essere scaricato dai seguenti percorsi.

*   \[BlackBerry PlayBook SDK\] (https://developer.blackberry.com/html5/download/#playbook) e [Adobe Air SDK][6]

*   \[BlackBerry smartphone SDK\] (https://developer.blackberry.com/html5/download/#smartphones)

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## Registrati per chiavi di firma

Se si desidera pubblicare l'applicazione su BlackBerry App World, o su un dispositivo reale, è necessario registrarsi per un set di chiavi di firma codice libero. Per farlo, compila il [Modulo d'ordine tasti BlackBerry][7]. Dopo aver ricevuto le chiavi di firma, essi richiedono l'installazione. Vedere il [sito web BlackBerry HTML5/WebWorks][8] per informazioni.

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Installare Cordova

Scaricare ed estrarre l'ultima copia di [Cordova][1].

## Impostare un nuovo progetto

*   Aprire un terminale da riga di comando e spostarsi dove avete estratto di Cordova.

*   C'è una directory per ogni piattaforma che supporta di Cordova. Passare al `blackberry` directory.

*   Il `blackberry` directory contiene diverse sottodirectory. Il `example` directory contiene un progetto completo di Cordova. Copia il `example` directory in un'altra posizione sul computer e navigare lì.

*   Modificare il `project.properties` file per specificare WebWorks SDK si utilizza. Ad esempio, qui sono le rispettive impostazioni per BlackBerry PlayBook, Smartphone BlackBerry (OS5-7) o BlackBerry 10 (QNX):
    
        playbook.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks SDK per il Tablet 2.1.0.6\\bbwp blackberry.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks Packager qnx.bbwp.dir=C:\\Program Files (x86) \\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9
        

Questi corrispondono ai parametri specificati quando si compila il progetto. La prima volta che si eseguono questi comandi, che generano un'applicazione "HelloWorld":

        Cordova/compilazione playbook cordova/compilazione blackberry cordova/compilazione qnx
    

Insieme al SDK, è inoltre necessario registrare una chiave di firma codice e token di debug. La chiave di firma consente di distribuire applicazioni attraverso il mondo BlackBerry. Il token di debug consente di testare le applicazioni unsigned su un emulatore di BlackBerry o un dispositivo. Non è necessario creare e installare il token di debug da soli; Se la password del keystore, lo script di compilazione crea e installa il token di debug per voi. Per impostare la chiave di firma, visitare il sito Web di BlackBerry per ottenerlo, facendo attenzione a conservare la password specificata. Quindi eseguire il `blackberry-signer` utilità che è incluso con il SDK. BlackBerry fornisce ulteriori informazioni qui:

*   [Registrati per il chiave di firma del codice][9]

*   [Configurare il computer per la firma del codice][10]

*   [guida completa alla creazione di ambiente SDK][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## Distribuire all'emulatore

Emulatori di smartphone blackBerry sono disponibili solo su Windows. Emulatori di blackBerry PlayBook richiedono VMWare Player (Windows) o VMWare Fusion (Mac OS X). WebWorks SDK fornisce un emulatore di default, ma altri emulatori sono [disponibili tramite BlackBerry][12].

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

Dalla directory del progetto, digitare `./cordova/run <target>` , sostituendo `<target>` con uno `qnx` , `playbook` , o `blackberry` . Si noti che per 10 BlackBerry e PlayBook, l'immagine virtuale emulatore deve già avviato.

Vedere le seguenti per ulteriori informazioni:

*   [BlackBerry PlayBook][13]

*   [Smartphone blackBerry][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

Per BlackBerry Playbook, modificare il `project.properties` file per personalizzare il `playbook.sim.ip` e `playbook.sim.password` proprietà. Indirizzo IP dell'emulatore è disponibile attraverso l'applicazione **Impostazioni** sulla schermata home. Abilitare il **sicurezza e Privacy → modalità di sviluppo** opzione per visualizzare l'indirizzo. La password può essere impostata anche nella scheda **sicurezza e Privacy** .

Smartphone BlackBerry, modificare il `project.properties` file per personalizzare il `blackberry.sim.dir` e `blackberry.sim.bin` proprietà. Avete bisogno di fuggire i delimitatori del percorso quando si specificano i percorsi di directory su Windows, ad esempio:`C:\\Program
Files\\BlackBerry\\Simulator`.

Una volta che l'emulatore è installato e in esecuzione, eseguire uno dei seguenti per installare un'applicazione alla schermata iniziale:

        blackberry cordova esecuzione/Cordova/Esegui playbook
    

Se viene richiesto se un dispositivo è collegato al computer, rispondere no.

**Nota:** Su BlackBerry OS 5, l'applicazione viene installata nella `Downloads` directory.

## Distribuire al dispositivo

Per distribuire l'applicazione a un dispositivo, deve essere collegato, e devi essere registrato per codice chiavi di firma, come descritto sopra. Inoltre, per distribuire le applicazioni su BlackBerry PlayBook, il **Impostazioni → sicurezza → modalità di sviluppo** opzione deve essere attivata.

Sul BlackBerry PlayBook, modificare il `project.properties` del file e modificare il seguente per riflettere il dispositivo IP e password come descritto sopra, insieme con la firma chiave password si imposta:

Dalla directory del progetto, digitare `./cordova/run <target>` , sostituendo `<target>` con uno `qnx` , `playbook` , o`blackberry`.

BlackBerry smartphone (OS5-7), specificare la `blackberry.sigtool.password` proprietà come password firma chiave.

Poi dalla directory del progetto, eseguire uno dei comandi che si farebbe per visualizzare le app in un emulatore:

        blackberry cordova esecuzione/Cordova/Esegui playbook
    

Se viene richiesto se un dispositivo è collegato al computer, rispondete sì.

**Nota:** Su BlackBerry OS 5, l'applicazione viene installata nella `Downloads` directory.

## Informazioni aggiuntive

Gli articoli seguenti possono contribuire a risolvere problemi comuni durante lo sviluppo di applicazioni create per BlackBerry WebWorks framework:

*   [BlackBerry WebWorks sviluppo insidie][15]

*   [Consigliate per applicazioni WebWorks di imballaggio][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html