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
*   オンライン
*   オフライン
*   戻るボタン
*   batterycritical
*   batterylow
*   batterystatus
*   メニュー ボタン
*   ［ 検索 ］
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## 機能へのアクセス

バージョン 3.0、コルドバ implements バッテリー状態と他のデバイス レベルの Api*のプラグイン*として。 バッテリのステータスに関係のない他のすべてのイベントへのアクセスは既定で有効になります。 CLI の使用して `plugin` で、コマンドライン ・ インタ フェースを有効または無効バッテリー イベント説明されたコマンド。

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   iOS （`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   (Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    参照: [Tizen Web アプリケーションのアプリケーション マニフェスト][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


# deviceready

コルドバが完全に読み込まれたときに発生します。

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 詳細

このイベントは、任意のアプリケーションに不可欠です。それ信号をコルドバのデバイス Api が読み込まれているにアクセスする準備が整いました。

2 つのコード ベースから成っているコルドバ: ネイティブと JavaScript。 ネイティブ コードを読み込み、カスタム読み込み画像が表示されます。 ただし、DOM 読み込まれる一度 java スクリプトの設定を読み込むだけ。 これは、対応するネイティブ コードは、前に可能性のあるコルドバ JavaScript 関数を呼び出すことができます、web アプリケーションを意味します。

`deviceready`コルドバが完全に読み込まれた後に発生します。 1 回のイベントが発生し、安全にすることができますコルドバ Api への呼び出し。 アプリケーションは、通常のイベント リスナーをアタッチ `document.addEventListener` HTML ドキュメント DOM が読み込まれる。

`deviceready`イベントの動作はやや異なります他人から。任意のイベント ハンドラーを登録後、 `deviceready` イベントが発生したそのすぐにコールされるコールバック関数。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
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

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
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

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
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


# オンライン

アプリケーションは、オンラインになるし、デバイスがインターネットに接続するときに発生します。

    document.addEventListener("online", yourCallbackFunction, false);
    

## 詳細

`online`以前接続されていないデバイスが、インターネットへのアプリケーション アクセスを許可するネットワーク接続を受信するときに発生します。 接続 API と同じ情報に依存しており、火災時の値 `connection.type` になります。`NONE`.

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Tizen
*   Windows 8

## 簡単な例

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS の癖

初回起動時には、最初の `online` (当てはまる場合) イベントが少なくとも火を前に第 2 `connection.type` は`UNKNOWN`.

## Windows Phone 7 の癖

エミュレーターで実行しているとき、 `connection.status` は常に知られているので、このイベントは*ない*火。

## Windows Phone 8 癖

エミュレーターと接続の種類のレポート `Cellular` は変化しません、イベントは*ない*火。


# オフライン

アプリケーションがオフラインになり、デバイスがインターネットに接続されていないときに発生します。

    document.addEventListener("offline", yourCallbackFunction, false);
    

## 詳細

`offline`アプリケーションはもはや、インターネットにアクセスできるように、以前接続されたデバイスは、ネットワーク接続が失われたときに発生します。 接続 API と同じ情報に依存しており、場合に適用されます、 `connection.type` から変更 `NONE` 以外の値にします。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Tizen
*   Windows 8

## 簡単な例

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
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
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS の癖

初回起動時 (当てはまる場合) の最初のオフライン イベントは火に 1 秒以上かかります。

## Windows Phone 7 の癖

エミュレーターで実行しているとき、 `connection.status` は常に知られている、このイベントは*ない*火。

## Windows Phone 8 癖

エミュレーターと接続の種類のレポート `Cellular` は変化しません、イベントは*ない*火。


# 戻るボタン

ユーザーが [戻る] ボタンを押したときに発生します。

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## 詳細

既定の [戻る] ボタンの動作をオーバーライドするイベント リスナーを登録、 `backbutton` を呼び出すことによって通常のイベント `document.addEventListener` を受信したら、 `deviceready` イベント。 [戻る] ボタンの動作をオーバーライドする他のメソッドを呼び出す必要はなくなったです。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
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


# batterycritical

バッテリーが重大レベルのしきい値に達したときに発生します。

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## 詳細

バッテリーの充電の割合がバッテリ切れのしきい値に達したときに発生します。値は、デバイス固有です。

`batterycritical`ハンドラーは 2 つのプロパティを格納しているオブジェクトに渡されます。

*   **レベル**： バッテリーの充電量 （0-100) の割合。*(数)*

*   **起こしたり**： デバイスが接続されてインチ*(ブール値)*かどうかを示すブール値

通常アプリケーションに使用する必要があります `window.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   iOS
*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Tizen

## 簡単な例

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>
    
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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterylow

バッテリは、低レベルのしきい値に達したときに発生します。

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## 詳細

バッテリーの充電の割合がバッテリ低下しきい値、デバイス固有の値に達したときに発生します。

`batterylow`ハンドラーは 2 つのプロパティを格納しているオブジェクトに渡されます。

*   **レベル**： バッテリーの充電量 （0-100) の割合。*(数)*

*   **起こしたり**： デバイスが接続されてインチ*(ブール値)*かどうかを示すブール値

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   iOS
*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Tizen

## 簡単な例

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
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
            window.addEventListener("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterystatus

バッテリ ステータスの変更があるときに発生します。

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## 詳細

バッテリーの充電の割合 1% 以上によって変更されたとき、またはデバイス接続している場合に発生します。

バッテリ状態ハンドラーは 2 つのプロパティを格納しているオブジェクトに渡されます。

*   **レベル**： バッテリーの充電量 （0-100) の割合。*(数)*

*   **起こしたり**： デバイスが接続されてインチ*(ブール値)*かどうかを示すブール値

通常アプリケーションに使用する必要があります `window.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   iOS
*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Windows Phone 7 と 8
*   Tizen

## Windows Phone 7 と 8 癖

Windows Phone 7 は、バッテリーのレベルを決定するネイティブ Api を提供しませんので、 `level` プロパティは使用できません。`isPlugged`パラメーター*が*サポートされています。

## 簡単な例

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# メニュー ボタン

ユーザーがメニュー ボタンを押したときに発生します。

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## 詳細

イベント ハンドラーを適用する既定のメニューのボタンの動作をオーバーライドします。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)

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


# ［ 検索 ］

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

*   ブラックベリー WebWorks (OS 5.0 およびより高い)

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

*   ブラックベリー WebWorks (OS 5.0 およびより高い)

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

*   ブラックベリー WebWorks (OS 5.0 およびより高い)

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

*   ブラックベリー WebWorks (OS 5.0 およびより高い)

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
