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

# startcallbutton

通話の呼び出し開始ボタンを押したときに、このイベントが発火します。

    document.addEventListener("startcallbutton", yourCallbackFunction, false);

## 詳細

デフォルトの呼び出し開始ボタンの挙動を上書きする場合、 `startcallbutton` イベントにイベントリスナーを登録することができます。

`deviceready` イベントの発火後、イベントリスナーをアタッチ ( attach ) するには、通常、 `document.addEventListener` を使用しなければなりません。

## サポート対象のプラットフォーム

- BlackBerry 10

## 例

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);

    function onStartCallKeyDown() {
        // 呼び出し開始ボタンの処理
    }

## 詳細な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>呼び出し開始ボタンの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // デバイス API ライブラリのロード処理中のため、待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // デバイス API 群の準備完了
        //
        function onDeviceReady() {
            // イベントリスナーの登録
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }

        // 呼び出し開始ボタンの処理
        //
        function onStartCallKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
