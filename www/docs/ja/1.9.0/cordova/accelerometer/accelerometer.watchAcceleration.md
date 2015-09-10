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

accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>
===============================

ある時間間隔における x, y, z 軸上の加速度を返します。

    var watchID = navigator.accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>(<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>,
                                                           <a href="parameters/accelerometerError.html">accelerometerError</a>,
                                                           [<a href="parameters/accelerometerOptions.html">accelerometerOptions</a>]);

概要
-----------

加速度センサーはデバイスの傾きの増加量を計測します。加速度センサーでは x, y, z 軸の3次元の傾きを取得出来ます。

`accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>` 関数を使うと、一定の間隔ごとにデバイスの加速度情報を取得できます。加速度情報を取得するたびに、 `<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>` コールバック関数が実行されます。加速度情報を取得する間隔は、 `acceleratorOptions` オブジェクトのパラメーター `frequency` を通じてミリ秒単位で指定できます。

本関数の戻り値である watch ID は、実行中の加速度センサー測定への参照を表します。また、 `<a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>` 関数に watch ID を渡すことで、加速度センサーの監視を停止できます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x


<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    function onSuccess(acceleration) {
        alert('X 軸における加速度: ' + acceleration.x + '\n' +
              'Y 軸における加速度: ' + acceleration.y + '\n' +
              'Z 軸における加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '     + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    var options = { frequency: 3000 };  // 3秒ごとに更新

    var watchID = navigator.accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError, options);

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>加速度センサーの<a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.9.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // watch ID が現在の `watch<a href="acceleration/acceleration.html">Acceleration</a>` を参照
        var watchID = null;

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            startWatch();
        }

        // 加速度情報の監視を開始
        //
        function startWatch() {

            // 加速度情報を3秒ごとに更新
            var options = { frequency: 3000 };

            watchID = navigator.accelerometer.watch<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError, options);
        }

        // 加速度情報の監視を停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.<a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>(watchID);
                watchID = null;
            }
        }

        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'X 軸における加速度: ' + acceleration.x + '<br />' +
                                'Y 軸における加速度: ' + acceleration.y + '<br />' +
                                'Z 軸における加速度: ' + acceleration.z + '<br />' +
                                'タイムスタンプ: '     + acceleration.timestamp + '<br />';
        }

        // onError: 加速度情報の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <div id="accelerometer">加速度センサーを待機...</div>
      </body>
    </html>

 iPhone に関する注意点
-------------

- 指定された時間間隔に対して、 Cordova はコールバック関数を呼び出し、加速度情報を渡します。
- ただし、時間間隔は Cordova によって最低 40ms 、最高 1000ms に制限されています。
- たとえば時間間隔として 3秒 (3000ms) を指定した場合、 Cordova は加速度情報を1秒で取得しますが、コールバック関数は3秒ごとに呼び出されます。
