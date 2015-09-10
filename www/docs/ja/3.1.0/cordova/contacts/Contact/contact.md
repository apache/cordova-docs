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

# お問い合わせ

ユーザーの個人情報やビジネスの<a href="../parameters/contactFields.html">連絡先</a>などの<a href="../parameters/contactFields.html">連絡先</a>を記述するプロパティが含まれています。

## プロパティ

*   **id**： グローバルに一意の識別子。*（，）*

*   **displayName**: エンドユーザへの表示に適した、この<a href="../parameters/contactFields.html">連絡先</a>の名前。*（，）*

*   **名前**： 人の名前のすべてのコンポーネントを格納するオブジェクト。*(ContactName)*

*   **ニックネーム**: <a href="../parameters/contactFields.html">連絡先</a>のアドレスに使用するカジュアルな名前。*（，）*

*   **電話番号**: <a href="../parameters/contactFields.html">連絡先</a>の電話番号の配列。*(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **メール**： <a href="../parameters/contactFields.html">連絡先</a>の電子メール アドレスの配列。*(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **アドレス**: <a href="../parameters/contactFields.html">連絡先</a>のアドレスの配列。*(<a href="../ContactAddress/contactaddress.html">ContactAddress</a>[])*

*   **ims**： <a href="../parameters/contactFields.html">連絡先</a>の IM アドレスの配列。*(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **組織**: <a href="../parameters/contactFields.html">連絡先</a>の組織の配列。*(<a href="../ContactOrganization/contactorganization.html">ContactOrganization</a>[])*

*   **誕生日**: <a href="../parameters/contactFields.html">連絡先</a>の誕生日。*（日）*

*   **注**: <a href="../parameters/contactFields.html">連絡先</a>についてのメモ。*（，）*

*   **写真**: <a href="../parameters/contactFields.html">連絡先</a>の写真の配列。*(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **カテゴリ**: 取引先担当者に関連付けられているすべてのユーザー定義カテゴリの配列。*(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **url**: 取引先担当者に関連付けられている web ページの配列。*(<a href="../ContactField/contactfield.html">ContactField</a>[])*

## メソッド

*   **クローン**： 新しいを返します `Contact` と呼び出し元のオブジェクトのディープ コピーであるオブジェクトの `id` プロパティに設定`null`.

*   **削除**: <a href="../../device/device.html">デバイス</a>の<a href="../parameters/contactFields.html">連絡先</a><a href="../../storage/database/database.html">データベース</a>から<a href="../parameters/contactFields.html">連絡先</a>を削除します、それ以外の場合のためのエラー コールバックを実行する、 `<a href="../ContactError/<a href="../parameters/contactError.html">contactError</a>.html">ContactError</a>` オブジェクト。

*   **保存**: <a href="../../device/device.html">デバイス</a>の<a href="../parameters/contactFields.html">連絡先</a><a href="../../storage/database/database.html">データベース</a>に新しい<a href="../parameters/contactFields.html">連絡先</a>を保存または同じ**id**を持つ<a href="../parameters/contactFields.html">連絡先</a>が既に存在する場合、既存の<a href="../parameters/contactFields.html">連絡先</a>を更新します。

## 詳細

`Contact`オブジェクトは、ユーザーの<a href="../parameters/contactFields.html">連絡先</a>を表します。 <a href="../parameters/contactFields.html">連絡先</a>の作成、格納、または<a href="../../device/device.html">デバイス</a>の<a href="../parameters/contactFields.html">連絡先</a><a href="../../storage/database/database.html">データベース</a>から削除することができます。 <a href="../parameters/contactFields.html">連絡先</a>も取得できます (個別にまたは一括） を<a href="../../storage/database/database.html">データベース</a>から呼び出すことによって、 `<a href="../contacts.find.html">contacts.find</a>` メソッド。

**注：**すべて上記の<a href="../parameters/contactFields.html">連絡先</a>フィールドのすべての<a href="../../device/device.html">デバイス</a> プラットフォームでサポートされます。詳細については各プラットフォームの*互換*セクションを確認してください。

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
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };
    
    // create a new contact object
    var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();
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
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // create
            var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();
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
        function onSaveError(<a href="../parameters/contactError.html">contactError</a>) {
            alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(<a href="../parameters/contactError.html">contactError</a>) {
            alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## アンドロイド 2.X 癖

*   **カテゴリ**: 返す 2.X の Android <a href="../../device/device.html">デバイス</a>でサポートされていません`null`.

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **id**: サポートされています。<a href="../parameters/contactFields.html">連絡先</a>を保存するときに、<a href="../../device/device.html">デバイス</a>によって割り当てられます。

*   **displayName**: サポートされています。ブラックベリー **user1**フィールドに格納されます。

*   **ニックネーム**: サポートされていないを返す`null`.

*   **電話番号**: 部分的にサポートされます。 電話番号は、*型*が 'ホーム'、 **workPhone1**と**workPhone2** *型*が '仕事'**携帯電話***型*が '携帯電話' の場合の場合、 **faxPhone** *タイプ*が「fax」、 **pagerPhone** *型*は '' ページャー、および**その他の電話***の種類*が上記のいずれの場合場合場合ブラックベリー フィールド**homePhone1**と**homePhone2**に格納されます。

*   **メール**： 部分的にサポートされます。 最初の 3 つの電子メール アドレスはそれぞれブラックベリーの**email1**、 **email2**、および**email3**フィールドに格納されます。

*   **アドレス**: 部分的にサポートされます。最初と 2 番目のアドレスはそれぞれ、ブラックベリー **homeAddress**と**workAddress**フィールドに格納されます。

*   **ims**: サポートされていないを返す`null`.

*   **組織**: 部分的にサポートされます。 **名前**と**タイトル**最初の組織のそれぞれブラックベリー**会社**と**タイトル**のフィールドに格納されます。

*   **写真**： 部分的にサポートされます。 サムネイル サイズの画像を 1 つがサポートされています。 <a href="../parameters/contactFields.html">連絡先</a>の写真を設定するには渡す、いずれかで base64 エンコード イメージ、またはイメージを指している URL。 イメージはブラックベリーの<a href="../parameters/contactFields.html">連絡先</a><a href="../../storage/database/database.html">データベース</a>に保存する前に縮小されます。 <a href="../parameters/contactFields.html">連絡先</a>の写真が base64 エンコード イメージとして返されます。

*   **カテゴリ**: 部分的にサポートされます。*ビジネス*と*個人*のカテゴリのみがサポートされます。

*   **url**: 部分的にサポートされます。最初の URL は、ブラックベリーの**web ページ**のフィールドに格納されます。

## iOS の癖

*   **displayName**: 返す iOS でサポートされていない `null` がない限り、ない `ContactName` 指定すると、その場合は複合名、**ニックネーム**を返しますまたは `""` 、それぞれ。

*   **誕生日**: JavaScript として入力する必要があります `Date` オブジェクト、同じ方法が返されます。

*   **写真**： アプリケーションの一時ディレクトリに格納されているイメージへの<a href="../../file/fileobj/fileobj.html">ファイル</a>の URL を返します。一時ディレクトリの内容は、アプリケーションの終了時に削除されます。

*   **カテゴリ**: このプロパティは現在サポートされていません、返す`null`.

## Windows Phone 7 と 8 癖

*   **displayName**: 表示名パラメーターの表示名と異なるために提供値を取得、<a href="../parameters/contactFields.html">連絡先</a>を検索するとき、<a href="../parameters/contactFields.html">連絡先</a>を作成するとき。

*   **url**: 1 つだけが利用できるが、<a href="../parameters/contactFields.html">連絡先</a>の作成、ユーザー入力し 1 つ以上の web アドレスを保存するときは、<a href="../parameters/contactFields.html">連絡先</a>を検索するとき。

*   **電話番号**:*県*オプションはサポートされていません。 *型*は、*検索*操作ではサポートされていません。 1 つだけ `phoneNumber` は各*タイプ*の許可.

*   **メール**：*県*オプションはサポートされていません。家庭や個人的なメールと同じエントリを参照します。各*タイプ*の 1 つだけのエントリが許可されて.

*   **アドレス**: 仕事とホーム/パーソナル*タイプ*のみをサポートしています。家庭や個人*型*参照して同じアドレス エントリ。各*タイプ*の 1 つだけのエントリが許可されて.

*   **組織**： 1 つだけが許可され、*県*、*タイプ*、および*部門*の属性をサポートしていません。

*   **注**: サポートされていないを返す`null`.

*   **ims**: サポートされていないを返す`null`.

*   **誕生日**: サポートされていないを返す`null`.

*   **カテゴリ**: サポートされていないを返す`null`.