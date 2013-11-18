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

> Za¾enite aplikacijo slišan zapisnikar in vrne informacije o datotekah posnete avdio posnetek.

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## Opis

Začne asinhrone operacije za zajemanje avdio posnetkov z uporabo naprave privzeti program za snemanje zvoka. Delovanje naprave uporabniku omogoča, da zajame več posnetkov v eno sejo.

Zajemanje postopek se konča, ko bodisi uporabnik zapre avdio snemanje program ali največje število posnetkov, ki ga `CaptureAudioOptions.limit` je dosegel. Če ni `limit` vrednost parametra je določena, je privzeta nastavitev za eno (1) in zajemanje operacija zaključi po uporabnik beleži en zvočni posnetek.

Ko kapitan operacija konča, je `CaptureCallback` izvede s paleto `MediaFile` predmeti, opis vsakega captured datoteka zvočnega posnetka. Če uporabnik konča operacijo pred zvočnega posnetka je ujet, je `CaptureErrorCallback` izvede z a `CaptureError` predmeta, featuring je `CaptureError.CAPTURE_NO_MEDIA_FILES` koda napake.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

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
    

## Celoten primer

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
    

## BlackBerry WebWorks Quirks

*   Cordova za BlackBerry WebWorks poskuša začela **Diktafon ugotavlja** uporabe, pod pogojem, Rim, da zajame audio posnetkov. App prejme a `CaptureError.CAPTURE_NOT_SUPPORTED` zmota zbornik če aplikacija ni nameščena na napravi.

## iOS Quirks

*   iOS nima privzeti program za snemanje zvoka, tako preprost uporabniški vmesnik je na voljo.

## Windows Phone 7 in 8 Quirks

*   Windows Phone 7 nima privzeti program za snemanje zvoka, tako preprost uporabniški vmesnik je na voljo.