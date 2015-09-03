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


Camera
======

> The `camera` object provides access to the device's default camera application.

Methods
-------

- camera.getPicture
- camera.cleanup

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Camera" value="org.apache.cordova.CameraLauncher" />

#### app/AndroidManifest

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>CAMERA</Name>
    </Privilege>
    <Privilege>
        <Name>RECORDING</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Camera" value="org.apache.cordova.camera.Camera" />

#### www/config.xml

    <feature id="blackberry.media.camera" />

    <rim:permissions>
        <rim:permit>use_camera</rim:permit>
    </rim:permissions>

### iOS

#### config.xml

    <plugin name="Camera" value="CDVCamera" />

### webOS

    No permissions are required.

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_ISV_CAMERA" />
        <Capability Name="ID_HW_FRONTCAMERA" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

#### config.xml

    <feature name="http://tizen.org/api/application" required="true"/>
    <feature name="http://tizen.org/api/application.launch" required="true"/>

Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)



camera.getPicture
=================

Takes a photo using the camera or retrieves a photo from the device's album.
The image is passed to the success callback as a base64 encoded `String` or as the URI of an image file.
The method itself returns a CameraPopoverHandle object, which can be used to reposition the file selection popover.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

Description
-----------

Function `camera.getPicture` opens the device's default camera application so that the user can take a picture (if `Camera.sourceType = Camera.PictureSourceType.CAMERA`, which is the default). Once the photo is taken, the camera application closes and your application is restored.

If `Camera.sourceType = Camera.PictureSourceType.PHOTOLIBRARY` or `Camera.PictureSourceType.SAVEDPHOTOALBUM`, then a photo chooser dialog is shown, from which a photo from the album can be selected.  A `CameraPopoverHandle` object, which can be used to reposition the photo chooser dialog (eg. when the device orientation changes) is returned by `camera.getPicture`.

The return value will be sent to the `cameraSuccess` function, in one of the following formats, depending on the `cameraOptions` you specify:

- A `String` containing the Base64 encoded photo image.
- A `String` representing the image file location on local storage (default).

You can do whatever you want with the encoded image or URI, for example:

- Render the image in an `<img>` tag _(see example below)_
- Save the data locally (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc)
- Post the data to a remote server

__Note:__ The image quality of pictures taken using the camera on newer devices is quite good, and images from the Photo Album will not be downscaled to a lower quality, even if a quality parameter is specified.  ___Encoding such images using Base64 has caused memory issues on many newer devices.  Therefore, using FILE\_URI as the 'Camera.destinationType' is highly recommended.___

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Bada 1.2
- webOS
- Tizen
- Windows 8

iOS Quirks
----------

Including a JavaScript alert() in either of the callback functions can cause problems.  Wrap the alert in a setTimeout() to allow the iOS image picker or popover to fully close before the alert is displayed: 

    setTimeout(function() { 
        // do your thing here!
    }, 0);

Windows Phone 7 Quirks
----------------------

Invoking the native camera application while your device is connected
via Zune will not work, and the error callback will be triggered.

Tizen Quirks
----------------------

Only 'destinationType: Camera.DestinationType.FILE_URI' and 'sourceType: Camera.PictureSourceType.PHOTOLIBRARY' are supported.

Quick Example
-------------

Take photo and retrieve Base64-encoded image:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
     }); 

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

Take photo and retrieve image file location: 

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
        destinationType: Camera.DestinationType.FILE_URI }); 

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }


Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value 
        
        // Wait for Cordova to connect with the device
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // Cordova is ready to be used!
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }

        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64 encoded image data
          // console.log(imageData);
      
          // Get image handle
          //
          var smallImage = document.getElementById('smallImage');
      
          // Unhide image elements
          //
          smallImage.style.display = 'block';
      
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }

        // Called when a photo is successfully retrieved
        //
        function onPhotoURISuccess(imageURI) {
          // Uncomment to view the image file URI 
          // console.log(imageURI);
      
          // Get image handle
          //
          var largeImage = document.getElementById('largeImage');
      
          // Unhide image elements
          //
          largeImage.style.display = 'block';
      
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          largeImage.src = imageURI;
        }

        // A button will call this function
        //
        function capturePhoto() {
          // Take picture using device camera and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
        }

        // A button will call this function
        //
        function capturePhotoEdit() {
          // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function getPhoto(source) {
          // Retrieve image file location from specified source
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }

        // Called if something bad happens.
        // 
        function onFail(message) {
          alert('Failed because: ' + message);
        }

        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capture Photo</button> <br>
        <button onclick="capturePhotoEdit();">Capture Editable Photo</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>



cameraSuccess
=============

onSuccess callback function that provides the image data.

    function(imageData) {
        // Do something with the image
    }

Parameters
----------

- __imageData:__ Base64 encoding of the image data, OR the image file URI, depending on `cameraOptions` used. (`String`)

Example
-------

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


cameraError
===========

onError callback function that provides an error message.

    function(message) {
        // Show a helpful message
    }

Parameters
----------

- __message:__ The message is provided by the device's native code. (`String`)


cameraOptions
=============

Optional parameters to customize the camera settings.

    { quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false };

Options
-------

- __quality:__ Quality of saved image. Range is [0, 100]. (`Number`)

- __destinationType:__ Choose the format of the return value.  Defined in navigator.camera.DestinationType (`Number`)

        Camera.DestinationType = {
            DATA_URL : 0,                // Return image as base64 encoded string
            FILE_URI : 1,                // Return image file URI
            NATIVE_URI : 2               // Return image native URI (eg. assets-library:// on iOS or content:// on Android)
        };

