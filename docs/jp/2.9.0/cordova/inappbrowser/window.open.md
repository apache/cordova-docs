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

window.open
===========

新しい `InAppBrowser`、 現在のブラウザインスタンス、もしくはシステムのブラウザで URL を開きます。

    var ref = window.open(url, target, options);

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_
- __url__: 読み込む URL _(String)_。 URL にユニコード文字が含まれるなら、`encodeURI()` を使って URL を変換して下さい。
- __target__: URL を読み込むブラウザ種別を設定します。オプションのパラメータであり、デフォルト値は `_self` です。 _(String)_

    - `_self`: URL がホワイトリストに入っていれば、Cordova WebViewで開きます。ホワイトリストに入っていない場合、 `InAppBrowser` で開きます。
    - `_blank`: `InAppBrowser` で開きます。
    - `_system`: システムの Web ブラウザで開きます。

- __options__: `InAppBrowser` へのオプション値 (任意) であり、デフォルト値は `location=yes` です。 _(String)_

    `options` 文字列には空白を入れられません。各設定 (名前/値のペア) はカンマで区切ります。設定名は大文字・小文字を区別します。全てのプラットフォームが以下の値をサポートしています:

    - __location__: `yes` もしくは `no` を設定することで、 `InAppBrowser` のロケーションバーを表示もしくは非表示にします。
    
    Android のみ
    ------------
    - __closebuttoncaption__ - "Done" ボタンの表示名を文字列で指定します。

    iOS のみ
    --------
    - __closebuttoncaption__ - "Done" ボタンの表示名を文字列で指定します。この値自体をローカライズしなければならないことに注意して下さい。
    - __toolbar__ -  `yes` もしくは `no` を設定することで、 InAppBrowser のツールバーを表示もしくは非表示にします (デフォルト値は `yes`)。
    - __enableViewportScale__:  `yes` もしくは `no` に設定することで、 META タグでの viewport によるスケール変換を有効もしくは無効にします (デフォルト値は `no`)。
    - __mediaPlaybackRequiresUserAction__: `yes` もしくは `no` に設定することで、 HTML5 の audio もしくは video の自動再生を有効もしくは無効にします(デフォルト値は `no`)。
    - __allowInlineMediaPlayback__: `yes` もしくは `no` に設定することで、 ブラウザのウィンドウ内で表示している HTML5 のインライン・メディアの再生を許可するか設定します。HTML の `video` 要素には `webkit-playsinline` 属性を指定する必要があります。 (デフォルト値は `no`)
    - __keyboardDisplayRequiresUserAction__: `yes` もしくは `no` に設定することで、 フォーム要素がJavaScriptの `focus()` によってフォーカスされた際にキーボードを表示するか否かを設定します (デフォルト値は `yes`) 。
    - __suppressesIncrementalRendering__: `yes` もしくは `no` を設定することで、新しい内容を全て受け取ってからレンダリングするか否かを設定します (デフォルト値は `no`) 。
    - __presentationstyle__:  `pagesheet`, `formsheet` もしくは `fullscreen` に設定することで、 [presentation style](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle) を設定します (デフォルト値は `fullscreen`) 。
    - __transitionstyle__: `fliphorizontal`, `crossdissolve` もしくは `coververtical` に設定することで、 [transition style](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle) を設定します (デフォルト値は `coververtical`) 。

Supported Platforms
-------------------

- Android
- iOS
- BlackBerry 10
- Windows Phone 7 and 8

Quick Example
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/日本語'), '_blank', 'location=yes');

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordovaの読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova準備完了
        //
        function onDeviceReady() {
            // 外部 url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // 関連するドキュメント
            ref = window.open('next.html', '_self');
        }

        </script>
      </head>
      <body>
      </body>
    </html>
