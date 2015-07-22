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

localStorage
===============

W3C Storage interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute) へのアクセスを提供します。

    var storage = window.localStorage;

メソッド
-------

- __key__: キーの名前を返します
- __getItem__: キーによって指定されたアイテムを返します
- __setItem__: キーによって指定されたアイテムを保存します
- __removeItem__: キーによって指定されたアイテムを削除します
- __clear__: 全てのキーとアイテムを削除します

詳細
-----------

localStorage は W3C Storage interface へのインターフェースを提供します。キーと値のペアでデータを管理します。

注意: window.sessionStorage は同じインターフェースを提供しますが、アプリが起動するたびにこの値はクリアされます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone
- Windows Phone 7
- Tizen

Key の例
-------------

    var keyName = window.localStorage.key(0);

Set Item の例
-------------

    window.localStorage.setItem("key", "value");

Get Item の例
-------------

    var value = window.localStorage.getItem("key");
    // value の値は "value"

Remove Item の例
-------------

    window.localStorage.removeItem("key");

Clear の例
-------------

    window.localStorage.clear();

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // key の値は "key"
            var value = window.localStorage.getItem("key");
            // value の値は "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage は空
        }


        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>localStorage のサンプル</p>
      </body>
    </html>


Windows Phone 7 に関する注意点
-------------

- ドット表記は Windows Phone では使用できません。 window.localStorage.setItem/getItem メソッドを使用して、 W3C の仕様で定義されている window.localStorage.someKey = 'someValue'; の方法は使用しないでください。
