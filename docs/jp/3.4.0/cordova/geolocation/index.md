<!---
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
-->

# org.apache.cordova.geolocation

このプラグインを使用して、緯度・経度等のデバイスの位置情報を取得します。

GPS ( Global Positioning System ) からの情報、および、各ネットワーク信号 ( 例 ： IP address、RFID、WiFi・Bluetooth MAC アドレス、GSM/CDMA 基地局 ID) を使用した推定が、情報元になります。

ただし、この API が返す結果が、デバイスの正確な位置を示す保証はありません。

この API は [W3C Geolocation API 仕様書](http://dev.w3.org/geo/api/spec-source.html) に準拠しています。、W3C の仕様に準拠した処理を行っていないデバイスでのみ使用します。

__注意__ : 位置情報に関するデータの取得・利用には、個人情報保護の観点から、細心の注意が必要です。位置情報に関するデータの取り扱い方法、第三者への情報提供およびデータの精度 ( 例 ： 大雑把な位置、詳細な位置、郵便番号枠レベルの位置等 ) に関しては、アプリの個人情報の取り扱いに関するポリシーの中で議論すべき問題です。個人情報の中でも位置情報は、個人の居場所の特定および機能が備わっていれば移動記録として利用でき、その取り扱いには注意が求められます。そのため、アプリのプライバシーに関するポリシーの策定に加え、アプリが位置情報にアクセスまたは利用する際には、その直前にユーザへの通知および許諾を得る必要があります。デバイスのオペレーティングシステムがこの通知および許諾の要請を行ってない場合には、改善する必要があります。また、ユーザへの通知および許諾の要請を行う際には、必ず、個人情報の取り扱いに関するポリシーの開示および使用方法・収集レベルに関する同意の意思表示を求める必要があります ( __許可する__ 、または、 __許可しない__ のように、明示的に判断できる必要があります ) 。詳細な情報に関しては、『 Privacy Guide 』 をご覧ください。

## インストール

    cordova plugin add org.apache.cordova.geolocation

### Firefox OS 特有の動作

[Manifest Docs](https://developer.mozilla.org/en-US/Apps/Developing/Manifest) に記載の内容に沿って、 __www/manifest.webapp__ を作成してください。
また、権限を追加してください。

    "permissions": {
		"geolocation": { "description": "Used to position the map to your current position" }
	}

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## メソッド

- navigator.geolocation.getCurrentPosition
- navigator.geolocation.watchPosition
- navigator.geolocation.clearWatch

## オブジェクト ( 読み取り専用 )

- Position
- PositionError
- Coordinates

## navigator.geolocation.getCurrentPosition

引数として `Position` オブジェクトを使用して、デバイスの現在位置を `geolocationSuccess` コールバックに返します。エラーが発生した場合、 `PositionError` オブジェクトを `geolocationError` コールバックに渡します。

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);

### パラメータ

- __geolocationSuccess__: 現在位置を引き渡すコールバックです。

- __geolocationError__: _( 任意 )_ エラーが発生した場合に実行するコールバックです。

- __geolocationOptions__: _( 任意 )_ 位置情報取得の際に使用するオプションです。


### 例

    // onSuccess 時のコールバック
    // 現在の GPS 座標を格納した `Position` オブジェクトをこのメソッドは受け取ります。
    //
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError 時のコールバックは、PositionError オブジェクトを受け取ります。
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

## navigator.geolocation.watchPosition

デバイスの位置の変化を検知したとき、最新の現在位置を返します。

引数として `Position` オブジェクトを使用し、 `geolocationSuccess` コールバックを実行して、
最新の現在位置を取得します。エラーが発生した場合、引数として `PositionError` オブジェクトを使用し、 `geolocationError` コールバックを実行します。

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);

### パラメータ

- __geolocationSuccess__: 現在位置を引き渡すコールバックです。

- __geolocationError__: _( 任意 )_ エラーが発生した場合に実行するコールバックです。

- __geolocationOptions__: _( 任意 )_ 位置情報取得の際に使用するオプションです。

### 返り値

- __String__: watch position を参照するときに使用する watch id を返します。 `navigator.geolocation.clearWatch` に watch id を引き渡すことで、位置の変化の監視を停止することができます。

### 例

    // onSuccess 時のコールバック
    //   現在の GPS 座標を格納した `Position` オブジェクトをこのメソッドは受け取ります。
    //   
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // onError 時のコールバックは、PositionError オブジェクトを受け取ります。
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // オプション : 30 秒ごとに更新結果を取得できない場合、エラーを投げます。
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });


