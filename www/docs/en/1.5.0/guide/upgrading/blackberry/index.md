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

Upgrading Cordova BlackBerry
============================

This document is for people who need to upgrade their Cordova <a href="../../../phonegap/storage/parameters/version.html">version</a>s from an older <a href="../../../phonegap/storage/parameters/version.html">version</a> to a current <a href="../../../phonegap/storage/parameters/version.html">version</a> of Cordova.
1.4.1
Note: 1.5.0 represents a semi-major change to the PhoneGap/Cordova project! All references to PhoneGap have been changed to Cordova.

- To upgrade to 1.5.0, please go from 1.4.1

## Upgrade to 1.5.0 from 1.4.1 ##

Updating just the www folder:

1. Open your `www/` folder, which contains your app.
2. Remove and update the old phonegap.1.4.1.jar file in the `ext/` folder and replace it with cordova.1.5.0.jar.
3. Update the contents of the `ext-air/` folder and make sure to re<a href="../../../phonegap/storage/parameters/name.html">name</a> the folders with Phonegap with them to Cordova.
4. Copy the new `cordova-1.5.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` folder.
5. Update your HTML to use the new `cordova-1.5.0.js` file.
6. Update your www/plugins.xml file - remember all of the references to PhoneGap need to be changed to Cordova:

From: 
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="App"            value="com.phonegap.app.App"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/device/device.html">Device</a>"         value="com.phonegap.device.<a href="../../../phonegap/device/device.html">Device</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/camera/camera.html">Camera</a>"         value="com.phonegap.camera.<a href="../../../phonegap/camera/camera.html">Camera</a>"/>	
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="Network Status" value="com.phonegap.network.Network"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/notification/notification.html">Notification</a>"   value="com.phonegap.notification.<a href="../../../phonegap/notification/notification.html">Notification</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/accelerometer/accelerometer.html">Accelerometer</a>"  value="com.phonegap.accelerometer.<a href="../../../phonegap/accelerometer/accelerometer.html">Accelerometer</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/geolocation/geolocation.html">Geolocation</a>"    value="com.phonegap.geolocation.<a href="../../../phonegap/geolocation/geolocation.html">Geolocation</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/file/fileobj/fileobj.html">File</a>"           value="com.phonegap.file.<a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Manager"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/file/filetransfer/filetransfer.html"><a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Transfer</a>"   value="com.phonegap.http.<a href="../../../phonegap/file/filetransfer/filetransfer.html"><a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Transfer</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/contacts/Contact/contact.html">Contact</a>"        value="com.phonegap.pim.<a href="../../../phonegap/contacts/Contact/contact.html">Contact</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/media/media.html">Media</a><a href="../../../phonegap/media/capture/capture.html">Capture</a>"   value="com.phonegap.media.<a href="../../../phonegap/media/media.html">Media</a><a href="../../../phonegap/media/capture/capture.html">Capture</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="Battery"        value="com.phonegap.battery.Battery"/>

To:
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="App"            value="org.apache.cordova.app.App"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/device/device.html">Device</a>"         value="org.apache.cordova.device.<a href="../../../phonegap/device/device.html">Device</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/camera/camera.html">Camera</a>"         value="org.apache.cordova.camera.<a href="../../../phonegap/camera/camera.html">Camera</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="Network Status" value="org.apache.cordova.network.Network"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/notification/notification.html">Notification</a>"   value="org.apache.cordova.notification.<a href="../../../phonegap/notification/notification.html">Notification</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/accelerometer/accelerometer.html">Accelerometer</a>"  value="org.apache.cordova.accelerometer.<a href="../../../phonegap/accelerometer/accelerometer.html">Accelerometer</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/geolocation/geolocation.html">Geolocation</a>"    value="org.apache.cordova.geolocation.<a href="../../../phonegap/geolocation/geolocation.html">Geolocation</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/file/fileobj/fileobj.html">File</a>"           value="org.apache.cordova.file.<a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Manager"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/file/filetransfer/filetransfer.html"><a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Transfer</a>"   value="org.apache.cordova.http.<a href="../../../phonegap/file/filetransfer/filetransfer.html"><a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Transfer</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/contacts/Contact/contact.html">Contact</a>"        value="org.apache.cordova.pim.<a href="../../../phonegap/contacts/Contact/contact.html">Contact</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/media/media.html">Media</a><a href="../../../phonegap/media/capture/capture.html">Capture</a>"   value="org.apache.cordova.media.<a href="../../../phonegap/media/media.html">Media</a><a href="../../../phonegap/media/capture/capture.html">Capture</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="Battery"        value="org.apache.cordova.battery.Battery"/>

