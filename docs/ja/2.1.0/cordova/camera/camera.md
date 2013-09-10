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

Camera
======

> `camera` オブジェクトは、デバイスのカメラアプリへの制御を提供します。

メソッド
-------

- camera.getPicture
- camera.cleanup

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Camera" value="org.apache.cordova.CameraLauncher" />

#### app/AndroidManifest

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>CAMERA</Name>
    </Privilege>
    <Privilege>
        <Name>RECORDING</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Camera" value="org.apache.cordova.camera.Camera" />

#### www/config.xml

    <feature id="blackberry.media.camera" />

    <rim:permissions>
        <rim:permit>use_camera</rim:permit>
    </rim:permissions>

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Camera</key>
        <string>CDVCamera</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_CAMERA" />
        <Capability Name="ID_CAP_ISV_CAMERA" />
        <Capability Name="ID_HW_FRONTCAMERA" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

#### config.xml

    <feature name="http://tizen.org/api/application" required="true"/>
    <feature name="http://tizen.org/api/application.launch" required="true"/>

参照: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)
