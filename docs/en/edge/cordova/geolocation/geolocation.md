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

Geolocation
===========

> The `geolocation` object provides access to the device's GPS sensor.

Geolocation provides location information for the device, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs. No guarantee is given that the API returns the device's actual location.

This API is based on the [W3C Geolocation API Specification](http://dev.w3.org/geo/api/spec-source.html).  Some devices (Android, BlackBerry, Bada, Windows Phone 7 and webOS, to be specific) already provide an implementation of this spec.  For those devices, the built-in support is used instead of replacing it with Cordova's implementation.  For devices that don't have geolocation support, the Cordova implementation adheres to the W3C specification.

Methods
-------

- geolocation.getCurrentPosition
- geolocation.watchPosition
- geolocation.clearWatch


Arguments
---------

- geolocationSuccess
- geolocationError
- geolocationOptions

Objects (Read-Only)
-------------------

- Position
- PositionError
- Coordinates

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Geolocation" value="org.apache.cordova.GeoBroker"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />

### Bada

    @TODO

### BlackBerry WebWorks

#### www/plugins.xml

   <plugin name="Geolocation"    value="org.apache.cordova.geolocation.Geolocation"/>

#### www/config.xml
   <rim:permissions>
       <rim:permit>read_geolocation</rim:permit>
   </rim:permissions>

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Geolocation</key>
        <string>CDVLocation</string>
    </dict>

### webOS

    @TODO

### Windows Phone

#### Properties/WPAppManifest.xml

http://msdn.microsoft.com/en-us/library/ff769509(v=vs.92).aspx

    <Capabilities>
        <Capability Name="ID_CAP_LOCATION" />
    </Capabilities>
