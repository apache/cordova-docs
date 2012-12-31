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

ContactName
===========

`Contact` オブジェクトの名前プロパティーを表します。

プロパティー
----------

- __formatted:__ 連絡先のフルネームを表します _(DOMString)_
- __familyName:__ 連絡先の姓を表します _(DOMString)_
- __givenName:__ 連絡先の名を表します _(DOMString)_
- __middleName:__ 連絡先のミドルネームを表します _(DOMString)_
- __honorificPrefix:__ 連絡先の接頭敬称を表します (例: Mr. Dr.) _(DOMString)_
- __honorificSuffix:__ 連絡先の接尾敬称を表します (例: Esq.) _(DOMString)_

詳細
-------

`ContactName` オブジェクトは連絡先の名前プロパティーの情報を格納します。

サポートされているプラットフォーム
-------------------

- Android 2.X
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert("名前: " + contacts[i].name.formatted + "\n" +
                    "姓: " + contacts[i].name.familyName + "\n" +
                    "名: " + contacts[i].name.givenName + "\n" +
                    "ミドルネーム: " + contacts[i].name.middleName + "\n" +
                    "接頭敬称: " + contacts[i].name.honorificSuffix + "\n" +
                    "接尾敬称: " + contacts[i].name.honorificSuffix);
        }
    };

    function onError(contactError) {
        alert('エラーが発生しました。');
    };

    var options = new ContactFindOptions();
    options.filter="";
    filter = ["displayName","name"];
    navigator.contacts.find(filter, onSuccess, onError, options);

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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert("名前: " + contacts[i].name.formatted + "\n" +
                        "姓: " + contacts[i].name.familyName + "\n" +
                        "名: " + contacts[i].name.givenName + "\n" +
                        "ミドルネーム: " + contacts[i].name.middleName + "\n" +
                        "接頭敬称: " + contacts[i].name.honorificSuffix + "\n" +
                        "接尾敬称: " + contacts[i].name.honorificSuffix);
            }
        };

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

Android に関する注意点
------------
- __formatted:__ 部分的にサポートされています。 honorificPrefix, givenName, middleName, familyName, honorificSuffix を連結したものを返しますが、保存は行われません。

BlackBerry WebWorks (OS 5.0 and higher) に関する注意点
---------------------------------------------

- __formatted:__ 部分的にサポートされています。 BlackBerry の __firstName__ と __lastName__ フィールドを連結したものを返します。
- __familyName:__ サポートされています。 BlackBerry の __lastName__ フィールドに保存されています。
- __givenName:__ サポートされています。 BlackBerry の __firstName__ フィールドに保存されています。
- __middleName:__ このプロパティーはサポートされておらず、常に `null` を返します。
- __honorificPrefix:__ このプロパティーはサポートされておらず、常に `null` を返します。
- __honorificSuffix:__ このプロパティーはサポートされておらず、常に `null` を返します。

iOS に関する注意点
------------
- __formatted:__ 部分的にサポートされています。 iOS の合成名を返しますが、保存は行われません。

Bada に関する注意点
-----------
- __formatted:__ サポートされていません。
- __middleName:__ サポートされていません。
_ __honorificPrefix:__ サポートされていません。
- __honorificSuffix:__ サポートされていません。
