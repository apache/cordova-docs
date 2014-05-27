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

# notification.alert

カスタムの警告またはダイアログ ボックスが表示されます。

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **メッセージ**: ダイアログ メッセージ。*(文字列)*

*   **alertCallback**: 警告ダイアログが閉じられたときに呼び出すコールバック。*(機能)*

*   **タイトル**: ダイアログのタイトル。*(文字列)*(省略可能、既定値は`Alert`)

*   **buttonName**: ボタンの名前。*(文字列)*(省略可能、既定値は`OK`)

## 説明

ほとんどコルドバ ネイティブ] ダイアログ ボックスの使用この機能がいくつかのプラットフォームを使用して、ブラウザーの `alert` 関数は、通常より少なくカスタマイズ可能です。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

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
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Windows Phone 7 と 8 癖

*   組み込みのブラウザー警告がない呼び出しを次のように 1 つをバインドすることができます `alert()` 、グローバル スコープで。
    
        window.alert = navigator.notification.alert;
        

*   両方の `alert` と `confirm` は非ブロッキング呼び出し、結果は非同期的にのみ利用できます。