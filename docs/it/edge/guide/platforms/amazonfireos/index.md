---

licenza: licenza uno o più contratti di licenza di collaboratore per l'Apache Software Foundation (ASF). Vedere il file avviso distribuito con questo lavoro per ulteriori informazioni riguardanti la proprietà del copyright. L'ASF licenze questo file a voi con la licenza Apache, versione 2.0 (la "licenza"); non si può usare questo file se non in conformità con la licenza. È possibile ottenere una copia della licenza a

           http://www.apache.org/licenses/License-2.0 se non richiesto dalla legge o concordato per iscritto, il software distribuito sotto la licenza è distribuito su un "AS IS" base, senza garanzie o condizioni di alcun tipo, esplicita o implicita.  Vedere la licenza per la lingua specifica che disciplina le autorizzazioni e limitazioni
    

## con la licenza.

# Amazon fuoco piattaforma OS guida

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire Cordova apps per dispositivi Amazon fuoco OS come il Kindle Fire HDX.

Vedere la seguente per informazioni più dettagliate specifiche della piattaforma:

*   Configurazione di fuoco OS Amazon
*   Amazon fuoco OS visualizzazioni Web
*   Amazon fuoco OS Plugins

## Requisiti e supporto

Lo sviluppo di app di Cordova per Amazon fuoco OS richiede l'Android SDK e Amazon WebView SDK. Verifica i requisiti per questi kit SDK al link qui sotto:

*   [Sistema Android SDK][1]

*   [Amazon WebView SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## Installazione

### Android SDK

Installare il SDK di Android da [developer.android.com/sdk][1]. Altrimenti può essere presentato con una scelta di dove installare il SDK, spostare lo scaricato `adt-bundle` albero ovunque si memorizzare gli strumenti di sviluppo.

Per strumenti da riga di comando di Cordova a lavorare, è necessario includere il SDK `tools` e `platform-tools` le directory nel tuo ambiente PATH.

Su Mac, Linux o altre piattaforme Unix-like, è possibile utilizzare un editor di testo per creare o modificare il `~/.bash_profile` file, aggiungendo una riga come la seguente, a seconda di dove viene installato il SDK:

    Export PATH = ${PATH}: / / adt-bundle/sdk/piattaforma-strumenti di sviluppo: / sviluppo/adt-bundle/sdk/tools
    

Questo espone strumenti SDK in windows terminal inaugurato di recente. In caso contrario eseguire questo per renderli disponibili nella sessione corrente:

    $ fonte ~/.bash_profile
    

Per modificare l'ambiente del percorso su Windows 7:

*   Fare clic su **Start nell'angolo inferiore sinistro del desktop** , tasto destro del mouse su **Computer**, quindi fare clic su **proprietà**.

*   Fare clic su **Impostazioni di sistema avanzate** nella colonna a sinistra.

*   Nella finestra di dialogo risultante, premere **Le variabili di ambiente**.

*   Selezionare la variabile **PATH** e premere **Modifica**.

*   Aggiungere quanto segue al percorso basato su cui è installato il SDK, per esempio:
    
        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools
        

*   Salvare il valore e chiudere le due finestre di dialogo.

Potrebbe essere necessario abilitare Java e Ant. Apri un prompt dei comandi e digitare `java` e anche di tipo `ant` . Aggiungere al percorso qualunque non riescono ad eseguire:

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

### Amazon WebView SDK

Scaricare il SDK di WebView Amazon [Amazon Developer Portal][2].

*   Creare un `libs/` cartella in `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` cartella.
*   Aggiungere il `awv_interface.jar` da SDK scaricato a`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## Aprire un progetto in SDK

Uso il `cordova` utility per impostare un nuovo progetto, come descritto in The Cordova le Command-Line Interface. Ad esempio, in una directory del codice sorgente:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build
    

Una volta creato, ecco come utilizzare il SDK per modificarlo:

*   Avviare l'applicazione di **Eclipse** .

*   Selezionare la voce di menu **Nuovo progetto** .

*   Scegliere **Progetto Android da codice esistente** nella finestra di dialogo risultante e premere **avanti**: ![][3]

*   Passare a `hello` , o qualunque directory creata per il progetto, poi per il `platforms/amazon-fireos` sottodirectory.

*   Premere **fine**.

 [3]: img/guide/platforms//eclipse_new_project.png

Una volta che si apre la finestra di Eclipse può apparire una rossa **X** per indicare problemi irrisolti. Se è così, segui questi passaggi aggiuntivi:

*   Tasto destro del mouse sulla directory del progetto.

*   Nella finestra di dialogo **Proprietà** , selezionare **Android** dal riquadro di spostamento.

*   Per il progetto di costruire la destinazione, selezionare il massimo livello di API di Android che è stato installato.

*   Fare clic su **OK**.

*   Dal menu **progetto** , selezionare **Clean** . Questo dovrebbe correggere tutti gli errori nel progetto.

## Distribuire al dispositivo

Per spingere un app direttamente al dispositivo, assicurarsi che il debug USB è attivato sul tuo dispositivo come descritto sul [Sito per sviluppatori Android][4]e utilizzare un cavo mini USB per collegarlo al vostro sistema.

 [4]: http://developer.android.com/tools/device.html

Si può spingere l'app per il dispositivo dalla riga di comando:

    $ cordova run amazon-fireos
    

Alternativamente all'interno di Eclipse, il progetto di fare clic destro e scegliere **Esegui come → applicazione Android**.

**Nota**: attualmente, testing tramite un emulatore non è supportato per Amazon WebView basati su apps.