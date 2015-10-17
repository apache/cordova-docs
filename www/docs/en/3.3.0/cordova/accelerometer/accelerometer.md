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

title: Accelerometer
---

# Accelerometer

> Captures device motion in the _x_, _y_, and _z_ direction.

## Methods

- [accelerometer.getCurrentAcceleration](accelerometer.getCurrentAcceleration.html)
- [accelerometer.watchAcceleration](accelerometer.watchAcceleration.html)
- [accelerometer.clearWatch](accelerometer.clearWatch.html)

## Arguments

- [accelerometerSuccess](parameters/accelerometerSuccess.html)
- [accelerometerError](parameters/accelerometerError.html)
- [accelerometerOptions](parameters/accelerometerOptions.html)

## Objects (Read-Only)

- [Acceleration](acceleration/acceleration.html)

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS (in `res/xml/config.xml`)

        <feature name="Accelerometer">
            <param name="android-package" value="org.apache.cordova.devicemotion.AccelListener" />
        </feature>

* Android (in `res/xml/config.xml`)

        <feature name="Accelerometer">
            <param name="android-package" value="org.apache.cordova.devicemotion.AccelListener" />
        </feature>

* BlackBerry 10

        (in www/config.xml)
        <feature name="Accelerometer" value="Accelerometer" />

* iOS (in the named application directory's `config.xml`)

        <feature name="Accelerometer">
            <param name="ios-package" value="CDVAccelerometer" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

Some platforms may support this feature without requiring any special
configuration.  See [Platform Support](../../guide/support/index.html) for an overview.
