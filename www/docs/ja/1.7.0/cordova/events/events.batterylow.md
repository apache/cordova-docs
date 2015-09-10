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

batterylow
===========

このイベントはバッテリー残量が低下したことを Cordova アプリケーションが検知したときに呼び出されます。

    window.addEventListener("batterylow", yourCallbackFunction, false);

詳細
-------

このイベントはバッテリー残量のパーセンテージが低下の閾値に達したことを Cordova アプリケーションが検知したときに呼び出されます。この値はデバイス固有です。

batterylow ハンドラーは以下の2つのプロパティーを含むオブジェクトを伴って呼び出されます:

- __level:__ バッテリーのパーセンテージ (0-100) _(Number)_
- __isPlugged:__ デバイスが充電器に接続されているかどうかを表します _(Boolean)_

通常は、 Cordova の '<a href="events.deviceready.html">deviceready</a>' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 以上)

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // バッテリー関する操作を記述
        alert("バッテリー残量が低下しています " + info.level + "%");
    }

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova <a href="../device/device.html">Device</a> Ready <a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに on<a href="../device/device.html">Device</a>Ready を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-1.7.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `<a href="events.deviceready.html">deviceready</a>` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("<a href="events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);
        }

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
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
