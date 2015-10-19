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

title: Capture
---

Capture
=======

> Provides access to the audio, image, and video capture capabilities of the device.

Objects
-------

- Capture
- [CaptureAudioOptions](captureAudioOptions.html)
- [CaptureImageOptions](captureImageOptions.html)
- [CaptureVideoOptions](captureVideoOptions.html)
- [CaptureCB](CaptureCB.html)
- [CaptureErrorCB](CaptureErrorCB.html)
- [ConfigurationData](ConfigurationData.html)
- [MediaFile](MediaFile.html)
- [MediaFileData](MediaFileData.html)

Methods
-------

- [capture.captureAudio](captureAudio.html)
- [capture.captureImage](captureImage.html)
- [capture.captureVideo](captureVideo.html)
- [MediaFile.getFormatData]([MediaFile](MediaFile.html).getFormatData.html)

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

- [capture.captureAudio](captureAudio.html): Launch the device audio recording application for recording audio clip(s).
- [capture.captureImage](captureImage.html): Launch the device camera application for taking image(s).
- [capture.captureVideo](captureVideo.html): Launch the device video recorder application for recording video(s).


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )
