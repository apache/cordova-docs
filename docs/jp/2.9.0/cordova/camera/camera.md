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

**プライバシーに関する重要な注意点:** デバイスのカメラから画像を使用する場合、プライバシーに関する重要な問題があります。アプリケーションの[プライバシー・ポリシー](guide_getting-started_index.md.html)では、どのようにしてカメラを使用するのか、そして撮影された画像を他のアプリケーションと共有するのか否かを、説明するべきです。加えて、アプリケーションがカメラを使っていることがユーザー・インタフェース上で確認できない場合、アプリケーションがカメラを使用する直前にユーザーへ通知するべきです（デバイスのOSが通知をしない場合）。この通知では上記と同じ情報を表示し、ユーザーの許可を得るようにしましょう（例えば、"Yes"と"No"の選択ダイアログを表示するなど）。詳細はPrivacy Guideを参照してください。 

メソッド
-------

- camera.getPicture
- camera.cleanup

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Camera" value="org.apache.cordova.CameraLauncher" />

#### app/AndroidManifest

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Camera" value="org.apache.cordova.camera.Camera" />

#### www/config.xml

    <feature id="blackberry.media.camera" />

    <rim:permissions>
        <rim:permit>use_camera</rim:permit>
    </rim:permissions>

### iOS

#### config.xml

    <plugin name="Camera" value="CDVCamera" />

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
