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

# Guida di Windows Phone 8 piattaforma

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire Cordova apps per dispositivi Windows Phone 8. Invece, come dettagliato nel Windows Phone 7 piattaforma guida se volete 7,5 e 8 dispositivi di destinazione, sviluppare per Windows Phone 7. Versione 7 non ha tutte le caratteristiche avanzate incluse in IE10, ma implementa lo stesso set di API. Fare app Windows Phone 8 *non* eseguire sui dispositivi Windows Phone 7.

Vedi quanto segue per più dettagliate informazioni specifiche della piattaforma che si applica a entrambe le versioni:

*   L'aggiornamento di Windows Phone
*   Windows Phone Plugins
*   Windows Phone strumenti da riga di comando

Gli strumenti della riga di comando qui sopra si riferiscono a versioni precedenti alla 3.0 di Cordova. Per informazioni sull'interfaccia corrente, vedere l'interfaccia della riga di comando.

## 1. Requisiti di sistema

*   Sistema operativo:

    *   Windows 8 o Windows 8 Pro
        *   La versione a 64-bit (x64) di Windows è necessaria per il SDK.
        *   La versione Pro consiglia di modo da poter eseguire un emulatore di dispositivo.

*   Hardware:

    *   6,5 GB di spazio libero su disco
    *   4 GB DI RAM
    *   CPU 64-bit (x64)

*   Emulatore di Windows Phone 8

    *   L'emulatore telefono utilizza Hyper-V, quindi questo elenco include quei pre-requisiti.
    *   Edizione Pro 64 bit di Windows 8 o superiore
    *   Richiede un processore che supporta la virtualizzazione e [Secondo livello indirizzo traduzione (SLAT)][1]
        *   Vedere l' [elenco dei processori Intel che supportano VT-x (virtualizzazione) ed EPT (SLAT)][2]
    *   Abilitare la funzionalità di virtualizzazione (cioè, VT-x su Intel) nelle impostazioni del BIOS, come di solito questo è disabilitato per impostazione predefinita.

*   SDK + IDE (Visual Studio)

    *   Visual Studio 2012 Professional, Premium o Ultimate. Si noti che Visual Studio Express per Windows Phone (incluso nel SDK) non è raccomandato perché non si può costruire il modello (vedi sotto) con VS Express, come non ha la funzionalità di **Esportazione modello** , che è solo nel VS Pro o superiore.

*   Registrarsi e pagare per un account di [Windows Phone Dev Center][3] , se si desidera installare l'app su un dispositivo reale o sottopone a luogo di mercato.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Nota:** Esegue il SDK in macchina virtuale potrebbe presentare alcune sfide. Potete leggere questo post sul blog che dà informazioni sulle soluzioni per sviluppare per [Windows Phone su un Mac][4].

 [4]: http://aka.ms/BuildaWP8apponaMac

## 2. Installare il SDK + Cordova

*   Scaricare e installare il [SDK di Windows Phone][5]

*   Scaricare ed estrarre l'ultima copia di [Cordova][6]. Lavorerete `lib\windows-phone-8\wp8` sottodirectory, `lib\windows-phone-8\wp7` contiene la versione di Windwos Phone 7 di Cordova.

*   Copia il `CordovaWP8_x_x_x.zip` del file per il `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` directory.

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [6]: http://phonegap.com/download

## 2.1. Il modello di costruzione

**Nota:** questo passaggio potrebbe non essere necessario. Se la directory lib\windows-telefono contiene già un file CordovaWP8\_x\_x_x.zip si può saltare questo passaggio.

Al fine di semplificare il processo di sviluppo, Cordova è dotato di uno script per costruire modelli di Visual Studio. Questo consente la creazione rapida di Cordova applicazioni all'interno di Visual Studio. Questo modello può essere modificato se necessario e i passi di seguito indicare come procedere se si desidera generare il modello.

### Eseguire il file batch per creare e installare i modelli.

*   La radice del repo contiene un file createTemplates.bat. Doppio clic questo file genererà 2 file. zip. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip dove x.x.x è il numero di versione corrente) Per utilizzare facilmente questi file in Visual Studio, copia li a "Mio Documenti\Visual Studio 2012\Templates\ProjectTemplates\" allora sarete in grado di creare nuove applicazioni per Windows Phone di Apache Cordova dal File-> menu nuovo progetto Visual Studio.

*   Se si esegue il file batch dalla riga di comando, è possibile chiamare anche con un parametro per installare automaticamente

Eseguire lo script:

    > createTemplates.bat-installare


## 3. Impostare il nuovo progetto

*   Aprire Visual Studio Express per Windows Phone e scegliere **Nuovo progetto**.

*   Selezionare **CordovaWP8**. (Il numero di versione è visualizzato nella descrizione del modello).

*   Dare al progetto un nome e selezionare **OK**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## 4. Esaminare la struttura del progetto

*   Il `www` directory contiene il Cordova `html/js/css` e altre risorse incluse nell'app.

*   Qualsiasi contenuto che aggiunge qui deve essere una parte del progetto di Visual Studio, e deve essere impostato come contenuto.

*   Nota: Questa cattura schermo era dal download cordova-2.3.0, inserzione variano in base la versione installata.

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 5. Compilare e distribuire emulatore

*   Assicurarsi che **Windows Phone Emulator** è selezionato nel menu a discesa principale.

*   Premere il pulsante verde **giocare** accanto al menu a discesa per avviare il debug, o digitare **F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## 6. Costruire un progetto per il dispositivo

Al fine di testare l'applicazione su un dispositivo, il dispositivo deve essere registrato. Clicca [qui][10] per leggere la documentazione sulla distribuzione e test sul tuo Windows Phone 8.

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Assicurarsi che il telefono è connesso, e lo schermo è sbloccato.

*   In Visual Studio, selezionare 'Dispositivo' dal menu a discesa in alto.

*   Premere il pulsante verde **giocare** accanto al menu a discesa principale per avviare il debug, o digitare **F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## Fatto!

## Ulteriore lettura

Per maggiori dettagli sulle specifiche differenze tra browser IE10 e WebKit e come sostenere entrambi MS ha un utile [guida qui][12]

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
