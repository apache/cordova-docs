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

# Guida piattaforma Android

Questa guida illustra come impostare il tuo ambiente SDK per distribuire Cordova apps per dispositivi Android e come eventualmente utilizzare strumenti da riga di comando di Android-centrata nel vostro flusso di lavoro di sviluppo. È necessario installare il SDK di Android indipendentemente dal fatto se si desidera utilizzare questi strumenti centrato piattaforma shell o piattaforme Cordova CLI per lo sviluppo. Per un confronto tra i percorsi di due sviluppo, vedere la panoramica. Per ulteriori informazioni su CLI, vedere l'interfaccia della riga di comando.

## Requisiti e supporto

Cordova per Android richiede il SDK di Android che potrebbe essere installato sul sistema operativo OS X, Linux o Windows. Vedere sul SDK di Android [requisiti di sistema][1].

 [1]: http://developer.android.com/sdk/index.html#Requirements

Cordova supporta Android 4.0. x (a partire dal livello API Android 14) e superiori. Come regola generale, versioni Android diventano non supportati da Cordova come essi tuffo sotto il 5% di Google [dashboard di distribuzione][2]. Android versioni precedenti di API di livello 10, e le versioni 3. x (Honeycomb, livelli API 11-13) cadono significativamente inferiore a quella soglia del 5%.

 [2]: http://developer.android.com/about/dashboards/index.html

## Installare strumenti di Cordova Shell

Se si desidera utilizzare strumenti shell Android-centrata di Cordova in concomitanza con il SDK, scaricare Cordova da [cordova.apache.org][3]. In caso contrario ignorare questa sezione se si prevede di utilizzare lo strumento CLI multipiattaforma descritto in l'interfaccia della riga di comando.

 [3]: http://cordova.apache.org

Il download di Cordova contiene archivi separati per ciascuna piattaforma. Assicurarsi di espandere l'archivio appropriato, `android` in questo caso, all'interno di una directory vuota. L'utility eseguibile pertinenti sono disponibili nel primo livello `bin` directory. (Se necessario per indicazioni più dettagliate, consultare il file **Leggimi** .)

Questi strumenti shell consentono di creare, compilare ed eseguire applicazioni Android. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin. Per dettagli su come sviluppare plugin, vedere applicazione plugin.

## Installare il Java Development Kit (JDK)

Installare il [Java Development Kit (JDK) 7][4] o versioni successive.

 [4]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html

Quando si installa su Windows è necessario anche impostare `JAVA_HOME` ambiente variabile secondo il percorso di installazione del JDK (ad esempio C:\Program Files\Java\jdk1.7.0_75).

## Installare il SDK di Android

Installare gli [strumenti di Android SDK autonomo][5] o [Studio Android][6]. Procceed con `Studio Android` se si prevede di sviluppare nuovo Cordova per Android plugin o utilizzando gli strumenti nativi di eseguire ed eseguire il debug piattaforma Android. In caso contrario, `Android strumenti SDK autonomo` sono sufficienti per creare e distribuire applicazioni Android.

 [5]: http://developer.android.com/sdk/installing/index.html?pkg=tools
 [6]: http://developer.android.com/sdk/installing/index.html?pkg=studio

Istruzioni dettagliate sull'installazione sono disponibili come parte del link di installazione sopra.

Per strumenti da riga di comando di Cordova a lavorare, o CLI che si basa su di loro, è necessario includere la directory di `strumenti` e `strumenti di piattaforma` di SDK nel tuo `percorso`. Su un Mac, è possibile utilizzare un editor di testo per creare o modificare il file `~/.bash_profile` , aggiungendo una riga come la seguente, a seconda di dove viene installato il SDK:

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools


Questa linea in `~/.bash_profile` espone questi strumenti in windows terminal inaugurato di recente. Se la finestra del terminale è già aperta in OSX, o per evitare un logout/login su Linux, eseguire questo per renderli disponibili nella finestra del terminale corrente:

        $ source ~/.bash_profile


