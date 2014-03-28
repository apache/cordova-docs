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

# window.open

新しい URL を開き `InAppBrowser` インスタンス、現在のブラウザー インスタンスまたはシステムのブラウザー。

    var ref = window.open(url, target, options);
    

*   **ref**: への参照を `InAppBrowser` ウィンドウ。*(InAppBrowser)*

*   **url**: *(文字列)*をロードする URL。電話 `encodeURI()` 場合は、この上の URL は Unicode 文字を含みます。

*   **ターゲット**: ターゲット URL は、既定値は、省略可能なパラメーターをロードするを `_self` 。*(文字列)*
    
    *   `_self`: コルドバ WebView URL がホワイト リストにある場合で開きます、それ以外の場合で開きます、`InAppBrowser`.
    *   `_blank`: で開きます、`InAppBrowser`.
    *   `_system`: システムの web ブラウザーで開きます。

*   **オプション**: おぷしょん、 `InAppBrowser` 。省略可能にする: `location=yes` 。*(文字列)*
    
    `options`文字列にはする必要があります任意の空白スペースが含まれていないと、各機能の名前と値のペアをコンマで区切る必要があります。 機能名では大文字小文字を区別します。 以下の値をサポートするプラットフォーム。
    
    *   **場所**： に設定 `yes` または `no` を有効にする、 `InAppBrowser` の場所バー オンまたはオフにします。
    ## アンドロイドのみ
    
    *   **closebuttoncaption** -"Done"ボタンのキャプションなります文字列に設定します。 
    *   **隠された**- ブラウザーを作成し、ページを読み込むには、[はい] に設定されているが表示されません。 ロード イベントは、読み込みが完了したときに発生します。 省略または 'no' (既定値) を開くし、通常負荷ブラウザーに設定します。 
    *   **clearcache** - はオフにすると、新しいウィンドウが開く前に、ブラウザーのクッキー キャッシュを 'yes' に設定
    *   **clearsessioncache** - をオフにすると、新しいウィンドウが開く前にセッション cookie のキャッシュを持っている 'yes' に設定
    ## iOS のみ
    
    *   **closebuttoncaption** -"Done"ボタンのキャプションなります文字列に設定します。自分でこの値をローカライズする必要がありますに注意してください。
    *   **隠された**- ブラウザーを作成し、ページを読み込むには、[はい] に設定されているが表示されません。 ロード イベントは、読み込みが完了したときに発生します。 省略または 'no' (既定値) を開くし、通常負荷ブラウザーに設定します。 
    *   **ツールバー** - は 'yes' または 'no' を InAppBrowser (デフォルトは 'yes') のツールバーをオンまたはオフに設定
    *   **enableViewportScale**： に設定されている `yes` または `no` を (デフォルトではメタタグを介してスケーリング ビューポートを防ぐために`no`).
    *   **mediaPlaybackRequiresUserAction**： に設定されている `yes` または `no` を HTML5 オーディオまたはビデオを自動再生 （初期設定から防ぐために`no`).
    *   **allowInlineMediaPlayback**： に設定されている `yes` や `no` デバイス固有再生インターフェイスではなく、ブラウザー ウィンドウ内に表示するインライン HTML5 メディアの再生を許可します。 HTML の `video` 要素を含める必要がありますまた、 `webkit-playsinline` 属性 (デフォルトは`no`)
    *   **keyboardDisplayRequiresUserAction**： に設定されている `yes` または `no` をフォーム要素の JavaScript を介してフォーカスを受け取るときに、キーボードを開く `focus()` コール （デフォルトは`yes`).
    *   **suppressesIncrementalRendering**： に設定されている `yes` または `no` (デフォルトでは表示される前にビューのすべての新しいコンテンツを受信するまで待機するには`no`).
    *   **presentationstyle**： に設定されている `pagesheet` 、 `formsheet` または `fullscreen` (デフォルトでは、[プレゼンテーション スタイル][1]を設定するには`fullscreen`).
    *   **transitionstyle**： に設定されている `fliphorizontal` 、 `crossdissolve` または `coververtical` (デフォルトでは、[トランジションのスタイル][2]を設定するには`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー
*   iOS
*   Windows Phone 7 と 8

## 簡単な例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>