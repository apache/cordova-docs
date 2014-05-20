---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# プラットフォームのサポート情報

各モバイルプラットフォーム上で使用できる、開発ツールとデバイス系 API ( Device API ) を下記の表で示します ( 項目の最上部に記載した OS 名は、CLI 上で使用するスタブです )。

<!-- START HTML -->

<table class="compat" width="100%">

<thead>
    <tr>
        <th></td>
        <th><tt>amazon-fireos</tt></th>
        <th><tt>android</tt></th>
        <th><tt>blackberry10</tt></th>
        <th><tt>Firefox OS</tt></th>
        <th><tt>ios</tt></th>
        <th><tt>Ubuntu</tt></th>
        <th><tt>wp7</tt> (Windows<br/>Phone 7)</th>
        <th><tt>wp8</tt> (Windows<br/>Phone 8)</th>
        <th><tt>win8</tt><br/>(Windows 8)</th>
<!--        <th><tt>firefoxos</tt></th> -->
        <th><tt>tizen</tt></th>
    </tr>

</thead>

<tbody>
    <tr>
        <th><a href="guide_cli_index.md.html">cordova<br/>CLI</a></th>
        <td data-col="amazon-fireos" class="y">Mac, Windows, Linux</td>
        <td data-col="android"    class="y">Mac, Windows, Linux</td>
        <td data-col="blackberry10" class="y">Mac, Windows</td>
        <td data-col="firefoxos" class="y">Mac, Windows, Linux</td>
        <td data-col="ios"        class="y">Mac</td>
        <td data-col="ubuntu"        class="y">Ubuntu</td>
        <td data-col="winphone7"  class="y">Windows</td>
        <td data-col="winphone8"  class="y">Windows</td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="guide_hybrid_webviews_index.md.html">組み込み<br/>WebView</a></th>
        <td data-col="amazon-fireos" class="y"><a href="guide_platforms_amazonfireos_webview.md.html">( 詳細はこちら )</a></td>
        <td data-col="android"    class="y"><a href="guide_platforms_android_webview.md.html">( 詳細はこちら )</a></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"><a href="guide_platforms_ios_webview.md.html">( 詳細はこちら )</a></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="guide_hybrid_plugins_index.md.html">プラグイン<br/>インターフェイス</a></th>
         <td data-col="amazon-fireos" class="y"><a href="guide_guide_platforms_amazonfireos_plugin.md.html">( 詳細はこちら )</a></td>
        <td data-col="android"    class="y"><a href="guide_guide_platforms_android_plugin.md.html">( 詳細はこちら )</a></td>
        <td data-col="blackberry10" class="y"><a href="guide_guide_platforms_blackberry10_plugin.md.html">( 詳細はこちら )</a></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"><a href="guide_guide_platforms_ios_plugin.md.html">( 詳細はこちら )</a></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"><a href="guide_guide_platforms_wp8_plugin.md.html">( 詳細はこちら )</a></td>
        <td data-col="winphone8"  class="y"><a href="guide_guide_platforms_wp8_plugin.md.html">( 詳細はこちら )</a></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th></th>
        <th colspan="20">各プラットフォームの API サポート状況</th>
    </tr>

    <tr>
        <th><a href="cordova_accelerometer_accelerometer.md.html">加速度<br/>センサー</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_camera_camera.md.html">カメラ</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_media_capture_capture.md.html">キャプチャー</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_compass_compass.md.html">コンパス</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y">(3GS+)</td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_connection_connection.md.html">接続</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_contacts_contacts.md.html">連絡先</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_device_device.md.html">デバイス</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_events_events.md.html">イベント</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_file_file.md.html">ファイル</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_geolocation_geolocation.md.html">位置情報</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_globalization_globalization.md.html">国際対応</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_inappbrowser_inappbrowser.md.html">InAppBrowser</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="p">iframe を使用</td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_media_media.md.html">メディア</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_notification_notification.md.html">通知</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_splashscreen_splashscreen.md.html">スプラッシュ<br/>スクリーン</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_storage_storage.md.html">ストレージ</a></th>
        <td data-col="amazon-fireos" class="y"></td>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="firefoxos" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone7"  class="y">localStorage &amp; indexedDB</td>
        <td data-col="winphone8"  class="y">localStorage &amp; indexedDB</td>
        <td data-col="win8"       class="y">localStorage &amp; indexedDB</td>
        <td data-col="tizen"       class="y"></td>
    </tr>

</tbody>
</table>

<!-- END HTML -->
