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

# capture.captureImage

> Starten Sie die Kameraanwendung und geben Informationen über aufgenommene Bild-Dateien zurück.

    navigator.device.capture.captureImage(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
    );
    

## Beschreibung

Beginnt einen asynchronen Vorgang, um Aufnahmen mit Kamera-Anwendung des Geräts. Die Operation erlaubt Benutzern, mehr als ein Bild in einer einzigen Sitzung zu erfassen.

Der Capture-Vorgang endet entweder, wenn der Benutzer schließt die Kameraanwendung oder die maximale Anzahl an Aufnahmen von angegebenen `CaptureAudioOptions.limit` erreicht ist. Wenn keine `limit` angegeben ist, wird standardmaessig eins (1) und der Capture-Vorgang beendet, nachdem der Benutzer ein einzelnes Bild erfasst.

Wenn der Capture-Vorgang abgeschlossen ist, ruft es die `CaptureCB` Rückruf mit einem Array von `MediaFile` Objekten beschreibt jede aufgenommene Bild-Datei. Wenn der Benutzer den Vorgang vor dem Aufzeichnen eines Abbilds beendet die `CaptureErrorCB` Rückruf führt mit einem `CaptureError` Objekt mit eine `CaptureError.CAPTURE_NO_MEDIA_FILES` Fehlercode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Windows Phone 7 Macken

Die native Kameraanwendung aufrufen, während Ihr Gerät via Zune angeschlossen ist, funktioniert nicht, und die Fehler-Callback führt.

## Kleines Beispiel

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
    
    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>
    
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
        function captureImage() {
            // Launch device camera application,
            // allowing user to capture up to 2 images
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureImage();">Capture Image</button> <br>
        </body>
    </html>