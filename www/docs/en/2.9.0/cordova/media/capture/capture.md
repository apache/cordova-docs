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

> Provides access to the device's audio, image, and video capture capabilities.

**Important privacy note:** Collection and use of images, video, or audio from the device's camera or microphone raises important privacy issues.  Your app's [privacy policy](guide_getting-started_index.md.html) should discuss how the app uses such sensors and whether the data recorded is shared with any other parties.  In addition, if the app's use of the camera or microphone is not apparent in the user interface, you should provide a just-in-time notice prior to your app accessing the camera or microphone (if the device operating system doesn't do so already). That notice should provide the same information noted above, as well as obtaining the user's permission (e.g., by presenting choices for "OK" and "No Thanks").  Note that some app marketplaces may require your app to provide just-in-time notice and obtain permission from the user prior to accessing the camera or microphone.  For more information, please see the [Privacy Guide](../../../guide/privacy/index.html).

Objects
-------

- Capture
- [CaptureAudioOptions](captureAudioOptions.html)
- [CaptureImageOptions](captureImageOptions.html)
- [CaptureVideoOptions](captureVideoOptions.html)
- CaptureCallback
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

The `capture` object is assigned to the `navigator.device` object, and
therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;

Properties
----------

- __supportedAudioModes__: The audio recording formats supported by the device. (ConfigurationData[])
- __supportedImageModes__: The recording image sizes and formats supported by the device. (ConfigurationData[])
- __supportedVideoModes__: The recording video resolutions and formats supported by the device. (ConfigurationData[])

Methods
-------

- `[capture.captureAudio](captureAudio.html)`: Launch the device's audio recording application to record audio clips.
- `[capture.captureImage](captureImage.html)`: Launch the device's camera application to take photos.
- `[capture.captureVideo](captureVideo.html)`: Launch the device's video recorder application to record videos.

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

#### app/res/xml/config.xml

    <plugin name="Capture" value="org.apache.cordova.Capture"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture" />

#### www/config.xml

    <feature id="blackberry.system"  required="true" version="1.0.0.0" />
    <feature id="blackberry.io.file" required="true" version="1.0.0.0" />

### iOS

#### config.xml

    <plugin name="Capture" value="CDVCapture" />

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_MEDIALIB" />
        <Capability Name="ID_CAP_MICROPHONE" />
        <Capability Name="ID_HW_FRONTCAMERA" />
        <Capability Name="ID_CAP_ISV_CAMERA" />
        <Capability Name="ID_CAP_CAMERA" />
    </Capabilities>
