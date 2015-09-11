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

# capture.captureVideo

> Avviare l'applicazione registratore video e restituire informazioni sui file di clip video catturati.

    navigator.device.capture.captureVideo(
        <a href="CaptureCB.html">CaptureCB</a> captureSuccess, <a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a> captureError, [<a href="captureVideoOptions.html">CaptureVideoOptions</a> options]
    );
    

## Descrizione

Avvia un'operazione asincrona per acquisire registrazioni video usando registrazione video applicazione del dispositivo. L'operazione consente all'utente di catturare più registrazioni in una sola seduta.

L'operazione di acquisizione termina quando l'utente chiude l'applicazione di registrazione video, o il numero massimo di registrazioni specificato da `<a href="captureVideoOptions.html">CaptureVideoOptions</a>.limit` è raggiunto. Se non `limit` valore del parametro è specificato, il valore predefinito è uno (1) e l'operazione di acquisizione termina dopo l'utente registra un unico video clip.

Quando termina l'operazione di acquisizione, e la `<a href="CaptureCB.html">CaptureCB</a>` callback viene eseguita con una matrice di `<a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>` oggetti che descrivono ciascuna catturato file videoclip. Se l'utente termina l'operazione prima di catturare un video clip, il `<a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a>` callback viene eseguita con un `<a href="CaptureError.html">CaptureError</a>` oggetto con un `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NO_MEDIA_FILES` codice di errore.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // capture callback
    var captureSuccess = function(media<a href="../../file/fileobj/fileobj.html">File</a>s) {
        var i, path, len;
        for (i = 0, len = media<a href="../../file/fileobj/fileobj.html">File</a>s.length; i < len; i += 1) {
            path = media<a href="../../file/fileobj/fileobj.html">File</a>s[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Video</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(media<a href="../../file/fileobj/fileobj.html">File</a>s) {
            var i, len;
            for (i = 0, len = media<a href="../../file/fileobj/fileobj.html">File</a>s.length; i < len; i += 1) {
                upload<a href="../../file/fileobj/fileobj.html">File</a>(media<a href="../../file/fileobj/fileobj.html">File</a>s[i]);
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
        function captureVideo() {
            // Launch device video recording application,
            // allowing user to capture up to 2 video clips
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function upload<a href="../../file/fileobj/fileobj.html">File</a>(media<a href="../../file/fileobj/fileobj.html">File</a>) {
            var ft = new <a href="../../file/filetransfer/filetransfer.html"><a href="../../file/fileobj/fileobj.html">File</a>Transfer</a>(),
                path = media<a href="../../file/fileobj/fileobj.html">File</a>.fullPath,
                name = media<a href="../../file/fileobj/fileobj.html">File</a>.name;
    
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
            <button onclick="captureVideo();">Capture Video</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks stranezze

*   Cordova per BlackBerry WebWorks tenta di lanciare l'applicazione **Registratore Video** , fornito da RIM, per catturare le registrazioni video. L'applicazione riceve un `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NOT_SUPPORTED` codice di errore se l'applicazione non è installata sul dispositivo.