* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guida piattaforma Android

Questa guida illustra come impostare il tuo ambiente SDK per distribuire Cordova apps per dispositivi Android e come eventualmente utilizzare strumenti da riga di comando di Android-centrata nel vostro flusso di lavoro di sviluppo. È necessario installare il SDK di Android indipendentemente dal fatto se si desidera utilizzare questi strumenti centrato piattaforma shell o piattaforme Cordova CLI per lo sviluppo. Per un confronto tra i percorsi di due sviluppo, vedere la panoramica. Per ulteriori informazioni su CLI, vedere l'interfaccia della riga di comando.

## Requisiti e supporto

Cordova per Android richiede il SDK di Android. Vedere sul SDK di Android [requisiti di sistema][1].

 [1]: http://developer.android.com/sdk/index.html

Cordova supporta Android 2.3 (Pan di zenzero, a partire da livello API Android 10). x e 4. x. Come regola generale, versioni Android diventano non supportati da Cordova come essi tuffo sotto il 5% di Google [dashboard di distribuzione][2]. Android versioni precedenti di API di livello 10, e le versioni 3. x (Honeycomb, livelli API 11-13) cadono significativamente inferiore a quella soglia del 5%.

 [2]: http://developer.android.com/about/dashboards/index.html

## Installare strumenti di Cordova Shell

Se si desidera utilizzare strumenti shell Android-centrata di Cordova in concomitanza con il SDK, scaricare Cordova da [cordova.apache.org][3]. In caso contrario ignorare questa sezione se si prevede di utilizzare lo strumento CLI multipiattaforma descritto in l'interfaccia della riga di comando.

 [3]: http://cordova.apache.org

Il download di Cordova contiene archivi separati per ciascuna piattaforma. Assicurarsi di espandere l'archivio appropriato, `android` in questo caso, all'interno di una directory vuota. L'utility eseguibile pertinenti sono disponibili nel primo livello `bin` directory. (Se necessario per indicazioni più dettagliate, consultare il file **Leggimi** .)

Questi strumenti shell consentono di creare, compilare ed eseguire applicazioni Android. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin. Per dettagli su come sviluppare plugin, vedere applicazione plugin.

