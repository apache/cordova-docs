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

<a href="compass.clearWatch.html">compass.clearWatch</a>Filter
========================

Stop watching the compass referenced by the watch ID parameter.

    navigator.<a href="compass.clearWatch.html">compass.clearWatch</a>Filter(watchID);

- __watchID__: The ID returned by `<a href="<a href="compass.watchHeading.html">compass.watchHeading</a>Filter.html"><a href="compass.watchHeading.html">compass.watchHeading</a>Filter</a>`.

Supported Platforms
-------------------

- iPhone

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    var watchID = navigator.<a href="<a href="compass.watchHeading.html">compass.watchHeading</a>Filter.html"><a href="compass.watchHeading.html">compass.watchHeading</a>Filter</a>(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.<a href="compass.clearWatch.html">compass.clearWatch</a>Filter(watchID);
    
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
            
            watchID = navigator.<a href="<a href="compass.watchHeading.html">compass.watchHeading</a>Filter.html"><a href="compass.watchHeading.html">compass.watchHeading</a>Filter</a>(onSuccess, onError, options);
        }
        
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.<a href="compass.clearWatch.html">compass.clearWatch</a>Filter(watchID);
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
