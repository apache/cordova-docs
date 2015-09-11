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

- <a href="compass.getCurrentHeading.html">compass.getCurrentHeading</a>
- <a href="compass.watchHeading.html">compass.watchHeading</a>
- <a href="compass.clearWatch.html">compass.clearWatch</a>
- <a href="<a href="compass.watchHeading.html">compass.watchHeading</a>Filter.html"><a href="compass.watchHeading.html">compass.watchHeading</a>Filter</a> 	(obsolete)
- <a href="<a href="compass.clearWatch.html">compass.clearWatch</a>Filter.html"><a href="compass.clearWatch.html">compass.clearWatch</a>Filter</a>		(obsolete)

Arguments
---------

- <a href="parameters/compassSuccess.html">compassSuccess</a>
- <a href="parameters/compassError.html">compassError</a>
- <a href="parameters/compassOptions.html">compassOptions</a>
- <a href="parameters/compassHeading.html">compassHeading</a>

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Compass" value="org.apache.cordova.CompassListener" />

### Bada

    No permissions are required.

### BlackBerry WebWorks

    No permissions are required.

### iOS

#### App/Supporting <a href="../file/fileobj/fileobj.html">File</a>s/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Compass</key>
        <string>CDVLocation</string>
    </dict>

### webOS

    No permissions are required.

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_SENSORS" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

    No permissions are required.
