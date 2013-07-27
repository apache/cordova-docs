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

Device
======

> The `device` object describes the device's hardware and software.

Properties
----------

- device.name
- device.cordova
- device.platform
- device.uuid
- device.version
- device.model

Variable Scope
--------------

Since `device` is assigned to the `window` object, it is implicitly in the global scope.

    // These reference the same `device`
    var phoneName = window.device.name;
    var phoneName = device.name;

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
        $ cordova plugin rm org.apache.cordova.core.device

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

    <!-- app/res/xml/config.xml -->
    <feature name="Device">
        <param name="android-package" value="org.apache.cordova.Device" />
    </feature>

    <!-- app/AndroidManifest.xml -->
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />

* BlackBerry WebWorks

    <!-- www/plugins.xml -->
    <feature name="Device">
        <param name="blackberry-package" value="org.apache.cordova.device.Device" />
    </feature>

    <!-- www/config.xml -->
    <feature id="blackberry.app" required="true" version="1.0.0.0" />
    <rim:permissions>
        <rim:permit>read_device_identifying_information</rim:permit>
    </rim:permissions>

* iOS

  No special permissions are required.

* Windows Phone

    <!-- Properties/WPAppManifest.xml -->
    <Capabilities>
        <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
        <Capability Name="ID_CAP_IDENTITY_DEVICE" />
        <Capability Name="ID_CAP_IDENTITY_USER" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

* Tizen

    <!-- config.xml -->
    <feature name="http://tizen.org/api/systeminfo" required="true"/>

Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)
