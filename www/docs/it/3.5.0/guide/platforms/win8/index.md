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

## Requisiti

*   Windows 8

*   Visual Studio Professional 2012 o meglio o Visual Studio 2012 Express per Windows 8

Seguire le istruzioni a [windowsstore.com][1] presentare all'app di Windows Store.

 [1]: http://www.windowsstore.com/

## Installare il SDK e Cordova

Impostare il tuo preferito variante di Visual Studio 2012. Tutte le versioni a pagamento del prodotto (professionale, ecc.) ti consentono di costruire applicazioni Windows Store. È necessario **esprimere per Windows 8** costruire Windows App Store l' [Express edizioni][2].

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products

Scaricare ed estrarre l'ultima copia di [Cordova][3]. Queste istruzioni si applicano alla `lib\windows-8` sottodirectory.

 [3]: http://phonegap.com/download

## Impostare un nuovo progetto

È già possibile costruire applicazioni Windows 8 utilizzando l' *HTML/JavaScript traccia* disponibile nell'App Store di Windows. Utilizzare Cordova nelle applicazioni Windows Store di esporre la stesse API come su altre piattaforme supportate da Cordova.

*   Aprire Visual Studio 2012 e scegliere **Nuovo progetto**.

*   Selezionare **Installed → → altri linguaggi → JavaScript → Windows negozio modello** dall'albero e poi **App vuota** nell'elenco progetti. Immettere qualunque nome di progetto che ti piace, come `CordovaWin8Foo` come in questo esempio:

    ![][4]

*   Microsoft continua a utilizzare `default.html` come home page predefinita, ma uso di sviluppatori web più `index.html` . È una buona idea per fare così, almeno per abbinare altre piattaforme su che probabilmente stai lavorando. Per risolvere questo problema, in **Esplora soluzioni** rinominare il `default.html` del file di `index.html` . Fare doppio clic la `package.appxmanifest` del file e modificare il valore di **pagina iniziale** a `index.html` :

        ![](img/guide/platforms/win8/wschangemanifest.png)


*   Includere `cordova.js` nel vostro progetto, fare clic destro sul `js` directory in **Esplora** soluzioni e scegliere **Aggiungi elemento → nuovo**. Individuare il `cordova.js` del file nella `lib\windows-8` directory.

*   Modificare il codice per `index.html` . Aggiungere un riferimento a `cordova.js` . È possibile farlo manualmente, o trascinando il file da **Esplora soluzioni**. Aggiungere le seguenti altre dipendenze alla pagina iniziale dell'app:

            <!-- WinJS references -->
            <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
            <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
            <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

            <!-- Cordova -->
            <script src="/js/cordova.js"></script>

            <!-- CordovaWin8Foo references -->
            <link href="/css/default.css" rel="stylesheet" />
            <script src="/js/default.js"></script>


*   Aggiungere un `deviceready` gestore dimostrare Cordova sta lavorando:

        <body>
            <p>Content goes here</p>
            <script type="text/javascript">
                console.log("Subscribing...");
                document.addEventListener("deviceready", function () {
                    navigator.notification.alert("The device is ready!");
                });
            </script>
        </body>


 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png

## Il progetto di test

Eseguire il progetto da Visual Studio. Verrà visualizzata la finestra di messaggio appaiono:

        ![](img/guide/platforms/win8/wsalert.png)


Questo è tutto. Ora sei pronto per costruire applicazioni Windows Store con Cordova.
