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

geolocation.watch<a href="Position/position.html">Position</a>
=========================

デバイスの現在の位置情報の変化を監視します。

    var watchId = navigator.geolocation.watch<a href="Position/position.html">Position</a>(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>,
                                                      [<a href="parameters/geolocationError.html">geolocationError</a>],
                                                      [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);

パラメーター
----------

- __<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>__: 現在位置情報の取得成功時に呼ばれるコールバック関数を表します
- __<a href="parameters/geolocationError.html">geolocationError</a>__: (オプション) エラー発生時に呼ばれるコールバック関数を表します
- __<a href="parameters/geolocation.options.html">geolocationOptions</a>__: (オプション) 位置情報取得のオプションを表します

返り値
-------

- __String__: 位置変化を参照する watch ID を返します。 watch ID は `<a href="geolocation.clearWatch.html">geolocation.clearWatch</a>` に渡すことで位置変化の監視を中止するために使われます。

概要
-----------

`geolocation.watch<a href="Position/position.html">Position</a>` 関数は非同期関数です。位置情報に変化があった場合に、デバイスの現在位置を返します。デバイスが新しい位置情報を取得したとき、 `<a href="Position/position.html">Position</a>` オブジェクトとともに `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` コールバック関数が呼び出されます。エラーが発生した場合、 `<a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a>` オブジェクトとともに `<a href="parameters/geolocationError.html">geolocationError</a>` コールバック関数が呼び出されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    // 成功時のコールバック関数
    // このメソッドは GPS の現在座標を保持する
    // `<a href="Position/position.html">Position</a>` オブジェクトを引数とする
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = '緯度: ' + position.coords.latitude     + '<br />' +
                            '経度: ' + position.coords.longitude    + '<br />' +
                            '<hr />' + element.innerHTML;
    }

    // エラー時のコールバック関数は <a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a> オブジェクトを受けとる
    //
    function onError(error) {
        alert('コード: '        + error.code    + '\n' +
              'メッセージ: '    + error.message + '\n');
    }

    // もし30秒ごとに更新が取得できない場合、エラーが投げられる (オプション)
    //
    var watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, { frequency: 30000 });


詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの<a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.8.1.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        var watchID = null;

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // もし30秒ごとに更新が取得できない場合、エラーが投げられる
            var options = { frequency: 30000 };
            watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, options);
        }

        // onSuccess <a href="geolocation.html">Geolocation</a>
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: ' + position.coords.latitude     + '<br />' +
                                '経度: ' + position.coords.longitude    + '<br />' +
                                '<hr />' + element.innerHTML;
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
        <p id="geolocation">位置情報を監視中...</p>
      </body>
    </html>
