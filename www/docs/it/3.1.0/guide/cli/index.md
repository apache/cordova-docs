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

# L'interfaccia della riga di comando

Questa guida viene illustrato come creare applicazioni e distribuirle in varie piattaforme mobile nativi utilizzando il `cordova` interfaccia della riga di comando (CLI). Questo strumento consente di creare nuovi progetti, costruirli su diverse piattaforme e farli funzionare all'interno di un emulatore. È possibile utilizzare anche la CLI per inizializzare il codice del progetto, dopo di che è possibile utilizzare SDK platforms vari per svilupparle ulteriormente.

## Prerequisiti

Prima di eseguire eventuali strumenti da riga di comando, è necessario installare il SDK per ogni piattaforma che si desidera fare riferimento. (Vedi le guide di piattaforma per maggiori dettagli).

Per aggiungere il supporto o ricostruire un progetto per qualsiasi piattaforma, è necessario eseguire l'interfaccia della riga di comando dalla stessa macchina che supporta SDK la piattaforma. CLI supporta le seguenti combinazioni:

*   iOS (Mac)
*   Android (Mac, Linux)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox OS (Mac, Linux, Windows)

Su Mac, la riga di comando è disponibile tramite l'applicazione *terminale* . Sul PC, è disponibile come *Prompt dei comandi* sotto *accessori*.

Il più probabile è che si esegue CLI da macchine diverse, più ha senso mantenere un repository di codice sorgente remota, la cui attività si tira per le directory di lavoro locale.

Per installare il `cordova` della riga di comando strumento, attenersi alla seguente procedura:

1.  Scaricare e installare [node. js][1]. Dopo l'installazione, si dovrebbe essere in grado di richiamare `node` o `npm` sulla riga di comando.

2.  Installare il `cordova` utilità. In Unix, prefisso aggiuntiva `sudo` comando potrebbe essere necessario installare l'utilità di sviluppo altrimenti limitato le directory:

        $ sudo npm install -g cordova


    Il log di installazione può produrre errori per qualsiasi disinstallato platform SDK. Dopo l'installazione, si dovrebbe essere in grado di eseguire `cordova` sulla riga di comando.

 [1]: http://nodejs.org/

## Creare l'applicazione

Andare nella directory dove si mantiene il codice sorgente ed eseguire un comando analogo al seguente:

        $ cordova create hello com.example.hello HelloWorld


Esso può richiedere molto tempo per completare il comando, quindi siate pazienti. Eseguire il `cordova -d` per vedere le informazioni sullo stato.

Il primo argomento specifica una directory *Ciao* a essere generato per il progetto. Sua `www` sottodirectory ospita la pagina iniziale dell'applicazione, insieme a diverse risorse sotto `css` , `js` , e `img` , che seguono le convenzioni di denominazione dei file del sviluppo web comuni. La `config.xml` file contiene metadati importanti necessari per generare e distribuire l'applicazione.

Gli altri due argomenti sono opzionali: il `com.example.hello` argomento fornisce il tuo progetto con un identificatore di dominio-stile reverse e il `HelloWorld` fornisce il testo di visualizzazione dell'applicazione. È possibile modificare entrambi questi valori più tardi nella `config.xml` file.

## Aggiungi piattaforme

Tutti i comandi successivi devono essere eseguito all'interno della directory del progetto, o qualsiasi sottodirectory all'interno del proprio ambito:

        $ cd hello


Per poter compilare il progetto, è necessario specificare un insieme di piattaforme di destinazione. La capacità di eseguire questi comandi dipende se la macchina supporta ogni SDK, e se avete già installato ogni SDK. Eseguire uno di questi da un Mac:

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Eseguire una qualsiasi di queste da una macchina Windows, dove *wp* si riferisce a diverse versioni del sistema operativo Windows Phone:

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Eseguire questo per controllare il set corrente di piattaforme:

        $ cordova platforms ls


(Nota del `platform` e `platforms` comandi sono sinonime.)

Eseguire uno dei seguenti comandi per rimuovere una piattaforma sinonimi:

        $ cordova platform remove blackberry10
        $ cordova platform rm android


Esecuzione di comandi per aggiungere o rimuovere colpisce piattaforme il contenuto della directory del progetto *piattaforme* , dove ogni piattaforma specificata appare come una sottodirectory. La directory di origine *www* è riprodotta all'interno di sottodirectory su ogni piattaforma, apparendo ad esempio `platforms/ios/www` o `platforms/android/assets/www` . Per impostazione predefinita, il file di configurazione di ogni piattaforma è impostato per poter accedere a tutte le API di Cordova.

