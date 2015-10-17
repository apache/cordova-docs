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

title: CaptureImageOptions
---

CaptureImageOptions
===================

> Encapsulates image capture configuration options.

Properties
----------

- __limit:__ The maximum number of images the device user can capture in a single capture operation.  The value must be greater than or equal to 1 (defaults to 1).
- __mode:__ The selected image mode.  The value must match one of the elements in `capture.supportedImageModes`.

Quick [Example](../../storage/storage.opendatabase.html)
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
