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

# Notification

> Visual, audible, and tactile device notifications.

## Methods

- `notification.alert`
- `notification.confirm`
- `notification.prompt`
- `notification.beep`
- `notification.vibrate`

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS

        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.dialogs.Notification" />
        </feature>
        <feature name="Vibration">
            <param name="android-package" value="org.apache.cordova.vibration.Vibration" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />

* Android

        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.dialogs.Notification" />
        </feature>
        <feature name="Vibration">
            <param name="android-package" value="org.apache.cordova.vibration.Vibration" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />

* BlackBerry 10

        (in www/config.xml)
        <feature name="Notification" value="Notification"/>

* iOS (in the named application directory's `config.xml`)

        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.