Per modificare il `PATH` in ambiente Windows:

1.  Fare clic su **Start nell'angolo inferiore sinistro del desktop** , tasto destro del mouse su **Computer**, quindi selezionare **proprietà**.

2.  Selezionare **Impostazioni di sistema avanzate** nella colonna a sinistra.

3.  Nella finestra di dialogo risultante, premere **Le variabili di ambiente**.

4.  Selezionare la variabile **PATH** e premere **Modifica**.

5.  Aggiungere quanto segue per il `PATH` basato su cui è installato il SDK, per esempio:

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools


6.  Salvare il valore e chiudere le due finestre di dialogo.

## Installare i pacchetti SDK

Aprire Android SDK Manager (ad esempio, tramite terminale: `android`) e installare:

1.  5.1.1 Android (22 API) piattaforma SDK
2.  Versione di Android SDK strumenti di compilazione 19.1.0 o superiore
3.  Supporto Android Repository (extra)

Per ulteriori informazioni, vedere [Installare pacchetti SDK][7] .

 [7]: http://developer.android.com/sdk/installing/adding-packages.html

## Configurare un emulatore

Android sdk non fornisce alcuna istanza di emulatore predefinito per impostazione predefinita. È possibile creare una nuova eseguendo `android` sulla riga di comando. Stampa **Strumenti → gestire AVDs** (dispositivi Android virtuale), quindi scegliere qualsiasi elemento da **Definizioni di dispositivo** nella finestra di dialogo risultante:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Stampa **Creare AVD**, eventualmente modificando il nome, quindi premere **OK** per accettare le modifiche:

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

L'AVD poi appare nell'elenco dei **Dispositivi Android virtuale** :

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Per aprire l'emulatore come applicazione separata, selezionare l'AVD e premere **Start**. Si lancia proprio come farebbe sul dispositivo, con controlli aggiuntivi disponibili per i pulsanti hardware:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

Per un'esperienza più veloce, è possibile utilizzare l' `Accelerazione della macchina virtuale` per migliorare la velocità di esecuzione. Molte moderne CPU forniscono estensioni per eseguire macchine virtuali in modo più efficiente. Prima di utilizzare questo tipo di accelerazione, è necessario stabilire se la CPU del sistema attuale sviluppo, uno supporta le seguenti tecnologie di virtualizzazione:

*   **Tecnologia di virtualizzazione Intel** (VT-x, vmx) → [Intel VT-x supportati elenco processore][12]
*   **AMD Virtualization** (SVM, AMD-V), supportato solo per Linux (dal maggio 2006, tutte le CPU AMD includono AMD-V, ad eccezione di Sempron).

 [12]: http://ark.intel.com/products/virtualizationtechnology

Un altro modo per scoprire se il processore Intel supporta la tecnologia VT-x, si eseguendo l' `Utility di identificazione dei processori Intel`, per `Windows`è possibile scaricarlo dal [Download Center][13]di Intel, o è possibile utilizzare l' [utilità di avvio][14], che è `Indipendente dal sistema operativo`.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Dopo installare ed eseguire la `Intel Processor Identification Utility` per Windows, si otterrà la seguente finestra, al fine di verificare se la tua CPU supporta le tecnologie di virtualizzazione:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

Al fine di accelerare l'emulatore, è necessario scaricare e installare una o più immagini di sistema `Atom Intel x86` , come pure l' `Intel Hardware accelerato l'esecuzione Manager (HAXM)`.

Aprire il vostro Android SDK Manager e selezionare l'immagine di sistema `Atom Intel x86` , per qualsiasi versione che si desidera testare. Poi andare in `extra` selezionare `Intel x86 Emulator Accelerator (HAXM)`e installare questi pacchetti:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

