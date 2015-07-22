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

title: accelerometer.watchAcceleration
---

accelerometer.watchAcceleration
===============================

At a regular interval, get the acceleration along the _x_, _y_, and _z_ axis.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);

Description
-----------

The accelerometer is a motion sensor that detects the change (delta)
in movement relative to the current position. The accelerometer can
detect 3D movement along the _x_, _y_, and _z_ axis.

The `accelerometer.watchAcceleration` method retrieves the device's
current `[Acceleration](acceleration/acceleration.html)` at a regular interval, executing the
`[accelerometerSuccess](parameters/accelerometerSuccess.html)` callback function each time. Specify the
interval in milliseconds via the `acceleratorOptions` object's
`frequency` parameter.

The returned watch ID references the accelerometer's watch interval,
and can be used with `[accelerometer.clearWatch](accelerometer.clearWatch.html)` to stop watching the
accelerometer.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

Quick [Example](../storage/storage.opendatabase.html)
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

    var options = { frequency: 3000 };  // Update every 3 seconds

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchAcceleration`
        var watchID = null;

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }

        // Start watching the acceleration
        //
        function startWatch() {

            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };

            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }

        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }

        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                                'Acceleration Y: ' + acceleration.y         + '<br />' +
                                'Acceleration Z: ' + acceleration.z         + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }

        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
      </body>
    </html>

iOS Quirks
-------------

The API calls the success callback function at the interval requested,
but restricts the range of requests to the device between 40ms and
1000ms. For example, if you request an interval of 3 seconds,
(3000ms), the API requests data from the device every 1 second, but
only executes the success callback every 3 seconds.
