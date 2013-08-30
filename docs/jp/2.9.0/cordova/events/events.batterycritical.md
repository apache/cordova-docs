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

batterycritical
===========

このイベントはバッテリー残量が危険な閾値に達したときに呼び出されます。

    window.addEventListener("batterycritical", yourCallbackFunction, false);

詳細
-------

このイベントはバッテリー残量が危険なパーセンテージの閾値に達したときに呼び出されます。

`batterycritical` ハンドラーには、以下の2つのプロパティーを持つオブジェクトが引数として渡されます:

- __level__: バッテリーのパーセンテージ (0-100) _(Number)_
- __isPlugged__: デバイスが充電器に接続されているかどうかを表します _(Boolean)_

通常は、 `deviceready` イベントを受け取った後、 `window.addEventListener` を通じてイベントリスナーを登録します。

サポートされているプラットフォーム
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 以上)
- Tizen

使用例
-------------

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // バッテリー関する操作を記述
        alert("バッテリー残量が危険です " + info.level + "%\nすぐに充電してください。");
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Battery Criticaly 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }

        // バッテリー関する操作を記述
        //
        function onBatteryCritical(info) {
            alert("バッテリー残量が危険です " + info.level + "%\nすぐに充電してください。");
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
