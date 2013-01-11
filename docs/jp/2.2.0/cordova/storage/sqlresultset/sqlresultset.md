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

SQLResultSet
=======

SQLTransaction の executeSql メソッドが呼ばれるとき、 SQLResultSet とともにコールバック関数が呼び出されます。

プロパティー
-------

- __insertId__: SQLResultSet オブジェクトの SQL 文によりデータベースに挿入された行の行番号を表します
- __rowsAffected__: SQL 文によって変更された行数を表します。もし SQL 文がデータベースに変更を加えなかった場合は0を返します
- __rows__: 結果を表す SQLResultSetRowList オブジェクトです。行が返されなかった場合、オブジェクトは空になります

詳細
-------

SQLTransaction の executeSql メソッドが呼び出されるとき、 SQLResultSet オブジェクトとともにコールバック関数が呼び出されます。この結果オブジェクトは3つのプロパティーを持っています。1つめは `insertId` で、 SQL の insert 文が成功した行の番号を返します。もし SQL 文が insert 文では無かった場合、 `insertId` はセットされません。2つめの `rowsAffected` は SQL の select 文に対しては常に0を返します。 insert もしくは update 文に対しては、修正された行数を返します。最後の SQLResultSetList は、 SQL の select 文によって返されたデータを保持します。

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
        console.log("検索された行 = " + results.rows.length);
        // select 文のため、 rowsAffected は0となり、 true となります
        if (!results.rowsAffected) {
            console.log('どの行も変更されていません。');
            return false;
        }
        // insert 文では、このプロパティーは挿入された最終行を表します
        console.log("挿入された行 = " + results.insertId);
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
            console.log("検索された行 = " + results.rows.length);
            // select 文のため、 rowsAffected は0となり、 true となります
            if (!results.rowsAffected) {
                console.log('どの行も変更されていません。');
                return false;
            }
            // insert 文では、このプロパティーは挿入された最終行を表します
            console.log("挿入された行 = " + results.insertId);
        }

        // トランザクション失敗時のコールバック
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
