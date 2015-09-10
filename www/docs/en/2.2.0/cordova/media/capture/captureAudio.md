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

capture.captureAudio
====================

> Start the audio recorder application and return information about captured audio clip file(s).

    navigator.device.capture.captureAudio( 
	    <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> captureSuccess, <a href="capture.html">Capture</a>ErrorCB captureError,  [<a href="capture.html">Capture</a>AudioOptions options]
	);

Description
-----------

This method starts an asynchronous operation to capture audio recordings using the device's default audio recording application.  The operation allows the device user to capture multiple recordings in a single session.

The capture operation ends when either the user exits the audio recording application, or the maximum number of recordings, specified by the __limit__ parameter in <a href="capture.html">Capture</a>AudioOptions, has been reached.  If no value is provided for the __limit__ parameter, a default value of one (1) is used, and the capture operation will terminate after the user records a single audio clip.

When the capture operation is finished, it will invoke the <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> callback with an array of <a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a> objects describing each captured audio clip file.  If the operation is terminated by the user before an audio clip is captured, the <a href="capture.html">Capture</a>ErrorCB callback will be invoked with a <a href="capture.html">Capture</a>Error object with the <a href="capture.html">Capture</a>Error.`CAPTURE_NO_MEDIA_FILES` error code.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------

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
        navigator.<a href="../../notification/notification.alert.html">notification.alert</a>('Error code: ' + error.code, null, '<a href="capture.html">Capture</a> Error');
    };

    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="capture.html">Capture</a> Audio</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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
            navigator.<a href="../../notification/notification.alert.html">notification.alert</a>(msg, null, 'Uh oh!');
        }

        // A button will call this function
        //
        function captureAudio() {
            // Launch device audio recording application, 
            // allowing user to capture up to 2 audio clips
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureAudio();"><a href="capture.html">Capture</a> Audio</button> <br>
        </body>
    </html>

BlackBerry WebWorks Quirks
--------------------------

- Cordova for BlackBerry WebWorks attempts to launch the __Voice Notes Recorder__ application, provided by RIM, to capture the audio recordings.  The developer will receive a <a href="capture.html">Capture</a>Error.`CAPTURE_NOT_SUPPORTED` error code if the application is not installed on the device.

iOS Quirks
----------

- iOS does not have a default audio recording application so a simple user interface is provided.

Windows Phone 7 Quirks
----------

- Windows Phone 7 does not have a default audio recording application so a simple user interface is provided.
