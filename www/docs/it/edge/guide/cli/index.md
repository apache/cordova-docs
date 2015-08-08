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

# L'interfaccia della riga di comando

Questa guida viene illustrato come creare applicazioni e distribuirle in varie piattaforme mobile nativi utilizzando il `cordova` interfaccia della riga di comando (CLI). Questo strumento consente di creare nuovi progetti, costruirli su diverse piattaforme ed eseguire su dispositivi reali o all'interno di emulatori. Il CLI è lo strumento principale da utilizzare per il workflow cross-piattaforma descritto nella panoramica. Altrimenti è possibile utilizzare anche la CLI per inizializzare il codice del progetto, poi cambia platforms vari SDK e strumenti per il costante sviluppo di shell.

## Prerequisiti

Prima di eseguire eventuali strumenti da riga di comando, è necessario installare il SDK per ogni piattaforma che si desidera fare riferimento. (Vedi le guide di piattaforma per maggiori dettagli).

Per aggiungere il supporto o ricostruire un progetto per qualsiasi piattaforma, è necessario eseguire l'interfaccia della riga di comando dalla stessa macchina che supporta SDK la piattaforma. CLI supporta le seguenti combinazioni:

*   iOS (Mac)
*   Amazon fuoco OS (Mac, Linux, Windows)
*   Android (Mac, Linux, Windows)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 8 (Windows)
*   Windows (Windows)
*   Firefox OS (Mac, Linux, Windows)

Su Mac, la riga di comando è disponibile tramite l'applicazione *terminale* . Sul PC, è disponibile come *Prompt dei comandi* sotto *accessori*.

**Nota**: per le piattaforme Windows-only, si può ancora fare vostro sviluppo hardware Mac eseguendo Windows in un ambiente di macchina virtuale o in modalità dual-boot. Per le opzioni disponibili, vedere la guida di Windows Phone 8 piattaforma o la guida di piattaforma di Windows.

Il più probabile è che si esegue CLI da macchine diverse, più ha senso mantenere un repository di codice sorgente remota, la cui attività si tira per le directory di lavoro locale.

## L'installazione di Cordova CLI

Lo strumento della riga di comando di Cordova è distribuito come un pacchetto di npm in un formato pronto per l'uso. Non è necessario compilarlo dai sorgenti.

Per installare il `cordova` della riga di comando strumento, attenersi alla seguente procedura:

1.  Scaricare e installare [node. js][1]. Dopo l'installazione, si dovrebbe essere in grado di richiamare `node` e `npm` sulla riga di comando. Se lo si desidera, si può eventualmente utilizzare uno strumento come `nvm` o `nave` per gestire l'installazione di node. js.

2.  Scaricare e installare un [client git][2], se non avete già uno. Dopo l'installazione, si dovrebbe essere in grado di richiamare `git` sulla riga di comando. Anche se serviro ' `git` manualmente, CLI usarlo dietro le quinte per scaricare alcuni attivi quando si crea un nuovo progetto.

3.  Installare il `cordova` modulo utilizzando `npm` utilità di node. js. La `cordova` modulo verrà automaticamente scaricato dalla `npm` utilità.

 [1]: http://nodejs.org/
 [2]: http://git-scm.com/

*   su OS X e Linux:

            $ sudo npm install -g cordova


    Su OS X e Linux, precedono il `npm` comando con `sudo` può essere necessario installare questo sviluppo utilità nel limitato altrimenti le directory come `/usr/local/share` . Se si utilizza lo strumento opzionale nvm/navata o avere accesso in scrittura per la directory di installazione, è possibile omettere il `sudo` prefisso. Esistono [ulteriori suggerimenti][3] sull'utilizzo di `npm` senza `sudo` , se voglia di farlo.

*   su Windows:

            C:\>npm install -g cordova


    Il `-g` bandiera sopra dice `npm` installare `cordova` globalmente. In caso contrario verrà installato nella `node_modules` sottodirectory della directory di lavoro corrente.

    Potrebbe essere necessario aggiungere il `npm` nella directory tuo `PATH` per poter richiamare globalmente installata `npm` moduli. Su Windows, `npm` di solito può essere trovato alla `C:\Users\username\AppData\Roaming\npm` . Su OS X e Linux di solito può essere trovato presso`/usr/local/share/npm`.

    Il log di installazione può produrre errori per qualsiasi disinstallato platform SDK.

    Dopo l'installazione, si dovrebbe essere in grado di eseguire `cordova` sulla riga di comando con senza argomenti e si deve stampare il testo della guida.

 [3]: http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears

