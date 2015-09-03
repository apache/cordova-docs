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


# Compass

> Obtains the direction that the device is pointing.

## Methods

- compass.getCurrentHeading
- compass.watchHeading
- compass.clearWatch
- compass.watchHeadingFilter (obsolete)
- compass.clearWatchFilter   (obsolete)

## Arguments

- compassSuccess
- compassError
- compassOptions
- compassHeading

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS

        (in `app/res/xml/config.xml`)

        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.deviceorientation.CompassListener" />
        </feature>

        (in app/AndroidManifest)

        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

* Android

        (in `app/res/xml/config.xml`)

        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.deviceorientation.CompassListener" />
        </feature>

        (in app/AndroidManifest)

        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

* iOS (in the named application directory's `config.xml`)

        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.



# compass.getCurrentHeading

Get the current compass heading.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

## Description

The compass is a sensor that detects the direction or heading that the
device is pointed, typically from the top of the device.  It measures
the heading in degrees from 0 to 359.99, where 0 is north.

The compass heading information is returned via a `CompassHeading`
object using the `compassSuccess` callback function.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8 (if available in hardware)
- Windows 8

## Quick Example

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('CompassError: ' + error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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




# compass.watchHeading

At a regular interval, get the compass heading in degrees.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);

## Description

The compass is a sensor that detects the direction or heading that the
device is pointed.  It measures the heading in degrees from 0 to
359.99.

The `compass.watchHeading` gets the device's current heading at a
regular interval. Each time the heading is retrieved, the
`headingSuccess` callback function is executed. Specify the interval
in milliseconds via the `frequency` parameter in the `compassOptions`
object.

The returned watch ID references the compass watch interval. The watch
ID can be used with `compass.clearWatch` to stop watching the compass.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8 (if available in hardware)
- Windows 8

## Quick Example

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };

    var options = {
        frequency: 3000
    }; // Update every 3 seconds

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchHeading`
        var watchID = null;

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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

## iOS Quirks

In iOS `compass.watchHeading` can also get the device's current
heading when it changes by a specified number of degrees. Each time
the heading changes by the specified number of degrees or more, the
`headingSuccess` callback function executes. Specify the degrees of
change via the `filter` parameter in the `compassOptions` object.
Clear the watch as usual by passing the returned watch ID to
`compass.clearWatch`.  This functionality replaces the previously
separate, iOS-only `watchHeadingFilter` and `clearWatchFilter`
functions, which were removed in version 1.6.

Only one `watchHeading` can be in effect at one time in iOS.  If a
`watchHeading` uses a filter, calling `getCurrentHeading` or
`watchHeading` uses the existing filter value to specify heading
changes. Watching heading changes with a filter is more efficient than
with time intervals.



# compass.clearWatch

Stop watching the compass referenced by the watch ID parameter.

    navigator.compass.clearWatch(watchID);

- __watchID__: The ID returned by `compass.watchHeading`.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8 (if available in hardware)
- Windows 8

## Quick Example

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

    // ... later on ...

    navigator.compass.clearWatch(watchID);

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchHeading`
        var watchID = null;

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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



# compass.watchHeadingFilter

No longer supported as of 1.6, see `compass.watchHeading` for equivalent functionality.



# compass.clearWatchFilter

No longer supported as of 1.6.  See `compass.clearWatch`.



# compassSuccess

onSuccess callback function that provides the compass heading information via a `compassHeading` object.

    function(heading) {
        // Do something
    }

## Parameters

- __heading__: The heading information. _(compassHeading)_

## Example

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };



# compassError

onError callback function for compass functions.

## Example

    function(CompassError) {
        // Handle the error
    }



# compassOptions

An optional parameter to customize the retrieval of the compass.

## Options

- __frequency__: How often to retrieve the compass heading in milliseconds. _(Number)_ (Default: 100)

- __filter__: The change in degrees required to initiate a watchHeading success callback. _(Number)_

## Amazon Fire OS Quirks

- `filter` is not supported.

## Android Quirks

- No support for `filter`.

## Tizen Quirks

- No support for `filter`.

## Windows Phone 7 and 8 Quirks

- No support for `filter`.



# compassHeading

A `CompassHeading` object is returned to the `compassSuccess` callback function.

## Properties

- __magneticHeading__: The heading in degrees from 0-359.99 at a single moment in time. _(Number)_

- __trueHeading__: The heading relative to the geographic North Pole in degrees 0-359.99 at a single moment in time. A negative value indicates that the true heading can't be determined.  _(Number)_

- __headingAccuracy__: The deviation in degrees between the reported heading and the true heading. _(Number)_

- __timestamp__: The time at which this heading was determined.  _(milliseconds)_

## Description

The `CompassHeading` object is returned to the `compassSuccess` callback function.

## Amazon Fire OS Quirks

- `trueHeading` is not supported, but reports the same value as `magneticHeading`

- `headingAccuracy` is always 0 because there is no difference between the `magneticHeading` and `trueHeading`

## Android Quirks

- The `trueHeading` property is not supported, but reports the same value as `magneticHeading`.

- The `headingAccuracy` property is always 0 because there is no difference between the `magneticHeading` and `trueHeading`.

## iOS Quirks

- The `trueHeading` property is only returned for location services enabled via `navigator.geolocation.watchLocation()`.

- For iOS 4 devices and above, heading factors in the device's current orientation, and does not reference its absolute position, for apps that supports that orientation.



# CompassError

A `CompassError` object is returned to the `compassError` callback function when an error occurs.

## Properties

- __code__: One of the predefined error codes listed below.

## Constants

- `CompassError.COMPASS_INTERNAL_ERR`
- `CompassError.COMPASS_NOT_SUPPORTED`

## Description

When an error occurs, the `CompassError` object is passed as a
parameter to a `compassError` callback function.

