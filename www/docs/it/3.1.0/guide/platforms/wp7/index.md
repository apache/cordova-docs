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

## 1. Requisiti di sistema

*   Sistema operativo:

    *   Windows 7 o Windows 8 (Pro) o Windows Vista con SP2
        *   La versione a 64-bit (x64) di Windows è necessaria per il SDK.
        *   La versione Pro è consigliata per l'esecuzione di un emulatore di dispositivo.

*   Registrarsi e pagare per un account di [Windows Phone Dev Center][1] , se si desidera installare l'app su un dispositivo reale o sottopone a luogo di mercato.

 [1]: http://dev.windowsphone.com/en-us/publish

**Nota:** Esegue il SDK in macchina virtuale potrebbe presentare alcune sfide. Potete leggere questo post sul blog che dà informazioni sulle soluzioni per sviluppare per [Windows Phone su un Mac][2].

 [2]: http://aka.ms/BuildaWP8apponaMac

## 2. Installare il SDK + Cordova

*   Scaricare e installare l' [SDK di Windows Phone][3]

*   Scaricare ed estrarre l'ultima copia di [Cordova][4]. Lavorerete `lib\windows-phone-8\wp7` sottodirectory, `lib\windows-phone-8\wp8` contiene la versione Windwos Phone 8 di Cordova.

*   Copia il `CordovaWP7_x_x_x.zip` del file per il `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` directory.

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/
 [4]: http://phonegap.com/download

## 2.1. Il modello di costruzione

**Nota:** questo passaggio potrebbe non essere necessario. Se la directory lib\windows-telefono contiene già un file CordovaWP7\_x\_x_x.zip si può saltare questo passaggio.

Al fine di semplificare il processo di sviluppo, Cordova è dotato di uno script per costruire modelli di Visual Studio. Questo consente la creazione rapida di Cordova applicazioni all'interno di Visual Studio. Questo modello può essere modificato se necessario e i passi di seguito indicare come procedere se si desidera generare il modello.

### Eseguire il file batch per creare e installare i modelli.

*   La radice del repo contiene un file createTemplates.bat. Doppio clic questo file genererà 2 file. zip. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip dove x.x.x è il numero di versione corrente) Per utilizzare facilmente questi file in Visual Studio, copia li a "Mio Documenti\Visual Studio 2012\Templates\ProjectTemplates\" allora sarete in grado di creare nuove applicazioni per Windows Phone di Apache Cordova dal File-> menu nuovo progetto Visual Studio.

*   Se si esegue il file batch dalla riga di comando, è possibile chiamare anche con un parametro per installare automaticamente

Eseguire lo script:

    > createTemplates.bat-installare


## 3. Impostare il nuovo progetto

*   Aprire Visual Studio Express per Windows Phone e scegliere **Nuovo progetto**.

*   Selezionare **CordovaWP7**. (Il numero di versione è visualizzato nella descrizione del modello).

*   Dare al progetto un nome e selezionare **OK**.

## 4. Esaminare la struttura del progetto

*   Il `www` directory contiene il Cordova `html/js/css` e altre risorse incluse nell'app.

*   Qualsiasi contenuto che aggiunge qui deve essere una parte del progetto di Visual Studio, e deve essere impostato come contenuto.

*   Nota: Questa cattura schermo era il download di cordova-2.3.0 wp8, inserzione variano in base la versione installata.

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 6. Costruire un progetto per il dispositivo

Al fine di testare l'applicazione su un dispositivo, il dispositivo deve essere registrato. Clicca [qui][6] per leggere la documentazione sulla distribuzione e test su Windows Phone 7.

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Assicurarsi che il telefono è connesso, e lo schermo è sbloccato.

*   In Visual Studio, selezionare 'Dispositivo' dal menu a discesa in alto.

*   Premere il pulsante verde **giocare** accanto al menu a discesa principale per avviare il debug, o digitare **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## Fatto!
