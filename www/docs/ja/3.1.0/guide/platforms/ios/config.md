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

`config.xml`ファイルは、各アプリケーションと CordovaWebView のインスタンス全体に適用される、アプリの基本的な設定を制御します。 このセクションの詳細設定を iOS のビルドにのみ適用されます。 グローバル構成のオプションには、config.xml ファイル情報を参照してください。

*   `EnableViewportScale`(ブール値、既定値は `false` ): に設定されている `true` viewport メタ タグを使用して無効にするかユーザーのスケーリングの範囲を制限します。
    
        <preference name="EnableViewportScale" value="true"/>
        

*   `MediaPlaybackRequiresUserAction`(ブール値、既定値は `false` ): に設定されている `true` を HTML5 の動画を自動的に遊ぶことから防ぐために、 `autoplay` 属性。 呼び出すときに適用されません `play()` ビデオ オブジェクト。
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(ブール値、既定値は `false` ): に設定されている `true` ネイティブ コントロールではなくブラウザー指定のコントロールを使用して、画面のレイアウト内に*インライン*表示する HTML5 メディアの再生を許可します。 このために、追加、 `webkit-playsinline` 属性のいずれかに `<video>` の要素。
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`(文字列のいずれか `none` 、 `local` 、またはデフォルトの `cloud` ): に設定されている `cloud` web [ストレージ](../../../cordova/storage/storage.html) データを iCloud を介してバックアップを許可します。 設定されている `local` iTunes の同期を介してローカル バックアップのみを許可します。 設定されている `none` web [ストレージ](../../../cordova/storage/storage.html) バックアップを防ぐ。
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`(文字列、既定値は `gray` ): 重要なプロセッサの活動状況を示すステータス バーに小さな回転アイコンの外観をコントロールします。 有効な値は `whiteLarge` 、 `white` と`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `FadeSplashScreen`(ブール値、既定値は `true` ): に設定されている `false` をフェードイン、フェードアウトその表示状態が変更されたとき、スプラッシュ画面を防ぐために。
    
        <preference name="FadeSplashScreen" value="false"/>
        

*   `FadeSplashScreenDuration`(float、既定値は `2` ): スプラッシュ スクリーンの秒数のフェードを実行する効果を指定します。
    
        <preference name="FadeSplashScreenDuration" value="4"/>
        

*   `ShowSplashScreenSpinner`(ブール値、既定値は `true` ): に設定されている `false` 、スプラッシュ スクリーンのスピン ボタンを非表示にします。
    
        <preference name="ShowSplashScreenSpinner" value="false"/>
        

*   `KeyboardDisplayRequiresUserAction`(ブール値、既定値は `true` ): に設定されている `false` を呼び出すときに表示されるキーボードを許可する `focus()` フォーム入力に。
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(ブール値、既定値は `false` ): に設定されている `true` のすべてのコンテンツを受信するまで、画面にレンダリングする前に待機します。
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `KeyboardShrinksView`(ブール値、既定値は `false` ): に設定されている `true` 、キーボードが表示されたら、ビューポートを垂直方向に縮小デフォルト beavior をオーバーライドする、webview を縮小します。 これは、Android アプリのためのデフォルトの動作と一致します。
    
        <preference name="KeyboardShrinksView" value="true"/>
        

*   `GapBetweenPages`(float、既定値は `` ): ページ間のポイントのギャップのサイズ。
    
        < 設定名"GapBetweenPages"の値を = =「0」/>
        

*   `PageLength`(float、既定値は `` ): ページ フローの方向にポイント単位で指定する各ページのサイズ。 とき PaginationMode が右左からまたは左から右に、このプロパティは、各ページの幅を表します。 PaginationMode は、topToBottom または bottomToTop が、このプロパティの各ページの高さを表します。 既定値は 0、レイアウト ビューポートのサイズを使用して、ページの寸法を決定することを意味します。
    
        < 設定名「か」値を = =「0」/>
        

*   `PaginationBreakingMode`(文字列、既定値は `page` ): 有効な値は `page` と `column` 。列またはページ分割が発生する方法です。 このプロパティは、特定の CSS プロパティの列とページ分割に関するを表彰するか無視するかどうかを決定します。 このプロパティ設定すると `column` 、コンテンツはページ区切りの場所で列区切りに関連した CSS プロパティを尊重します。
    
        < 設定名"PaginationBreakingMode"の値を = ="page"/>
        

*   `PaginationMode`(文字列、既定値は `unpaginated` ): 有効な値は `unpaginated` 、 `leftToRight` 、 `topToBottom` 、 `bottomToTop` 、および `rightToLeft` 。 このプロパティは、web ビューのコンテンツは、時に、ビューの 1 つの画面を埋めるページに分割または 1 つの長いスクロール ビューとして表示されるかどうかを決定します。 場合は改ページ調整のフォームは、このプロパティに設定するとそのコンテンツを再配置するか、GapBetweenPages の値を使用する web ビューを引き起こすコンテンツの改ページ調整レイアウトを切り替えます。
    
        < 設定名"PaginationMode"の値を = =「改」/>