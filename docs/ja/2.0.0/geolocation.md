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
---


Geolocation
===========

> `geolocation` オブジェクトはデバイスの GPS センサーへのアクセスを提供します。

Geolocation は緯度や経度といったデバイスの位置情報を提供します。主に Global Positioning System (GPS) から位置情報を取得しますが、 IP アドレスや RFID, WiFi, Bluetooh, MAC アドレス, 基地局 ID などのソースからも現在位置を推測します。ただしこの API がデバイスの正確な位置を特定する保証はありません。

この API は [W3C Geo location API Specification](http://dev.w3.org/geo/api/spec-source.html) をベースとしています。いくつかのデバイス (Android, BlackBerry, Bada, Windows Phone 7, webOS) ではすでにこの機能の実装を提供しています。 これらについては、 Cordova の実装ではなくビルトインのサポートが実行されます。位置情報のサポートがされてないデバイスについては、Cordovaの実装によってW3Cの仕様に沿った機能が提供されます。

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

#### app/res/xml/plugins.xml

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



geolocation.getCurrentPosition
==============================

デバイスの現在位置を `Position` オブジェクトとして返します。

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);

パラメーター
----------

- __geolocationSuccess__: 現在位置情報の取得成功時に呼ばれるコールバック関数を表します
- __geolocationError__: (オプション) エラー発生時に呼ばれるコールバック関数を表します
- __geolocationOptions__: (オプション) 位置情報取得のオプションを表します

概要
-----------

`geolocation.getCurrentPosition` 関数は非同期関数です。 `geolocationSuccess` コールバック関数に、`Position` オブジェクトをパラメーターとしてデバイスの現在位置を返します。エラーが発生した場合、 `PositionError` オブジェクトとともに `geolocationError` コールバック関数が呼び出されます。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS

使用例
-------------

    // 成功時のコールバック関数
    // このメソッドは GPS の現在座標を保持する
    // `Position` オブジェクトを引数とする
    //
    var onSuccess = function(position) {
        alert('緯度: '              + position.coords.latitude      + '\n' +
              '経度: '              + position.coords.longitude     + '\n' +
              '高度: '              + position.coords.altitude      + '\n' +
              '位置精度: '          + position.coords.accuracy      + '\n' +
              '高度精度: '          + position.coords.altitudeAccuracy + '\n' +
              '方位: '              + position.coords.heading       + '\n' +
              '速度: '              + position.coords.speed         + '\n' +
              'タイムスタンプ: '    + position.timestamp            + '\n');
    };

    // エラー時のコールバック関数は PositionError オブジェクトを受けとる
    //
    function onError(error) {
        alert('コード: '        + error.code    + '\n' +
              'メッセージ: '    + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: '            + position.coords.latitude      + '<br />' +
                                '経度: '            + position.coords.longitude     + '<br />' +
                                '高度: '            + position.coords.altitude      + '<br />' +
                                '位置精度: '        + position.coords.accuracy      + '<br />' +
                                '高度精度: '        + position.coords.altitudeAccuracy + '<br />' +
                                '方位: '            + position.coords.heading       + '<br />' +
                                '速度: '            + position.coords.speed         + '<br />' +
                                'タイムスタンプ: '  + position.timestamp            + '<br />';
        }

        // エラー時のコールバック関数は PositionError オブジェクトを受けとる
        //
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }

        </script>
        </head>
        <body>
        <p id="geolocation">位置情報を取得中...</p>
      </body>
    </html>



geolocation.watchPosition
=========================

デバイスの現在の位置情報の変化を監視します。

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);

パラメーター
----------

- __geolocationSuccess__: 現在位置情報の取得成功時に呼ばれるコールバック関数を表します
- __geolocationError__: (オプション) エラー発生時に呼ばれるコールバック関数を表します
- __geolocationOptions__: (オプション) 位置情報取得のオプションを表します

返り値
-------

- __String__: 位置変化を参照する watch ID を返します。 watch ID は `geolocation.clearWatch` に渡すことで位置変化の監視を中止するために使われます。

概要
-----------

`geolocation.watchPosition` 関数は非同期関数です。位置情報に変化があった場合に、デバイスの現在位置を返します。デバイスが新しい位置情報を取得したとき、 `Position` オブジェクトとともに `geolocationSuccess` コールバック関数が呼び出されます。エラーが発生した場合、 `PositionError` オブジェクトとともに `geolocationError` コールバック関数が呼び出されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS

使用例
-------------

    // 成功時のコールバック関数
    // このメソッドは GPS の現在座標を保持する
    // `Position` オブジェクトを引数とする
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = '緯度: ' + position.coords.latitude     + '<br />' +
                            '経度: ' + position.coords.longitude    + '<br />' +
                            '<hr />' + element.innerHTML;
    }

    // エラー時のコールバック関数は PositionError オブジェクトを受けとる
    //
    function onError(error) {
        alert('コード: '        + error.code    + '\n' +
              'メッセージ: '    + error.message + '\n');
    }

    // もし30秒ごとに更新が取得できない場合、エラーが投げられる (オプション)
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 30000 });


詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // もし30秒ごとに更新が取得できない場合、エラーが投げられる
            var options = { frequency: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }

        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: ' + position.coords.latitude     + '<br />' +
                                '経度: ' + position.coords.longitude    + '<br />' +
                                '<hr />' + element.innerHTML;
        }

        // エラー時のコールバック関数は PositionError オブジェクトを受けとる
        //
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }

        </script>
      </head>
      <body>
        <p id="geolocation">位置情報を監視中...</p>
      </body>
    </html>



geolocation.clearWatch
======================

watch ID パラメーターによって参照されるデバイスの位置情報の監視を停止します。

    navigator.geolocation.clearWatch(watchID);

パラメーター
----------

- __watchID:__ `watchPosition` 関数での監視を停止したい watchID を表します (String)

概要
-----------

`geolocation.clearWatch` 関数は、 `watchID` によって参照される `geolocation.watchPosition` 関数を停止させるによって、位置情報の監視を停止します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS

使用例
-------------

    // 位置の変化を監視し、取得可能なもっとも精度の高い位置を使います
    // (オプション)
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });

    // ... 後に続く ...

    navigator.geolocation.clearWatch(watchID);


詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // デバイスで有効な最も制度の高い位置で更新
            //
            var options = { enableHighAccuracy: true };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }

        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: ' + position.coords.latitude     + '<br />' +
                                '経度: ' + position.coords.longitude    + '<br />' +
                                '<hr />' + element.innerHTML;
        }

        // 先に開始された監視を停止する
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }

        // エラー時のコールバック関数は PositionError オブジェクトを受けとる
        //
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }

        </script>
      </head>
      <body>
        <p id="geolocation">位置情報を監視中...</p>
        <button onclick="clearWatch();">監視の停止</button>
      </body>
    </html>



Coordinates
===========

位置情報で使用される座標を格納します。

プロパティー
----------

* __latitude__: 緯度を数値で表します _(Number)_
* __longitude__: 経度を数値で表します _(Number)_
* __altitude__: 海抜からの高度をメートル単位で表します _(Number)_
* __accuracy__: 位置の精度をメートル単位で表します _(Number)_
* __altitudeAccuracy__: 高度の精度をメートル単位で表します _(Number)_
* __heading__: 北から時計回りでのデバイスの方位を角度で表します _(Number)_
* __speed__: 現在のデバイスのスピードをメートル/秒で表します _(Number)_

概要
-----------

`Coordinates` オブジェクトは `Position` オブジェクトのプロパティーとして作成されます。 `Position` オブジェクトはコールバック関数を通してユーザーに返されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS

使用例
-------------

    // 成功時のコールバック関数
    //
    var onSuccess = function(position) {
        alert('緯度: '              + position.coords.latitude          + '\n' +
              '経度: '              + position.coords.longitude         + '\n' +
              '高度: '              + position.coords.altitude          + '\n' +
              '位置精度: '          + position.coords.accuracy          + '\n' +
              '高度精度: '          + position.coords.altitudeAccuracy  + '\n' +
              '方位: '              + position.coords.heading           + '\n' +
              '速度: '              + position.coords.speed             + '\n' +
              'タイムスタンプ: '    + position.timestamp                + '\n');
    };

    // エラー時のコールバック関数
    //
    var onError = function() {
        alert('エラーが発生しました。');
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>位置情報の使用例</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordovaの読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova準備完了
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

        // `Position` プロパティーを表示
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');

            div.innerHTML = '緯度: '        + position.coords.latitude      + '<br/>' +
                            '経度: '        + position.coords.longitude     + '<br/>' +
                            '高度: '        + position.coords.altitude      + '<br/>' +
                            '位置精度: '    + position.coords.accuracy      + '<br/>' +
                            '高度精度: '    + position.coords.altitudeAccuracy + '<br/>' +
                            '方位: '        + position.coords.heading       + '<br/>' +
                            '速度: '        + position.coords.speed         + '<br/>';
        }

        // エラー発生時に警告を表示
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>

Android に関する注意点
-------------

このプロパティーは Android ではサポートされておらず、常に null を返します。



Position
========

geolocation API によって作成された位置情報とタイムスタンプ (`Position`) とを扱うオブジェクトです。

プロパティー
----------

- __coords:__ 地理座標を表します _(Coordinates)_
- __timestamp:__ タイムスタンプ値を表します _(Date)_

概要
-----------

`Position` オブジェクトは Cordova によって作られ、コールバック関数を通してユーザーに返されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS

