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

contacts.create
===============

新しい <a href="Contact/contact.html">Contact</a> オブジェクトを作成します。

    var contact = navigator.contacts.create(properties);

概要
-----------

contacts.create 関数は、新しい `<a href="Contact/contact.html">Contact</a>` オブジェクトを同期的に作成します。

この関数で作成した <a href="Contact/contact.html">Contact</a> オブジェクトは、デバイスの連絡先データベースには残りません。 <a href="Contact/contact.html">Contact</a> オブジェクトをデバイスに保存するには、 `<a href="Contact/contact.html">Contact</a>.save` 関数を使用します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    var my<a href="Contact/contact.html">Contact</a> = navigator.contacts.create({"displayName": "Test User"});

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="Contact/contact.html">Contact</a> の<a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            var my<a href="Contact/contact.html">Contact</a> = navigator.contacts.create({"displayName": "Test User"});
            my<a href="Contact/contact.html">Contact</a>.note = "この連絡先のメモ";
            console.log("連絡先, " + my<a href="Contact/contact.html">Contact</a>.displayName + ", メモ: " + my<a href="Contact/contact.html">Contact</a>.note);
        }


        </script>
      </head>
      <body>
        <h1><a href="../storage/storage.opendatabase.html">使用例</a></h1>
        <p>連絡先を作成します</p>
      </body>
    </html>
