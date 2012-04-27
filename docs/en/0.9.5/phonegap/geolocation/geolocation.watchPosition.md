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

geolocation.watchPosition
=========================

Watches for changes to the device's current position.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);

Parameters
----------

- __geolocationSuccess__: The callback that is called with the current position.
- __geolocationError__: (Optional) The callback that is called if there was an error.
- __geolocationOptions__: (Optional) The geolocation options.

Returns
-------

- __String__: returns a watch id that references the watch position interval. The watch id can be used with `geolocation.clearWatch` to stop watching for changes in position.

Description
-----------

Function `geolocation.watchPosition` is an asynchronous function. It returns the device's current position when a change in position has been detected.  When the device has retrieved a new location, the `geolocationSuccess` callback is invoked with a `Position` object as the parameter.  If there is an error, the `geolocationError` callback is invoked with a `PositionError` object.

Supported Platforms
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone

Quick Example
-------------

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: retrieve the location every 3 seconds
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });
    

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        var watchID = null;

        // PhoneGap is ready
        //
        function onDeviceReady() {
            // Update every 3 seconds
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
	    // onError Callback receives a PositionError object
	    //
	    function onError(error) {
	        alert('code: '    + error.code    + '\n' +
	              'message: ' + error.message + '\n');
	    }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>
