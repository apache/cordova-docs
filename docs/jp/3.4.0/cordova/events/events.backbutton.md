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

# backbutton

戻るボタンを押したときに、このイベントが発火します。

    document.addEventListener("backbutton", yourCallbackFunction, false);

## 詳細

デフォルトの戻るボタンの挙動を上書きする場合、 `backbutton` イベントにイベントリスナーを登録して下さい。通常は、 `deviceready` イベントを受け取った後、 `document.addEventListener` を呼び出し、登録を行います。戻るボタンの挙動を上書きするために、他のメソッドを呼び出す必要はありません。

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Windows Phone 7 と 8

## 例

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // 戻るボタンを押したときの処理
    }

## 詳細な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>戻るボタンの使用例</title>

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
            // イベントリスナーの登録
            document.addEventListener("backbutton", onBackKeyDown, false);
        }

        // 戻るボタンの処理
        //
        function onBackKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
