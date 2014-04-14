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

# deviceready

Cordova を読み込んだ後、このイベントが発火します。

    document.addEventListener("deviceready", yourCallbackFunction, false);

## 詳細

このイベントは、すべてのアプリケーションで使用する重要なイベントです。このイベントでは、Cordova のデバイス API を読み込み、利用可能になったことを通知します。

Cordova は、ネイティブと JavaScript の2つのコードから構成されています。ネイティブコードが読み込まれている間は、カスタムした読み込み画面を表示します。ただし、DOM を読み込んだ後に、JavaScript の読み込みを行います。そのため、関連するネイティブコードが利用可能になる前に、Web アプリが Cordova の JavaScript 関数を呼び出す可能性もあります。

`deviceready` イベントは、Cordova を最後まで読み込んだ後に発火します。このイベントが発火した後は、 Cordova API を安全に呼び出せます。アプリでは、通常、 HTML 文書の DOM を読み込んだ後に、 `document.addEventListener` を通じてイベントリスナーをアタッチ ( attach ) します。

`deviceready` イベントは他のイベントとは幾分異なった挙動をします。`deviceready` イベントの発火後に登録されている、他のイベントハンドラーのコールバック関数は、発火後、ただちに呼び出されます。

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 と 8
- Windows 8

## 例

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // デバイス API を安全に使用可能
    }

## 詳細な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // デバイス API ライブラリの読み込み処理中のため、待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // デバイス API 群の準備完了
        //
        function onDeviceReady() {
            // デバイス API 群を安全に使用可能
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
