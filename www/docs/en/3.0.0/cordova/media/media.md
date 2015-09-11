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

Media
=====

> The `Media` object provides the ability to record and play back audio files on a device.

    var media = new Media(src, mediaSuccess, [<a href="Parameters/mediaError.html">mediaError</a>], [mediaStatus]);

__NOTE:__ The current implementation does not adhere to a W3C
specification for media capture, and is provided for convenience only.
A future implementation will adhere to the latest W3C specification
and may deprecate the current APIs.

Parameters
----------

- __src__: A URI containing the audio content. _(DOMString)_

- __mediaSuccess__: (Optional) The callback that executes after a `Media` object has completed the current play, record, or stop action. _(Function)_

- __<a href="Parameters/mediaError.html">mediaError</a>__: (Optional) The callback that executes if an error occurs. _(Function)_

- __mediaStatus__: (Optional) The callback that executes to indicate status changes. _(Function)_

Constants
---------

The following constants are reported as the only parameter to the
`mediaStatus` callback:

- `Media.MEDIA_NONE`     = 0;
- `Media.MEDIA_STARTING` = 1;
- `Media.MEDIA_RUNNING`  = 2;
- `Media.MEDIA_PAUSED`   = 3;
- `Media.MEDIA_STOPPED`  = 4;

Methods
-------

- `media.getCurrent<a href="../geolocation/Position/position.html">Position</a>`: Returns the current position within an audio file.

- `<a href="media.getDuration.html">media.getDuration</a>`: Returns the duration of an audio file.

- `<a href="media.play.html">media.play</a>`: Start or <a href="../events/events.resume.html">resume</a> playing an audio file.

- `media.<a href="../events/events.pause.html">pause</a>`: Pause playback of an audio file.

- `<a href="media.release.html">media.release</a>`: Releases the underlying operating system's audio resources.

- `<a href="media.seekTo.html">media.seekTo</a>`: Moves the position within the audio file.

- `<a href="media.setVolume.html">media.setVolume</a>`: Set the volume for audio playback.

- `<a href="media.startRecord.html">media.startRecord</a>`: Start recording an audio file.

- `<a href="media.stop.html">media.stop</a>Record`: Stop recording an audio file.

- `<a href="media.stop.html">media.stop</a>`: Stop playing an audio file.

Additional ReadOnly Parameters
---------------------

- __position__: The position within the audio playback, in seconds.
    - Not automatically updated during play; call `getCurrent<a href="../geolocation/Position/position.html">Position</a>` to update.

- __duration__: The duration of the media, in seconds.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7.5
- Tizen
- Windows 8

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git    

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.AudioHandler" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="<a href="capture/capture.html">Capture</a>">
            <param name="blackberry-package" value="org.apache.cordova.media.Media<a href="capture/capture.html">Capture</a>" />
        </feature>

* iOS (in `config.xml`)

        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.

### Windows Phone Quirks

- Only one media file can be played back at a time.

- There are strict restrictions on how your application interacts with other media. See the [Microsoft documentation for details][url].

[url]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx
