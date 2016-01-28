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

title: iOS 構成
---

# iOS 構成

`config.xml`ファイルは、各アプリケーションと CordovaWebView のインスタンス全体に適用される、アプリの基本的な設定を制御します。 このセクションの詳細設定を iOS のビルドにのみ適用されます。 グローバル構成オプションの詳細については、[config.xml ファイル][1] を参照してください。

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `EnableViewportScale`(ブール値、既定値は `false` ): に設定されている `true` が既定で有効になっているビューポート メタ タグを無効にするかユーザーがスケーリングの範囲を制限できるようにします。

        <preference name="EnableViewportScale" value="true"/>


    次のように、ビューポートのスケーリングを無効にしてフィットする HTML レンダリング WebView 内柔軟にコンテンツ。

        < メタ名 = 'ビューポート' コンテンツ =' 幅初期スケール デバイス幅を = = 1、ユーザー スケーラブル = no'/>


*   `MediaPlaybackAllowsAirPlay`(ブール値、デフォルト `true` ): に設定 `false` このビューで使用されている空気を再生しないようにします。 既定 UIWebView と WKWebView で利用可能です。

        <preference name="MediaPlaybackAllowsAirPlay" value="false"/>


*   `MediaPlaybackRequiresUserAction`(ブール値、デフォルト `false` ): に設定 `true` 自動的に遊んでから HTML5 ビデオまたはオーディオを防ぐために、 `autoplay` 属性または JavaScript を使用。

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>


*   `AllowInlineMediaPlayback`(ブール値、デフォルト `false` ): に設定 `true` ネイティブ コントロールではなく、ブラウザーが指定したコントロールを使用して、画面レイアウト内で*インライン*表示する HTML5 メディアの再生を許可します。 動作するようにこれを追加、 `webkit-playsinline` 属性のいずれかに `<video>` 要素。

        <preference name="AllowInlineMediaPlayback" value="true"/>


*   `BackupWebStorage`(文字列、どちらか `none` 、 `local` 、またはデフォルト `cloud` ): に設定 `cloud` web [ストレージ](../../../cordova/storage/storage.html) データを iCloud 経由でのバックアップを許可します。 設定 `local` iTunes 同期を介してローカル バックアップのみを許可します。 設定 `none` web [ストレージ](../../../cordova/storage/storage.html) バックアップを防止。

        <preference name="BackupWebStorage" value="local"/>


*   `TopActivityIndicator`(文字列、既定値は `gray` ): 重要なプロセッサの活動状況を示すステータス バーに回転する小さいアイコンの外観をコントロールします。 有効な値は、 `whiteLarge` 、 `white` と`gray`.

        <preference name="TopActivityIndicator" value="white"/>


*   `KeyboardDisplayRequiresUserAction`(ブール値、デフォルト `true` ): に設定 `false` を呼び出すときに表示するキーボードを許可する `focus()` フォームの入力。

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>


*   `SuppressesIncrementalRendering`(ブール値、デフォルト `false` ): に設定されて `true` それは、画面にレンダリングされる前にすべてのコンテンツを受信するまで待機します。

        <preference name="SuppressesIncrementalRendering" value="true"/>


*   `GapBetweenPages`(フロート、デフォルト `` ): ページ間のポイントで、ギャップの大きさ。

        <preference name="GapBetweenPages" value="0"/>


*   `PageLength`(フロート、デフォルト `` ): ページ フロー方向のポイントで、各ページのサイズ。 とき PaginationMode が右左からまたは左から右に、このプロパティは、各ページの幅を表します。 PaginationMode が topToBottom または bottomToTop の場合、このプロパティは各ページの高さを表します。 既定値は 0、つまり、レイアウト ページのサイズを決定するビューポートのサイズを使用します。

        <preference name="PageLength" value="0"/>


*   `PaginationBreakingMode`(文字列、既定値は `page` ): 有効な値は、 `page` と `column` 。列またはページ分割が発生する方法です。 このプロパティは、特定の CSS プロパティ列とページ分割に関するを表彰するか無視するかを決定します。 このプロパティに設定するとき `column` 、コンテンツが改ページの場所の柱破壊に関連する CSS プロパティを尊重します。

        <preference name="PaginationBreakingMode" value="page"/>


*   `PaginationMode`(文字列、既定値は `unpaginated` ): 有効な値は、 `unpaginated` 、 `leftToRight` 、 `topToBottom` 、 `bottomToTop` 、および `rightToLeft` 。 このプロパティは、web ビューのコンテンツは、時に、ビューの 1 つの画面を入力するページに分割または 1 つの長いスクロール ビューとして表示かどうかを決定します。 場合は改ページされたフォームは、このプロパティを設定は、コンテンツは、そのコンテンツを再配置する PageLength と GapBetweenPages の値を使用して web 表示の原因のページ レイアウトを切り替えます。

        <preference name="PaginationMode" value="unpaginated"/>


*   `UIWebViewDecelerationSpeed`(文字列、既定値は `normal` ): 有効な値は、 `normal` 、 `fast` 。 このプロパティは、運動量のスクローリング減速速度を制御します。 `normal`ほとんどのネイティブ アプリケーションのデフォルトの速度と `fast` 既定値は、移動式のサファリ。

        <preference name="UIWebViewDecelerationSpeed" value="fast" />


*   `ErrorUrl`(文字列、既定では設定されていない): 場合設定、アプリケーションのエラー時に参照されるローカル ページが表示されます。

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `OverrideUserAgent`(文字列、既定では設定されていない): 設定すると、値は webview の古い UserAgent を交換します。 リモート ページを要求するときに、アプリ ・ ブラウザーから要求を識別すると便利です。 注意して使用、これは web サーバーと compitiable 問題を原因します。 ほとんどの場合、AppendUserAgent を代わりに使用します。

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(文字列、既定では設定されていない): 設定、webview の古いユーザ エージェントの末尾に値が追加されます。 OverrideUserAgent を使用する場合は、この値が無視されます。

        <preference name="AppendUserAgent" value="My Browser" />
