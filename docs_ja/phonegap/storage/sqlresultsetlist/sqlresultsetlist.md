SQLResultSetList
=======

SQLへの問い合わせから返される、行を持った SQLResultSet のプロパティーのうちのひとつです。


プロパティ
-------

- __length__: SQLへの問い合わせによって返される行の総数です。

メソッド
-------

- __item__: 指定された行をJavaScript オブジェクトとして返します。

詳細
-------
`SQLResultSetList` は SQL select 文によって返されたデータを保有しています。
このオブジェクトは select 文に返された行の数を表す、length プロパティーを持っています。
行のデータを取得するためにはインデックスを指定した `item` メソッドを使用してください。
 `item` メソッドは JavaScript オブジェクトを返します。これにより返されるオブジェクトは select 文によって実行されたデータベースのカラムをプロパティとして持っています。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone

SQLを実行する例
------------------

	function queryDB(tx) {
		tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	}

	function querySuccess(tx, results) {
		var len = results.rows.length;
		console.log("DEMO table: " + len + " の行が見つかりました。");
		for (var i=0; i<len; i++){
			console.log("行 = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
		}
	}
	
	function errorCB(err) {
		alert("エラーを処理します: "+err.code);
	}
	
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.transaction(queryDB, errorCB);

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

		// データベースの操作
		//
		function populateDB(tx) {
			tx.executeSql('DROP TABLE DEMO IF EXISTS');
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
		}

		// データベースへ問い合わせ
		//
		function queryDB(tx) {
			tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
		}

		// 成功時のコールバック
		//
		function querySuccess(tx, results) {
			var len = results.rows.length;
			console.log("DEMO table: " + len + " の行が見つかりました。");
			for (var i=0; i<len; i++){
				console.log("行 = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
			}
		}

		// トランザクション失敗時のコールバック
		//
		function errorCB(err) {
			console.log("Error processing SQL: "+err.code);
		}

		// トランザクション成功時のコールバック
		//
		function successCB() {
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(queryDB, errorCB);
		}

		// PhoneGap準備完了
		//
		function onDeviceReady() {
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(populateDB, errorCB, successCB);
		}
	
        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>データベース</p>
      </body>
    </html>