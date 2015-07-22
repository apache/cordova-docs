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

# splashscreen.hide

スプラッシュ スクリーンを閉じます。

    navigator.splashscreen.hide();
    

## 説明

このメソッドは、アプリケーションのスプラッシュ スクリーンを閉じます。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    navigator.splashscreen.hide();
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>
    

## iOS の気まぐれ

`config.xml`ファイルの `AutoHideSplashScreen` 設定する必要があります `false` 。 遅延を 2 秒間スプラッシュ スクリーンを非表示、する、タイマーを追加しますで次のように `deviceready` イベント ハンドラー。

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);