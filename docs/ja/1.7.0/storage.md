---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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


Storage
==========

> デバイスのストレージにアクセスする機能を提供します。

この API は [W3C Web SQL Database 仕様書](http://dev.w3.org/html5/webdatabase/) と [W3C Web Storage API 仕様書](http://dev.w3.org/html5/webstorage/) をベースとしています。いくつかのデバイスではすでにこの機能の実装を提供しています。これらについては、 Cordova の実装ではなくビルトインのサポートが実行されます。ストレージのサポートがされてないデバイスについては、 Cordova の実装によって W3C の仕様に沿った機能が提供されます。

メソッド
-------

- openDatabase

引数
---------

- database_name
- database_version
- database_displayname
- database_size

オブジェクト
-------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage



openDatabase
===============

Database オブジェクトを新規作成します。

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);

概要
-----------

window.openDatabase メソッドは新しい Database オブジェクトを返します。

このメソッドは SQLite のデータベースを新規作成し、 Database オブジェクトを返します。 Database オブジェクトは、データを操作するために使います。

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

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>データベースを開く</p>
      </body>
    </html>



database_name
============

データベース名です。



database_version
=============

データベースのバージョンです。



database_displayname
==================

実際に表示されるデータベース名です。



database_size
==============

データベースのサイズです。バイト単位で表されます。



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
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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



SQLTransaction
=======

データベースに対して SQL を実行するためのメソッドを提供します。

メソッド
-------

- __executeSql__: SQL 文を実行します

詳細
-------

Database オブジェクトの transaction メソッドを呼ぶとき、それに対応するコールバック関数が SQLTransaction オブジェクトと一緒に呼び出されます。 executeSql メソッドを複数回使用することで、データベーストランザクションを作成できます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone

Execute SQL の例
------------------

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }

    function errorCB(err) {
        alert("SQL 実行中にエラーが発生しました: "+err);
    }

    function successCB() {
        alert("成功しました。");
    }

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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
        function errorCB(err) {
            alert("SQL 実行中にエラーが発生しました: "+err);
        }

        // トランザクション成功時のコールバック
        //
        function successCB() {
            alert("成功しました。");
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>SQLトランザクション</p>
      </body>
    </html>



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
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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
            if (!resultSet.rowsAffected) {
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
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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



SQLError
========

エラー発生時に投げられる `SQLError` オブジェクトです。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します
- __message:__ エラーの詳細メッセージを表します

定数
---------

- `SQLError.UNKNOWN_ERR`
- `SQLError.DATABASE_ERR
- `SQLError.VERSION_ERR`
- `SQLError.TOO_LARGE_ERR`
- `SQLError.QUOTA_ERR`
- `SQLError.SYNTAX_ERR`
- `SQLError.CONSTRAINT_ERR`
- `SQLError.TIMEOUT_ERR`

概要
-----------

データベース操作時のエラーに対して投げられる `SQLError` オブジェクトです。




localStorage
===============

W3C Storage interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute) へのアクセスを提供します。

    var storage = window.localStorage;

メソッド
-------

- __key__: キーの名前を返します
- __getItem__: キーによって指定されたアイテムを返します
- __setItem__: キーによって指定されたアイテムを保存します
- __removeItem__: キーによって指定されたアイテムを削除します
- __clear__: 全てのキーとアイテムを削除します

詳細
-----------

localStorage は W3C Storage interface へのインターフェースを提供します。キーと値のペアでデータを管理します。

注意: window.sessionStorage は同じインターフェースを提供しますが、アプリが起動するたびにこの値はクリアされます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone
- Windows Phone 7

Key の例
-------------

    var keyName = window.localStorage.key(0);

Set Item の例
-------------

    window.localStorage.setItem("key", "value");

Get Item の例
-------------

    var value = window.localStorage.getItem("key");
    // value の値は "value"

Remove Item の例
-------------

    window.localStorage.removeItem("key");

Clear の例
-------------

    window.localStorage.clear();

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // key の値は "key"
            var value = window.localStorage.getItem("key");
            // value の値は "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage は空
        }


        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>localStorage のサンプル</p>
      </body>
    </html>


Windows Phone 7 に関する注意点
-------------

- ドット表記は Windows Phone では使用できません。 window.localStorage.setItem/getItem メソッドを使用して、 W3C の仕様で定義されている window.localStorage.someKey = 'someValue'; の方法は使用しないでください。

