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


Compass
=======

> Obtains the direction that the device is pointing.

Methods
-------

- compass.getCurrentHeading
- compass.watchHeading
- compass.clearWatch
- compass.watchHeadingFilter 	(obsolete)
- compass.clearWatchFilter		(obsolete)

Arguments
---------

- compassSuccess
- compassError
- compassOptions
- compassHeading



compass.getCurrentHeading
=========================

Get the current compass heading.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

Description
-----------

The compass is a sensor that detects the direction or heading that the device is pointed.  It measures the heading in degrees from 0 to 359.99.

The compass heading information is returned via a CompassHeading object using the `compassSuccess` callback function.

Supported Platforms
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) if available in hardware
- Bada 1.2 & 2.x

Quick Example
-------------

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('CompassError: ' + error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>
    



compass.watchHeading
====================

At a regular interval, get the compass heading in degrees.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
                                                           
Description
-----------

The compass is a sensor that detects the direction or heading that the device is pointed.  It measures the heading in degrees from 0 to 359.99.

The `compass.watchHeading` gets the device's current heading at a regular interval. Each time the heading is retrieved, the `headingSuccess` callback function is executed. Specify the interval in milliseconds via the `frequency` parameter in the `compassOptions` object.

The returned watch ID references references the compass watch interval. The watch ID can be used with `compass.clearWatch` to stop watching the compass.

Supported Platforms
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) if available in hardware
- Bada 1.2 & 2.x


Quick Example
-------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };

    function onError(compassError) {
            alert('Compass error: ' + compassError.code);
    };

    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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
    
iOS Quirks
--------------

In iOS `compass.watchHeading` can also get the device's current heading when it changes by a specified number of degrees. Each time the heading changes by the specified number of degrees or more, the `headingSuccess` callback function is called. Specify the degrees of change via the `filter` parameter in the `compassOptions` object.  Clear the watch as normal by passing the returned watch ID to `compass.clearWatch`.  This functionality replaces the previously separate, iOS only functions, watchHeadingFilter and clearWatchFilter, which were removed in 1.6.

In iOS only one watchHeading can be in effect at one time.  If a watchHeading via filter is in effect, calling getCurrentHeading or watchHeading will use the existing filter value for specifying heading changes. On iOS watching heading changes via a filter is more efficient than via time.



compass.clearWatch
========================

Stop watching the compass referenced by the watch ID parameter.

    navigator.compass.clearWatch(watchID);

- __watchID__: The ID returned by `compass.watchHeading`.

Supported Platforms
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) if available in hardware
- Bada 1.2 & 2.x

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

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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



compass.watchHeadingFilter
==========================

No longer supported as of 1.6, see `compass.watchHeading` for equivalent functionality.



compass.clearWatchFilter
========================

No longer supported as of 1.6.  See `compass.clearWatch`.


compassSuccess
==============

onSuccess callback function that provides the compass heading information via a compassHeading object.

    function(heading) {
        // Do something
    }

Parameters
----------


- __heading:__ The heading information. _(compassHeading)_

Example
-------

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };



compassError
==========

onError callback function for compass functions. 

Example
-------

function(CompassError) {
    // Handle the error
}



compassOptions
==============

An optional parameter to customize the retrieval of the compass.

Options
-------

- __frequency:__ How often to retrieve the compass heading in milliseconds. _(Number)_ (Default: 100)
- __filter:__ The change in degrees required to initiate a watchHeading success callback. _(Number)_

Android Quirks
______________
- filter is not supported.

Windows Phone 7 Quirks
--------------

- filter is not supported.

Bada Quirks
-----------
- filter is not supported.



compassHeading
==========

A `CompassHeading` object is returned to the `compassSuccess` callback function when an error occurs.

Properties
----------
- __magneticHeading:__ The heading in degrees from 0 - 359.99 at a single moment in time. _(Number)_
- __trueHeading:__ The heading relative to the geographic North Pole in degrees 0 - 359.99 at a single moment in time. A negative value indicates that the true heading could not be determined.  _(Number)_
- __headingAccuracy:__ The deviation in degrees between the reported heading and the true heading. _(Number)_
- __timestamp:__ The time at which this heading was determined.  _(milliseconds)_

Description
-----------

The `CompassHeading` object is returned to the user through the `compassSuccess` callback function.

Android Quirks
--------------
- trueHeading is not supported. It will report the same value as magneticHeading
- headingAccuracy will always be 0 as there is no difference between the magneticHeading and trueHeading on Android.

iOS Quirks
----------

- trueHeading is only returned when location services are running via `navigator.geolocation.watchLocation()`
- For iOS > 4 devices, if the device is rotated and the app supports that orientation, the heading values will be reported 
back with respect to the current orientation. 




CompassError
==========

A `CompassError` object is returned to the `compassError` callback function when an error occurs.

Properties
----------

- __code:__ One of the predefined error codes listed below.

Constants
---------
- `CompassError.COMPASS_INTERNAL_ERR` 
- `CompassError.COMPASS_NOT_SUPPORTED`

Description
-----------

The `CompassError` object is returned to the user through the `compassError` callback function when an error occurs.



