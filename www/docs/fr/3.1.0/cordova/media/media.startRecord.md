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

Pour démarrer l'enregistrement d'un fichier audio.

    media.startRecord() ;
    

## Description

La `media.startRecord` méthode s'exécute de façon synchrone, démarre un enregistrement pour un fichier audio.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

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
    

## Exemple complet

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
                setAudio<a href="../geolocation/Position/position.html">Position</a>(recTime + " sec");
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
        function setAudio<a href="../geolocation/Position/position.html">Position</a>(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
    
        </script>
      </head>
      <body>
        <p id="media">Recording audio...</p>
        <p id="audio_position"></p>
      </body>
    </html>
    

## Bizarreries Android

*   <a href="../device/device.html">Appareil</a>s Android enregistrent de l'audio en format Adaptive Multi-Rate. Le fichier spécifié doit se terminer par une extension *.amr* .

## BlackBerry WebWorks Quirks

*   <a href="../device/device.html">Appareil</a>s blackBerry enregistrent de l'audio en format Adaptive Multi-Rate. Le fichier spécifié doit se terminer par une extension *.amr* .

## iOS Quirks

*   iOS uniquement les enregistrements de fichiers de type *.wav* et renvoie une erreur si l'extension de nom de fichier n'est pas correctement.

*   Si un chemin d'accès complet n'est pas fourni, l'enregistrement est placé dans l'application `documents/tmp` répertoire. Ce qui peut être consulté le `<a href="../file/fileobj/fileobj.html">File</a>` à l'aide de l'API `Local<a href="../file/filesystem/filesystem.html"><a href="../file/fileobj/fileobj.html">File</a>System</a>.TEMPORARY` . N'importe quel sous-répertoire spécifié au moment de l'enregistrement doit déjà exister.

*   Les fichiers peuvent être enregistrés et lus à l'aide de l'URI les documents :
    
        var my<a href="media.html">Media</a> = new <a href="media.html">Media</a>("documents://beer.mp3")
        

## Bizarreries de paciarelli

*   Pas pris en charge sur les appareils paciarelli.