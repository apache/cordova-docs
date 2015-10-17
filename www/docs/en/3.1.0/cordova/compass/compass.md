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

title: Compass
---

# Compass

> Obtains the direction that the device is pointing.

## Methods

- [compass.getCurrentHeading](compass.getCurrentHeading.html)
- [compass.watchHeading](compass.watchHeading.html)
- [compass.clearWatch](compass.clearWatch.html)
- [compass.watchHeadingFilter](compass.watchHeadingFilter.html) (obsolete)
- [compass.clearWatchFilter](compass.clearWatchFilter.html)   (obsolete)

## Arguments

- [compassSuccess](parameters/compassSuccess.html)
- [compassError](parameters/compassError.html)
- [compassOptions](parameters/compassOptions.html)
- [compassHeading](parameters/compassHeading.html)

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (in `app/res/xml/config.xml`)
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.deviceorientation.CompassListener" />
        </feature>

        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

* iOS (in `config.xml`)

        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

Some platforms may support this feature without requiring any special
configuration.  See _Platform Support_ in the [Overview](../../guide/overview/index.html) section.
