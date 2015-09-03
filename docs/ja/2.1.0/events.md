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


Events
======

> Cordova ライフサイクルのイベントです。

Event Types
-----------

- deviceready
- pause
- resume
- online
- offline
- backbutton
- batterycritical
- batterylow
- batterystatus
- menubutton
- searchbutton
- startcallbutton
- endcallbutton
- volumedownbutton
- volumeupbutton

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Battery" value="org.apache.cordova.BatteryListener" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.BROADCAST_STICKY" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>SYSTEM_SERVICE</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Battery" value="org.apache.cordova.battery.Battery" />

#### www/config.xml

    <feature id="blackberry.app"          required="true" version="1.0.0.0" />
    <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
    <feature id="blackberry.system.event" required="true" version="1.0.0.0" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Battery</key>
        <string>CDVBattery</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

    パーミッションの設定は必要ありません。

### Tizen

#### config.xml

    <feature name="http://tizen.org/api/systeminfo" required="true"/>

参照: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)



deviceready
===========

このイベントは Cordova が完全にロードされたときに呼び出されます。

    document.addEventListener("deviceready", yourCallbackFunction, false);

詳細
-------

このイベントはすべての Cordova アプリケーションで使用される重要なイベントです。

Cordova はネイティブと JavaScript の2つのコードで形成されます。ネイティブコードがロードされている間は、カスタムのロード画面が表示されます。しかし、 JavaScript は DOM が読み込まれるまではロードされません。そのため、 Cordova の JavaScript 関数群がロードされる前に、それらの関数が呼ばれる可能性があります。

Cordova の `deviceready` イベントは、 Cordova が完全にロードした後で呼び出されます。安全に Cordova 関数を呼び出すためには、デバイスが完全に呼び出されたことを確認してください。

通常は、 HTML の DOM が読み込まれた後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7
- Bada 1.2 & 2.x
- Tizen

使用例
-------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Cordova API を安全に使用できます
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // Cordova API を安全に使用できます
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



pause
===========

このイベントは Cordova アプリケーションがバックグラウンド動作になったときに呼び出されます。

    document.addEventListener("pause", yourCallbackFunction, false);

詳細
-------

Cordova はネイティブと JavaScript の2つのコードで形成されます。 ネイティブコードがアプリをバックグラウンド動作にしているとき、 pause イベントが呼び出されます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7

使用例
-------------

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // pause イベントに関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Pause 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
        }

        // pause イベントに関する操作を記述
        //
        function onPause() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS に関する注意点
--------------------------
pause ハンドラー内では、 Objective-C を利用するあらゆる呼び出し、または alerts のようなインタラクティブな呼び出しが一切動作しません。これは、 console.log やプラグインまたは Cordova API からのすべての呼び出しが呼び出せないことを意味します。これらは、アプリを再開されたときに実行されます (次の run-loop で実行されます) 。

- __resign__ イベント

    この iOS 固有のイベントは pause イベントの一部として使用でき、アプリ実行中にオン／オフボタンが押されたことを検知するのに使われます。 もしアプリ (とデバイス) がマルチタスク可能なら、このイベントは iOS 5 でのみ続く **pause** と対になります (事実上マルチタスク可能な iOS 5 のすべてのロックされたアプリはバックグラウンド操作となります) 。

    iOS 5 で、もしデバイスがロック状態でもまだアプリを動かしたいのなら、アプリに対してマルチタスク機能を無効 (UIApplicationExitsOnSuspend - YES) にする必要があります。これは、 iOS 4 の場合と異なります。 iOS 4 の場合は、デバイスロック状態でアプリを動作させることと、マルチタスク機能の設定は関係ありません。



resume
===========

このイベントは Cordova アプリケーションがバックグラウンドから復帰したときに呼び出されます。

    document.addEventListener("resume", yourCallbackFunction, false);

詳細
-------

Cordova はネイティブと JavaScript の2つのコードで形成されます。ネイティブコードがアプリをバックグラウンドから復帰させるとき、 resume イベントが呼び出されます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7

使用例
-------------

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // resume イベントに関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Resume 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            document.addEventListener("resume", onResume, false);
        }

        // resume イベントに関する操作を記述
        //
        function onResume() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS に関する注意点
--------------------------
アプリが復帰したとき、 **pause** イベントハンドラー中の console.log への呼び出しが走ります。 **pause** イベントの iOS に関する注意点のセクションに詳細を記載しています。

