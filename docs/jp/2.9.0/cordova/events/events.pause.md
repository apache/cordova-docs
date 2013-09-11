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

pause
===========

このイベントはアプリケーションがバックグラウンド動作になったときに呼び出されます。

    document.addEventListener("pause", yourCallbackFunction, false);

詳細
-------

OSがアプリをバックグラウンドへ移動したときに `pause` イベントが呼び出されます。通常はユーザーが別のアプリを使い出したときです。

通常は、 `deviceready` イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーを登録します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 and 8
- Windows 8

使用例
-------------

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // pause イベントに関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Pause 使用例</title>

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
            document.addEventListener("pause", onPause, false);
        }

        // pause イベントに関する操作を記述
        //
        function onPause() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS に関する注意点
--------------------------
`pause` ハンドラー内では、 Cordova API や Objective-C を利用するネイティブプラグインへあらゆる呼び出しは一切動作しません。 alerts や `console.log` のような、あらゆるインタラクティブな呼び出しも同様に機能しません。これらは、アプリを再開したときに実行されます (次の run-loop で実行されます) 。

iOS固有の __resign__ イベントは `pause` イベントの一部として使用でき、アプリ実行中にオン／オフボタンが押されたことを検知するのに使われます。 もしアプリ (とデバイス) がマルチタスク可能なら、このイベントは iOS 5 でのみ続く `pause` と対になります。事実上マルチタスク可能な iOS 5 のすべてのロックされたアプリはバックグラウンド操作となります。iOS 5 で、もしデバイスがロック状態でもまだアプリを動かしたいのなら、アプリに対してマルチタスク機能を無効 (UIApplicationExitsOnSuspend - YES) にする必要があります。 iOS 4 の場合は、デバイスロック状態でアプリを動作させることと、マルチタスク機能の設定は関係ありません。
