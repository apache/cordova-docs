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

屬性之一的 `SQLResultSet` 從 SQL 查詢中包含的行返回。

## 屬性

*   **長度**： SQL 查詢所返回的行數。

## 方法

*   **專案**： 返回 JavaScript 物件所表示的指定索引處的行。

## 詳細資訊

`SQLResultSetRowList`包含從 SQL 返回的資料 `select` 語句。 該物件包含 `length` 屬性，該值多少行 `select` 語句返回。 若要獲取的資料行，調用 `item` 方法，以指定一個索引。 它返回 JavaScript `Object` 其屬性是的資料庫列 `select` 反對執行語句。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen

## 執行 SQL 快速示例

    函數 queryDB(tx) {tx.executeSql (' 選擇 * 從演示 '、 []、 querySuccess、 errorCB);}函數 querySuccess （德克薩斯州，結果） {var len = results.rows.length ；console.log ("演示表："+ len +"行發現") ；為 (var 我 = 0 ； 我 < len ； i + +) {console.log ("行 ="+ i +"ID ="+ results.rows.item (i).id +"的資料 ="+ results.rows.item(i).data) ；}} 函數 errorCB(err) {警報 （"處理 SQL 時出錯:"+ err.code） ；} var db = window.openDatabase ("資料庫"、"1.0"，"科爾多瓦演示"，200000) ；db.transaction errorCB queryDB） ；
    

## 完整的示例

    <!DOCTYPE html >< html >< 頭 >< 標題 > 存儲示例 < / 標題 >< 腳本類型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 腳本 >< 腳本類型 ="文本/javascript"charset ="utf 8"> / / 等待設備 API 庫載入 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 填充資料庫 / / 函數 populateDB(tx) {tx.executeSql ('下拉表如果存在演示') ；tx.executeSql (' 創建表如果不存在演示 （id 唯一的資料） ') ；tx.executeSql (' 的值插入到演示 （id、 資料） （1，"第一行"） ') ；tx.executeSql （插入到演示 （id、 資料） 值 （2，"第二行")) ；} / / 查詢資料庫 / / 函數 queryDB(tx) {tx.executeSql (' 選擇 * 從演示 '、 []、 querySuccess、 errorCB） ；} / / 查詢成功回檔 / / 函數 querySuccess （德克薩斯州，結果） {var len = results.rows.length ；console.log ("演示表："+ len +"行發現") ；為 (var 我 = 0 ； 我 < len ； i + +) {console.log ("行 ="+ i +"ID ="+ results.rows.item (i).id +"的資料 ="+ results.rows.item(i).data) ；}} / / 交易錯誤回檔 / / 函數 errorCB(err) {console.log ("處理 SQL 時出錯:"+ err.code） ；} / / 交易成功回檔 / / 函數 successCB() {var db = window.openDatabase ("資料庫"、"1.0"，"科爾多瓦演示"，200000) ；db.transaction errorCB queryDB） ；} / / 設備的 Api 可 / / 函數 onDeviceReady() {var db = window.openDatabase ("資料庫"、"1.0"，"科爾多瓦演示"，200000) ；db.transaction （populateDB、 errorCB、 successCB） ；} < / 腳本 >< / 頭 >< 身體 >< h1 > 示例 < / h1 >< p > 資料庫 </p >< / 身體 >< / html >