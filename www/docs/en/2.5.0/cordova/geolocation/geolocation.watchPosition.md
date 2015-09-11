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

geolocation.watch<a href="Position/position.html">Position</a>
=========================

Watches for changes to the device's current position.

    var watchId = navigator.geolocation.watch<a href="Position/position.html">Position</a>(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>,
                                                      [<a href="parameters/geolocationError.html">geolocationError</a>],
                                                      [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);

Parameters
----------

- __<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>__: The callback that is called with the current position.
- __<a href="parameters/geolocationError.html">geolocationError</a>__: (Optional) The callback that is called if there was an error.
- __<a href="parameters/geolocation.options.html">geolocationOptions</a>__: (Optional) The geolocation options.

Returns
-------

- __String__: returns a watch id that references the watch position interval. The watch id should be used with `<a href="geolocation.clearWatch.html">geolocation.clearWatch</a>` to stop watching for changes in position.

Description
-----------

`geolocation.watch<a href="Position/position.html">Position</a>` is an asynchronous function. It returns the device's current position when a change in position has been detected.  When the device has retrieved a new location, the `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` callback is invoked with a `<a href="Position/position.html">Position</a>` object as the parameter.  If there is an error, the `<a href="parameters/geolocationError.html">geolocationError</a>` callback is invoked with a `<a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a>` object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Bada 1.2 & 2.x
- webOS
- Tizen
- Windows 8

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // onSuccess Callback
    //   This method accepts a `<a href="Position/position.html">Position</a>` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // onError Callback receives a <a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a> object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, { timeout: 30000 });
    

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../device/device.html">Device</a> Properties <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        var watchID = null;

        // Cordova is ready
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, options);
        }
    
        // onSuccess <a href="geolocation.html">Geolocation</a>
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
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
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>
