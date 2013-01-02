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

Database
=======

データベースの操作に必要なメソッドを提供します。

メソッド
-------

- __transaction__: データベースのトランザクションを実行します
- __changeVersion__: スクリプトがデータベースのバージョンを自動的に確認し、スキーマのアップデートと同時にバージョンを変更します

詳細
-------

Database オブジェクトは `window.openDatabase()` メソッド呼び出し時に返されるオブジェクトです。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone
- webOS
- Tizen

Transaction の例
------------------
    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }

    function errorCB(err) {
        alert("SQL実行中にエラーが発生しました: "+err.code);
    }

    function successCB() {
        alert("成功しました。");
    }

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);

Change Version の例
-------------------

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }

        // データベースを操作 
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }

        // トランザクション失敗時のコールバック
        //
        function errorCB(tx, err) {
            alert("SQL実行中にエラーが発生しました: "+err);
        }

        // トランザクション成功時のコールバック
        //
        function successCB() {
            alert("成功しました。");
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Database</p>
      </body>
    </html>

Android 1.X に関する注意点
------------------

- __changeVersion:__ このメソッドは Android 1.X デバイスではサポートされていません。
