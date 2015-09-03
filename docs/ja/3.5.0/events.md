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


# イベント

> コルドバのライフ サイクル イベント。

## イベントの種類

*   deviceready
*   一時停止します。
*   再開
*   backbutton
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## [Org.apache.cordova.battery ステータス][1]によって追加されるイベント

 [1]: https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

*   batterycritical
*   batterylow
*   batterystatus

## [Org.apache.cordova.network 情報][2]によって追加されるイベント

 [2]: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md

*   online
*   offline


# deviceready

コルドバが完全に読み込まれたときに発生します。

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 詳細

このイベントは、任意のアプリケーションに不可欠です。それ信号をコルドバのデバイス Api が読み込まれているにアクセスする準備が整いました。

2 つのコード ベースから成っているコルドバ: ネイティブと JavaScript。 ネイティブ コードを読み込み、カスタム読み込み画像が表示されます。 ただし、DOM 読み込まれる一度 java スクリプトの設定を読み込むだけ。 これは、対応するネイティブ コードが使用可能になる前に潜在的コルドバ JavaScript 関数を呼び出すことができます web アプリを意味します。

`deviceready`コルドバが完全に読み込まれた後に発生します。 1 回のイベントが発生し、安全にすることができますコルドバ Api への呼び出し。 アプリケーションは、通常のイベント リスナーをアタッチ `document.addEventListener` HTML ドキュメント DOM が読み込まれる。

`deviceready`イベントの動作はやや異なります他人から。任意のイベント ハンドラーを登録後、 `deviceready` イベントが発生したそのすぐにコールされるコールバック関数。

## サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
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
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


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


# backbutton

ユーザーが [戻る] ボタンを押したときに発生します。

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## 詳細

既定の [戻る] ボタンの動作をオーバーライドするイベント リスナーを登録、 `backbutton` を呼び出すことによって通常のイベント `document.addEventListener` を受信したら、 `deviceready` イベント。 [戻る] ボタンの動作をオーバーライドする他のメソッドを呼び出す必要はなくなったです。

## サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   ブラックベリー 10
*   Windows Phone 7 と 8

## 簡単な例

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

ユーザーがメニュー ボタンを押したときに発生します。

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## 詳細

イベント ハンドラーを適用する既定のメニューのボタンの動作をオーバーライドします。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   ブラックベリー 10

## 簡単な例

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## 完全な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

Android 上に検索ボタンを押したときに発生します。

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## 詳細

Android のデフォルト検索ボタンの動作をオーバーライドする必要がある場合 '［ 検索 ］' イベントのイベント リスナーを登録できます。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   アンドロイド

## 簡単な例

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## 完全な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

スタートの呼び出しボタンを押したときに発生します。

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## 詳細

イベント リスナーを登録することができますスタート コールの既定動作をオーバーライドする必要がある場合、 `startcallbutton` イベント。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   ブラックベリー 10

## 簡単な例

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## 完全な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

最後の呼び出しボタンを押したときに発生します。

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## 詳細

イベントは、最後の呼び出しの既定の動作をオーバーライドします。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   ブラックベリー 10

## 簡単な例

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## 完全な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

ユーザーがボタンを下ってボリュームを押したときに発生します。

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## 詳細

イベント リスナーを登録することができます既定ボリューム ダウン時の動作をオーバーライドする必要がある場合、 `volumedownbutton` イベント。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   ブラックベリー 10

## 簡単な例

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## 完全な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

音量アップボタンを押したときに発生します。

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## 詳細

イベント リスナーを登録できます、デフォルト ボリュームの動作をオーバーライドする必要がある場合、 `volumeupbutton` イベント。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   ブラックベリー 10

## 簡単な例

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## 完全な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
