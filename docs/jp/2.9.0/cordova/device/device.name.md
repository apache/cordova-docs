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

device.name
===========

__WARNING:__ バージョン2.3.0以降　`device.name` は廃止される予定です。代わりに `device.model` を使って下さい。

デバイスのモデル名を取得します。

    var string = device.name;

概要
-----------

`device.name` はデバイスのモデル名を返します。この値はデバイスの製造者によって設定されるため、同じモデルでも異なるバージョンで値が異なる場合があります。

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

    // Android:    Nexus One       はコードネームである "Passion" を返します
    //             Motorola Droid  は "voles" を返します
    // BlackBerry: Torch 9800      は "9800" を返します
    // iOS:        "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"のいずれかを返します
    //
    var name = device.name;

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

            element.innerHTML = 'デバイス名: '         + device.name     + '<br />' +
                                'デバイス Cordova: '   + device.cordova  + '<br />' +
                                'デバイスプラットフォーム: ' + device.platform + '<br />' +
                                'デバイス UUID: '      + device.uuid     + '<br />' +
                                'デバイスモデル: '       + device.model    + '<br />' +
                                'デバイスバージョン: '     + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">デバイスプロパティーを読込中...</p>
      </body>
    </html>


Android に関する注意点
--------------

- [モデル名](http://developer.android.com/reference/android/os/Build.html#MODEL) の代わりに [製品名](http://developer.android.com/reference/android/os/Build.html#PRODUCT) を取得します。製品名はほとんどの場合、生産時のコードネームになります。例えば、Nexus One は "Passion" を返し、 Motorola Droid は "voles" を返します。

Windows Phone 7 and 8 に関する注意点
-------------

- 製造時のデバイス名を返します。例えば、Samsung Focus は 'SGH-i917' を返します。

Tizen に関する注意点
-----------

- ベンダーが付けたデバイス名を返します。 例: 'TIZEN'
