---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

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