Installare il SDK di Android da [developer.android.com/sdk][4]. il sdk di android è distribuito come file 'adt - bundle - < os > - < arco > - < ver >'. Su windows, l'adt-bundle è confezionato con un programma di installazione. Su OSX e Linux, semplicemente scompattare l'adt-bundle nel percorso si memorizzano gli strumenti di sviluppo. [Informazioni dettagliate sull'installazione di Android SDK possono essere trovati qui][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

Per strumenti da riga di comando di Cordova al lavoro, o CLI che si basa su di loro, è necessario includere il SDK `tools` e `platform-tools` directory nella vostra `PATH` . Su un Mac, è possibile utilizzare un editor di testo per creare o modificare il `~/.bash_profile` file, aggiungendo una riga come la seguente, a seconda di dove viene installato il SDK:

        Export PATH = ${PATH}: / / adt-bundle/sdk/piattaforma-strumenti di sviluppo: / sviluppo/adt-bundle/sdk/tools
    

Aggiungere i percorsi per `java` e `ant` se necessario. Questa linea in `~/.bash_profile` espone questi strumenti in windows terminal inaugurato di recente. Se la finestra del terminale è già aperta in OSX, o per evitare un logout/login su Linux, eseguire questo per renderli disponibili nella finestra del terminale corrente:

        $ fonte ~/.bash_profile
    

Per modificare il `PATH` ambiente su Windows 7:

1.  Fare clic su **Start nell'angolo inferiore sinistro del desktop** , tasto destro del mouse su **Computer**, quindi selezionare **proprietà**.

2.  Selezionare **Impostazioni di sistema avanzate** nella colonna a sinistra.

3.  Nella finestra di dialogo risultante, premere **Le variabili di ambiente**.

4.  Selezionare la variabile **PATH** e premere **Modifica**.

5.  Aggiungere quanto segue per il `PATH` basato su cui è installato il SDK, per esempio:
    
        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools
        

6.  Salvare il valore e chiudere le due finestre di dialogo.

Potrebbe essere necessario abilitare Java e Ant. Apri un prompt dei comandi e digitare `java` e anche di tipo `ant` . Aggiungere il `PATH` qualunque di questi non riesce a eseguire:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## Aprire un nuovo progetto in SDK

A questo punto, per creare un nuovo progetto è possibile scegliere tra le piattaforme CLI strumento descritto in l'interfaccia della riga di comando, o il set di strumenti shell Android-specifiche. All'interno di una directory del codice sorgente, ecco l'approccio CLI:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

Qui è l'approccio di shell-strumento di basso livello corrispondente per Unix e Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

Ecco come utilizzare il SDK per modificarlo:

1.  Avviare l'applicazione di **Eclipse** .

2.  Selezionare la voce di menu **Nuovo progetto** .

3.  Scegliere **Progetto Android da codice esistente** nella finestra di dialogo risultante e premere **avanti**:
    
    ![][6]

4.  Se si utilizza la CLI, spostarsi il `hello` directory creata per il progetto, poi per il `platforms/android` sottodirectory. Alternativamente, se si utilizza il `create` utilità di shell, semplicemente navigare il `hello` directory.

5.  Premere **fine**.

 [6]: img/guide/platforms/android/eclipse_new_project.png

Una volta che si apre la finestra di Eclipse può apparire una rossa **X** per indicare problemi irrisolti. Se è così, segui questi passaggi aggiuntivi:

1.  Tasto destro del mouse sulla directory del progetto.

2.  Nella finestra di dialogo **Proprietà** , selezionare **Android** dal riquadro di spostamento.

3.  Per il progetto di costruire la destinazione, selezionare il massimo livello di API di Android che è stato installato.

4.  Fare clic su **OK**.

5.  Dal menu **progetto** , selezionare **Clean** . Questo dovrebbe correggere tutti gli errori nel progetto.

## Compilare il progetto

Se si utilizza la CLI nello sviluppo, nella directory del progetto di primo livello `www` directory contiene i file di origine. Eseguire uno di questi all'interno della directory di progetto per ricostruire l'app:

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

Se si utilizza l'Android-shell strumenti specifici nello sviluppo, c'è un approccio diverso. Una volta che si genera il progetto, la sorgente dell'app predefinita è disponibile nella `assets/www` sottodirectory. Comandi successivi sono disponibili nella sua `cordova` sottodirectory.

Il `build` comando pulisce i file di progetto e ricostruisce l'app. Ecco la sintassi per Mac e Windows. La prima coppia di esempi genera informazioni di debug, e la seconda firma le apps per il rilascio:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## Configurare un emulatore

È possibile utilizzare la `cordova` CLI utilità o shell Android-centrata di Cordova strumenti per eseguire un'applicazione in un emulatore. Ad ogni modo, il SDK in primo luogo deve essere configurato per almeno un dispositivo di visualizzazione. A tale scopo, utilizzare l'Android SDK Manager, un'applicazione Java che viene eseguita separatamente da Eclipse. Ci sono due modi per aprirlo:

1.  Eseguire `android` sulla riga di comando.

2.  All'interno di Eclipse, premere l'icona della barra degli strumenti:
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

Una volta aperto, l'Android SDK Manager visualizza varie librerie di runtime:

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

Scegliere **Strumenti → gestione AVDs** (dispositivi Android virtuale), quindi scegliere qualsiasi elemento da **Definizioni di dispositivo** nella finestra di dialogo risultante:

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

Stampa **Creare AVD**, eventualmente modificando il nome, quindi premere **OK** per accettare le modifiche:

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

L'AVD poi appare nell'elenco dei **Dispositivi Android virtuale** :

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

Per aprire l'emulatore come applicazione separata, selezionare l'AVD e premere **Start**. Si lancia proprio come farebbe sul dispositivo, con controlli aggiuntivi disponibili per i pulsanti hardware:

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## Distribuire all'emulatore

A questo punto è possibile utilizzare il `cordova` utilità CLI per distribuire l'applicazione nell'emulatore dalla riga di comando:

        $ cordova emulate android
    

In caso contrario, utilizzare l'interfaccia shell alternativa:

        $ /path/to/project/cordova/run --emulator
    

Invece di basarsi su qualsiasi emulatore è attualmente abilitato all'interno del SDK, è possibile fare riferimento a ciascuno dai nomi che si fornisce:

        $ /path/to/project/cordova/run --target=NAME
    

Questo spinge l'app alla schermata iniziale e si lancia:

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

Quando si `run` l'app, hai anche `build` esso. È possibile aggiungere ulteriori `--debug` , `--release` , e `--nobuild` flag per controllare come è costruito, o anche se una ricostruzione è necessaria:

        $ /path/to/project/cordova/run --emulator --nobuild
    

Se invece si lavora all'interno di Eclipse, il progetto di fare clic destro e scegliere **Esegui come → applicazione Android**. Può essere chiesto di specificare un AVD se nessuno è già aperto.

Per un'esperienza più veloce, è possibile utilizzare il `Virtual Machine Acceleration` per migliorare la velocità di esecuzione. Molte moderne CPU forniscono estensioni per eseguire macchine virtuali in modo più efficiente. Prima di utilizzare questo tipo di accelerazione, è necessario stabilire se la CPU del sistema attuale sviluppo, uno supporta le seguenti tecnologie di virtualizzazione:

*   **Tecnologia di virtualizzazione Intel** (VT-x, vmx) → [Intel VT-x supportati elenco processore][14]
*   **AMD Virtualization** (SVM, AMD-V), supportato solo per Linux (dal maggio 2006, tutte le CPU AMD includono AMD-V, ad eccezione di Sempron).

 [14]: http://ark.intel.com/products/virtualizationtechnology

Un altro modo per scoprire se il vostro processore Intel supporta la tecnologia VT-x, è eseguendo il `Intel Processor Identification Utility` , per `Windows` si può scaricare dal [Download Center][15]di Intel, oppure è possibile utilizzare l' [utilità di avvio][16], che è`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Dopo installare ed eseguire il `Intel Processor Identification Utility` sopra Windows, si otterrà la seguente finestra, al fine di verificare se la tua CPU supporta le tecnologie di virtualizzazione:

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

Al fine di accelerare l'emulatore, è necessario scaricare e installare uno o più `Intel x86 Atom` Immagini di sistema, così come il`Intel Hardware Accelerated Execution Manager (HAXM)`.

Aprire il vostro Android SDK Manager e selezionare la `Intel x86 Atom` immagine di sistema, per qualsiasi versione che si desidera testare. Poi vai su `Extras` e selezionare `Intel x86 Emulator Accelerator (HAXM)` e installare questi pacchetti:

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

Dopo il download, eseguire il programma di installazione di Intel, che è disponibile all'interno del vostro Android SDK presso `extras/intel/Hardware_Accelerated_Execution_Manager` . **Nota**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [articolo di Intel][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Installare uno o più `Intel x86 Atom` Immagini di sistema così come il `Intel Hardware Accelerated Execution Manager` , disponibile sotto **extra**.

2.  Eseguire il programma di installazione di Intel, che è disponibile all'interno del vostro Android SDK presso`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  Creare un nuovo AVD con l'obiettivo di impostare un'immagine di Intel.

4.  Quando si avvia l'emulatore, assicurarsi che non sono presenti messaggi di errore che indica un guasto per caricare i moduli HAX.

## Distribuire al dispositivo

Per spingere un app direttamente al dispositivo, assicurarsi che il debug USB è attivato sul tuo dispositivo come descritto sul [Sito per sviluppatori Android][20]e utilizzare un cavo mini USB per collegarlo al vostro sistema.

 [20]: http://developer.android.com/tools/device.html

È possibile utilizzare questo comando CLI per spingere l'app al dispositivo:

        $ cordova run android
    

... o utilizzare questa interfaccia shell Android-centrata:

        $ /path/to/project/cordova/run --device
    

Con nessun flag specificati, il `run` comando rileva un dispositivo collegato o un emulatore attualmente in esecuzione, se non viene trovato nessun dispositivo, altrimenti viene richiesto di specificare un emulatore.

Per eseguire l'applicazione all'interno di Eclipse, il progetto di fare clic destro e scegliere **Esegui come → applicazione Android**.

## Altri comandi

Il seguente genera un log dettagliato delle app come funziona:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

Il seguente pulisce i file di progetto:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat