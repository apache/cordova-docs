* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guida alla piattaforma Windows

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per creare e distribuire applicazioni Cordova per Windows 8, Windows 8.1 e 8.1 di Windows Phone. Viene illustrato come utilizzare strumenti shell per generare e compilare applicazioni o piattaforme Cordova CLI discusso in l'interfaccia della riga di comando. (Vedi la panoramica per un confronto di queste opzioni di sviluppo). In questa sezione viene illustrato anche come modificare Cordova apps all'interno di Visual Studio. Indipendentemente da quale approccio si prende, è necessario installare Visual Studio SDK, come descritto di seguito.

Per informazioni su come aggiornare progetti esistenti di Windows 8 Cordova, vedere l'aggiornamento di Windows 8.

Finestra telefono 8 (wp8) soggiorni come una piattaforma separata, per dettagli, vedere Guida piattaforma Windows Phone 8.

Cordova WebViews in esecuzione su Windows si basano su Internet Explorer 10 (Windows 8.0) e Internet Explorer 11 (8.1 di Windows e Windows Phone 8.1) come loro motore di rendering, quindi in pratica è possibile utilizzare il debugger potente di IE per testare qualsiasi contenuto web che non richiama Cordova APIs. Il Windows Phone Developer Blog fornisce [consigli utili][1] su come supporto IE insieme paragonabile browser WebKit.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Requisiti e supporto

Sviluppare applicazioni per piattaforma Windows, che è necessario:

*   Una macchina Windows 8.1, 32 o 64 bit (*Home*, *Pro*o *Enterprise* edizioni) con minimo 4 GB di RAM.

*   Per gli emulatori di Windows Phone, Professional edition Windows 8.1 (x64) o superiore e un processore che supporta [Client Hyper-V e il secondo livello indirizzo SLAT (Translation)][2]. Una versione di valutazione di Windows 8.1 Enterprise è disponibile in [Microsoft Developer Network][3].

*   [Visual Studio 2013 per Windows][4] (Espressa o superiore).

 [2]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Fare applicazioni compilate sotto Windows 8.1 *non* eseguire sotto Windows 8.0. Le applicazioni compilate sotto Windows 8.0 sono compatibili con con 8.1.

Seguire le istruzioni a [windowsstore.com][5] presentare all'app di Windows Store.

 [5]: http://www.windowsstore.com/

Per sviluppare applicazioni di Cordova per Windows, si può utilizzare un PC con Windows, ma può anche sviluppare su un Mac, eseguendo un ambiente di macchina virtuale o tramite Boot Camp per la partizione di dual-boot un 8.1 di Windows. Consultare queste risorse per impostare l'ambiente di sviluppo richiesto Windows su un Mac:

*   [VMWare Fusion][6]

*   [Parallels Desktop][7],

*   [Boot Camp][8].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Installare il SDK

Installare la *Ultimate*, *Premium*o *Professional* 2013 edizioni di [Visual Studio][4].

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## Utilizzando strumenti di Cordova Shell

Se si desidera utilizzare strumenti shell di Windows-centrata di Cordova in concomitanza con il SDK, hai due opzioni di base:

*   Accedervi localmente dal progetto codice generato da CLI. Essi sono disponibili nelle `piattaforme/windows/` directory dopo aver aggiunto la piattaforma `windows` come descritto di seguito.

*   Download da una distribuzione separata presso [cordova.apache.org][10]. La distribuzione di Cordova contiene archivi separati per ciascuna piattaforma. Assicurarsi di espandere l'archivio appropriato, `cordova-windows` in questo caso, all'interno di una directory vuota. Il lotto rilevante utilità sono disponibili nella directory `package/bin` . (Se necessario per indicazioni più dettagliate, consultare il file **Leggimi** .)

 [10]: https://www.apache.org/dist/cordova/platforms/

Questi strumenti shell consentono di creare, compilare ed eseguire le applicazioni Windows. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin.

## Creare un nuovo progetto

