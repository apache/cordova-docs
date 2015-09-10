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

Accelerometer
=============

> <a href="../media/capture/capture.html">Capture</a>s device motion in the _x_, _y_, and _z_ direction.

Methods
-------

- accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>
- accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>
- <a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>

Arguments
---------

- <a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>
- <a href="parameters/accelerometerError.html">accelerometerError</a>
- <a href="parameters/accelerometerOptions.html">accelerometerOptions</a>

Objects (Read-Only)
-------------------

- <a href="acceleration/acceleration.html">Acceleration</a>

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Accelerometer" value="org.apache.cordova.AccelListener" />

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Accelerometer" value="org.apache.cordova.accelerometer.Accelerometer" />

#### www/config.xml

    <feature id="blackberry.system"  required="true" version="1.0.0.0" />
    <feature id="org.apache.cordova" required="true" version="1.0.0" />

### iOS

#### config.xml

    <plugin name="Accelerometer" value="CDVAccelerometer" />

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_SENSORS" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

    No permissions are required.
