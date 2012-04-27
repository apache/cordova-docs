---
license: Licensed to the Apache Software Foundation (ASF) under one
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

accelerometer.clearWatch
========================

Stop watching the `Acceleration` referenced by the watch ID parameter.

    navigator.accelerometer.clearWatch(watchID);

- __watchID__: The ID returned by `accelerometer.watchAcceleration`.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone

Quick Example
-------------

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    
Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Acceleration Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchAcceleration`
        var watchID = null;
        
        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
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
            element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                'Acceleration Y: ' + acceleration.y + '<br />' +
                                'Acceleration Z: ' + acceleration.z + '<br />' + 
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }

        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <div id="accelerometer">Waiting for accelerometer...</div>
		<button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
