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

media.startRecord
=================

Starts recording an audio file.

    media.startRecord();


Description
-----------

Function `media.startRecord` is a synchronous function that starts recording an audio file.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8
    
Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

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


Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../device/device.html">Device</a> Properties <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

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

        // Cordova is ready
        //
        function on<a href="../device/device.html">Device</a>Ready() {
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

Android Quirks
----------

- Android devices record audio in Adaptive Multi-Rate format. The specified file should end with a .amr extension.

BlackBerry WebWorks Quirks
----------

- BlackBerry devices record audio in Adaptive Multi-Rate format. The specified file must end with a .amr extension.

iOS Quirks
----------

- iOS only records to files of type .wav and returns an error if the file name extension is not correct.
- If a full path is not provided the recording will be placed in the <application>/documents/tmp directory.  This can be accessed via the <a href="../file/fileobj/fileobj.html">File</a> apis using Local<a href="../file/filesystem/filesystem.html"><a href="../file/fileobj/fileobj.html">File</a>System</a>.TEMPORARY.  Subdirectories are not created at record time and must already exist.  Thus,  myRecording.wav will work but recordings/myRecording.wav will not if the recordings directory does not already exist at <application>/documents/tmp/.
- <a href="../file/fileobj/fileobj.html">File</a>s can be recorded and played back using the documents URI:

        var my<a href="media.html">Media</a> = new <a href="media.html">Media</a>("documents://beer.mp3")

Tizen Quirks
----------

- This API is not supported on Tizen devices.
