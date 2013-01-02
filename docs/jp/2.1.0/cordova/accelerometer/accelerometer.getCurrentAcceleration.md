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

accelerometer.getCurrentAcceleration
====================================

デバイスの傾きの増加量を計測します。

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

概要
-----------

加速度センサーはデバイスの傾きの増加量を計測します。 加速度センサーでは x, y, z 軸の3次元の傾きを取得出来ます。

加速度情報は `accelerometerSuccess` コールバック関数によって返されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- Tizen

使用例
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

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>加速度センサーの使用</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }

        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess(acceleration) {
            alert('X 軸における加速度: ' + acceleration.x + '\n' +
                  'Y 軸における加速度: ' + acceleration.y + '\n' +
                  'Z 軸における加速度: ' + acceleration.z + '\n' +
                  'タイムスタンプ: '     + acceleration.timestamp + '\n');
        }

        // onError: 加速度情報の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>

iPhone に関する注意点
-------------

- iPhone はピンポイントで現在の加速度情報を得ることは出来ません。
- 加速度情報を取得するには、一定の時間間隔で加速度データの変異を計測する必要があります。
- そのため、 `getCurrentAcceleration` 関数は Cordova の `watchAccelerometer` 関数で取得した最新値を返します。
