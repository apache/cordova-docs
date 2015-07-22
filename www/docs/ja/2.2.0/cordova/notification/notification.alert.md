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

notification.alert
==================

通知ダイアログボックスを表示します。

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message:__ ダイアログのメッセージを表します (`String`)
- __alertCallback:__ 通知ダイアログが確認された後に呼び出されるコールバック関数を表します (`Function`)
- __title:__ ダイアログのタイトルを表します (`String`) (オプション, デフォルト: "Alert")
- __buttonName:__ ボタンの名前を表します (`String`) (オプション, デフォルト: "OK")

概要
-----------

ほとんどの Cordova の実装はネイティブのダイアログボックスを使用しています。一部のプラットフォームのみブラウザの `alert` 関数を使っており、通常これらはカスタマイズが制限されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x
- Tizen

使用例
-------------

    // Android / BlackBerry WebWorks (OS 5.0 以上) / iPhone / Tizen
    //
    function alertDismissed() {
        // 任意のコード
    }

    navigator.notification.alert(
        'あなたの勝ちです！', // メッセージ
        alertDismissed, // コールバック関数
        'ゲームオーバー', // タイトル
        '終了' // ボタン名
    );

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // 処理なし
        }

        // 通知ダイアログボックスが確認された
        function alertDismissed() {
            // 任意のコード
        }

        // 通知ダイアログを表示
        //
        function showAlert() {
            navigator.notification.alert(
                'あなたの勝ちです！', // メッセージ
                alertDismissed, // コールバック関数
                'ゲームオーバー', // タイトル
                '終了' // ボタン名
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">通知を表示</a></p>
      </body>
    </html>

Windows Phone 7 に関する注意点
-------------

- ボタンの名前は無視され、常に 'OK' が使用されます。
- ビルトインのブラウザ通知ダイアログ機能はないため、もし alert('foo'); とだけ書きたい場合は、 window.alert = navigator.notification.alert; と window.alert に Cordova の notification.alert をアサインできます。
- 通知と確認の呼び出しはノンブロッキングで、結果は非同期でのみ取得可能です。

Windows 8 アプリに関する注意点
---------------

- 他のプラットフォームでは、メッセージは "重なって表示" (例: 2つの **alert** を呼び出すと、重なった2つのメッセージが表示) されますが、
Windows 8 アプリの場合は最後のメッセージのみが表示されます。
- ビルトインのブラウザ通知ダイアログ機能はないため、もし alert('foo'); とだけ書きたい場合は、 window.alert = navigator.notification.alert; と window.alert に Cordova の notification.alert をアサインできます。

Bada 2.xに関する注意点
---------------
- 通知は、 Javascript の alert を使用します。
