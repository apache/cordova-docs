Geolocation
===========

`Geolocation` オブジェクトはデバイスのGPSセンサーへのアクセスを提供します。

`Geolocation` は緯度や経度といったデバイスの位置情報を提供します。主にGlobal Positioning System(GPS)から位置情報を取得しますが、IPアドレスやRFID、WiFi、Bluetooth、MACアドレス、基地局IDなどのソースからも現在位置を推測します。

ただし当APIがデバイスの正確の位置を特定する保障はありません。当APIは [W3C Geo location API Specification](http://dev.w3.org/geo/api/spec-source.html) に基づいております。既にW3CのAPIの実装をサポートしているデバイスについては、PhoneGapの実装ではなくビルトインのサポートが実行されます。GeolocationのサポートがなされていないデバイスについてはPhoneGapの実装は、W3Cの仕様と適合します。

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

オブジェクト (読み込み専用)
-------------------

- Position
- PositionError
- Coordinates