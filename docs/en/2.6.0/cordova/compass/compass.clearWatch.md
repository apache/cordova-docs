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

compass.clearWatch
========================

Stop watching the compass referenced by the watch ID parameter.

    navigator.compass.clearWatch(watchID);

- __watchID__: The ID returned by `compass.watchHeading`.

Supported Platforms
-------------------

- Android
- iPhone
- Windows Phone 7 and 8 ( if available in hardware )
- Bada 1.2 & 2.x
- webOS
- Tizen
- Windows 8

Quick Example
-------------

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    
Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchHeading`
        var watchID = null;
        
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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
