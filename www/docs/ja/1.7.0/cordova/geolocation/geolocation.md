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

title: Geolocation
---

Geolocation
===========

> `geolocation` オブジェクトはデバイスの GPS センサーへのアクセスを提供します。

Geolocation は緯度や経度といったデバイスの位置情報を提供します。主に Global Positioning System (GPS) から位置情報を取得しますが、 IP アドレスや RFID, WiFi, Bluetooh, MAC アドレス, 基地局 ID などのソースからも現在位置を推測します。ただしこの API がデバイスの正確な位置を特定する保証はありません。

この API は [W3C Geo location API Specification](http://dev.w3.org/geo/api/spec-source.html) をベースとしています。いくつかのデバイスではすでにこの機能の実装を提供しています。 これらについては、 Cordova の実装ではなくビルトインのサポートが実行されます。位置情報のサポートがされてないデバイスについては、Cordovaの実装によってW3Cの仕様に沿った機能が提供されます。

メソッド
-------

- [geolocation.getCurrentPosition](geolocation.getCurrentPosition.html)
- [geolocation.watchPosition](geolocation.watchPosition.html)
- [geolocation.clearWatch](geolocation.clearWatch.html)


引数
---------

- [geolocationSuccess](parameters/geolocationSuccess.html)
- [geolocationError](parameters/geolocationError.html)
- [geolocationOptions](parameters/geolocation.options.html)

オブジェクト (読み取り専用)
-------------------

- [Position](Position/position.html)
- [PositionError](PositionError/positionError.html)
- [Coordinates](Coordinates/coordinates.html)
