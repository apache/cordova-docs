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

このイベントは Cordova アプリケーションがバックグラウンドから復帰したときに呼び出されます。

    document.addEventListener("resume", yourCallbackFunction, false);

詳細
-------

Cordova はネイティブと JavaScript の2つのコードで形成されます。ネイティブコードがアプリをバックグラウンドから復帰させるとき、 resume イベントが呼び出されます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7

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

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.2.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
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
アプリが復帰したとき、 **pause** イベントハンドラー中の console.log への呼び出しが走ります。 **pause** イベントの iOS に関する注意点のセクションに詳細を記載しています。

- __active__ イベント

    この iOS 固有のイベントは **resume** イベントの一部として使用でき、アプリ実行中にオン／オフボタンが押されたことを検知するのに使われます。もしアプリ (とデバイス) がマルチタスク可能なら、このイベントは iOS 5 でのみ続く **resume** と対になります (事実上マルチタスク可能な iOS 5 のすべてのロックされたアプリはバックグラウンド操作となります) 。

    iOS 5 で、もしデバイスがロック状態でもまだアプリを動かしたいのなら、アプリに対してマルチタスク機能を無効 (UIApplicationExitsOnSuspend - YES) にする必要があります。これは、 iOS 4 の場合と異なります。 iOS 4 の場合は、デバイスロック状態でアプリを動作させることと、マルチタスク機能の設定は関係ありません。
