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

device.name
===========

デバイスのモデル名を取得します。

    var string = device.name;

概要
-----------

`device.name` はデバイスのモデル名を返します。この値はデバイスの製造者によって設定されるため、同じモデルでも異なるバージョンで値が異なる場合があります。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- webOS
- Tizen

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    // Android:    Nexus One       はコードネームである "Passion" を返します
    //             Motorola Droid  は "voles" を返します
    // BlackBerry: Torch 9800      は "9800" を返します
    // iPhone:     iTunes でセットした名前、 "Joe's iPhone" などを返します
    //
    var name = device.name;

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの<a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="device.html">Device</a>Ready() {
            var element = document.getElementById('deviceProperties');

            element.innerHTML = 'デバイス名: '          + device.name       + '<br />' +
                                'デバイス Cordova: '    + <a href="device.cordova.html">device.cordova</a>    + '<br />' +
                                'デバイスプラットフォーム: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                'デバイス UUID: '       + <a href="device.uuid.html">device.uuid</a>       + '<br />' +
                                'デバイスバージョン: '  + <a href="device.version.html">device.version</a>    + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">デバイスプロパティーを読込中...</p>
      </body>
    </html>


Android に関する注意点
--------------

- [モデル名](http://developer.android.com/reference/android/os/Build.html#MODEL) の代わりに [製品名](http://developer.android.com/reference/android/os/Build.html#PRODUCT) を取得します。
    - 製品名はほとんどの場合、生産時のコードネームになります。
    - 例: Nexus One は "Passion" を返し、 Motorola Droid は "voles" を返します。

iPhoneに関する注意点
-------------

- [モデル名](http://developer.apple.com/iphone/library/documentation/uikit/reference/UI<a href="device.html">Device</a>_Class/Reference/UI<a href="device.html">Device</a>.html#//apple_ref/doc/uid/TP40006902-CH3-SW1) の代わりに [デバイスのカスタムネーム](http://developer.apple.com/iphone/library/documentation/uikit/reference/UI<a href="device.html">Device</a>_Class/Reference/UI<a href="device.html">Device</a>.html#//apple_ref/doc/uid/TP40006902-CH3-SW13) を取得します。
    - カスタムネームは iTunes のオーナーによって設定されます。
    - 例: "Joe's iPhone"

Windows Phone 7 に関する注意点
-------------

- 製造時のデバイス名を返します。例: 'SGH-i917'

Bada に関する注意点
-----------
- 製造時のモデル名を返します。 例: 'Samsung Wave S8500'

Tizen に関する注意点
-----------
- 製造時のモデル名を返します。 例: 'TIZEN'
