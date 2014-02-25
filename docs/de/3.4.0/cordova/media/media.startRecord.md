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

# media.startRecord

Beginnt mit der Aufnahme einer audio-Datei.

    media.startRecord();
    

## Beschreibung

Die `media.startRecord` -Methode führt synchron, startet eine Aufnahme für eine audio-Datei.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // Record audio
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
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
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Record audio
        //
        function recordAudio() {
            var src = "myrecording.amr";
            var mediaRec = new Media(src, onSuccess, onError);
    
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
    

## Android Macken

*   Android-Geräte aufnehmen Audio im Adaptive Sprachcodecs Format. Die angegebene Datei sollte mit einer Endung *.amr* enden.

## BlackBerry WebWorks Macken

*   BlackBerry-Geräte aufnehmen Audio im Adaptive Sprachcodecs Format. Die angegebene Datei muss mit der Erweiterung *.amr* enden.

## iOS Macken

*   iOS nur Datensätze, die Dateien des Typs *WAV* und gibt ein Fehler, wenn die Dateinamen-Erweiterung ist richtig nicht.

*   Wenn ein vollständiger Pfad nicht angegeben ist, wird die Aufzeichnung in der Anwendung platziert `documents/tmp` Verzeichnis. Erreichbar über die `File` -API verwenden `LocalFileSystem.TEMPORARY` . Allen Unterverzeichnissen in Rekordzeit angegeben muss bereits vorhanden sein.

*   Dateien können aufgezeichnet und spielte mit die Dokumenten URI zurück:
    
        var myMedia = new Media("documents://beer.mp3")
        

## Tizen Macken

*   Tizen Geräten unterstützt nicht.