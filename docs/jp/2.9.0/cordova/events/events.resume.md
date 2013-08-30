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

resume
===========

このイベントはアプリケーションがバックグラウンドから復帰したときに呼び出されます。

    document.addEventListener("resume", yourCallbackFunction, false);

詳細
-------

OSがアプリをバックグラウンドから復帰させるとき、 `resume` イベントが呼び出されます。

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

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // resume イベントに関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Resume 使用例</title>

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
            document.addEventListener("resume", onResume, false);
        }

        // resume イベントに関する操作を記述
        //
        function onResume() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS に関する注意点
--------------------------
アプリが復帰したとき、つまり `resume` イベントが呼び出されたときに、 `pause` イベントハンドラーで呼び出されたインタラクティブな関数が実行されます。これには alerts や `console.log` 、 Objective-C を介して呼び出されるプラグインや Cordova API が含まれます。

- __active__ イベント

    iOS 固有の `active` イベントは `resume` イベントの代わりとして使用でき、アプリ実行中にオン／オフボタンが押されたことを検知するのに使われます。もしアプリ (とデバイス) がマルチタスク可能なら、このイベントは iOS 5 でのみ続く `resume` と対になります。事実上マルチタスク可能な iOS 5 のすべてのロックされたアプリはバックグラウンド操作となります。 iOS 5 で、もしデバイスがロック状態でもまだアプリを動かしたいのなら、アプリに対してマルチタスク機能を無効 (UIApplicationExitsOnSuspend - YES) にする必要があります。 iOS 4 の場合は、デバイスロック状態でアプリを動作させることと、マルチタスク機能の設定は関係ありません。

- __resume__ イベント

    `alert()` などのインタラクティブな関数群を `resume` イベントハンドラーから呼び出す場合、 遅延 0 秒で `setTimeout()` 関数を使って、その中で呼び出す必要があります。そうしなければ、アプリは応答しなくなります。使用例は次の通りです。

        document.addEventListener("resume", onResume, false);
        function onResume() {
          setTimeout(function() {
            // TODO: do your thing!
          }, 0);
        }
