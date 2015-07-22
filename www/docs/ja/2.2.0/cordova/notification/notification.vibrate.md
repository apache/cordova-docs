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

notification.vibrate
====================

指定された時間デバイスをバイブレーションさせます。

    navigator.notification.vibrate(milliseconds)

- __time:__ バイブレーションの長さをミリ秒単位で表します。 1000ミリ秒は1秒です (`Number`)

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7
- Bada 1.2 & 2.x

使用例
-------------

    // 2.5秒間バイブレーションさせます
    //
    navigator.notification.vibrate(2500);

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

iPhone に関する注意点
-------------

- __time:__ 引数のバイブレーションの長さを無視し、あらかじめ定められた時間バイブレーションします。

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500); // 2500は無視されます
