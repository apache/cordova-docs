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

# pause

アプリケーションがバックグラウンド処理に切り替わったときに、このイベントが発火します。

    document.addEventListener("pause", yourCallbackFunction, false);

## 詳細

ネイティブプラットフォームが、アプリをバックグラウンド処理に切り替えたときに、 `pause` が発火します。典型的な例では、ユーザが他のアプリに切り替えたときです。

`deviceready` イベントの発火後、イベントリスナーをアタッチ ( attach ) するには、通常、 `document.addEventListener` を使用しなければなりません。

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 と 8
- Windows 8

## 例

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // pause イベントの処理
    }

## 詳細な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // デバイス API ライブラリの読み込み処理中のため、待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // デバイス API 群の準備完了
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
        }

        // pause イベントの処理
        //
        function onPause() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

## iOS 特有の動作

Objective-C を利用するネイティブ プラグインの呼び出し、または、Cordova API の呼び出しを、`pause` ハンドラー内で行うことはできません。同様に alerts または `console.log` のような、インタラクティブな呼び出しも行うことはできません。これらの呼び出しは、アプリ再開直後のランループ ( run loop ) で実行されます。

`pause` イベントの代替として使用できる、iOS 固有の `resign` イベントがあります。このイベントでは、フォアグラウンド ( foreground ) で実行中のアプリに、ユーザがデバイスにロックをかけたこと ( __ロック__ ボタンを押した状態 ) を検知できます。アプリ ( およびデバイス ) のマルチタスク処理が有効になっている場合には、後の処理で `pause` イベント 1 つと組み合わせることもできます。ただし、iOS 5 のみが対象となります。実行結果として、iOS 5 であれば、ロックされたアプリ ( マルチタスク処理が有効となっていること ) は、バックグラウンド処理に切り替わります。iOS 5 において、ロックがかかった状態でも処理を継続させるためには、 [UIApplicationExitsOnSuspend](http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html) を `YES` に設定して、アプリのマルチタスク処理を無効にします。iOS 4 の場合、ロックされた状態での処理の継続は、この設定では行えません。
