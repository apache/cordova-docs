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


# Camera

> The `camera` object provides access to the device's default camera application.

__Important privacy note:__ Collection and use of images from a
device's camera raises important privacy issues.  Your app's privacy
policy should discuss how the app uses the camera and whether the
images recorded are shared with any other parties.  In addition, if
the app's use of the camera is not apparent in the user interface, you
should provide a just-in-time notice prior to your app accessing the
camera (if the device operating system doesn't do so already).  That
notice should provide the same information noted above, as well as
obtaining the user's permission (e.g., by presenting choices for
__OK__ and __No Thanks__).  For more information, please see the
Privacy Guide.

## Methods

- camera.getPicture
- camera.cleanup

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.camera.CameraLauncher" />
        </feature>

        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.media.camera" />

        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>

* iOS (in `config.xml`)

        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

* Tizen (in `config.xml`)

        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>

  Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)

Some platforms may support this feature without requiring any special
configuration.  See _Platform Support_ in the Overview section.



# camera.getPicture

Takes a photo using the camera, or retrieves a photo from the device's
image gallery.  The image is passed to the success callback as a
base64-encoded `String`, or as the URI for the image file.  The method
itself returns a `CameraPopoverHandle` object that can be used to
reposition the file selection popover.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

## Description

The `camera.getPicture` function opens the device's default camera
application that allows users to snap pictures. This behavior occurs
by default, when `Camera.sourceType` equals
`Camera.PictureSourceType.CAMERA`.  Once the user snaps the photo, the
camera application closes and the application is restored.

If `Camera.sourceType` is `Camera.PictureSourceType.PHOTOLIBRARY` or
`Camera.PictureSourceType.SAVEDPHOTOALBUM`, then a dialog displays
that allows users to select an existing image.  The
`camera.getPicture` function returns a `CameraPopoverHandle` object,
which can be used to reposition the image selection dialog, for
example, when the device orientation changes.

The return value is sent to the `cameraSuccess` callback function, in
one of the following formats, depending on the specified
`cameraOptions`:

- A `String` containing the base64-encoded photo image.

- A `String` representing the image file location on local storage (default).

You can do whatever you want with the encoded image or URI, for
example:

- Render the image in an `<img>` tag, as in the example below

- Save the data locally (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc.)

- Post the data to a remote server

__NOTE:__ Photo resolution on newer devices is quite good. Photos
selected from the device's gallery are not downscaled to a lower
quality, even if a `quality` parameter is specified.  To avoid common
memory problems, set `Camera.destinationType` to `FILE_URI` rather
than `DATA_URL`.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Android Quirks

Android uses intents to launch the camera activity on the device to capture
images, and on phones with low memory, the Cordova activity may be killed.  In this
scenario, the image may not appear when the cordova activity is restored.

## iOS Quirks

Including a JavaScript `alert()` in either of the callback functions
can cause problems.  Wrap the alert within a `setTimeout()` to allow
the iOS image picker or popover to fully close before the alert
displays:

    setTimeout(function() {
        // do your thing here!
    }, 0);

## Windows Phone 7 Quirks

Invoking the native camera application while your device is connected
via Zune does not work, and triggers an error callback.

## Tizen Quirks

Tizen only supports a `destinationType` of
`Camera.DestinationType.FILE_URI` and a `sourceType` of
`Camera.PictureSourceType.PHOTOLIBRARY`.

## Quick Example

Take a photo and retrieve it as a base64-encoded image:

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

Take a photo and retrieve the image's file location:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready",onDeviceReady,false);

        // device APIs are available
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }

        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64-encoded image data
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



# cameraSuccess

onSuccess callback function that provides the image data.

    function(imageData) {
        // Do something with the image
    }

## Parameters

- __imageData__: Base64 encoding of the image data, _or_ the image file URI, depending on `cameraOptions` in effect. _(String)_

## Example

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }



# cameraError

onError callback function that provides an error message.

    function(message) {
        // Show a helpful message
    }

## Parameters

- __message__: The message is provided by the device's native code. _(String)_



# cameraOptions

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

## Options

