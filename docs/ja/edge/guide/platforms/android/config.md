---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android の構成

`config.xml`ファイルは、コルドバのさまざまな設定を制御します。これらは、アプリケーション全体で、CordovaWebView のインスタンスごとに適用されます。

## `< 優先順位 >`

その他の環境設定 (として `<preference>` タグ) 既存のアプリケーションを壊さずに既定します。利用可能な設定は次のとおりです。

*   `useBrowserHistory`(ブール値、既定値は `true` ): に設定されている `false` 歴史修正前の人造人間 3.x で現在のハッシュ エラーを回避するために使用された歴史 shim を使用する場合。 （注： この設定は 2013 年 4 月で廃止）

*   `loadingDialog`: アプリの読み込み時にネイティブの読み込み] ダイアログを表示します。値の形式は、*タイトル、メッセージです。*

*   `loadingPageDialog`: サブ ・ ページの読み込み時のネイティブの読み込み] ダイアログを表示します。値の形式は、*タイトル、メッセージです。*

*   `errorUrl`: アプリケーションのエラー ページを設定します。人造人間プロジェクトである必要があります。`file://android_asset/www/`

*   `backgroundColor`: アプリケーションの背景色を設定します。 最初のバイトを表すアルファ値、および標準的な RGB 値を持つ次の 3 バイト、4 バイトの 16 進値をサポートします。 たとえば、 `0x00000000` は黒です。

*   `loadUrlTimeoutValue`： コルドバは、アプリケーションでタイムアウト エラーをスローする前に待つ必要がありますどのくらいの時間。

*   `keepRunning`(ブール値、既定値は `true` ): コルドバまま、バック グラウンドで実行されているかどうかを決定します。

*   `splashscreen`: からの拡張子を除いたファイル名、 `res/drawable` ディレクトリ。 複数の資産がある場合彼らはすべて、それぞれのディレクトリにこの共通名を共有する必要があります。

*   `disallowOverscroll`(ブール値、既定値は `false` ): に設定されている `true` 、webview の端を超えてスクロール時、グローを無効にします。

## `< プラグイン >`

アンドロイドの使用をサポートする `<feature>` へのアナログとして `<plugin>` の要素。