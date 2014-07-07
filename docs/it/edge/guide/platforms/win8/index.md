* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Windows 8 piattaforma guida

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire applicazioni di Cordova in Windows 8. Viene illustrato come utilizzare strumenti specifici di Windows 8 shell per generare e compilare applicazioni o piattaforme Cordova CLI discusso in l'interfaccia della riga di comando. (Vedi la panoramica per un confronto di queste opzioni di sviluppo). In questa sezione viene illustrato anche come modificare Cordova apps all'interno di Visual Studio. Indipendentemente da quale approccio si prende, è necessario installare Visual Studio SDK, come descritto di seguito.

Per informazioni su come aggiornare progetti esistenti di Windows 8 Cordova, vedere l'aggiornamento di Windows 8.

Cordova WebViews in esecuzione su Windows 8 si basano su Internet Explorer 10 come loro motore di rendering, quindi in pratica è possibile utilizzare il debugger potente di IE10 per testare qualsiasi contenuto web che non richiama Cordova APIs. Il Blog di Windows Phone Developer fornisce [indicazioni utili][1] su come sostenere IE10 insieme paragonabile browser WebKit.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Requisiti e supporto

Hai bisogno di una delle seguenti combinazioni di OS/SDK, da un disco di installazione o da un file di immagine disco *ISO* :

*   Windows 8.0 o 8.1, 32 o 64 bit *Home*, *Pro*o *Enterprise* edizioni, insieme a [Visual Studio Express 2012][2].

*   8.1 di Windows, 32 o 64 bit *Home*, *Pro*o *Enterprise* edizioni, insieme a [Visual Studio 2013 Pro][2] o superiore. Una versione di valutazione di Windows 8.1 Enterprise è disponibile in [Microsoft Developer Network][3].

 [2]: http://www.visualstudio.com/downloads
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510

Fare applicazioni compilate sotto Windows 8.1 *non* eseguire sotto Windows 8.0. Le applicazioni compilate sotto Windows 8.0 sono compatibili con con 8.1.

<!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

Seguire le istruzioni a [windowsstore.com][4] presentare all'app di Windows Store.

 [4]: http://www.windowsstore.com/

<!-- true? -->

Per sviluppare applicazioni di Cordova per Windows 8, si può utilizzare un PC con Windows, ma può anche sviluppare su un Mac, eseguendo un ambiente di macchina virtuale o tramite Boot Camp per la partizione di dual-boot un Windows 8. Consultare queste risorse per impostare l'ambiente di sviluppo richiesto Windows su un Mac:

*   [VMWare Fusion][5]

*   [Parallels Desktop][6],

*   [Boot Camp][7].

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Utilizzando strumenti di Cordova Shell

Se si desidera utilizzare strumenti shell di Windows 8-centrata di Cordova in concomitanza con il SDK, hai due opzioni di base:

*   Accedervi localmente dal progetto codice generato da CLI. Essi sono disponibili nelle `platforms/windows8/cordova` directory dopo aver aggiunto la `windows8` piattaforma come descritto di seguito.

*   Download da una distribuzione separata presso [cordova.apache.org][8]. La distribuzione di Cordova contiene archivi separati per ciascuna piattaforma. Assicurarsi di espandere l'archivio appropriato, `cordova-windows8\windows8` in questo caso, all'interno di una directory vuota. Il lotto rilevante utilità sono disponibili nel primo livello `bin` directory. (Se necessario per indicazioni più dettagliate, consultare il file **Leggimi** .)

 [8]: http://cordova.apache.org

Questi strumenti shell consentono di creare, compilare ed eseguire applicazioni Windows 8. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin.

## Installare il SDK

Installare la *Ultimate*, *Premium*o *Professional* 2013 edizioni di [Visual Studio][2].

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## Creare un nuovo progetto

A questo punto, per creare un nuovo progetto può scegliere tra il multipiattaforma CLI strumento descritto in l'interfaccia della riga di comando, o il set di strumenti di Windows shell 8-specifica. All'interno di una directory del codice sorgente, questo approccio CLI genera un'app denominata *HelloWorld* all'interno di un nuovo `hello` directory di progetto:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build
    

Qui è l'approccio di shell-strumento di basso livello corrispondente:

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Compilare il progetto

Se si utilizza la CLI nello sviluppo, nella directory del progetto di primo livello `www` directory contiene i file di origine. Eseguire uno di questi all'interno della directory di progetto per ricostruire l'app:

        > cordova build
        > cordova build windows8   # do not rebuild other platforms
    

Se si utilizza i Windows Phone-shell strumenti specifici nello sviluppo, c'è un approccio diverso. Una volta che si genera il progetto, la sorgente dell'app predefinita è disponibile nella `projects\windows8\www` sottodirectory. Comandi successivi sono disponibili nelle `cordova` sottodirectory allo stesso livello.

Il `build` comando pulisce i file di progetto e ricostruisce l'app. Il primo esempio genera informazioni di debug, e la seconda firma le apps per il rilascio:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

Il `clean` comando aiuta a scovare le directory in preparazione per la prossima `build` :

        C:\path\to\project\cordova\clean.bat
    

## Aprire il progetto in SDK e distribuire l'applicazione

Una volta che si compila una app di Cordova come descritto sopra, è possibile aprirlo con Visual Studio. I vari `build` comandi generano un file di Visual Studio di soluzione (*sln*). Aprire il file in Esplora File per modificare il progetto all'interno di Visual Studio:

![][10]

 [10]: img/guide/platforms/win8/win8_sdk_openSLN.png

Il `CordovaApp` componente viene visualizzato all'interno della soluzione e la sua `www` directory contiene il codice sorgente basato su web, tra cui la `index.html` homepage:

![][11]

 [11]: img/guide/platforms/win8/win8_sdk.png

I controlli sotto il menu principale di Visual Studio consentono di testare o distribuire l'applicazione:

![][12]

 [12]: img/guide/platforms/win8/win8_sdk_deploy.png

Con **Locale macchina** selezionata, premere la freccia verde per installare le app sulla stessa macchina che esegue Visual Studio. Una volta si fa così, l'app compare in elenchi di app di Windows 8:

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_runApp.png

Ogni volta che si ricostruisce l'app, viene aggiornata la versione disponibile nell'interfaccia.

Una volta disponibili nei listati di app, tenendo premuto il tasto **CTRL** mentre si selezionano le app ti permette di aggiungerlo alla schermata principale:

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runHome.png

Si noti che se si apre l'applicazione all'interno di un ambiente di macchina virtuale, potrebbe essere necessario fare clic su negli angoli o lungo i lati delle finestre per avviare applicazioni oppure accedere a funzionalità aggiuntive:

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_run.png

Alternativamente, scegliere l'opzione di distribuzione del **simulatore** per visualizzare l'app come se fossero in esecuzione su un dispositivo tablet:

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_sim.png

A differenza della distribuzione desktop, questa opzione consente di simulare l'orientamento della tavoletta, posizione e variare le impostazioni di rete.

**Nota**: consultare la panoramica per consigli su come utilizzare il SDK o strumenti da riga di comando di Cordova nel vostro flusso di lavoro. Cordova CLI si basa sul codice sorgente della multipiattaforma che ordinariamente sovrascrive i file specifici di piattaforma utilizzati dal SDK. Se si desidera utilizzare il SDK per modificare il progetto, utilizzare gli strumenti di basso livello shell come alternativa alla CLI.