- __active__ イベント

    この iOS 固有のイベントは **resume** イベントの一部として使用でき、アプリ実行中にオン／オフボタンが押されたことを検知するのに使われます。もしアプリ (とデバイス) がマルチタスク可能なら、このイベントは iOS 5 でのみ続く **resume** と対になります (事実上マルチタスク可能な iOS 5 のすべてのロックされたアプリはバックグラウンド操作となります) 。

    iOS 5 で、もしデバイスがロック状態でもまだアプリを動かしたいのなら、アプリに対してマルチタスク機能を無効 (UIApplicationExitsOnSuspend - YES) にする必要があります。これは、 iOS 4 の場合と異なります。 iOS 4 の場合は、デバイスロック状態でアプリを動作させることと、マルチタスク機能の設定は関係ありません。



online
===========

このイベントは Cordova アプリケーションがオンライン (インターネットに接続) になったときに呼び出されます。

    document.addEventListener("online", yourCallbackFunction, false);

詳細
-------

アプリのネットワーク接続がオンラインになったとき、 online イベントが呼び出されます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7
- Tizen

使用例
-------------

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // online イベントに関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Online 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            document.addEventListener("online", onOnline, false);
        }

        // online イベントに関する操作を記述
        //
        function onOnline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS に関する注意点
--------------------------
初回起動時、最初の online イベントは少なくとも起動に1秒かかります。

Windows Phone 7 に関する注意点
--------------------------
エミュレータで起動している場合、デバイスの connection.status は常に unknown (不明) であるため、このイベントは呼び出されません。



offline
===========

このイベントは Cordova アプリケーションがオフライン (インターネットに接続) になったときに呼び出されます。

    document.addEventListener("online", yourCallbackFunction, false);

詳細
-------

アプリのネットワーク接続がオフラインになったとき、 offline イベントが呼び出されます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7
- Tizen

使用例
-------------

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // offlineイベントに関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Offline 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            document.addEventListener("offline", onOffline, false);
        }

        // offline イベントに関する操作を記述
        //
        function onOffline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS に関する注意点
--------------------------
初回起動時、最初の offline イベントは少なくとも起動に1秒かかります。

Windows Phone 7 に関する注意点
--------------------------
エミュレータで起動している場合、デバイスの connection.status は常に unknown (不明) であるため、このイベントは呼び出されません。



backbutton
===========

このイベントはユーザーが戻るボタンを押したときに呼び出されます。

    document.addEventListener("backbutton", yourCallbackFunction, false);

詳細
-------

もしデフォルトの戻るボタンの挙動を上書きしたい場合は、 'backbutton' イベントにイベントリスナーを登録することができます。戻るボタンの挙動を上書きするために、他のメソッドを呼び出す必要はありません。ただ 'backbutton' イベントリスナーを登録するだけで大丈夫です。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- Windows Phone 7 (Mango)

使用例
-------------

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // メニューボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Back Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordovaのロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("backbutton", onBackKeyDown, false);
        }

        // メニューボタン関する操作を記述
        //
        function onBackKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



batterycritical
===========

このイベントはバッテリー残量が危険な閾値に達したことを Cordova アプリケーションが検知したときに呼び出されます。

    window.addEventListener("batterycritical", yourCallbackFunction, false);

詳細
-------

このイベントはバッテリー残量が危険なパーセンテージの閾値に達したことを Cordova アプリケーションが検知したときに呼び出されます。この値はデバイス固有です。

batterycritical ハンドラーは以下の2つのプロパティーを含むオブジェクトを伴って呼び出されます:

- __level:__ バッテリーのパーセンテージ (0-100) _(Number)_
- __isPlugged:__ デバイスが充電器に接続されているかどうかを表します _(Boolean)_

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `window.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 以上)
- Tizen

使用例
-------------

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // バッテリー関する操作を記述
        alert("バッテリー残量が危険です " + info.level + "%\nすぐに充電してください。");
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Battery Criticaly 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }

        // バッテリー関する操作を記述
        //
        function onBatteryCritical(info) {
            alert("バッテリー残量が危険です " + info.level + "%\nすぐに充電してください。");
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



batterylow
===========

このイベントはバッテリー残量が低下したことを Cordova アプリケーションが検知したときに呼び出されます。

    window.addEventListener("batterylow", yourCallbackFunction, false);

詳細
-------

このイベントはバッテリー残量のパーセンテージが低下の閾値に達したことを Cordova アプリケーションが検知したときに呼び出されます。この値はデバイス固有です。

batterylow ハンドラーは以下の2つのプロパティーを含むオブジェクトを伴って呼び出されます:

- __level:__ バッテリーのパーセンテージ (0-100) _(Number)_
- __isPlugged:__ デバイスが充電器に接続されているかどうかを表します _(Boolean)_

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 以上)
- Tizen

使用例
-------------

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // バッテリー関する操作を記述
        alert("バッテリー残量が低下しています " + info.level + "%");
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            window.addEventListener("batterylow", onBatteryLow, false);
        }

        // バッテリー関する操作を記述
        //
        function onBatteryLow(info) {
            alert("バッテリー残量が低下しています " + info.level + "%");
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



batterystatus
===========

このイベントはバッテリーのステータスが変化したことを Cordova アプリケーションが検知したときに呼び出されます。

    window.addEventListener("batterystatus", yourCallbackFunction, false);

詳細
-------

このイベントはバッテリー残量のパーセンテージが1パーセントでも変化したことを Cordova アプリケーションが検知したときに呼び出されます。 また、デバイスが充電器に接続されたとき、接続が解除されたときも呼び出されます。

battery status ハンドラーは以下の2つのプロパティーを含むオブジェクトを伴って呼び出されます:

- __level:__ バッテリーのパーセンテージ (0-100) _(Number)_
- __isPlugged:__ デバイスが充電器に接続されているかどうかを表します _(Boolean)_

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `window.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 以上)
- Windows Phone 7 (Mango)
- Tizen

