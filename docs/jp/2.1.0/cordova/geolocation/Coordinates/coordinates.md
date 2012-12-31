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
- Tizen

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
        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
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
