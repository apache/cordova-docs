openDatabase
===============

 `Database` オブジェクトを新規作成します。

    var dbShell = window.openDatabase(name, version, display_name, size);

概要
-----------

このメソッドは SQLite データベースを新規作成し、データベースオブジェクトを返します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone

使用例
-------------

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

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
			var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
		
        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>データベースを開く</p>
      </body>
    </html>