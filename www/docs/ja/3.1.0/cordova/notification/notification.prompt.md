---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# notification.prompt

カスタマイズ可能なプロンプト ダイアログ ボックスが表示されます。

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **メッセージ**: ダイアログ メッセージ。*(文字列)*

*   **promptCallback**： ボタンが押されたときに呼び出すコールバック。*(機能)*

*   **タイトル**: *(文字列)* (省略可能、既定値のタイトル] ダイアログ`Prompt`)

*   **buttonLabels**： ボタンを指定する文字列の配列*(配列)* (省略可能、既定値のラベル`["OK","Cancel"]`)

*   **これら**: 既定テキスト ボックスの入力値 ( `String` ) (省略可能、既定: 空の文字列)

## 説明

`notification.prompt`メソッドはブラウザーのより詳細にカスタマイズされるネイティブ ダイアログ ボックスを表示します `prompt` 機能。

## promptCallback

`promptCallback`プロンプト ダイアログ ボックス内のボタンのいずれかを押したときに実行されます。`results`コールバックに渡されるオブジェクトに、次のプロパティが含まれています。

*   **buttonIndex**: 押されたボタンのインデックス。*(数)*メモことインデックス 1 から始まるインデックスを使用、ので、値は `1` 、 `2` 、 `3` 、等。

*   **input1**: プロンプト ダイアログ ボックスに入力したテキスト。*(文字列)*

## サポートされているプラットフォーム

*   アンドロイド
*   iOS

## 簡単な例

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
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
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
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
    

## Android の癖

*   Android は最大 3 つのボタンをサポートしているし、それ以上無視します。

*   アンドロイド 3.0 と後、ホロのテーマを使用するデバイスを逆の順序でボタンが表示されます。