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

このイベントはすべてのアプリケーションで使用される重要なイベントです。このイベントは Cordova のデバイス API が読み込まれ、利用可能になったことを通知します。

Cordova はネイティブと JavaScript の2つのコードで形成されます。ネイティブコードがロードされている間は、カスタムのロード画面が表示されます。しかし、 DOM が読み込まれると JavaScript は 読み込まれます。そのため、 ネイティブコードが利用可能になる前に、 Cordova の JavaScript 関数群が呼ばれる可能性があります。

`deviceready` イベントは、 Cordova が完全にロードされた後で呼び出されます。このイベントが呼び出された後は、 Cordova API を安全に呼び出せます。通常は、 HTML の DOM が読み込まれた後、 `document.addEventListener` を通じてイベントリスナーを登録します。

`deviceready` イベントは他のイベントとは異なった振る舞いをします。 `deviceready` イベントが発火された後に登録された他のどのイベントハンドラーも、直ちに呼び出せるコールバック関数を保持しています。
<!--
`deviceready` イベントは、このイベントが発火された後に登録されたどのイベントハンドラーもコールバック関数を直ちに呼び出すという点で、他のイベントとは異なった振る舞いをします。
-->

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
            // Cordova API を安全に使用できます
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
