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

# FileTransfer

Il `FileTransfer` oggetto consente di caricare o scaricare file da e verso un server.

## Proprietà

*   **OnProgress**: chiamata con un `ProgressEvent` ogni volta che un nuovo blocco di dati viene trasferito. *(Funzione)*

## Metodi

*   **caricare**: invia un file a un server.

*   **Scarica**: Scarica un file dal server.

*   **Abort**: interrompe un trasferimento in corso.

## Dettagli

Il `FileTransfer` oggetto fornisce un modo per caricare i file su un server remoto utilizzando una richiesta HTTP di POST multiparte. Sono supportati i protocolli HTTP e HTTPS. Parametri facoltativi possono essere specificati passando un `FileUploadOptions` oggetto per il `upload()` metodo. Su carica di successo, un `FileUploadResult` oggetto viene passato al metodo di callback successo. Se si verifica un errore, un `FileTransferError` oggetto viene passato al metodo di callback errore. È anche possibile (solo su iOS e Android) per scaricare un file da un server remoto e salvarli sul dispositivo.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## caricare

**Parametri:**

*   **filePath**: percorso completo del file sul dispositivo.

*   **server**: URL del server per ricevere il file, come codificato dal`encodeURI()`.

*   **successCallback**: un callback passato un `Metadata` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore recuperando il `Metadata` . Invocato con un `FileTransferError` oggetto. *(Funzione)*

*   **opzioni**: parametri opzionali come nome file e il tipo MIME.

*   **trustAllHosts**: parametro opzionale, valore predefinito è `false` . Se impostata su `true` , accetta tutti i certificati di sicurezza. Questo è utile poiché Android respinge i certificati autofirmati sicurezza. Non raccomandato per uso in produzione. Supportato su Android e iOS. *(boolean)*

**Esempio rapido**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**Esempio completo**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**Impostazione Upload intestazioni**

Supportato su Android e iOS

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Stranezze Android**

Impostare il `chunkedMode` opzione per `false` per evitare problemi di caricamento su un server Nginx.

## Scarica

**Parametri:**

*   **fonte**: URL del server per scaricare il file, come codificato dal`encodeURI()`.

*   **destinazione**: percorso completo del file sul dispositivo.

*   **successCallback**: un callback passato un `FileEntry` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante il recupero del `Metadata` . Invocato con un `FileTransferError` oggetto. *(Funzione)*

*   **trustAllHosts**: parametro opzionale, valore predefinito è `false` . Se impostato su `true` poi accetterà tutti i certificati di sicurezza. Questo è utile come Android respinge certificati auto sicurezza firmato. Non raccomandato per uso in produzione. Supportato su Android e iOS. *(boolean)*

*   **opzioni**: parametri facoltativi, attualmente solo supporti intestazioni (ad esempio autorizzazione (autenticazione di base), ecc.).

**Esempio rapido**

    // !! Presuppone filePath è un percorso valido sul dispositivo var fileTransfer = nuovo FileTransfer();
    var uri = encodeURI ("http://some.server.com/download.php");
    
    fileTransfer.download (uri, filePath, function(entry) {console ("download completo:" + entry.fullPath);
        }, function(error) {console ("fonte di errore di download" + Error);
            console ("download errore obiettivo" + error.target);
            console ("codice di errore di caricamento" + Error);
        }, false, {intestazioni: {"Autorizzazione": "dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA base = ="}});
    

## Abort

Interrompe un trasferimento in corso. Il callback onerror viene passato un oggetto FileTransferError che presenta un codice di errore di FileTransferError.ABORT_ERR.

**Piattaforme supportate**

*   Android
*   iOS

**Esempio rapido**

    // !! Assume la variabile fileURI contiene un URI valido per un file di testo su win dispositivo var = function(r) {console ("non deve essere chiamato.");}
    
    fallire var = function(error) {/ / Error = = FileTransferError.ABORT_ERR alert ("errore: codice =" + Error);
        console ("fonte di errore caricamento" + Error);
        console ("upload errore obiettivo" + error.target);}
    
    var opzioni = nuovo FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    var ft = FileTransfer() nuovo;
    ft.upload (fileURI, encodeURI ("http://some.server.com/upload.php"), vittoria, fail, opzioni);
    ft.Abort();
    

## OnProgress

Chiamato con un ProgressEvent ogni volta che un nuovo blocco di dati viene trasferito.

**Piattaforme supportate**

*   Android
*   iOS

**Esempio**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Stranezze** - su entrambi Android un iOS, lengthComputable è `false` per i download che utilizzano la codifica gzip.