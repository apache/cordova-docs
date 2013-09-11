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

notification.beep
=================

デバイスが警告音を鳴らします。

    navigator.notification.beep(times);

- __times:__ 警告音を鳴らす回数を表します (`Number`)

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

    // 警告音を2回鳴らす
    navigator.notification.beep(2);

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

        // 通知ダイアログを表示
        //
        function showAlert() {
            navigator.notification.alert(
                'あなたの勝ちです！', // メッセージ
                'ゲームオーバー', // タイトル
                '終了' // ボタン名
            );
        }

        // 警告音を3回鳴らす
        //
        function playBeep() {
            navigator.notification.beep(3);
        }

        // 2秒間バイブレーションさせます
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">通知を表示</a></p>
        <p><a href="#" onclick="playBeep(); return false;">警告音を鳴らす</a></p>
        <p><a href="#" onclick="vibrate(); return false;">バイブレーション</a></p>
      </body>
    </html>

Android に関する注意点
--------------

- Android では、 "Settings/Sound & Display" パネルで設定されたデフォルトの "Notification ringtone" を鳴らします。

iPhone に関する注意点
-------------

- 引数の警告音の回数を無視します。
- iPhone はネイティブの beep API を持っていません。
- Cordova は media API を使って、オーディオファイルを再生することで警告音を実装しています。
- ユーザーは適切な警告音のファイルを用意する必要があります。
- このファイルは30秒未満とし、 www/root に beep.wav として保存してください。

Windows Phone 7 に関する注意点
-------------

- WP7 の Cordova ライブラリは独自の警告音ファイルを含んでおり、それを使用しています。

Tizen に関する注意点
-------------

  - Tizen は media API を使って、オーディオファイルを再生することで警告音を実装しています。
  - このファイルは短い長さとし、 `beep.wav` という名前でアプリケーションのルートディレクトリの 'sounds' サブディレクトリに保存してください。
