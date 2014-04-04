<!---
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
-->

# org.apache.cordova.inappbrowser

このプラグインを使用して、 `window.open()` の呼び出したとき、または、 `<a target="_blank">` 形式のリンクを開けたとき、別のウェブブラウザーを立ち上げます。

    var ref = window.open('http://apache.org', '_blank', 'location=yes');

__注意__ : InAppBrowser を使用して開いたウィンドウ ( InAppBrowser ウィンドウ ) は、標準のウェブブラウザーと同じ動作をします。また、Cordova API 群へのアクセスを行うことはできません。


## インストール

    cordova plugin add org.apache.cordova.inappbrowser

## window.open

新しい `InAppBrowser` のインスタンス内、現在のブラウザのインスタンス内、または、システムブラウザー内で、URL を開きます。

    var ref = window.open(url, target, options);

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_
- __url__: 読み込み対象の URL _(String)_ 。 Unicode 文字が URL に含む場合、 `encodeURI()` を使用して変換します。
- __target__: URL の読み込み先として使用するブラウザーの種別。任意のパラメータです。デフォルトでは、 `_self` となります。 _(String)_
    - `_self`: URL がホワイトリストにある場合には、 Cordova WebView で開きます。それ以外の場合には、 `InAppBrowser` で開きます。
    - `_blank`: `InAppBrowser` で開きます。
    - `_system`: システムのウェブブラウザーで開きます。
