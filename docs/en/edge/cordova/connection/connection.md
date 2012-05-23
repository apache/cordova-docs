---
license: Licensed to the Apache Software Foundation (ASF) under one
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

Connection
==========

> The `connection` object gives access to the device's cellular and wifi connection information.

This object is accessed under the `navigator.network` interface.

Properties
----------

- connection.type

Constants
---------

- Connection.UNKNOWN
- Connection.ETHERNET
- Connection.WIFI
- Connection.CELL_2G
- Connection.CELL_3G
- Connection.CELL_4G
- Connection.NONE

WP7 Quirk
---------

- __type:__
Windows Phone Emulator always reports navigator.network.connection.type is Connection.UNKNOWN

iOS Quirk
---------

- __type:__
iOS can only report whether the device is on a cellular connection, not
of what type, thus it will always report as CELL_2G

Bada Quirk
----------
- Bada can only report if device is on Wifi or connected to cellular connection CELL_2G ( type not reported )

webOS Quirks
------------
- will only show that a connection is available, but not which type

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="NetworkStatus" value="org.apache.cordova.NetworkManager"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />

### Bada

    @TODO

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Network Status" value="org.apache.cordova.network.Network"/>

#### www/config.xml

    @TODO

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>NetworkStatus</key>
        <string>CDVConnection</string>
    </dict>

### webOS

    @TODO

### Windows Phone

#### Properties/WPAppManifest.xml

http://msdn.microsoft.com/en-us/library/ff769509(v=vs.92).aspx

    <Capabilities>
        <Capability Name="ID_CAP_NETWORKING"/>
    </Capabilities>