## Creare l'applicazione

Andare nella directory dove si mantiene il codice sorgente ed eseguire un comando analogo al seguente:

        $ cordova create hello com.example.hello HelloWorld


Esso può richiedere molto tempo per completare il comando, quindi siate pazienti. Esegue il comando con il `-d` opzione Visualizza informazioni sui suoi progressi.

Il primo argomento *Ciao* specifica una directory ad essere generato per il progetto. Questa directory non dovrebbe già esistere, Cordova si creerà per voi. Sua `www` sottodirectory ospita la pagina iniziale dell'applicazione, insieme a diverse risorse sotto `css` , `js` , e `img` , che seguono le convenzioni di denominazione dei file del sviluppo web comuni. Queste attività verranno memorizzate su file system locale del dispositivo, non servito da remoto. La `config.xml` file contiene metadati importanti necessari per generare e distribuire l'applicazione.

Il secondo argomento `com.example.hello` fornisce il tuo progetto con un identificatore di dominio-stile reverse. Questo argomento è facoltativo, ma solo se si omette anche il terzo argomento, poiché gli argomenti sono posizionali. È possibile modificare questo valore successivamente nella `config.xml` del file, ma essere consapevoli che ci può essere un codice generato di fuori di `config.xml` utilizzando questo valore, ad esempio nomi di pacchetto Java. Il valore predefinito è `io.cordova.hellocordova` , ma è consigliabile che si seleziona un valore appropriato.

Il terzo argomento `HelloWorld` fornisce il titolo di visualizzazione dell'applicazione. Questo argomento è facoltativo. È possibile modificare questo valore successivamente nella `config.xml` del file, ma essere consapevoli che ci può essere un codice generato di fuori di `config.xml` utilizzando questo valore, ad esempio i nomi delle classi di Java. Il valore predefinito è `HelloCordova` , ma è consigliabile che si seleziona un valore appropriato.

## Aggiungi piattaforme

Tutti i comandi successivi devono essere eseguito all'interno della directory del progetto, o qualsiasi sottodirectory all'interno del proprio ambito:

        $ cd hello


Per poter compilare il progetto, è necessario specificare un insieme di piattaforme di destinazione. La capacità di eseguire questi comandi dipende se la macchina supporta ogni SDK, e se avete già installato ogni SDK. Eseguire uno di questi da un Mac:

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Eseguire una qualsiasi di queste da una macchina Windows, dove *wp* si riferisce a diverse versioni del sistema operativo Windows Phone:

        piattaforma di cordova $ aggiungere $ wp8 cordova piattaforma aggiungere windows piattaforma cordova $ aggiungere piattaforma di amazon-fireos $ cordova aggiungere $ android piattaforma cordova aggiungere $ blackberry10 cordova piattaforma aggiungere firefoxos


Eseguire questo per controllare il set corrente di piattaforme:

        $ cordova platforms ls


(Nota del `platform` e `platforms` comandi sono sinonime.)

Eseguire uno dei seguenti comandi per rimuovere una piattaforma sinonimi:

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


Esecuzione di comandi per aggiungere o rimuovere colpisce piattaforme il contenuto della directory del progetto *piattaforme* , dove ogni piattaforma specificata appare come una sottodirectory. La directory di origine *www* è riprodotta all'interno di sottodirectory su ogni piattaforma, apparendo ad esempio `platforms/ios/www` o `platforms/android/assets/www` . Perché CLI costantemente copia i file dalla cartella sorgente *www* , è consigliabile modificare solo questi file e non quelli situati sotto le sottodirectory di *piattaforme* . Se si utilizza il software di controllo versione, è necessario aggiungere questa cartella *www* di origine, insieme con la cartella *si fonde* , al sistema di controllo di versione. (Ulteriori informazioni sulla cartella *si fonde* possono essere trovati nella sezione Personalizza ogni piattaforma sottostante).

