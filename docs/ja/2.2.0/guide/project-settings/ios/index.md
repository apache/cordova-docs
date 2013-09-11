<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

Project Settings for iOS
========================

**Cordova.plist 設定ファイル** は Cordova の多くの設定を管理します。これはアプリケーション全体の設定であり、 CDVViewController インスタンス毎の設定ではありません。

1. CDVViewController で使用出来る **プラグイン** のリスト (Plugins 辞書 - キーは JavaScript で servicename として使用されているもの、値はプラグインのための Objective-C のクラス (CDVPlugin のサブクラス))
2. Cordova が接続できるホスト (スキーマやパスなしで、ホスト名または IP アドレスのみ) の **ホワイトリスト** (ExternalHosts 配列に設定 - ワイルドカード使用可能)
3. **その他** 色々な設定 (既存のアプリを壊さないようにデフォルトは設定されています)

    a. **UIWebViewBounce (boolean, デフォルト YES)** - もし WebView をバウンスさせたくない場合は NO を設定します

    b. **TopActivityIndicator (string, デフォルト 'gray')** - ステータスバーにあるインジケーターの色を指定します。有効な値は "whiteLarge" と "white" と"gray" です

    c. **EnableLocation (boolean, デフォルト NO)** - YES に設定することで、 Geolocation プラグインをアプリ起動時から初期化します (位置情報がより正確になります)

    d. **EnableViewportScale (boolean, デフォルト NO)** - YES に設定することで、メタタグでの viewport のスケーリングを防ぎます

    e. **AutoHideSplashScreen (boolean, デフォルト YES)** - NO に設定した場合、 JavaScript API によっていつスプラッシュスクリーンが非表示になるかを管理します

    f. **ShowSplashScreenSpinner (boolean, デフォルト YES)** - NO に設定した場合、スプラッシュスクリーンのスピナーを非表示にします

    g. **MediaPlaybackRequiresUserAction (boolean, デフォルト NO)** - YES に設定することで、 HTML5 ビデオの自動再生を禁止します

    h. **AllowInlineMediaPlayback (boolean, デフォルト NO)** - YES に設定することで、インラインの HTML5 メディアの再生を許可します。また、 HTML 内の video 要素は webkit-playsinline 属性を含む必要があります

    i. **OpenAllWhitelistURLsInWebView (boolean, デフォルト NO)** - YES に設定することで、メインの WebView 内ですべてのホワイトリストの URL を開きます

    j. **BackupWebStorage (string, デフォルト 'cloud')** - 有効な値は 'none' と 'cloud' と 'local' です。 Set to 'cloud' と設定することで、 web storage data の iCloud でのバックアップを許可します。 'local' はローカルバックアップ (iTunes との同期によるバックアップ) のみ許可します。 'none' は web storage のいかなるバックアップも許可しません。

    k. **KeyboardDisplayRequiresUserAction (boolean, デフォルト YES)** - NO に設定することで、 JavaScript の focus() が呼び出されてフォーム要素がフォーカスされた時、キーボードが開くようにします

    l. **SuppressesIncrementalRendering (boolean, デフォルト NO)** - YES に設定することで、レンダリングの前にすべての新しい view コンテンツがロードされるのを待ちます
