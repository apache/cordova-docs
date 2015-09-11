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

# Capture

> Provides access to the device's audio, image, and video capture capabilities.

__Important privacy note:__ Collection and use of images, video, or
audio from the device's camera or microphone raises important privacy
issues.  Your app's privacy policy should discuss how the app uses
such sensors and whether the data recorded is shared with any other
parties.  In addition, if the app's use of the camera or microphone is
not apparent in the user interface, you should provide a just-in-time
notice prior to your app accessing the camera or microphone (if the
device operating system doesn't do so already). That notice should
provide the same information noted above, as well as obtaining the
user's permission (e.g., by presenting choices for __OK__ and __No
Thanks__).  Note that some app marketplaces may require your app to
provide just-in-time notice and obtain permission from the user prior
to accessing the camera or microphone.  For more information, please
see the <a href="../../../guide/appdev/privacy/index.html">Privacy Guide</a>.

## Objects

- Capture
- <a href="captureAudioOptions.html">CaptureAudioOptions</a>
- <a href="captureImageOptions.html">CaptureImageOptions</a>
- <a href="captureVideoOptions.html">CaptureVideoOptions</a>
- CaptureCallback
- <a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a>
- <a href="ConfigurationData.html">ConfigurationData</a>
- <a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>
- <a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>Data

## Methods

- <a href="captureAudio.html">capture.captureAudio</a>
- <a href="captureImage.html">capture.captureImage</a>
- <a href="captureVideo.html">capture.captureVideo</a>
- <a href="<a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>.getFormatData.html"><a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>.getFormatData</a>

## Scope

The `capture` object is assigned to the `navigator.device` object, and
therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;

## Properties

- __supportedAudioModes__: The audio recording formats supported by the device. (<a href="ConfigurationData.html">ConfigurationData</a>[])

- __supportedImageModes__: The recording image sizes and formats supported by the device. (<a href="ConfigurationData.html">ConfigurationData</a>[])

- __supportedVideoModes__: The recording video resolutions and formats supported by the device. (<a href="ConfigurationData.html">ConfigurationData</a>[])

## Methods

- `<a href="captureAudio.html">capture.captureAudio</a>`: Launch the device's audio recording application to record audio clips.

- `<a href="captureImage.html">capture.captureImage</a>`: Launch the device's camera application to take photos.

- `<a href="captureVideo.html">capture.captureVideo</a>`: Launch the device's video recorder application to record videos.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.file',
          'org.apache.cordova.media-capture']
        $ cordova plugin rm org.apache.cordova.media-capture

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (in app/res/xml/config.xml)
        <feature name="<a href="../../file/fileobj/fileobj.html">File</a>">
            <param name="android-package" value="org.apache.cordova.file.<a href="../../file/fileobj/fileobj.html">File</a>Utils" />
        </feature>
        <feature name="Capture">
            <param name="android-package" value="org.apache.cordova.mediacapture.Capture" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.RECORD_VIDEO" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.capture.<a href="../media.html">Media</a>Capture" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />

* iOS (in `config.xml`)

        <feature name="Capture">
            <param name="ios-package" value="CDVCapture" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>

Some platforms may support this feature without requiring any special
configuration.  See _Platform Support_ in the <a href="../../../guide/overview/index.html">Overview</a> section.