Se lo si desidera, è possibile utilizzare un SDK a questo punto aprire il progetto creato. Tuttavia, tutte le modifiche apportate al progetto all'interno di un effetto SDK il derivato impostato dei beni, non i file sorgente della multipiattaforma originale. Utilizzare questo approccio se si desidera semplicemente inizializzare un progetto. (Vedi le guide di piattaforma per informazioni su come sviluppare applicazioni all'interno di ogni SDK). Leggere se si desidera utilizzare gli strumenti della riga di comando per il ciclo di sviluppo intero.

## Costruire l'App

Per impostazione predefinita, il `cordova create` script genera una scheletrica applicazione web-based in cui home page è il progetto `www/index.html` file. Modificare questa applicazione, tuttavia si desidera, ma qualsiasi inizializzazione deve essere specificato come parte della `deviceready` gestore di eventi, a cui fa riferimento predefinito da `www/js/index.js` . <!-- XREF
(See the Application Development Guide for details.)
XREF -->

Eseguire il comando seguente per costruire in modo iterativo del progetto:

        $ cordova build


Questo genera il codice specifico della piattaforma nell'ambito del progetto `platforms` sottodirectory. Facoltativamente, è possibile limitare l'ambito della compilazione per specifiche piattaforme:

        $ cordova build ios


Il `cordova build` comando è una forma abbreviata per i seguenti, che in questo esempio si rivolge anche a una singola piattaforma:

        $ cordova prepare ios
        $ cordova compile ios


In questo caso, una volta si esegue `prepare` , è possibile utilizzare Apple Xcode SDK come alternativa per modificare e compilare il codice specifico della piattaforma Cordova generato all'interno di `platforms/ios` . È possibile utilizzare lo stesso approccio con SDK altre platforms.

## Testare l'applicazione su un emulatore o un dispositivo

SDK per piattaforme mobili, spesso in bundle con emulatori che eseguire un'immagine del dispositivo, in modo che è possibile lanciare l'applicazione dalla schermata iniziale e vedere come esso interagisce con molte caratteristiche di piattaforma. Eseguire un comando come ad esempio il seguente per ricostruire l'app e si mostra all'interno dell'emulatore su una piattaforma specifica:

        $ cordova emulate android


Alcune piattaforme mobili emulano un particolare dispositivo per impostazione predefinita, come l'iPhone per i progetti di iOS. Per altre piattaforme, è necessario prima di associare un dispositivo con un emulatore. (Vedi le guide di piattaforma per dettagli). Ad esempio, si può in primo luogo eseguire il `android` comando per lanciare il SDK di Android, quindi eseguire un'immagine particolare dispositivo, che lancia il secondo il comportamento predefinito:

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Seguente in su con il `cordova emulate` comando aggiorna l'immagine di emulatore per visualizzare l'applicazione più recente, che è ora disponibile per il lancio dalla schermata iniziale:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativamente, è possibile collegare il telefono al computer e testare le app direttamente:

        $ cordova run android


Prima di eseguire questo comando, è necessario impostare il dispositivo per la prova, seguendo procedure che variano per ogni piattaforma. Nel caso di Android, dovete abilitare un'opzione di **debug USB** sul dispositivo e magari aggiungere un driver USB a seconda del vostro sviluppo di Francia. Vedere piattaforma guide per informazioni dettagliate sui requisiti di ogni piattaforma.

## Aggiungere funzionalità

Quando si compila e Mostra un nuovo progetto, l'applicazione predefinita che appare non fa molto molto. È possibile modificare l'applicazione in molti modi per sfruttare tecnologie web standard, ma per le app comunicare strettamente con varie funzionalità a livello di dispositivo, è necessario aggiungere plugins che forniscono accesso al nucleo Cordova APIs.

Un *plugin* è un po ' di codice del componente aggiuntivo che fornisce un'interfaccia per i componenti nativi. È possibile progettare la propria interfaccia plugin, per esempio, quando si progetta un'applicazione ibrida che mescola una Cordova WebView con componenti nativi. (Vedere visualizzazioni Web Embedding e guida allo sviluppo di Plugin per dettagli). Più comunemente, si dovrebbe aggiungere un plugin per abilitare una delle funzionalità a livello di dispositivo base di Cordova <!- - XRIF discusso nella Guida Sviluppo Applicazione e XRIF--> dettagliate nel riferimento all'API.

