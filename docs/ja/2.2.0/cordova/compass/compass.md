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

Compass
=======

> デバイスの向いている方向に関する情報を取得します。

メソッド
-------

- compass.getCurrentHeading
- compass.watchHeading
- compass.clearWatch
- compass.watchHeadingFilter    (廃止)
- compass.clearWatchFilter      (廃止)

引数
---------

- compassSuccess
- compassError
- compassOptions
- compassHeading

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Compass" value="org.apache.cordova.CompassListener" />

### Bada

    パーミッションの設定は必要ありません。

### BlackBerry WebWorks

    パーミッションの設定は必要ありません。

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Compass</key>
        <string>CDVLocation</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_SENSORS" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

    パーミッションの設定は必要ありません。
