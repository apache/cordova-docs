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

<a href="compass.watchHeading.html">compass.watchHeading</a>Filter
==========================

Get the compass heading in degrees when it changes by at least a certain number of degrees.

    var watchID = navigator.<a href="compass.watchHeading.html">compass.watchHeading</a>Filter(<a href="parameters/compassSuccess.html">compassSuccess</a>, <a href="parameters/compassError.html">compassError</a>, <a href="parameters/compassOptions.html">compassOptions</a>);
                                                           
Description
-----------

The compass is a sensor that detects the direction or heading that the device is pointed.  It measures the heading in degrees from 0 to 359.99.

The `<a href="compass.watchHeading.html">compass.watchHeading</a>Filter` gets the device's current heading when it changes by a specified number of degrees. Each time the heading changes by the specified number of degrees or more, the `headingSuccess` callback function is called. Specify the degrees of change via the `filter` parameter in the `<a href="parameters/compassOptions.html">compassOptions</a>` object.

The returned watch ID references references the compass watch interval. The watch ID can be used with `<a href="<a href="compass.clearWatch.html">compass.clearWatch</a>Filter.html"><a href="compass.clearWatch.html">compass.clearWatch</a>Filter</a>` to stop watching the compass via a degree filter.  Only one watchHeadingFilter can be in effect at one time.  If a watchHeadingFilter is in effect, calling getCurrentHeading or watchHeading will use the existing filter value for specifying heading changes. On iOS this method is more efficient than compass.watchFilter() based on the iOS mechanism for monitoring compass heading changes.

Supported Platforms
-------------------

- iPhone


Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };

    function onError(<a href="parameters/compassError.html">compassError</a>) {
            alert('<a href="compass.html">Compass</a> error: ' + <a href="parameters/compassError.html">compassError</a>.code);
    };

    var options = { filter: 10 };  // Get notified on compass heading changes or 10 degrees or more
    
    var watchID = navigator.<a href="compass.watchHeading.html">compass.watchHeading</a>Filter(onSuccess, onError, options);

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="compass.html">Compass</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchHeading`
        var watchID = null;
        
        // Wait for PhoneGap to load
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // PhoneGap is ready
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            startWatch();
        }

        // Start watching the compass
        //
        function startWatch() {
            
            // Get notified on compass heading changes or 10 degrees or more
            var options = { filter: 10 };
            
            watchID = navigator.<a href="compass.watchHeading.html">compass.watchHeading</a>Filter(onSuccess, onError, options);
        }
        
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.<a href="<a href="compass.clearWatch.html">compass.clearWatch</a>Filter.html"><a href="compass.clearWatch.html">compass.clearWatch</a>Filter</a>(watchID);
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
        function onError(<a href="parameters/compassError.html">compassError</a>) {
            alert('<a href="compass.html">Compass</a> error: ' + <a href="parameters/compassError.html">compassError</a>.code);
        }

        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching via Filter</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    
