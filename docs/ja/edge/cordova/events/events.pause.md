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

# 一時停止します。

アプリケーションは、背景に置かれたときに発生します。

    document.addEventListener("pause", yourCallbackFunction, false);
    

## 詳細

`pause`に任せたらネイティブ プラットフォームを背景にアプリケーション通常ユーザーが別のアプリケーションに切り替えたときに発生します。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS の癖

`pause`ハンドラー、コルドバ API または Objective-C を通過するネイティブのプラグインの呼び出し動作しない、警告など、対話型の呼び出しと一緒にまたは `console.log()` 。 次の実行ループで、アプリが再開したときのみ処理されます。

IOS 固有 `resign` イベントの代替として利用可能です `pause` 、しユーザーにフォア グラウンドで実行されているアプリでデバイスをロックする**ロック**ボタンを有効にするときを検出します。 マルチタスクのアプリケーション (とデバイス) が有効な場合このペアは、その後 `pause` しか iOS の 5 の下でのイベント。 実際には、ios 5 で有効にマルチタスクを持っているすべてのロックされたアプリはバック グラウンドにプッシュされます。 IOS の 5 の下でロックされている場合、実行されているアプリ、アプリのマルチタスク設定を無効に[UIApplicationExitsOnSuspend][1] `YES` 。 IOS 4 でロックされている場合、実行するには、この設定は問題ではないです。

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html