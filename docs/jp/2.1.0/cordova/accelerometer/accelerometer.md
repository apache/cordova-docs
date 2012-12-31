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

Accelerometer
=============

> デバイスの動きを (x, y, z) 軸で取得します。

メソッド
-------

- accelerometer.getCurrentAcceleration
- accelerometer.watchAcceleration
- accelerometer.clearWatch

引数
---------

- accelerometerSuccess
- accelerometerError
- accelerometerOptions

オブジェクト (読み取り専用)
-------------------

- Acceleration

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Accelerometer" value="org.apache.cordova.AccelListener" />

### Bada

    パーミッションの設定は必要ありません。

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Accelerometer" value="org.apache.cordova.accelerometer.Accelerometer" />

#### www/config.xml

    <feature id="blackberry.system"  required="true" version="1.0.0.0" />
    <feature id="org.apache.cordova" required="true" version="1.0.0" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Accelerometer</key>
        <string>CDVAccelerometer</string>
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
