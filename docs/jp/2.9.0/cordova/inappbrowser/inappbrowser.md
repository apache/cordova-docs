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

InAppBrowser
============

> `InAppBrowser` は、 `window.open` 使用時にアプリ内に表示される Web ブラウザです。

    var ref = window.open('http://apache.org', '_blank', 'location=yes');

概要
-----------

返り値で受け取るオブジェクトについては、 `window.open` を参照してください。

メソッド
----------

- addEventListener
- removeEventListener
- close
- executeScript
- insertCSS

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="InAppBrowser" value="org.apache.cordova.InAppBrowser" />

### iOS

#### config.xml

    <plugin name="InAppBrowser" value="CDVInAppBrowser" />

### Windows Phone 7 + 8

#### config.xml

    <plugin name="InAppBrowser" />

addEventListener
================

> `InAppBrowser` のイベントにリスナーを追加します。

    ref.addEventListener(eventname, callback);

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_
- __eventname__: 購読するイベント名 _(String)_

  - __loadstart__: `InAppBrowser` が URL を読み込み始めた際に発行されるイベント。
  - __loadstop__: `InAppBrowser` が URL を読み込み終えた際に発行されるイベント。
  - __loaderror__: `InAppBrowser` が URL 読み込み時にエラーを検出した際に発行されるイベント。
  - __exit__: `InAppBrowser` ウィンドウを閉じる際に発行されるイベント。

- __callback__: イベント発行時に実行される関数。 `InAppBrowserEvent` オブジェクトを引数として受け取ります。 


サポートされているプラットフォーム
-------------------

- Android
- iOS
- Windows Phone 7 and 8

使用例
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordovaの読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova準備完了
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

removeEventListener
===================

> `InAppBrowser` のイベントからリスナーを取り除きます。

    ref.removeEventListener(eventname, callback);


- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_
- __eventname__: 購読するイベント名 _(String)_

  - __loadstart__: `InAppBrowser` が URL を読み込み始めた際に発行されるイベント。
  - __loadstop__: `InAppBrowser` が URL を読み込み終えた際に発行されるイベント。
  - __loaderror__: `InAppBrowser` が URL 読み込み時にエラーを検出した際に発行されるイベント。
  - __exit__: `InAppBrowser` ウィンドウを閉じる際に発行されるイベント。

- __callback__: イベント発行時に実行される関数。 `InAppBrowserEvent` オブジェクトを引数として受け取ります。 

サポートされているプラットフォーム
-------------------

- Android
- iOS
- Windows Phone 7 and 8

使用例
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordovaの読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // InAppBrowserへの参照（グローバル変数）
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

        // Cordova準備完了
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

close
=====

> `InAppBrowser` ウィンドウを閉じます。

    ref.close();

- __ref__: `InAppBrowser` ウィンドウへの参照 _(InAppBrowser)_

サポートされているプラットフォーム
-------------------

- Android
- iOS
- Windows Phone 7 and 8
- BlackBerry 10

使用例
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordovaの読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova準備完了
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

executeScript
=============

> `InAppBrowser`でJavaScriptを実行します。

    ref.executeScript(details, callback);

- __ref__: `InAppBrowser`ウィンドウへの参照。 _(InAppBrowser)_
- __injectDetails__: 実行するスクリプト。オブジェクト形式で、`file`キーか`code`キーに以下の値を指定します。 _(Object)_
  - __file__: 実行するスクリプトのURL。
  - __code__: 実行するスクリプト内容を記述した文字列。
- __callback__: JavaScript コード実行後に呼び出される関数。
    - `code` キーでスクリプトを渡した場合、 `callback` は引数を1つ受け取ります。この引数は配列であり、その要素はスクリプトの戻り値です。複数行のスクリプトの場合、最後の行か、最後に評価された部分の戻り値が引数となります。

サポートされているプラットフォーム
-------------------

- Android
- iOS

使用例
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordovaの読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // InAppBrowserへの参照（グローバル変数）
        var iabRef = null;

        // InAppBrowserウィンドウでJavaScriptを実行
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

        // Cordova準備完了
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

insertCSS
=========

> `InAppBrowser` へ CSS を追加する

    ref.insertCSS(details, callback);

- __ref__: `InAppBrowser` ウィンドウへの参照。 _(InAppBrowser)_
- __injectDetails__: 追加する CSS 。オブジェクト形式で、 `file` キーか `code` キーに以下の値を指定します。 
  - __file__: 追加するスタイルシートの URL。
  - __code__: 追加するスタイルシート内容を記述した文字列。
- __callback__: CSS を追加した後に呼び出される関数。

サポートされているプラットフォーム
-------------------

- Android
- iOS

使用例
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordovaの読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // InAppBrowserへの参照（グローバル変数）
        var iabRef = null;

        // InAppBrowserウィンドウへCSSを追加
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

        // Cordova準備完了
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

InAppBrowserEvent
=================

`InAppBrowser` オブジェクトに `addEventListener` で登録されたコールバック関数へ渡されるオブジェクト。

プロパティ
----------

- __type__: イベント名。 `loadstart`, `loadstop`, `loaderror`, もしくは `exit` のいずれか。 _(String)_
- __url__: 読み込んだURL。 _(String)_
- __code__: エラーコード。 `loaderror` の場合のみ保持。 _(Number)_
- __message__: エラーメッセージ。 `loaderror` の場合のみ保持。 _(String)_
