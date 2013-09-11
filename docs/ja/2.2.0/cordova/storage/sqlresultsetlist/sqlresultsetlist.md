---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

SQLResultSetList
=======

SQL 問い合わせから返される行を保持した SQLResultSet のプロパティーのうちの1つです。

プロパティー
-------

- __length__: SQL 問い合わせによって返される行の行数を表します

メソッド
-------

- __item__: 指定された行を JavaScript オブジェクトとして返します

詳細
-------

SQLResultSetList は SQL の select 文によって返されるデータを保持しています。このオブジェクトは select 文によって返された行の数を表す length プロパティーを持っています。ある行のデータを取得するためには、行番号を指定した `item` メソッドを使用します。この item メソッドは JavaScript オブジェクトを返します。この JavaScript オブジェクトは select 文が実行されたデータベースのカラムをプロパティーとして持っています。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone
- webOS
- Tizen

Execute SQL の例
------------------

    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }

    function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("DEMO table: " + len + " 行見つかりました。");
        for (var i=0; i<len; i++){
            console.log("行 = " + i + " ID = " + results.rows.item(i).id + " Data = " + results.rows.item(i).data);
        }
    }

    function errorCB(err) {
        alert("SQL 実行中にエラーが発生しました: "+err.code);
    }

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(queryDB, errorCB);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // データベースを操作
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }

        // データベースに問い合わせ
        //
        function queryDB(tx) {
            tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
        }

        // 問い合わせ成功時のコールバック
        //
        function querySuccess(tx, results) {
            var len = results.rows.length;
            console.log("DEMO table: " + len + " 行見つかりました。");
            for (var i=0; i<len; i++){
                console.log("行 = " + i + " ID = " + results.rows.item(i).id + " Data = " + results.rows.item(i).data);
            }
        }

        // トランザクション失敗時のコールバック
        //
        function errorCB(err) {
            console.log("SQL 実行中にエラーが発生しました: "+err.code);
        }

        // トランザクション成功時のコールバック
        //
        function successCB() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(queryDB, errorCB);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>データベース</p>
      </body>
    </html>
