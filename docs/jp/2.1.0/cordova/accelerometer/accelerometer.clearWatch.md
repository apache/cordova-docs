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

accelerometer.clearWatch
========================

指定した watch ID の加速度情報の監視を停止します。

    navigator.accelerometer.clearWatch(watchID);

- __watchID__: `accelerometer.watchAcceleration`  によって返される ID。

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

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

    // ... 後に続く ...

    navigator.accelerometer.clearWatch(watchID);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>加速度センサーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // watch ID が現在の `watchAcceleration` を参照
        var watchID = null;

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // 加速度情報の監視を開始
        //
        function startWatch() {

            // 加速度情報を3秒ごとに更新
            var options = { frequency: 3000 };

            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }

        // 加速度情報の監視を停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
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
        <button onclick="stopWatch();">監視中止</button>
      </body>
    </html>
