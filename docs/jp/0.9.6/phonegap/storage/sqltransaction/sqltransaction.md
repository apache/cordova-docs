SQLTransaction
=======

データベースに対してSQL文を実行するメソッドを持ちます。

メソッド
-------

- __executeSql__: SQL文を実行します。

詳細
-------
 Database オブジェクトの Transaction メソッドを呼ぶ際、それに対応するコールバック関数が SQLTransaction オブジェクトと一緒に呼び出されます。
データベーストランザクションを作成するには、excuteSqlメソッドを複数回使用してください。



サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone

Execute SQL の例
------------------

	function populateDB(tx) {
		 tx.executeSql('DROP TABLE DEMO IF EXISTS');
		 tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
		 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
		 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
	}
	
	function errorCB(err) {
		alert("エラーが発生しました: "+err);
	}
	
	function successCB() {
		alert("成功しました。");
	}
	
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.transaction(populateDB, errorCB, successCB);

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
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(populateDB, errorCB, successCB);
        }
		
		// データベースの操作 
		//
		function populateDB(tx) {
			 tx.executeSql('DROP TABLE DEMO IF EXISTS');
			 tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
			 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
			 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
		}
		
		// 失敗時のコールバック
		//
		function errorCB(err) {
			alert("エラーが発生しました: "+err);
		}
		
		// 成功時のコールバック
		//
		function successCB() {
			alert("成功しました");
		}
	
        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>SQLのデータ処理</p>
      </body>
    </html>