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

Contact
=======

連絡先に格納された情報を表します。

プロパティー
----------

- __id:__ 固定のIDを表します _(DOMString)_
- __displayName:__ 連絡先の名称を表します _(DOMString)_
- __name:__ 個人名に関するオブジェクトを表します _(ContactName)_
- __nickname:__ ニックネームを表します _(DOMString)_
- __phoneNumbers:__ 連絡先のすべての電話番号の配列を表します _(ContactField[])_
- __emails:__ 連絡先のすべてのメールアドレスの配列を表します _(ContactField[])_
- __addresses:__ 連絡先のすべての住所の配列を表します _(ContactAddress[])_
- __ims:__ 連絡先のすべてのIMアドレスの配列を表します _(ContactField[])_
- __organizations:__ 連絡先のすべての組織名の配列を表します _(ContactOrganization[])_
- __birthday:__ 連絡先の誕生日を表します _(Date)_
- __note:__ 連絡先のメモを表します _(DOMString)_
- __photos:__ 連絡先の写真の配列を表します _(ContactField[])_
- __categories:__ 連絡先のユーザー定義カテゴリーの配列を表します _(ContactField[])_
- __urls:__ 連絡先に関連したURLの配列を表します _(ContactField[])_

メソッド
-------

- __clone__: オブジェクトのディープコピーを行い、新しい Contact オブジェクトを作成して返します。 id プロパティーは `null` に設定されます。
- __remove__: オブジェクトを連絡先データベースから削除します。 削除が失敗した場合は `ContactError` を伴ったエラーコールバック関数が呼び出されます。
- __save__: 新しい連絡先を連絡先データベースに保存します。 __id__ が既に登録されている場合は連絡先データベースを上書きします。


詳細
-------

`Contact` オブジェクトはユーザーの連絡先を格納します。 連絡先はデバイスの連絡先データベースから作成したり、保存したり、削除することが可能です。 `contacts.find` 関数を呼ぶことで、連絡先データベースから連絡先を取得することも出来ます。

_注意: プラットフォームによっては、いくつかのフィールドがサポートされていない場合があります。プラットフォームごとの注意点に詳細を記載しています。_

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

保存する例
------------------

    function onSuccess(contact) {
        alert("保存に成功しました。");
    };

    function onError(contactError) {
        alert("エラー = " + contactError.code);
    };

    // 新しい連絡先オブジェクトを作成
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";       // すべてのデバイスに対応するため、両方の項目をセット

    // その他のフィールドを作成
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;

    // デバイスに保存
    contact.save(onSuccess,onError);

コピーを行う例
-------------------

    // 連絡先オブジェクトをコピー
    var clone = contact.clone();
    clone.name.givenName = "John";
    console.log("元の名前 = " + contact.name.givenName);
    console.log("クローンの名前 = " + clone.name.givenName);

削除を行う例
--------------------

    function onSuccess() {
        alert("削除に成功しました。");
    };

    function onError(contactError) {
        alert("エラー = " + contactError.code);
    };

    // デバイスから連絡先を削除
    contact.remove(onSuccess,onError);

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
            // 作成
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";       // すべてのデバイスに対応するため、両方の項目をセット
            var name = new ContactName();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;

            // 保存
            contact.save(onSaveSuccess,onSaveError);

            // クローンを作成
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("元の名前 = " + contact.name.givenName);
            console.log("クローンの名前 = " + clone.name.givenName);

            // 削除
            contact.remove(onRemoveSuccess,onRemoveError);
        }

        // onSaveSuccess: 連絡先の取得に成功した場合
        //
        function onSaveSuccess(contact) {
            alert("保存に成功しました。");
        }

        // onSaveError: 連絡先の取得に失敗した場合
        //
        function onSaveError(contactError) {
            alert("エラー = " + contactError.code);
        }

        // onRemoveSuccess: 連絡先の取得に成功した場合
        //
        function onRemoveSuccess(contacts) {
            alert("削除に成功しました。");
        }

        // onRemoveError: 連絡先の取得に失敗した場合
        //
        function onRemoveError(contactError) {
            alert("エラー = " + contactError.code);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>連絡先の検索</p>
      </body>
    </html>

Android 2.X に関する注意点
------------------

- __categories:__ このプロパティーは Android 2.X ではサポートされておらず、常に `null` を返します。

Android 1.X に関する注意点
------------------

- __name:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __nickname:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __birthday:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __photos:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __categories:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __urls:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。


BlackBerry WebWorks (OS 5.0 and higher) に関する注意点
---------------------------------------------

- __id:__ サポートされています。 連絡先が保存されたときに、デバイスによって割り当てられます。
- __displayName:__ サポートされています。 BlackBerry では __user1__ フィールドとして保存されます。
- __nickname:__ このプロパティーはサポートされておらず、常に `null` を返します。.
- __phoneNumbers:__ 部分的にサポートされています。 BlackBerry では、電話番号はもし _type_ が 'home' の場合は __homePhone1__と __homePhone2__ に、 _type_ が 'work' の場合は __workPhone1__ と __workPhone2__ に、 _type_ が 'mobile' の場合は __mobilePhone__ に、 _type_ が 'fax' の場合は __faxPhone__ に、 _type_ が 'pager' の場合は __pagerPhone__ に、それ以外の場合は __otherPhone__ に保存されます。
- __emails:__ 部分的にサポートされています。 BlackBerry では、最初の3メールアドレスが __email1__, __email2__, __email3__ フィールドに保存されます。
- __addresses:__ 部分的にサポートされています。 BlackBerry では、最初の2つの住所が __homeAddress__ と __workAddress__ フィールドに保存されます。
- __ims:__ このプロパティーはサポートされておらず、常に `null` を返します。
- __organizations:__ 部分的にサポートされています。 BlackBerry では、最初の組織の名前とタイトルが __company__ と __title__ フィールドに保存されます。
- __photos:__ 部分的にサポートされています。 サムネイルサイズの写真のみサポートされています。 連絡先に写真を登録する場合、 Base64 エンコードされたイメージか、イメージの場所を指定する URL を渡します。 写真は BlackBerry の連絡先データベースに保存される前に縮小されます。 連絡先写真は Base64 エンコードされたイメージとして返されます。
- __categories:__ 部分的にサポートされています。 'Business' と 'Personal' カテゴリーのみサポートされています。
- __urls:__ 部分的にサポートされています。 BlackBerry では、最初の URL が __webpage__ フィールドに保存されます。

iOS に関する注意点
----------
- __displayName:__ このプロパティーは iOS ではサポートされておらず、 ContactName が指定されていない場合限り `null` を返します。 もし ContactName が指定されていない場合、合成された名前、 __nickname__ 、または "" が __displayName__ として返されます。
- __birthday:__ 入力として、このプロパティーは JavaScript の Date オブジェクトとして指定する必要があります。 JavaScript の Date オブジェクトとして返されます。
- __photos:__  取得した写真はアプリの一時ディレクトリに保存され、写真への File URL が返されます。一時ディレクトリの中身はアプリを終了する際に削除されます。
- __categories:__ このプロパティーはサポートされておらず、常に `null` を返します。

Bada に関する注意点
-----------

- __displayName:__ このプロパティーはサポートされていません。
- __birthday:__ このプロパティーはサポートされていません。
- __photos:__ このプロパティーは写真へのURL1つを格納したリストです。
- __categories:__ このプロパティーはサポートされていません。
- __ims:__ このプロパティーはサポートされていません。
