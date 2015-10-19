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

title: cameraOptions
---

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

- __popoverOptions__: iOS-only options that specify popover location in iPad.  Defined in `[CameraPopoverOptions](CameraPopoverOptions.html)`.

- __cameraDirection__: Choose the camera to use (front- or back-facing).  Defined in `navigator.camera.Direction` _(Number)_

        Camera.Direction = {
            BACK : 0,      // Use the back-facing camera
            FRONT : 1      // Use the front-facing camera
        };

## Amazon Fire OSQuirks

- Any `cameraDirection` value results in a back-facing photo.

- Ignores the `allowEdit` parameter.

- `[Camera](../camera.html).PictureSourceType.PHOTOLIBRARY` and `[Camera](../camera.html).PictureSourceType.SAVEDPHOTOALBUM` both display the same photo album.

## Android Quirks

- Any `cameraDirection` value results in a back-facing photo.

- Ignores the `allowEdit` parameter.

- `[Camera](../camera.html).PictureSourceType.PHOTOLIBRARY` and `[Camera](../camera.html).PictureSourceType.SAVEDPHOTOALBUM` both display the same photo album.

## BlackBerry 10 Quirks

- Ignores the `quality` parameter.

- Ignores the `sourceType` parameter.

- Ignores the `allowEdit` parameter.

- `[Camera](../camera.html).MediaType` is not supported.

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
