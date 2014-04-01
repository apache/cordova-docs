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

device.platform
===============

デバイスの OS 名を取得します。

    var string = device.platform;

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

使用例
-------------

    // デバイスによって異なります。例:
    // - "Android"
    // - "BlackBerry"
    // - "iOS"
    // - "WinCE"
    // - "Tizen"
    var devicePlatform = device.platform;

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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

BlackBerry に関する注意点
-----------------

OS 名ではなくプラットフォームのバージョンを返す可能性があります。例えば、 Storm2 9550 の場合 '2.13.0.95' を返すことがあります。

Windows Phone 7 に関する注意点
-----------------

Windows Phone 7 デバイスはプラットフォームとして 'WinCE' を返します。

Windows Phone 8 に関する注意点
-----------------

Windows Phone 8 デバイスはプラットフォームとして 'Win32NT' を返します。
