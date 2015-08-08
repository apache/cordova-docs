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

# Amazon fuoco piattaforma OS guida

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire Cordova apps per dispositivi Amazon fuoco OS come il Kindle Fire HDX.

Vedere la seguente per informazioni più dettagliate specifiche della piattaforma:

*   Configurazione di fuoco OS Amazon
*   Amazon fuoco OS visualizzazioni Web
*   Amazon fuoco OS Plugins

## Introduzione

Prendendo di mira la piattaforma Amazon fuoco OS, gli sviluppatori Cordova possono creare ibridi web apps che sfruttano il motore web avanzati integrato in dispositivi Kindle Fire. Amazon WebView API (LCG) è un derivato cromo web runtime esclusivo per OS di fuoco. Un rimpiazzo per il WebView che viene fornito con dispositivi Android, LCG permette di creare l'esecuzione migliore e più potente ibrido web apps fornendo il supporto per un motore JavaScript più veloce (V8), il debug remoto e le ottimizzazioni di hardware per dispositivi Kindle Fire, tra cui un'accelerata 2D Canvas e accesso alle funzionalità di HTML5 non supportate da Android costruito in WebView come: Calc CSS, validazione dei Form, getUserMedia, IndexedDB, Web lavoratori, WebSockets e WebGL.

Per ulteriori informazioni sull'API WebView Amazon, consulta del portale sviluppatore Amazon [pagina applicazioni ibride di HTML5][1]. Per domande su come ottenere iniziato e altre edizioni di sostegno, vedere Amazon Developer Portal [forum - HTML5 ibrido Apps][2].

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## Requisiti e supporto

Lo sviluppo di app di Cordova per Amazon fuoco OS richiede l'installazione di una varietà di file di supporto, compreso tutto il necessario per lo sviluppo di Android, così come Amazon WebView SDK. Controllare la lista qui sotto per il necessario installa:

