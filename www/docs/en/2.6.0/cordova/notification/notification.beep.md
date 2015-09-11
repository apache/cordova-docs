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

notification.beep
=================

The device will play a beep sound.

    navigator.notification.beep(times);

- __times:__ The number of times to repeat the beep (`Number`)

Supported Platforms
-------------------

- Android
- BlackBerry OS 5 - 7 (not supported for BlackBerry 10)
- iPhone
- Windows Phone 7 and 8
- Bada 1.2 & 2.x
- Tizen

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // Beep twice!
    navigator.notification.beep(2);

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="notification.html">Notification</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // Empty
        }

        // Show a custom alert
        //
        function <a href="../splashscreen/splashscreen.show.html">show</a>Alert() {
		    navigator.<a href="notification.alert.html">notification.alert</a>(
		        'You are the winner!',  // message
		        'Game Over',            // title
		        'Done'                  // buttonName
		    );
        }

        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }

        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.<a href="notification.vibrate.html">notification.vibrate</a>(2000);
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="<a href="../splashscreen/splashscreen.show.html">show</a>Alert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>

Android Quirks
--------------

- Android plays the default "<a href="notification.html">Notification</a> ringtone" specified under the "Settings/Sound & Display" panel.

iPhone Quirks
-------------

- Ignores the beep count argument.
- There is no native beep API for iPhone.
  - Cordova implements beep by playing an audio file via the media API.
  - The user must provide a file with the desired beep tone.
  - This file must be less than 30 seconds long, located in the www/ root, and must be named `beep.wav`.

Windows Phone 7 and 8 Quirks
-------------

- Cordova lib includes a generic beep file that is used. 

Tizen Quirks
-------------

  - Tizen implements beep by playing an audio file via the media API.
  - This beep file must be short, named `beep.wav` and has to be located in a 'sounds' sub-directory of the application root directory.
