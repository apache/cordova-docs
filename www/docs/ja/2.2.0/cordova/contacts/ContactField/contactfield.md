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

<a href="../Contact/contact.html">Contact</a>Field
============

`<a href="../Contact/contact.html">Contact</a>` オブジェクトで使用される汎用フィールドに用いられます。 `<a href="../Contact/contact.html">Contact</a>Field` オブジェクトとして格納されるデータとしては、メールアドレスや電話番号などが挙げられます。

プロパティー
----------

- __type:__ フィールドのタイプを表します (例: 'home') _(DOMString)_
- __value:__ フィールド値を表します (例: 電話番号、メールアドレス) _(DOMString)_
- __pref:__ `<a href="../Contact/contact.html">Contact</a>Field` がユーザーの推奨値を含むかどうかを表します。含む場合、 `true` がセットされます _(boolean)_

詳細
-------

`<a href="../Contact/contact.html">Contact</a>Field` オブジェクトは、連絡先の各フィールドを汎用的に格納するためのコンポーネントです。各 `<a href="../Contact/contact.html">Contact</a>Field` オブジェクトは、 value プロパティ、 type プロパティ、 pref プロパティーを持っています。 `<a href="../Contact/contact.html">Contact</a>` オブジェクトは電話番号やメールアドレスなどといった複数のプロパティーを `<a href="../Contact/contact.html">Contact</a>Field[]` 配列に保存しています。

多くの場合 `<a href="../Contact/contact.html">Contact</a>Field` オブジェクトの __type__ 属性に定義済みの値は存在しません。例えば、電話番号について __type__ 属性の値として 'home', 'work', 'mobile', 'iPhone' など、デバイスのプラットフォームに応じて異なった値が格納されます。ただし `<a href="../Contact/contact.html">Contact</a>` の __photos__ フィールドに限り、 __type__ 属性には画像フォーマットが格納されます。 Cordova は __value__ 属性が画像への URL を含む場合、 __type: 'url'__ を返します。 __value__ 属性が Base64 形式の画像を含む場合、 __type: 'base64'__ を返します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

<a href="../../storage/storage.opendatabase.html">使用例</a>
-------------

    // 新しい連絡先を作成
    var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();

    // 連絡先の電話番号を <a href="../Contact/contact.html">Contact</a>Field[] に格納
    var phoneNumbers = [];
    phoneNumbers[0] = new <a href="../Contact/contact.html">Contact</a>Field('work', '212-555-1234', false);
    phoneNumbers[1] = new <a href="../Contact/contact.html">Contact</a>Field('mobile', '917-555-5432', true); // 推奨された電話番号
    phoneNumbers[2] = new <a href="../Contact/contact.html">Contact</a>Field('home', '203-555-7890', false);
    contact.phoneNumbers = phoneNumbers;

    // 連絡先を保存
    contact.save();

詳細な<a href="../../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../Contact/contact.html">Contact</a> の<a href="../../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            // 新しい連絡先を作成
            var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();

            // 連絡先の電話番号を <a href="../Contact/contact.html">Contact</a>Field[] に格納
            var phoneNumbers = [];
            phoneNumbers[0] = new <a href="../Contact/contact.html">Contact</a>Field('work', '212-555-1234', false);
            phoneNumbers[1] = new <a href="../Contact/contact.html">Contact</a>Field('mobile', '917-555-5432', true); // 推奨された電話番号
            phoneNumbers[2] = new <a href="../Contact/contact.html">Contact</a>Field('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;

            // 連絡先を保存
            contact.save();

            // 連絡先を検索し、名前と電話番号を表示
            var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
            options.filter="";
            filter = ["displayName","phoneNumbers"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                // 電話番号を表示
                for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
                    alert("タイプ: " + contacts[i].phoneNumbers[j].type + "\n" +
                            "値: "  + contacts[i].phoneNumbers[j].value + "\n" +
                            "Preferred: "  + contacts[i].phoneNumbers[j].pref);
                }
            }
        };
        // onError: 連絡先の取得に失敗した場合
        //
        function onError(<a href="../parameters/contactError.html">contactError</a>) {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">使用例</a></h1>
        <p>連絡先の検索</p>
      </body>
    </html>

Android に関する注意点
--------------

- __pref:__ このプロパティーは Android ではサポートされておらず、常に `false` を返します。

BlackBerry WebWorks (OS 5.0 and higher) に関する注意点
--------------------------------------------

- __type:__ 部分的にサポートされています。電話番号に使われます。
- __value:__ サポートされています。
- __pref:__ このプロパティーはサポートされておらず、常に `false` を返します。

iOS に関する注意点
-----------

- __pref:__ このプロパティーは iOS ではサポートされておらず、常に `false` を返します。

Bada に関する注意点
-----------
- __type:__ メールアドレス または 住所 フィールドの場合、プロパティーは次のいずれかである必要があります: "WORK", "HOME"。電話フィールドの場合、プロパティーは次のいずれかである必要があります: "WORK", "HOME", "VOICE", "FAX", "MSG", "CELL", "PAGER", "BBS", "MODEM", "CAR", "ISDN","VIDEO", "PCS"。
