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

- To upgrade to 1.3.0, please go from 1.2.0

## Upgrade to 1.3.0 from 1.2.0 ##

Updating just the www folder:

1. Open your `www/` folder, which contains your app.
2. Remove and update the old phonegap.1.2.0.jar file in the `ext/` folder and replace it with Phonegap.1.3.0.jar.
3. Update the contents of the `ext-air/` folder.
4. Copy the new `Phonegap-1.3.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` folder.
5. Update your HTML to use the new `Phonegap-1.3.0.js` file.
6. In your www/config.xml file, add this these values:

    <feature id="blackberry.widgetcache" required="true" version="1.0.0.0"/>
    <feature id="blackberry.media.camera" />
    <feature id="blackberry.identity" />
    <feature id="blackberry.ui.dialog" />
    <feature id="blackberry.system" />

And add these permissions:
    <rim:permissions>
        <rim:permit>use_camera</rim:permit>
        <rim:permit>read_device_identifying_information</rim:permit>
        <rim:permit>access_shared</rim:permit>
        <rim:permit>read_geolocation</rim:permit>
    </rim:permissions>
    
7. Update the reference to Phonegap in www/config.xml:

From:
    <feature id="phonegap" required="true" version="1.0.0" />

To:
    <feature id="com.phonegap" required="true" version="1.0.0" />

8. In your www/plugins.xml file, add these values:
    <plugin name="Device"         value="com.phonegap.device.Device"/>
    <plugin name="App"            value="com.phonegap.app.App"/>
    
Updating the sample folder (ie, updating using the ant tools):

1. Open the `sample/lib/` folder.
2. Update the .jar file in the `phonegap.1.2.0/ext/` folder.
3. Update the contents of the `phonegap.1.2.0/ext-air/` folder.
4. Update the .js file in the `phonegap.1.2.0/javascript/` folder.
5. Open the `sample/lib/` folder and rename the `Phonegap.1.2.0/` folder to `Phonegap.1.3.0/`.
6. Update build.xml to update the ant tools.
7. Type `ant blackberry build` or `ant playbook build` to update the `www/` folder with updated Phonegap.
8. Open the `www/` folder and update your HTML to use the new `Phonegap-1.3.0.js` file.
9. In your www/config.xml file, add this these values:

    <feature id="blackberry.widgetcache" required="true" version="1.0.0.0"/>
    <feature id="blackberry.media.camera" />
    <feature id="blackberry.identity" />
    <feature id="blackberry.ui.dialog" />
    <feature id="blackberry.system" />

And add these permissions:
    <rim:permissions>
        <rim:permit>use_camera</rim:permit>
        <rim:permit>read_device_identifying_information</rim:permit>
        <rim:permit>access_shared</rim:permit>
        <rim:permit>read_geolocation</rim:permit>
    </rim:permissions>
    
10. Update the reference to Phonegap in www/config.xml:

From:
    <feature id="phonegap" required="true" version="1.0.0" />

To:
    <feature id="com.phonegap" required="true" version="1.0.0" />

11. In your www/plugins.xml file, add these values:
    <plugin name="Device"         value="com.phonegap.device.Device"/>
    <plugin name="App"            value="com.phonegap.app.App"/>
