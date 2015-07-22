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

title: プラグイン Api
---

# プラグイン Api

コルドバの Api は、最小限のセットが付属し、プロジェクトのプラグインを必要とするどのような余分な Api を追加します。

[プラグイン レジストリ][1]を使用して既存のすべてのプラグインを検索することができます。.

 [1]: http://plugins.cordova.io/

コルドバ プラグインの伝統的なセット次のとおりです。

*   [バッテリの状態][2]
    
    > デバイスのバッテリのステータスを監視します。

*   [カメラ][3]
    
    > デバイスのカメラを使用して写真をキャプチャします。

*   [連絡先][4]
    
    > デバイスの連絡先データベースで動作します。

*   [デバイス][5]
    
    > デバイス固有の情報を収集します。

*   [デバイスの動き （加速度）][6]
    
    > デバイスのモーション センサーをタップします。

*   [デバイスの向き （コンパス）][7]
    
    > デバイスが指している方向を取得します。

*   [ダイアログ ボックス][8]
    
    > 視覚デバイス通知。

*   [ファイル ・ システム][9]
    
    > Java スクリプトの設定をネイティブのファイル システムにフックします。

*   [ファイルの転送][10]
    
    > Java スクリプトの設定をネイティブのファイル システムにフックします。

*   [地理位置情報][11]
    
    > アプリケーションの場所を認識させます。

*   [グローバリゼーション][12]
    
    > ロケールに固有のオブジェクトの表現を有効にします。

*   [InAppBrowser][13]
    
    > 別のアプリ内ブラウザー インスタンスで Url を起動します。

*   [メディア][14]
    
    > 記録し、オーディオ ファイルを再生します。

*   [メディアをキャプチャします。][15]
    
    > デバイスのメディア ・ キャプチャ ・ アプリケーションを使用してメディア ファイルをキャプチャします。

*   [ネットワーク情報 (接続)][16]
    
    > ネットワークの状態、および携帯電話のネットワーク情報をすばやく確認します。

*   [スプラッシュ スクリーン][17]
    
    > アプリケーションのスプラッシュ スクリーンを非表示。

*   [振動][18]
    
    > デバイスを振動する API です。

 [2]: https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md
 [3]: https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md
 [4]: https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md
 [5]: https://github.com/apache/cordova-plugin-device/blob/master/doc/index.md
 [6]: https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md
 [7]: https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md
 [8]: https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md
 [9]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [10]: https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md
 [11]: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
 [12]: https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md
 [13]: https://github.com/apache/cordova-plugin-inappbrowser/blob/master/doc/index.md
 [14]: https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md
 [15]: https://github.com/apache/cordova-plugin-media-capture/blob/master/doc/index.md
 [16]: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md
 [17]: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md
 [18]: https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md

これらのプラグインのドキュメントの翻訳を英語以外の言語は、コルドバのドキュメントの古いバージョンを見て発見ことができます。非常に右上のこのサイトでバージョンを切り替えるには、ドロップ ダウン メニューを使用します。
