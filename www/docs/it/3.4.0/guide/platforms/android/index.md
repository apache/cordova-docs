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

# Guida piattaforma Android

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire Cordova apps per dispositivi Android. Si cammina attraverso il processo di installare Android SDK, aprendo un progetto Android in Eclipse SDK e distribuendo un emulatore o dispositivo. Devi seguire questa guida per installare almeno il SDK di Android, indipendentemente dal flusso di lavoro che si sta seguendo. (Entrambi i workflow *Web progetto Dev* e *Nativo Dev Platform* richiedono il SDK di Android essere installato e accessibile tramite il percorso).

Vedere la seguente per informazioni più dettagliate specifiche della piattaforma:

*   Android configurazione
*   Visualizzazioni Web Android
*   Plugin Android
*   L'aggiornamento di Android
*   Android strumenti da riga di comando

Gli strumenti della riga di comando qui sopra si riferiscono a versioni precedenti alla 3.0 di Cordova. Per informazioni sull'interfaccia corrente, vedere l'interfaccia della riga di comando.

## Requisiti e supporto

Vedere i [requisiti di sistema][1] per il SDK di Android.

 [1]: http://developer.android.com/sdk/index.html

Cordova supporta Android 2.2, 2.3 e 4. x. Come regola generale, le piattaforme sono obsoleti come essi tuffo sotto il 5% di Google [dashboard di distribuzione][2].

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

Gli sviluppatori devono utilizzare il `cordova` utilità in combinazione con il SDK di Android. L'interfaccia della riga di comando per informazioni, vedere come installarlo, aggiungere progetti, quindi compilare e distribuire un progetto.

Installare il SDK di Android da [Developer.Android.com/SDK][3]. il sdk di android è distribuito come un ' adt-bundle -<os>-<arch>-<ver>' file. Su windows, l'adt-bundle è confezionato con un programma di installazione. Su OSX e Linux, semplicemente scompattare l'adt-bundle nel percorso si memorizzano gli strumenti di sviluppo. [Informazioni dettagliate sull'installazione di Android SDK possono essere trovati qui][4]

 [3]: http://developer.android.com/sdk/
 [4]: http://developer.android.com/sdk/installing/bundle.html

Per strumenti da riga di comando di Cordova a lavorare, è necessario includere il SDK `tools` e `platform-tools` le directory nel tuo ambiente PATH. Su Mac, è possibile utilizzare un editor di testo per creare o modificare il `~/.bash_profile` file, aggiungendo una riga come la seguente, a seconda di dove viene installato il SDK:

    Export PATH = ${PATH}: / / adt-bundle/sdk/piattaforma-strumenti di sviluppo: / sviluppo/adt-bundle/sdk/tools


Questo espone strumenti SDK in windows terminal inaugurato di recente. In caso contrario eseguire questo per renderli disponibili nella sessione corrente:

    $ fonte ~/.bash_profile


Per modificare l'ambiente del percorso su Windows 7:

*   Fare clic su **Start nell'angolo inferiore sinistro del desktop** , tasto destro del mouse su **Computer**, quindi fare clic su **proprietà**.

*   Fare clic su **Impostazioni di sistema avanzate** nella colonna a sinistra.

*   Nella finestra di dialogo risultante, premere **Le variabili di ambiente**.

*   Selezionare la variabile **PATH** e premere **Modifica**.

*   Aggiungere quanto segue al percorso basato su cui è installato il SDK, per esempio:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools


*   Salvare il valore e chiudere le due finestre di dialogo.

Potrebbe essere necessario abilitare Java e Ant. Apri un prompt dei comandi e digitare `java` e anche di tipo `ant` . Aggiungere al percorso qualunque non riescono ad eseguire:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin


## Aprire un progetto in SDK

Uso il `cordova` utility per impostare un nuovo progetto, come descritto in The Cordova le Command-Line Interface. Ad esempio, in una directory del codice sorgente:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build


Una volta creato, ecco come utilizzare il SDK per modificarlo:

*   Avviare l'applicazione di **Eclipse** .

*   Selezionare la voce di menu **Nuovo progetto** .

*   Scegliere **Progetto Android da codice esistente** nella finestra di dialogo risultante e premere **avanti**: ![][5]

*   Passare a `hello` , o qualunque directory creata per il progetto, poi per il `platforms/android` sottodirectory.

*   Assicurarsi che sia `hello` e `hello-CordovaLib` progetti sono selezionati per essere importati. Il `hello-CordovaLib` progetto è necessaria a partire da Cordova 3.3.0 perché Cordova è ora usato come una libreria di Android invece di un file. jar.

*   Premere **fine**.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Una volta che si apre la finestra di Eclipse può apparire una rossa **X** per indicare problemi irrisolti. Se è così, segui questi passaggi aggiuntivi:

*   Tasto destro del mouse sulla directory del progetto.

*   Nella finestra di dialogo **Proprietà** , selezionare **Android** dal riquadro di spostamento.

*   Per il progetto di costruire la destinazione, selezionare il massimo livello di API di Android che è stato installato.

*   Fare clic su **OK**.

*   Dal menu **progetto** , selezionare **Clean** . Questo dovrebbe correggere tutti gli errori nel progetto.

## Distribuire all'emulatore

È possibile utilizzare il `cordova` utility per eseguire un'applicazione in un emulatore, o può essere eseguito all'interno del SDK. Ad ogni modo, il SDK in primo luogo deve essere configurato per almeno un dispositivo di visualizzazione. A tale scopo, utilizzare l'Android SDK Manager, un'applicazione Java che viene eseguita separatamente da Eclipse. Ci sono due modi per aprirlo:

*   Eseguire `android` sulla riga di comando.

*   All'interno di Eclipse, premere l'icona della barra degli strumenti:

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

Una volta aperto, l'Android SDK Manager visualizza varie librerie di runtime:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

Scegliere **Strumenti → gestione AVDs** (dispositivi Android virtuale), quindi scegliere qualsiasi elemento da **Definizioni di dispositivo** nella finestra di dialogo risultante:

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

A questo punto è possibile utilizzare il `cordova` utility per distribuire l'applicazione nell'emulatore dalla riga di comando:

        $ cordova emulate android


Se invece si lavora all'interno di Eclipse, il progetto di fare clic destro e scegliere **Esegui come → applicazione Android**. Può essere chiesto di specificare un AVD se nessuno è già aperto.

Per un'esperienza più veloce, utilizzare un'immagine di emulatore basato su Intel:

*   Installare uno o più `Intel x86 Atom` Immagini di sistema così come il `Intel Hardware Accelerated Execution Manager` , disponibile sotto **extra**.

*   Eseguire il programma di installazione di Intel, che è disponibile all'interno del vostro Android SDK presso`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   Creare un nuovo AVD con l'obiettivo di impostare un'immagine di Intel.

*   Quando si avvia l'emulatore, assicurarsi che non sono presenti messaggi di errore che indica un guasto per caricare i moduli HAX.

## Distribuire al dispositivo

Per spingere un app direttamente al dispositivo, assicurarsi che il debug USB è attivato sul tuo dispositivo come descritto sul [Sito per sviluppatori Android][12]e utilizzare un cavo mini USB per collegarlo al vostro sistema.

 [12]: http://developer.android.com/tools/device.html

Si può spingere l'app per il dispositivo dalla riga di comando:

        $ cordova run android


Alternativamente all'interno di Eclipse, il progetto di fare clic destro e scegliere **Esegui come → applicazione Android**.
