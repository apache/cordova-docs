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

# media.startRecord

Avvia la registrazione di un file audio.

    media.startRecord();
    

## Descrizione

Il `media.startRecord` metodo viene eseguita in modo sincrono, inizia una registrazione per un file audio.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // Record audio
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new <a href="media.html">Media</a>(src,
            // success callback
            function() {
                console.log("recordAudio():Audio Success");
            },
    
            // error callback
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
            });
    
        // Record audio
        mediaRec.startRecord();
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // Record audio
        //
        function recordAudio() {
            var src = "myrecording.amr";
            var mediaRec = new <a href="media.html">Media</a>(src, onSuccess, onError);
    
            // Record audio
            mediaRec.startRecord();
    
            // Stop recording after 10 sec
            var recTime = 0;
            var recInterval = setInterval(function() {
                recTime = recTime + 1;
                setAudioPosition(recTime + " sec");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    mediaRec.stopRecord();
                }
            }, 1000);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            recordAudio();
        }
    
        // onSuccess Callback
        //
        function onSuccess() {
            console.log("recordAudio():Audio Success");
        }
    
        // onError Callback
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        // Set audio position
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
    
        </script>
      </head>
      <body>
        <p id="media">Recording audio...</p>
        <p id="audio_position"></p>
      </body>
    </html>
    

## Stranezze Android

*   Dispositivi Android registrano audio in formato Adaptive Multi-Rate. Il file specificato deve terminare con l'estensione ** .

## BlackBerry WebWorks stranezze

*   Dispositivi blackBerry di registrare audio in formato Adaptive Multi-Rate. Il file specificato deve terminare con l'estensione ** .

## iOS stranezze

*   iOS solo i record per i file di tipo *WAV* e restituisce un errore se il file di nome estensione è non corretto.

*   Se non è specificato un percorso completo, la registrazione viene inserita nell'applicazione `documents/tmp` directory. Questo si può accedere tramite il `<a href="../file/fileobj/fileobj.html">File</a>` API utilizzando `Local<a href="../file/filesystem/filesystem.html"><a href="../file/fileobj/fileobj.html">File</a>System</a>.TEMPORARY` . Deve esistere alcuna sottodirectory specificate a tempo di record.

*   I file possono essere registrati e giocati indietro usando i documenti URI:
    
        var my<a href="media.html">Media</a> = new <a href="media.html">Media</a>("documents://beer.mp3")
        

## Tizen stranezze

*   Tizen periferiche non supportano.