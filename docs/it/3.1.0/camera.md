---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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


# Fotocamera

> Il `camera` oggetto fornisce l'accesso all'applicazione fotocamera di default del dispositivo.

**Nota importante sulla privacy:** Raccolta e utilizzo delle immagini dalla fotocamera del dispositivo solleva questioni di privacy importante. Politica sulla privacy dell'app dovrebbe discutere come app utilizza la telecamera e se le immagini registrate sono condivise con altre parti. Inoltre, se l'uso dell'app della fotocamera non è evidente nell'interfaccia utente, è necessario fornire un preavviso di just-in-time prima della tua app di accedere alla telecamera (se il sistema operativo del dispositivo non farlo già). Tale comunicazione deve fornire le informazioni stesse notate sopra, oltre ad ottenere l'autorizzazione (ad esempio, presentando scelte per **OK** e **No grazie**). Per ulteriori informazioni, vedere la guida sulla Privacy.

## Metodi

*   camera.getPicture
*   camera.Cleanup

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   iOS (in`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

*   Tizen (in`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    Riferimento: il [manifesto dell'applicazione per applicazione Web Tizen][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


# camera.getPicture

Prende una foto utilizzando la fotocamera, o recupera una foto dalla galleria di immagini del dispositivo. L'immagine viene passata al metodo di callback successo come una codifica base64 `String` , o come l'URI per il file di immagine. Il metodo stesso restituisce un `CameraPopoverHandle` che può essere utilizzato per riposizionare il Muffin di selezione file.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## Descrizione

il `camera.getPicture` funzione apre predefinito fotocamera applicazione il dispositivo che consente agli utenti di scattare foto. Questo comportamento si verifica per impostazione predefinita, quando `Camera.sourceType` è uguale a `Camera.PictureSourceType.CAMERA` . Una volta che l'utente scatta la foto, si chiude l'applicazione fotocamera e l'applicazione viene ripristinato.

Se `Camera.sourceType` è `Camera.PictureSourceType.PHOTOLIBRARY` o `Camera.PictureSourceType.SAVEDPHOTOALBUM` , quindi un display finestra di dialogo che consente agli utenti di selezionare un'immagine esistente. La `camera.getPicture` la funzione restituisce un `CameraPopoverHandle` oggetto, che può essere utilizzato per riposizionare la finestra di selezione immagine, ad esempio, quando l'orientamento del dispositivo.

Il valore restituito viene inviato alla `cameraSuccess` funzione di callback, in uno dei seguenti formati, a seconda che l'oggetto specificato `cameraOptions` :

*   A `String` contenente l'immagine della foto con codifica base64.

*   A `String` che rappresenta il percorso del file di immagine su archiviazione locale (predefinito).

Si può fare quello che vuoi con l'immagine codificata o URI, ad esempio:

*   Il rendering dell'immagine in un `<img>` tag, come nell'esempio qui sotto

*   Salvare i dati localmente ( `LocalStorage` , [Lawnchair][1], ecc.)

*   Inviare i dati a un server remoto

 [1]: http://brianleroux.github.com/lawnchair/

**Nota:** Risoluzione foto sui più recenti dispositivi è abbastanza buona. Foto selezionate dalla galleria del dispositivo non è percepiranno di qualità inferiore, anche se un `quality` è specificato il parametro. Per evitare problemi di memoria comune, impostare `Camera.destinationType` a `FILE_URI` piuttosto che`DATA_URL`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Stranezze Android

Android utilizza intenti a lanciare l'attività della fotocamera sul dispositivo per catturare immagini e sui telefoni con poca memoria, l'attività di Cordova può essere ucciso. In questo scenario, l'immagine potrebbe non apparire quando viene ripristinata l'attività di cordova.

## iOS stranezze

Compreso un JavaScript `alert()` in entrambi il callback funzioni possono causare problemi. Avvolgere l'avviso all'interno di un `setTimeout()` per consentire la selezione immagine iOS o muffin per chiudere completamente la prima che viene visualizzato l'avviso:

    setTimeout(function() {/ / fai la tua cosa qui!}, 0);
    

## Windows Phone 7 capricci

Richiamando l'applicazione nativa fotocamera mentre il dispositivo è collegato tramite Zune non funziona e innesca un callback di errore.

## Tizen stranezze

Tizen supporta solo un `destinationType` di `Camera.DestinationType.FILE_URI` e un `sourceType` di`Camera.PictureSourceType.PHOTOLIBRARY`.

## Esempio rapido

Scattare una foto e recuperarla come un'immagine con codifica base64:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
    
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

Scattare una foto e recuperare il percorso del file dell'immagine:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64-encoded image data
          // console.log(imageData);
    
          // Get image handle
          //
          var smallImage = document.getElementById('smallImage');
    
          // Unhide image elements
          //
          smallImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoURISuccess(imageURI) {
          // Uncomment to view the image file URI
          // console.log(imageURI);
    
          // Get image handle
          //
          var largeImage = document.getElementById('largeImage');
    
          // Unhide image elements
          //
          largeImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          largeImage.src = imageURI;
        }
    
        // A button will call this function
        //
        function capturePhoto() {
          // Take picture using device camera and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function capturePhotoEdit() {
          // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function getPhoto(source) {
          // Retrieve image file location from specified source
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }
    
        // Called if something bad happens.
        //
        function onFail(message) {
          alert('Failed because: ' + message);
        }
    
        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capture Photo</button> <br>
        <button onclick="capturePhotoEdit();">Capture Editable Photo</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>


# cameraSuccess

funzione di callback onSuccess che fornisce i dati di immagine.

    function(imageData) {
        // Do something with the image
    }
    

## Parametri

*   **imageData**: Base64 codifica dei dati immagine, *o* il file di immagine URI, a seconda `cameraOptions` in vigore. *(String)*

## Esempio

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


# cameraError

funzione di callback onError che fornisce un messaggio di errore.

    function(message) {
        // Show a helpful message
    }
    

## Parametri

*   **messaggio**: il messaggio è fornito dal codice nativo del dispositivo. *(String)*


# cameraOptions

Parametri opzionali per personalizzare le impostazioni della fotocamera.

    {qualità: 75, destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.CAMERA, allowEdit: vero, encodingType: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: CameraPopoverOptions, saveToPhotoAlbum: false};
    

## Opzioni

*   **qualità**: qualità dell'immagine salvata, espressa come un intervallo di 0-100, dove 100 è tipicamente piena risoluzione senza perdita di compressione file. *(Numero)* (Si noti che informazioni sulla risoluzione della fotocamera non sono disponibile).

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / ritorno di immagine come stringa con codifica base64 FILE_URI: 1, / / ritorno file immagine URI NATIVE_URI: 2 / / ritorno immagine nativa URI (ad esempio, beni-biblioteca: / / su iOS o contenuto: / / su Android)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0, fotocamera: 1, SAVEDPHOTOALBUM: 2};
        

*   **Proprietà allowEdit**: consentire la semplice modifica dell'immagine prima di selezione. *(Booleano)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0, / / JPEG restituire codificati immagine PNG: 1 / / ritorno PNG codificato immagine};
        

*   **targetWidth**: larghezza in pixel all'immagine della scala. Deve essere usato con **targetHeight**. Proporzioni rimane costante. *(Numero)*

*   **targetHeight**: altezza in pixel all'immagine della scala. Deve essere usato con **targetWidth**. Proporzioni rimane costante. *(Numero)*

*   **mediaType**: impostare il tipo di supporto per scegliere da. Funziona solo quando `PictureSourceType` è `PHOTOLIBRARY` o `SAVEDPHOTOALBUM` . Definito in `nagivator.camera.MediaType` *(numero)* 
    
        Camera.MediaType = {foto: 0, / / permette la selezione di immagini ancora solo. PER IMPOSTAZIONE PREDEFINITA. Restituirà il formato specificato tramite dei DestinationType: 1, / / permette la selezione di solo, il video sarà sempre tornare FILE_URI ALLMEDIA: 2 / / Consenti selezione da tutti i tipi di supporto
        
    
    };

*   **correctOrientation**: ruotare l'immagine per correggere l'orientamento del dispositivo durante l'acquisizione. *(Booleano)*

*   **saveToPhotoAlbum**: salvare l'immagine nell'album di foto sul dispositivo dopo la cattura. *(Booleano)*

*   **popoverOptions**: solo iOS opzioni che specificano la posizione di muffin in iPad. Definito in`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {indietro: 0, / / utilizzare la fotocamera posteriore anteriore: 1 / / utilizzare la fotocamera frontale};
        

## Stranezze Android

*   Qualsiasi `cameraDirection` valore i risultati in una foto di lamatura.

*   Ignora il `allowEdit` parametro.

*   `Camera.PictureSourceType.PHOTOLIBRARY`e `Camera.PictureSourceType.SAVEDPHOTOALBUM` entrambi visualizzare l'album fotografico stesso.

## Stranezze di blackBerry

*   Ignora il `quality` parametro.

*   Ignora il `sourceType` parametro.

*   Ignora il `allowEdit` parametro.

*   Applicazione deve disporre delle autorizzazioni di iniezione chiave per chiudere l'applicazione nativa fotocamera dopo l'utente scatta la foto.

*   Utilizzando immagini di grandi dimensioni può comportare l'impossibilità di codificare immagini su dispositivi modello successivo (ad es., Torch 9800) quella caratteristica di telecamere ad alta risoluzione.

*   `Camera.MediaType`non è supportato.

*   Ignora il `correctOrientation` parametro.

*   Ignora il `cameraDirection` parametro.

## iOS stranezze

*   Impostare `quality` inferiore al 50 per evitare errori di memoria su alcuni dispositivi.

*   Quando si utilizza `destinationType.FILE_URI` , foto vengono salvati nella directory temporanea dell'applicazione. Si può eliminare il contenuto di questa directory utilizzando il `navigator.fileMgr` API, se lo spazio di archiviazione è una preoccupazione.

## Tizen stranezze

*   opzioni non supportate

*   restituisce sempre un URI del FILE

## Windows Phone 7 e 8 stranezze

*   Ignora il `allowEdit` parametro.

*   Ignora il `correctOrientation` parametro.

*   Ignora il `cameraDirection` parametro.


# CameraPopoverOptions

iOS solo parametri che specificano l'ancoraggio elemento posizione e freccia direzione il Muffin quando si selezionano le immagini dalla libreria un iPad o un album.

    {x: 0, y: 32, larghezza: 320, altezza: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: pixel coordinata x dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **y**: coordinata y di pixel dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **larghezza**: larghezza, in pixel, dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **altezza**: altezza, in pixel, dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **arrowDir**: direzione dovrebbe puntare la freccia il muffin. Definito in `Camera.PopoverArrowDirection` *(numero)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / corrisponde a iOS UIPopoverArrowDirection costanti ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Si noti che la dimensione del muffin possa cambiare per regolare la direzione della freccia e l'orientamento dello schermo. Assicurarsi che tenere conto di modifiche di orientamento quando si specifica la posizione di elemento di ancoraggio.

## Esempio rapido

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };
    
     navigator.camera.getPicture(onSuccess, onFail, options);
    
     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }
    
     function onFail(message) {
         alert('Failed because: ' + message);
     }


# CameraPopoverHandle

Un handle per la finestra di dialogo di muffin creato da`camera.getPicture`.

## Metodi

*   **setPosition**: impostare la posizione dei muffin.

## Piattaforme supportate

*   iOS

## setPosition

Impostare la posizione dei muffin.

**Parametri:**

*   `cameraPopoverOptions`: il `CameraPopoverOptions` che specificare la nuova posizione

## Esempio rapido

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## Esempio completo

     function onSuccess(imageData) {
          // Do stuff with the image!
     }
    
     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }
    
     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }
