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

# Guida di piattaforma Windows Phone

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire Cordova apps per dispositivi Windows Phone. Esso si concentra su Windows Phone 8, ma fornisce ulteriori dettagli su come supporto Windows Phone 7.

Viene illustrato come utilizzare sia Windows Phone-shell strumenti specifici per generare e compilare applicazioni o piattaforme Cordova CLI discusso in l'interfaccia della riga di comando. (Vedi la panoramica per un confronto di questi flussi di lavoro di sviluppo). Questa sezione Mostra anche come aprire Cordova apps in modo che è possibile modificarle all'interno di Visual Studio. Indipendentemente da quale approccio si prende, è necessario installare il SDK di Windows Phone, come descritto di seguito.

Vedi quanto segue per dettagli specifici per la piattaforma Windows Phone:

*   Windows Phone Plugins
*   L'aggiornamento di Windows Phone

Per la piattaforma Windows Phone 8, Cordova WebView si basa su Internet Explorer 10 come suo motore di rendering, quindi in pratica è possibile utilizzare il debugger potente di IE10 per testare qualsiasi contenuto web che non richiama Cordova APIs. Il Blog di Windows Phone Developer fornisce [indicazioni utili][1] su come sostenere IE10 insieme paragonabile browser WebKit.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Requisiti e supporto

È necessario il seguente:

*   Una versione a 64 bit di Windows 8 Pro, o un disco di installazione o un file di immagine disco *ISO* . Una versione di valutazione è disponibile in [Microsoft Developer Network][2]. La versione Pro è necessaria eseguire l'emulatore di dispositivo.

*   Il [Windows Phone SDK][3].

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: https://dev.windowsphone.com/en-us/downloadsdk

Per sviluppare applicazioni di Cordova per dispositivi Windows Phone, si può utilizzare un PC con Windows, ma si può anche sviluppare su un Mac, eseguendo un ambiente di macchina virtuale o tramite Boot Camp a dual-boot una partizione Windows. Consultare queste risorse per impostare l'ambiente di sviluppo richiesto Windows su un Mac:

*   **VMWare Fusion**: per impostare la macchina virtuale di Windows 8, seguire le istruzioni fornite da [Microsoft Developer Network][4], quindi vedere la configurazione di VMWare Fusion per informazioni sulla preparazione dell'ambiente virtuale per eseguire l'emulatore fornito con il SDK.

*   **Parallels Desktop**: per impostare la macchina virtuale di Windows 8, seguire le istruzioni fornite da [Microsoft Developer Network][5], quindi, vedere Configurazione di Parallels Desktop per informazioni sulla preparazione dell'ambiente virtuale per eseguire l'emulatore fornito con il SDK.

 [4]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **Boot Camp**: per impostare la partizione di Windows 8, seguire le istruzioni di installazione fornite da [Microsoft Developer Network][6].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

