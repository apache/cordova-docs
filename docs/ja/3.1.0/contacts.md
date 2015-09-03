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


# 連絡先

> `contacts`オブジェクトは、デバイスの連絡先データベースへのアクセスを提供します。

**重要なプライバシーの注意：**連絡先データの収集と利用を重要なプライバシーの問題を発生させます。 アプリのプライバシー ポリシー アプリが連絡先データを使用する方法と、他の当事者では共有されているかどうかを話し合う必要があります。 人誰と通信する人々 を明らかにするために、連絡先情報が機密と見なされます。 したがって、アプリのプライバシー ポリシーに加えて、強くする必要がありますアプリへのアクセスまたはを使用して連絡先データをデバイス オペレーティング システムしないので既に) の前に - 時間の通知を行うこと。 その通知は、上記の (例えば、 **[ok]**を**おかげで**選択肢を提示する) によってユーザーのアクセス許可を取得するだけでなく、同じ情報を提供する必要があります。 いくつかのアプリのマーケットプ レース - 時間の通知を提供して、連絡先データにアクセスする前のユーザーのアクセス許可を取得するアプリをする必要がありますに注意してください。 データはユーザーの混乱を避けるために役立つ連絡先の使用および連絡先データの知覚の誤用を囲む明確でわかりやすいユーザー エクスペリエンス。 詳細については、プライバシーに関するガイドを参照してください。

## メソッド

*   contacts.create
*   contacts.find

## 引数

*   連絡先
*   contactSuccess
*   contactError
*   contactFindOptions

## オブジェクト

