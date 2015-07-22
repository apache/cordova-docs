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

title: camera.getPicture
---

# camera.getPicture

Takes a photo using the camera, or retrieves a photo from the device's
image gallery.  The image is passed to the success callback as a
base64-encoded `String`, or as the URI for the image file.  The method
itself returns a `[CameraPopoverHandle](parameter/CameraPopoverHandle.html)` object that can be used to
reposition the file selection popover.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

## Description

The `camera.getPicture` function opens the device's default camera
application that allows users to snap pictures. This behavior occurs
by default, when `[Camera](camera.html).sourceType` equals
`[Camera](camera.html).PictureSourceType.CAMERA`.  Once the user snaps the photo, the
camera application closes and the application is restored.

If `[Camera](camera.html).sourceType` is `[Camera](camera.html).PictureSourceType.PHOTOLIBRARY` or
`[Camera](camera.html).PictureSourceType.SAVEDPHOTOALBUM`, then a dialog displays
that allows users to select an existing image.  The
`camera.getPicture` function returns a `[CameraPopoverHandle](parameter/CameraPopoverHandle.html)` object,
which can be used to reposition the image selection dialog, for
example, when the device orientation changes.

The return value is sent to the `[cameraSuccess](parameter/cameraSuccess.html)` callback function, in
one of the following formats, depending on the specified
`[cameraOptions](parameter/cameraOptions.html)`:

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
memory problems, set `[Camera](camera.html).destinationType` to `FILE_URI` rather
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
the iOS image picker or popover to fully [close](../inappbrowser/inappbrowser.html) before the alert
displays:

    setTimeout(function() {
        // do your thing here!
    }, 0);

## Windows Phone 7 Quirks

Invoking the native camera application while your device is connected
via Zune does not work, and triggers an error callback.

## Tizen Quirks

Tizen only supports a `destinationType` of
`[Camera](camera.html).DestinationType.FILE_URI` and a `sourceType` of
`[Camera](camera.html).PictureSourceType.PHOTOLIBRARY`.

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
