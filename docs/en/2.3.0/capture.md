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


Capture
=======

> Provides access to the audio, image, and video capture capabilities of the device.

Objects
-------

- Capture
- CaptureAudioOptions
- CaptureImageOptions
- CaptureVideoOptions
- CaptureCB
- CaptureErrorCB
- ConfigurationData
- MediaFile
- MediaFileData

Methods
-------

- capture.captureAudio
- capture.captureImage
- capture.captureVideo
- MediaFile.getFormatData

Scope
-----

The __capture__ object is assigned to the __navigator.device__ object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;

Properties
----------

- __supportedAudioModes:__ The audio recording formats supported by the device. (ConfigurationData[])
- __supportedImageModes:__ The recording image sizes and formats supported by the device. (ConfigurationData[])
- __supportedVideoModes:__ The recording video resolutions and formats supported by the device. (ConfigurationData[])

Methods
-------

- capture.captureAudio: Launch the device audio recording application for recording audio clip(s).
- capture.captureImage: Launch the device camera application for taking image(s).
- capture.captureVideo: Launch the device video recorder application for recording video(s).


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.Capture"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />   

### Bada

#### manifest.xml

    <Privilege>
        <Name>RECORDING</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture" />

#### www/config.xml

    <feature id="blackberry.system"  required="true" version="1.0.0.0" />
    <feature id="blackberry.io.file" required="true" version="1.0.0.0" />

### iOS

#### config.xml

    <plugin name="Capture" value="CDVCapture" />

### webOS

    No permissions are required.

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_MEDIALIB" />
        <Capability Name="ID_CAP_MICROPHONE" />
        <Capability Name="ID_HW_FRONTCAMERA" />
        <Capability Name="ID_CAP_ISV_CAMERA" />
        <Capability Name="ID_CAP_CAMERA" />
    </Capabilities>



capture.captureAudio
====================

> Start the audio recorder application and return information about captured audio clip file(s).

    navigator.device.capture.captureAudio( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
	);

Description
-----------

This method starts an asynchronous operation to capture audio recordings using the device's default audio recording application.  The operation allows the device user to capture multiple recordings in a single session.

The capture operation ends when either the user exits the audio recording application, or the maximum number of recordings, specified by the __limit__ parameter in CaptureAudioOptions, has been reached.  If no value is provided for the __limit__ parameter, a default value of one (1) is used, and the capture operation will terminate after the user records a single audio clip.

When the capture operation is finished, it will invoke the CaptureCB callback with an array of MediaFile objects describing each captured audio clip file.  If the operation is terminated by the user before an audio clip is captured, the CaptureErrorCB callback will be invoked with a CaptureError object with the CaptureError.`CAPTURE_NO_MEDIA_FILES` error code.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

Quick Example
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

    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
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

BlackBerry WebWorks Quirks
--------------------------

- Cordova for BlackBerry WebWorks attempts to launch the __Voice Notes Recorder__ application, provided by RIM, to capture the audio recordings.  The developer will receive a CaptureError.`CAPTURE_NOT_SUPPORTED` error code if the application is not installed on the device.

iOS Quirks
----------

- iOS does not have a default audio recording application so a simple user interface is provided.

Windows Phone 7 and 8 Quirks
----------

- Windows Phone 7 does not have a default audio recording application so a simple user interface is provided.



CaptureAudioOptions
===================

> Encapsulates audio capture configuration options.

Properties
----------

- __limit:__ The maximum number of audio clips the device user can record in a single capture operation.  The value must be greater than or equal to 1 (defaults to 1).
- __duration:__ The maximum duration of an audio sound clip, in seconds.
- __mode:__ The selected audio mode.  The value must match one of the elements in `capture.supportedAudioModes`.

Quick Example
-------------

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };

    navigator.device.capture.captureAudio(captureSuccess, captureError, options);

Android Quirks
--------------

- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The audio recording format cannot be altered programmatically.  Recordings are encoded using Adaptive Multi-Rate (AMR) format (audio/amr).

BlackBerry WebWorks Quirks
--------------------------

- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The audio recording format cannot be altered programmatically.  Recordings are encoded using Adaptive Multi-Rate (AMR) format (audio/amr).

iOS Quirks
----------

- The __limit__ parameter is not supported. One recording can be created for each invocation.
- The __mode__ parameter is not supported.  The audio recording format cannot be altered programmatically.  Recordings are encoded using Waveform Audio (WAV) format (audio/wav).



capture.captureImage
====================

> Start the camera application and return information about captured image file(s).

    navigator.device.capture.captureImage( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
	);

Description
-----------

This method starts an asynchronous operation to capture images using the device camera application.  The operation allows the device user to capture multiple images in a single session.

The capture operation ends when either the user exits the camera application, or the maximum number of images, specified by the __limit__ parameter in CaptureImageOptions, has been reached.  If no value is provided for the __limit__ parameter, a default value of one (1) is used, and the capture operation will terminate after the user captures a single image.