*   L'interfaccia della riga di comando
*   [Android SDK][3]
*   [Apache Ant][4]
*   [Amazon WebView SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## Installazione

### Android SDK e Apache Ant

Installare il SDK di Android da [developer.android.com/sdk][3]. Altrimenti può essere presentato con una scelta di dove installare il SDK, spostare lo scaricato `adt-bundle` albero ovunque si memorizzare gli strumenti di sviluppo.

Dovrai eseguire Android SDK Manager ( `android` da una riga di comando) almeno una volta prima di iniziare il vostro progetto di Cordova. Assicurarsi di installare la versione più recente di Android SDK Tools e SDK Platform **in particolare livello di API 19**. Portale per sviluppatori Amazon per ulteriori informazioni sull'impostazione di ambiente di sviluppo per dispositivi Kindle Fire OS vedere [impostazione il tuo ambiente di sviluppo][5] .

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

Installare Apache Ant costruire tool [scaricando una distribuzione binaria Ant][6], decompresso in una directory, è possibile fare riferimento a più tardi. Vedere il [manuale di formica][7] per più informazioni.

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

Per strumenti da riga di comando di Cordova a lavorare, è necessario includere il SDK di Android `tools` , `platform-tools` e `apache-ant/bin` le directory nel tuo ambiente PATH.

#### Percorso Mac/Linux

Su Mac, Linux o altre piattaforme Unix-like, è possibile utilizzare un editor di testo per creare o modificare il `~/.bash_profile` file, aggiungendo una riga come la seguente, a seconda di dove sono installate il SDK e la formica:

    Export PATH = ${PATH}: / / adt-bundle/sdk/piattaforma-strumenti di sviluppo: / / adt-bundle/sdk/strumenti di sviluppo: / sviluppo/apache-ant/bin


Questo espone strumenti SDK in windows terminal inaugurato di recente. In caso contrario eseguire questo per renderli disponibili nella sessione corrente:

    $ source ~/.bash_profile


#### Percorso di Windows

Per modificare l'ambiente del percorso su Windows:

*   Fare clic su **Start nell'angolo inferiore sinistro del desktop** , tasto destro del mouse su **Computer**, quindi fare clic su **proprietà**.

*   Fare clic su **Impostazioni di sistema avanzate** nella colonna a sinistra.

*   Nella finestra di dialogo risultante, premere **Le variabili di ambiente**.

*   Selezionare la variabile **PATH** e premere **Modifica**.

*   Aggiungere quanto segue al percorso basato su cui è stato installato il SDK e la formica, ad esempio:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin


*   Salvare il valore e chiudere le due finestre di dialogo.

*   Inoltre devi abilitare Java. Aprire un prompt dei comandi e digitare `java` , se non viene eseguito, aggiungere il percorso dei binari Java al vostro percorso pure. Rendere %JAVA_HOME% sia rivolto verso il JDK installato nella directory. Potrebbe essere necessario aggiungere separatamente variabile di ambiente JAVA_HOME.

        ; %JAVA_HOME%\bin


### Amazon WebView SDK

Al fine di creare app di Cordova la destinazione della piattaforma Amazon fuoco OS, sarà necessario scaricare, scompattare e installare i file di supporto di Amazon WebView SDK. Solo questo passo dovrà essere fatto per il primo progetto di Amazon fuoco OS.

*   Scaricare il SDK di WebView Amazon [Amazon Developer Portal][1].

*   Copia `awv_interface.jar` da SDK scaricato nella directory di lavoro di Cordova. Creare la cartella commonlibs(shown below) se non esiste:

    **Mac/Linux:** `~/.cordova/lib/commonlibs/`

    **Windows:** `%USERPROFILE%\.cordova\lib\commonlibs`

## Crea nuovo progetto per Amazon fuoco OS

Uso il `cordova` utility per impostare un nuovo progetto, come descritto in The Cordova le Command-Line Interface. Ad esempio, in una directory del codice sorgente:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


***Nota:*** La prima volta che la piattaforma amazon-fireos è installata sul vostro sistema, Scarica i file appropriati per la directory di lavoro di Cordova, ma mancherà poi come manca i file di supporto AWV SDK (vedi sopra). Seguire le istruzioni riportate sopra per installare il `awv_interface.jar` , quindi rimuovere e aggiungere nuovamente la piattaforma amazon-fireos al progetto. Solo questo passaggio dovrà essere fatto per il primo progetto di Amazon fuoco OS.

## Distribuire al dispositivo

Per spingere un app direttamente al dispositivo, assicurarsi che il debug USB è attivato sul tuo dispositivo come descritto sul [Sito per sviluppatori Android][8]e utilizzare un cavo mini USB per collegarlo al vostro sistema.

 [8]: http://developer.android.com/tools/device.html

Si può spingere l'app per il dispositivo dalla riga di comando:

    $ cordova eseguire amazon-fireos


Alternativamente all'interno di Eclipse, il progetto di fare clic destro e scegliere **Esegui come → applicazione Android**.

**Nota**: attualmente, testing tramite un emulatore non è supportato per Amazon WebView basati su applicazioni, inoltre le API di Amazon WebView è disponibile solo sui dispositivi antincendio OS. Per ulteriori informazioni, vedere la documentazione [SDK API di Amazon WebView][1] .

### Eseguire flag

Il comando run accetta i parametri facoltativi come specificato nel documento Cordova Command Line Interface, fuoco OS accetta anche un ulteriore `--debug` bandiera che consentirà Developer Tools di Chromium per il debug remoto web.

Per utilizzare gli strumenti per sviluppatori, immettere:

    $ cordova run --debug amazon-fireos


Ciò consentirà gli strumenti client in esecuzione. Può quindi connettersi al client di inoltro porta utilizzando l'Android Debug Bridge (adb) riferendosi al nome del pacchetto dell'applicazione.

Ad esempio:

    ADB tcp:9222 avanti localabstract:com.example.helloworld.devtools


È quindi possibile utilizzare il DevTools tramite un browser basato su Chromium spostandosi a:`http://localhost:9222`.

### Supporto opzionale di Eclipse

Una volta creato, è possibile utilizzare l'eclissi che arriva con il SDK di Android per modificare il progetto. Fate attenzione che le modifiche apportate attraverso Eclipse saranno sovrascritto se si continua a utilizzare gli strumenti della riga di comando Cordova.

*   Avviare l'applicazione di **Eclipse** .

*   Selezionare la voce di menu **Nuovo progetto** .

*   Scegliere **Progetto Android da codice esistente** nella finestra di dialogo risultante e premere **avanti**: ![][9]

*   Passare a `hello` , o qualunque directory creata per il progetto, poi per il `platforms/amazon-fireos` sottodirectory.

*   Eclisse vi mostrerà Ciao Ciao-CorddovaLib - 2 progetti e da aggiungere. Aggiungere entrambi.

*   Premere **fine**.

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Una volta che si apre la finestra di Eclipse può apparire una rossa **X** per indicare problemi irrisolti. Se è così, segui questi passaggi aggiuntivi:

*   Tasto destro del mouse sulla directory del progetto.

*   Nella finestra di dialogo **Proprietà** , selezionare **Android** dal riquadro di spostamento.

*   Per il target di compilazione del progetto, selezionare il livello più alto di Android API (attualmente API livello 19) sia installato.

*   Fare clic su **OK**.

*   Dal menu **progetto** , selezionare **Clean** . Questo dovrebbe correggere tutti gli errori nel progetto.
