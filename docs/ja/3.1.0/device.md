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


# デバイス

> `device`オブジェクトには、デバイスのハードウェアとソフトウェアについて説明します。

## プロパティ

*   device.model
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.name

## 変数のスコープ

以来、 `device` に割り当てられている、 `window` オブジェクトは、グローバル スコープでは暗黙的に。

    // These reference the same `device`
    var phoneModel = window.device.model;
    var phoneModel = device.model;
    

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.device
        $ cordova plugin ls
        [ 'org.apache.cordova.device' ]
        $ cordova plugin rm org.apache.cordova.device
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.Device" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Device">
            <param name="blackberry-package" value="org.apache.cordova.device.Device" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app" required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>read_device_identifying_information</rim:permit>
        </rim:permissions>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
            <Capability Name="ID_CAP_IDENTITY_DEVICE" />
            <Capability Name="ID_CAP_IDENTITY_USER" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

*   (Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    参照: [Tizen Web アプリケーションのアプリケーション マニフェスト][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

デバイスのモデル名を取得します。

    var string = device.name;
    

## 説明

`device.name`デバイスのモデルまたは製品の名前を返します。この値は、デバイスの製造元によって設定され、同じ製品のバージョン間で異なる可能性があります。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## Android の癖

*   生産コード名は[モデル名][1]の代わりに[製品名][2]を取得します。 たとえば、ネクサス 1 つを返します `Passion` 、Motorola のドロイドを返します`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#MODEL
 [2]: http://developer.android.com/reference/android/os/Build.html#PRODUCT

## Windows Phone 7 と 8 癖

*   製造元によって指定されたデバイスのモデルを返します。たとえば、三星フォーカスを返します`SGH-i917`.

## Tizen の癖

*   たとえば、ベンダーによって割り当てられているデバイスのモデルを返します`TIZEN`


# device.cordova

デバイスで実行されているコルドバのバージョンを取得します。

    var string = device.cordova;
    

## 説明

`device.cordova`デバイスで実行されているコルドバのバージョンを返します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    var name = device.cordova;
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


# device.platform

デバイスのオペレーティング システム名を取得します。

    var string = device.platform;
    

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## ブラックベリーの癖

デバイスは、プラットフォーム名ではなくデバイス プラットフォームのバージョン番号を返すことがあります。たとえば、Storm2 9550 を返しますよう`2.13.0.95`.

## Windows Phone 7 の癖

Windows Phone 7 デバイスとプラットフォームを報告します。`WinCE`.

## Windows Phone 8 癖

Windows Phone 8 デバイスとプラットフォームを報告します。`Win32NT`.


# device.uuid

デバイスのユニバーサル ・ ユニーク識別子 ([UUID][1]を取得します。).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## 説明

UUID を生成する方法の詳細は、デバイスの製造元によって決定され、デバイスのプラットフォームやモデルに固有です。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    //アンドロイド: ランダムな 64 ビットの整数 (を文字列として返します、再び ！）/デバイスの最初の起動時に生成される整数/////ブラックベリー: デバイスのピン番号を返します//これは 9 桁の一意な整数 (を文字列としても ！)////iPhone: (UIDevice クラスのドキュメントから言い換え）//識別複数のハードウェアから作成されたハッシュ値の文字列を返します。。
    //それはすべてのデバイスに対して一意であることが保証され、接続することはできません//ユーザー アカウント。
    //Windows Phone 7: デバイス + 現在のユーザーのハッシュを返します//ユーザーが定義されていない場合 guid が生成され、アプリがアンインストールされるまで保持されます//Tizen: デバイスの IMEI を返します （国際モバイル機器アイデンティティまたは IMEI は番号です//すべての GSM および UMTS の携帯電話に固有です。
    var deviceID = device.uuid;
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS の気まぐれ

`uuid`IOS で、デバイスに固有はありませんインストールごと、アプリケーションごとに異なります。 削除、アプリを再インストールした場合に変更とおそらくもとき、iOS をアップグレードまたはもアップグレードするアプリ (iOS の 5.1 で明らかに） バージョンごと。 `uuid`は信頼性の高い値ではありません。

## Windows Phone 7 と 8 癖

`uuid`のために Windows Phone 7 には、権限が必要です `ID_CAP_IDENTITY_DEVICE` 。 Microsoft はすぐにこのプロパティを廃止して可能性があります。 機能が利用できない場合、アプリケーションはデバイスへのアプリケーションのインストールの持続期間のために保持されている永続的な guid を生成します。


# device.version

オペレーティング システムのバージョンを取得します。

    var string = device.version;
    

## サポートされているプラットフォーム

*   アンドロイド 2.1 +
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    //アンドロイド： フローズン ヨーグルト OS は「2.2」を返します/エクレア OS は「2.1」、「2.0.1」、または「2.0」を返します//バージョンも返すことができます/レベル"2.1 update1"を更新////ブラックベリー: トーチ 9800 OS 6.0 を使用しては「6.0.0.600」を返します////iPhone: iOS 3.2 返します「3.2」////Windows Phone 7: ex 現在の OS のバージョン番号を返します。 on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
