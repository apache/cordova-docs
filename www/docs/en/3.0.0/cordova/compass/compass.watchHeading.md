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

title: compass.watchHeading
---

compass.watchHeading
====================

At a regular interval, get the compass heading in degrees.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);

Description
-----------

The compass is a sensor that detects the direction or heading that the
device is pointed.  It measures the heading in degrees from 0 to
359.99.

The `compass.watchHeading` gets the device's current heading at a
regular interval. Each time the heading is retrieved, the
`headingSuccess` callback function is executed. Specify the interval
in milliseconds via the `frequency` parameter in the `[compassOptions](parameters/compassOptions.html)`
object.

The returned watch ID references the compass watch interval. The watch
ID can be used with `[compass.clearWatch](compass.clearWatch.html)` to stop watching the compass.

Supported Platforms
-------------------

- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8 (if available in hardware)
- Windows 8

Quick [Example](../storage/storage.opendatabase.html)
-------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };

    var options = {
        frequency: 3000
    }; // Update every 3 seconds

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchHeading`
        var watchID = null;

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }

        // Start watching the compass
        //
        function startWatch() {

            // Update compass every 3 seconds
            var options = { frequency: 3000 };

            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }

        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }

        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }

        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>

iOS Quirks
--------------

In iOS `compass.watchHeading` can also get the device's current
heading when it changes by a specified number of degrees. Each time
the heading changes by the specified number of degrees or more, the
`headingSuccess` callback function executes. Specify the degrees of
change via the `filter` parameter in the `[compassOptions](parameters/compassOptions.html)` object.
Clear the watch as usual by passing the returned watch ID to
`[compass.clearWatch](compass.clearWatch.html)`.  This functionality replaces the previously
separate, iOS-only `watchHeadingFilter` and `clearWatchFilter`
functions, which were removed in version 1.6.

Only one `watchHeading` can be in effect at one time in iOS.  If a
`watchHeading` uses a filter, calling `getCurrentHeading` or
`watchHeading` uses the existing filter value to specify heading
changes. Watching heading changes with a filter is more efficient than
with time intervals.
