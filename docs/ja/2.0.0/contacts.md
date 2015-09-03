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


Contacts
========

> `contacts` オブジェクトを通じて、デバイスの連絡先データベースにアクセスできます。

メソッド
-------

- contacts.create
- contacts.find

引数
---------

- contactFields
- contactSuccess
- contactError
- contactFindOptions

オブジェクト
-------

- Contact
- ContactName
- ContactField
- ContactAddress
- ContactOrganization
- ContactFindOptions
- ContactError

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Contacts" value="org.apache.cordova.ContactManager" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.GET_ACCOUNTS" />
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <uses-permission android:name="android.permission.WRITE_CONTACTS" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>ADDRESSBOOK</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Contact" value="org.apache.cordova.pim.Contact" />

#### www/config.xml

    <feature id="blackberry.find"        required="true" version="1.0.0.0" />
    <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
    <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
    <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Contacts</key>
        <string>CDVContacts</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_CONTACTS" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)



contacts.create
===============

新しい Contact オブジェクトを作成します。

    var contact = navigator.contacts.create(properties);

概要
-----------

contacts.create 関数は、新しい `Contact` オブジェクトを同期的に作成します。

この関数で作成した Contact オブジェクトは、デバイスの連絡先データベースには残りません。 Contact オブジェクトをデバイスに保存するには、 `Contact.save` 関数を使用します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    var myContact = navigator.contacts.create({"displayName": "Test User"});

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "この連絡先のメモ";
            console.log("連絡先, " + myContact.displayName + ", メモ: " + myContact.note);
        }


        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>連絡先を作成します</p>
      </body>
    </html>



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
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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



ContactAddress
==============

`Contact` オブジェクトの住所プロパティーを表します。

プロパティー
----------
- __pref:__ `ContactAddress` がユーザーの推奨値を含むかどうかを表します。含む場合、 `true` がセットされます _(boolean)_
- __type:__ フィールドのタイプを表します (例: 'home') _(DOMString)_
- __formatted:__ 住所全体を表します _(DOMString)_
- __streetAddress:__ 番地を表します _(DOMString)_
- __locality:__ 都市名を表します _(DOMString)_
- __region:__ 地域名を表します _(DOMString)_
- __postalCode:__ 郵便番号を表します _(DOMString)_
- __country:__ 国を表します _(DOMString)_

詳細
-------