- __sourceType:__ Set the source of the picture.  Defined in nagivator.camera.PictureSourceType (`Number`)

        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit:__ Allow simple editing of image before selection. (`Boolean`)

- __encodingType:__ Choose the encoding of the returned image file.  Defined in navigator.camera.EncodingType (`Number`)

        Camera.EncodingType = {
            JPEG : 0,               // Return JPEG encoded image
            PNG : 1                 // Return PNG encoded image
        };

- __targetWidth:__ Width in pixels to scale image. Must be used with targetHeight.  Aspect ratio is maintained. (`Number`)
- __targetHeight:__ Height in pixels to scale image. Must be used with targetWidth. Aspect ratio is maintained. (`Number`)

- __mediaType:__ Set the type of media to select from.  Only works when PictureSourceType is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in nagivator.camera.MediaType (`Number`)

        Camera.MediaType = {
            PICTURE: 0,             // allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType
            VIDEO: 1,               // allow selection of video only, WILL ALWAYS RETURN FILE_URI
            ALLMEDIA : 2            // allow selection from all media types
};

- __correctOrientation:__ Rotate the image to correct for the orientation of the device during capture. (`Boolean`)
- __saveToPhotoAlbum:__ Save the image to the photo album on the device after capture. (`Boolean`)
- __popoverOptions:__ iOS only options to specify popover location in iPad.  Defined in CameraPopoverOptions.
- __cameraDirection:__ Choose the camera to use (front- or back-facing).  Defined in navigator.camera.Direction (`Number`)

        Camera.Direction = {
            BACK : 0,           // Use the back-facing camera
            FRONT : 1           // Use the front-facing camera
        };

Android Quirks
--------------

- Ignores the `allowEdit` parameter.
- Camera.PictureSourceType.PHOTOLIBRARY and Camera.PictureSourceType.SAVEDPHOTOALBUM both display the same photo album.

BlackBerry Quirks
-----------------

- Ignores the `quality` parameter.
- Ignores the `sourceType` parameter.
- Ignores the `allowEdit` parameter.
- Application must have key injection permissions to close native Camera application after photo is taken.
- Using Large image sizes may result in inability to encode image on later model devices with high resolution cameras (e.g. Torch 9800).
- Camera.MediaType is not supported.
- Ignores the `correctOrientation` parameter.
- Ignores the `cameraDirection` parameter.

webOS Quirks
-----------

- Ignores the `quality` parameter.
- Ignores the `sourceType` parameter.
- Ignores the `allowEdit` parameter.
- Camera.MediaType is not supported.
- Ignores the `correctOrientation` parameter.
- Ignores the `saveToPhotoAlbum` parameter.
- Ignores the `cameraDirection` parameter.

iOS Quirks
--------------

- Set `quality` below 50 to avoid memory error on some devices.
- When `destinationType.FILE_URI` is used, photos are saved in the application's temporary directory. 

Windows Phone 7 and 8 Quirks
--------------

- Ignores the `allowEdit` parameter.
- Ignores the `correctOrientation` parameter.
- Ignores the `cameraDirection` parameter.

Bada 1.2 Quirks
--------------
- options not supported
- always returns a FILE URI

Tizen Quirks
--------------
- options not supported
- always returns a FILE URI



CameraPopoverOptions
====================

Parameters only used by iOS to specify the anchor element location and arrow direction of popover used on iPad when selecting images from the library or album.

    { x : 0, 
      y :  32,
      width : 320,
      height : 480,
      arrowDir : Camera.PopoverArrowDirection.ARROW_ANY
    };

CameraPopoverOptions
--------------------

- __x:__ x pixel coordinate of element on the screen to anchor popover onto. (`Number`)

- __y:__ y pixel coordinate of element on the screen to anchor popover onto. (`Number`)

- __width:__ width, in pixels, of the element on the screen to anchor popover onto. (`Number`)

- __height:__ height, in pixels, of the element on the screen to anchor popover onto. (`Number`)

- __arrowDir:__ Direction the arrow on the popover should point.  Defined in Camera.PopoverArrowDirection (`Number`)
        
            Camera.PopoverArrowDirection = {
                ARROW_UP : 1,        // matches iOS UIPopoverArrowDirection constants
                ARROW_DOWN : 2,
                ARROW_LEFT : 4,
                ARROW_RIGHT : 8,
                ARROW_ANY : 15
            };
  
Note that the size of the popover may change to adjust to the direction of the arrow and orientation of the screen.  Make sure to account for orientation changes when specifying the anchor element location. 

Quick Example
-------------

     var popover = new CameraPopoverOptions(300,300,100,100,Camera.PopoverArrowDirection.ARROW_ANY);
     var options = { quality: 50, destinationType: Camera.DestinationType.DATA_URL,sourceType: Camera.PictureSource.SAVEDPHOTOALBUM, popoverOptions : popover };
     
     navigator.camera.getPicture(onSuccess, onFail, options);
     
     function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
     



CameraPopoverHandle
===================

A handle to the popover dialog created by `camera.getPicture`.

Methods
-------

- __setPosition:__ Set the position of the popover.

Supported Platforms
-------------------

- iOS

setPosition
-----------

Set the position of the popover.

__Parameters:__
- cameraPopoverOptions - the CameraPopoverOptions specifying the new position

Quick Example
-------------

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);

Full Example
------------

     function onSuccess(imageData) {
          // Do stuff with the image!
     }

     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }

     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });

     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }

