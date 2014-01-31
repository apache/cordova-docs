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

# 再開

アプリケーションがバック グラウンドから取得されるときに発生します。

    document.addEventListener("resume", yourCallbackFunction, false);
    

## 詳細

`resume`ネイティブ プラットフォームは、背景から、アプリケーションを引き出すときに発生します。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
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
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS の癖

その対話型関数から呼び出された、 `pause` 後イベント ハンドラーで実行、アプリケーションの再開時によってシグナル状態になると、 `resume` イベント。 これらの警告を含める `console.log()` と目的 C. を通過するプラグインやコルドバ、API からの呼び出し

*   **アクティブな**イベント
    
    IOS 固有 `active` イベントの代替として利用可能です `resume` 、しユーザーにフォア グラウンドで実行されているアプリケーションとデバイスのロック解除を**ロック**ボタンを無効にするときを検出します。 マルチタスクのアプリケーション (とデバイス) が有効な場合このペアは、その後 `resume` しか iOS の 5 の下でのイベント。 実際には、ios 5 で有効にマルチタスクを持っているすべてのロックされたアプリはバック グラウンドにプッシュされます。 IOS の 5 の下でロックされている場合、実行されているアプリ、アプリのマルチタスク設定を無効に[UIApplicationExitsOnSuspend][1] `YES` 。 IOS 4 でロックされている場合、実行するには、この設定は問題ではないです。

*   **再開**イベント
    
    呼び出された場合、 `resume` イベント ハンドラー、インタラクティブ機能 `alert()` でラップする必要があります、 `setTimeout()` 、タイムアウト値をゼロ、または他のアプリケーションがハングするの呼び出し。 たとえば。
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html