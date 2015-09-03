---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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


# 通知

> 音、視覚と触覚デバイス通知。

## メソッド

*   `notification.alert`
*   `notification.confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   iOS （`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


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


# notification.beep

デバイス サウンドをビープ音を再生します。

    navigator.notification.beep(times);
    

*   **回**: ビープ音を繰り返す回数。*(数)*

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8

## 簡単な例

    // Beep twice!
    navigator.notification.beep(2);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## Android の癖

*   アンドロイド デフォルト**通知着信音****設定/サウンド ＆ ディスプレイ**パネルの下に指定を果たしています。

## Windows Phone 7 と 8 癖

*   コルドバ分布からジェネリック ビープ音ファイルに依存します。

## Tizen の癖

*   Tizen は、メディア API 経由でオーディオ ファイルを再生してビープ音を実装します。

*   ビープ音ファイルする必要があります短いである必要があります、 `sounds` 、アプリケーションのルート ディレクトリのサブディレクトリと命名する必要があります`beep.wav`.


# notification.vibrate

指定された時間量のデバイスを振動します。

    navigator.notification.vibrate(milliseconds)
    

*   **時間**: 1000年ミリ秒 1 秒に相当どこデバイスを振動させる (ミリ秒単位)。*(数)*

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8

## 簡単な例

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## iOS の癖

*   **時間**: 指定された時間を無視し、時間の事前に設定された量のために振動します。
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored
        

## BB10 の癖

ナビゲーター オブジェクトによって所有されている関数を振動します。

        navigator.vibrate(1000);  // vibrate for 1 second
