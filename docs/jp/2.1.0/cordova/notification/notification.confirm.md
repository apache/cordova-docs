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

notification.confirm
====================

カスタマイズ可能な確認ダイアログボックスを表示します。

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message:__ ダイアログのメッセージを表します (`String`)
- __confirmCallback:__ 押されたボタンのインデックス (1, 2, または3) とともに呼び出されるコールバック関数を表します (`Function`)
- __title:__ ダイアログのタイトルを表します (`String`) (オプション, デフォルト: "Confirm")
- __buttonLabels:__ ボタンのラベルを設定するためのカンマ区切りの文字列を表します (String) (オプション, デフォルト: "OK,Cancel")

概要
-----------

`notification.confirm` 関数は、ブラウザの confirm 関数よりも広いカスタマイズ性を持ったネイティブダイアログボックスを表示する関数です。

confirmCallback
---------------

`confirmCallback` はユーザーが確認ダイアログのいずれかのボタンが押したときに呼び出されます。

コールバックは、押されたボタンを表すインデックス `buttonIndex` (`Number`) を引数にとります。このインデックスは、 `1`, `2`, `3` のように1始まりであることに注意してください。


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

    // 確認ダイアログの表示プロセスの開始
    function onConfirm(buttonIndex) {
        alert('選択されたボタン ' + buttonIndex);
    }

    // カスタム確認ダイアログを表示
    //
    function showConfirm() {
        navigator.notification.confirm(
            'あなたの勝ちです！', // メッセージ
            onConfirm, // 選択されたボタン情報とともに呼ばれるコールバック関数
            'ゲームオーバー', // タイトル
            'リスタート,終了' // ボタン
        );
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // 処理なし
        }

        // 確認ダイアログの表示プロセスの開始
        function onConfirm(buttonIndex) {
            alert('選択されたボタン ' + buttonIndex);
        }

        // カスタム確認ダイアログを表示
        //
        function showConfirm() {
            navigator.notification.confirm(
                'あなたの勝ちです！', // メッセージ
                onConfirm, // 選択されたボタン情報とともに呼ばれるコールバック関数
                'ゲームオーバー', // タイトル
                'リスタート,終了' // ボタン
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">確認ダイアログを表示</a></p>
      </body>
    </html>

Windows Phone 7 に関する注意点
----------------------

- ボタンの名前は無視され、常に `'OK|Cancel'` が使用されます。
- `window.confirm` に対応するビルトインのブラウザ確認ダイアログ機能はありません。
    - `window.confirm = navigator.notification.confirm;` と指定することによって、 `window.confirm` にこの関数をアサインできます。
- 通知 (`alert`) と確認 (`confirm`) の呼び出しはノンブロッキングで、結果は非同期でのみ取得可能です。

Bada 2.x に関する注意点
---------------

- 確認 (`confirm`) は、ブラウザのビルトイン `alert` 関数を使用します。

Bada 1.2 に関する注意点
---------------

- ボタンの名前は無視され、常に `'OK|Cancel'` が使用されます。