使用例
-------------

    // 成功時のコールバック関数
    //
    var onSuccess = function(position) {
        alert('緯度: '              + position.coords.latitude          + '\n' +
              '経度: '              + position.coords.longitude         + '\n' +
              '高度: '              + position.coords.altitude          + '\n' +
              '位置精度: '          + position.coords.accuracy          + '\n' +
              '高度精度: '          + position.coords.altitudeAccuracy  + '\n' +
              '方位: '              + position.coords.heading           + '\n' +
              '速度: '              + position.coords.speed             + '\n' +
              'タイムスタンプ: '    + position.timestamp                + '\n');
    };

    // エラー時のコールバック関数は PositionError オブジェクトを受けとる
    //
    function onError(error) {
        alert('コード: '        + error.code    + '\n' +
              'メッセージ: '    + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: '            + position.coords.latitude      + '<br />' +
                                '経度: '            + position.coords.longitude     + '<br />' +
                                '高度: '            + position.coords.altitude      + '<br />' +
                                '位置精度: '        + position.coords.accuracy      + '<br />' +
                                '高度精度: '        + position.coords.altitudeAccuracy + '<br />' +
                                '方位: '            + position.coords.heading       + '<br />' +
                                '速度: '            + position.coords.speed         + '<br />' +
                                'タイムスタンプ: '  + position.timestamp            + '<br />';
        }

        // エラー時のコールバック関数は PositionError オブジェクトを受けとる
        //
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }

        </script>
      </head>
      <body>
        <p id="geolocation">位置情報を取得中...</p>
      </body>
    </html>



PositionError
========

`PositionError` オブジェクトは、エラーが発生したときに `geolocationError` コールバック関数に渡されます。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します
- __message:__ エラーの内容を表すエラーメッセージを表します

定数
---------

- `PositionError.PERMISSION_DENIED`
- `PositionError.POSITION_UNAVAILABLE`
- `PositionError.TIMEOUT`

概要
-----------

`PositionError` オブジェクトは、位置情報取得に関するエラーが発生したときに `geolocationError` コールバック関数を通してユーザーに返されます。

### `PositionError.PERMISSION_DENIED`

ユーザーがアプリケーションに対して、位置情報の取得を許可しなかった場合に返されます。これはプラットフォームに依存します。

### `PositionError.POSITION_UNAVAILABLE`

デバイスが位置を取得できなかった場合に返されます。大抵、これはデバイスがネットワークに接続されていない、および／または衛生情報が取得出来なかったことを意味します。

### `PositionError.TIMEOUT`

デバイスが、 `geolocationOptions` の `timeout` プロパティーによって指定された時間内に位置が取得できなかった場合に返されます。 `geolocation.watchPosition` と一緒に使用するとき、このエラーは `geolocationError` コールバックの中で毎 `timeout` ミリ秒後呼ばれる可能性があります。



geolocationSuccess
==================

位置情報取得に成功したとき (`geolocation.getCurrentPosition` と一緒に使われた時) 、または位置情報が変化したとき (`geolocation.watchPosition` と一緒に使われた時) に呼び出されるコールバック関数です。

    function(position) {
        // 任意のコード
    }

パラメーター
----------

- __position:__ デバイスによって返される位置情報を表します (`Position`)

使用例
-------

    function geolocationSuccess(position) {
        alert('緯度: '              + position.coords.latitude          + '\n' +
              '経度: '              + position.coords.longitude         + '\n' +
              '高度: '              + position.coords.altitude          + '\n' +
              '位置精度: '          + position.coords.accuracy          + '\n' +
              '高度精度: '          + position.coords.altitudeAccuracy  + '\n' +
              '方位: '              + position.coords.heading           + '\n' +
              '速度: '              + position.coords.speed             + '\n' +
              'タイムスタンプ: '    + position.timestamp                + '\n');
    }



geolocationError
================

位置情報取得関数にエラーが発生したときに呼び出されるコールバック関数です。

    function(error) {
        // エラー処理
    }

パラメーター
----------

- __error:__ デバイスから返されるエラーを表します (`PositionError`)



geolocationOptions
==================

位置情報 (`Position`) 取得の設定をカスタマイズするためのパラメーターを表します。

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

オプション
-------

- __enableHighAccuracy:__ より精度の高い位置情報を取得するためのヒントを提供するかどうかを表します。デフォルトでは、デバイスはネットワークベースでの位置情報取得を試みます。プロパティーを `true` と設定することで、衛星位置情報などの精度の高い方法を使用します _(Boolean)_
- __timeout:__ `geolocation.getCurrentPosition` または `geolocation.watchPosition` 関数が呼び出されたときに、それぞれに対応する `geolocationSuccess` コールバック関数が呼ばれるまでの最大経過時間をミリ秒単位で表します。もし `geolocationSuccess` コールバック関数がこの時間内に呼ばれなかった場合、 `PositionError.TIMEOUT` エラーコードを伴った `geolocationError` コールバック関数が呼び出されます。注意: `geolocation.watchPosition` と一緒に使われる場合、 `geolocationError` コールバックが毎 `timeout` ミリ秒呼び出される可能性があります _(Number)_
- __maximumAge:__ キャッシュされた位置情報の取得を許容する最大時間をミリ秒単位で表します _(Number)_

Android に関する注意点
--------------

Android 2.x のシミュレーターは enableHighAccuracy オプションが true にセットしない限り位置情報の取得結果を通知しません。

    { enableHighAccuracy: true }


