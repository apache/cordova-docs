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

title: Connection
---

Connection
==========

> The `connection` object gives access to the device's cellular and wifi connection information.

This object is accessed under the `navigator.network` interface.

Properties
----------

- [connection.type](connection.type.html)

Constants
---------

- Connection.UNKNOWN
- Connection.ETHERNET
- Connection.WIFI
- Connection.CELL_2G
- Connection.CELL_3G
- Connection.CELL_4G
- Connection.NONE

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="NetworkStatus" value="org.apache.cordova.NetworkManager" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />

### Bada

    <Privilege>
        <Name>SYSTEM_SERVICE</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Network Status" value="org.apache.cordova.network.Network" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>NetworkStatus</key>
        <string>CDVConnection</string>
    </dict>

### webOS

    No permissions are required.

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_NETWORKING" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

#### config.xml

    <feature name="http://tizen.org/api/systeminfo" required="true"/>

Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)
