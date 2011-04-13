ContactOrganization
===================

`Contact` オブジェクトの組織情報を格納します。

プロパティ
----------

- __name:__ 組織名を表します _(DOMString)_
- __department:__ 部署名を表します _(DOMString)_
- __title:__ 役職名を表します _(DOMString)_

詳細
-------

`ContactOrganization` オブジェクトは連絡先の組織情報を表します。 `Contact` オブジェクトは複数の `ContactOrganization` オブジェクトを配列の中に格納します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

使用例
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].organizations.length; j++) {
				alert("名前: " + contacts[i].organizations[j].name + "\n" + 
						"部署: "  + contacts[i].organizations[j].department + "\n" + 
						"役職: "  + contacts[i].organizations[j].title);
			}
		}
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","organizations"];
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
			filter = ["displayName","organizations"];
			navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: 現在の連絡先を取得
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].organizations.length; j++) {
					alert("名前: " + contacts[i].organizations[j].name + "\n" + 
							"部署: "  + contacts[i].organizations[j].department + "\n" + 
							"役職: "  + contacts[i].organizations[j].title);
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

- __title:__ このプロパティはAndroid 1.Xではサポートされていません。常にfalseを返します。

BlackBerry WebWorks に関する注意点
--------------------------------------------

- __name:__ このプロパティはBlackBerryで部分的にサポートされていません。組織名は BlackBerry __company__ フィールドに保存されます。
- __department:__ このプロパティはBlackBerry WebWorksではサポートされていません。常にfalseを返します。
- __title:__ このプロパティはBlackBerryで部分的にサポートされていません。役職名はBlackBerry __jobTitle__ フィールドに保存されます。

iOS に関する注意点
-----------
- __name:__ このプロパティはiOSで部分的にサポートされており、組織名はiOS __kABPersonOrganizationProperty__ フィールドに保存されます。
- __department__: このプロパティはiOSで部分的にサポートされており、部署名はiOS __kABPersonDepartmentProperty__ フィールドに保存されます。
- __title__: このプロパティはiOSで部分的にサポートされており、役職名はiOS __kABPersonJobTitleProperty__ フィールドに保存されます。

