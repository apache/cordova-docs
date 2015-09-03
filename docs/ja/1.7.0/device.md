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


Device
======

> `device` オブジェクトはデバイスのハードウェアとソフトウェアの情報を表します。

プロパティー
----------

- device.name
- device.cordova
- device.platform
- device.uuid
- device.version

変数の範囲
--------------

`device` オブジェクトは `window` オブジェクトに割当たれるため、暗黙的にグローバルスコープとして扱われます。

    // 下記は同じ `device` オブジェクト
    //
    var phoneName = window.device.name;
    var phoneName = device.name;



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

使用例
-------------

    // Android:    Nexus One       はコードネームである "Passion" を返します
    //             Motorola Droid  は "voles" を返します
    // BlackBerry: Torch 9800      は "9800" を返します
    // iPhone:     iTunes でセットした名前、 "Joe's iPhone" などを返します
    //
    var name = device.name;

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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


Android に関する注意点
--------------

- [モデル名](http://developer.android.com/reference/android/os/Build.html#MODEL) の代わりに [製品名](http://developer.android.com/reference/android/os/Build.html#PRODUCT) を取得します。
    - 製品名はほとんどの場合、生産時のコードネームになります。
    - 例: Nexus One は "Passion" を返し、 Motorola Droid は "voles" を返します。

iPhoneに関する注意点
-------------

- [モデル名](http://developer.apple.com/iphone/library/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW1) の代わりに [デバイスのカスタムネーム](http://developer.apple.com/iphone/library/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW13) を取得します。
    - カスタムネームは iTunes のオーナーによって設定されます。
    - 例: "Joe's iPhone"

Windows Phone 7 に関する注意点
-------------

- 製造時のデバイス名を返します。例: 'SGH-i917'

Bada に関する注意点
-----------
- 製造時のモデル名を返します。 例: 'Samsung Wave S8500'



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

使用例
-------------

    var name = device.cordova;

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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




device.platform
===============

デバイスの OS 名を取得します。

    var string = device.platform;

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

使用例
-------------

    // デバイスによって異なります。例:
    // - "Android"
    // - "BlackBerry"
    // - "iPhone"
    // - "webOS"
    // - "WinCE"
    var devicePlatform = device.platform;

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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

iPhone に関する注意点
-------------

iPhone は `iPhone` をプラットフォームとして返します。 iPad は `iPad` をプラットフォームとして返します。シミュレータの場合は、 `iPhone Simulator` や `iPad Simulator` をそれぞれ返します。 Apple は iPhone の OS の名称を `iOS` に変更したので、この返り値は厳密には正確でないという点に注意してください。

BlackBerry に関する注意点
-----------------

OS 名ではなくプラットフォームのバージョンを返す可能性があります。例えば、 Storm2 9550 の場合 '2.13.0.95' を返すことがあります。

Windows Phone 7 に関する注意点
-----------------

Windows Phone 7 デバイスはプラットフォームとして 'WinCE' を返します。



device.uuid
===========

デバイスの固定 ID ([UUID](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)) を取得します。

    var string = device.uuid;

概要
-----------

UUID の生成方法については、デバイスの製造者やプラットフォームによって決定されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

使用例
-------------

    // Android: ランダムな64ビットの数値を文字列として返します
    //          数値はデバイスの初回起動時に生成されます
    //
    // BlackBerry: デバイスの PIN 番号を文字列として返します
    //             この番号は9桁の一意な数値です
    //
    // iPhone: (UIDevice クラスのドキュメントに記載)
    //         ハードウエア ID に基づくハッシュ値を返します
    //         デバイスに固有でユーザーアカウントとは
    //         リンクされていません
    // Windows Phone 7 : デバイスユーザーのハッシュ値を返します
    // もしユーザーが定義されていない場合、ガイドが生成され、アプリがアンインストールするまで存続します
    //
    var deviceID = device.uuid;

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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

iOS に関する注意点
-------------

iOS の UUID はデバイスによって一意ではありませんが、インストールされたアプリごとに一意です。もしアプリを削除し再インストールすると、この値は変化します。また、 iOS のバージョンアップをしたとき、もしくはアプリのバージョンアップをしたときにも変化する可能性があります (iOS 5.1 で現象を確認) 。安定した値ではありません。

Windows Phone 7 に関する注意点
-------------

Windows Phone 7 の UUID には IDCAPIDENTITY_DEVICE の許可が必要です。 Microsoft はこのプロパティーを近い将来サポートしなくなります。もし機能が有効でなければ、アプリが永続的な guid を生成し、インストールされている限り保持されます。



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
    var deviceVersion = device.version;

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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

