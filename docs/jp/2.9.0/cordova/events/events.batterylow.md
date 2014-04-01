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

batterylow
===========

このイベントはバッテリー残量が低下したときに呼び出されます。

    window.addEventListener("batterylow", yourCallbackFunction, false);

詳細
-------

このイベントはバッテリー残量のパーセンテージが低下の閾値に達したときに呼び出されます。この値はデバイス固有です。

`batterylow` ハンドラーには、以下の2つのプロパティー持つオブジェクトが引数として渡されます:

- __level__ バッテリーのパーセンテージ (0-100) _(Number)_
- __isPlugged:__ デバイスが充電器に接続されているかどうかを表します _(Boolean)_

通常は、 `deviceready` イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーを登録します。

サポートされているプラットフォーム
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 以上)
- Tizen

使用例
-------------

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // バッテリー関する操作を記述
        alert("バッテリー残量が低下しています " + info.level + "%");
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready 使用例</title>

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
            window.addEventListener("batterylow", onBatteryLow, false);
        }

        // バッテリー関する操作を記述
        //
        function onBatteryLow(info) {
            alert("バッテリー残量が低下しています " + info.level + "%");
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