Il `cordova plugin add` comando richiede di specificare il repository per il codice del plugin. Qui ci sono esempi di funzioni che potrebbero aggiungere:

*   Informazioni di base del dispositivo (dispositivo API):

        $ cordova plugin add org.apache.cordova.device


*   Connessione di rete e batteria eventi:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status


*   Accelerometro, bussola e geolocalizzazione:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation


*   Macchina fotografica, la riproduzione multimediale e cattura:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media


*   Accedere ai file sul dispositivo o rete (File API):

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer


*   Notifica tramite la finestra di dialogo o vibrazione:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration


*   Contatti:

        $ cordova plugin add org.apache.cordova.contacts


*   Globalizzazione:

        $ cordova plugin add org.apache.cordova.globalization


*   Splashscreen:

        $ cordova plugin add org.apache.cordova.splashscreen


*   Finestre aperte del browser nuovo (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser


*   Console di debug:

        $ cordova plugin add org.apache.cordova.console


Uso `plugin ls` (o `plugin list` , o `plugin` da sola) alla Mostra attualmente installato il plugin. Ognuno viene visualizzato tramite il relativo identificatore:

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


Per rimuovere un plugin, si riferiscono ad esso dall'identificatore stesso che compare nell'elenco. Ad esempio, ecco come si vuoi rimuovere il supporto per una console di debug da una versione di rilascio:

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


È possibile rimuovere-lotto o aggiungere plugins specificando più argomenti per ogni comando.

## Personalizzare ogni piattaforma

Mentre Cordova consente di implementare facilmente un app per molte piattaforme diverse, a volte è necessario aggiungere personalizzazioni. In tal caso, non si vuole modificare i file di origine in varie `www` directory all'interno del primo livello `platforms` directory, perché essi stanno regolarmente sostituiti con il primo livello `www` source multipiattaforma della directory.

Invece, il primo livello `merges` directory offre un posto per specificare i beni da distribuire su specifiche piattaforme. Ciascuna sottodirectory specifiche della piattaforma all'interno `merges` rispecchia la struttura di directory del `www` albero dei sorgenti, consente di sovrascrivere o aggiungere i file come necessario. Ad esempio, ecco come si potrebbero usi `merges` per aumentare la dimensione del carattere predefinita per dispositivi Android:

*   Modificare il `www/index.html` file, aggiungendo un link al file CSS aggiuntivo, `overrides.css` in questo caso:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Se si desidera creare un vuoto `www/css/overrides.css` file che vuoi applicare per tutte le build di Android non, impedendo un errore del file mancante.

*   Creare un `css` sottodirectory all'interno di `merges/android` , quindi aggiungere un corrispondente `overrides.css` file. Specificare CSS che esegue l'override la dimensione del carattere di 12 punti predefiniti specificata all'interno di `www/css/index.css` , ad esempio:

        body { font-size:14px; }


Quando si ricostruisce il progetto, la versione di Android presenta la dimensione del carattere personalizzato, mentre gli altri rimangono invariati.

È inoltre possibile utilizzare `merges` per aggiungere file non presenti nell'originale `www` directory. Ad esempio, un'app può incorporare una grafica del *pulsante indietro* nell'interfaccia di iOS, memorizzato `merges/ios/img/back_button.png` , mentre la versione di Android invece può catturare `backbutton` eventi dal corrispondente pulsante hardware.

## Aggiornamento di Cordova

Dopo aver installato il `cordova` utilità, si può sempre aggiornare all'ultima versione eseguendo il seguente comando:

        $ sudo npm update -g cordova


Per installare una versione specifica, utilizzare questa sintassi:

        $ sudo npm installare -g cordova@3.1.0


Eseguire `cordova -v` per vedere la versione attualmente in esecuzione. Eseguire il `npm
info` comando per un elenco più lungo che include la versione corrente, insieme ad altri numeri di versione disponibile:

        $ npm info cordova


Cordova 3.0 è la prima versione a supportare l'interfaccia della riga di comando descritta in questa sezione. Se si sta aggiornando da una versione precedente alla 3.0, è necessario creare un nuovo progetto, come descritto sopra, poi copiare risorse dell'applicazione più anziani nel primo livello `www` directory. Dove applicabile, maggiori dettagli sull'aggiornamento a 3.0 sono disponibili nelle guide piattaforma. Una volta che si aggiorna alla `cordova` interfaccia della riga di comando e uso `npm update` per rimanere attuale, richiede più tempo procedure descritte ci non sono più pertinenti.
