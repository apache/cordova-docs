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

- __message__: ダイアログのメッセージを表します _(String)_
- __alertCallback__: 通知ダイアログが確認された後に呼び出されるコールバック関数を表します _(Function)_
- __title__: ダイアログのタイトルを表します _(String)_ (オプション, デフォルト: "Alert")
- __buttonName__: ボタンの名前を表します _(String)_ (オプション, デフォルト: "OK")

概要
-----------

ほとんどの Cordova の実装はネイティブのダイアログボックスを使用しています。一部のプラットフォームのみブラウザの `alert` 関数を使っており、通常これらはカスタマイズが制限されます。

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

    // Android / BlackBerry WebWorks (OS 5.0 以上) / iOS / Tizen
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

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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

- ビルトインのブラウザ通知ダイアログ機能はありませんが、以下のように実装することで `alert()` をグローバルスコープで呼び出せます:

        window.alert = navigator.notification.alert;

- 通知 (`alert`) と確認 (`confirm`) の呼び出しはノンブロッキングで、結果は非同期でのみ取得可能です。
