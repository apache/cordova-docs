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

geolocation.getCurrentPosition
==============================

Returns the device's current position as a `Position` object.

    navigator.geolocation.getCurrentPosition(geolocationSuccess, 
                                             [geolocationError], 
                                             [geolocationOptions]);

Parameters
----------

- __geolocationSuccess__: The callback that is called with the current position.
- __geolocationError__: (Optional) The callback that is called if there was an error.
- __geolocationOptions__: (Optional) The geolocation options.

Description
-----------

Function `geolocation.getCurrentPosition` is an asynchronous function. It returns the device's current position to the `geolocationSuccess` callback with a `Position` object as the parameter.  If there is an error, the `geolocationError` callback is invoked with a `PositionError` object.


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
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + new Date(position.timestamp)      + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is ready
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + new Date(position.timestamp)          + '<br />';
        }
    
	    // onError Callback receives a PositionError object
	    //
	    function onError(error) {
	        alert('code: '    + error.code    + '\n' +
	              'message: ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>
