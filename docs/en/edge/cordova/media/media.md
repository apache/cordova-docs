---
license: Licensed to the Apache Software Foundation (ASF) under one
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

Media
=====

> The `Media` object provides the ability to record and play back audio files on a device.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);


Note: The current implementation does not adhere to a W3C specification for media capture, and is provided for convenience only.  A future implementation will adhere to the latest W3C specification and may deprecate the current APIs.

Parameters
----------

- __src__: A URI containing the audio content. _(DOMString)_
- __mediaSuccess__: (Optional) The callback that is invoked after a Media object has completed the current play/record or stop action. _(Function)_
- __mediaError__: (Optional) The callback that is invoked if there was an error. _(Function)_
- __mediaStatus__: (Optional) The callback that is invoked to indicate status changes. _(Function)_

Methods
-------

- media.getCurrentPosition: Returns the current position within an audio file.
- media.getDuration: Returns the duration of an audio file.
- media.play: Start or resume playing audio file.
- media.pause: Pause playing audio file.
- media.release: Releases the underlying OS'es audio resources.
- media.seekTo: Moves the position within the audio file.
- media.startRecord: Start recording audio file.
- media.stopRecord: Stop recording audio file.
- media.stop: Stop playing audio file.

Additional ReadOnly Parameters
---------------------

- ___position__: The position within the audio playback in seconds.  Not automatically updated during play, call getCurrentPosition to update.
- ___duration__: The duration of the media in seconds.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Media" value="org.apache.cordova.AudioHandler"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />   

### Bada

    @TODO

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>

#### www/config.xml

    @TODO

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Media</key>
        <string>CDVSound</string>
    </dict>

### webOS

    @TODO

### Windows Phone

#### Properties/WPAppManifest.xml

http://msdn.microsoft.com/en-us/library/ff769509(v=vs.92).aspx

    <Capabilities>
        <Capability Name="ID_CAP_MEDIALIB" />
        <Capability Name="ID_CAP_MICROPHONE"/>
        <Capability Name="ID_HW_FRONTCAMERA"/>
        <Capability Name="ID_CAP_ISV_CAMERA"/>
        <Capability Name="ID_CAP_CAMERA"/>
    </Capabilities>
