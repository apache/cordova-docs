---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# iOS 構成

`config.xml`の設定ファイルはコルドバのさまざまな設定を制御します。 これはアプリケーションにまたがり、CDVViewController インスタンスごとに設定されていません。 `config.xml`にあるファイルを `<project folder>/<appname>` ディレクトリ。

## `< 優先順位 >`

さまざまな設定 (として `<preference>` タグ) 既存のアプリケーションを壊さずに既定。利用可能な設定は次のとおりです。

*   `DisallowOverscroll`(ブール値、既定値は `false` ): に設定されている `true` ラバー バンドを WebView をしたくない場合。

*   `TopActivityIndicator`(文字列、既定値は `gray` ): これはこま throbber/バッテリのステータス バーで、有効な値は `whiteLarge` 、 `white` と`gray`.

*   `EnableLocation`(ブール値、既定値は `false` ): に設定されている `true` （ので、あなたの場所に修正プログラムをより正確にすることができます） 起動時に地理位置情報プラグインを初期化するために、**非推奨**: に設定してください、 `onload` の属性、 `Geolocation` プラグインを `true` 代わりに。

*   `EnableViewportScale`(ブール値、既定値は `false` ): に設定されている `true` をメタ タグによってスケーリング ビューポートを防ぐために。

*   `AutoHideSplashScreen`(ブール値、既定値は `true` ): に設定されている `false` スプラッシュ ・ スクリーンは、JavaScript API を通じて隠されたときを制御します。

*   `FadeSplashScreen`(ブール値、既定値は `true` ): に設定されている `false` をフェードインとフェード アウトを示すまたはそれを隠すときにスプラッシュ画面を防ぐために。

*   `FadeSplashScreenDuration`(float, デフォルトは 2): スプラッシュ画面フェード継続時間 (秒単位)。

*   `ShowSplashScreenSpinner`(ブール値、既定値は `true` ): に設定されている `false` 、スプラッシュ スクリーンのスピン ボタンを非表示にします。

*   `MediaPlaybackRequiresUserAction`(ブール値、既定値は `false` ): autoplayed HTML5 ビデオを許可しない場合は true に設定します。

*   `AllowInlineMediaPlayback`(ブール値、既定値は `false` ): インライン HTML5 メディアの再生を許可する場合は true に設定すると、また、HTML ドキュメント内のビデオの要素も含める必要があります webkit playsinline 属性。

*   `BackupWebStorage`(文字列、既定値は `cloud` ): 有効な値は `none` 、 `cloud` と `local` 。 設定されている `cloud` 、web ストレージ データを iCloud にバックアップを設定できるように `local` のみローカル バックアップ (iTunes の同期) を許可します。 設定されている `none` のウェブ ストレージのバックアップを許可しないようにします。

*   `KeyboardDisplayRequiresUserAction`(ブール値、既定値は `true` ): フォーム要素 JavaScript focus() を呼び出すを介してのフォーカスを得るときに、キーボードを開くには false に設定します。

*   `SuppressesIncrementalRendering`(ブール値、既定値は `false` ): すべての新しいコンテンツを表示するまで待機する場合は true に設定するとそれがレンダリングされる前に受けた。

*   `HideKeyboardFormAccessoryBar`(ブール値、既定値は `false` ): は、キーボードの上に追加のツールバーを非表示にする場合は true に設定されています。 このツールバーは、**前のページ**、**次**、および**完了**ボタンを備えています。

*   `KeyboardShrinksView`(ブール値、既定値は `false` ): に設定されている `true` 、キーボードが上がるとき、WebView を縮小します。 ビューポートを縮小し、ページのスクロール可能なのではなく、WebView を縮小します。 これは彼らの WebView の下部を基準にして要素を配置するアプリケーションに適用されます。 これは、Android 上でデフォルトの振る舞いとウェブページではなくアプリを構築する際に多くの意味を作る。