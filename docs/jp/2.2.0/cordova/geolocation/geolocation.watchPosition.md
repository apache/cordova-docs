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
- Tizen

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

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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