`ContactAddress` オブジェクトは連絡先の住所に関するプロパティーを表します。 `Contact` オブジェクトは、複数の住所が格納された `ContactAddress[]` 配列を保持しています。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    // すべての連絡先の住所情報を取得し、表示します
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            for (var j=0; j<contacts[i].addresses.length; j++) {
                alert("推奨値: " + contacts[i].addresses[j].pref + "\n" +
                        "タイプ: " + contacts[i].addresses[j].type + "\n" +
                        "住所: " + contacts[i].addresses[j].formatted + "\n" +
                        "番地: " + contacts[i].addresses[j].streetAddress + "\n" +
                        "都市名: " + contacts[i].addresses[j].locality + "\n" +
                        "地域名: " + contacts[i].addresses[j].region + "\n" +
                        "郵便番号: " + contacts[i].addresses[j].postalCode + "\n" +
                        "国名: " + contacts[i].addresses[j].country);
            }
        }
    };

    function onError(contactError) {
        alert('エラーが発生しました。');
    };

    // 連絡先を検索します
    var options = new ContactFindOptions();
    options.filter="";
    var filter = ["displayName","addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // find all contacts
            var options = new ContactFindOptions();
            options.filter="";
            var filter = ["displayName","addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            // すべての連絡先の住所情報を取得し、表示します
            for (var i=0; i<contacts.length; i++) {
                for (var j=0; j<contacts[i].addresses.length; j++) {
                    alert("推奨値: " + contacts[i].addresses[j].pref + "\n" +
                            "タイプ: " + contacts[i].addresses[j].type + "\n" +
                            "住所: " + contacts[i].addresses[j].formatted + "\n" +
                            "番地: " + contacts[i].addresses[j].streetAddress + "\n" +
                            "都市名: " + contacts[i].addresses[j].locality + "\n" +
                            "地域名: " + contacts[i].addresses[j].region + "\n" +
                            "郵便番号: " + contacts[i].addresses[j].postalCode + "\n" +
                            "国名: " + contacts[i].addresses[j].country);
                }
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

Android 2.X に関する注意点
------------------

- __pref:__ このプロパティーは Android 2.X ではサポートされておらず、常に `false` を返します。

Android 1.X に関する注意点
------------------

- __pref:__ このプロパティーは Android 1.X ではサポートされておらず、常に `false` を返します。
- __type:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __streetAddress:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __locality:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __region:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __postalCode:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __country:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。

BlackBerry WebWorks (OS 5.0 and higher) に関する注意点
--------------------------------------------

- __pref:__ このプロパティーは BlackBerry ではサポートされておらず、常に `false` を返します。
- __type:__ 部分的にサポートされています。 一つの連絡先につき、一つずつの "Work" と "Home" タイプの住所が保存できます。
- __formatted:__ 部分的にサポートされています。 BlackBerry のアドレスフィールドの連結を返します。
- __streetAddress:__ サポートされています。 BlackBerry の __address1__ と __address2__ アドレスフィールドの連結を返します。
- __locality:__ サポートされています。 BlackBerry の __city__ アドレスフィールドに保存されます。
- __region:__ サポートされています。 BlackBerry の __stateProvince__ アドレスフィールドに保存されます。
- __postalCode:__ サポートされています。 BlackBerry の __zipPostal__ アドレスフィールドに保存されます。
- __country:__ サポートされています。

iOS に関する注意点
----------

- __pref:__ このプロパティーは iOS ではサポートされておらず、常に `false` を返します。
- __formatted:__ サポートされていません。

Bada に関する注意点
-----------
- __formatted:__ このプロパティーはサポートされていません。
- __type:__ WORK か HOME かのいずれかである必要があります。



ContactField
============

`Contact` オブジェクトで使用される汎用フィールドに用いられます。 `ContactField` オブジェクトとして格納されるデータとしては、メールアドレスや電話番号などが挙げられます。

プロパティー
----------

- __type:__ フィールドのタイプを表します (例: 'home') _(DOMString)_
- __value:__ フィールド値を表します (例: 電話番号、メールアドレス) _(DOMString)_
- __pref:__ `ContactField` がユーザーの推奨値を含むかどうかを表します。含む場合、 `true` がセットされます _(boolean)_

詳細
-------

`ContactField` オブジェクトは、連絡先の各フィールドを汎用的に格納するためのコンポーネントです。各 `ContactField` オブジェクトは、 value プロパティ、 type プロパティ、 pref プロパティーを持っています。 `Contact` オブジェクトは電話番号やメールアドレスなどといった複数のプロパティーを `ContactField[]` 配列に保存しています。

多くの場合 `ContactField` オブジェクトの __type__ 属性に定義済みの値は存在しません。例えば、電話番号について __type__ 属性の値として 'home', 'work', 'mobile', 'iPhone' など、デバイスのプラットフォームに応じて異なった値が格納されます。ただし `Contact` の __photos__ フィールドに限り、 __type__ 属性には画像フォーマットが格納されます。 Cordova は __value__ 属性が画像への URL を含む場合、 __type: 'url'__ を返します。 __value__ 属性が Base64 形式の画像を含む場合、 __type: 'base64'__ を返します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    // 新しい連絡先を作成
    var contact = navigator.contacts.create();

    // 連絡先の電話番号を ContactField[] に格納
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
    phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // 推奨された電話番号
    phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
    contact.phoneNumbers = phoneNumbers;

    // 連絡先を保存
    contact.save();

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // 新しい連絡先を作成
            var contact = navigator.contacts.create();

            // 連絡先の電話番号を ContactField[] に格納
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // 推奨された電話番号
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;

            // 連絡先を保存
            contact.save();

            // 連絡先を検索し、名前と電話番号を表示
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
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



ContactFindOptions
==================

`contacts.find` 関数の検索結果を絞るために使用するプロパティーを表します。

プロパティー
----------

- __filter:__ 絞り込み検索用の文字列を指定します _(DOMString)_ (デフォルト: "")
- __multiple:__ 検索時に複数の連絡先を返すかどうかを指定します _(Boolean)_ (デフォルト: false)


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    // 呼び出し成功
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };

    // 呼び出し失敗
    function onError(contactError) {
        alert('エラーが発生しました。');
    };

    // 検索条件を指定
    var options = new ContactFindOptions();
    options.filter="";          // 空のサーチは全ての連絡先を返す
    options.multiple=true;      // 複数の結果を返す
    filter = ["displayName"];   // contact.displayName フィールドを返す

    // 連絡先を検索します
    navigator.contacts.find(filter, onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // 検索条件を指定
            var options = new ContactFindOptions();
            options.filter="";          // 空のサーチは全ての連絡先を返す
            options.multiple=true;      // 複数の結果を返す
            filter = ["displayName"];   // contact.displayName フィールドを返す

            // 連絡先を検索します
            navigator.contacts.find(filter, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
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

Bada に関する注意点
-----------
__filter:__ このプロパティーには次の値のみ適用できます: "firstName", "lastName", "nickname", "phoneNumber", "email", "address"



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

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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



ContactOrganization
===================

`Contact` オブジェクトの組織プロパティーを表します。

プロパティー
----------
- __pref:__ `ContactOrganization` がユーザーの推奨値を含むかどうかを表します。含む場合、 `true` がセットされます _(boolean)_
- __type:__ フィールドのタイプを表します (例: 'home') _(DOMString)_
- __name:__ 組織名を表します _(DOMString)_
- __department:__ 部署名を表します _(DOMString)_
- __title:__ 役職名を表します _(DOMString)_

詳細
-------

`ContactOrganization` オブジェクトは連絡先の組織情報を表します。 `Contact` オブジェクトは複数の `ContactOrganization` オブジェクトを配列に保持します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2

使用例
-------------

    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            for (var j=0; j<contacts[i].organizations.length; j++) {
                alert("推奨値: " + contacts[i].organizations[j].pref + "\n" +
                        "タイプ: " + contacts[i].organizations[j].type + "\n" +
                        "組織名: " + contacts[i].organizations[j].name + "\n" +
                        "部署名: " + contacts[i].organizations[j].department + "\n" +
                        "役職名: " + contacts[i].organizations[j].title);
            }
        }
    };

    function onError(contactError) {
        alert('エラーが発生しました。');
    };

    var options = new ContactFindOptions();
    options.filter="";
    filter = ["displayName","organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                for (var j=0; j<contacts[i].organizations.length; j++) {
                    alert("推奨値: " + contacts[i].organizations[j].pref + "\n" +
                            "タイプ: " + contacts[i].organizations[j].type + "\n" +
                            "組織名: " + contacts[i].organizations[j].name + "\n" +
                            "部署名: " + contacts[i].organizations[j].department + "\n" +
                            "役職名: " + contacts[i].organizations[j].title);
                }
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


Android 2.X に関する注意点
------------------

- __pref:__ このプロパティーは Android 2.X ではサポートされておらず、常に `false` を返します。

Android 1.X に関する注意点
------------------

- __pref:__ このプロパティーは Android 1.X ではサポートされておらず、常に `false` を返します。
- __type:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __title:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。

BlackBerry WebWorks (OS 5.0 and higher) に関する注意点
--------------------------------------------
- __pref:__ このプロパティーは BlackBerry ではサポートされておらず、常に `false` を返します。
- __type:__ このプロパティーは BlackBerry ではサポートされておらず、常に `null` を返します。
- __name:__ 部分的にサポートされています。一つ目の組織名が BlackBerry の __company__ フィールドに保存されます。
- __department:__ このプロパティーはサポートされておらず、常に `null` を返します。
- __title:__ 部分的にサポートされています。一つ目の役職名が BlackBerry の __jobTitle__ フィールドに保存されます。

iOS に関する注意点
-----------
- __pref:__ このプロパティーは iOS ではサポートされておらず、常に `false` を返します。
- __type:__ このプロパティーは iOS ではサポートされておらず、常に `null` を返します。
- __name:__ 部分的にサポートされています。一つ目の組織名が iOS の __kABPersonOrganizationProperty__ フィールドに保存されます。
- __department__: 部分的にサポートされています。一つ目の部署名が iOS の __kABPersonDepartmentProperty__ フィールドに保存されます。
- __title__: 部分的にサポートされています。一つ目の役職名が iOS の __kABPersonJobTitleProperty__ フィールドに保存されます。

Bada 2.0 に関する注意点
---------------
- ContactOrganization はサポートされていません。



ContactError
========

`ContactError` オブジェクトは、エラーが発生したときに `contactError` コールバック関数に渡されるオブジェクトです。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します

定数
---------

- `ContactError.UNKNOWN_ERROR`
- `ContactError.INVALID_ARGUMENT_ERROR`
- `ContactError.TIMEOUT_ERROR`
- `ContactError.PENDING_OPERATION_ERROR`
- `ContactError.IO_ERROR`
- `ContactError.NOT_SUPPORTED_ERROR`
- `ContactError.PERMISSION_DENIED_ERROR`

概要
-----------

`ContactError` オブジェクトは、エラーが発生したときに `contactError` コールバック関数に渡されるオブジェクトです。




contactSuccess
==============

`contacts.find` メソッドの実行に成功した場合に呼び出される、 `Contact` 配列を提供するコールバック関数です。

    function(contacts) {
        // 任意のコード
    }

パラメーター
----------

- __contacts:__ 検索の結果の連絡先配列 (`Contact`)

使用例
-------

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("表示名 = " + contacts[i].displayName);
        }
    }



contactError
============

連絡先情報の取得に失敗したときに呼び出されるコールバック関数です。

    function(error) {
        // エラー処理
    }



contactFields
=============

`contacts.find` メソッドを使用する際の必須パラメーターです。このパラメーターを使って、検索操作によって得られる `Contact` オブジェクトが持つフィールドを指定します。

    ["name", "phoneNumbers", "emails"]



contactFindOptions
==================

`contacts.find` メソッドを使用する際のオプションのパラメーターです。連絡先の検索時にフィルターをかける場合に使用します。

    {
        filter: "",
        multiple: true,
    };

オプション
-------

- __filter:__ 絞り込み検索用の文字列を指定します _(DOMString)_ (デフォルト: "")
- __multiple:__ 検索時に複数の連絡先を返すかどうかを指定します _(Boolean)_ (デフォルト: false)