Dopo il download, eseguire il programma di installazione di Intel, che è disponibile all'interno del vostro Android SDK in `Extra/intel/Hardware_Accelerated_Execution_Manager`. **Nota**:`se avete problemi installando il pacchetto, potete trovare ulteriori informazioni e istruzioni passo passo controllare questo` [Articolo Intel][17].

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Installare una o più immagini di sistema `Atom Intel x86` , come pure la `Gestione esecuzione accelerata Hardware di Intel`, disponibile sotto **extra**.

2.  Eseguire il programma di installazione di Intel, che è disponibile all'interno del vostro Android SDK in `Extra/intel/Hardware_Accelerated_Execution_Manager`.

3.  Creare un nuovo AVD con l'obiettivo di impostare un'immagine di Intel.

4.  Quando si avvia l'emulatore, assicurarsi che non sono presenti messaggi di errore che indica un guasto per caricare i moduli HAX.

## Creare un nuovo progetto

A questo punto, per creare un nuovo progetto è possibile scegliere tra le piattaforme CLI strumento descritto in l'interfaccia della riga di comando, o il set di strumenti shell Android-specifiche. All'interno di una directory del codice sorgente, ecco l'approccio CLI:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"


Qui è l'approccio di shell-strumento di basso livello corrispondente per Unix e Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Compilare il progetto

Se si utilizza la CLI in sviluppo, directory di primo livello `www` della directory progetto contiene i file di origine. Eseguire una qualsiasi di queste all'interno della directory di progetto per ricostruire l'app:

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android


Se si utilizza l'Android-shell strumenti specifici nello sviluppo, c'è un approccio diverso. Una volta che si genera il progetto, sorgente dell'app predefinita è disponibile nella sottodirectory `beni/www` . Comandi successivi sono disponibili nella sua sottodirectory di `cordova` .

Il comando di `costruire` pulisce i file di progetto e ricostruisce l'app. Ecco la sintassi per Mac e Windows. La prima coppia di esempi genera informazioni di debug, e la seconda costruisce le apps per il rilascio:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug

        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release


## Distribuire l'applicazione

È possibile utilizzare l'utilità di `cordova` CLI per distribuire l'applicazione nell'emulatore o il dispositivo da riga di comando:

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device


In caso contrario, utilizzare l'interfaccia shell alternativa:

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device


È possibile utilizzare **cordova run android --list** per vedere tutte le destinazioni disponibili e **cordova run android --target=target_name** per eseguire l'applicazione su un dispositivo specifico o l'emulatore (per esempio, `cordova run android --target="Nexus4_emulator"`).

È possibile utilizzare anche **cordova run --help** vedere compilazione supplementari ed eseguire le opzioni.

Questo spinge l'app alla schermata iniziale e si lancia:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png

Quando si `run` l'applicazione, è anche `build` esso. È possibile aggiungere ulteriori `--debug`, `--rilascio`e `--nobuild` flag per controllare come è costruito, o anche se una ricostruzione è necessaria:

        $ /path/to/project/cordova/run --emulator --nobuild


## Altri comandi

Il seguente genera un log dettagliato delle app come funziona:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat


Il seguente pulisce i file di progetto:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat


## Aprire un nuovo progetto in SDK

Una volta che la piattaforma android è aggiunto al progetto, è possibile aprirlo dall'interno [Studio Android][6]:

1.  Lanciare l'applicazione **Android di Studio** .

2.  Selezionare il **Progetto di importazione (Eclipse ADT, Gradle, ecc.)**.

    ![][19]

3.  Selezionare il percorso dove la piattaforma android è memorizzato (`tuo/progetto/platforms/android`).

    ![][20]

4.  Per la questione `Gradle Sync` si può semplicemente rispondere **Sì**.

 [19]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png
 [20]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png

Sono tutti insieme ora e consente di compilare ed eseguire le app direttamente da `Android Studio`.

![][21]

 [21]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png

Vedere [Android Studio Overview][22] ed ed [ed eseguiti dalla Studio Android][23] per maggiori dettagli.

 [22]: http://developer.android.com/tools/studio/index.html
 [23]: http://developer.android.com/tools/building/building-studio.html
