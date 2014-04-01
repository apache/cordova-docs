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

online
===========

このイベントはアプリケーションがオンラインになったとき、つまりデバイスがインターネットに接続されたときに呼び出されます。

    document.addEventListener("online", yourCallbackFunction, false);

詳細
-------

デバイスがネットワークに接続され、アプリケーションがインターネットへ接続できる状態になった時に `online` イベントが呼び出されます。このイベントは Connection API と同じ情報を利用しており、 `connection.type` の値が `NONE` から他の値へ変わった時に呼び出されます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーを登録します。

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

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // online イベントに関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Online 使用例</title>

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
            document.addEventListener("online", onOnline, false);
        }

        // online イベントに関する操作を記述
        //
        function onOnline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS に関する注意点
--------------------------
初回起動時、最初の online イベントは少なくとも起動に1秒かかります。

Windows Phone 7 に関する注意点
--------------------------
エミュレータで起動している場合、デバイスの `connection.status` は常に unknown (不明) であるため、このイベントは呼び出されません。

Windows Phone 8 に関する注意点
--------------------------
エミュレータでは `Cellular` を connection type として報告されるため、このイベントは呼び出されません。
