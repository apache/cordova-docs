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

# capture.captureAudio

> Avviare l'applicazione registratore audio e restituire informazioni sui file di clip audio catturato.

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## Descrizione

Avvia un'operazione asincrona per acquisire registrazioni audio utilizzando l'applicazione di registrazione audio predefinita del dispositivo. L'operazione consente all'utente di dispositivo acquisire registrazioni multiple in una singola sessione.

L'operazione di acquisizione termina quando l'utente esce l'audio registrazione applicazione, o il numero massimo di registrazioni specificato da `CaptureAudioOptions.limit` è raggiunto. Se non `limit` valore del parametro è specificato, il valore predefinito è uno (1) e l'operazione di acquisizione termina dopo l'utente registra una singola clip audio.

Quando termina l'operazione di acquisizione, la `CaptureCallback` viene eseguita con una matrice di `MediaFile` oggetti che descrivono ciascuna catturato file clip audio. Se l'utente termina l'operazione prima di un clip audio viene catturato, il `CaptureErrorCallback` viene eseguito con un `CaptureError` oggetto, con il `CaptureError.CAPTURE_NO_MEDIA_FILES` codice di errore.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureAudio() {
            // Launch device audio recording application,
            // allowing user to capture up to 2 audio clips
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureAudio();">Capture Audio</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks stranezze

*   Cordova per BlackBerry WebWorks tenta di lanciare l'applicazione **Registratore di note vocali** , fornito da RIM, per catturare le registrazioni audio. L'applicazione riceve un `CaptureError.CAPTURE_NOT_SUPPORTED` codice di errore se l'applicazione non è installata sul dispositivo.

## iOS stranezze

*   iOS non ha un'applicazione di registrazione audio predefinita, quindi viene fornita un'interfaccia utente semplice.

## Windows Phone 7 e 8 stranezze

*   Windows Phone 7 non ha un'applicazione di registrazione audio predefinita, quindi viene fornita un'interfaccia utente semplice.