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

# Windows 8 piattaforma guida

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire applicazioni Cordova per Windows 8. Vedere la seguente per informazioni più dettagliate specifiche della piattaforma:

*   L'aggiornamento di Windows 8
*   Strumenti della riga di comando di Windows 8

Gli strumenti della riga di comando qui sopra si riferiscono a versioni precedenti alla 3.0 di Cordova. Per informazioni sull'interfaccia corrente, vedere l'interfaccia della riga di comando.

Microsoft deprecato il nome *applicazioni in stile Metro* in Windows 8 e Windows RT. MSDN ora si riferisce a questo tipo di app come un'applicazione *Windows Store* , e questa guida segue quella convenzione. Inoltre, in questa guida *Windows 8* significa sia Windows 8 e Windows RT.

## 1. Requisiti

*   Windows 8

*   Visual Studio Professional 2012 o meglio o Visual Studio 2012 Express per Windows 8

Seguire le istruzioni [qui][1] a presentare le tue applicazioni Windows Store.

 [1]: http://www.windowsstore.com/

## 2. Installare il SDK + Cordova

*   Impostare il tuo preferito variante di Visual Studio 2012. Tutte le versioni a pagamento del prodotto (professionale, ecc.) ti consentono di costruire applicazioni Windows Store. È necessario **esprimere per Windows 8** costruire Windows App Store l' [Express edizioni][2].

*   Scaricare ed estrarre l'ultima copia di [Cordova][3]. Lavorerete `lib\windows-8` sottodirectory.

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products
 [3]: http://phonegap.com/download

## 3. Impostare il nuovo progetto

È già possibile costruire applicazioni Windows 8 utilizzando l' *HTML/JavaScript traccia* disponibile nell'App Store di Windows. Utilizzare Cordova nelle applicazioni Windows Store di esporre la stesse API come su altre piattaforme supportate da Cordova.

*   Aprire Visual Studio 2012 e scegliere **Nuovo progetto**.

*   Selezionare **Installed → → altri linguaggi → JavaScript → Windows negozio modello** dall'albero e poi **App vuota** nell'elenco progetti. Immettere qualunque nome di progetto che ti piace, come `CordovaWin8Foo` come in questo esempio.

    ![][4]

*   Microsoft continua a utilizzare `default.html` come home page predefinita, ma uso di sviluppatori web più `index.html` . (Più è probabile che in altre varianti piattaforma del progetto si utilizza `index.html` come il nome della tua pagina predefinita.) Per risolvere questo problema, in Rinomina Esplora il `default.html` del file di `index.html` . Fare doppio clic la `package.appxmanifest` del file e modificare il valore della **pagina iniziale**`index.html`.

    ![][5]

*   Includere `cordova.js` nel vostro progetto, fare clic destro sul `js` directory in Esplora soluzioni e scegliere **Aggiungi elemento → nuovo**. Individuare il `cordova.js` del file nella `lib\windows-8` directory indicata sopra.

*   Modificare il codice per `index.html` . Aggiungere un riferimento a `cordova.js` . È possibile farlo manualmente, o trascinando il file da Esplora soluzioni.

 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png
 [5]: {{ site.baseurl }}/static/img/guide/platforms/win8/wschangemanifest.png

### L'aggiunta del riferimento...

        <!-WinJS riferimenti--> < link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel = "stylesheet" / >< src="//Microsoft.WinJS.1.0/js/base.js di script" >< / script >< src="//Microsoft.WinJS.1.0/js/ui.js di script" >< / script ><!-Cordova--> < src="/js/cordova.js di script" >< / script ><!-CordovaWin8Foo riferimenti--> < link href="/css/default.css" rel = "stylesheet" / >< src="/js/default.js di script" >< / script >


*   Successivamente, aggiungere qualche codice che illustra come Cordova sta lavorando.

### L'aggiunta di un gestore di 'deviceready'...

    <body>
        <p>Content goes here</p>

        <script type="text/javascript">

            console.log("Subscribing...");
            document.addEventListener("deviceready", function () {

                navigator.notification.alert("The device is ready!");

            });

        </script>

    </body>


## 5. Il progetto di test

*   Eseguire il progetto da Visual Studio. Verrà visualizzata la finestra di messaggio appaiono:

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsalert.png

## Fatto!

Questo è tutto! Ora sei pronto per costruire applicazioni Windows Store con Cordova.