Se si sviluppa su un PC, il processore deve supportare virtualizzazione (*VT-x* su Intel) e [Secondo livello indirizzo SLAT (Translation)][7]. Consultare [l'elenco di Intel dei processori di supporto][8]. Virtualizzazione in genere è disabilitato per impostazione predefinita, quindi è necessario abilitarlo nelle impostazioni del tuo BIOS. Il PC dovrebbe avere almeno 6,5 GB di spazio libero su disco rigido e 4GB di RAM.

 [7]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [8]: http://ark.intel.com/Products/VirtualizationTechnology

## Utilizzando strumenti di Cordova Shell

Se si desidera utilizzare strumenti shell Windows Phone-centrata di Cordova in concomitanza con il SDK, hai due opzioni di base:

*   Accedervi localmente dal progetto codice generato da CLI. Essi sono disponibili nelle `platforms/wp8/cordova` directory dopo aver aggiunto la `wp8` piattaforma come descritto di seguito.

*   Download da una distribuzione separata presso [cordova.apache.org][9]. La distribuzione di Cordova contiene archivi separati per ciascuna piattaforma. Assicurarsi di espandere l'archivio appropriato, `cordova-wp8\wp8` in questo caso, all'interno di una directory vuota. Il lotto rilevante utilità sono disponibili nel primo livello `bin` directory. (Se necessario per indicazioni più dettagliate, consultare il file **Leggimi** .)

 [9]: http://cordova.apache.org

Questi strumenti shell consentono di creare, compilare ed eseguire applicazioni Windows Phone. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin. Vedere applicazione plugin per indicazioni su come sviluppare plugin e Windows Phone Plugins per dettagli specifici per la piattaforma Windows Phone.

## Installare il SDK

Installare l'ultima versione di Windows Phone SDK dall'area **Download** di [dev.windowsphone.com][3]. Si possono anche installare pacchetti di aggiornamento più recenti emulatore.

![][10]

 [10]: img/guide/platforms/wp8/wp8_downloadSDK.png

Dopo aver installato il SDK, è necessario modificare il percorso del sistema per rendere disponibile il SDK a Cordova sulla riga di comando di Windows:

*   Innanzitutto è necessario ottenere la stringa di percorso. Aprire il **File Explorer**, passare a `C:\Windows\Microsoft.NET\Framework` , quindi aprire il framework più recente. Clicca sulla destra del percorso di navigazione per visualizzare la stringa di percorso completo, quindi digitare **CTRL-c** per copiarlo:
    
    ![][11]

*   Quindi è necessario modificare il percorso. Aprire il **Pannello di controllo** all'interno dell'area di **Apps** della schermata iniziale di Windows 8:
    
    ![][12]

*   Aprire la voce **sistema** del pannello di controllo:
    
    ![][13]

*   Scegliere le **Impostazioni di sistema avanzate** dall'elenco a sinistra:
    
    ![][14]

*   Nella parte inferiore del pannello risultante, premere il pulsante **Variabili d'ambiente** :
    
    ![][15]

*   Scegliere il **percorso** tra le **Variabili utente**, quindi premere **Modifica**:
    
    ![][16]
    
    Altrimenti se non è disponibile alcun **percorso** , premere **New** per crearlo.

*   Se esiste già un valore di percorso, aggiungere un punto e virgola e incollare la stringa di percorso copiato precedentemente. Altrimenti semplicemente incollare la stringa:
    
    ![][17]
    
    Qui è un valore di **percorso** del campione che specifica anche la `npm` utilità che è necessario per installare il CLI Cordova:
    
    C:\Users\me\AppData\Roaming\npm;C:\Windows\Microsoft.NET\Framework\v4.0.30319

 [11]: img/guide/platforms/wp8/modpath_copy.png
 [12]: img/guide/platforms/wp8/modpath_control_panel.png
 [13]: img/guide/platforms/wp8/modpath_system.png
 [14]: img/guide/platforms/wp8/modpath_advanced.png
 [15]: img/guide/platforms/wp8/modpath_environment.png
 [16]: img/guide/platforms/wp8/modpath_edit.png
 [17]: img/guide/platforms/wp8/modpath_append.png

## Creare un nuovo progetto

A questo punto, per creare un nuovo progetto può scegliere tra il multipiattaforma CLI strumento descritto in l'interfaccia della riga di comando, o il set di strumenti di shell-specifici di Windows Phone. All'interno di una directory del codice sorgente, ecco l'approccio CLI:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8
    

Qui è l'approccio di shell-strumento di basso livello corrispondente:

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Compilare il progetto

Se si utilizza la CLI nello sviluppo, nella directory del progetto di primo livello `www` directory contiene i file di origine. Eseguire uno di questi all'interno della directory di progetto per ricostruire l'app:

        > cordova build
        > cordova build wp8   # do not rebuild other platforms
    

Se si utilizza i Windows Phone-shell strumenti specifici nello sviluppo, c'è un approccio diverso. Una volta che si genera il progetto, la sorgente dell'app predefinita è disponibile nella `projects\wp8\www` sottodirectory. Comandi successivi sono disponibili nelle `cordova` sottodirectory allo stesso livello.

Il `build` comando pulisce i file di progetto e ricostruisce l'app. Il primo esempio genera informazioni di debug, e la seconda firma le apps per il rilascio:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

Il `clean` comando aiuta a scovare le directory in preparazione per la prossima `build` :

        C:\path\to\project\cordova\clean.bat
    

## Distribuire all'emulatore

A questo punto è possibile utilizzare il `cordova` utilità CLI per distribuire l'applicazione nell'emulatore dalla riga di comando:

        > cordova emulate wp8
    

In caso contrario, utilizzare l'interfaccia shell alternativa:

        C:\path\to\project\cordova\run
    

Per impostazione predefinita, il `run` script richiama la bandiera dell'emulatore e accetta il flag di compilazione aggiuntivi, per cui `--debug` fornisce il valore predefinito:

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild
    

L'emulatore lancia un'immagine del dispositivo con l'app installata. Dalla schermata iniziale, passare a pannello di apps per lanciare l'applicazione **HelloWorld** . Questo dimostra l'app lanciare con la sua schermata iniziale seguita dalla sua interfaccia principale:

![][18]

 [18]: img/guide/platforms/wp8/wp8_emulator.png

Controlli di base dell'emulatore in alto a destra dello schermo dispositivo consentono di passare tra orientamento verticale e orizzontale. Il pulsante **>** apre ulteriori controlli che consentono di verificare gli orientamenti più complessi e gesti:

![][19]

 [19]: img/guide/platforms/wp8/wp8_emulator_orient.png

Questi controlli avanzati consentono anche di modificare la posizione del dispositivo o per simulare le sequenze di movimenti:

![][20]

 [20]: img/guide/platforms/wp8/wp8_emulator_loc.png

## Distribuire al dispositivo

Prima di testare l'applicazione su un dispositivo, il dispositivo deve essere registrato. Consultare la [documentazione di Microsoft][21] per ulteriori informazioni su come distribuire e testare su Windows Phone 8. Inoltre, assicurarsi che il telefono è collegato al computer e lo schermo è sbloccato.

 [21]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

Quindi eseguire il seguente comando CLI per eseguire l'applicazione sul dispositivo:

        > cordova run wp8
    

Esso corrisponde a questo comando di shell di livello inferiore:

        C:\path\to\project\cordova\run --device
    

Alternativamente, se si lavora in Visual Studio, selezionare **Windows Phone Device** dal menu a discesa nella parte superiore, quindi premere il verde **gioca** pulsante nelle vicinanze o altro tipo **F5**.

## Modificare il progetto in SDK

Una volta che si compila una app di Cordova come descritto sopra, è possibile aprirlo con il SDK. I vari `build` comandi genera un file di Visual Studio di soluzione (*sln*). Aprire il file per modificare il progetto in Visual Studio. Il codice sorgente basato sul web è disponibile all'interno del progetto `www` directory. Oltre ad altri strumenti SDK fornisce il controllo sotto al menu consente di avviare l'app in un emulatore di Windows Phone:

![][22]

 [22]: img/guide/platforms/wp8/wp8_vs.png

Per consigli su come utilizzare il SDK o strumenti da riga di comando di Cordova nel vostro flusso di lavoro, consultare la panoramica. Cordova CLI si basa sul codice sorgente della multipiattaforma che ordinariamente sovrascrive i file specifici di piattaforma utilizzati dal SDK. Se si desidera lavorare all'interno del SDK, utilizzare gli strumenti di basso livello shell come alternativa alla CLI.

## Supporto per Windows Phone 7

È facile generare un app Windows Phone 7, come è per Windows Phone 8, ma funziona molto come l'aggiunta di una piattaforma separata. Se si utilizza la CLI, semplicemente specificare `wp7` lungo con o invece di `wp8` :

        > cordova platform add wp7
        > cordova build wp7
        > cordova emulate wp7
    

Il `emulate` comando produce un emulatore di dispositivo Windows Phone 7 che consente di visualizzare un'interfaccia diversa:

![][23]

 [23]: img/guide/platforms/wp8/wp7_emulator.png

Se si utilizza il workflow di strumento shell piattaforma-centrato, seguire tutti i passaggi nella sezione precedente, *Installare gli strumenti di Cordova Shell* tranne estrarre gli strumenti dalla `cordova-wp8\wp7` directory invece. Tutti questi strumenti funzionano allo stesso modo come loro `wp8` controparti.

**Nota**: le visualizzazioni web apps di Windows Phone 7 Cordova sottostanti non *usare Internet Explorer 10 come loro motore di rendering* che così mancano alcune avanzate funzionalità disponibili nelle applicazioni Windows Phone 8. Comunque, entrambi implementare lo stesso set di API. È possibile eseguire un'applicazione Windows Phone 7 su un dispositivo Windows Phone 8, ma non l'altro senso intorno: fare app Windows Phone 8 *non* eseguire sui dispositivi Windows Phone 7.