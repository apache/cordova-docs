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


# ストレージ

> デバイスの記憶域オプションへのアクセスを提供します。

この API は 2 つの異なる W3C 仕様に基づくストレージ オプションを提供：

*   [Web ストレージ API 仕様][1]では、単純なキーと値のペアを使用してデータにアクセスすることができます。 LocalStorage このインターフェイスの詳細についてを参照してください。

*   [Web SQL データベースの仕様][2]では、SQL クエリを通じてより多くのフル機能を備えたデータベース テーブルにアクセスを提供しています。 このインタ フェースの概要下にすぐに表示されます。

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

コルドバは既にそれらをサポートしていないデバイスの少数派の両方のインターフェイスへのアクセスを提供します。それ以外の場合、組み込みの実装を適用します。

## メソッド

*   openDatabase

## 引数

*   database_name
*   database_version
*   database_displayname
*   database_size

## オブジェクト

*   データベース
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   Sqlerror 関数

## 機能へのアクセス

バージョン 3.0 は、現在ストレージ Api へのアクセスはコルドバに組み込まれてし、プラグインを追加するコマンド ライン インターフェイスでの説明に従って、CLI の使用を必要としません。

それ以上の年齢の一連の CLI に先行するコルドバ ツールを使用している場合、次のプラットフォームに固有の構成設定がまだ必要です。

*   （アンドロイド`app/res/xml/config.xml`)
    
        < 機能名 =「記憶域」>< param の名前 =「android パッケージ」value="org.apache.cordova.Storage"/></機能 >
        

*   （ブラックベリー WebWorks`www/config.xml`)
    
        < id="blackberry.widgetcache 機能"必要な ="true"バージョン =「1.0.0.0」/>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


# openDatabase

新しいを返します `Database` オブジェクト。

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## 説明

メソッドは、新しい SQL Lite データベースが作成されますを返します、 `Database` 、データの操作が可能なオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 6.0 およびより高い)
*   iOS
*   Tizen

## 簡単な例

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Open Database</p>
      </body>
    </html>


# database_name

データベースの名前。


# database_version

データベースのバージョン。


# database_displayname

データベースの表示名。


# database_size

バイト単位でデータベースのサイズ。


# データベース

SQL データベースへのアクセスを提供します。

## メソッド

*   **トランザクション**: データベース トランザクションを実行します。

*   **changeVersion**: スクリプトを自動的にバージョン番号を確認し、スキーマの更新時に変更できます。

## 詳細

`window.openDatabase()`メソッドが返す値は `Database` オブジェクトです。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 6.0 およびより高い)
*   iOS
*   Tizen

## トランザクションの簡単な例

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }
    
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }
    
    function successCB() {
        alert("success!");
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
    

## 変更バージョンの簡単な例

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        // Populate the database
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }
    
        // Transaction error callback
        //
        function errorCB(tx, err) {
            alert("Error processing SQL: "+err);
        }
    
        // Transaction success callback
        //
        function successCB() {
            alert("success!");
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Database</p>
      </body>
    </html>


# SQLTransaction

データベースに対する SQL 文の実行が可能です。

## メソッド

*   **executeSql**: SQL ステートメントを実行します。

## 詳細

呼び出して、 `Database` オブジェクトのトランザクション メソッド、パス、 `SQLTransaction` 指定されたコールバック メソッドをオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 6.0 およびより高い)
*   iOS
*   Tizen

## 簡単な例を SQL を実行します。

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }
    
    function errorCB(err) {
        alert("Error processing SQL: "+err);
    }
    
    function successCB() {
        alert("success!");
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        // Populate the database
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }
    
        // Transaction error callback
        //
        function errorCB(err) {
            alert("Error processing SQL: "+err);
        }
    
        // Transaction success callback
        //
        function successCB() {
            alert("success!");
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>SQLTransaction</p>
      </body>
    </html>


# SQLResultSet

ときに、 `SQLTransaction` オブジェクトの `executeSql` メソッドは、指定されたコールバック実行される、 `SQLResultSet` パラメーター。

## プロパティ

*   **insertId**: 行の行 ID を `SQLResultSet` オブジェクトの SQL 文をデータベースに挿入します。

*   **rowsAffected**： 0 ステートメントは、行に影響しない場合、SQL ステートメントによって変更された行の数。

*   **行**: `SQLResultSetRowList` 返される行を表す、空の行が返されない場合。

## 詳細

ときに、 `SQLTransaction` オブジェクトの `executeSql` メソッドは、指定されたコールバックで実行すること、 `SQLResultSet` 3 つのプロパティが含まれているパラメーター。

*   `insertId`、Successly の SQL 挿入ステートメントの行番号を返します。場合は、SQL は、任意の行を挿入しません、 `insertId` が設定されていません。

*   `rowsAffected`は、常に `` sql `select` ステートメント。ため `insert` または `update` 変更された行のステートメントの数を返します。

*   最終的な `SQLResultSetList` SQL の select ステートメントから返されたデータが含まれています。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 6.0 およびより高い)
*   iOS
*   Tizen

