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

device.cordova
===============

現在使用している Cordova のバージョン情報を表します。

    var string = device.cordova;

概要
-----------

`device.cordova` は現在実行中の Cordova のバージョン情報を取得します。

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

    var name = device.cordova;

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');

            element.innerHTML = 'デバイス名: ' + device.name + '<br />' +
                                'デバイス Cordova: ' + device.cordova + '<br />' +
                                'デバイスプラットフォーム: ' + device.platform + '<br />' +
                                'デバイス UUID: ' + device.uuid + '<br />' +
                                'デバイスバージョン: ' + device.version + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">デバイスプロパティーを読込中...</p>
      </body>
    </html>

