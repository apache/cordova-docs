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

title: CaptureVideoOptions
---

CaptureVideoOptions
===================

> Encapsulates video capture configuration options.

Properties
----------

- __limit:__ The maximum number of video clips the device user can capture in a single capture operation.  The value must be greater than or equal to 1 (defaults to 1).
- __duration:__ The maximum duration of a video clip, in seconds.
- __mode:__ The selected video capture mode.  The value must match one of the elements in `capture.supportedVideoModes`.

Quick [Example](../../storage/storage.opendatabase.html)
-------------

    // limit capture operation to 3 video clips
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

Android Quirks
--------------

- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video [size](../../storage/parameters/size.html) and format cannot be altered programmatically; however, these parameters can be changed by the device user. By default, videos are recorded in 3GPP (video/3gpp) format.


BlackBerry WebWorks Quirks
--------------------------

- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video [size](../../storage/parameters/size.html) and format cannot be altered programmatically; however, these parameters can be changed by the device user. By default, videos are recorded in 3GPP (video/3gpp) format.

iOS Quirks
----------

- The __limit__ parameter is not supported.  One video is recorded per invocation.
- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video [size](../../storage/parameters/size.html) and format cannot be altered programmatically. By default, videos are recorded in MOV (video/quicktime) format.

