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

title: capture.captureImage
---

# capture.captureImage

> Start the camera application and return information about captured image files.

    navigator.device.capture.captureImage(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
    );

## Description

Starts an asynchronous operation to capture images using the device's
camera application.  The operation allows users to capture more than
one image in a single session.

The capture operation ends either when the user closes the camera
application, or the maximum number of recordings specified by
`[CaptureAudioOptions](captureAudioOptions.html).limit` is reached.  If no `limit` value is
specified, it defaults to one (1), and the capture operation
terminates after the user captures a single image.

When the capture operation finishes, it invokes the `[CaptureCB](CaptureCB.html)`
callback with an array of `[MediaFile](MediaFile.html)` objects describing each captured
image file.  If the user terminates the operation before capturing an
image, the `[CaptureErrorCB](CaptureErrorCB.html)` callback executes with a `[CaptureError](CaptureError.html)`
object featuring a `[CaptureError](CaptureError.html).CAPTURE_NO_MEDIA_FILES` error code.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## Windows Phone 7 Quirks

Invoking the native camera application while your device is connected
via Zune does not work, and the error callback executes.

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

    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});

## Full Example

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

