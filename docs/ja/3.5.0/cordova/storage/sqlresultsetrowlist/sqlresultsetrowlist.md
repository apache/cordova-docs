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