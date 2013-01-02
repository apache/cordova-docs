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

compass.getCurrentHeading
=========================

現在のコンパスの向きを取得します。

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

概要
-----------

コンパスはデバイスが向いている方向を感知するセンサーです。コンパスはその方角を0から359.99の範囲で計測します。

コンパスの向き情報は、 compassSuccess コールバック関数の CompassHeading オブジェクトを通じて返されます。

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
        alert('現在の方位: ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('コンパスのエラーが発生しました: ' + error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>コンパスの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }

        // onSuccess: 現在の方位を取得
        //
        function onSuccess(heading) {
            alert('現在の方位: ' + heading.magneticHeading);
        }

        // onError: 方位の取得に失敗
        //
        function onError(compassError) {
            alert('コンパスのエラーが発生しました: ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>