When the capture operation is finished, it will invoke the CaptureCB callback with an array of MediaFile objects describing each captured image file.  If the operation is terminated by the user before an image is captured, the CaptureErrorCB callback will be invoked with a CaptureError object with the CaptureError.`CAPTURE_NO_MEDIA_FILES` error code.

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

Quick Example
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

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
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




CaptureImageOptions
===================

> Encapsulates image capture configuration options.

Properties
----------

- __limit:__ The maximum number of images the device user can capture in a single capture operation.  The value must be greater than or equal to 1 (defaults to 1).
- __mode:__ The selected image mode.  The value must match one of the elements in `capture.supportedImageModes`.

Quick Example
-------------

    // limit capture operation to 3 images
    var options = { limit: 3 };

    navigator.device.capture.captureImage(captureSuccess, captureError, options);

Android Quirks
--------------

- The __mode__ parameter is not supported.  The image size and format cannot be altered programmatically; however, the image size can be altered by the device user.  Images are saved in JPEG format (image/jpeg).

BlackBerry WebWorks Quirks
--------------------------

- The __mode__ parameter is not supported.  The image size and format cannot be altered programmatically; however, the image size can be altered by the device user.  Images are saved in JPEG format (image/jpeg).

iOS Quirks
----------

- The __limit__ parameter is not supported. One image is taken per invocation.
- The __mode__ parameter is not supported.  The image size and format cannot be altered programmatically.  Images are saved in JPEG format (image/jpeg).



capture.captureVideo
====================

> Start the video recorder application and return information about captured video clip file(s).

    navigator.device.capture.captureVideo( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
	);

Description
-----------

This method starts an asynchronous operation to capture video recordings using the device video recording application.  The operation allows the device user to capture multiple recordings in a single session.

The capture operation ends when either the user exits the video recording application, or the maximum number of recordings, specified by the __limit__ parameter in CaptureVideoOptions, has been reached.  If no value is provided for the __limit__ parameter, a default value of one (1) is used, and the capture operation will terminate after the user records a single video clip.

When the capture operation is finished, it will invoke the CaptureCB callback with an array of MediaFile objects describing each captured video clip file.  If the operation is terminated by the user before an video clip is captured, the CaptureErrorCB callback will be invoked with a CaptureError object with the CaptureError.`CAPTURE_NO_MEDIA_FILES` error code.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Bada 2.x
- Windows 8

Quick Example
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

    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Video</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
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

BlackBerry WebWorks Quirks
--------------------------

- Cordova for BlackBerry WebWorks attempts to launch the __Video Recorder__ application, provided by RIM, to capture the video recordings.  The developer will receive a CaptureError.`CAPTURE_NOT_SUPPORTED` error code if the application is not installed on the device.

Bada 2.x Quirks
---------------

Bada supports _captureVideo_ just like the other platforms. However there is _another_ mode where you can capture a video or an image straight in the webview without launching any camera apps. In order to do that you need to:

1. create a _&#60;div&#62;_ element somewhere in your document and give it an id (such as "preview"). 

        <div id="preview"></div>

2. Initialize the camera preview with the following method

        navigator.camera.showPreview("preview");

3. Once you get the preview you can

    3.1 Start capturing a video with

        navigator.capture.startVideoCapture(success, fail, {duration: 5000, destinationFilename: "videos/a.3gp"});
    
    3.2 Stop the video capture with

        navigator.capture.stopVideoCapture();

3. Hide the camera preview with the following method

        navigator.camera.hidePreview("preview");




CaptureVideoOptions
===================

> Encapsulates video capture configuration options.

Properties
----------

- __limit:__ The maximum number of video clips the device user can capture in a single capture operation.  The value must be greater than or equal to 1 (defaults to 1).
- __duration:__ The maximum duration of a video clip, in seconds.
- __mode:__ The selected video capture mode.  The value must match one of the elements in `capture.supportedVideoModes`.

Quick Example
-------------

    // limit capture operation to 3 video clips
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

Android Quirks
--------------

- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video size and format cannot be altered programmatically; however, these parameters can be changed by the device user. By default, videos are recorded in 3GPP (video/3gpp) format.


BlackBerry WebWorks Quirks
--------------------------

- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video size and format cannot be altered programmatically; however, these parameters can be changed by the device user. By default, videos are recorded in 3GPP (video/3gpp) format.

iOS Quirks
----------

- The __limit__ parameter is not supported.  One video is recorded per invocation.
- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video size and format cannot be altered programmatically. By default, videos are recorded in MOV (video/quicktime) format.




CaptureError
============

> Encapsulates the error code resulting from a failed media capture operation.

Properties
----------

- __code:__ One of the pre-defined error codes listed below.

Constants
---------

- CaptureError.`CAPTURE_INTERNAL_ERR`: Camera or microphone failed to capture image or sound. 
- CaptureError.`CAPTURE_APPLICATION_BUSY`: Camera application or audio capture application is currently serving other capture request.
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: Invalid use of the API (e.g. limit parameter has value less than one).
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: User exited camera application or audio capture application before capturing anything.
- CaptureError.`CAPTURE_NOT_SUPPORTED`: The requested capture operation is not supported.



