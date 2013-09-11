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

compass.watchHeading
====================

コンパス方位を一定の時間間隔で取得します。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);

概要
-----------

コンパスはデバイスが向いている方向を感知するセンサーです。コンパスはその方角を0から359.99の範囲で計測します。

`compass.watchHeading` 関数は一定の時間間隔でデバイスの現在の方位を取得します。方位情報が取得されるごとに `headingSuccess` コールバック関数が実行されます。時間間隔は `compassOptions` オブジェクトの `frequency` パラメーターを通じてミリ秒単位で指定します。

本関数の戻り値である watch ID は、コンパスの監視間隔への参照を表します。 `compass.clearWatch` 関数に watch ID を渡すことで、監視を停止できます。

サポートされているプラットフォーム
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) ハードウェア内で有効な場合
- Bada 1.2 & 2.x
- Tizen


使用例
-------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = '方位: ' + heading.magneticHeading;
    };

    function onError(compassError) {
            alert('コンパスのエラーが発生しました: ' + compassError.code);
    };

    var options = { frequency: 3000 };  // 3秒ごとに更新

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>コンパスの使用例</title>

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

iOS に関する注意点
--------------

iOS では、指定された角度分だけデバイスの現在の方位が変更されたとき、 `compass.watchHeading` でそのデバイスの現在の向きを取得することもできます。方位が指定された角度以上で変更されるたび、 `headingSuccess` コールバック関数が呼び出されます。角度は、 `compassOptions` オブジェクトの `filter` パラメーターで指定します。 `compass.clearWatch` に `watch ID` を渡すことで、通常と同じように監視を停止できます。この機能は、1.6で廃止になった iOS 限定の watchHeadingFilter 関数と clearWatchFilter 関数に置き換わるものです。

iOS では、一度に一つの watchHeading のみが有効です。もし filter を用いて watchHeading が使用されている場合、 getCurrentHeading 関数または watchHeading 関数は既に存在している filter の値を、方位の角度変化量の指定に使用します。 iOS では、時間による監視より、 filter を用いた方位変化量による監視の方が効果的です。
