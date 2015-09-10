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

contacts.find
=============

デバイスの連絡先データベースに問い合わせを行い、 `<a href="Contact/contact.html">Contact</a>` オブジェクトを取得します。

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);

概要
-----------

contacts.find 関数は、デバイスの連絡先データベースに問い合わせを行い、 `<a href="Contact/contact.html">Contact</a>` オブジェクトの配列を返す非同期関数です。 作成されたオブジェクトは __<a href="parameters/contactSuccess.html">contactSuccess</a>__ に従って `<a href="parameters/contactSuccess.html">contactSuccess</a>` コールバック関数に送られます。

このメソッドを使用する際は __<a href="parameters/contactFields.html">contactFields</a>__ パラメーターに検索フィールドを指定します。 __<a href="parameters/contactFields.html">contactFields</a>__ パラメーターに渡したフィールドだけが、 `<a href="Contact/contact.html">Contact</a>` オブジェクトのプロパティーとして __<a href="parameters/contactSuccess.html">contactSuccess</a>__ コールバック関数に渡されます。 __<a href="parameters/contactFields.html">contactFields</a>__ パラメーターが空の場合は、 `id` プロパティーのみを持つ `<a href="Contact/contact.html">Contact</a>` オブジェクト配列が作成されます。 __<a href="parameters/contactFields.html">contactFields</a>__ の値が["*"]の場合は、全ての連絡先フィールドが返されます。

連絡先データベースの問い合わせの際には、 __<a href="parameters/contactFindOptions.html">contactFindOptions</a>.filter__ を用いて検索条件を絞ることが出来ます。このオプションが指定されていた場合、大文字小文字の区別なく、部分一致方式により __<a href="parameters/contactFields.html">contactFields</a>__ パラメーターに指定されたフィールドの検索が行われます。いずれかのフィールドにマッチした内容があった場合、その連絡先情報が返されます。

パラメーター
----------

- __<a href="parameters/contactFields.html">contactFields</a>:__ 検索条件に格納されるフィールドを指定します。このパラメーターに定義されたフィールドのみが `<a href="Contact/contact.html">Contact</a>` オブジェクトにセットされます。 _(DOMString[])_ [必須]
- __<a href="parameters/contactSuccess.html">contactSuccess</a>:__ 連絡先データベースへの問い合わせに成功した場合に呼び出されるコールバック関数を指定します [必須]
- __<a href="parameters/contactError.html">contactError</a>:__ エラーコールバック関数を指定します。連絡先データベースへの問い合わせに失敗した場合に呼び出されます [任意]
- __<a href="parameters/contactFindOptions.html">contactFindOptions</a>:__ 連絡先情報に絞り込み検索を行うための検索オプションを指定します [任意]

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    function onSuccess(contacts) {
        alert(contacts.length + '  件の連絡先が見つかりました。');
    };

    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('エラーが発生しました。');
    };

    // Bob という名前が含まれる全ての連絡先を取得
    var options = new <a href="Contact/contact.html">Contact</a>FindOptions();
    options.filter="Bob";
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="Contact/contact.html">Contact</a> の<a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // Bob という名前が含まれる全ての連絡先を取得
            var options = new <a href="Contact/contact.html">Contact</a>FindOptions();
            options.filter="Bob";
            var fields = ["displayName", "name"];
            navigator.contacts.find(fields, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                console.log("表示名 = " + contacts[i].displayName);
            }
        }

        // onError: 連絡先の取得に失敗した場合
        //
        function onError(<a href="parameters/contactError.html">contactError</a>) {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <h1><a href="../storage/storage.opendatabase.html">使用例</a></h1>
        <p>連絡先の検索</p>
      </body>
    </html>


