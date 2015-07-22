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

title: Upgrading Cordova BlackBerry
---

Upgrading Cordova BlackBerry
============================

This document is for people who need to upgrade their Cordova versions from an older [version](../../../phonegap/storage/parameters/version.html) to a current [version](../../../phonegap/storage/parameters/version.html) of Cordova.
1.4.1
Note: 1.5.0 represents a semi-major change to the PhoneGap/Cordova project! All references to PhoneGap have been changed to Cordova.

- To upgrade to 1.5.0, please go from 1.4.1

## Upgrade to 1.5.0 from 1.4.1 ##

Updating just the www folder:

1. Open your `www/` folder, which contains your app.
2. Remove and update the old phonegap.1.4.1.jar file in the `ext/` folder and replace it with cordova.1.5.0.jar.
3. Update the contents of the `ext-air/` folder and make sure to rename the folders with Phonegap with them to Cordova.
4. Copy the new `cordova-1.5.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` folder.
5. Update your HTML to use the new `cordova-1.5.0.js` file.
6. Update your www/plugins.xml file - remember all of the references to PhoneGap need to be changed to Cordova:

From:
    <plugin name="App"            value="com.phonegap.app.App"/>
    <plugin name="Device"         value="com.phonegap.device.Device"/>
    <plugin name="Camera"         value="com.phonegap.camera.Camera"/>
    <plugin name="Network Status" value="com.phonegap.network.Network"/>
    <plugin name="Notification"   value="com.phonegap.notification.Notification"/>
    <plugin name="Accelerometer"  value="com.phonegap.accelerometer.Accelerometer"/>
    <plugin name="Geolocation"    value="com.phonegap.geolocation.Geolocation"/>
    <plugin name="File"           value="com.phonegap.file.FileManager"/>
    <plugin name="FileTransfer"   value="com.phonegap.http.FileTransfer"/>
    <plugin name="Contact"        value="com.phonegap.pim.Contact"/>
    <plugin name="MediaCapture"   value="com.phonegap.media.MediaCapture"/>
    <plugin name="Battery"        value="com.phonegap.battery.Battery"/>

To:
    <plugin name="App"            value="org.apache.cordova.app.App"/>
    <plugin name="Device"         value="org.apache.cordova.device.Device"/>
    <plugin name="Camera"         value="org.apache.cordova.camera.Camera"/>
    <plugin name="Network Status" value="org.apache.cordova.network.Network"/>
    <plugin name="Notification"   value="org.apache.cordova.notification.Notification"/>
    <plugin name="Accelerometer"  value="org.apache.cordova.accelerometer.Accelerometer"/>
    <plugin name="Geolocation"    value="org.apache.cordova.geolocation.Geolocation"/>
    <plugin name="File"           value="org.apache.cordova.file.FileManager"/>
    <plugin name="FileTransfer"   value="org.apache.cordova.http.FileTransfer"/>
    <plugin name="Contact"        value="org.apache.cordova.pim.Contact"/>
    <plugin name="MediaCapture"   value="org.apache.cordova.media.MediaCapture"/>
    <plugin name="Battery"        value="org.apache.cordova.battery.Battery"/>

Updating the sample folder (ie, updating using the ant tools):

1. Open the `sample/lib/` folder.
2. Update the .jar file in the `phonegap.1.4.1/ext/` folder.
3. Update the contents of the `phonegap.1.4.1/ext-air/` folder.
4. Update the .js file in the `phonegap.1.4.1/javascript/` folder.
5. Open the `sample/lib/` folder and rename the `cordova.1.4.1/` folder to `cordova.1.5.0/`.
6. Update build.xml to update the ant tools.
7. Type `ant blackberry build` or `ant playbook build` to update the `www/` folder with updated Cordova.
8. Open the `www/` folder and update your HTML to use the new `cordova-1.5.0.js` file.
9. Update your www/plugins.xml file - remember all of the references to PhoneGap need to be changed to Cordova:

From:
    <plugin name="App"            value="com.phonegap.app.App"/>
    <plugin name="Device"         value="com.phonegap.device.Device"/>
    <plugin name="Camera"         value="com.phonegap.camera.Camera"/>
    <plugin name="Network Status" value="com.phonegap.network.Network"/>
    <plugin name="Notification"   value="com.phonegap.notification.Notification"/>
    <plugin name="Accelerometer"  value="com.phonegap.accelerometer.Accelerometer"/>
    <plugin name="Geolocation"    value="com.phonegap.geolocation.Geolocation"/>
    <plugin name="File"           value="com.phonegap.file.FileManager"/>
    <plugin name="FileTransfer"   value="com.phonegap.http.FileTransfer"/>
    <plugin name="Contact"        value="com.phonegap.pim.Contact"/>
    <plugin name="MediaCapture"   value="com.phonegap.media.MediaCapture"/>
    <plugin name="Battery"        value="com.phonegap.battery.Battery"/>

To:
    <plugin name="App"            value="org.apache.cordova.app.App"/>
    <plugin name="Device"         value="org.apache.cordova.device.Device"/>
    <plugin name="Camera"         value="org.apache.cordova.camera.Camera"/>
    <plugin name="Network Status" value="org.apache.cordova.network.Network"/>
    <plugin name="Notification"   value="org.apache.cordova.notification.Notification"/>
    <plugin name="Accelerometer"  value="org.apache.cordova.accelerometer.Accelerometer"/>
    <plugin name="Geolocation"    value="org.apache.cordova.geolocation.Geolocation"/>
    <plugin name="File"           value="org.apache.cordova.file.FileManager"/>
    <plugin name="FileTransfer"   value="org.apache.cordova.http.FileTransfer"/>
    <plugin name="Contact"        value="org.apache.cordova.pim.Contact"/>
    <plugin name="MediaCapture"   value="org.apache.cordova.media.MediaCapture"/>
    <plugin name="Battery"        value="org.apache.cordova.battery.Battery"/>