Updating the sample folder (ie, updating using the ant tools):

1. Open the `sample/lib/` folder.
2. Update the .jar file in the `phonegap.1.4.1/ext/` folder.
3. Update the contents of the `phonegap.1.4.1/ext-air/` folder.
4. Update the .js file in the `phonegap.1.4.1/javascript/` folder.
5. Open the `sample/lib/` folder and re<a href="../../../phonegap/storage/parameters/name.html">name</a> the `cordova.1.4.1/` folder to `cordova.1.5.0/`.
6. Update build.xml to update the ant tools.
7. Type `ant blackberry build` or `ant playbook build` to update the `www/` folder with updated Cordova.
8. Open the `www/` folder and update your HTML to use the new `cordova-1.5.0.js` file.
9. Update your www/plugins.xml file - remember all of the references to PhoneGap need to be changed to Cordova:

From: 
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="App"            value="com.phonegap.app.App"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/device/device.html">Device</a>"         value="com.phonegap.device.<a href="../../../phonegap/device/device.html">Device</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/camera/camera.html">Camera</a>"         value="com.phonegap.camera.<a href="../../../phonegap/camera/camera.html">Camera</a>"/>	
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="Network Status" value="com.phonegap.network.Network"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/notification/notification.html">Notification</a>"   value="com.phonegap.notification.<a href="../../../phonegap/notification/notification.html">Notification</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/accelerometer/accelerometer.html">Accelerometer</a>"  value="com.phonegap.accelerometer.<a href="../../../phonegap/accelerometer/accelerometer.html">Accelerometer</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/geolocation/geolocation.html">Geolocation</a>"    value="com.phonegap.geolocation.<a href="../../../phonegap/geolocation/geolocation.html">Geolocation</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/file/fileobj/fileobj.html">File</a>"           value="com.phonegap.file.<a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Manager"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/file/filetransfer/filetransfer.html"><a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Transfer</a>"   value="com.phonegap.http.<a href="../../../phonegap/file/filetransfer/filetransfer.html"><a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Transfer</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/contacts/Contact/contact.html">Contact</a>"        value="com.phonegap.pim.<a href="../../../phonegap/contacts/Contact/contact.html">Contact</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/media/media.html">Media</a><a href="../../../phonegap/media/capture/capture.html">Capture</a>"   value="com.phonegap.media.<a href="../../../phonegap/media/media.html">Media</a><a href="../../../phonegap/media/capture/capture.html">Capture</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="Battery"        value="com.phonegap.battery.Battery"/>

To:
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="App"            value="org.apache.cordova.app.App"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/device/device.html">Device</a>"         value="org.apache.cordova.device.<a href="../../../phonegap/device/device.html">Device</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/camera/camera.html">Camera</a>"         value="org.apache.cordova.camera.<a href="../../../phonegap/camera/camera.html">Camera</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="Network Status" value="org.apache.cordova.network.Network"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/notification/notification.html">Notification</a>"   value="org.apache.cordova.notification.<a href="../../../phonegap/notification/notification.html">Notification</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/accelerometer/accelerometer.html">Accelerometer</a>"  value="org.apache.cordova.accelerometer.<a href="../../../phonegap/accelerometer/accelerometer.html">Accelerometer</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/geolocation/geolocation.html">Geolocation</a>"    value="org.apache.cordova.geolocation.<a href="../../../phonegap/geolocation/geolocation.html">Geolocation</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/file/fileobj/fileobj.html">File</a>"           value="org.apache.cordova.file.<a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Manager"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/file/filetransfer/filetransfer.html"><a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Transfer</a>"   value="org.apache.cordova.http.<a href="../../../phonegap/file/filetransfer/filetransfer.html"><a href="../../../phonegap/file/fileobj/fileobj.html">File</a>Transfer</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/contacts/Contact/contact.html">Contact</a>"        value="org.apache.cordova.pim.<a href="../../../phonegap/contacts/Contact/contact.html">Contact</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="<a href="../../../phonegap/media/media.html">Media</a><a href="../../../phonegap/media/capture/capture.html">Capture</a>"   value="org.apache.cordova.media.<a href="../../../phonegap/media/media.html">Media</a><a href="../../../phonegap/media/capture/capture.html">Capture</a>"/>
    <plugin <a href="../../../phonegap/storage/parameters/name.html">name</a>="Battery"        value="org.apache.cordova.battery.Battery"/>