**AVVERTENZA**: quando si utilizza la CLI per compilare l'applicazione, è necessario *non* modificare qualsiasi file nella `/platforms/` directory se non sai cosa stai facendo, o se la documentazione specifica altrimenti. I file in questa directory sono ordinariamente sovrascritto quando preparare le applicazioni per la costruzione, o quando vengono reinstallati plugins.

Se volete a questo punto, è possibile utilizzare un SDK come Eclipse o Xcode per aprire il progetto creato. Devi aprire il set derivato dei beni dalla `/platforms/` directory per sviluppare con un SDK. Questo è perché sono archiviati i file di metadati specifici SDK all'interno l'appropriato `/platform/` sottodirectory. (Vedi le guide di piattaforma per informazioni su come sviluppare applicazioni all'interno di ogni IDE). Utilizzare questo approccio se si desidera semplicemente inizializzare un progetto utilizzando la CLI e poi passare a un SDK per lavoro nativo.

Leggere se si desidera utilizzare l'approccio del flusso di lavoro multi-piattaforma (CLI) per il ciclo di sviluppo intero.

## Costruire l'App

Per impostazione predefinita, il `cordova create` script genera una scheletrica applicazione web-based in cui home page è il progetto `www/index.html` file. Modificare questa applicazione, tuttavia si desidera, ma qualsiasi inizializzazione deve essere specificato come parte della `deviceready` gestore di eventi, a cui fa riferimento predefinito da`www/js/index.js`.

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


Alcune piattaforme mobili emulano un particolare dispositivo per impostazione predefinita, come l'iPhone per i progetti di iOS. Per altre piattaforme, è necessario prima di associare un dispositivo con un emulatore.

**Nota**: supporto emulatore non è attualmente disponibile per OS di fuoco di Amazon.

(Vedi le guide di piattaforma per dettagli). Ad esempio, si può in primo luogo eseguire il `android` comando per lanciare il SDK di Android, quindi eseguire un'immagine particolare dispositivo, che lancia il secondo il comportamento predefinito:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Seguente in su con il `cordova emulate` comando aggiorna l'immagine di emulatore per visualizzare l'applicazione più recente, che è ora disponibile per il lancio dalla schermata iniziale:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativamente, è possibile collegare il telefono al computer e testare le app direttamente:

        $ cordova run android


Prima di eseguire questo comando, è necessario impostare il dispositivo per la prova, seguendo procedure che variano per ogni piattaforma. Nei dispositivi Android e Amazon fuoco OS, dovete abilitare un'opzione di **debug USB** sul dispositivo e magari aggiungere un driver USB a seconda del vostro sviluppo di Francia. Vedere piattaforma guide per informazioni dettagliate sui requisiti di ogni piattaforma.

## Aggiungere funzionalità di Plugin

Quando si compila e Mostra un nuovo progetto, l'applicazione predefinita che appare non fa molto molto. È possibile modificare l'applicazione in molti modi per sfruttare tecnologie web standard, ma per le app comunicare strettamente con varie funzionalità a livello di dispositivo, è necessario aggiungere plugins che forniscono accesso al nucleo Cordova APIs.

Un *plugin* è un po ' di codice del componente aggiuntivo che fornisce un'interfaccia per i componenti nativi. È possibile progettare la propria interfaccia plugin, per esempio, quando si progetta un'applicazione ibrida che mescola una Cordova WebView con componenti nativi. (Vedere visualizzazioni Web Embedding e [Guida allo sviluppo di Plugin][6] per dettagli). Più comunemente, è necessario aggiungere un plugin per abilitare una delle caratteristiche fondamentali di Cordova dispositivo-livello dettagliati in riferimento all'API.

 [6]: guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide

A partire dalla versione 3.0, quando si crea un progetto di Cordova non ha alcun plugin presenti. Questo è il nuovo comportamento predefinito. Tutti i plugin che desideri, anche i plugin di nucleo, devono essere aggiunto in modo esplicito.

Un elenco di questi plugin, tra cui il plugin aggiuntivi di terze parti fornito dalla Comunità, può essere trovato nel registro di sistema [plugins.cordova.io][7]. È possibile utilizzare la CLI per la ricerca di plugin da questo registro. Ad esempio, alla ricerca di `bar` e `code` produce un singolo risultato che corrisponde a entrambi i termini come minuscole sottostringhe:

 [7]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


Cercando solo il `bar` termine rendimenti e risultati aggiuntivi:

        cordova-plugin-statusbar - Cordova StatusBar Plugin


Il `cordova plugin add` comando richiede di specificare il repository per il codice del plugin. Ecco alcuni esempi di come si potrebbe utilizzare la CLI per aggiungere funzionalità per l'app:

*   Informazioni di base del dispositivo (dispositivo API):

        $ cordova plugin add cordova-plugin-device


*   Connessione di rete e batteria eventi:

        $ cordova plugin add cordova-plugin-network-information
        $ cordova plugin add cordova-plugin-battery-status


*   Accelerometro, bussola e geolocalizzazione:

        $ cordova plugin add cordova-plugin-device-motion
        $ cordova plugin add cordova-plugin-device-orientation
        $ cordova plugin add cordova-plugin-geolocation


*   Macchina fotografica, la riproduzione multimediale e cattura:

        $ cordova plugin add cordova-plugin-camera
        $ cordova plugin add cordova-plugin-media-capture
        $ cordova plugin add cordova-plugin-media


*   Accedere ai file sul dispositivo o rete (File API):

        $ cordova plugin add cordova-plugin-file
        $ cordova plugin add cordova-plugin-file-transfer


*   Notifica tramite la finestra di dialogo o vibrazione:

        $ cordova plugin add cordova-plugin-dialogs
        $ cordova plugin add cordova-plugin-vibration


*   Contatti:

        $ cordova plugin add cordova-plugin-contacts


*   Globalizzazione:

        $ cordova plugin add cordova-plugin-globalization


*   Splashscreen:

        $ cordova plugin add cordova-plugin-splashscreen


*   Finestre aperte del browser nuovo (InAppBrowser):

        $ cordova plugin add cordova-plugin-inappbrowser


*   Console di debug:

        $ cordova plugin add cordova-plugin-console


**Nota**: il CLI aggiunge codice plugin come appropriato per ogni piattaforma. Se si desidera sviluppare con strumenti di basso livello shell o platform SDK, come discusso nella panoramica, è necessario eseguire l'utilità di Plugman per aggiungere plugin separatamente per ogni piattaforma. (Per ulteriori informazioni, vedere utilizzando Plugman per gestire i plugin).

Uso `plugin ls` (o `plugin list` , o `plugin` da sola) alla Mostra attualmente installato il plugin. Ognuno viene visualizzato tramite il relativo identificatore:

        $ cordova plugin ls    # or 'plugin list'
        [ 'cordova-plugin-console' ]


Per rimuovere un plugin, si riferiscono ad esso dall'identificatore stesso che compare nell'elenco. Ad esempio, ecco come si vuoi rimuovere il supporto per una console di debug da una versione di rilascio:

        $ cordova plugin rm cordova-plugin-console
        $ cordova plugin remove cordova-plugin-console    # same


È possibile rimuovere-lotto o aggiungere plugins specificando più argomenti per ogni comando:

        $ cordova plugin add cordova-plugin-console cordova-plugin-device


## Opzioni avanzate del Plugin

Quando si aggiunge un plugin, diverse opzioni consentono di specificare da dove scaricare il plugin. Gli esempi sopra utilizzano un noto `registry.cordova.io` Registro di sistema e il plugin è specificato dal `id` :

        $ cordova plugin add cordova-plugin-console


Il `id` può anche includere il numero di versione del plugin, dopo un `@` personaggio. Il `latest` versione è un alias per la versione più recente. Ad esempio:

        $ cordova plugin add cordova-plugin-console@latest
        $ cordova plugin add cordova-plugin-console@0.2.1


Se il plugin non è registrato presso `registry.cordova.io` , ma si trova in un altro repository git, è possibile specificare un URL alternativo:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git


Git esempio precedente recupera il plugin dalla fine del ramo principale, ma può essere aggiunto un git-rif alternativo come ad esempio un tag o ramo dopo un `#` personaggio:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0


Se il plugin (e la sua `plugin.xml` file) è in una sottodirectory all'interno della repo git, è possibile specificare con un `:` personaggio. Si noti che il `#` personaggio è ancora necessaria:

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir


È inoltre possibile combinare il git-ref sia nella sottodirectory:

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir


In alternativa, specificare un percorso locale plugin nella directory che contiene il `plugin.xml` file:

        $ cordova plugin add ../my_plugin_dir


## Utilizzando *si fonde* a personalizzare ogni piattaforma

Mentre Cordova consente di implementare facilmente un app per molte piattaforme diverse, a volte è necessario aggiungere personalizzazioni. In tal caso, non si vuole modificare i file di origine in varie `www` directory all'interno del primo livello `platforms` directory, perché essi stanno regolarmente sostituiti con il primo livello `www` source multipiattaforma della directory.

Invece, il primo livello `merges` directory offre un posto per specificare i beni da distribuire su specifiche piattaforme. Ciascuna sottodirectory specifiche della piattaforma all'interno `merges` rispecchia la struttura di directory del `www` albero dei sorgenti, consente di sovrascrivere o aggiungere i file come necessario. Ad esempio, ecco come si potrebbero usi `merges` per aumentare la dimensione del carattere predefinita per dispositivi Android e Amazon fuoco OS:

*   Modificare il `www/index.html` file, aggiungendo un link al file CSS aggiuntivo, `overrides.css` in questo caso:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Se si desidera creare un vuoto `www/css/overrides.css` file che vuoi applicare per tutte le build di Android non, impedendo un errore del file mancante.

*   Creare un `css` sottodirectory all'interno di `merges/android` , quindi aggiungere un corrispondente `overrides.css` file. Specificare CSS che esegue l'override la dimensione del carattere di 12 punti predefiniti specificata all'interno di `www/css/index.css` , ad esempio:

        body { font-size:14px; }


Quando si ricostruisce il progetto, la versione di Android presenta la dimensione del carattere personalizzato, mentre gli altri rimangono invariati.

È inoltre possibile utilizzare `merges` per aggiungere file non presenti nell'originale `www` directory. Ad esempio, un'app può incorporare una grafica del *pulsante indietro* nell'interfaccia di iOS, memorizzato `merges/ios/img/back_button.png` , mentre la versione di Android invece può catturare `backbutton` eventi dal corrispondente pulsante hardware.

## Aiuto comandi

Cordova dispone di un paio di comandi globali, che possono aiutarvi se rimani bloccato o un problema di esperienza. Il `help` comando consente di visualizzare tutti i comandi disponibili di Cordova e la loro sintassi:

    $ cordova help
    $ cordova        # same


Inoltre, è possibile ottenere informazioni più dettagliate su un comando specifico. Ad esempio:

    $ cordova run --help


Il `info` comando produce un elenco di dettagli potenzialmente utili, quali piattaforme attualmente installate e plugins, versioni SDK per ogni piattaforma e versioni di CLI e `node.js` :

    $ cordova info


Esso presenta le informazioni a schermo e catturare l'output in un locale `info.txt` file.

**Nota**: attualmente sono disponibili solo i dettagli su piattaforme Android e iOS.

## Aggiornamento di Cordova e progetto

Dopo aver installato il `cordova` utilità, si può sempre aggiornare all'ultima versione eseguendo il seguente comando:

        $ sudo npm update -g cordova


Per installare una versione specifica, utilizzare questa sintassi:

        $ sudo npm install -g cordova@3.1.0-0.2.0


Eseguire `cordova -v` per vedere quale versione è attualmente in esecuzione. Eseguire il `npm
info` comando per un elenco più lungo che include la versione corrente, insieme ad altri numeri di versione disponibile:

        $ npm info cordova


Cordova 3.0 è la prima versione a supportare l'interfaccia della riga di comando descritta in questa sezione. Se si sta aggiornando da una versione precedente alla 3.0, è necessario creare un nuovo progetto, come descritto sopra, poi copiare risorse dell'applicazione più anziani nel primo livello `www` directory. Dove applicabile, maggiori dettagli sull'aggiornamento a 3.0 sono disponibili nelle guide piattaforma. Una volta che si aggiorna alla `cordova` interfaccia della riga di comando e uso `npm update` per rimanere attuale, richiede più tempo procedure descritte ci non sono più pertinenti.

Cordova 3.0 + possa ancora richiedere varie modifiche alle strutture di directory a livello di progetto e altre dipendenze. Dopo aver eseguito il `npm` comando sopra per aggiornare Cordova stessa, potrebbe essere necessario per assicurare le risorse del progetto conformano ai requisiti dell'ultima versione. Eseguire un comando simile al seguente per ogni piattaforma che si sta costruendo:

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
