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

# ブラックベリー 10 構成

`config.xml`ファイルは、コルドバのさまざまな設定を制御します。 これらのアプリケーションにわたって適用されます。 `config.xml`ファイルがあるに `<project folder>/<www>` ディレクトリ。

## `< 優先順位 >`

さまざまな設定 (として `<preference>` タグ) 既存のアプリケーションを壊さずに既定。利用可能な設定は次のとおりです。

*   `autoHideSplashScreen`: ( `true` または `false` ): に設定されている `false` スプラッシュ ・ スクリーンは、JavaScript API を通じて隠されたときを制御します。 この設定の既定値は true です。

*   `backgroundColor`: アプリの背景色を指定します。値は 8 桁の 16 進数を使用して ARGB ピクセル フォーマットでカラー値を指定する必要があります。

*   `childBrowser`: 子ブラウザー ウィンドウを無効にします。 既定では、コンテンツを新しいウィンドウまたはタブでリソースを開こうとするとき （window.open() を使用するかを指定して `_blank` アンカーのターゲットとして)、WebWorks アプリのリソースを表示するセカンダリ ブラウザー ウィンドウが開きます。 この機能は既定で有効です。 値を指定する必要があります `disable` を発生してから上記の行為を防ぐために。

*   `hideKeyboardFormAccessoryBar`: ( `enable` または `disable` )、HTML フォームにフォームのキーボードのアクセサリー バーを無効にします。 キーボード フォーム アクセサリー バーは、ユーザーがフォーム内を移動することができますボタン (前、次、および送信) の行です。 既定では、WebWorks アプリの HTML フォームが含まれる場合、 `<input>` 要素がフォーカスを取得、WebWorks このフォーム アクセサリー バーが表示されます。 この機能は、アプリとして値を指定してフォーム アクセサリー バーを表示しないようにすることができます。`enable`.

*   `orientation`: ( `auto` 、 `portrait` 、または `landscape` )、アプリの画面の永続の向きを指定します。既定では、画面の向きを指定しない場合、向きは auto に設定されます。

*   `popupBlocker`: ポップアップ ブロックを使用できます。 既定では、子のブラウザー ウィンドウでブラックベリー WebWorks アプリですべてのポップアップが表示されます。 ポップアップ、ポップアップ ブロックを有効にするユーザーの介入なしの表示を防ぐことができます。 これは、値として指定することで`enable`.

*   `webSecurity`： セキュリ ティーを無効にします。 Web セキュリティを無効にするには開発中に未知のソースからリモート コンテンツにアクセスすることができます。 配布用アプリをパッケージ化する前にこの設定を削除する必要があります。 この機能は、便宜上、開発のみのものです。 すべての Uri が知られている、生産とホワイト リストに登録を使用する必要があります、 `<access>` 要素。 無効にするには、値としてを指定します。`disable`.