Windows Phone 7 に関する注意点
----------------------

Windows Phone 7 はバッテリー残量を取得するネイティブの API を提供していないため、
level プロパティーは利用できません。 `isPlugged` パラメーターはサポートされています。

使用例
-------------

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        // バッテリーに関する操作を記述
        console.log("残量: " + info.level + " 充電器に接続: " + info.isPlugged);
    }

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }

        // バッテリーに関する操作を記述
        //
        function onBatteryStatus(info) {
            console.log("残量: " + info.level + " 充電器に接続: " + info.isPlugged);
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



menubutton
===========

このイベントはユーザーがメニューボタンを押したときに呼び出されます。

    document.addEventListener("menubutton", yourCallbackFunction, false);

詳細
-------

もしデフォルトのメニューボタンの挙動を上書きしたい場合は、 'menubutton' イベントにイベントリスナーを登録することができます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)

使用例
-------------

    document.addEventListener("menubutton", onMenuKeyDown, false);

    function onMenuKeyDown() {
        // メニューボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Menu Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }

        // メニューボタン関する操作を記述
        //
        function onMenuKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



searchbutton
===========

このイベントはユーザーが検索ボタンを押したときに呼び出されます。

    document.addEventListener("searchbutton", yourCallbackFunction, false);

詳細
-------

もし Android にデフォルトの検索ボタンの挙動を上書きしたい場合は、 'searchbutton' イベントにイベントリスナーを登録することができます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android

使用例
-------------

    document.addEventListener("searchbutton", onSearchKeyDown, false);

    function onSearchKeyDown() {
        // 検索ボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Search Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }

        // 検索ボタン関する操作を記述
        //
        function onSearchKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



startcallbutton
===========

このイベントはユーザーがスタートコールボタンを押したときに呼び出されます。

    document.addEventListener("startcallbutton", yourCallbackFunction, false);

詳細
-------

もしデフォルトの検索ボタンの挙動を上書きしたい場合は、 'startcallbutton' イベントにイベントリスナーを登録することができます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- BlackBerry WebWorks (OS 5.0 以上)

使用例
-------------

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);

    function onStartCallKeyDown() {
        // スタートコールボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Start Call Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }

        // スタートコールボタン関する操作を記述
        //
        function onStartCallKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



endcallbutton
===========

このイベントはユーザーがエンドコールボタンを押したときに呼び出されます。

    document.addEventListener("endcallbutton", yourCallbackFunction, false);

詳細
-------

もしデフォルトのエンドコールボタンの挙動を上書きしたい場合は、 'endcallbutton' イベントにイベントリスナーを登録することができます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- BlackBerry WebWorks (OS 5.0 以上)

使用例
-------------

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);

    function onEndCallKeyDown() {
        // エンドコールボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova End Call Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }

        // エンドコールボタン関する操作を記述
        //
        function onEndCallKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



volumedownbutton
===========

このイベントはユーザーがボリュームダウンボタンを押したときに呼び出されます。

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);

詳細
-------

もしデフォルトのボリュームダウンボタンの挙動を上書きしたい場合は、 'volumedownbutton' イベントにイベントリスナーを登録することができます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- BlackBerry WebWorks (OS 5.0 以上)

使用例
-------------

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);

    function onVolumeDownKeyDown() {
        // ボリュームダウンボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Volume Down Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }

        // ボリュームダウンボタン関する操作を記述
        //
        function onVolumeDownKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



volumeupbutton
===========

このイベントはユーザーがボリュームアップボタンを押したときに呼び出されます。

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);

詳細
-------

もしデフォルトのボリュームアップボタンの挙動を上書きしたい場合は、 'volumeupbutton' イベントにイベントリスナーを登録することができます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- BlackBerry WebWorks (OS 5.0 以上)

使用例
-------------

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);

    function onVolumeUpKeyDown() {
        // ボリュームアップボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Volume Up Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.1.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }

        // ボリュームアップボタン関する操作を記述
        //
        function onVolumeUpKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

