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

compass.clearWatch
========================

watch ID パラメーターによって参照されるコンパスの監視を停止します。

    navigator.compass.clearWatch(watchID);

- __watchID__: `compass.watchHeading` によって返される ID。

サポートされているプラットフォーム
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) ハードウェア内で有効な場合
- Bada 1.2 & 2.x
- Tizen

使用例
-------------

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

    // ... 後に続く ...

    navigator.compass.clearWatch(watchID);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // watch ID が現在の `watchHeading` を参照
        var watchID = null;

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // コンパスの監視を開始
        //
        function startWatch() {

            // コンパスを3秒ごとに更新
            var options = { frequency: 3000 };

            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }

        // コンパスの監視を停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }

        // onSuccess: 現在の方位を取得
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = '方位: ' + heading.magneticHeading;
        }

        // onError: 方位の取得に失敗
        //
        function onError(compassError) {
            alert('コンパスのエラーが発生しました: ' + compassError.code);
        }


        </script>
      </head>
      <body>
        <div id="heading">方位を待機...</div>
        <button onclick="startWatch();">監視開始</button>
        <button onclick="stopWatch();">監視中止</button>
      </body>
    </html>
