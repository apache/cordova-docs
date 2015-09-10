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

# geolocation.clearWatch

Stop watching for changes to the device's location referenced by the
`watchID` parameter.

    navigator.geolocation.clearWatch(watchID);

## Parameters

- __watchID__: The id of the `watch<a href="Position/position.html">Position</a>` interval to clear. (String)

## Description

The `geolocation.clearWatch` stops watching changes to the device's
location by clearing the `geolocation.watch<a href="Position/position.html">Position</a>` referenced by
`watchID`.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    // Options: watch for changes in position, and use the most
    // accurate position acquisition method available.
    //
    var watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, { enableHighAccuracy: true });

    // ...later on...

    navigator.geolocation.clearWatch(watchID);

## Full <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../device/device.html">Device</a> Properties <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        var watchID = null;

        // device APIs are available
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
            watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, options);
        }

        // onSuccess <a href="geolocation.html">Geolocation</a>
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }

        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }

            // onError Callback receives a <a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a> object
            //
            function onError(error) {
              alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }

        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>
