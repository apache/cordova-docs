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

この API は [W3C Geo location API Specification](http://dev.w3.org/geo/api/spec-source.html) をベースとしています。いくつかのデバイスではすでにこの機能の実装を提供しています。 これらについては、 Cordova の実装ではなくビルトインのサポートが実行されます。位置情報のサポートがされてないデバイスについては、Cordovaの実装によってW3Cの仕様に沿った機能が提供されます。

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
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

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
              'タイムスタンプ: '    + new Date(position.timestamp) + '\n');
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

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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
                                'タイムスタンプ: '  + new Date(position.timestamp)  + '<br />';
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

- __String__: 位置変化を参照する watch ID を返します。 watch ID は `geolocation.clearWatch` に渡すことで位置変化の監視を中止することができます。

概要
-----------

`geolocation.watchPosition` 関数は非同期関数です。位置情報に変化があった場合に、デバイスの現在位置を返します。デバイスが新しい位置情報を取得したとき、 `Position` オブジェクトとともに `geolocationSuccess` コールバック関数が呼び出されます。エラーが発生した場合、 `PositionError` オブジェクトとともに `geolocationError` コールバック関数が呼び出されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

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

    // 3秒ごとに位置情報を取得する設定 (オプション)
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });


詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // 3秒ごとに更新
            var options = { frequency: 3000 };
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
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

使用例
-------------

    // 3秒ごとに位置情報を取得する設定 (オプション)
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });

    // ... 後に続く ...

    navigator.geolocation.clearWatch(watchID);


詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // 3秒ごとに更新
            var options = { frequency: 3000 };
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
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

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
              'タイムスタンプ: '    + new Date(position.timestamp)      + '\n');
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
        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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

geolocation API によって作成された位置情報 (`Position`) を扱うオブジェクトです。

プロパティー
----------

- __coords:__ 地理座標を表します _(Coordinates)_
- __timestamp:__ ミリ秒単位のタイムスタンプ値を表します _(DOMTimeStamp)_

概要
-----------

`Position` オブジェクトは Cordova によって作られ、コールバック関数を通してユーザーに返されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

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
              'タイムスタンプ: '    + new Date(position.timestamp)      + '\n');
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

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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
                                'タイムスタンプ: '  + new Date(position.timestamp)  + '<br />';
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

iPhone に関する注意点
-------------

- __timestamp:__ ミリ秒ではなく、秒が使用されています。

対処法としては、1000倍することにより手動でマイクロ秒にすることが考えられます。

    var onSuccess = function(position) {
        alert('緯度: '              + position.coords.latitude      + '\n' +
              '経度: '              + position.coords.longitude     + '\n' +
              'タイムスタンプ: '    + new Date(position.timestamp * 1000) + '\n');
    };



PositionError
========

`PositionError` オブジェクトは、エラーが発生したときに geolocationError コールバック関数に渡されます。

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




geolocationSuccess
==================

位置情報取得に成功したときに呼び出されるコールバック関数です。

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
              'タイムスタンプ: '    + new Date(position.timestamp)      + '\n');
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

位置情報取得の設定をカスタマイズするためのパラメーターを表します。

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

オプション
-------

- __frequency:__ 位置情報を取得する頻度をミリ秒で表します。 このオプションは W3C の仕様に含まれておらず、将来的には実装が廃止されます。 maximumAge を代わりに使用してください。 _(Number)_ (デフォルト: 10000)
- __enableHighAccuracy:__ より精度の高い位置情報を取得するためのヒントを提供するかどうかを表します _(Boolean)_
- __timeout:__ `geolocation.getCurrentPosition` または `geolocation.watchPosition` 関数が呼び出されたときに、それぞれに対応する `geolocationSuccess` コールバック関数が呼ばれるまでの最大経過時間をミリ秒単位で表します _(Number)_
- __maximumAge:__ キャッシュされた位置情報の取得を許容する最大時間をミリ秒単位で表します _(Number)_

Android に関する注意点
--------------

Android 2.x のシミュレーターは enableHighAccuracy オプションが true にセットしない限り位置情報の取得結果を通知しません。

    { enableHighAccuracy: true }


