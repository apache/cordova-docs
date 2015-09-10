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

# accelerometer.clearWatch

Stop watching the `<a href="acceleration/acceleration.html">Acceleration</a>` referenced by the `watchID` parameter.

    navigator.accelerometer.clearWatch(watchID);

- __watchID__: The ID returned by `accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>`.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    var watchID = navigator.accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError, options);

    // ... later on ...

    navigator.accelerometer.clearWatch(watchID);

## Full <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="acceleration/acceleration.html">Acceleration</a> <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watch<a href="acceleration/acceleration.html">Acceleration</a>`
        var watchID = null;

        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // device APIs are available
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            startWatch();
        }

        // Start watching the acceleration
        //
        function startWatch() {

            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };

            watchID = navigator.accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError, options);
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

            element.innerHTML = '<a href="acceleration/acceleration.html">Acceleration</a> X: ' + acceleration.x + '<br />' +
                                '<a href="acceleration/acceleration.html">Acceleration</a> Y: ' + acceleration.y + '<br />' +
                                '<a href="acceleration/acceleration.html">Acceleration</a> Z: ' + acceleration.z + '<br />' +
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
            <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
