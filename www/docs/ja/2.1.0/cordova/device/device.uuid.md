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
- webOS
- Tizen

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
    // webOS: デバイスの NDUID を返します
    //
    // Tizen: デバイスの IMEI (International Mobile Equipment Identity) を返します
    //        IMEI はGSM と UMTS の全ての携帯電話ごとに一意な番号です
    var deviceID = device.uuid;

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
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
