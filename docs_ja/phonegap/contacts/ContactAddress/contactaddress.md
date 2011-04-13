ContactAddress
==============

 `Contact` オブジェクトの住所プロパティを表します。

プロパティ
----------

- __formatted:__ 住所全体を表します _(DOMString)_
- __streetAddress:__ 番地を表します _(DOMString)_
- __locality:__ 都市名を表します _(DOMString)_
- __region:__ 地域名を表します _(DOMString)_
- __postalCode:__ 郵便番号を表します _(DOMString)_
- __country:__ 国名を表します _(DOMString)_

詳細
-------

 `ContactAddress` オブジェクトは連絡先の各住所を表します。`Contact` オブジェクトは、複数の住所が格納された `ContactAddress[]` 配列を保持しています。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

使用例
-------------

	// すべての連絡先情報を取得し、表示します
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].addresses.length; j++) {
				alert("住所: " + contacts[i].addresses[j].formatted + "\n" + 
						"番地: "  + contacts[i].addresses[j].streetAddress + "\n" + 
						"都市: "  + contacts[i].addresses[j].locality + "\n" + 
						"地域: "  + contacts[i].addresses[j].region + "\n" + 
						"郵便番号: "  + contacts[i].addresses[j].postalCode + "\n" + 
						"国: "  + contacts[i].addresses[j].country);
			}
		}
    };

    function onError() {
        alert('エラーが発生しました');
    };

    // 連絡先を検索します
    var options = new ContactFindOptions();
	options.filter=""; 
	var filter = ["displayName","addresses"];
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
		    // 全ての連絡先を検索します。
		    var options = new ContactFindOptions();
			options.filter=""; 
			var filter = ["displayName","addresses"];
		    navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: 現在の連絡先を取得
        //
		function onSuccess(contacts) {
			// 全ての連絡先の住所を表示します。
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].addresses.length; j++) {
					alert("住所: " + contacts[i].addresses[j].formatted + "\n" + 
							"番地: "  + contacts[i].addresses[j].streetAddress + "\n" + 
							"都市: "  + contacts[i].addresses[j].locality + "\n" + 
							"地域: "  + contacts[i].addresses[j].region + "\n" + 
							"郵便番号: "  + contacts[i].addresses[j].postalCode + "\n" + 
							"国: "  + contacts[i].addresses[j].country);
				}
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

Android 1.X に関する注意点
------------------

以下のプロパティはAndroid1.xではサポートされていません。常にnullを返します。

streetAddress, locality, regiron, postalCode, couuntry


BlackBerry WebWorks に関する注意点
--------------------------------------------

- __formatted:__ このプロパティは部分的にサポートされており、BlackBerryのアドレスフィールドの連結を返します。
- __streetAddress:__ このプロパティはサポートされておりBlackBerryのaddress1とaddress2の連結を返します。
- __locality:__ このプロパティはサポートされており、BlackBerryのcityアドレスフィールドに保存されます。
- __region:__ このプロパティはサポートされており、BlackberryのStateProvinceアドレスフィールドに保存されます。
- __postalCode:__このプロパティはサポートされており、BlackberryのzipPostalアドレスフィールドに保存されます。 
- __country:__ このプロパティはBlackBerry WebWorksによりサポートされています。

iOS に関する注意点
----------
- __formatted:__ このプロパティはサポートされていません。
