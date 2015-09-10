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

geolocation.getCurrent<a href="Position/position.html">Position</a>
==============================

Returns the device's current position as a `<a href="Position/position.html">Position</a>` object.

    navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>, 
                                             [<a href="parameters/geolocationError.html">geolocationError</a>], 
                                             [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);

Parameters
----------

- __<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>__: The callback that is called with the current position.
- __<a href="parameters/geolocationError.html">geolocationError</a>__: (Optional) The callback that is called if there was an error.
- __<a href="parameters/geolocation.options.html">geolocationOptions</a>__: (Optional) The geolocation options.

Description
-----------

`geolocation.getCurrentPositon` is an asynchronous function. It returns the device's current position to the `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` callback with a `<a href="Position/position.html">Position</a>` object as the parameter.  If there is an error, the `<a href="parameters/geolocationError.html">geolocationError</a>` callback is invoked with a `<a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a>` object.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x
- webOS
- Tizen

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // onSuccess Callback
    //   This method accepts a `<a href="Position/position.html">Position</a>` object, which contains
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
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a <a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a> object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(onSuccess, onError);

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../device/device.html">Device</a> Properties <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(onSuccess, onError);
        }
    
        // onSuccess <a href="geolocation.html">Geolocation</a>
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
                                'Timestamp: '          +                                   position.timestamp          + '<br />';
        }
    
        // onError Callback receives a <a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a> object
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
