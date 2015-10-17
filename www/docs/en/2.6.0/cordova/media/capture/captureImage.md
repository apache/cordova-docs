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

capture.captureImage
====================

> Start the camera application and return information about captured image file(s).

    navigator.device.capture.captureImage( 
	    [CaptureCB](CaptureCB.html) captureSuccess, [CaptureErrorCB](CaptureErrorCB.html) captureError, [CaptureImageOptions options]
	);

Description
-----------

This method starts an asynchronous operation to capture images using the device camera application.  The operation allows the device user to capture multiple images in a single session.

The capture operation ends when either the user exits the camera application, or the maximum number of images, specified by the __limit__ parameter in [CaptureImageOptions](captureImageOptions.html), has been reached.  If no value is provided for the __limit__ parameter, a default value of one (1) is used, and the capture operation will terminate after the user captures a single image.

When the capture operation is finished, it will invoke the [CaptureCB](CaptureCB.html) callback with an array of [MediaFile](MediaFile.html) objects describing each captured image file.  If the operation is terminated by the user before an image is captured, the [CaptureErrorCB](CaptureErrorCB.html) callback will be invoked with a [CaptureError](CaptureError.html) object with the [CaptureError](CaptureError.html).`CAPTURE_NO_MEDIA_FILES` error code.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Bada 2.x
- Windows 8

Windows Phone 7 Quirks
----------------------

Invoking the native camera application while your device is connected
via Zune will not work, and the error callback will be triggered.

Quick [Example](../../storage/storage.opendatabase.html)
-------------

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

Full [Example](../../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
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


Bada Quirks
-----------

Bada supports _captureImage_ just like the other platforms. However there is _another_ mode where you can capture a video or an image straight in the webview without launching any camera app. In order to do that you need to:

1. create a _&#60;div&#62;_ element somewhere in your document and give it an id (such as "preview"). 

        <div id="preview"></div>

2. Initialize the camera preview with the following method

        navigator.camera.showPreview("preview");

3. Once you get the preview you can

    3.1 Capture an image with

        var options = { destinationFilename: "images/cam01.jpg", highRes: false};
        navigator.capture.captureImage(success, fail, options);
    
3. Hide the camera preview with the following method

        navigator.camera.hidePreview("preview");

