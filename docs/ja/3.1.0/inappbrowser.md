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


# InAppBrowser

> `InAppBrowser`はときに表示する web ブラウザーのビューを呼び出す `window.open()` 、または時として形成されたリンクを開く`<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**注：**InAppBrowser ウィンドウは標準的な web ブラウザーのように動作し、コルドバ Api にアクセスできません。

## 説明

呼び出しから返されるオブジェクト`window.open`.

## メソッド

*   addEventListener
*   removeEventListener
*   close
*   show
*   executeScript
*   insertCSS

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   （アンドロイド`app/res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>
        

*   iOS （`config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7 および 8 (`config.xml`)
    
        <feature name="InAppBrowser" />
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。

# addEventListener

> イベントのリスナーを追加します、`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **ref**: への参照を `InAppBrowser` ウィンドウ*(InAppBrowser)*

*   **eventname**: *(文字列)*をリッスンするイベント
    
    *   ****： イベントが発生するとき、 `InAppBrowser` の URL の読み込みが開始します。
    *   **loadstop**： イベントが発生するとき、 `InAppBrowser` URL の読み込みが完了します。
    *   **loaderror**： イベントが発生するとき、 `InAppBrowser` URL の読み込みでエラーが発生します。
    *   **終了**: イベントが発生するとき、 `InAppBrowser` ウィンドウが閉じられます。

*   **コールバック**: イベントが発生したときに実行される関数。関数に渡されますが、 `InAppBrowserEvent` オブジェクトをパラメーターとして。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー
*   iOS
*   Windows Phone 7 と 8

## 簡単な例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# removeEventListener

> イベントのリスナーを削除します、`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **ref**: への参照を `InAppBrowser` ウィンドウ。*(InAppBrowser)*

*   **eventname**: イベントのリッスンを停止します。*(文字列)*
    
    *   ****： イベントが発生するとき、 `InAppBrowser` の URL の読み込みが開始します。
    *   **loadstop**： イベントが発生するとき、 `InAppBrowser` URL の読み込みが完了します。
    *   **loaderror**： イベントが発生するとき、 `InAppBrowser` URL の読み込みエラーが発生します。
    *   **終了**: イベントが発生するとき、 `InAppBrowser` ウィンドウが閉じられます。

*   **コールバック**: イベントが発生するときに実行する関数。関数に渡されますが、 `InAppBrowserEvent` オブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー
*   iOS
*   Windows Phone 7 と 8

## 簡単な例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }
    
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# 閉じる

> 閉じる、 `InAppBrowser` ウィンドウ。

    ref.close();
    

*   **ref**: への参照を `InAppBrowser` ウィンドウ*(InAppBrowser)*

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー
*   iOS
*   Windows Phone 7 と 8

## 簡単な例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# ショー

> 隠された開かれた InAppBrowser ウィンドウが表示されます。この関数を呼び出すは影響しません、InAppBrowser が既に表示されている場合。

    ref.show();
    

*   **ref:** 、InAppBrowser ウィンドウ (への参照`InAppBrowser`)

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー
*   iOS

## 簡単な例

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# executeScript

> JavaScript コードに挿入します、 `InAppBrowser` ウィンドウ

    ref.executeScript(details, callback);
    

*   **ref**: への参照を `InAppBrowser` ウィンドウ。*(InAppBrowser)*

*   **injectDetails**： 詳細を実行するスクリプトのいずれかを指定する、 `file` または `code` キー。*(オブジェクト)*
    
    *   **ファイル**： スクリプトの URL を注入します。
    *   **コード**: スクリプトのテキストを挿入します。

*   **コールバック**: JavaScript コードを注入した後に実行される関数。
    
    *   挿入されたスクリプトが型の場合 `code` 、スクリプトの戻り値は、1 つのパラメーターでコールバックを実行するのに包まれて、 `Array` 。 マルチライン スクリプトについては、最後のステートメントでは、または評価した最後の式の戻り値です。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー
*   iOS

## 簡単な例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# insertCSS

> CSS に注入する、 `InAppBrowser` ウィンドウ。

    ref.insertCSS(details, callback);
    

*   **ref**: への参照を `InAppBrowser` ウィンドウ*(InAppBrowser)*

*   **injectDetails**： 詳細を実行するスクリプトのいずれかを指定する、 `file` または `code` キー。*(オブジェクト)*
    
    *   **ファイル**: 注入するスタイル シートの URL。
    *   **コード**: 注入するスタイル シートのテキスト。

*   **コールバック**: CSS の注入後に実行される関数。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー
*   iOS

## 簡単な例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00"
            }, function() {
                alert("Styles Altered");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# InAppBrowserEvent

オブジェクトからのコールバック関数に渡される、 `addEventListener` を呼び出す、 `InAppBrowser` オブジェクト。

## プロパティ

*   **タイプ**: eventname どちらか `loadstart` 、 `loadstop` 、 `loaderror` 、または `exit` 。*(文字列)*

*   **url**: URL が読み込まれました。*(文字列)*

*   **コード**: の場合にのみ、エラー コード `loaderror` 。*(数)*

*   **メッセージ**: の場合にのみ、エラー メッセージ `loaderror` 。*(文字列)*


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
