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

[Npm][1] (サード パーティのプラグインを含む) すべての既存のプラグインを介して検索することができます。.

 [1]: https://www.npmjs.com/search?q=ecosystem%3Acordova

コアプラグイン コルドバの伝統的なセット次のとおりです。

*   [バッテリの状態][2]
    
    > デバイスのバッテリのステータスを監視します。

*   [カメラ][3]
    
    > デバイスのカメラを使用して写真をキャプチャします。

*   [コンソール][4]
    
    > Console.log() に追加機能を追加します。

*   [連絡先][5]
    
    > デバイスの連絡先データベースで動作します。

*   [デバイス][6]
    
    > デバイス固有の情報を収集します。

*   [デバイスの動き （加速度）][7]
    
    > デバイスのモーション センサーをタップします。

*   [デバイスの向き （コンパス）][8]
    
    > デバイスが指している方向を取得します。

*   [ダイアログ ボックス][9]
    
    > 視覚デバイス通知。

*   [ファイル ・ システム][10]
    
    > Java スクリプトの設定をネイティブのファイル システムにフックします。

*   [ファイルの転送][11]
    
    > Java スクリプトの設定をネイティブのファイル システムにフックします。

*   [地理位置情報][12]
    
    > アプリケーションの場所を認識させます。

*   [グローバリゼーション][13]
    
    > ロケールに固有のオブジェクトの表現を有効にします。

*   [InAppBrowser][14]
    
    > 別のアプリ内ブラウザー インスタンスで Url を起動します。

*   [メディア][15]
    
    > 記録し、オーディオ ファイルを再生します。

*   [メディアをキャプチャします。][16]
    
    > デバイスのメディア ・ キャプチャ ・ アプリケーションを使用してメディア ファイルをキャプチャします。

*   [ネットワーク情報 (接続)][17]
    
    > ネットワークの状態、および携帯電話のネットワーク情報をすばやく確認します。

*   [スプラッシュ スクリーン][18]
    
    > アプリケーションのスプラッシュ スクリーンを非表示。

*   [振動][19]
    
    > デバイスを振動する API です。

*   [ステータスバー][20]
    
    > 表示、非表示、ステータス バーの背景を構成するための API。

*   [ホワイト リスト][21]
    
    > ホワイト リスト ネットワーク要求するプラグインです。アプリケーションを持っているすべてのネットワーク要求をインストールする必要があります。

*   [従来のホワイト リスト][22]
    
    > うちリッピングされ、プラグインのホワイト リストを変更する前に、ホワイト リストの古いスタイルを使用するプラグインです。

 [2]: https://www.npmjs.com/package/cordova-plugin-battery-status
 [3]: https://www.npmjs.com/package/cordova-plugin-camera
 [4]: https://www.npmjs.com/package/cordova-plugin-console
 [5]: https://www.npmjs.com/package/cordova-plugin-contacts
 [6]: https://www.npmjs.com/package/cordova-plugin-device
 [7]: https://www.npmjs.com/package/cordova-plugin-device-motion
 [8]: https://www.npmjs.com/package/cordova-plugin-device-orientation
 [9]: https://www.npmjs.com/package/cordova-plugin-dialogs
 [10]: https://www.npmjs.com/package/cordova-plugin-file
 [11]: https://www.npmjs.com/package/cordova-plugin-file-transfer
 [12]: https://www.npmjs.com/package/cordova-plugin-geolocation
 [13]: https://www.npmjs.com/package/cordova-plugin-globalization
 [14]: https://www.npmjs.com/package/cordova-plugin-inappbrowser
 [15]: https://www.npmjs.com/package/cordova-plugin-media
 [16]: https://www.npmjs.com/package/cordova-plugin-media-capture
 [17]: https://www.npmjs.com/package/cordova-plugin-network-information
 [18]: https://www.npmjs.com/package/cordova-plugin-splashscreen
 [19]: https://www.npmjs.com/package/cordova-plugin-vibration
 [20]: https://www.npmjs.com/package/cordova-plugin-statusbar
 [21]: https://www.npmjs.com/package/cordova-plugin-whitelist
 [22]: https://www.npmjs.com/package/cordova-plugin-legacy-whitelist

これらのプラグインのドキュメントの翻訳を英語以外の言語はプラグイン github レポジトリに行くと、docs フォルダーで探して発見ことができます。