- __options__: `InAppBrowser` で使用するオプションです。任意で使用します。デフォルトでは、 `location=yes` となります。 _(String)_

    `options` の文字列に、空白は挿入できません。各設定 ( 名称と値の組み合わせ ) の間を、コンマで区切る必要があります。各設定の名称では、大文字・小文字を区別しません。すべてのプラットフォームで以下の値はサポートします。

    - __location__: `yes` または `no` を設定すると、 `InAppBrowser` のロケーションバーを表示または非表示にします。

    Android のみ適用 :

    - __closebuttoncaption__: __Done__ ボタン上の表示名として使用する文字列を設定します。   
    - __hidden__: `yes` に設定した場合、ブラウザーの作成とページの読み込みを行いますが、load イベントが発火するまで、表示をしません。省略または `no` ( デフォルト ) に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    - __clearcache__: `yes` に設定した場合、新規のウィンドウを開く前に、ブラウザーのクッキーとキャッシュを削除します。
    - __clearsessioncache__: `yes` に設定した場合、新規のウィンドウを開く前に、セッション クッキーとキャッシュを削除します。
    
    iOS のみ適用 :

    - __closebuttoncaption__: ボタン上の表示名として使用する文字列を設定します。この値を各自でローカライズする必要があります。    - 
    - __disallowoverscroll__: `yes` または `no` を設定すると( デフォルトでは `no` )、UIWebViewBounce プロパティをオンまたはオフにします。
    - __hidden__: `yes` に設定した場合、ブラウザーの作成とページの読み込みを行いますが、load イベントが発火するまで、表示をしません。省略または `no` ( デフォルト ) に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    - __toolbar__: `yes` または `no` を設定すると、 `InAppBrowser` のツールバーを表示または非表示にします ( デフォルトでは `yes` ) 。
    - __enableViewportScale__: `yes` または `no` に設定して、meta タグを使用したビューポート ( viewport )の尺度変更を有効または無効にします ( デフォルトでは `no` 。
    - __mediaPlaybackRequiresUserAction__: `yes` または `no` に設定して、 HTML5 の audio または video の自動再生を有効または無効にします ( デフォルトでは `no` )。
    - __allowInlineMediaPlayback__: デバイス固有の再生用インターフェイスを使用するのではなく、ブラウザのウィンドウ内で表示をしている、 HTML5 のインライン メディアを使用した再生処理を、`yes` または `no` に設定して、許可または不許可にします。HTML の `video` 要素には `webkit-playsinline` 属性を指定する必要があります ( デフォルトは `no` )。
    - __keyboardDisplayRequiresUserAction__: JavaScript の `focus()` を使用して、form 要素がフォーカスされたとき、キーボードを表示するかどうかを、`yes` または `no` で設定します ( デフォルト値は `yes` )。
    - __suppressesIncrementalRendering__: 閲覧する新規コンテンツをすべて受け取った後に、レンダリングを行うかどうかを、`yes` または `no` で設定します ( デフォルト値は `no` )。
    - __presentationstyle__: `pagesheet` 、 `formsheet` 、 `fullscreen` のいずれかを設定して、 [presentation style](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle) を設定します ( デフォルトでは `fullscreen` )。
    - __transitionstyle__: `fliphorizontal` 、 `crossdissolve` 、 `coververtical` のいずれかを設定して、 [transition style](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle) を設定します ( デフォルトでは `coververtical` )。
    - __toolbarposition__: `top` または `bottom` に設定して、ツールバーの表示位置 ( ウィンドウの上部・下部 ) を指定します ( デフォルトでは `bottom` )。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8

### 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');

## InAppBrowser

The object returned from a call to `window.open`.

### メソッド

- addEventListener
- removeEventListener
- close
- show
- executeScript
- insertCSS

## addEventListener

> イベントのリスナーを `InAppBrowser` へ追加します。

    ref.addEventListener(eventname, callback);

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_
- __eventname__: リッスン ( listen/処理 ) 対象のイベント _(String)_
  - __loadstart__: `InAppBrowser` が URL を読み込み始めたときに発火するイベント
  - __loadstop__: `InAppBrowser` が URL を読み込み終えたときに発火するイベント
  - __loaderror__: URL の読み込みの際に、 `InAppBrowser` がエラーを検出したときに発火するイベント
  - __exit__: `InAppBrowser` ウィンドウを閉じるときに発火するイベント
- __callback__: イベントが発火したときに実行する関数。パラメータとして `InAppBrowserEvent` オブジェクトをこの関数に渡します。

### InAppBrowserEvent Properties

- __type__: `loadstart` 、 `loadstop` 、 `loaderror` 、 `exit` のいずれかのイベント名 _(String)_
- __url__: 読み込んだ URL _(String)_
- __code__: `loaderror` が発生した場合のエラーコード _(Number)_
- __message__: `loaderror` が発生した場合のエラーメッセージ _(String)_


### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8

### 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });

## removeEventListener

> イベントのリスナーを、 `InAppBrowser` から削除します。

    ref.removeEventListener(eventname, callback);

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_
- __eventname__: リッスン ( listen/処理 ) する、停止対象のイベント _(String)_
  - __loadstart__: `InAppBrowser` が URL を読み込み始めたときに発火するイベント
  - __loadstop__: `InAppBrowser` が URL を読み込み終えたときに発火するイベント
  - __loaderror__: URL の読み込みの際に、 `InAppBrowser` がエラーを検出したときに発火するイベント
  - __exit__: `InAppBrowser` ウィンドウを閉じるときに発火するイベント
- __callback__: イベントが発火したときに実行する関数。 `InAppBrowserEvent` オブジェクトをこの関数に渡します。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8

### 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);

## close

> `InAppBrowser` ウィンドウを閉じます。

    ref.close();

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8

### 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();

## show

> 非表示で実行している InAppBrowser ウィンドウを表示します。 InAppBrowser ウィンドウ がすでに表示されている場合には、この関数を呼んでも効果ありません。

    ref.show();

- __ref__: `InAppBrowser` ウィンドウへの参照 (`InAppBrowser`)

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS

### 例

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    // 少し経過してから...
    ref.show();

## executeScript

> `InAppBrowser` ウィンドウに、JacaScript コードを注入 ( inject ) します。

    ref.executeScript(details, callback);

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_
- __injectDetails__: 下記の `file` または `code` キーを指定し、実行するスクリプトの詳細を設定します。 _(Object)_
  - __file__: 注入するスクリプトの URL
  - __code__: 注入するスクリプトのテキスト
- __callback__: 注入した JavaScript コードの後に実行する関数
    - 注入したスクリプトの形式が `code` の場合、コールバックにパラメータを 1 つ引き渡して実行します。このパラメータは、注入したスクリプトの戻り値 ( `配列` 形式 ) です。複数行のスクリプトに関しては、最後に評価 ( evaluate ) したステートメント ( statement ) や表現 ( expression ) の戻り値が引数となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS

### 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });

## insertCSS

> `InAppBrowser` ウィンドウへ CSS を注入 ( inject ) します。
    ref.insertCSS(details, callback);

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_

- __injectDetails__: 下記の `file` または `code` キーを指定し、実行するスクリプトの詳細を設定します。 _(Object)_
  - __file__: 注入するスクリプトの URL
  - __code__: 注入するスクリプトのテキスト

- __callback__: 注入した CSS の適用後に実行する関数

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS

### 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });

