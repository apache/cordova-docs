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

title: capture.captureVideo
---

# capture.captureVideo

> Start the video recorder application and return information about captured video clip files.

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );

## Description

Starts an asynchronous operation to capture video recordings using the
device's video recording application.  The operation allows the user
to capture more than one recordings in a single session.

The capture operation ends when either the user exits the video
recording application, or the maximum number of recordings specified
by `[CaptureVideoOptions](captureVideoOptions.html).limit` is reached.  If no `limit` parameter
value is specified, it defaults to one (1), and the capture operation
terminates after the user records a single video clip.

When the capture operation finishes, it the `[CaptureCB](CaptureCB.html)` callback
executes with an array of `[MediaFile](MediaFile.html)` objects describing each captured
video clip file.  If the user terminates the operation before
capturing a video clip, the `[CaptureErrorCB](CaptureErrorCB.html)` callback executes with a
`[CaptureError](CaptureError.html)` object featuring a
`[CaptureError](CaptureError.html).CAPTURE_NO_MEDIA_FILES` error code.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick Example

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

    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Video</title>

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
        function captureVideo() {
            // Launch device video recording application,
            // allowing user to capture up to 2 video clips
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureVideo();">Capture Video</button> <br>
        </body>
    </html>

## BlackBerry WebWorks Quirks

- Cordova for BlackBerry WebWorks attempts to launch the __Video Recorder__ application, provided by RIM, to capture video recordings. The app receives a `[CaptureError](CaptureError.html).CAPTURE_NOT_SUPPORTED` error code if the application is not installed on the device.

