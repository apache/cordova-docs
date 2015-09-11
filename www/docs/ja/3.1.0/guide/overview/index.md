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

# 概要

コルドバは、オープン ソース モバイル開発フレームワークです。 HTML5、CSS3、JavaScript などの標準的な web 技術開発を使用するクロス プラットフォーム、各モバイル プラットフォームのネイティブ開発言語を回避することができます。 アプリケーション各プラットフォームを対象としたラッパー内で実行される各<a href="../../cordova/device/device.html">デバイス</a>のセンサー、データ、およびネットワークの状態をアクセスするための標準に準拠した API バインドに依存しています。

場合は、コルドバを使用します。

*   モバイル開発者と各プラットフォームの言語とツールを再実装しなくても 1 つ以上のプラットフォーム上でアプリケーションを拡張する設定します。

*   web 開発者と様々 なアプリケーションの配布用にパッケージ化されている web アプリケーションを配置するポータルを格納します。

*   モバイル開発者、 *WebView* (ブラウザー ウィンドウ) <a href="../../cordova/device/device.html">デバイス</a> レベルの Api にアクセスできるとネイティブ アプリケーションのコンポーネントを混在することに興味があるまたはネイティブと WebView コンポーネント間のプラグイン インターフェイスを開発する場合。

## 基本的なコンポーネント

Cordova アプリ共通に頼る `config.xml` <a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>をアプリケーションに関する情報を提供し、シフト方向に応答かどうかなど、そのしくみに影響を与えるパラメーターを指定します。 この<a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>は W3C の[Web アプリのパッケージ化][1]、または*ウィジェット*は、仕様に準拠しています。

 [1]: http://www.w3.org/TR/widgets/

アプリケーション自体が web ページとして実装されている、既定では、どのような CSS、JavaScript、画像、<a href="../../cordova/media/media.html">メディア</a> <a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>を参照、 *index.html*という名前またはその他のリソースを実行するために必要な。 アプリは、アプリ ストアに配布するネイティブ アプリケーションのラッパー内の*WebView*として実行します。 方法ネイティブ アプリをさまざまな<a href="../../cordova/device/device.html">デバイス</a>の機能と対話する web アプリは、それも参照する必要があります、 `cordova.js` <a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>は、API のバインディングを提供します。 <!-- XREF
(See the API Reference for an overview, and the Application
Development Guide for examples of how to use them.)
XREF -->

コルドバ有効 WebView その全体のユーザー インターフェイスを持つアプリケーションがあります。 ネイティブ アプリケーションのコンポーネント、WebView にまじって、大きな、ハイブリッド アプリケーション内のコンポーネントがあります。 コルドバは、これらのコンポーネントが互いに通信するための*プラグイン*インターフェイスを提供します。

## 開発パス

実行するアプリケーションを設定する最も簡単な方法は、 `cordova` とも呼ばれる、*<a href="../cli/index.html">コマンド ライン インターフェイス</a>*(CLI) コマンド ライン ユーティリティです。 （CLI をインストールの<a href="../cli/index.html">コマンド ライン インターフェイス</a>を参照してください)。ターゲットにするプラットフォームの設定に応じて、開発サイクルの漸進的により大きい共有用の CLI を頼ることができます。

*   最も基本的なシナリオでは、単に、新しいプロジェクトを作成が設定された既定の構成を変更すると、CLI を使用できます。

*   多くのモバイル プラットフォーム、また各 SDK 内のコンパイルに必要な追加のプロジェクト <a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>を設定、CLI を使用できます。 このため動作するように、各ターゲットのプラットフォーム SDK をインストールする必要があります。 （手順については<a href="../platforms/index.html">プラットフォームの<a href="../../index.html">ガイド</a></a>を参照）。次のプラットフォームのサポート表で示されているように、ターゲット プラットフォームに応じて、異なるオペレーティング システムで CLI を実行する必要があります。

*   プラットフォームをサポートするため、CLI 実行アプリケーションをコンパイルし、SDK ベースの<a href="../../cordova/device/device.html">デバイス</a> エミュレーターで実行できます。 <!-(を参照してくださいアプリケーション開発<a href="../../index.html">ガイド</a>詳細の) 外部参照外部参照--> 包括的なテストのため、またアプリケーション <a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>を生成し、<a href="../../cordova/device/device.html">デバイス</a>に直接インストールできます。

開発サイクルの任意の時点で特定のプラットフォーム SDK ツールは、オプションの豊富なセットを提供することがまた頼ることができます。 （設定については各プラットフォームの SDK ツール プラットフォーム <a href="../../index.html">ガイド</a>を参照してください)。SDK 環境は web ベース、およびネイティブのアプリケーション コンポーネントをミックスしたハイブリッド アプリを実装する場合に適しています。 <!-あなた--> (を参照してくださいハイブリッド アプリケーション <a href="../../index.html">ガイド</a>詳細情報のため) 外部参照外部参照でコマンド ライン ユーティリティを使用して最初のアプリを生成する可能性がありますまたは繰り返し SDK ツールに更新されたコードを供給するその後。 アプリケーションの構成<a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>は自分でもビルド可能性があります。 <!-- XREF
(See The config.xml File for details.)
XREF -->

