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

# notification.confirm

カスタマイズ可能な確認のダイアログ ボックスが表示されます。

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **メッセージ**: ダイアログ メッセージ。*(文字列)*

*   **confirmCallback**: インデックス (1、2、または 3) を押されたボタンまたはダイアログ ボックスは、ボタンを押す （0） なしに解雇されたときに呼び出すコールバック。*(機能)*

*   **タイトル**: ダイアログのタイトル。*(文字列)*(省略可能、既定値は`Confirm`)

*   **buttonLabels**: ボタンのラベルを指定する文字列の配列。*(配列)*(省略可能、既定値は [ `OK,Cancel` ])

## 説明

`notification.confirm`メソッドはブラウザーのより詳細にカスタマイズされるネイティブ ダイアログ ボックスを表示します `confirm` 機能。

## confirmCallback

`confirmCallback`の確認ダイアログ ボックスでボタンを押したときに実行されます。

コールバック引数 `buttonIndex` *（番号）*は、押されたボタンのインデックス。 メモことインデックス 1 から始まるインデックスを使用、ので、値は `1` 、 `2` 、 `3` 、等。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
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
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7 と 8 癖

*   組み込みブラウザーの機能はありません `window.confirm` が割り当てることによってバインドすることができます。
    
        window.confirm = navigator.notification.confirm;
        

*   呼び出しを `alert` と `confirm` では非ブロッキング、結果は非同期的にのみ使用できます。