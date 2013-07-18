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

Events
======

> Cordova lifecycle events.

Event Types
-----------

- deviceready
- pause
- resume
- online
- offline
- backbutton
- batterycritical
- batterylow
- batterystatus
- menubutton
- searchbutton
- startcallbutton
- endcallbutton
- volumedownbutton
- volumeupbutton

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Battery" value="org.apache.cordova.BatteryListener" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.BROADCAST_STICKY" />

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Battery" value="org.apache.cordova.battery.Battery" />

#### www/config.xml

    <feature id="blackberry.app"          required="true" version="1.0.0.0" />
    <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
    <feature id="blackberry.system.event" required="true" version="1.0.0.0" />

### iOS

#### config.xml

    <plugin name="Battery" value="CDVBattery" />

### Windows Phone

    No permissions are required.

### Tizen

#### config.xml

    <feature name="http://tizen.org/api/systeminfo" required="true"/>

Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)
