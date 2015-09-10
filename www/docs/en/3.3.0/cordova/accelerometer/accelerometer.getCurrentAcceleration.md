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

# accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>

Get the current acceleration along the _x_, _y_, and _z_ axes.

    navigator.accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>(<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>, <a href="parameters/accelerometerError.html">accelerometerError</a>);

## Description

The accelerometer is a motion sensor that detects the change (_delta_)
in movement relative to the current device orientation, in three
dimensions along the _x_, _y_, and _z_ axis.

These acceleration values are returned to the `<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>`
callback function.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function onSuccess(acceleration) {
        alert('<a href="acceleration/acceleration.html">Acceleration</a> X: ' + acceleration.x + '\n' +
              '<a href="acceleration/acceleration.html">Acceleration</a> Y: ' + acceleration.y + '\n' +
              '<a href="acceleration/acceleration.html">Acceleration</a> Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('onError!');
    };

    navigator.accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError);

## Full <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="acceleration/acceleration.html">Acceleration</a> <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // device APIs are available
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            navigator.accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError);
        }

        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('<a href="acceleration/acceleration.html">Acceleration</a> X: ' + acceleration.x + '\n' +
                  '<a href="acceleration/acceleration.html">Acceleration</a> Y: ' + acceleration.y + '\n' +
                  '<a href="acceleration/acceleration.html">Acceleration</a> Z: ' + acceleration.z + '\n' +
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
        <h1><a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></h1>
        <p>getCurrent<a href="acceleration/acceleration.html">Acceleration</a></p>
      </body>
    </html>

## iOS Quirks

- iOS doesn't recognize the concept of getting the current acceleration at any given point.

- You must watch the acceleration and capture the data at given time intervals.

- Thus, the `getCurrent<a href="acceleration/acceleration.html">Acceleration</a>` function yields the last value reported from a `watch<a href="accelerometer.html">Accelerometer</a>` call.
