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

device.version
==============

OS のバージョンを取得します。

    var string = device.version;

サポートされているプラットフォーム
-------------------

- Android 2.1+
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS
- Tizen

使用例
-------------

    // Android:     Froyo の場合は "2.2" を返す
    //              Eclair の場合は "2.1", "2.0.1" もしくは "2.0" を返す
    //              アップデートが行われると "2.1-update1" のように返す
    //
    // BlackBerry:  OS 6.0 を搭載した Torch 9800 の場合は "6.0.0.600" を返す
    //
    // iPhone:      iOS 3.2 は "3.2" を返す
    //
    // Windows Phone 7: 現在の OS バージョンを返す、例: Mango は7.10.7720を返す
    // webOS: webOS 2.2.4 は 2.2.4 を返す
    // Tizen: "TIZEN_20120425_2" を返す
    var deviceVersion = device.version;

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

            element.innerHTML = 'デバイス名: '          + device.name       + '<br />' +
                                'デバイス Cordova: '    + device.cordova    + '<br />' +
                                'デバイスプラットフォーム: ' + device.platform + '<br />' +
                                'デバイス UUID: '       + device.uuid       + '<br />' +
                                'デバイスバージョン: '  + device.version    + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">デバイスプロパティーを読込中...</p>
      </body>
    </html>
