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

> Die audio-Recorder-Anwendung starten und geben Informationen über aufgenommene audio-Clip-Dateien zurück.

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## Beschreibung

Beginnt einen asynchronen Vorgang, Audioaufnahmen, die audio-Aufnahme-Standardanwendung des Geräts erfassen. Die Operation erlaubt dem Benutzer des Geräts, mehrere Aufnahmen in einer einzigen Sitzung zu erfassen.

Der Capture-Vorgang endet, wenn entweder vom Benutzer beendet die Audio wird-recording-Anwendung oder die maximale Anzahl der Aufnahmen, die festgelegten `CaptureAudioOptions.limit` erreicht ist. Wenn keine `limit` Parameterwert angegeben ist, wird standardmaessig eins (1) und der Capture-Vorgang beendet, nachdem der Benutzer ein einzelnes audio-Clips aufgezeichnet.

Wenn der Capture-Vorgang abgeschlossen ist, die `CaptureCallback` führt mit einer Reihe von `MediaFile` Objekten beschreiben jedes audio-Clip-Datei erfasst. Wenn der Benutzer den Vorgang beendet wird, bevor ein Audioclip erfasst wird, die `CaptureErrorCallback` führt mit einem `CaptureError` -Objekt, mit der `CaptureError.CAPTURE_NO_MEDIA_FILES` Fehlercode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

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
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## Vollständiges Beispiel

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
    

## BlackBerry WebWorks Macken

*   Cordova für BlackBerry WebWorks versucht **Voice Notes Recorder** Starten der Anwendung, bereitgestellt durch RIM, Audioaufnahmen zu erfassen. Die app erhält eine `CaptureError.CAPTURE_NOT_SUPPORTED` Fehlercode, wenn die Anwendung nicht auf dem Gerät installiert ist.

## iOS Macken

*   iOS muss keine Standard-audio-Recording-Anwendung, so dass eine einfache Benutzeroberfläche bereitgestellt wird.

## Windows Phone 7 und 8 Macken

*   Windows Phone 7 muss keine Standard-audio-Recording-Anwendung, so dass eine einfache Benutzeroberfläche bereitgestellt wird.