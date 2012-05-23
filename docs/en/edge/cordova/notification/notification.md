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

Notification
============

> Visual, audible, and tactile device notifications.

Methods
-------

- notification.alert
- notification.confirm
- notification.beep
- notification.vibrate

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Notification" value="org.apache.cordova.Notification"/>

#### app/AndroidManifest.xml

    @TODO

### Bada

    @TODO

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Notification" value="org.apache.cordova.notification.Notification"/>

#### www/config.xml

   <feature id="blackberry.ui.dialog" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Notification</key>
        <string>CDVNotification</string>
    </dict>

### webOS

    @TODO

### Windows Phone

    No additional permissions required.
