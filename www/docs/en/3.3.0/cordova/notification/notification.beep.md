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

title: notification.beep
---

# notification.beep

The device plays a beep sound.

    navigator.notification.beep(times);

- __times__: The number of times to repeat the beep. _(Number)_

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    // Beep twice!
    navigator.notification.beep(2);

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }

        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
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
            navigator.notification.vibrate(2000);
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>

## Amazon Fire OS Quirks

- Amazon Fire OS plays the default __Notification Sound__ specified under the __Settings/Display & Sound__ panel.

## Android Quirks

- Android plays the default __Notification ringtone__ specified under the __Settings/Sound & Display__ panel.

## Windows Phone 7 and 8 Quirks

- Relies on a generic beep file from the Cordova distribution.

## Tizen Quirks

- Tizen implements beeps by playing an audio file via the media API.

- The beep file must be short, must be located in a `sounds` subdirectory of the application's root directory, and must be named `beep.wav`.

