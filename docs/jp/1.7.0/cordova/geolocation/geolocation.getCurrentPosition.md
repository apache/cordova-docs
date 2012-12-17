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
