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

capture.captureImage
====================

> Start the camera application and return information about captured image file(s).

    navigator.device.capture.captureImage( 
	    <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> captureSuccess, <a href="capture.html">Capture</a>ErrorCB captureError, [<a href="capture.html">Capture</a>ImageOptions options]
	);

Description
-----------

This method starts an asynchronous operation to capture images using the device camera application.  The operation allows the device user to capture multiple images in a single session.

The capture operation ends when either the user exits the camera application, or the maximum number of images, specified by the __limit__ parameter in <a href="capture.html">Capture</a>ImageOptions, has been reached.  If no value is provided for the __limit__ parameter, a default value of one (1) is used, and the capture operation will terminate after the user captures a single image.

When the capture operation is finished, it will invoke the <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> callback with an array of <a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a> objects describing each captured image file.  If the operation is terminated by the user before an image is captured, the <a href="capture.html">Capture</a>ErrorCB callback will be invoked with a <a href="capture.html">Capture</a>Error object with the <a href="capture.html">Capture</a>Error.`CAPTURE_NO_MEDIA_FILES` error code.

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

    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="capture.html">Capture</a> Image</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
        function captureImage() {
            // Launch device camera application, 
            // allowing user to capture up to 2 images
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureImage();"><a href="capture.html">Capture</a> Image</button> <br>
        </body>
    </html>


Bada Quirks
-----------

Bada supports _captureImage_ just like the other platforms. However there is _another_ mode where you can capture a video or an image straight in the webview without launching any camera app. In order to do that you need to:

1. create a _&#60;div&#62;_ element somewhere in your document and give it an id (such as "preview"). 

        <div id="preview"></div>

2. Initialize the camera preview with the following method

        navigator.camera.<a href="../../splashscreen/splashscreen.show.html">show</a>Preview("preview");

3. Once you get the preview you can

    3.1 <a href="capture.html">Capture</a> an image with

        var options = { destination<a href="../../file/fileobj/fileobj.html">File</a>name: "images/cam01.jpg", highRes: false};
        navigator.capture.captureImage(success, fail, options);
    
3. Hide the camera preview with the following method

        navigator.camera.<a href="../../splashscreen/splashscreen.hide.html">hide</a>Preview("preview");

