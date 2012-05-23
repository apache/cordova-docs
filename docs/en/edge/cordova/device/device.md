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

Variable Scope
--------------

Since `device` is assigned to the `window` object, it is implicitly in the global scope.

    // These reference the same `device`
    //
    var phoneName = window.device.name;
    var phoneName = device.name;

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Device" value="org.apache.cordova.Device"/>

#### app/AndroidManifest.xml

    @TODO

### Bada

    @TODO

### BlackBerry WebWorks

#### www/plugins.xml

	<plugin name="Device" value="org.apache.cordova.device.Device"/>

#### www/config.xml

    <feature id="blackberry.app" required="true" version="1.0.0.0" />
    <rim:permissions>
        <rim:permit>read_device_identifying_information</rim:permit>
    </rim:permissions>
### iOS

    Device is not implemented as a plugin.
    
### webOS

    @TODO

### Windows Phone

#### Properties/WPAppManifest.xml

http://msdn.microsoft.com/en-us/library/ff769509(v=vs.92).aspx

    <Capabilities>
        <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
        <Capability Name="ID_CAP_IDENTITY_DEVICE" />
        <Capability Name="ID_CAP_IDENTITY_USER" />
    </Capabilities>
