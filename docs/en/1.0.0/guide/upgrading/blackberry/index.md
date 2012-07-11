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

Upgrading Phonegap BlackBerry
============================

This document is for people who need to upgrade their Phonegap versions from an older version to a current version of Phonegap.

- To upgrade to 1.0.0, please go from 0.9.6

## Upgrade to 1.0.0 from 0.9.6 ##

Updating just the www folder:

1. Open your `www/` folder, which contains your app.
2. Remove and update the old phonegap.0.9.6.jar file in the `ext/` folder and replace it with Phonegap.1.0.0.jar.
3. Copy the new `Phonegap.1.0.0.js` into your project.
4. Update your HTML to use the new `Phonegap.1.0.0.js` file.
5. Add the file plugins.xml to your www folder and edit it so it looks like this:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugins>
      <plugin name="Camera"         value="com.phonegap.camera.Camera"/>
      <plugin name="Network Status" value="com.phonegap.network.Network"/>
      <plugin name="Notification"   value="com.phonegap.notification.Notification"/>
      <plugin name="Accelerometer"  value="com.phonegap.accelerometer.Accelerometer"/>
      <plugin name="Geolocation"    value="com.phonegap.geolocation.Geolocation"/>
      <plugin name="File"           value="com.phonegap.file.FileManager"/>
      <plugin name="FileTransfer"   value="com.phonegap.http.FileTransfer"/>
      <plugin name="Contact"        value="com.phonegap.pim.Contact"/>
      <plugin name="MediaCapture"   value="com.phonegap.media.MediaCapture"/>
    </plugins>

Updating the sample folder (ie, updating using the ant tools):

1. Open the `sample/lib/` folder.
2. Update the .jar file in the `phonegap.0.9.6/ext/` folder.
3. Update the .js file in the `phonegap.0.9.6/javascript/` folder.
4. Open the `sample/lib/` folder and rename the `Phonegap.0.9.6/` folder to `Phonegap.1.0.0/`.
5. Type `ant blackberry build` to update the `www/` folder with updated Phonegap.
6. Open the `www/` folder and update your HTML to use the new `Phonegap.1.0.0.js` file.
7. Add the file plugins.xml to your www folder and edit it so it looks like this:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugins>
      <plugin name="Camera"         value="com.phonegap.camera.Camera"/>
      <plugin name="Network Status" value="com.phonegap.network.Network"/>
      <plugin name="Notification"   value="com.phonegap.notification.Notification"/>
      <plugin name="Accelerometer"  value="com.phonegap.accelerometer.Accelerometer"/>
      <plugin name="Geolocation"    value="com.phonegap.geolocation.Geolocation"/>
      <plugin name="File"           value="com.phonegap.file.FileManager"/>
      <plugin name="FileTransfer"   value="com.phonegap.http.FileTransfer"/>
      <plugin name="Contact"        value="com.phonegap.pim.Contact"/>
      <plugin name="MediaCapture"   value="com.phonegap.media.MediaCapture"/>
    </plugins>
