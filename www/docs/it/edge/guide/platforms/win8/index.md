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

# Guida alla piattaforma Windows

Questa Guida Mostra come impostare il vostro ambiente di sviluppo SDK per creare e distribuire applicazioni Cordova per Windows 8, Windows 8.1, 8.1 di Windows Phone e Windows 10 piattaforma App universale. Viene illustrato come utilizzare entrambi strumenti di shell per generare e compilare applicazioni o piattaforme Cordova CLI discusso nell'interfaccia della riga di comando. (Vedere la panoramica per un confronto tra queste opzioni di sviluppo). In questa sezione viene inoltre illustrato come modificare Cordova apps all'interno di Visual Studio. Indipendentemente da quale approccio si prende, è necessario installare Visual Studio SDK, come descritto di seguito.

Per informazioni su come aggiornare progetti esistenti di Windows 8 Cordova, vedere l'aggiornamento di Windows 8.

Finestra telefono 8 (wp8) soggiorni come una piattaforma separata, per dettagli, vedere Guida piattaforma Windows Phone 8.

Cordova WebViews in esecuzione su Windows si basano su Internet Explorer 10 (Windows 8.0) e Internet Explorer 11 (8.1 di Windows e Windows Phone 8.1) come loro motore di rendering, quindi in pratica è possibile utilizzare il debugger potente di IE per testare qualsiasi contenuto web che non richiama Cordova APIs. Il Windows Phone Developer Blog fornisce [consigli utili][1] su come supporto IE insieme paragonabile browser WebKit.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Requisiti e supporto

Sviluppare applicazioni per piattaforma Windows, che è necessario:

*   Una macchina Windows 8.1, 32 o 64 bit (*Home*, *Pro*o *Enterprise* edizioni) con minimo 4 GB di RAM.

*   Windows 8.0, 8.1 o 10, 32 o 64-bit *Home*, *Pro*o *Enterprise* Edition, insieme a Visual Studio 2013 o [Visual Studio 2012 Express][2] . Visual Studio 2015 non è in grado di costruire applicazioni Windows 8.0.

 [2]: http://www.visualstudio.com/downloads

Per sviluppare applicazioni per Windows 8.0 e 8.1 (tra cui Windows Phone 8.1):

*   Windows 8.1 o Windows 10, 32 o 64-bit *Home*, *Pro*o *Enterprise* Edition, insieme a [Visual Studio Express 2013][2] o superiore. Una versione di valutazione di Windows 8.1 Enterprise è disponibile da [Microsoft Developer Network][3].

*   Per gli emulatori di Windows Phone, Windows 8.1 (x64) Professional edition o superiore e un processore che supporta [Client Hyper-V e secondo livello indirizzo traduzione (SLAT)][4]. Una versione di valutazione di Windows 8.1 Enterprise è disponibile da [Microsoft Developer Network][3].

*   [Visual Studio 2013 per Windows][5] (Express o versione successiva).

 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [5]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Per sviluppare applicazioni per Windows 10:

*   Windows 8.1 o Windows 10 Technical Preview 2, 32 - o 64-bit, insieme a [Visual Studio 2015 RC][6] o superiore.

 [6]: http://www.visualstudio.com/preview

Compatibilità con l'app è determinata dal sistema operativo che l'app mirata. Applicazioni sono forwardly-compatibile ma non backwardly-compatibile, quindi non è possibile eseguire un'app destinata a Windows 8.1 8.0, ma un'app creata per 8.0 può essere eseguito su 8.1.

Seguire le istruzioni a [windowsstore.com][7] per inviare l'app a Windows Store.

 [7]: http://www.windowsstore.com/

Per sviluppare applicazioni Cordova per Windows, è possibile utilizzare un PC con Windows, ma si può anche sviluppare su un Mac, tramite l'esecuzione di un ambiente di macchina virtuale o utilizzando Boot Camp per partizione di dual-boot un Windows 8.1. Consultare queste risorse per impostare l'ambiente di sviluppo richiesto Windows su un Mac:

*   [VMWare Fusion][8]

*   [Parallels Desktop][9]

*   [Boot Camp][10]

 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [9]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [10]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Utilizzando strumenti di Cordova Shell

Se si desidera utilizzare strumenti shell di Windows-centrata di Cordova in concomitanza con il SDK, hai due opzioni di base:

*   Accedere localmente da codice di progetto generato da CLI. Sono disponibili nella `piattaforme/windows/` directory dopo aver aggiunto la piattaforma di `windows` come descritto di seguito.

*   Scaricarli da una distribuzione separata presso [cordova.apache.org][11]. La distribuzione di Cordova contiene archivi separati per ciascuna piattaforma. Assicurarsi di espandere l'archivio appropriato, `cordova-windows` in questo caso, all'interno di una directory vuota. Le utilità di rilevanti batch sono disponibili nella directory di `package/bin` . (Se necessario per indicazioni più dettagliate, consultare il file **Leggimi** .)

 [11]: https://www.apache.org/dist/cordova/platforms/

Questi strumenti shell consentono di creare, compilare ed eseguire le applicazioni Windows. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin.

## Installare il SDK

Installare qualsiasi edizione di [Visual Studio][2] la versione sopra elencati requisiti di corrispondenza.

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

Per Windows 10, il programma di installazione di Visual Studio ha un'opzione per installare gli strumenti per compilare applicazioni Windows universale. È necessario assicurarsi che questa opzione è selezionata quando si installa per installare il SDK richiesto.

## Creare un nuovo progetto

