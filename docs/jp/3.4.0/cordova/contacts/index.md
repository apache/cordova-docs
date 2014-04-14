<!---
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
-->

# org.apache.cordova.contacts

このプラグインを使用して、デバイスの連絡先データベース ( contacts database ) にアクセスできます。

__注意__ : 連絡先データの取得・利用には、個人情報保護の観点から、細心の注意が必要です。連絡先データの取り扱い方法と第三者への情報提供に関しては、アプリの個人情報の取り扱いに関するポリシーの中で議論すべき問題です。個人情報の中でもとりわけ連絡先情報は、交友関係等の個人のプライバシーの侵害に深く関わることから、その取り扱いには特に注意が求められます。そのため、アプリのプライバシーに関するポリシーの策定に加え、アプリが連絡先にアクセスまたは利用する際には、その直前にユーザへの通知および許諾を得る必要があります。デバイスのオペレーティングシステムがこの通知および許諾の要請を行ってない場合には、改善する必要があります。また、ユーザへの通知および許諾の要請を行う際には、必ず、個人情報の取り扱いに関するポリシーの開示および使用方法に関する同意の意思表示を求める必要があります ( __許可する__ 、または、 __許可しない__ のように、明示的に判断できる必要があります ) 。また、ユーザの情報へアクセスを行う前に、ユーザへの通知および許諾を得ることを条件とする、アプリのマーケットプレースも一部に存在します。連絡先データの取り扱いの説明に関しては、ユーザの不安や困惑を取り除くため、内容を明快に理解できるよう、考慮が求められます。詳細な情報に関しては、『 Privacy Guide 』 をご覧ください。

## インストール

    cordova plugin add org.apache.cordova.contacts

### Firefox OS 特有の動作

