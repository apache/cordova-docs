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