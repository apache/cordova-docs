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

title: Geolocation
---

# Geolocation

> The `geolocation` object provides access to location data based on the device's GPS sensor or inferred from network signals.

`Geolocation` provides information about the device's location, such as
latitude and longitude. Common sources of location information include
Global Positioning System (GPS) and location inferred from network
signals such as IP address, RFID, WiFi and Bluetooth MAC addresses,
and GSM/CDMA cell IDs. There is no guarantee that the API returns the
device's actual location.

This API is based on the
[W3C Geolocation API Specification](http://dev.w3.org/geo/api/spec-source.html),
and only executes on devices that don't already provide an implementation.

__WARNING__: Collection and use of geolocation data
raises important privacy issues.  Your app's privacy policy should
discuss how the app uses geolocation data, whether it is shared with
any other parties, and the level of precision of the data (for
example, coarse, fine, ZIP code level, etc.).  Geolocation data is
generally considered sensitive because it can reveal users'
whereabouts and, if stored, the history of their travels.
Therefore, in addition to the app's privacy policy, you should
strongly consider providing a just-in-time notice before the app
accesses geolocation data (if the device operating system doesn't do
so already).  That notice should provide the same information noted
above, as well as obtaining the user's permission (e.g., by presenting
choices for __OK__ and __No Thanks__).  For more information, please
see the [Privacy Guide](../../guide/appdev/privacy/index.html).

## Methods

- [geolocation.getCurrentPosition](geolocation.getCurrentPosition.html)
- [geolocation.watchPosition](geolocation.watchPosition.html)
- [geolocation.clearWatch](geolocation.clearWatch.html)

## Arguments

- [geolocationSuccess](parameters/geolocationSuccess.html)
- [geolocationError](parameters/geolocationError.html)
- [geolocationOptions](parameters/geolocation.options.html)

## Objects (Read-Only)

- [Position](Position/position.html)
- [PositionError](PositionError/positionError.html)
- [Coordinates](Coordinates/coordinates.html)

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS

        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.geolocation.GeoBroker" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

* Android

        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.geolocation.GeoBroker" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>

        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>

* FirefoxOS (in the manifest.webapp file)

        "permissions": {
            "geolocation": { "description": "Used to position the map to your current position" }
        }

* iOS (in the named application directory's `config.xml`)

        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

Some platforms may support this feature without requiring any special
configuration.  See [Platform Support](../../guide/support/index.html) for an overview.
