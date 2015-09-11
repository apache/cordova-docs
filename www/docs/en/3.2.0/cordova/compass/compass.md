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

- <a href="compass.getCurrentHeading.html">compass.getCurrentHeading</a>
- <a href="compass.watchHeading.html">compass.watchHeading</a>
- <a href="compass.clearWatch.html">compass.clearWatch</a>
- <a href="<a href="compass.watchHeading.html">compass.watchHeading</a>Filter.html"><a href="compass.watchHeading.html">compass.watchHeading</a>Filter</a> (obsolete)
- <a href="<a href="compass.clearWatch.html">compass.clearWatch</a>Filter.html"><a href="compass.clearWatch.html">compass.clearWatch</a>Filter</a>   (obsolete)

## Arguments

- <a href="parameters/compassSuccess.html">compassSuccess</a>
- <a href="parameters/compassError.html">compassError</a>
- <a href="parameters/compassOptions.html">compassOptions</a>
- <a href="parameters/compassHeading.html">compassHeading</a>

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
configuration.  See <a href="../../guide/support/index.html">Platform Support</a> for an overview.
