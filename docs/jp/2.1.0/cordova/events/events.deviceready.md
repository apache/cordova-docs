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

deviceready
===========

このイベントは Cordova が完全にロードされたときに呼び出されます。

    document.addEventListener("deviceready", yourCallbackFunction, false);

詳細
-------

このイベントはすべての Cordova アプリケーションで使用される重要なイベントです。

Cordova はネイティブと JavaScript の2つのコードで形成されます。ネイティブコードがロードされている間は、カスタムのロード画面が表示されます。しかし、 JavaScript は DOM が読み込まれるまではロードされません。そのため、 Cordova の JavaScript 関数群がロードされる前に、それらの関数が呼ばれる可能性があります。

Cordova の `deviceready` イベントは、 Cordova が完全にロードした後で呼び出されます。安全に Cordova 関数を呼び出すためには、デバイスが完全に呼び出されたことを確認してください。

通常は、 HTML の DOM が読み込まれた後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7
- Bada 1.2 & 2.x
- Tizen

使用例
-------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Cordova API を安全に使用できます
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready 使用例</title>

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
            // Cordova API を安全に使用できます
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
