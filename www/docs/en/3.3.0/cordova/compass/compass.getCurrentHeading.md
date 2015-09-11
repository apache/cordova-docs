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

# compass.getCurrentHeading

Get the current compass heading.

    navigator.compass.getCurrentHeading(<a href="parameters/compassSuccess.html">compassSuccess</a>, <a href="parameters/compassError.html">compassError</a>, <a href="parameters/compassOptions.html">compassOptions</a>);

## Description

The compass is a sensor that detects the direction or heading that the
device is pointed, typically from the top of the device.  It measures
the heading in degrees from 0 to 359.99, where 0 is north.

The compass heading information is returned via a `<a href="compass.html">Compass</a>Heading`
object using the `<a href="parameters/compassSuccess.html">compassSuccess</a>` callback function.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8 (if available in hardware)
- Windows 8

## Quick <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('<a href="<a href="parameters/compassError.html">compassError</a>/<a href="parameters/compassError.html">compassError</a>.html"><a href="compass.html">Compass</a>Error</a>: ' + error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

## Full <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="compass.html">Compass</a> <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // device APIs are available
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }

        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }

        // onError: Failed to get the heading
        //
        function onError(<a href="parameters/compassError.html">compassError</a>) {
            alert('<a href="compass.html">Compass</a> Error: ' + <a href="parameters/compassError.html">compassError</a>.code);
        }

        </script>
      </head>
      <body>
        <h1><a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></h1>
        <p>getCurrentHeading</p>
      </body>
    </html>