*   お問い合わせ
*   得意先コード
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   iOS （`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


# contacts.create

新しい連絡先オブジェクトを返します。

    var contact = navigator.contacts.create(properties);
    

## 説明

`contacts.create`メソッドは同期的にし、新しいを返します `Contact` オブジェクト。

このメソッドを呼び出す必要があるデバイスの連絡先データベースに連絡先オブジェクトを保持しない、 `Contact.save` メソッド。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8

## 簡単な例

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "This contact has a note.";
            console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>


# contacts.find

デバイスの連絡先データベースに照会し、1 つまたは複数を返します `Contact` オブジェクトは、指定されたフィールドを含む各。

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## 説明

`contacts.find`デバイスの連絡先データベースをクエリの配列を返すメソッドは、非同期的に実行されます `Contact` オブジェクト。 結果として得られるオブジェクトに渡される、 `contactSuccess` 、 **contactSuccess**パラメーターで指定されたコールバック関数。

**連絡先**パラメーター検索の修飾子として使用するフィールドを指定してだけこれらの結果は**contactSuccess**コールバック関数に渡されます。 **連絡先**のゼロ長さのパラメーターが無効である結果 `ContactError.INVALID_ARGUMENT_ERROR` 。 **連絡先**値 `"*"` すべての連絡先フィールドを返します。

**ContactFindOptions.filter**文字列の連絡先データベースを照会するときに検索フィルターとして使用できます。 指定した場合、大文字と小文字、部分的な値の一致する**連絡先**パラメーターで指定されたフィールドごとに適用されます。 一致する*任意*指定のフィールドがある場合は、連絡先が返されます。

## パラメーター

*   **連絡先**: 連絡先検索修飾子として使用するフィールド。結果として `Contact` オブジェクトのみ機能のこれらのフィールドの値。*(DOMString[])*[必須]

*   **contactSuccess**: 連絡先で呼び出される成功コールバック関数は、データベースから返されます。[必須]

*   **contactError**: エラー コールバック関数は、エラーが発生したときに呼び出されます。[オプション]

*   **contactFindOptions**: 検索オプションを連絡先をフィルター処理します。[オプション]

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
                    options.filter = "Bob";
                    var fields = ["displayName", "name"];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }
    
                // onSuccess: Get a snapshot of the current contacts
    
                function onSuccess(contacts) {
                    for (var i = 0; i < contacts.length; i++) {
                        console.log("Display Name = " + contacts[i].displayName);
                    }
                }
    
                // onError: Failed to get the contacts
    
                function onError(contactError) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1>Example</h1>
            <p>Find Contacts</p>
        </body>
    </html>


# お問い合わせ

ユーザーの個人情報やビジネスの連絡先などの連絡先を記述するプロパティが含まれています。

## プロパティ

*   **id**： グローバルに一意の識別子。*（，）*

*   **displayName**: エンドユーザへの表示に適した、この連絡先の名前。*（，）*

*   **名前**： 人の名前のすべてのコンポーネントを格納するオブジェクト。*(ContactName)*

*   **ニックネーム**: 連絡先のアドレスに使用するカジュアルな名前。*（，）*

*   **電話番号**: 連絡先の電話番号の配列。*(ContactField[])*

*   **メール**： 連絡先の電子メール アドレスの配列。*(ContactField[])*

*   **アドレス**: 連絡先のアドレスの配列。*(ContactAddress[])*

*   **ims**： 連絡先の IM アドレスの配列。*(ContactField[])*

*   **組織**: 連絡先の組織の配列。*(ContactOrganization[])*

*   **誕生日**: 連絡先の誕生日。*（日）*

*   **注**: 連絡先についてのメモ。*（，）*

*   **写真**: 連絡先の写真の配列。*(ContactField[])*

*   **カテゴリ**: 取引先担当者に関連付けられているすべてのユーザー定義カテゴリの配列。*(ContactField[])*

*   **url**: 取引先担当者に関連付けられている web ページの配列。*(ContactField[])*

## メソッド

*   **クローン**： 新しいを返します `Contact` と呼び出し元のオブジェクトのディープ コピーであるオブジェクトの `id` プロパティに設定`null`.

*   **削除**: デバイスの連絡先データベースから連絡先を削除します、それ以外の場合のためのエラー コールバックを実行する、 `ContactError` オブジェクト。

*   **保存**: デバイスの連絡先データベースに新しい連絡先を保存または同じ**id**を持つ連絡先が既に存在する場合、既存の連絡先を更新します。

## 詳細

`Contact`オブジェクトは、ユーザーの連絡先を表します。 連絡先の作成、格納、またはデバイスの連絡先データベースから削除することができます。 連絡先も取得できます (個別にまたは一括） をデータベースから呼び出すことによって、 `contacts.find` メソッド。

**注：**すべて上記の連絡先フィールドのすべてのデバイス プラットフォームでサポートされます。詳細については各プラットフォームの*互換*セクションを確認してください。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例を保存します。

    function onSuccess(contact) {
        alert("Save Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save to device
    contact.save(onSuccess,onError);
    

## 簡単な例のクローンを作成します。

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## 簡単な例を削除します。

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new ContactName();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;
    
            // save
            contact.save(onSaveSuccess,onSaveError);
    
            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);
    
            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }
    
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## アンドロイド 2.X 癖

*   **カテゴリ**: 返す 2.X の Android デバイスでサポートされていません`null`.

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **id**: サポートされています。連絡先を保存するときに、デバイスによって割り当てられます。

*   **displayName**: サポートされています。ブラックベリー **user1**フィールドに格納されます。

*   **ニックネーム**: サポートされていないを返す`null`.

*   **電話番号**: 部分的にサポートされます。 電話番号は、*型*が 'ホーム'、 **workPhone1**と**workPhone2** *型*が '仕事'**携帯電話***型*が '携帯電話' の場合の場合、 **faxPhone** *タイプ*が「fax」、 **pagerPhone** *型*は '' ページャー、および**その他の電話***の種類*が上記のいずれの場合場合場合ブラックベリー フィールド**homePhone1**と**homePhone2**に格納されます。

*   **メール**： 部分的にサポートされます。 最初の 3 つの電子メール アドレスはそれぞれブラックベリーの**email1**、 **email2**、および**email3**フィールドに格納されます。

*   **アドレス**: 部分的にサポートされます。最初と 2 番目のアドレスはそれぞれ、ブラックベリー **homeAddress**と**workAddress**フィールドに格納されます。

*   **ims**: サポートされていないを返す`null`.

*   **組織**: 部分的にサポートされます。 **名前**と**タイトル**最初の組織のそれぞれブラックベリー**会社**と**タイトル**のフィールドに格納されます。

*   **写真**： 部分的にサポートされます。 サムネイル サイズの画像を 1 つがサポートされています。 連絡先の写真を設定するには渡す、いずれかで base64 エンコード イメージ、またはイメージを指している URL。 イメージはブラックベリーの連絡先データベースに保存する前に縮小されます。 連絡先の写真が base64 エンコード イメージとして返されます。

*   **カテゴリ**: 部分的にサポートされます。*ビジネス*と*個人*のカテゴリのみがサポートされます。

*   **url**: 部分的にサポートされます。最初の URL は、ブラックベリーの**web ページ**のフィールドに格納されます。

## iOS の癖

*   **displayName**: 返す iOS でサポートされていない `null` がない限り、ない `ContactName` 指定すると、その場合は複合名、**ニックネーム**を返しますまたは `""` 、それぞれ。

*   **誕生日**: JavaScript として入力する必要があります `Date` オブジェクト、同じ方法が返されます。

*   **写真**： アプリケーションの一時ディレクトリに格納されているイメージへのファイルの URL を返します。一時ディレクトリの内容は、アプリケーションの終了時に削除されます。

*   **カテゴリ**: このプロパティは現在サポートされていません、返す`null`.

## Windows Phone 7 と 8 癖

*   **displayName**: 表示名パラメーターの表示名と異なるために提供値を取得、連絡先を検索するとき、連絡先を作成するとき。

*   **url**: 1 つだけが利用できるが、連絡先の作成、ユーザー入力し 1 つ以上の web アドレスを保存するときは、連絡先を検索するとき。

*   **電話番号**:*県*オプションはサポートされていません。 *型*は、*検索*操作ではサポートされていません。 1 つだけ `phoneNumber` は各*タイプ*の許可.

*   **メール**：*県*オプションはサポートされていません。家庭や個人的なメールと同じエントリを参照します。各*タイプ*の 1 つだけのエントリが許可されて.

*   **アドレス**: 仕事とホーム/パーソナル*タイプ*のみをサポートしています。家庭や個人*型*参照して同じアドレス エントリ。各*タイプ*の 1 つだけのエントリが許可されて.

*   **組織**： 1 つだけが許可され、*県*、*タイプ*、および*部門*の属性をサポートしていません。

*   **注**: サポートされていないを返す`null`.

*   **ims**: サポートされていないを返す`null`.

*   **誕生日**: サポートされていないを返す`null`.

*   **カテゴリ**: サポートされていないを返す`null`.


# ContactAddress

アドレスのプロパティを格納する `Contact` オブジェクト。

## プロパティ

*   **県**: に設定されている `true` 場合は、この `ContactAddress` ユーザーの推奨値が含まれています。*(ブール値)*

*   **タイプ**: たとえばフィールドこれは*ホーム*の種類を示す文字列。*（，）*

*   **書式設定**: 表示用にフォーマットの完全なアドレス。*（，）*

*   **番地**： 完全な住所。*（，）*

*   **局所性**: 都市または場所。*（，）*

*   **地域**: 状態または地域。*（，）*

*   **郵便番号**： 郵便番号または郵便番号。*（，）*

*   **国**: 国の名前。*（，）*

## 詳細

`ContactAddress`オブジェクトの連絡先の 1 つのアドレスのプロパティが格納されます。 A `Contact` オブジェクトで 1 つ以上のアドレスを含めることができます、 `ContactAddress[]` 配列。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // display the address information for all contacts
    
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // find all contacts
            var options = new ContactFindOptions();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            // display the address information for all contacts
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].addresses.length; j++) {
                    alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                          "Type: "           + contacts[i].addresses[j].type          + "\n" +
                          "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                          "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                          "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                          "Region: "         + contacts[i].addresses[j].region        + "\n" +
                          "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                          "Country: "        + contacts[i].addresses[j].country);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## アンドロイド 2.X 癖

*   **県**: サポートされていない返す `false` 2.X の Android デバイスで。

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **県**： 戻る、BlackBerry デバイスでサポートされていません`false`.

*   **種類**: 部分的にサポートされます。連絡先ごとの 1 つだけ各*仕事*と*家庭*の種類のアドレスを格納できます。

*   **フォーマット**： 部分的にサポートされます。すべての BlackBerry アドレス フィールドの連結を返します。

*   **番地**： サポートされています。ブラックベリーの**住所 1** **住所 2**の連結アドレス フィールドを返します。

*   **局所性**： サポートされています。ブラックベリー**市**アドレス フィールドに格納されます。

*   **地域**: サポートされています。ブラックベリー **stateProvince**アドレス フィールドに格納されます。

*   **郵便番号**： サポートされています。ブラックベリー **zipPostal**アドレス フィールドに格納されます。

*   **国**: サポートされています。

## iOS の癖

*   **県**: 戻る iOS デバイスでサポートされていません`false`.

*   **フォーマット**: 現在サポートされていません。


# ContactField

一般的なフィールドをサポートしている、 `Contact` オブジェクト。いくつかのプロパティとして格納されている `ContactField` オブジェクトには、電子メール アドレス、電話番号と Url が含まれます。

## プロパティ

*   **タイプ**: たとえばフィールドこれは*ホーム*の種類を示す文字列。*（，）*

*   **値**: 電話番号や電子メール アドレスなど、フィールドの値。*（，）*

*   **県**: に設定されている `true` 場合は、この `ContactField` ユーザーの推奨値が含まれています。*(ブール値)*

## 詳細

`ContactField`オブジェクトは連絡先フィールドを総称を表す再利用可能なコンポーネントです。 各 `ContactField` オブジェクトが含まれています、 `value` 、 `type` 、および `pref` プロパティ。 A `Contact` オブジェクトのいくつかのプロパティに格納されます `ContactField[]` 携帯電話番号、メール アドレスなどの配列。

ほとんどの場合、事前に決められた値がない、 `ContactField` オブジェクトの**type**属性。 たとえば、電話番号が*ホーム*、*仕事*、*モバイル*、 *iPhone*、または特定のデバイス プラットフォームの連絡先データベースでサポートされている他の値の**型**の値を指定できます。 ただし、ため、 `Contact` **写真**] フィールドに、**種類**フィールド、返されるイメージの形式を示します: **url** **値**属性**値**を base64 でエンコードされたイメージの文字列が含まれる場合に写真イメージまたは*base64*に URL が含まれる場合。 

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
    
        function onDeviceReady() {
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in ContactField[]
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new ContactFindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                // display phone numbers
                for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                    alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                          "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                          "Preferred: " + contacts[i].phoneNumbers[j].pref);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Android の癖

*   **県**: サポートされていないを返す`false`.

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **種類**: 部分的にサポートされます。電話番号を使用します。

*   **値**: サポートされています。

*   **県**: サポートされていないを返す`false`.

## iOS の癖

*   **県**: サポートされていないを返す`false`.


# ContactFindOptions

結果をフィルター処理するために使用できるプロパティが含まれています、 `contacts.find` 操作。

## プロパティ

*   **フィルター**: 連絡先を検索に使用する検索文字列。*（，）*(既定値します。`""`)

*   **複数**: かどうか、検索操作を複数の連絡先を返しますを決定します。*(ブール値)*(既定値します。`false`)

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // success callback
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };
    
    // error callback
    function onError(contactError) {
        alert('onError!');
    };
    
    // specify contact search criteria
    var options = new ContactFindOptions();
        options.filter="";        // empty search string returns all contacts
        options.multiple=true;    // return multiple results
        filter = ["displayName"]; // return contact.displayName field
    
        // find contacts
    navigator.contacts.find(filter, onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // specify contact search criteria
            var options = new ContactFindOptions();
            options.filter = "";      // empty search string returns all contacts
            options.multiple = true;  // return multiple results
            filter = ["displayName"]; // return contact.displayName field
    
            // find contacts
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>


# 得意先コード

についての異なる種類情報にはが含まれています、 `Contact` オブジェクトの名前。

## プロパティ

*   **フォーマット**: 連絡先の完全な名前。*（，）*

*   **familyName**: 連絡先の姓。*（，）*

*   **givenName**: 連絡先の名前。*（，）*

*   **ミドル ネーム**: 連絡先のミドル ネーム。*（，）*

*   **honorificPrefix**: 連絡先のプレフィックス (例*氏*または*博士*) *(，)*

*   **honorificSuffix**: 連絡先のサフィックス (*弁護士*の例)。*（，）*

## 詳細

`ContactName`オブジェクト、連絡先の名前のプロパティが格納されます。

## サポートされているプラットフォーム

*   アンドロイド 2.X
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i ++) {
                alert("Formatted: " + contacts[i].name.formatted       + "\n" +
                    "Family Name: " + contacts[i].name.familyName      + "\n" +
                    "Given Name: "  + contacts[i].name.givenName       + "\n" +
                    "Middle Name: " + contacts[i].name.middleName      + "\n" +
                    "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
                    "Prefix: "      + contacts[i].name.honorificPrefix);
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Android の癖

*   **フォーマット**： 部分的にサポートされると読み取り専用です。 連結を返します `honorificPrefix` 、 `givenName` 、 `middleName` 、 `familyName` と`honorificSuffix`.

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **フォーマット**： 部分的にサポートされます。ブラックベリー **firstName**と**lastName**フィールドの連結を返します。

*   **familyName**: サポートされています。ブラックベリー **[氏名]**フィールドに格納されます。

*   **givenName**: サポートされています。ブラックベリーの**firstName**フィールドに格納されます。

*   **ミドル ネーム**: サポートされていないを返す`null`.

*   **honorificPrefix**: サポートされていないを返す`null`.

*   **honorificSuffix**: サポートされていないを返す`null`.

## iOS の癖

*   **フォーマット**： 部分的にサポートされます。IOS 複合名を返しますが、読み取り専用です。


# ContactOrganization

含まれています、 `Contact` オブジェクトの組織のプロパティです。

## プロパティ

*   **県**: に設定されている `true` 場合は、この `ContactOrganization` ユーザーの推奨値が含まれています。*(ブール値)*

*   **タイプ**: たとえばフィールドこれは*ホーム*の種類を示す文字列。_(DOMString)

*   **名前**: 組織の名前。*（，）*

*   **部門**: 契約に勤めている部門。*（，）*

*   **タイトル**: 組織の連絡先のタイトル。*（，）*

## 詳細

`ContactOrganization`オブジェクトは、連絡先の組織のプロパティを格納します。A `Contact` 1 つまたは複数のオブジェクトに格納されます `ContactOrganization` 配列内のオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## アンドロイド 2.X 癖

*   **県**: 返す 2.X の Android デバイスでサポートされていません`false`.

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **県**： 戻る、BlackBerry デバイスでサポートされていません`false`.

*   **タイプ**： 戻る、BlackBerry デバイスでサポートされていません`null`.

*   **名前**： 部分的にサポートされます。最初の組織名は、**会社**のブラックベリーのフィールドに格納されます。

*   **部門**: サポートされていないを返す`null`.

*   **タイトル**: 部分的にサポートされます。組織の最初のタイトルはブラックベリー**氏名**フィールドに格納されます。

## iOS の癖

*   **県**: 戻る iOS デバイスでサポートされていません`false`.

*   **タイプ**： 戻る iOS デバイスでサポートされていません`null`.

*   **名前**： 部分的にサポートされます。最初の組織名は、iOS **kABPersonOrganizationProperty**フィールドに格納されます。

*   **部門**: 部分的にサポートされます。最初の部署名は iOS **kABPersonDepartmentProperty**フィールドに格納されます。

*   **タイトル**: 部分的にサポートされます。最初のタイトルは、iOS **kABPersonJobTitleProperty**フィールドに格納されます。


# ContactError

A `ContactError` オブジェクトに渡されます、 `contactError` コールバック エラーが発生します。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。

## 定数

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## 説明

`ContactError`オブジェクトを介してユーザーに返されます、 `contactError` コールバック関数でエラーが発生したとき。


# contactSuccess

成功コールバック関数を提供する、 `Contact` 結果の配列は `contacts.find` 操作。

    function(contacts) {
        // Do something
    }
    

## パラメーター

*   **連絡先**: 連絡先の配列検索操作からの結果します。*（お問い合わせ）*

## 例

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }


# contactError

連絡先機能のエラー コールバック関数。

    function(error) {
        // Handle the error
    }


# 連絡先

必須のパラメーター、 `contacts.find` 、どのフィールドに含まれる必要がありますを指定する方法、 `Contact` 検索操作からの結果オブジェクト。

    [「名」、「電話番号」、「メール」]


# contactFindOptions

省略可能なパラメーター、 `contacts.find` 連絡先を連絡先データベースから返されるフィルター処理に使用するメソッド。

    {フィルター：""、複数: true};
    

## オプション

*   **フィルター**: 連絡先をフィルター処理に使用する検索文字列。*（，）*(既定値します。`""`)

*   **複数**: かどうか、検索操作を複数の連絡先を返しますを決定します。*(ブール値)*(既定値します。`false`)
