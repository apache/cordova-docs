contacts.create
===============

新しいContactオブジェクトを作成します。

    var contact = navigator.service.contacts.create(properties);

概要
-----------

contacts.create関数は新しいContactオブジェクトを同期的に作成します。

contacts.create関数で作成したContactオブジェクトは、デバイスのデータベースには残りません。デバイスに保存するには、 `Contact.save` 関数を使用します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

使用例
-------------

    var myContact = navigator.service.contacts.create({"displayName": "Test User"});

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>連絡先の例</title>

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
            var myContact = navigator.service.contacts.create({"displayName": "Test User"});
            myContact.gender = "男性";
            console.log("連絡先, " + myContact.displayName + ", は " + myContact.gender + " gender");
        }
    

        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>連絡先を作成しました</p>
      </body>
    </html>