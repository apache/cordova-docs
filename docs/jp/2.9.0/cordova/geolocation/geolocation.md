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

> `geolocation` オブジェクトはデバイスの GPS センサーに基づく位置情報、もしくはネットワーク信号から推測された位置情報へのアクセスを提供します。

`Geolocation` は緯度や経度といったデバイスの位置情報を提供します。主に Global Positioning System (GPS) から位置情報を取得しますが、 IP アドレスや RFID, WiFi, Bluetooh, MAC アドレス, 基地局 ID などのソースからも現在位置を推測します。ただしこの API がデバイスの正確な位置を特定する保証はありません。

この API は [W3C Geolocation API 仕様書](http://dev.w3.org/geo/api/spec-source.html) をベースとしており、W3Cの仕様を実装していないデバイスでのみ実行されます。

**プライバシーに関する重要な注意点:** 位置情報データを扱う場合、プライバシーに関して重要な問題が発生します。 アプリケーションの [プライバシー・ポリシー](guide_getting-started_index.md.html) では、位置情報をどのように使用するのか、他のアプリケーションとデータを共有するのか否か、さらにデータ精度はどの程度なのか (例えば、大まかな位置、詳細な位置、郵便番号レベルの位置など)、などを説明するべきです。位置情報は慎重に扱うべき情報です。なぜならば、ある個人の活動地域特定出来き、移動履歴を保存できるからです。それゆえに、アプリケーションのプライバシー・ポリシーに加えて、位置情報データへアクセスする際には、その都度通知するように強く心がけるべきでしょう (もしデバイスのOSが常に通知を行っていない場合)。この通知では、上記と同様の情報を提供し、ユーザーの許可を得るようにするべきです (例えば、"OK"と"NO"などの選択肢を表示するなど)。詳細は Privacy Guide を参照してください。

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

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Geolocation" value="org.apache.cordova.geolocation.Geolocation" />

#### www/config.xml

    <rim:permissions>
        <rim:permit>read_geolocation</rim:permit>
    </rim:permissions>

### iOS

#### config.xml

    <plugin name="Geolocation" value="CDVLocation" />

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_LOCATION" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

    パーミッションの設定は必要ありません。
