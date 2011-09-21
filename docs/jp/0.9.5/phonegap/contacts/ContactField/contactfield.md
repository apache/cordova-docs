ContactField
============

 `Contact` オブジェクトで使用される汎用フィールドに用いられます。
 `ContactField` オブジェクトとして格納されるデータとしては、メールアドレスや電話番号などが挙げられます。

プロパティ
----------

- __type:__ フィールド名を表します (例: home) _(DOMString)_
- __value:__ フィールド値を表します　（例：　電話番号、メールアドレス） _(DOMString)_
- __pref:__ データが推奨値を格納していた場合に true がセットされます _(boolean)_

詳細
-------

 `ContactField` オブジェクトは、連絡先の各フィールドを汎用的に格納するためのコンポーネントです。
 各 `ContactField` オブジェクトは、value、type、pref の3つのプロパティを持っています。
 `Contact` オブジェクトは電話番号やメールアドレスなどといった複数のプロパティを `ContactFIeld[]` 配列に保存しています。

多くの場合 `ContactField` オブジェクトの __type__ 属性に定義済みの値は存在しません。
たとえば電話番号について __type__ 属性の値としてhome、work、mobile、iPhoneなど、デバイスのプラットフォームに応じて異なった値が格納されます。

ただし __photos__ フィールドに限り __type__ 属性には画像フォーマットが格納されます。
この値が 'url' の場合 __value__ 属性には画像のURLがセットされます。
また、'base64' の場合はBase64形式でエンコードされた画像を表す文字列が格納されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0　以上)
- iOS

使用例
-------------

	// 新しい連絡先を作成
	var contact = navigator.service.contacts.create();
	
	// 連絡先の電話番号をContactField[]に格納
	var phoneNumbers = [3];
	phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
	phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // 適当な電話番号
	phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
	contact.phoneNumbers = phoneNumbers;
	
	// 連絡先を保存
	contact.save();

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>連絡先の使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
			// 新しい連絡先を作成
			var contact = navigator.service.contacts.create();

			// ContactField[] に電話番号を保存
			var phoneNumbers = [3];
			phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
			phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // 適当な電話番号
			phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
			contact.phoneNumbers = phoneNumbers;

			// 連絡先を保存
			contact.save();

			// 連絡先を検索し、名前と電話番号を表示
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","phoneNumbers"];
			navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: 現在の連絡先を取得
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				// display phone numbers
				for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
					alert("タイプ: " + contacts[i].phoneNumbers[j].type + "\n" + 
							"値: "  + contacts[i].phoneNumbers[j].value + "\n" + 
							"Preferred: "  + contacts[i].phoneNumbers[j].pref);
				}
			}
		};
    
        // onError: コンタクトの取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>使用例</h1>
        <p>連絡先の検索</p>
      </body>
    </html>

Android に関する注意点
--------------

- __pref:__ このプロパティーはAndroidではサポートされていません。常にfalseを返します。

BlackBerry WebWorks に関する注意点
--------------------------------------------

- __type:__ このプロパティーは部分的にサポートされています。電話番号に使われます。
- __value:__ このプロパティーはサポートされています。
- __pref:__ このプロパティーはサポートされていません。常にfalseを返します。

iOS に関する注意点
-----------
- __pref:__ このプロパティーはiOSではサポートされておらず、常にfalseを返します。
