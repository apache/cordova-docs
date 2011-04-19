contacts.find
=============

デバイスの連絡先データベースに問い合わせを行い、`Contact` オブジェクトを取得します。

    navigator.service.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);

概要
-----------

contact.findはデバイスの連絡先データベースに問い合わせを行い、 `Contact` オブジェクトの配列を返す非同期関数です。
作成されたオブジェクトは __contactSuccess__ パラメータに従って `contactSuccess` コールバック関数に送られます。

このメソッドを使用する際は __contactFields__ パラメータに検索フィールドを指定します。
そして、 __contactFields__ パラメータに渡したフィールドだけが `Contact` オブジェクトのプロパティとして 
`contactSuccess` コールバック関数に送られます。
__contactFields__ パラメータが空の場合は `id` プロパティのみをもつ `Contact` オブジェクト配列が作成されます。

連絡先データベースの問い合わせには __contactFindOptions.filter__ を用いて検索条件を絞ることができます。
このオプションが指定されていた場合、大文字小文字の区別なく、部分一致方式により 
__contactFields__ パラメータに指定されたフィールドの検索が行われます。 
_どれかの_ フィールドにマッチした内容があった場合、その連絡先情報が戻ります。

パラメータ
----------

- __contactFields:__ 検索条件に格納されるフィールドを指定します。このパラメータに定義されたフィールドのみが `Contact` オブジェクトにセットされます _(DOMString[])_ [必須]
- __contactSuccess:__ 連絡先データベースへの問い合わせに成功した場合に呼び出されるコールバック関数を指定します [必須]
- __contactError:__ 連絡先データベースへの問い合わせに失敗した場合に呼び出されるコールバック関数を指定します [任意]
- __contactFindOptions:__ 連絡先情報に絞り込み検索を行うための検索オプションを指定します [任意]

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

使用例
-------------

    function onSuccess(contacts) {
        alert('検索結果： ' + contacts.length + ' contacts.');
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    // Bobという名前が含まれるすべての連絡先を取得
    var options = new ContactFindOptions();
    options.filter="Bob"; 
    var fields = ["displayName", "name"];
    navigator.service.contacts.find(fields, onSuccess, onError, options);

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
		    // 全てのフィールドから'Bob'という名前の連絡先を検索
		    var options = new ContactFindOptions();
			options.filter="Bob"; 
			var fields = ["displayName", "name"];
		    navigator.service.contacts.find(fields, onSuccess, onError, options);
        }
    
        // onSuccess: 検索に成功した場合
        //
        function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				console.log("表示名 = " + contacts[i].displayName);
			}
        }
    
        // onError: 検索に失敗した場合
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>連絡先を検索します</p>
      </body>
    </html>
    
iOS に関する注意点
----------
- 結果が検索されない場合、iOSではnullを返します。その他のプラットフォームは空の配列を返します。