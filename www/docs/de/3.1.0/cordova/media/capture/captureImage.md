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

# capture.captureImage

> Starten Sie die <a href="../../camera/camera.html">Kamera</a>anwendung und geben Informationen über aufgenommene Bild-<a href="../../file/fileobj/fileobj.html">Datei</a>en zurück.

    navigator.device.capture.captureImage(
        <a href="CaptureCB.html">CaptureCB</a> captureSuccess, <a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a> captureError, [<a href="captureImageOptions.html">CaptureImageOptions</a> options]
    );
    

## Beschreibung

Beginnt einen asynchronen Vorgang, um Aufnahmen mit <a href="../../camera/camera.html">Kamera</a>-Anwendung des <a href="../../device/device.html">Gerät</a>s. Die Operation erlaubt Benutzern, mehr als ein Bild in einer einzigen Sitzung zu erfassen.

Der Capture-Vorgang endet entweder, wenn der Benutzer schließt die <a href="../../camera/camera.html">Kamera</a>anwendung oder die maximale Anzahl an Aufnahmen von angegebenen `<a href="captureAudioOptions.html">CaptureAudioOptions</a>.limit` erreicht ist. Wenn keine `limit` angegeben ist, wird standardmaessig eins (1) und der Capture-Vorgang beendet, nachdem der Benutzer ein einzelnes Bild erfasst.

Wenn der Capture-Vorgang abgeschlossen ist, ruft es die `<a href="CaptureCB.html">CaptureCB</a>` Rückruf mit einem Array von `<a href="MediaFile.html">MediaFile</a>` Objekten beschreibt jede aufgenommene Bild-<a href="../../file/fileobj/fileobj.html">Datei</a>. Wenn der Benutzer den Vorgang vor dem Aufzeichnen eines Abbilds beendet die `<a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a>` Rückruf führt mit einem `<a href="CaptureError.html">CaptureError</a>` Objekt mit eine `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NO_MEDIA_FILES` Fehlercode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Windows Phone 7 Macken

Die native <a href="../../camera/camera.html">Kamera</a>anwendung aufrufen, während Ihr <a href="../../device/device.html">Gerät</a> via Zune angeschlossen ist, funktioniert nicht, und die Fehler-Callback führt.

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
            var ft = new <a href="../../file/filetransfer/filetransfer.html">FileTransfer</a>(),
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