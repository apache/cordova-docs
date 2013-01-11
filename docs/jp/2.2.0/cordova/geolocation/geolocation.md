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

Geolocation
===========

> `geolocation` オブジェクトはデバイスの GPS センサーへのアクセスを提供します。

Geolocation は緯度や経度といったデバイスの位置情報を提供します。主に Global Positioning System (GPS) から位置情報を取得しますが、 IP アドレスや RFID, WiFi, Bluetooh, MAC アドレス, 基地局 ID などのソースからも現在位置を推測します。ただしこの API がデバイスの正確な位置を特定する保証はありません。

この API は [W3C Geo location API Specification](http://dev.w3.org/geo/api/spec-source.html) をベースとしています。いくつかのデバイス (Android, BlackBerry, Bada, Windows Phone 7, webOS, Tizen) ではすでにこの機能の実装を提供しています。 これらについては、 Cordova の実装ではなくビルトインのサポートが実行されます。位置情報のサポートがされてないデバイスについては、Cordovaの実装によってW3Cの仕様に沿った機能が提供されます。

メソッド
-------

- geolocation.getCurrentPosition
- geolocation.watchPosition
- geolocation.clearWatch


引数
---------

- geolocationSuccess
- geolocationError
- geolocationOptions

オブジェクト (読み取り専用)
-------------------

- Position
- PositionError
- Coordinates

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Geolocation" value="org.apache.cordova.GeoBroker" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />

### Bada

    パーミッションの設定は必要ありません。

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Geolocation" value="org.apache.cordova.geolocation.Geolocation" />

#### www/config.xml

    <rim:permissions>
        <rim:permit>read_geolocation</rim:permit>
    </rim:permissions>

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Geolocation</key>
        <string>CDVLocation</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_LOCATION" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

    パーミッションの設定は必要ありません。