## 簡単な例を SQL を実行します。

    機能 queryDB(tx) {tx.executeSql (' 選択 * からデモ '、、querySuccess、errorCB);}querySuccess （テキサス州、結果） 機能 {console.log ("で返された行数 ="+ results.rows.length);//select ステートメントだったのでそして rowsAffected は 0 だった場合は、true になります (! results.rowsAffected) {console.log ('ない行!');リターン偽;}//、insert ステートメントのこのプロパティは最後に挿入された行 console.log の ID を返します ("最後に挿入された行の ID ="+ results.insertId);}errorCB(err) 関数 {警告 ("SQL を処理中にエラー:"+ err.code);}var db = window.openDatabase (「データベース」、「1.0」、」コルドバ デモ「、200000);db.transaction queryDB （errorCB）;
    

## 完全な例

    <!DOCTYPE html >< html >< 頭 >< タイトル > ストレージの例 </タイトル >< 型のスクリプト"テキスト/javascript に"charset =「utf-8」src="cordova.js ="></スクリプト >< 型のスクリプト"テキスト/javascript に"charset = =「utf-8」>/デバイス API ライブラリをロードするを待つ///document.addEventListener （"deviceready"、onDeviceReady、false);//データベース設定//関数 populateDB(tx) {tx.executeSql （' ドロップ テーブル IF EXISTS デモ'）;tx.executeSql （' 作成テーブル IF NOT 存在するデモ (id 固有データ)'）;tx.executeSql (' (id、データ) のデモに挿入値 （1、「最初の行」)');tx.executeSql ('(id、データ) のデモに挿入値 （2、」2 番目の行"));}//データベースのクエリ//queryDB(tx) 関数 {tx.executeSql (' 選択 * からデモ '、、querySuccess、errorCB);}//クエリ成功コールバック//querySuccess （テキサス州、結果） 関数 {console.log ("で返された行数 ="+ results.rows.length);//select ステートメントだったのでそして rowsAffected は 0 だった場合は、true になります (! results.rowsAffected) {console.log ('ない行!');リターン偽;}//、insert ステートメントのこのプロパティは最後に挿入された行 console.log の ID を返します ("最後に挿入された行の ID ="+ results.insertId);}//トランザクション エラー コールバック//errorCB(err) 関数 {console.log ("SQL を処理中にエラー:"+ err.code);}//取引成功コールバック//successCB() 関数 {var db = window.openDatabase (「データベース」、「1.0」、」コルドバ デモ「、200000);db.transaction queryDB （errorCB）;}/デバイス Api が利用可能な///onDeviceReady() 関数 {var db = window.openDatabase (「データベース」、「1.0」、」コルドバ デモ「、200000);db.transaction (populateDB、errorCB、successCB);} </スクリプト ></ヘッド >< 本体 >< h1 > 例 </h1 >< データベース p > </p ></ボディ ></html >


# SQLResultSetRowList

プロパティの 1 つ、 `SQLResultSet` の行を含む SQL クエリから返されます。

## プロパティ

*   **長さ**: SQL クエリによって返される行の数。

## メソッド

*   **項目**: JavaScript オブジェクトによって表される指定されたインデックス位置の行を返します。

## 詳細

`SQLResultSetRowList`、SQL から返されたデータが含まれています `select` ステートメント。 オブジェクトが含まれています、 `length` どのように多くの列を示すプロパティ、 `select` ステートメントを返します。 データの行を取得する呼び出し、 `item` のインデックスを指定するメソッド。 Java スクリプトの設定を返します `Object` プロパティは、データベースの列、 `select` に対してステートメントを実行します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 6.0 およびより高い)
*   iOS
*   Tizen

