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

# notification.beep

<a href="../device/device.html">デバイス</a> サウンドをビープ音を再生します。

    navigator.notification.beep(times);
    

*   **回**: ビープ音を繰り返す回数。*(数)*

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8

## 簡単な例

    // Beep twice!
    navigator.notification.beep(2);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.<a href="notification.alert.html">notification.alert</a>(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.<a href="notification.vibrate.html">notification.vibrate</a>(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## Android の癖

*   アンドロイド デフォルト**<a href="notification.html">通知</a>着信音****設定/サウンド ＆ ディスプレイ**パネルの下に指定を果たしています。

## Windows Phone 7 と 8 癖

*   コルドバ分布からジェネリック ビープ音<a href="../file/fileobj/fileobj.html">ファイル</a>に依存します。

## Tizen の癖

*   Tizen は、<a href="../media/media.html">メディア</a> API 経由でオーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>を再生してビープ音を実装します。

*   ビープ音<a href="../file/fileobj/fileobj.html">ファイル</a>する必要があります短いである必要があります、 `sounds` 、アプリケーションのルート ディレクトリのサブディレクトリと命名する必要があります`beep.wav`.