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

offline
===========

このイベントは Cordova アプリケーションがオフライン (インターネットに接続) になったときに呼び出されます。

    document.addEventListener("online", yourCallbackFunction, false);

詳細
-------

アプリのネットワーク接続がオフラインになったとき、 offline イベントが呼び出されます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7
- Tizen

使用例
-------------

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // offlineイベントに関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Offline 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            document.addEventListener("offline", onOffline, false);
        }

        // offline イベントに関する操作を記述
        //
        function onOffline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS に関する注意点
--------------------------
初回起動時、最初の offline イベントは少なくとも起動に1秒かかります。

Windows Phone 7 に関する注意点
--------------------------
エミュレータで起動している場合、デバイスの connection.status は常に unknown (不明) であるため、このイベントは呼び出されません。
