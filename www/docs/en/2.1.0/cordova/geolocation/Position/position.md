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

Position
========

Contains `Position` coordinates and timestamp, created by the geolocation API.

Properties
----------

- __coords:__ A set of geographic coordinates. _(<a href="../Coordinates/coordinates.html">Coordinates</a>)_
- __timestamp:__ Creation timestamp for `coords`. _(Date)_

Description
-----------

The `Position` object is created and populated by Cordova, and returned to the user through a callback function.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x
- webOS
- Tizen

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a <a href="../PositionError/positionError.html">PositionError</a> object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.<a href="../geolocation.getCurrentPosition.html">geolocation.getCurrentPosition</a>(onSuccess, onError);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../../device/device.html">Device</a> Properties <a href="../../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            navigator.<a href="../geolocation.getCurrentPosition.html">geolocation.getCurrentPosition</a>(onSuccess, onError);
        }
    
        // onSuccess <a href="../geolocation.html">Geolocation</a>
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
                                'Timestamp: '          + 
     position.timestamp                    + '<br />';
        }
    
	    // onError Callback receives a <a href="../PositionError/positionError.html">PositionError</a> object
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
