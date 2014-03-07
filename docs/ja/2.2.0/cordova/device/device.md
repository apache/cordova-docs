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

> `device` オブジェクトはデバイスのハードウェアとソフトウェアの情報を表します。

プロパティー
----------

- device.name
- device.cordova
- device.platform
- device.uuid
- device.version

変数の範囲
--------------

`device` オブジェクトは `window` オブジェクトに割当たれるため、暗黙的にグローバルスコープとして扱われます。

    // 下記は同じ `device` オブジェクト
    var phoneName = window.device.name;
    var phoneName = device.name;

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Device" value="org.apache.cordova.Device" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.READ_PHONE_STATE" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>SYSTEM_SERVICE</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Device" value="org.apache.cordova.device.Device" />

#### www/config.xml

    <feature id="blackberry.app" required="true" version="1.0.0.0" />
    <rim:permissions>
        <rim:permit>read_device_identifying_information</rim:permit>
    </rim:permissions>

### iOS

    パーミッションの設定は必要ありません。

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
        <Capability Name="ID_CAP_IDENTITY_DEVICE" />
        <Capability Name="ID_CAP_IDENTITY_USER" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

#### config.xml

    <feature name="http://tizen.org/api/systeminfo" required="true"/>

参照: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)
