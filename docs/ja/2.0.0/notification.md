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


Notification
============

> 視覚、聴覚、触覚を用いたデバイス通知機能を提供します。

メソッド
-------

- notification.alert
- notification.confirm
- notification.beep
- notification.vibrate

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Notification" value="org.apache.cordova.Notification"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.VIBRATE" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>SYSTEM_SERVICE</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Notification" value="org.apache.cordova.notification.Notification" />

#### www/config.xml

    <feature id="blackberry.ui.dialog" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Notification</key>
        <string>CDVNotification</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

    パーミッションの設定は必要ありません。



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

使用例
-------------

    // Android / BlackBerry WebWorks (OS 5.0 以上) / iPhone
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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

Bada 2.xに関する注意点
---------------
- 通知は、 Javascript の alert を使用します。



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

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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

