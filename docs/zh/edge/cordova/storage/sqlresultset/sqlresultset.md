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

當 `SQLTransaction` 物件的 `executeSql` 方法時，執行指定的回檔 `SQLResultSet` 參數。

## 屬性

*   **insertId**： 行的行的 ID， `SQLResultSet` 物件的 SQL 語句插入到資料庫中。

*   **rowsAffected**： 由零如果該語句不會影響任何行的 SQL 語句更改的行數。

*   **行**： `SQLResultSetRowList` 表示返回的行，如果未返回行，則為空。

## 詳細資訊

當 `SQLTransaction` 物件的 `executeSql` 方法時，執行指定的回檔 `SQLResultSet` 參數，其中包含三個屬性：

*   `insertId`返回組裝成功的 SQL 插入語句的行號。如果 SQL 不會插入任何行， `insertId` 未設置。

*   `rowsAffected`始終是 `` 為一個 SQL `select` 語句。為 `insert` 或 `update` 它返回的數的語句修改的行。

*   決賽 `SQLResultSetList` 包含從一個 SQL select 語句返回的資料。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen

## 執行 SQL 快速示例

    函數 queryDB(tx) {tx.executeSql (' 選擇 * 從演示 '、 []、 querySuccess、 errorCB);}函數 querySuccess （德克薩斯州，結果） {console.log ("返回行 ="+ results.rows.length） ；/ / 這將是真實的因為這是一條 select 語句，所以 rowsAffected 是 0，如果 (! results.rowsAffected) {console.log ('沒有行受影響!') ；返回 false ；} / / 的 insert 語句，此屬性將返回的最後插入的行 console.log 的 ID （"最後插入的行 ID ="+ results.insertId);}函數 errorCB(err) {警報 （"處理 SQL 時出錯:"+ err.code);}var db = window.openDatabase ("資料庫"、"1.0"，"科爾多瓦演示"，200000) ；db.transaction errorCB queryDB） ；
    

## 完整的示例

    <!DOCTYPE html >< html >< 頭 >< 標題 > 存儲示例 < / 標題 >< 腳本類型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 腳本 >< 腳本類型 ="文本/javascript"charset ="utf 8"> / / 等待設備 API 庫載入 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 填充資料庫 / / 函數 populateDB(tx) {tx.executeSql ('下拉表如果存在演示') ；tx.executeSql (' 創建表如果不存在演示 （id 唯一的資料） ') ；tx.executeSql (' 的值插入到演示 （id、 資料） （1，"第一行"） ') ；tx.executeSql （插入到演示 （id、 資料） 值 （2，"第二行")) ；} / / 查詢資料庫 / / 函數 queryDB(tx) {tx.executeSql (' 選擇 * 從演示 '、 []、 querySuccess、 errorCB） ；} / / 查詢成功回檔 / / 函數 querySuccess （德克薩斯州，結果） {console.log ("返回行 ="+ results.rows.length） ；/ / 這將是真實的因為這是一條 select 語句，所以 rowsAffected 是 0，如果 (! results.rowsAffected) {console.log ('沒有行受影響!') ；返回 false ；} / / 的 insert 語句，此屬性將返回的最後插入的行 console.log 的 ID （"最後插入的行 ID ="+ results.insertId） ；} / / 交易錯誤回檔 / / 函數 errorCB(err) {console.log ("處理 SQL 時出錯:"+ err.code） ；} / / 交易成功回檔 / / 函數 successCB() {var db = window.openDatabase ("資料庫"、"1.0"，"科爾多瓦演示"，200000) ；db.transaction errorCB queryDB） ；} / / 設備的 Api 可 / / 函數 onDeviceReady() {var db = window.openDatabase ("資料庫"、"1.0"，"科爾多瓦演示"，200000) ；db.transaction （populateDB、 errorCB、 successCB） ；} < / 腳本 >< / 頭 >< 身體 >< h1 > 示例 < / h1 >< p > 資料庫 </p >< / 身體 >< / html >