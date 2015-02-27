* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
    

* * *

# プラットフォームのサポート

開発ツールとそれぞれのモバイルプラット フォーム デバイス利用可能な Api のセットを次に示します。 Api はここに記載されてデバイスは追加の Api は[サード パーティのプラグイン][1]を介して利用可能なコア プラグインによって提供されます。 CLI の省略名を列ヘッダーに表示されます。

 [1]: http://plugins.cordova.io

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        <tt>アマゾン fireos</tt>
      </th>
      
      <th>
        <tt>アンドロイド</tt>
      </th>
      
      <th>
        <tt>blackberry10</tt>
      </th>
      
      <th>
        <tt>Firefox の OS</tt>
      </th>
      
      <th>
        <tt>ios</tt>
      </th>
      
      <th>
        <tt>Ubuntu</tt>
      </th>
      
      <th>
        <tt>wp8</tt><br />(Windows Phone 8)
      </th>
      
      <th>
        <tt>windows</tt><br />(8.0、8.1、<br />電話 8.1）
      </th>
      
      <th>
        <tt>tizen</tt>
      </th></tr> </thead> 
      
      <tr>
        <th>
          <a href="guide_cli_index.md.html">コルドバ<br />CLI</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          Mac、Windows、Linux
        </td>
        
        <td data-col="android"    class="y">
          Mac、Windows、Linux
        </td>
        
        <td data-col="blackberry10" class="y">
          Mac、Windows
        </td>
        
        <td data-col="firefoxos" class="y">
          Mac、Windows、Linux
        </td>
        
        <td data-col="ios"        class="y">
          Mac
        </td>
        
        <td data-col="ubuntu"        class="y">
          Ubuntu
        </td>
        
        <td data-col="winphone8"  class="y">
          Windows
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="guide_hybrid_webviews_index.md.html">埋め込み<br />WebView</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          <a href="guide_platforms_amazonfireos_webview.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_webview.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_webview.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="n">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="guide_hybrid_plugins_index.md.html">プラグイン<br />インターフェイス</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
          <a href="guide_platforms_amazonfireos_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="guide_platforms_blackberry10_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
          <a href="guide_platforms_wp8_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
        </th>
        
        <th colspan="20">
          プラットフォーム Api
        </th>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md">加速度センサー</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md">BatteryStatus</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
          * Windows Phone 8.1 のみ
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md">カメラ</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-media-capture/blob/master/doc/index.md">キャプチャ</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md">コンパス</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          (3 GS +)
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md">接続</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md">連絡先</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="p">
          部分的に
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-device/blob/master/doc/index.md">デバイス</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_events_events.md.html">イベント</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md">ファイル</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md">ファイルの転送</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
          * いない onprogress サポートも中止
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
          * いない onprogress サポートも中止
        </td>
        
        <td data-col="win8"       class="y">
          * いない onprogress サポートも中止
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md">地理位置情報</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md">グローバリゼーション</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-inappbrowser/blob/master/doc/index.md">InAppBrowser</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="p">
          iframe を使用してください。
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md">メディア</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md">通知</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md">スプラッシュ スクリーン</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-statusbar/blob/master/doc/index.md">ステータス バー</a>
        </th>
        
        <td data-col="amazon-fireos" class="n">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
          Windows Phone 8.1 のみ
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_storage_storage.md.html">ストレージ</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
          localStorage ＆ indexedDB
        </td>
        
        <td data-col="win8"       class="y">
          localStorage ＆ indexedDB
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md">振動</a>
        </th>
        
        <td data-col="amazon-fireos" class="y">
        </td>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="firefoxos" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="ubuntu"        class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
          * Windows Phone 8.1 のみ
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr></table> 
      
      <!-- END HTML -->