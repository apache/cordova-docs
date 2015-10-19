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

title: Events
---

Events
======

> Cordova lifecycle events.

Event Types
-----------

- [deviceready](events.deviceready.html)
- [pause](events.pause.html)
- [resume](events.resume.html)
- [online](events.online.html)
- [offline](events.offline.html)
- [backbutton](events.backbutton.html)
- [batterycritical](events.batterycritical.html)
- [batterylow](events.batterylow.html)
- [batterystatus](events.batterystatus.html)
- [menubutton](events.menubutton.html)
- [searchbutton](events.searchbutton.html)
- [startcallbutton](events.startcallbutton.html)
- [endcallbutton](events.endcallbutton.html)
- [volumedownbutton](events.volumedownbutton.html)
- [volumeupbutton](events.volumeupbutton.html)

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Battery" value="org.apache.cordova.BatteryListener" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.BROADCAST_STICKY" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>SYSTEM_SERVICE</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Battery" value="org.apache.cordova.battery.Battery" />

#### www/config.xml

    <feature id="blackberry.app"          required="true" version="1.0.0.0" />
    <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
    <feature id="blackberry.system.event" required="true" version="1.0.0.0" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Battery</key>
        <string>CDVBattery</string>
    </dict>

### webOS

    No permissions are required.

### Windows Phone

    No permissions are required.

### Tizen

#### config.xml

    <feature name="http://tizen.org/api/systeminfo" required="true"/>

Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)
