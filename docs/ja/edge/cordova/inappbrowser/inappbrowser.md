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

# InAppBrowser

> `InAppBrowser`を呼び出すときに、アプリで表示 web ブラウザーです`window.open`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

## 説明

呼び出しから返されるオブジェクト`window.open`.

## メソッド

*   addEventListener
*   removeEventListener
*   閉じる
*   ショー
*   executeScript
*   insertCSS

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   （アンドロイド`app/res/xml/config.xml`)
    
        < 機能名 ="InAppBrowser">< param の名前 =「android パッケージ」value="org.apache.cordova.InAppBrowser"/></機能 >
        

*   iOS （`config.xml`)
    
        < 機能名 ="InAppBrowser">< param の名前 = 値「ios パッケージ」="CDVInAppBrowser"/></機能 >
        

*   Windows Phone 7 および 8 (`config.xml`)
    
        < 機能名 ="InAppBrowser"/>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。概要については、プラットフォームのサポートを参照してください。

# addEventListener

> イベントのリスナーを追加します、`InAppBrowser`.

    ref.addEventListener eventname （コールバック）;
    

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

    var ref = window.open ('http://apache.org'、'_blank'、' 場所 ="はい）;ref.addEventListener ('は'、関数 {alert(event.url);});
    

## 完全な例

    <!DOCTYPE html >< html >< 頭 >< タイトル > InAppBrowser.addEventListener 例 </タイトル >< 型のスクリプト"テキスト/javascript に"charset =「utf-8」src="cordova.js ="></スクリプト >< 型のスクリプト"テキスト/javascript に"charset = =「utf-8」>/デバイス API ライブラリをロードするを待つ///document.addEventListener （"deviceready"、onDeviceReady、false);//デバイス Api が利用可能な//onDeviceReady() 関数 {var ref = window.open ('http://apache.org'、'_blank' ' 場所 ="はい）;ref.addEventListener ('は' function(event) {警告 (' 開始: ' + event.url）;});ref.addEventListener ('loadstop'、function(event) {警告 (' 停止： ' + event.url）;});ref.addEventListener ('loaderror'、function(event) {警告 (' エラー: ' + event.message）;});ref.addEventListener ('出口'、function(event) {alert(event.type);});} </スクリプト ></ヘッド >< 本体 ></ボディ ></html >
    

# removeEventListener

> イベントのリスナーを削除します、`InAppBrowser`.

    ref.removeEventListener eventname （コールバック）;
    

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

    var ref = window.open ('http://apache.org'、'_blank'、' 場所 ="はい）;var myCallback 関数 {alert(event.url);} = ref.addEventListener 'は' （myCallback）;ref.removeEventListener 'は' （myCallback）;
    

## 完全な例

    <!DOCTYPE html >< html >< 頭 >< タイトル > InAppBrowser.removeEventListener 例 </タイトル >< 型のスクリプト"テキスト/javascript に"charset =「utf-8」src="cordova.js ="></スクリプト >< 型のスクリプト"テキスト/javascript に"charset = =「utf-8」>/デバイス API ライブラリをロードするを待つ///document.addEventListener （"deviceready"、onDeviceReady、false);//グローバル InAppBrowser 参照 var iabRef = null;iabLoadStart(event) 関数 {警告 (event.type + '-' + event.url);} iabLoadStop(event) 関数 {警告 (event.type + '-' + event.url);} iabLoadError(event) 関数 {警告 (event.type + '-' + event.message);} 機能 iabClose(event) {alert(event.type);iabRef.removeEventListener 'は' （iabLoadStart）;iabRef.removeEventListener 'loadstop' （iabLoadStop）;iabRef.removeEventListener 'loaderror' （iabLoadError）;iabRef.removeEventListener '出口' （iabClose）;}//デバイス Api が利用可能な//onDeviceReady() 関数 {iabRef = window.open ('http://apache.org'、'_blank' ' 場所 ="はい）;iabRef.addEventListener 'は' （iabLoadStart）;iabRef.addEventListener 'loadstop' （iabLoadStop）;iabRef.removeEventListener 'loaderror' （iabLoadError）;iabRef.addEventListener '出口' （iabClose）;} </スクリプト ></ヘッド >< 本体 ></ボディ ></html >
    

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

    var ref = window.open ('http://apache.org'、'_blank'、' 場所 ="はい）;ref.close();
    

## 完全な例

    <!DOCTYPE html >< html >< 頭 >< タイトル > InAppBrowser.close 例 </タイトル >< 型のスクリプト"テキスト/javascript に"charset =「utf-8」src="cordova.js ="></スクリプト >< 型のスクリプト"テキスト/javascript に"charset = =「utf-8」>/デバイス API ライブラリをロードするを待つ///document.addEventListener （"deviceready"、onDeviceReady、false);//デバイス Api が利用可能な//onDeviceReady() 関数 {var ref = window.open ('http://apache.org'、'_blank' ' 場所 ="はい）;//5 秒 setTimeout(function() {ref.close(); 後 InAppBrowser を閉じる}、5000);} </スクリプト ></ヘッド >< 本体 ></ボディ ></html >
    

# ショー

> 隠された開かれた InAppBrowser ウィンドウが表示されます。この関数を呼び出すは影響しません、InAppBrowser が既に表示されている場合。

    ref.show();
    

*   **ref:** 、InAppBrowser ウィンドウ (への参照`InAppBrowser`)

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー
*   iOS

## 簡単な例

    var ref = window.open ('http://apache.org'、'_blank'、' 非表示 ="はい）;ref.show();
    

## 完全な例

    <!DOCTYPE html >< html >< 頭 >< タイトル > InAppBrowser.show 例 </タイトル >< 型のスクリプト"テキスト/javascript に"charset =「utf-8」src="cordova.js ="></スクリプト >< 型のスクリプト"テキスト/javascript に"charset = =「utf-8」>/ロードするコルドバを待つ///document.addEventListener （"deviceready"、onDeviceReady、false);//コルドバは準備ができて//onDeviceReady() 関数 {var ref = window.open ('http://apache.org'、'_blank' ' 隠し ="はい）;ref.addEventListener ('loadstop'、function(event) {警告 ('背景ウィンドウ ロード');});//5 秒 setTimeout(function() {ref.close(); 後 InAppBrowser を閉じる}、5000);} </スクリプト ></ヘッド >< 本体 ></ボディ ></html >
    

# executeScript

> JavaScript コードに挿入します、 `InAppBrowser` ウィンドウ

    ref.executeScript 詳細 （コールバック）;
    

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

    var ref = window.open ('http://apache.org'、'_blank'、' 場所 ="はい）;ref.addEventListener ('loadstop' 関数 {ref.executeSript ({ファイル:」をブロック"});});
    

## 完全な例

    <!DOCTYPE html >< html >< 頭 >< タイトル > InAppBrowser.executeScript 例 </タイトル >< 型のスクリプト"テキスト/javascript に"charset =「utf-8」src="cordova.js ="></スクリプト >< 型のスクリプト"テキスト/javascript に"charset = =「utf-8」>/デバイス API ライブラリをロードするを待つ///document.addEventListener （"deviceready"、onDeviceReady、false);//グローバル InAppBrowser 参照 var iabRef = null;/InAppBrowser ウィンドウに当社のカスタム JavaScript を挿入///replaceHeaderImage() 関数 {iabRef.executeScript ({コード:「var img=document.querySelector (「#header img');img.src= 'http://cordova.apache.org/images/cordova_bot.png';"}、関数 {0} 警告 （「イメージ要素が正常にハイジャック」);}} 関数 iabClose(event) {iabRef.removeEventListener 'loadstop' （replaceHeaderImage）;iabRef.removeEventListener '出口' （iabClose）;}//デバイス Api が利用可能な//onDeviceReady() 関数 {iabRef = window.open ('http://apache.org'、'_blank' ' 場所 ="はい）;iabRef.addEventListener 'loadstop' （replaceHeaderImage）;iabRef.addEventListener '出口' （iabClose）;} </スクリプト ></ヘッド >< 本体 ></ボディ ></html >
    

# insertCSS

> CSS に注入する、 `InAppBrowser` ウィンドウ。

    ref.insertCSS 詳細 （コールバック）;
    

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

    var ref = window.open ('http://apache.org'、'_blank'、' 場所 ="はい）;ref.addEventListener ('loadstop' 関数 {ref.insertCSS ({ファイル:「反映」});});
    

## 完全な例

    <!DOCTYPE html >< html >< 頭 >< タイトル > InAppBrowser.insertCSS 例 </タイトル >< 型のスクリプト"テキスト/javascript に"charset =「utf-8」src="cordova.js ="></スクリプト >< 型のスクリプト"テキスト/javascript に"charset = =「utf-8」>/デバイス API ライブラリをロードするを待つ///document.addEventListener （"deviceready"、onDeviceReady、false);//グローバル InAppBrowser 参照 var iabRef = null;/InAppBrowser ウィンドウの我々 のカスタム CSS の注入///changeBackgroundColor() 関数 {iabRef.insertCSS ({コード:"体 {背景: #ffff00"}、関数 {0} 警告 （「スタイル変更」）;}} 関数 iabClose(event) {iabRef.removeEventListener 'loadstop' （changeBackgroundColor）;iabRef.removeEventListener '出口' （iabClose）;}//デバイス Api が利用可能な//onDeviceReady() 関数 {iabRef = window.open ('http://apache.org'、'_blank' ' 場所 ="はい）;iabRef.addEventListener 'loadstop' （changeBackgroundColor）;iabRef.addEventListener '出口' （iabClose）;} </スクリプト ></ヘッド >< 本体 ></ボディ ></html >
    

# InAppBrowserEvent

オブジェクトからのコールバック関数に渡される、 `addEventListener` を呼び出す、 `InAppBrowser` オブジェクト。

## プロパティ

*   **タイプ**: eventname どちらか `loadstart` 、 `loadstop` 、 `loaderror` 、または `exit` 。*(文字列)*

*   **url**: URL が読み込まれました。*(文字列)*

*   **コード**: の場合にのみ、エラー コード `loaderror` 。*(数)*

*   **メッセージ**: の場合にのみ、エラー メッセージ `loaderror` 。*(文字列)*