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

geolocation.getCurrent<a href="Position/position.html">Position</a>
==============================

デバイスの現在位置を `<a href="Position/position.html">Position</a>` オブジェクトとして返します。

    navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>,
                                             [<a href="parameters/geolocationError.html">geolocationError</a>],
                                             [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);

パラメーター
----------

- __<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>__: 現在位置情報の取得成功時に呼ばれるコールバック関数を表します
- __<a href="parameters/geolocationError.html">geolocationError</a>__: (オプション) エラー発生時に呼ばれるコールバック関数を表します
- __<a href="parameters/geolocation.options.html">geolocationOptions</a>__: (オプション) 位置情報取得のオプションを表します

概要
-----------

`geolocation.getCurrent<a href="Position/position.html">Position</a>` 関数は非同期関数です。 `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` コールバック関数に、`<a href="Position/position.html">Position</a>` オブジェクトをパラメーターとしてデバイスの現在位置を返します。エラーが発生した場合、 `<a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a>` オブジェクトとともに `<a href="parameters/geolocationError.html">geolocationError</a>` コールバック関数が呼び出されます。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    // 成功時のコールバック関数
    // このメソッドは GPS の現在座標を保持する
    // `<a href="Position/position.html">Position</a>` オブジェクトを引数とする
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

    // エラー時のコールバック関数は <a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a> オブジェクトを受けとる
    //
    function onError(error) {
        alert('コード: '        + error.code    + '\n' +
              'メッセージ: '    + error.message + '\n');
    }

    navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(onSuccess, onError);

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの<a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(onSuccess, onError);
        }

        // onSuccess <a href="geolocation.html">Geolocation</a>
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

        // エラー時のコールバック関数は <a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a> オブジェクトを受けとる
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
