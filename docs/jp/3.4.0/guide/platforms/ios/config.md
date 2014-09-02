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

# iOS の設定

`config.xml` ファイルを使用して、各アプリと各 CordovaWebView のインスタンス間に適用する、アプリの基本的な設定を行います。
この節では、iOS のビルドのみに適用する preference に関して解説します。グローバル設定で使用する各種オプションに関しては、『 config.xml ファイル 』 をご確認ください。

- `EnableViewportScale` ( boolean、デフォルトでは `false` ) : `true` に設定すると、viewport の meta タグ ( viewport meta tag ) を使用して、スケーリング ( scaling ) の禁止 ( disable ) または範囲の制限 ( restrict ) を行うことができます。デフォルトでは、禁止と制限はかかっていません ( enable )。

        <preference name="EnableViewportScale" value="true"/>

  以下のように HTML 内に viewport meta タグを記述して、スケーリングの無効化、および、レンダリングで使用する WebView 内に、コンテンツが収まるようにします。

        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />

- `MediaPlaybackRequiresUserAction` ( boolean、デフォルトでは `false` ) : 
`true` に設定すると、`autoplay` 属性を使用した、または、JavaScript 経由での、HTML5 の動画または音楽の自動再生を無効にします。

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>

- `AllowInlineMediaPlayback` ( boolean、デフォルトでは `false` ) : `true` に設定すると、HTML5 メディア再生は、画面のレイアウト内において _インライン_ ( inline ) で行われます。このとき、ネイティブ側で制御を行うのではなく、ブラウザー側で制御を行います。これを使用する場合、 `<video>` 要素に、 `webkit-playsinline` 属性を追加してください。

        <preference name="AllowInlineMediaPlayback" value="true"/>

- `BackupWebStorage` [ 文字列、`none` 、 `local` または `cloud` ( デフォルト )　] : 
`cloud` に設定すると、iCloud 経由で、Web Storage のデータのバックアップを行うことができます。 `local` に設定すると、iTunes
 sync 経由でローカルのバックアップのみを行うことができます。 `none` に設定すると、Web Storage のバックアップを禁止します。

        <preference name="BackupWebStorage" value="local"/>

- `TopActivityIndicator` ( 文字列、デフォルトでは `gray` ) : プロセッサーの処理状況を示すステータスバー内において、処理中アイコン ( spinning icon ) の表示制御を行います。有効な値は、 `whiteLarge` 、 `white` または `gray` です。

        <preference name="TopActivityIndicator" value="white"/>

- `KeyboardDisplayRequiresUserAction` ( boolean、デフォルトでは `true` ) :
  `false` に設定すると、フォーム ( form ) の入力欄において `focus()` を呼んだときに、キーボードを表示します。

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>

- `SuppressesIncrementalRendering` ( boolean、デフォルトでは `false` ) : `true` に設定すると、すべてのコンテンツを受け取るまで、画面上にレンダリングを行いません。

        <preference name="SuppressesIncrementalRendering" value="true"/>

- `GapBetweenPages` ( float、デフォルトでは `0` ) : 各ページの隙間の距離 ( ポイント間 )。

        <preference name="GapBetweenPages" value="0"/>

- `PageLength` ( float、デフォルトでは `0` ) : ページを移動 ( フリックなど ) するときに適用する、各ページのサイズ ( ポイント間 )。PaginationMode を RightToLeft ( 右から左 ) または LeftToRight ( 左から右 ) にした場合、このプロパティを使用して、各ページの幅を決定します。PaginationMode を topToBottom ( 上から下 ) または bottomToTop ( 下から上 ) にした場合、このプロパティを使用して、各ページの縦の長さを決定します。デフォルト値は、 0 です。0 の場合、ページの寸法を決定するとき、Viewport のサイズを使用します。

        <preference name="PageLength" value="0"/>

- `PaginationBreakingMode` ( 文字列、デフォルトでは `page` ): 有効な値は、 `page` と `column` です。ページ区切りの方法を、段区切り ( colum-breaking ) または改ページ ( page-breaking ) にします。
このプロパティーを使用して、段区切りと改ページに関連する特定の CSS プロパティーを適用するかしないか決定します。このプロパティを `column` に設定した場合、ページ区切りを行うときに、段区切りに関連する CSS プロパティを、コンテンツに適用します。

        <preference name="PaginationBreakingMode" value="page"/>

- `PaginationMode` ( 文字列、デフォルトでは `unpaginated` ) : 有効な値は、`unpaginated` 、 `leftToRight` 、 `topToBottom` 、 `bottomToTop` 、 `rightToLeft` です。このプロパティーを使用して、WebView 内のコンテンツを、1 表示画面 に収まるようなページ単位に分割するか、または、スクロールを加えて表示するか決定します。ぺージネーションを行う場合、このプロパティーを使用して、コンテンツのページネーション用レイアウトの切り替えを行います。切り替えのときは、PageLength と GapBetweenPages の値を使用して、コンテンツのレイアウトの再編成 ( re-layout ) を Webview が行います。

        <preference name="PaginationMode" value="unpaginated"/>

- `UIWebViewDecelerationSpeed` ( 文字列、デフォルトでは `normal` ) : 有効な値は、 `normal` と `fast` です。このプロパティーを使用して、スクロールの減速 ( フリックジェスチャのように、スクロール方向へドラッグを行い、画面から指を離しても、その勢いがしばらく止まらない状態 ) を制御します。ほとんどのネイティブアプリでは、デフォルトの速度である `normal` を使用しますが、Mobile Safari では、 `fast` をデフォルトとします。

        <preference name="UIWebViewDecelerationSpeed" value="fast" />
