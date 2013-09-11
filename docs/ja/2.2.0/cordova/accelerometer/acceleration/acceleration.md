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

Acceleration
============

ある時間軸上でキャプチャーされた加速度センサーのデータを保持します。

プロパティー
----------

- __x:__  x 軸上での加速度を表します。 (単位 m/s^2) (`Number`)
- __y:__  y 軸上での加速度を表します。 (単位 m/s^2) (`Number`)
- __z:__  z 軸上での加速度を表します。 (単位 m/s^2) (`Number`)
- __timestamp:__ ミリ秒単位のタイムスタンプ値を表します。 (`DOMTimeStamp`)

概要
-----------

x, y, z の加速度は重力の影響 (9.81 m/s^2) を含みます。デバイスが机の上に表向きで置かれている場合、値はそれぞれ x=0, y=0, z=9.81 となります。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
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
        <title>加速度センサーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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