A questo punto, per creare un nuovo progetto può scegliere tra il multipiattaforma CLI strumento descritto in l'interfaccia della riga di comando, o il set di strumenti di shell di Windows specifici. L'approccio CLI sottostante genera un'app denominata *HelloWorld* una nuova directory di progetto `Ciao` :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows
    

Qui è l'approccio di shell-strumento di basso livello corrispondente:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Compilare il progetto

Se si utilizza la CLI nello sviluppo, nella directory del progetto di primo livello `www` directory contiene i file di origine. Eseguire uno di questi all'interno della directory di progetto per ricostruire l'app:

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release
    

Qui è l'approccio di shell-strumento di basso livello corrispondente:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
        C:\path\to\project\cordova\clean.bat
    

## Configurare la versione di Windows di destinazione

Da impostazione predefinita `costruire` comando produce due pacchetti: Windows 8.0 e 8.1 di Windows Phone. Aggiornare Windows pacchetto alla versione 8.1 che la seguente impostazione di configurazione deve essere aggiunto al file di configurazione (`config. xml`).

        <preference name='windows-target-version' value='8.1' />
    

Una volta aggiunto questo comando `costruire` impostazione inizierà a produrre pacchetti Windows 8.1 e 8.1 di Windows Phone.

## Distribuire l'applicazione

Per distribuire il pacchetto di Windows:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default
    

Per distribuire il pacchetto di Windows Phone:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device
    

È possibile utilizzare **cordova run windows --list** per vedere tutte le destinazioni disponibili e **cordova run windows --target=target_name \-- -|-phone** per eseguire l'applicazione su un dispositivo specifico o l'emulatore (per esempio, `cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

È possibile utilizzare anche **cordova run --help** vedere compilazione supplementari ed eseguire le opzioni.

## Aprire il progetto in SDK e distribuire l'applicazione

Una volta che si compila una app di Cordova come descritto sopra, è possibile aprirlo con Visual Studio. I vari comandi di `compilazione` generano un file di Visual Studio di soluzione (*sln*). Aprire il file in Esplora File per modificare il progetto all'interno di Visual Studio:

![][11]

 [11]: img/guide/platforms/win8/win8_sdk_openSLN.png

Il componente `CordovaApp` visualizza all'interno della soluzione e sua directory `www` contiene codice sorgente basato su web, tra cui la home page di `index. html` :

![][12]

 [12]: img/guide/platforms/win8/win8_sdk.png

I controlli sotto il menu principale di Visual Studio consentono di testare o distribuire l'applicazione:

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_deploy.png

Con **Locale macchina** selezionata, premere la freccia verde per installare le app sulla stessa macchina che esegue Visual Studio. Una volta si fa così, l'app compare in elenchi di app di Windows 8:

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runApp.png

Ogni volta che si ricostruisce l'app, viene aggiornata la versione disponibile nell'interfaccia.

Una volta disponibili nei listati di app, tenendo premuto il tasto **CTRL** mentre si selezionano le app ti permette di aggiungerlo alla schermata principale:

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_runHome.png

Si noti che se si apre l'applicazione all'interno di un ambiente di macchina virtuale, potrebbe essere necessario fare clic su negli angoli o lungo i lati delle finestre per avviare applicazioni oppure accedere a funzionalità aggiuntive:

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_run.png

Alternativamente, scegliere l'opzione di distribuzione del **simulatore** per visualizzare l'app come se fossero in esecuzione su un dispositivo tablet:

![][17]

 [17]: img/guide/platforms/win8/win8_sdk_sim.png

A differenza della distribuzione desktop, questa opzione consente di simulare l'orientamento della tavoletta, posizione e variare le impostazioni di rete.

**Nota**: consultare la panoramica per consigli su come utilizzare il SDK o strumenti da riga di comando di Cordova nel vostro flusso di lavoro. Cordova CLI si basa sul codice sorgente della multipiattaforma che ordinariamente sovrascrive i file specifici di piattaforma utilizzati dal SDK. Se si desidera utilizzare il SDK per modificare il progetto, utilizzare gli strumenti di basso livello shell come alternativa alla CLI.