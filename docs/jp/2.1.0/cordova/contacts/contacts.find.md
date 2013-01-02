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

contacts.find
=============

デバイスの連絡先データベースに問い合わせを行い、 `Contact` オブジェクトを取得します。

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);

概要
-----------

contacts.find 関数は、デバイスの連絡先データベースに問い合わせを行い、 `Contact` オブジェクトの配列を返す非同期関数です。 作成されたオブジェクトは __contactSuccess__ に従って `contactSuccess` コールバック関数に送られます。

このメソッドを使用する際は __contactFields__ パラメーターに検索フィールドを指定します。 __contactFields__ パラメーターに渡したフィールドだけが、 `Contact` オブジェクトのプロパティーとして __contactSuccess__ コールバック関数に渡されます。 __contactFields__ パラメーターが空の場合は、 `id` プロパティーのみを持つ `Contact` オブジェクト配列が作成されます。 __contactFields__ の値が["*"]の場合は、全ての連絡先フィールドが返されます。

連絡先データベースの問い合わせの際には、 __contactFindOptions.filter__ を用いて検索条件を絞ることが出来ます。このオプションが指定されていた場合、大文字小文字の区別なく、部分一致方式により __contactFields__ パラメーターに指定されたフィールドの検索が行われます。いずれかのフィールドにマッチした内容があった場合、その連絡先情報が返されます。

パラメーター
----------

- __contactFields:__ 検索条件に格納されるフィールドを指定します。このパラメーターに定義されたフィールドのみが `Contact` オブジェクトにセットされます。 _(DOMString[])_ [必須]
- __contactSuccess:__ 連絡先データベースへの問い合わせに成功した場合に呼び出されるコールバック関数を指定します [必須]
- __contactError:__ エラーコールバック関数を指定します。連絡先データベースへの問い合わせに失敗した場合に呼び出されます [任意]
- __contactFindOptions:__ 連絡先情報に絞り込み検索を行うための検索オプションを指定します [任意]

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    function onSuccess(contacts) {
        alert(contacts.length + '  件の連絡先が見つかりました。');
    };

    function onError(contactError) {
        alert('エラーが発生しました。');
    };

    // Bob という名前が含まれる全ての連絡先を取得
    var options = new ContactFindOptions();
    options.filter="Bob";
    options.multiple=true;
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // Bob という名前が含まれる全ての連絡先を取得
            var options = new ContactFindOptions();
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
        function onError(contactError) {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>連絡先の検索</p>
      </body>
    </html>


