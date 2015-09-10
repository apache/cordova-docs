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

accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>
===============================

At a regular interval, get the acceleration along the x, y, and z axis.

    var watchID = navigator.accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>(<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>,
                                                           <a href="parameters/accelerometerError.html">accelerometerError</a>,
                                                           [<a href="parameters/accelerometerOptions.html">accelerometerOptions</a>]);
                                                           
Description
-----------

The accelerometer is a motion sensor that detects the change (delta) in movement relative to the current position. The accelerometer can detect 3D movement along the x, y, and z axis.

The `accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>` gets the device's current acceleration at a regular interval. Each time the `<a href="acceleration/acceleration.html">Acceleration</a>` is retrieved, the `<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>` callback function is executed. Specify the interval in milliseconds via the `frequency` parameter in the `acceleratorOptions` object.

The returned watch ID references the accelerometer watch interval. The watch ID can be used with `<a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>` to stop watching the accelerometer.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- Tizen


Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    function onSuccess(acceleration) {
        alert('<a href="acceleration/acceleration.html">Acceleration</a> X: ' + acceleration.x + '\n' +
              '<a href="acceleration/acceleration.html">Acceleration</a> Y: ' + acceleration.y + '\n' +
              '<a href="acceleration/acceleration.html">Acceleration</a> Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('onError!');
    };

    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError, options);

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="acceleration/acceleration.html">Acceleration</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watch<a href="acceleration/acceleration.html">Acceleration</a>`
        var watchID = null;
        
        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova is ready
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
                navigator.<a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>(watchID);
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
      </body>
    </html>
    
 iPhone Quirks
-------------

- At the interval requested, Cordova will call the success callback function and pass the accelerometer results.
- However, in requests to the device Cordova restricts the interval to minimum of every 40ms and a maximum of every 1000ms.
  - For example, if you request an interval of 3 seconds (3000ms), Cordova will request an interval of 1 second from the device but invoke the success callback at the requested interval of 3 seconds.