[Manifest Docs](https://developer.mozilla.org/en-US/Apps/Developing/Manifest) に記載された内容に沿って、__www/manifest.webapp__ を作成してください。
また、関連する権限を追加してください。
また、webapp の type 項目を "privileged" に変更する必要があります。 詳細に関しては、[Manifest Docs](https://developer.mozilla.org/en-US/Apps/Developing/Manifest#type) をご確認ください。

__注意__: privileged を取得したすべてのアプリは、 [Content Security Policy](https://developer.mozilla.org/en-US/Apps/CSP) を遵守しなければいけません。ここでは、インラインスクリプト ( inline script ) が禁止されています。アプリを起動する際には、別の方法が必要です。

	"type": "privileged",
	"permissions": {
		"contacts": {
			"access": "readwrite",
			"description": "Describe why there is a need for such permission"
		}
	}

## navigator.contacts

### メソッド

- navigator.contacts.create
- navigator.contacts.find

### オブジェクト

- Contact
- ContactName
- ContactField
- ContactAddress
- ContactOrganization
- ContactFindOptions
- ContactError

## navigator.contacts.create

`navigator.contacts.create` メソッドを使用して、新しい `Contact` オブジェクトを同期的に作成します。

このメソッドで作成した Contact オブジェクトは、デバイスの連絡先データベースには保存されません。 Contact オブジェクトをデバイスに保存するには、 `Contact.save` メソッドを使用します。

### サポート対象のプラットフォーム

- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 と 8

### 例

    var myContact = navigator.contacts.create({"displayName": "Test User"});

## navigator.contacts.find

`navigator.contacts.find` メソッドを非同期で実行して、デバイスの連絡先データベースの検索、 `Contact` オブジェクト群の配列の取得を行います。 __contactSuccess__ パラメータで指定した `contactSuccess` コールバック関数に対して、実行結果として返されたオブジェクトを引き渡します。

__contactFields__ パラメータを使用して、検索時に使用する項目を指定します。また、ここから得た検索結果だけを __contactSuccess__ コールバック関数へ引き渡します。 __contactFields__ パラメータに空文字列 ( ゼロレングス/zero-length ) を設定した場合、無効となり、結果として、 `ContactError.INVALID_ARGUMENT_ERROR` となります。 __contactFields__ の値を `"*"` に設定した場合、連絡先に関するすべての項目を返します。

__contactFindOptions.filter__ 文字列を使用して、連絡先データベースの検索時に絞り込みを行います。この値を設定した場合、 __contactFields__ で指定した項目に対して、絞り込み検索 ( 大・小文字を区別しない、部分一致 ) をかけます。指定した項目内で一致する _内容がある_ 場合には、その連絡先を返します。

### パラメータ

- __contactFields__: 検索時に使用する連絡先の項目。検索結果として返された `Contact` オブジェクトが格納している値は、ここで指定した項目に関する値のみとなります。 _(DOMString[])_ [必須]

- __contactSuccess__: データベースから取得した Contact オブジェクト群の配列を使用して呼び出す、Success コールバック関数。 [必須]

- __contactError__: エラー発生時に呼び出す Error コールバック関数。 [任意]

- __contactFindOptions__: navigator.contacts で使用する絞り込み検索オプション。 [任意] 。 使用するキーを以下に示します。

    - __filter__: navigator.contacts の find で使用する検索文字列 _(DOMString)_ ( デフォルト : `""` )

    - __multiple__: navigator.contacts　の find の検索結果を複数にするか指定します。 _(Boolean)_ ( デフォルト : `false` )

### サポート対象のプラットフォーム

- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 と 8
- Windows 8

### 例

    function onSuccess(contacts) {
        alert('Found ' + navigator.contacts.length + ' navigator.contacts.');
    };

    function onError(contactError) {
        alert('onError!');
    };

    // 名前の項目に「Bob」と入力されている連絡先をすべて検索
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);


## Contact

`Contact` オブジェクトは、ユーザの連絡先情報を格納します。デバイスの連絡先データベースから、Contacts の作成・格納・削除を行えます。
また、 `navigator.contacts.find` メソッドを呼び出して、単数または複数の Contact を、データベースから取得できます。

__注意__ : 上記のすべての連絡先関連の項目が、すべてのデバイスのプラットフォームでサポートされているわけではありません。各プラットフォームの動作の詳細に関しては、各 _プラットフォーム特有の動作_ の記載内容をご確認ください。

### プロパティー

- __id__: グローバルな識別子 _(DOMString)_

- __displayName__: 各 Contact の名称。ユーザに表示する際に利用できます。 _(DOMString)_

- __name__: 個人名に関するすべての要素を格納するオブジェクト _(ContactName)_

- __nickname__: 連絡先に使用するニックネーム _(DOMString)_

- __phoneNumbers__: 連絡先に関するすべての電話番号の配列 _(ContactField[])_

- __emails__: 連絡先に関するすべてのメールアドレスの配列 _(ContactField[])_

- __addresses__: 連絡先に関するすべての住所の配列 _(ContactAddress[])_

- __ims__: 連絡先に関するすべての IM　 ( インスタントメッセンジャー ) アドレスの配列 _(ContactField[])_

- __organizations__: 連絡先に関するすべての組織名の配列 _(ContactOrganization[])_

- __birthday__: 連絡先の誕生日 _(Date)_

- __note__: 連絡先のメモ _(DOMString)_

- __photos__: 連絡先の写真の配列 _(ContactField[])_

- __categories__: 連絡先に関する、すべてのユーザ定義のカテゴリーの配列 _(ContactField[])_

- __urls__: 連絡先に関する Web ページの配列 _(ContactField[])_

### メソッド

- __clone__: 呼び出したオブジェクトのディープコピー ( deep copy ) を行い、新しい `Contact` オブジェクトとして返します。 `id` プロパティーは `null` に設定されます。

- __remove__: 連絡先データベースからオブジェクトを削除します。 削除が失敗した場合は `ContactError` オブジェクトを使用して、error コールバック関数を呼び出します。

- __save__: 新しい連絡先を連絡先データベースに保存し、 既存の __id__ の場合には、連絡先データベースを更新します。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 と 8
- Windows 8

### 保存 ( Save ) の例

    function onSuccess(contact) {
        alert("Save Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

    // 新しい contact オブジェクトを作成
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices

    // 項目の作成
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;

    // デバイスへ保存
    contact.save(onSuccess,onError);

### 複写 ( Clone ) の例

        // contact オブジェクトをコピー
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);

### 削除 ( Remove ) の例

    function onSuccess() {
        alert("Removal Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

        // デバイスから連絡先を削除
        contact.remove(onSuccess,onError);


### Android 2.X 特有の動作

- __categories__:  Android 2.X 搭載のデバイスでは、このプロパティーをサポートしません。 `null` を返します。

### BlackBerry 10 特有の動作

- __id__: サポートします。連絡先を保存するとき、デバイスが割り当てます。

- __displayName__: サポートします。BlackBerry の __user1__ 項目に保存します。

- __nickname__: サポートしません。 `null` を返します。

- __phoneNumbers__: 部分的にサポートします。BlackBerry では、電話番号を保存する項目は、 _type_ が 'home' の場合には __homePhone1__ と __homePhone2__ に、 'work' の場合には __workPhone1__ と __workPhone2__ に、 'mobile' の場合には __mobilePhone__ に、 'fax' の場合には __faxPhone__ に、 'pager' の場合には __pagerPhone__ に、その他の場合には __otherPhone__ に保存します。

- __emails__: 部分的にサポートします。最初の 3 つのメールアドレスを、BlackBerry の __email1__ 、 __email2__ 、 __email3__ 項目にそれぞれ保存します。

- __addresses__: 部分的にサポートします。最初と 2 番目のアドレスを、BlackBerry の __homeAddress__ と __workAddress__ 項目のそれぞれに保存します。

- __ims__: サポートしません。 `null` を返します。

- __organizations__: 部分的にサポートします。最初の組織の__name__ と __title__ を、BlackBerry の __company__ と __title__ 項目にそれぞれ保存します。

- __photos__: 部分的にサポートします。サムネイルサイズの写真のみサポートします。連絡先の写真を登録する場合、 Base64 形式のイメージか、イメージの場所を指す URL を引き渡します。BlackBerry の連絡先データベースに保存する前に写真の縮小を行います。連絡先の写真は Base64 形式のイメージとして返されます。

- __categories__: 部分的にサポートします。 _Business_ と _Personal_ カテゴリーのみサポートします。

- __urls__: 部分的にサポートします。最初の URL を __webpage__ 項目に保存します。

### FirefoxOS 特有の動作

- __categories__: 部分的にサポートします。 __pref__ と __type__ 項目は、 `null` を返します。

- __ims__: サポートしません。

- __photos__: サポートしません。


### iOS 特有の動作

- __displayName__: iOS ではサポートしません。 `ContactName` を指定しない場合、 `null` を返します。この場合、合成した名前 ( composite name )、 __nickname__ 、 `""` のいづれかを返します。

- __birthday__: JavaScript の `Date` オブジェクトとして入力をしなければなりません。また、返ってくるときも、同オブジェクトのそれと同じように返ってきます。

- __photos__: アプリの temporary ダイレクトリに保存されたイメージを指し示す File URL を返します。アプリを閉じたときに、temporary ダイレクトリに残るコンテンツは削除されます。

- __categories__: このプロパティーは、現在、サポートしません。 `null` を返します。

### Windows Phone 7 と 8 特有の動作

- __displayName__: 連絡先の作成をするときに display name パラメータに設定した値と、連絡先の検索を行って取得した display name は異なります。

- __urls__: 連絡先の作成時には、複数の Web アドレスを保存できますが、連絡先の検索時には、1 つのアドレスのみ使用できます。

- __phoneNumbers__: _pref_ オプションをサポートしません。 _find_ 処理では _type_ をサポートしません。各 _type_ に対して、1 つの `phoneNumber` のみ登録できます。

- __emails__: _pref_ オプションをサポートしません。home と personal では、同じメールの入力値を参照します。各 _type_ に対して、1 つ入力値のみ登録できます。

- __addresses__: work、 ならびに、 home または personal の _type_ のみサポートします。home と personal の _type_ では、同じ住所の入力値を参照します。各 _type_ に対して、1 つ入力値のみ登録できます。

- __organizations__: 1 つのみサポートします。 _pref_ 、 _type_ 、 _department_ の属性はサポートしません。

- __note__: サポートしません。 `null` を返します。

- __ims__: サポートしません。 `null` を返します。

- __birthdays__: サポートしません。 `null` を返します。

- __categories__: サポートしません。 `null` を返します。


## ContactAddress

`ContactAddress` オブジェクトを使用して、1 つの連絡先の 1 つのアドレスのプロパティー群を格納します。 `Contact` オブジェクトでは、 `ContactAddress[]` の配列を使用して、複数の住所を格納することができます。

### プロパティー

- __pref__: 最優先する値を `ContactAddress` が格納している場合、 `true` に設定します。 _(boolean)_

- __type__: 項目のタイプを示す文字列。例 ： _home_ _(DOMString)_

- __formatted__: 表示用にフォーマットした住所 _(DOMString)_

- __streetAddress__: 番地 _(DOMString)_

- __locality__: 市区町村 _(DOMString)_

- __region__: 都道府県 _(DOMString)_

- __postalCode__: 郵便番号 _(DOMString)_

- __country__: 国 _(DOMString)_

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 と 8
- Windows 8

### 例

    // すべての連絡先の住所情報を表示

    function onSuccess(contacts) {
        for (var i = 0; i < navigator.contacts.length; i++) {
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

    // すべての連絡先を検索
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);

### Android 2.X 特有の動作

- __pref__: Android 2.X 搭載のデバイスでは、サポートしておらず、 `false` を返します。

### BlackBerry 10 特有の動作

- __pref__: BlackBerry 搭載のデバイスではサポートしておらず、 `false` を返します。

- __type__: 部分的にサポートします。 1 つの連絡先につき、 _Work_ と _Home_ タイプのそれぞれに 1 つだけ住所を保存できます。

- __formatted__: 部分的にサポートします。BlackBerry の住所関連の項目をすべて連結して返します。

- __streetAddress__: サポートします。BlackBerry の __address1__ と __address2__ の住所項目を連結して返します。

- __locality__: サポートします。BlackBerry の __city__ の住所項目に保存します。

- __region__: サポートします。BlackBerry の __stateProvince__ の住所項目に保存します。

- __postalCode__: サポートします。BlackBerry の __zipPostal__ の住所項目に保存します。

- __country__: サポートします。

### FirefoxOS 特有の動作

- __formatted__: 現在、サポートしません。

### iOS 特有の動作

- __pref__: iOS ではサポートしておらず、 `false` を返します。

- __formatted__: 現在、サポートしません。


## ContactError

エラーの発生時に、 `ContactError` オブジェクトを、 `contactError` コールバック関数が返します。

### プロパティー

- __code__: 事前に定義した以下のエラーコードのうちの 1 つ

### 定数

- `ContactError.UNKNOWN_ERROR`
- `ContactError.INVALID_ARGUMENT_ERROR`
- `ContactError.TIMEOUT_ERROR`
- `ContactError.PENDING_OPERATION_ERROR`
- `ContactError.IO_ERROR`
- `ContactError.NOT_SUPPORTED_ERROR`
- `ContactError.PERMISSION_DENIED_ERROR`


## ContactField

`ContactField` オブジェクトは、連絡先の各項目を汎用的に格納するための再利用可能なコンポーネントです。各 `ContactField` オブジェクトには、 `value` 、 `type` 、 `pref` プロパティーを 1 つずつ格納します。 `Contact` オブジェクトは、電話番号・メールアドレスのような複数のプロパティーを、 `ContactField[]` 配列に格納します。

`ContactField` オブジェクトの __type__ 属性に関しては、多くの場合、事前に定義した値はありません。たとえば、電話番号に関しては、__type__ に設定する値として、 _home_ 、 _work_ 、 _mobile_ 、 
_iPhone_ 、または、特定のデバイスのプラットフォームの連絡先データベースがサポートしているその他の値を指定できます。ただし、`Contact` の __photos__ 項目に関しては、 __type__ 項目を使用して、返すイメージの形式を設定します。 __value__ 属性が、写真のイメージの URL を格納している場合には __url__ を、Base64 形式のイメージの文字列を格納している場合には、 _base64_ が入ります。

### プロパティー

- __type__: 項目のタイプを示す文字列。例 ： _home_ _(DOMString)_

- __value__: 項目の値。例 ： 電話番号またはメールアドレス _(DOMString)_

- __pref__: 最優先する値を `ContactField` が格納している場合、 `true` に設定します。 _(boolean)_

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 と 8
- Windows 8

### 例

        // 新しい連絡先を作成
        var contact = navigator.contacts.create();

        // ContactField[] に連絡先の電話番号を保存
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;

        // 連絡先を保存
        contact.save();

### Android 特有の動作

- __pref__: サポートしません。 `false` を返します。

### BlackBerry 10 特有の動作

- __type__: 部分的にサポートします。電話番号で使用します。

- __value__: サポートします。

- __pref__: サポートしません。 `false` を返します。

### iOS 特有の動作

- __pref__: サポートしません。 `false` を返します。


## ContactName

`Contact` オブジェクトの名前に関する、さまざまな情報を格納します。

### プロパティー

- __formatted__: 連絡先のフルネーム _(DOMString)_

- __familyName__: 連絡先の姓 _(DOMString)_

- __givenName__: 連絡先の名 _(DOMString)_

- __middleName__: 連絡先のミドルネーム _(DOMString)_

- __honorificPrefix__: 連絡先の接頭敬称 ( 例 : _Mr._ または _Dr._ ) _(DOMString)_

- __honorificSuffix__: 連絡先の接尾敬称 ( 例 : _Esq._ ) _(DOMString)_

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android 2.X
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 と 8
- Windows 8

### 例

    function onSuccess(contacts) {
        for (var i = 0; i < navigator.contacts.length; i++) {
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

### Android 特有の動作

- __formatted__: 部分的にサポートしますが、読み取り専用です。`honorificPrefix` 、 `givenName` 、 `middleName` 、 `familyName` 、 `honorificSuffix` を連結して返します。

### BlackBerry 10 特有の動作

- __formatted__: 部分的にサポートします。BlackBerry の __firstName__ と __lastName__ 項目を連結して返します。

- __familyName__: サポートします。BlackBerry の __lastName__ 項目に格納します。

- __givenName__: サポートします。BlackBerry の __firstName__ 項目に格納します。

- __middleName__: サポートしません。 `null` を返します。

- __honorificPrefix__: サポートしません。 `null` を返します。

- __honorificSuffix__: サポートしません。 `null` を返します。

### FirefoxOS 特有の動作

- __formatted__: 部分的にサポートしますが、読み取り専用です。`honorificPrefix` 、 `givenName` 、 `middleName` 、 `familyName` 、 `honorificSuffix` を連結して返します。

### iOS 特有の動作

- __formatted__: 部分的にサポートします。読み取り専用の iOS の合成名 ( Composite Name ) を返します。

## ContactOrganization

`ContactOrganization` を使用して、連絡先の組織に関するプロパティー群を格納します。 `Contact` では、単数または複数の `ContactOrganization` オブジェクトを配列に格納します。

### プロパティー

- __pref__: 最優先する値を `ContactOrganization` が格納している場合、 `true` に設定します。 _(boolean)_

- __type__: 項目のタイプを示す文字列。 例 ： _home_ _(DOMString)_

- __name__: 組織名 _(DOMString)_

- __department__: 所属する部署名 _(DOMString)_

- __title__: 役職名 _(DOMString)_


### サポート対象のプラットフォーム

- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 と 8
- Windows 8

### 例

    function onSuccess(contacts) {
        for (var i = 0; i < navigator.contacts.length; i++) {
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

### Android 2.X 特有の動作

- __pref__: Android 2.X 搭載のデバイスでは、サポートしておらず、 `false` を返します.

### BlackBerry 10 特有の動作

- __pref__: BlackBerry 搭載のデバイスでは、サポートしておらず、 `false` を返します.

- __type__: BlackBerry 搭載のデバイスでは、サポートしておらず、 `null` を返します.

- __name__: 部分的にサポートします。1 つ目の組織名を BlackBerry の __company__ 項目に格納します。

- __department__: サポートしません。 `null` を返します.

- __title__: 部分的にサポートします。1 つ目の役職を BlackBerry の __jobTitle__ 項目に格納します。

### Firefox OS 特有の動作

- __pref__: サポートしません。

- __type__: サポートしません。

- __department__: サポートしません。

- __name__ と __title__ 項目を、 __org__ と __jobTitle__ にそれぞれ格納します。

### iOS 特有の動作

- __pref__: iOS 搭載のデバイスではサポートしません。 `false` を返します。

- __type__: iOS 搭載のデバイスではサポートしません。 `null` を返します。

- __name__: 部分的にサポートします。1 つ目の組織名を iOS の __kABPersonOrganizationProperty__ 項目に格納します。

- __department__: 部分的にサポートします。1 つ目の部署名を iOS の __kABPersonDepartmentProperty__ 項目に格納します。

- __title__: 部分的にサポートします。1 つ目の役職を iOS の __kABPersonJobTitleProperty__ 項目に格納します。