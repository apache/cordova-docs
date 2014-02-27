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