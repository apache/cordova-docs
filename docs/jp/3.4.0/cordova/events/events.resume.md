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

# resume

アプリがバックグラウンドから復帰したときに、このイベントが発火します。

    document.addEventListener("resume", yourCallbackFunction, false);

## 詳細

ネイティブプラットフォームがアプリをバックグラウンドから復帰させるとき、 `resume` イベントが発火します。

`deviceready` イベントの発火後、イベントリスナーをアタッチ ( attach ) するには、通常、 `document.addEventListener` を使用しなければなりません。

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8
- Windows 8

## 例

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // resume イベントの処理
    }

## 詳細な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // デバイス API ライブラリのロード処理中のため、待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // デバイス API 群の準備完了
        //
        function onDeviceReady() {
            document.addEventListener("resume", onResume, false);
        }

        // resume イベントの処理
        //
        function onResume() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

## iOS 特有の動作

アプリ復帰後 ( `resume` イベント後 ) に `pause` イベントハンドラーが呼び出したインタラクティブな他の関数が実行されます。復帰後に実行を行うものの中には、alerts、`console.log()`、ならびに、Objective-C を介して行うプラグインからの呼び出しまたは Cordova API があります。

- __active__ イベント

    `resume` イベントの代替として使用できる、iOS 固有の `active` イベントがあります。このイベントでは、フォアグラウンド ( foreground ) で実行中のアプリに、ユーザがデバイスのロック解除をしたこと ( __ロック__ ボタンを再度押した状態 ) を検知できます。アプリ ( およびデバイス ) のマルチタスク処理が有効になっている場合には、後の処理で `resume` イベント 1 つと組み合わせることもできます。ただし、iOS 5 のみが対象となります。実行結果として、iOS 5 であれば、ロックされたアプリ ( マルチタスク処理が有効となっていること ) は、バックグラウンド処理に切り替わります。iOS 5 において、ロックがかかった状態でも処理を継続させるためには、 [UIApplicationExitsOnSuspend](http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html) を `YES` に設定して、アプリのマルチタスク処理を無効にします。iOS 4 の場合、ロックされた状態での処理の継続は、この設定では行えません。
    
- __resume__ イベント

    `alert()` などのインタラクティブな関数群を、 `resume` イベントハンドラーから呼び出す場合、タイムアウト値を 0 に指定した `setTimeout()` の中で、これらの関数群を呼び出す必要があります。この処理を行わない場合、アプリは応答しなくなります。使用例を次に示します。

        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // ここに処理を記述
                }, 0);
        }
