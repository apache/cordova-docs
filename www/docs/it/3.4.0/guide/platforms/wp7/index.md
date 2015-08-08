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

# Guida di piattaforma Windows Phone 7

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire Cordova apps per dispositivi Windows Phone 7. Apps funzionare anche sui dispositivi Windows Phone 8 utilizzando la stesse API, ma la versione 7 manca di alcune delle funzionalità avanzate di IE10 disponibile su Windows Phone 8. Fare app Windows Phone 8 *non* eseguire sui dispositivi Windows Phone 7.

Vedi quanto segue per più dettagliate informazioni specifiche della piattaforma che si applica a entrambe le versioni:

*   L'aggiornamento di Windows Phone
*   Windows Phone Plugins
*   Windows Phone strumenti da riga di comando

Gli strumenti della riga di comando qui sopra si riferiscono a versioni precedenti alla 3.0 di Cordova. Per informazioni sull'interfaccia corrente, vedere l'interfaccia della riga di comando.

## Requisiti di sistema

Utilizzare Windows 7 o Windows 8 (Pro) o Windows Vista con SP2. La versione a 64-bit (x64) di Windows è necessaria per il SDK. La versione Pro è consigliata per l'esecuzione di un emulatore di dispositivo.

Registrarsi e pagare per un account di [Windows Phone Dev Center][1] , se si desidera installare un'applicazione su un dispositivo reale o sottopone a luogo di mercato.

 [1]: http://dev.windowsphone.com/en-us/publish

**Nota**: eseguire il SDK in macchina virtuale può presentare sfide. Per approfondimenti sullo sviluppo di soluzioni, leggere [Windows Phone su un Mac][2] .

 [2]: http://aka.ms/BuildaWP8apponaMac

## Installare il SDK e Cordova

Scaricare e installare l' [SDK di Windows Phone][3].

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

Scaricare ed estrarre l'ultima copia di [Cordova][4]. È necessario lavorare `lib\windows-phone-8\wp7` sottodirectory, `lib\windows-phone-8\wp8` contiene la versione Windwos Phone 8 di Cordova.

 [4]: http://phonegap.com/download

Copia il `CordovaWP7_x_x_x.zip` del file per il `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` directory.

## Costruzione del modello

**Nota**: ignorare questo passaggio se i `lib\windows-phone` directory contiene già un `CordovaWP7_x_x_x.zip` file.

Per semplificare lo sviluppo, Cordova fasci uno script per costruire modelli di Visual Studio. Queste permettono di generare rapidamente applicazioni di Cordova, ed è possibile modificarle se necessario. La procedura descritta di seguito Mostra come generarlo.

### Eseguire il File Batch per creare e installare i modelli

La radice del repo contiene un `createTemplates.bat` file. Facendo doppio clic su questo file genera due `.zip` file: `CordovaWP7_x_x_x.zip` e `CordovaWP8_x_x_x.zip` , dove *x.x.x* è il numero di versione corrente. Per utilizzare questi file facilmente in Visual Studio, copiali nella `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` sottodirectory. Vi sono poi in grado di creare nuovi menu **Apache Cordova Windows Phone_ applicazioni da Visual Studio __File → nuovo progetto** .

Se si esegue il file batch dalla riga di comando, è possibile chiamare anche con un parametro per installare automaticamente:

        > createTemplates.bat-installare


## Impostare un nuovo progetto

*   Aprire Visual Studio Express per Windows Phone e scegliere **Nuovo progetto**.

*   Selezionare **CordovaWP7**. I display di numero di versione nella descrizione del modello.

*   Dare al progetto un nome e selezionare **OK**.

## Rivedere la struttura del progetto

Il `www` funzionalità di directory `html` , `js` , e `css` altre risorse e sottodirectory app richiede. Qualsiasi contenuto aggiuntivo deve essere una parte del progetto di Visual Studio, e deve essere impostato come contenuto.

Il seguente esempio struttura rappresenta un 2.3.0 di progetto, ma può variare a seconda della versione installata:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Compilare il progetto per il dispositivo

Prima di testare l'applicazione su un dispositivo, il dispositivo deve essere registrato. Consultare la [documentazione di Microsoft][6] per ulteriori informazioni su come distribuire e testare su Windows Phone 7. Questi sono i passi fondamentali:

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Assicurarsi che il telefono è connesso, e lo schermo è sbloccato.

*   In Visual Studio, selezionare il **dispositivo** dal menu a discesa nella parte superiore.

*   Premere il pulsante verde **giocare** accanto al menu a discesa principale per avviare il debug, oppure digitare **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

A questo punto, hai finito.
