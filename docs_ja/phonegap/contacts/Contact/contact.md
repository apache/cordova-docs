Contact
=======

連絡先に格納された情報を表します。

プロパティ
----------

- __id:__ 固有のIDを表します _(DOMString)_
- __displayname:__ 連絡先の名称を表します _(DOMString)_
- __name:__ 個人名に関するオブジェクトを表します _(ContactName)_
- __nickname:__ ニックネームを表します _(DOMString)_
- __phoneNumbers:__ すべての電話番号を含む配列を表します _(ContactField[])_
- __emails:__ すべてのメールアドレスを含む配列を表します _(ContactField[])_
- __addresses:__ すべての住所を含む配列を表します _(ContactAddresses[])_
- __ims:__ すべてのIMアドレスを含む配列を表します _(ContactField[])_
- __organizations:__ すべての組織名を含む配列を表します _(ContactOrganization[])_
- __revision:__ 最後に編集された日付を表します _(DOMString)_
- __birthday:__ 誕生日を表します _(Date)_
- __gender:__ 性別を表します _(DOMString)_
- __note:__ メモを表します _(DOMString)_
- __photos:__ すべての写真を含む配列を表します _(ContactField[])_
- __categories:__  ユーザー定義のカテゴリを表します _(ContactField[])_
- __urls:__ 関連URLを含む配列を表します _(ContactField[])_
- __timezone:__ タイムゾーン情報を表します _(DOMString)_

メソッド
-------

- __clone__: オブジェクトのディープコピーを行い、新しい Contact オブジェクトを作成します。 id プロパティは null に設定されます 
- __remove__: オブジェクトを連絡先データベースから削除します。削除が失敗した場合はコールバック関数が呼び出され `ContactError` オブジェクトが返されます。
- __save__: 新しい連絡先を連絡先データベースに保存します。 __id__ が既に登録されている場合は連絡先データベースを上書きします。


詳細
-------

 `Contact` オブジェクトはユーザーの連絡先を格納します。連絡先はデバイスの連絡先データベースから作成したり、保存することが可能です。 `contact.find` 関数を実行することで、連絡先データベースからデータを検索し、取得することもできます。

_注意: プラットフォームによっては、いくつかのフィールドがサポートされていない場合があります。プラットフォームごとの注意点に詳細を記載しています。_

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

保存する例
------------------

	function onSuccess(contacts) {
		alert("保存に成功しました。");
	};

	function onError(contactError) {
		alert("エラー = " + contactError.code);
	};

	// 新しい連絡先オブジェクトを作成
    var contact = navigator.service.contacts.create();
	contact.displayName = "Plumber";
	contact.nickname = "Plumber"; 		//すべてのデバイスに対応するため、両方の項目をセット
	
	// その他のフィールドを作成
	var name = new ContactName();
	name.givenName = "Jane";
	name.familyName = "Doe";
	contact.name = name;
	
	// デバイスに保存
	contact.save(onSuccess, onError);

コピーを行う例
-------------------

	// Contact オブジェクトをコピー
	var clone = contact.clone();
	clone.name.givenName = "John";
	console.log("コピー前の名前 = " + contact.name.givenName);
	console.log("Cloneを実施した後の名前 = " + clone.name.givenName); 

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

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>コンタクトの使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGapの準備完了
        //
        function onDeviceReady() {
		    // 作成
		    var contact = navigator.service.contacts.create();
			contact.displayName = "Plumber";
			contact.nickname = "Plumber"; 		//全てのデバイスに対応するため、両方の項目をセット
			var name = new ContactName();
			name.givenName = "Jane";
			name.familyName = "Doe";
			contact.name = name;

			// 保存
			contact.save(onSaveSuccess,onSaveError);
			
			// クローンを作成
			var clone = contact.clone();
			clone.name.givenName = "John";
			console.log("元の連絡先 = " + contact.name.givenName);
			console.log("クローンの連絡先 = " + clone.name.givenName); 
			
			// 削除
			contact.remove(onRemoveSuccess,onRemoveError);
        }
        
        // onSaveSuccess: 現在の連絡先を取得
        //
        function onSaveSuccess(contacts) {
			alert("保存に成功しました。");
        }
    
        // onSaveError: 連絡先の取得に失敗
        //
        function onSaveError(contactError) {
			alert("エラー = " + contactError.code);
        }
        
        // onRemoveSuccess: 現在の連絡先の取得
        //
        function onRemoveSuccess(contacts) {
			alert("削除に成功しました。");
        }
    
        // onRemoveError: 連絡先の取得に失敗
        //
        function onRemoveError(contactError) {
			alert("エラー = " + contactError.code);
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>使用例</h1>
        <p>連絡先を検索</p>
      </body>
    </html>

Android 2.X に関する注意点
------------------

下記のプロパティはAndroid 2.xではサポートされておらず、常にnullを返します。

revision, gender, categories, timezone


Android 1.X に関する注意点
------------------

下記のプロパティはAndroid 1.xではサポートされておらず、常にnullを返します。

name, nickname, revision, birthday, gender, photos ,categories, urls, timezone

BlackBerry WebWorks に関する注意点
---------------------------------------------

下記のプロパティはBlack Berry WebWorksではサポートされておらず、常にnullを返します。

nickname, ims, revision, gender, timezone

下記のプロパティはBlack Berry WebWorksで部分的にサポートされています。

phoneNumbers: 電話番号はそれぞれのtypeに従って下記のフィールドに保存されます。

-typeがhomeの場合: homePhone1, homePhone2
-typeがworkの場合: workPhone1, workPhone2
-typeがmobileの場合: mobilePhone
-typeがfaxの場合: faxPhone
-typeがpagerの場合: pagerPhone
-typeが上記以外の場合: otherPhone

email: Eメールは3つまでそれぞれ、email1, email2, email3フィールドに保存されます。
addresses: 住所は2つまでそれぞれ、homeAddress, workAddressフィールドに保存されます。
organizations: 組織の名前とタイトルはそれぞれ、compay, titleフィールドに保存されます。
photos: サムネイルサイズの写真のみサポートされています。連絡先に写真を登録する場合、64bitにかけたイメージか、イメージの場所を指定するURLを渡します。写真はBlack Berryに保存される前に縮小されます。
categories: 'Bussiness' と 'Personal' カテゴリのみサポートされています。
url: URLはBlack Berryのwebpageフィールドに保存されます。

下記のプロパティはBlack Berry WebWorksでサポートされています。

id: 連絡先が保存されたときにデバイスより割り当てられます。
displayname: BlackBerryのuser1フィールドに保存されます。


iOS に関する注意点
----------
- __displayName:__ このプロパティはサポートされていません。ContactName が指定されていない場合以外はnullを返します。ContactName が指定されていない場合、合成された名前、nickname、または "" がdiplayNameとしてそれぞれ返されます。 
- __revision:__ このプロパティは読み取り専用です。このプロパティはJavaScriptのDateオブジェクトとして返されます。
- __birthday:__ JavaScriptのDateオブジェクトとして指定する必要があります。
- __gender:__ このプロパティはサポートされていません。常にnullを返します。
- __photos:__ 返された写真はアプリの一時ディレクトリに保存され、写真へのFileURLが返されます。一時ディレクトリはアプリケーションを終了する際に削除されます。
- __categories:__  このプロパティはサポートされていません。常にnullを返します。
