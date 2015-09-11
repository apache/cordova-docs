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

local<a href="../storage.html">Storage</a>
===============

W3C <a href="../storage.html">Storage</a> interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute) へのアクセスを提供します。

    var storage = window.local<a href="../storage.html">Storage</a>;

メソッド
-------

- __key__: キーの名前を返します
- __getItem__: キーによって指定されたアイテムを返します
- __setItem__: キーによって指定されたアイテムを保存します
- __removeItem__: キーによって指定されたアイテムを削除します
- __clear__: 全てのキーとアイテムを削除します

詳細
-----------

local<a href="../storage.html">Storage</a> は W3C <a href="../storage.html">Storage</a> interface へのインターフェースを提供します。キーと値のペアでデータを管理します。

注意: window.session<a href="../storage.html">Storage</a> は同じインターフェースを提供しますが、アプリが起動するたびにこの値はクリアされます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone
- Windows Phone 7
- Tizen

Key の例
-------------

    var keyName = window.local<a href="../storage.html">Storage</a>.key(0);

Set Item の例
-------------

    window.local<a href="../storage.html">Storage</a>.setItem("key", "value");

Get Item の例
-------------

    var value = window.local<a href="../storage.html">Storage</a>.getItem("key");
    // value の値は "value"

Remove Item の例
-------------

    window.local<a href="../storage.html">Storage</a>.removeItem("key");

Clear の例
-------------

    window.local<a href="../storage.html">Storage</a>.clear();

詳細な<a href="../storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../storage.html">Storage</a> の<a href="../storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            window.local<a href="../storage.html">Storage</a>.setItem("key", "value");
            var keyname = window.local<a href="../storage.html">Storage</a>.key(i);
            // key の値は "key"
            var value = window.local<a href="../storage.html">Storage</a>.getItem("key");
            // value の値は "value"
            window.local<a href="../storage.html">Storage</a>.removeItem("key");
            window.local<a href="../storage.html">Storage</a>.setItem("key2", "value2");
            window.local<a href="../storage.html">Storage</a>.clear();
            // local<a href="../storage.html">Storage</a> は空
        }


        </script>
      </head>
      <body>
        <h1><a href="../storage.opendatabase.html">使用例</a></h1>
        <p>local<a href="../storage.html">Storage</a> のサンプル</p>
      </body>
    </html>


Windows Phone 7 に関する注意点
-------------

- ドット表記は Windows Phone では使用できません。 window.local<a href="../storage.html">Storage</a>.setItem/getItem メソッドを使用して、 W3C の仕様で定義されている window.local<a href="../storage.html">Storage</a>.someKey = 'someValue'; の方法は使用しないでください。