<!-- XREF
To build projects on some platforms, you may need to apply digital signatures.
See Distributing Applications for information on how to upload your app to various store portals.
XREF -->

## プラットフォームのサポート

開発ツールとそれぞれのモバイルプラット フォーム <a href="../../cordova/device/device.html">デバイス</a>利用可能な Api のセットを次に示します。(列ヘッダーでは CLI の速記スタブが表示されます)。

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        <tt>アンドロイド</tt>
      </th>
      
      <th>
        <tt>ブラックベリー</tt>(6)
      </th>
      
      <th>
        <tt>blackberry10</tt>
      </th>
      
      <th>
        <tt>ios</tt>
      </th>
      
      <th>
        <tt>wp7</tt>(Windows<br />携帯電話 7)
      </th>
      
      <th>
        <tt>wp8</tt>(Windows<br />電話 8)
      </th>
      
      <th>
        <tt>win8</tt><br />(Windows 8)
      </th>
      
      <th>
        <tt>firefoxos</tt>
      </th>
      
      <th>
        <tt>tizen</tt>
      </th></tr> </thead> 
      
      <tr>
        <th>
          <a href="guide_cli_index.md.html">コルドバ<br />CLI</a>
        </th>
        
        <td data-col="android"    class="y">
          Mac、Windows、Linux
        </td>
        
        <td data-col="blackberry" class="n">
          Mac、Windows
        </td>
        
        <td data-col="blackberry10" class="y">
          Mac、Windows
        </td>
        
        <td data-col="ios"        class="y">
          Mac
        </td>
        
        <td data-col="winphone7"  class="y">
          Windows
        </td>
        
        <td data-col="winphone8"  class="y">
          Windows
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="guide_hybrid_webviews_index.md.html">埋め込み<br />WebView</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_webview.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_webview.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="winphone7"  class="n">
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
        
        <td data-col="android"    class="y">
          <a href="guide_guide_platforms_android_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="blackberry" class="y">
          <a href="guide_guide_platforms_blackberry_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="guide_guide_platforms_blackberry10_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_guide_platforms_ios_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="winphone7"  class="y">
          <a href="guide_guide_platforms_wp8_plugin.md.html">(詳細を参照)</a>
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
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
          <a href="cordova_accelerometer_accelerometer.md.html"><a href="../../cordova/accelerometer/accelerometer.html"><a href="../../cordova/accelerometer/acceleration/acceleration.html">加速</a>度センサー</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_camera_camera.md.html"><a href="../../cordova/camera/camera.html">カメラ</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_media_capture_capture.md.html"><a href="../../cordova/media/capture/capture.html">キャプチャ</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_compass_compass.md.html"><a href="../../cordova/compass/compass.html">コンパス</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
          (3 GS +)
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_connection_connection.md.html"><a href="../../cordova/connection/connection.html">接続</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_contacts_contacts.md.html"><a href="../../cordova/contacts/parameters/contactFields.html">連絡先</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_device_device.md.html"><a href="../../cordova/device/device.html">デバイス</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_events_events.md.html"><a href="../../cordova/events/events.html">イベント</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_file_file.md.html"><a href="../../cordova/file/fileobj/fileobj.html">ファイル</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          ない<a href="../../cordova/file/filetransfer/filetransfer.html"><a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>転送</a>
        </td>
        
        <td data-col="winphone8"  class="p">
          ない<a href="../../cordova/file/filetransfer/filetransfer.html"><a href="../../cordova/file/fileobj/fileobj.html">ファイル</a>転送</a>
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_geolocation_geolocation.md.html">地理<a href="../../cordova/geolocation/Position/position.html">位置</a>情報</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_globalization_globalization.md.html"><a href="../../cordova/globalization/globalization.html">グローバリゼーション</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_inappbrowser_inappbrowser.md.html"><a href="../../cordova/inappbrowser/inappbrowser.html">InAppBrowser</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_media_media.md.html"><a href="../../cordova/media/media.html">メディア</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_notification_notification.md.html"><a href="../../cordova/notification/notification.html">通知</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_splashscreen_splashscreen.md.html"><a href="../../cordova/splashscreen/splashscreen.html">スプラッシュ スクリーン</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
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
          <a href="cordova_storage_storage.md.html"><a href="../../cordova/storage/storage.html">ストレージ</a></a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> のみ
        </td>
        
        <td data-col="winphone8"  class="p">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> のみ
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr></table> 
      
      <!-- END HTML -->