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

Acceleration
============

Contains `<a href="../accelerometer.html">Accelerometer</a>` data captured at a specific point in time.

Properties
----------

- __x:__  Amount of acceleration on the x-axis. (in m/s^2) (`Number`)
- __y:__  Amount of acceleration on the y-axis. (in m/s^2) (`Number`)
- __z:__  Amount of acceleration on the z-axis. (in m/s^2) (`Number`)
- __timestamp:__ Creation timestamp in milliseconds. (`DOMTimeStamp`)

Description
-----------

This object is created and populated by Cordova, and returned by an `<a href="../accelerometer.html">Accelerometer</a>` method. The x, y, z acceleration values include the effect of gravity (9.81 m/s^2), so at when a device is lying flat on a table facing up, the value returned should be x=0, y=0, z=9.81.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS
- Tizen

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('onError!');
    };

    navigator.<a href="../accelerometer.getCurrentAcceleration.html">accelerometer.getCurrentAcceleration</a>(onSuccess, onError);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration <a href="../../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            navigator.<a href="../accelerometer.getCurrentAcceleration.html">accelerometer.getCurrentAcceleration</a>(onSuccess, onError);
        }

        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }

        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
