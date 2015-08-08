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

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire Cordova apps per dispositivi Windows Phone 8. Invece, come dettagliato nel Windows Phone 7 piattaforma guida se volete 7,5 e 8 dispositivi di destinazione, sviluppare per Windows Phone 7. Versione 7 non ha tutte le caratteristiche avanzate incluse in Internet Explorer 10, ma implementa lo stesso set di API. Fare app Windows Phone 8 *non* eseguire sui dispositivi Windows Phone 7.

Vedi quanto segue per più dettagliate informazioni specifiche della piattaforma che si applica a entrambe le versioni:

*   L'aggiornamento di Windows Phone
*   Windows Phone Plugins
*   Windows Phone strumenti da riga di comando

Gli strumenti della riga di comando qui sopra si riferiscono a versioni precedenti alla 3.0 di Cordova. Per informazioni sull'interfaccia corrente, vedere l'interfaccia della riga di comando.

## Requisiti di sistema

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

*   SDK e IDE (Visual Studio)

    *   Visual Studio 2012 Professional, Premium o Ultimate. Si noti che Visual Studio Express per Windows Phone (incluso nel SDK) non è raccomandato perché non si può costruire il modello (vedi sotto) con VS Express, come non ha la funzionalità di **Esportazione modello** , che è solo nel VS Pro o superiore.

*   Registrarsi e pagare per un account di [Windows Phone Dev Center][3] , se si desidera installare l'app su un dispositivo reale o sottopone a luogo di mercato.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Nota**: eseguire il SDK in macchina virtuale potrebbe presentare alcune sfide. Potete leggere questo post sul blog che dà informazioni sulle soluzioni per sviluppare per [Windows Phone su un Mac][4].

 [4]: http://aka.ms/BuildaWP8apponaMac

## Installare il SDK e Cordova

Scaricare e installare il [SDK di Windows Phone][5].

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471

Scaricare ed estrarre l'ultima copia di [Cordova][6]. Il `lib\windows-phone-8\wp8` sottodirectory è dove dovete fare il vostro lavoro.

 [6]: http://phonegap.com/download

Copia il `CordovaWP8_x_x_x.zip` del file per il `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` directory.

## Costruzione del modello

**Nota**: ignorare questo passaggio se i `lib\windows-phone` directory contiene già un `CordovaWP8_x_x_x.zip` file.

Per semplificare lo sviluppo, Cordova fasci uno script per costruire modelli di Visual Studio. Queste permettono di generare rapidamente applicazioni di Cordova, ed è possibile modificarle se necessario. La procedura descritta di seguito Mostra come generarlo.

### Eseguire il File Batch per creare e installare i modelli

Directory principale di repo contiene un `createTemplates.bat` file. Fare doppio clic su questa per generare due `.zip` file: `CordovaWP7_x_x_x.zip` e `CordovaWP8_x_x_x.zip` , dove *x.x.x* è il numero di versione corrente. Per utilizzare questi file facilmente in Visual Studio, copiali in `My
Documents\Visual Studio 2012\Templates\ProjectTemplates\` . Vi sono poi in grado di creare nuove applicazioni per Windows Phone di Apache Cordova dal menu **del progetto Visual Studio File → nuovo** .

Se si esegue il file batch dalla riga di comando, si può anche chiamare con un parametro per installare automaticamente:

        > createTemplates.bat-installare


## Impostare un nuovo progetto

Aprire Visual Studio Express per Windows Phone e scegliere **Nuovo progetto**.

Selezionare **CordovaWP8**. Il numero di versione è visualizzato nella descrizione del modello.

Dare al progetto un nome e selezionare **OK**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## Rivedere la struttura del progetto

Il `www` funzionalità di directory `html` , `js` , e `css` altre risorse e sottodirectory app richiede. Qualsiasi contenuto aggiuntivo deve essere una parte del progetto di Visual Studio, e deve essere impostato come contenuto.

Il seguente esempio struttura rappresenta un 2.3.0 di progetto, ma può variare a seconda della versione installata:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Creare e distribuire all'emulatore

Assicurarsi che **Windows Phone Emulator** è selezionato nel menu a discesa principale.

Quindi premere il pulsante verde **giocare** accanto al menu a discesa per avviare il debug oppure premere **F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## Compilare il progetto per il dispositivo

Prima di testare l'applicazione su un dispositivo, il dispositivo deve essere registrato. Consultare la [documentazione di Microsoft][10] per ulteriori informazioni su come distribuire e testare su Windows Phone 8. Questi sono i passi fondamentali:

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Assicurarsi che il telefono è connesso, e lo schermo è sbloccato.

*   In Visual Studio, selezionare il **dispositivo** dal menu a discesa nella parte superiore.

*   Premere il pulsante verde **giocare** accanto al menu a discesa principale per avviare il debug, oppure digitare **F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

A questo punto, hai finito.

## Ulteriore lettura

Il Blog di Windows Phone Developer fornisce [utili dettagli][12] sulle differenze tra browser IE10 e WebKit e come sostenere entrambi.

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