## geolocationOptions

位置情報を格納した `Position` を取得する際の設定をカスタマイズする任意のパラメータです。

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

### オプション

- __enableHighAccuracy__: より精度の高い位置情報をアプリが必要としていることを、このオプションを使用して示します。
デバイスのデフォルトでは、ネットワーク関連の情報を使用して、 `Position` の取得を行うよう設定されています。このプロパティを `true` にした場合、フレームワークに対して、より精度の高い方法 ( 例 ： 衛星測位情報) を使用するよう命令します。 _(Boolean)_

- __timeout__: `navigator.geolocation.getCurrentPosition` または `geolocation.watchPosition` を呼んでから、 対応する `geolocationSuccess` コールバックを実行するまでの最大経過時間　 ( ミリ秒 )。 `geolocationSuccess` コールバックをこの時間内に呼べない場合、 `PositionError.TIMEOUT` エラーコードを `geolocationError` に渡します ( 注意 : `geolocation.watchPosition` と共に使用したとき、 `timeout` に設定したミリ秒単位間隔で、 `geolocationError` を呼び出すことになる場合もあります)。 _(Number)_

- __maximumAge__: 指定された時間 ( ミリ秒単位 ) 以下の有効期間 ( age ) を持っている、 キャッシュされた位置情報のみ許容します。 _(Number)_

### Android 特有の動作

Android 2.x のエミュレータでは、 `enableHighAccuracy` オプションを `true` にセットしないと、位置情報を返しません。

## navigator.geolocation.clearWatch

デバイスの現在位置の変化の監視を停止します。その際、 
`watchID` パラメータを使用して参照を行います。

    navigator.geolocation.clearWatch(watchID);

### パラメータ

- __watchID__: `watchPosition` を停止する際に使用する id ( 文字列 )

### 例

    // オプション : 位置の変化を監視します。また、利用可能な範囲内で、最も精度の高い位置情報を取得する方法を使用します。
    //
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });

    // ...後から...

    navigator.geolocation.clearWatch(watchID);

## Position

`Position` を使用して、geolocation API が 生成した座標とタイムスタンプを格納します。

### プロパティ

- __coords__: 地理座標のセット _(Coordinates)_

- __timestamp__: `coords` 作成時のタイムスタンプ _(Date)_

## Coordinates

`Coordinates` オブジェクトは、 `Position` オブジェクトに付けて使用します。 `Position` オブジェクトは、現在位置を取得する際に呼ぶコールバック関数で使用します。

`Coordinates` オブジェクトには、位置の地理座標を示すプロパティ群が格納されています。

### プロパティ

* __latitude__: 10 進法形式で示す緯度 _(Number)_

* __longitude__: 10 進法形式で示す経度 _(Number)_

* __altitude__: メートル単位で示す楕円体高 ( ellipsoid height ) _(Number)_

* __accuracy__: メートル単位で示す座標 ( 緯度と経度 ) の精度 _(Number)_

* __altitudeAccuracy__: メートル単位で示す楕円体高の精度 _(Number)_

* __heading__: 真方位を基準とする時計回りの方位角を使用した、進行方向 _(Number)_

* __speed__: 1 秒あたりのスピードをメートル単位で示す、デバイスの現在の対地速度 _(Number)_

###  Amazon Fire OS 特有の動作

__altitudeAccuracy__: Android ( Fire OS ) 搭載のデバイスでは、サポートしません。 `null` を返します。

### Android 特有の動作

__altitudeAccuracy__: Android 搭載のデバイスでは、サポートしません。 `null` を返します。

## PositionError

navigator.geolocation の使用時にエラーが発生した場合、 `geolocationError` コールバック関数に `PositionError` オブジェクトを渡します。

### プロパティ

- __code__: 事前に定義した以下のエラーコードのうちの 1 つ

- __message__: 詳細を示したエラーメッセージ

### 定数

- `PositionError.PERMISSION_DENIED`
  - アプリによる位置情報の取得をユーザが許可しなかった場合、これを返します。 機種により異なります。
- `PositionError.POSITION_UNAVAILABLE`
  - 位置情報の取得をデバイスが行えない場合、これを返します。一般的には、ネットワークに接続していない場合または衛星の fix が得られない場合が考えられます。
- `PositionError.TIMEOUT`
  - `geolocationOptions` の `timeout` で指定した時間内に、位置情報をデバイスが取得できない場合、これを返します。 `navigator.geolocation.watchPosition` で使用した場合、 `timeout` で指定した時間になる度に、 `geolocationError` コールバックにこのエラーを渡すことになります。
