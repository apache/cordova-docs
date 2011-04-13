ContactName
===========

`Contact` オブジェクトのnameプロパティを格納します。

プロパティ
----------

- __formatted:__ 連絡先のフルネームを表します _(DOMString)_
- __familyName:__ 連絡先の名字を表します _(DOMString)_
- __givenName:__ 連絡先の名前を表します _(DOMString)_
- __middleName:__ 連絡先のミドルネームを表します _(DOMString)_
- __honorificPrefix:__ 連絡先の接頭敬称を表します (例：Mr. Dr.) _(DOMString)_
- __honorificSuffix:__ 連絡先の接尾敬称を表します _(DOMString)_

詳細
-------

`ContactName` オブジェクトは連絡先の name プロパティの情報を格納します。

サポートされているプラットフォーム
-------------------

- Android 2.X
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

使用例
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert("名前: " + contacts[i].name.formatted + "\n" + 
					"姓: "  + contacts[i].name.familyName + "\n" + 
					"名: "  + contacts[i].name.givenName + "\n" + 
					"ミドルネーム: "  + contacts[i].name.middleName + "\n" + 
					"接頭敬称: "  + contacts[i].name.honorificSuffix + "\n" + 
					"接尾敬称: "  + contacts[i].name.honorificSuffix);
		}
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","name"];
    navigator.service.contacts.find(filter, onSuccess, onError, options);

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

        // PhoneGapの準備完了
        //
        function onDeviceReady() {
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName"];
			navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: 現在の連絡先を取得
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				alert("Formatted: " + contacts[i].name.formatted + "\n" + 
						"名字: "  + contacts[i].name.familyName + "\n" + 
						"名前: "  + contacts[i].name.givenName + "\n" + 
						"ミドルネーム: "  + contacts[i].name.middleName + "\n" + 
						"敬称: "  + contacts[i].name.honorificSuffix + "\n" + 
						"敬称: "  + contacts[i].name.honorificPrefix);
			}
		};
    
        // onError: 連絡先の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>使用例</h1>
        <p>連絡先を検索</p>
      </body>
    </html>

Android に関する注意点
------------
- __formatted:__ このプロパティは部分的にサポートされています。取得時は、honorifixPrefix、givenName、middleName、familyName、honorificSuffixを連結したものを返しますが、保存は行われません。

BlackBerry WebWorks に関する注意点
---------------------------------------------

- __formatted:__ このプロパティは部分的にサポートされています。firstNameとlastNameフィールドの連結を返します。
- __familyName:__ このプロパティはBlackBerry WebWorksでサポートされており、BlackBerrlastNameフィールドに保存されます。
- __givenName:__　このプロパティはBlackBerry WebWorksでサポートされており、BlackBerry __firstName__ フィールドに保存されます。
- __middleName:__ このプロパティはBlackBerry WebWorksではサポートされておらず、常にfalseを返します。
- __honorificPrefix:__ このプロパティはBlackBerry WebWorksではサポートされておらず、常にfalseを返します。
- __honorificSuffix:__ このプロパティはBlackBerry WebWorksではサポートされておらず、常にfalseを返します。

iOS に関する注意点
------------
- __formatted:__ このプロパティはiOSでサポートされています。複合名を返しますが、保存は行われません。