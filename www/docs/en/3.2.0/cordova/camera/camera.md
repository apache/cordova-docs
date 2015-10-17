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

title: Camera
---

# Camera

> The `camera` object provides access to the device's default camera application.

__WARNING__: Collection and use of images from a
device's camera raises important privacy issues.  Your app's privacy
policy should discuss how the app uses the camera and whether the
images recorded are shared with any other parties.  In addition, if
the app's use of the camera is not apparent in the user interface, you
should provide a just-in-time notice before the app accesses the
camera, if the device operating system doesn't do so already.  That
notice should provide the same information noted above, as well as
obtaining the user's permission (e.g., by presenting choices for
__OK__ and __No Thanks__).  For more information, please see the
[Privacy Guide](../../guide/appdev/privacy/index.html).

## Methods

- [camera.getPicture](camera.getPicture.html)
- [camera.cleanup](camera.cleanup.html)

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS

        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.camera.CameraLauncher" />
        </feature>

        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* Android

        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.camera.CameraLauncher" />
        </feature>

        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.media.camera" />

        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>

* iOS (in the named application directory's `config.xml`)

        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

* Tizen (in `config.xml`)

        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>

  Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)

Some platforms may support this feature without requiring any special
configuration.  See [Platform Support](../../guide/support/index.html) for an overview.