A questo punto, per creare un nuovo progetto è possibile scegliere tra lo strumento CLI multipiattaforma descritto in The Command-Line Interface, o il set di strumenti specifici di Windows shell. L'approccio CLI sottostante genera un'app denominata *HelloWorld* all'interno di una nuova directory di progetto `hello` :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


Qui è l'approccio di shell-strumento di basso livello corrispondente:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


Questo progetto è destinato a Windows 8.1 come destinazione predefinita OS. È possibile scegliere come destinazione 8.0 o 10.0 (vedere "Versione Windows di configura destinazione" sotto) per tutte le compilazioni, o si specifica una particolare versione di destinazione durante ogni compilazione.

## Compilare il progetto

Se si utilizza la CLI nello sviluppo, nella directory del progetto di primo livello `www` directory contiene i file di origine. Eseguire uno di questi all'interno della directory di progetto per ricostruire l'app:

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


Qui è l'approccio di shell-strumento di basso livello corrispondente:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


Il `clean` comando aiuta a scovare le directory in preparazione per la prossima `build` :

        C:\path\to\project\cordova\clean.bat


## Configurare la versione di Windows di destinazione

Da impostazione predefinita `build` comando produce due pacchetti: Windows 8.0 e 8.1 di Windows Phone. Aggiornare il pacchetto di Windows alla versione 8.1 che la seguente impostazione di configurazione deve essere aggiunto al file di configurazione (`config. XML`).

        <preference name="windows-target-version" value="8.1" />


Una volta che si aggiunge questo comando di `compilazione` di impostazione inizierà a produrre pacchetti Windows 8.1 e 8.1 di Windows Phone.

### Il parametro --appx

Si può decidere che si vuole costruire una particolare versione dell'applicazione di un particolare sistema operativo di targeting (ad esempio, si potrebbe avere impostare che si desidera indirizzare Windows 10, ma si desidera compilare per Windows Phone 8.1). Per effettuare questa operazione, è possibile utilizzare il parametro `--appx` :

        > cordova build windows -- --appx=8.1-phone


Il sistema di compilazione ignorerà il set di preferenza in config. XML per la versione Windows di destinazione e rigorosamente costruire un pacchetto per Windows Phone 8.1.

I valori validi per la bandiera `--appx` sono `8.1-win`, `8.1-phone`e `uap` (per Windows 10 Universal Apps). Queste opzioni sono valide anche per il comando `cordova run` .

### Considerazioni per la versione Windows di destinazione

10 Windows supporta una nuova modalità "Remote" per applicazioni di Cordova (e applicazioni HTML in generale). Questa modalità consente alle app di molta più libertà rispetto all'uso di manipolazione del DOM e modelli web comuni quali l'uso di script inline, ma non così riducendo l'insieme delle funzionalità dell'app può utilizzare quando inviato al pubblico Windows Store. Per ulteriori informazioni su Windows 10 e modalità remota, consultare la documentazione di [Cordova per Windows 10][13] .

 [13]: win10-support.md.html

Quando si utilizza la modalità remota, gli sviluppatori sono incoraggiati ad applicare una politica di sicurezza contenuto (CSP) per la loro applicazione per impedire attacchi script injection.

## Distribuire l'applicazione

Per distribuire il pacchetto di Windows:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


Per distribuire il pacchetto di Windows Phone:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


È possibile utilizzare **cordova run windows --lista** per vedere tutte le destinazioni disponibili e **cordova run windows --target=target_name \-- -|-telefono** per eseguire l'applicazione su un dispositivo specifico o un emulatore (ad esempio, `cordova run windows --target="Emulator 8.1 720 P 4,7 inch" -- --phone`).

È anche possibile utilizzare **cordova run --help** per vedere compilazione aggiuntive ed eseguire opzioni.

## Aprire il progetto in SDK e distribuire l'applicazione

Una volta che si compila un'applicazione di Cordova come descritto in precedenza, è possibile aprirlo con Visual Studio. I vari comandi di `build` generano un file di soluzione di Visual Studio (*sln*). Aprire il file in Esplora File per modificare il progetto in Visual Studio:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

Il componente `CordovaApp` Visualizza all'interno della soluzione e sua `www` directory contiene il codice di origine basato su web, inclusa la home page di `index. html` :

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

I controlli sotto il menu principale di Visual Studio consentono di testare o distribuire l'app:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

Con **Locale macchina** selezionata, premere la freccia verde per installare l'applicazione sullo stesso computer che esegue Visual Studio. Una volta si esegue questa operazione, l'app viene visualizzato in elenchi di app di Windows 8:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

Ogni volta che si ricostruisce l'app, la versione disponibile nell'interfaccia è aggiornata.

Una volta disponibili negli elenchi di app, tenendo premuto il tasto **CTRL** mentre si selezionano l'app consente di aggiungerla alla schermata principale:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

Si noti che se si apre l'applicazione all'interno di un ambiente di macchina virtuale, potrebbe essere necessario fare clic su negli angoli o lungo i lati delle finestre per passare app o accedere a funzionalità aggiuntive:

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

In alternativa, scegliere l'opzione di distribuzione del **simulatore** per visualizzare l'app come se fosse in esecuzione su un dispositivo tablet:

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

A differenza della distribuzione desktop, questa opzione consente di simulare l'orientamento del tablet, posizione e variare le impostazioni di rete.

**Nota**: consultare la panoramica per un Consiglio su come utilizzare il SDK o strumenti da riga di comando di Cordova nel tuo flusso di lavoro. Cordova CLI si basa sul codice sorgente multipiattaforma che ordinariamente sovrascrive i file specifici della piattaforma utilizzati da SDK. Se si desidera utilizzare il SDK per modificare il progetto, è possibile utilizzare gli strumenti di basso livello shell come alternativa al CLI.