CaptureCB
=========

> Invoked upon a successful media capture operation.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };

Description
-----------

This function is invoked after a successful capture operation has completed.  This means a media file has been captured, and either the user has exited the media capture application, or the capture limit has been reached.

Each MediaFile object describes a captured media file.  

Quick Example
-------------

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };



CaptureErrorCB
==============

> Invoked if an error occurs during a media capture operation.

    function captureError( CaptureError error ) { ... };

Description
-----------

This function is invoked if an error occurs when trying to launch a media capture operation and the capture application is busy, if an error occurs while the capture operation is taking place, or if the capture operation has been canceled by the user before any media files have been captured.

This function is invoked with a CaptureError object containing an appropriate error code.

Quick Example
-------------

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };



ConfigurationData
=================

> Encapsulates a set of media capture parameters that a device supports.

Description
-----------

This object is used to describe media capture modes supported by the device.  The configuration data includes the MIME type, and capture dimensions (for video or image capture).  

The MIME types should adhere to [RFC2046](http://www.ietf.org/rfc/rfc2046.txt).  Examples:

- video/3gpp
- video/quicktime
- image/jpeg
- audio/amr
- audio/wav 

Properties
----------

- __type:__ The ASCII-encoded string in lower case representing the media type. (DOMString)
- __height:__ The height of the image or video in pixels.  In the case of a sound clip, this attribute has value 0. (Number)
- __width:__ The width of the image or video in pixels.  In the case of a sound clip, this attribute has value 0. (Number)

Quick Example
-------------

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;

    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }


Not supported by any platform.  All configuration data arrays are empty.


MediaFile
=========

> Encapsulates properties of a media capture file.

Properties
----------

- __name:__ The name of the file, without path information. (DOMString)
- __fullPath:__ The full path of the file, including the name. (DOMString)
- __type:__ The mime type (DOMString)
- __lastModifiedDate:__ The date and time that the file was last modified. (Date)
- __size:__ The size of the file, in bytes. (Number)

Methods
-------

- __MediaFile.getFormatData:__ Retrieves the format information of the media file.


MediaFile.getFormatData
=======================

> Retrieves format information about the media capture file.

    mediaFile.getFormatData( 
        MediaFileDataSuccessCB successCallback, 
        [MediaFileDataErrorCB errorCallback]
    );

Description
-----------

This function asynchronously attempts to retrieve the format information for the media file.  If successful, it invokes the MediaFileDataSuccessCB callback with a MediaFileData object.  If the attempt fails, this function will invoke the MediaFileDataErrorCB callback.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

BlackBerry WebWorks Quirks
--------------------------
There is no API that provides format information of media files.  Therefore, all MediaFileData objects will be returned with default values.  See MediaFileData documentation.

Android Quirks
--------------
The API for retrieving media file format information is limited.  Therefore, not all MediaFileData properties are supported.  See MediaFileData documentation.

iOS Quirks
----------
The API for retrieving media file format information is limited.  Therefore, not all MediaFileData properties are supported.  See MediaFileData documentation.


MediaFileData
=============

> Encapsulates format information about a media file.

Properties
----------

- __codecs:__ The actual format of the audio and video content. (DOMString)
- __bitrate:__ The average bitrate of the content.  In case of an image, this attribute has value 0. (Number)
- __height:__ The height of the image or video in pixels. In the case of a sound clip, this attribute has value 0. (Number)
- __width:__ The width of the image or video in pixels. In the case of a sound clip, this attribute has value 0. (Number)
- __duration:__ The length of the video or sound clip in seconds. In the case of an image, this attribute has value 0. (Number)

BlackBerry WebWorks Quirks
--------------------------
There is no API that provides format information of media files.  So the MediaFileData object returned by the MediaFile.getFormatData function will have the following default values:

- __codecs:__ Not supported. The attribute will always be null.
- __bitrate:__ Not supported.  The attribute will always be 0.
- __height:__ Not supported.  The attribute will always be 0.
- __width:__ Not supported.  The attribute will always be 0.
- __duration:__ Not supported.  The attribute will always be 0.

Android Quirks
--------------
Support for the MediaFileData properties is as follows:

- __codecs:__ Not supported.  The attribute will always be null.
- __bitrate:__ Not supported.  The attribute will always be 0.
- __height:__ Supported.  (Image and video files only).  
- __width:__ Supported.  (Image and video files only). 
- __duration:__ Supported.  (Audio and video files only).

iOS Quirks
----------
Support for the MediaFileData properties is as follows:

- __codecs:__ Not supported.  The attribute will always be null.
- __bitrate:__ Supported on iOS4 devices for audio only. The attribute will always be 0 for image and video.
- __height:__ Supported.  (Image and video files only).  
- __width:__ Supported.  (Image and video files only). 
- __duration:__ Supported.  (Audio and video files only).