- __quality__: Quality of the saved image, expressed as a range of 0-100, where 100 is typically full resolution with no loss from file compression. _(Number)_ (Note that information about the camera's resolution is unavailable.)

- __destinationType__: Choose the format of the return value. Defined in `navigator.camera.DestinationType` _(Number)_

        Camera.DestinationType = {
            DATA_URL : 0,      // Return image as base64-encoded string
            FILE_URI : 1,      // Return image file URI
            NATIVE_URI : 2     // Return image native URI (e.g., assets-library:// on iOS or content:// on Android)
        };

- __sourceType__: Set the source of the picture.  Defined in `navigator.camera.PictureSourceType` _(Number)_

        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit__: Allow simple editing of image before selection. _(Boolean)_

- __encodingType__: Choose the  returned image file's encoding.  Defined in `navigator.camera.EncodingType` _(Number)_

        Camera.EncodingType = {
            JPEG : 0,               // Return JPEG encoded image
            PNG : 1                 // Return PNG encoded image
        };

- __targetWidth__: Width in pixels to scale image. Must be used with __targetHeight__.  Aspect ratio remains constant. _(Number)_

- __targetHeight__: Height in pixels to scale image. Must be used with __targetWidth__. Aspect ratio remains constant. _(Number)_

- __mediaType__: Set the type of media to select from.  Only works when `PictureSourceType` is `PHOTOLIBRARY` or `SAVEDPHOTOALBUM`. Defined in `nagivator.camera.MediaType` _(Number)_

        Camera.MediaType = {
            PICTURE: 0,    // allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType
            VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
            ALLMEDIA : 2   // allow selection from all media types
};

- __correctOrientation__: Rotate the image to correct for the orientation of the device during capture. _(Boolean)_

- __saveToPhotoAlbum__: Save the image to the photo album on the device after capture. _(Boolean)_

- __popoverOptions__: iOS-only options that specify popover location in iPad.  Defined in `CameraPopoverOptions`.

- __cameraDirection__: Choose the camera to use (front- or back-facing).  Defined in `navigator.camera.Direction` _(Number)_

        Camera.Direction = {
            BACK : 0,      // Use the back-facing camera
            FRONT : 1      // Use the front-facing camera
        };

## Android Quirks

- Any `cameraDirection` value results in a back-facing photo.

- Ignores the `allowEdit` parameter.

- `Camera.PictureSourceType.PHOTOLIBRARY` and `Camera.PictureSourceType.SAVEDPHOTOALBUM` both display the same photo album.

## BlackBerry Quirks

- Ignores the `quality` parameter.

- Ignores the `sourceType` parameter.

- Ignores the `allowEdit` parameter.

- Application must have key injection permissions to close the native Camera application after the user snaps the photo.

- Using large image sizes may result in the inability to encode images on later-model devices (e.g., Torch 9800) that feature high-resolution cameras.

- `Camera.MediaType` is not supported.

- Ignores the `correctOrientation` parameter.

- Ignores the `cameraDirection` parameter.

## iOS Quirks

- Set `quality` below 50 to avoid memory errors on some devices.

- When using `destinationType.FILE_URI`, photos are saved in the application's temporary directory.  You may delete the contents of this directory using the `navigator.fileMgr` APIs if storage space is a concern.

## Tizen Quirks

- options not supported

- always returns a FILE URI

## Windows Phone 7 and 8 Quirks

- Ignores the `allowEdit` parameter.

- Ignores the `correctOrientation` parameter.

- Ignores the `cameraDirection` parameter.



# CameraPopoverOptions

iOS-only parameters that specify the anchor element location and arrow
direction of the popover when selecting images from an iPad's library
or album.

    { x : 0,
      y :  32,
      width : 320,
      height : 480,
      arrowDir : Camera.PopoverArrowDirection.ARROW_ANY
    };

## CameraPopoverOptions

- __x__: x pixel coordinate of screen element onto which to anchor the popover. _(Number)_

- __y__: y pixel coordinate of screen element onto which to anchor the popover. _(Number)_

- __width__: width, in pixels, of the screen element onto which to anchor the popover. _(Number)_

- __height__: height, in pixels, of the screen element onto which to anchor the popover. _(Number)_

- __arrowDir__: Direction the arrow on the popover should point.  Defined in `Camera.PopoverArrowDirection` _(Number)_

            Camera.PopoverArrowDirection = {
                ARROW_UP : 1,        // matches iOS UIPopoverArrowDirection constants
                ARROW_DOWN : 2,
                ARROW_LEFT : 4,
                ARROW_RIGHT : 8,
                ARROW_ANY : 15
            };

Note that the size of the popover may change to adjust to the
direction of the arrow and orientation of the screen.  Make sure to
account for orientation changes when specifying the anchor element
location.

## Quick Example

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };

     navigator.camera.getPicture(onSuccess, onFail, options);

     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }

     function onFail(message) {
         alert('Failed because: ' + message);
     }



# CameraPopoverHandle

A handle to the popover dialog created by `camera.getPicture`.

## Methods

- __setPosition__: Set the position of the popover.

## Supported Platforms

- iOS

## setPosition

Set the position of the popover.

__Parameters:__

- `cameraPopoverOptions`: the `CameraPopoverOptions` that specify the new position

## Quick Example

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);

## Full Example

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

