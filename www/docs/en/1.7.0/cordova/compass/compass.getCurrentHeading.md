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

compass.getCurrentHeading
=========================

Get the current compass heading.

    navigator.compass.getCurrentHeading(<a href="parameters/compassSuccess.html">compassSuccess</a>, <a href="parameters/compassError.html">compassError</a>, <a href="parameters/compassOptions.html">compassOptions</a>);

Description
-----------

The compass is a sensor that detects the direction or heading that the device is pointed.  It measures the heading in degrees from 0 to 359.99.

The compass heading information is returned via a <a href="compass.html">Compass</a>Heading object using the `<a href="parameters/compassSuccess.html">compassSuccess</a>` callback function.

Supported Platforms
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) if available in hardware
- Bada 1.2 & 2.x

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('<a href="<a href="parameters/compassError.html">compassError</a>/<a href="parameters/compassError.html">compassError</a>.html"><a href="compass.html">Compass</a>Error</a>: ' + error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="compass.html">Compass</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova is ready
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
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>getCurrentHeading</p>
      </body>
    </html>
    
