ContactFindOptions
==================

`contacts.find` 関数の検索結果を絞るために使用するプロパティを表します。

プロパティ
----------

- __filter:__ 連絡先情報の検索文字列を表します _(DOMString)_ (デフォルト: "")
- __multiple:__ 複数の連絡先を返すかどうかを指定します _(Boolean)_ (デフォルト: true)
- __updatedSince:__ 指定した日にち以降に更新された連絡先のみを返します _(Date)_ (デフォルト: "")

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

使用例
-------------

	// 呼び出し成功
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert(contacts[i].displayName);
		}
    };

	// 呼び出し失敗
    function onError() {
        alert('エラーが発生しました。');
    };

	// 検索条件を指定
    var options = new ContactFindOptions();
	options.filter="";			// 空のサーチは全ての連絡先を返却
	options.multiple=true;		// 複数の結果を返却
	filter = ["displayName"];	// contact.displayName フィールドを返却
	
	// 検索を実行
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

        // PhoneGap準備完了
        //
        function onDeviceReady() {
			// specify contact search criteria
		    var options = new ContactFindOptions();
			options.filter="";			// 空のサーチは全ての連絡先を返します。
			options.multiple=true;		// 複数の結果を返却
			filter = ["displayName"];	// contact.displayName フィールドを返却

			// 連絡先を検索
		    navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: 現在の連絡先を取得
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				alert(contacts[i].displayName);
			}
		};
    
        // onError: 連絡先の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>使用例</h1>
        <p>連絡先を検索</p>
      </body>
    </html>

Android に関する注意点
----------
- __updatedSince:__ このプロパティはサポートされていません。
    
BlackBerry WebWorks に関する注意点
---------------------------------------------
- __updatedSince:__ このプロパティはサポートされていません。