## 簡単な例を SQL を実行します。

    機能 queryDB(tx) {tx.executeSql (' 選択 * からデモ '、、querySuccess、errorCB);}querySuccess （テキサス州、結果） 機能 {var len = results.rows.length;console.log ("デモ テーブル:"len +「行が見つかりませんでした」);(var 私 = 0; 私は < len; i++) {console.log （"行 ="+ 私は +"ID ="+ results.rows.item (i) .id +"データ ="+ results.rows.item(i).data);}} 関数 errorCB(err) {警告 ("SQL を処理中にエラー:"+ err.code);} var db = window.openDatabase (「データベース」、「1.0」、」コルドバ デモ「、200000);db.transaction queryDB （errorCB）;
    

## 完全な例

    <!DOCTYPE html >< html >< 頭 >< タイトル > ストレージの例 </タイトル >< 型のスクリプト"テキスト/javascript に"charset =「utf-8」src="cordova.js ="></スクリプト >< 型のスクリプト"テキスト/javascript に"charset = =「utf-8」>/デバイス API ライブラリをロードするを待つ///document.addEventListener （"deviceready"、onDeviceReady、false);//データベース設定//関数 populateDB(tx) {tx.executeSql （' ドロップ テーブル IF EXISTS デモ'）;tx.executeSql （' 作成テーブル IF NOT 存在するデモ (id 固有データ)'）;tx.executeSql (' (id、データ) のデモに挿入値 （1、「最初の行」)');tx.executeSql ('(id、データ) のデモに挿入値 （2、」2 番目の行"));}//データベースのクエリ//queryDB(tx) 関数 {tx.executeSql (' 選択 * からデモ '、、querySuccess、errorCB);}//クエリ成功コールバック//querySuccess （テキサス州、結果） 関数 {var len = results.rows.length;console.log ("デモ テーブル:"len +「行が見つかりませんでした」);(var 私 = 0; 私は < len; i++) {console.log （"行 ="+ 私は +"ID ="+ results.rows.item (i) .id +"データ ="+ results.rows.item(i).data);}}//トランザクション エラー コールバック//errorCB(err) 関数 {console.log ("SQL を処理中にエラー:"+ err.code);}//取引成功コールバック//successCB() 関数 {var db = window.openDatabase (「データベース」、「1.0」、」コルドバ デモ「、200000);db.transaction queryDB （errorCB）;}/デバイス Api が利用可能な///onDeviceReady() 関数 {var db = window.openDatabase (「データベース」、「1.0」、」コルドバ デモ「、200000);db.transaction (populateDB、errorCB、successCB);} </スクリプト ></ヘッド >< 本体 >< h1 > 例 </h1 >< データベース p > </p ></ボディ ></html >


# SQLError

A `SQLError` オブジェクトにエラーが発生した場合にスローされます。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。

*   **メッセージ**: エラーの説明。

## 定数

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## 説明

`SQLError`オブジェクトがデータベースを操作するときにエラーが発生したときにスローされます。


# localStorage

W3C の[Web ストレージ インターフェイス][1]へのアクセスを提供します

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## メソッド

*   **キー**: 指定した位置にキーの名前を返します。

*   **getItem**: 指定されたキーで識別される項目を返します。

*   **setItem**: キーを持つ項目の値を割り当てます。

*   **removeItem**: 指定されたキーで識別される項目を削除します。

*   **オフ**: すべてのキー/値ペアを削除します。

## 詳細

`window.localStorage`、W3C の[Web ストレージ インターフェイス][2]が実装するインターフェイス。 アプリを使用するキーと値のペアを使用して永続的なデータを保存できます。 `window.sessionStorage`インターフェイスのすべてのデータは、アプリを閉じるたびにクリアされることを除いてあらゆる点で同じように動作します。 各データベースは、別の名前空間を提供します。

 [2]: http://dev.w3.org/html5/webstorage/

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 6.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8

## キーの簡単な例

    var keyName = window.localStorage.key(0);
    

## 設定項目の簡単な例

    window.localStorage.setItem("key", "value");
    

## アイテムの簡単な例を得る

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## 削除する項目の簡単な例

        window.localStorage.removeItem("key");
    

## オフに簡単な例

        window.localStorage.clear();
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // keyname is now equal to "key"
            var value = window.localStorage.getItem("key");
            // value is now equal to "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage is now empty
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
    

## Windows Phone 7 の癖

ドット表記では*ない*Windows Phone 7 で利用可能です。 使用してください `setItem` または `getItem` など、ストレージ オブジェクトから直接キーにアクセスするのではなく`window.localStorage.someKey`.
