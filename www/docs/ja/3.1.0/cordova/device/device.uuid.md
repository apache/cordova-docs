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

# device.uuid

<a href="device.html">デバイス</a>のユニバーサル ・ ユニーク識別子 ([UUID][1]を取得します。).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## 説明

UUID を生成する方法の詳細は、<a href="device.html">デバイス</a>の製造元によって決定され、<a href="device.html">デバイス</a>のプラットフォームやモデルに固有です。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    //アンドロイド: ランダムな 64 ビットの整数 (を文字列として返します、再び ！）/<a href="device.html">デバイス</a>の最初の起動時に生成される整数/////ブラックベリー: <a href="device.html">デバイス</a>のピン番号を返します//これは 9 桁の一意な整数 (を文字列としても ！)////iPhone: (UIDevice クラスのドキュメントから言い換え）//識別複数のハードウェアから作成されたハッシュ値の文字列を返します。。
    //それはすべての<a href="device.html">デバイス</a>に対して一意であることが保証され、<a href="../connection/connection.html">接続</a>することはできません//ユーザー アカウント。
    //Windows Phone 7: <a href="device.html">デバイス</a> + 現在のユーザーのハッシュを返します//ユーザーが定義されていない場合 guid が生成され、アプリがアンインストールされるまで保持されます//Tizen: <a href="device.html">デバイス</a>の IMEI を返します （国際モバイル機器アイデンティティまたは IMEI は番号です//すべての GSM および UMTS の携帯電話に固有です。
    var deviceID = device.uuid;
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + <a href="device.model.html">device.model</a>    + '<br />' +
                                'Device Cordova: '  + <a href="device.cordova.html">device.cordova</a>  + '<br />' +
                                'Device Platform: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + <a href="device.version.html">device.version</a>  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS の気まぐれ

`uuid`IOS で、<a href="device.html">デバイス</a>に固有はありませんインストールごと、アプリケーションごとに異なります。 削除、アプリを再インストールした場合に変更とおそらくもとき、iOS をアップグレードまたはもアップグレードするアプリ (iOS の 5.1 で明らかに） バージョンごと。 `uuid`は信頼性の高い値ではありません。

## Windows Phone 7 と 8 癖

`uuid`のために Windows Phone 7 には、権限が必要です `ID_CAP_IDENTITY_DEVICE` 。 Microsoft はすぐにこのプロパティを廃止して可能性があります。 機能が利用できない場合、アプリケーションは<a href="device.html">デバイス</a>へのアプリケーションのインストールの持続期間のために保持されている永続的な guid を生成します。