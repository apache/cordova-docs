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

notification.prompt
====================

カスタマイズ可能な入力ダイアログボックスを表示します。

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])

- __message__: ダイアログのメッセージ _(String)_
- __promptCallback__: ボタンが押された際に呼び出されるコールバック関数 _(Function)_
- __title__: ダイアログのタイトル _(String)_ (オプション、デフォルト値は `Prompt`)
- __buttonLabels__: 各ボタン名を要素とする配列 _(Array)_ (オプション、デフォルト値は `["OK","Cancel"]`)
- __defaultText__: デフォルトのテキストボックス入力値 _(String)_ (オプション、デフォルト値は "Default text")

概要
-----------

`notification.prompt` メソッドは、ブラウザの `prompt` 関数よりも広いカスタマイズ性を持ったネイティブダイアログボックスを表示します。

promptCallback
---------------

ユーザーが入力ダイアログボックスのボタンを押した際に、 `promptCallback` は呼び出されます。このコールバック関数へ渡される `result` オブジェクトは以下のプロパティを持っています: 

- __buttonIndex__: 押されたボタンのインデクス _(Number)_ 。 このインデックスは、 `1`, `2`, `3` のように1始まりであることに注意してください。
- __input1__: 入力ダイアログボックスに入力されたテキスト _(String)_

サポートされているプラットフォーム
-------------------

- Android
- iOS

使用例
-------------

    // 入力ダイアログへの結果を処理する
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }

    // カスタム入力ダイアログを表示す
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // Empty
        }

        // 入力ダイアログへの結果を処理する
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }

        // カスタム入力ダイアログを表示す
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>

Android に関する注意点
----------------------

- Android は最大 3 個までのボタンをサポートしています。それ以上のボタンを設定しても無視されます。
- Android 3.0 以降、 Holo テーマを使っているデバイスではボタンの表示順が反対になります。
