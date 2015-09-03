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


# 存儲

> 提供對設備的存儲選項的訪問。

此 API 提供了基於兩個不同的 W3C 規範的存儲選項：

*   [Web 存儲 API 規範][1]允許您要訪問的資料通過簡單的鍵/值對。 上認為在此介面上的完整詳細資訊，請參閱節。

*   [Web SQL 資料庫規範][2]提供更多的功能全面的資料庫表訪問通過 SQL 查詢。 此介面的摘要將立即出現下面。

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

科爾多瓦提供兩個介面都對少數已經不支援他們的設備的訪問。否則內置實現應用。

## 方法

*   大概

## 參數

*   database_name
*   database_version
*   database_displayname
*   database_size

## 物件

*   資料庫
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   SQLError

## 訪問功能

版本為 3.0，對存儲 Api 的訪問內置於科爾多瓦，，不需要使用 CLI 要添加的外掛程式，如所述的命令列介面。

如果您使用較舊的前面，CLI 的科爾多瓦工具集，，仍然需要以下的平臺特定的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="存儲">< 參數名稱 ="android 包"value="org.apache.cordova.Storage"/ >< / 功能 >
        

*   黑莓手機 WebWorks （中`www/config.xml`)
    
        < 功能 id="blackberry.widgetcache"所需 ="true"版本 ="1.0.0.0"/ >
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# 大概

返回一個新的 `Database` 物件。

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## 說明

方法創建一個新的 SQL Lite 資料庫並返回 `Database` 允許對資料進行操作的物件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen

## 快速的示例

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## 完整的示例

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

資料庫的名稱。


# database_version

資料庫的版本。


# database_displayname

顯示資料庫的名稱。


# database_size

以位元組為單位的資料庫的大小。


# 資料庫

提供對 SQL 資料庫的訪問。

## 方法

*   **交易記錄**： 運行資料庫事務。

*   **changeVersion**: 允許腳本自動驗證的版本號和更新架構時更改它。

## 詳細資訊

`window.openDatabase()`方法返回 `Database` 的物件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen

## 交易快速示例

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
    

## 更改版本快速示例

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");
    

## 完整的示例

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

允許對資料庫的 SQL 語句的執行。

## 方法

*   **executeSql**: 執行一個 SQL 語句。

## 詳細資訊

調用 `Database` 物件的交易方法，刀路 `SQLTransaction` 指定的回檔方法的物件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen

## 執行 SQL 快速示例

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
    

## 完整的示例

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


# SQLError

A `SQLError` 物件當發生錯誤時引發。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

*   **消息**： 錯誤的說明。

## 常量

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## 說明

`SQLError`物件運算元據庫時出現錯誤時引發。


# localStorage

提供對 W3C [Web 存儲介面][1]的訪問

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## 方法

*   **鍵**： 返回在指定的位置的鍵的名稱。

*   **getItem**： 返回由指定的鍵標識的項。

*   **setItem**： 分配一個鍵控的項值。

*   **removeItem**: 刪除標識由指定鍵的項。

*   **清除**： 中移除所有鍵/值對。

## 詳細資訊

`window.localStorage`介面實現，W3C [Web 存儲介面][2]。 應用程式可以使用它來保存永久資料使用鍵-值對。 `window.sessionStorage`介面在每個方面，除了，所有資料都被都清除應用程式關閉每次的工作方式相同。 每個資料庫提供了單獨的命名空間。

 [2]: http://dev.w3.org/html5/webstorage/

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8

## 鍵快速示例

    var keyName = window.localStorage.key(0);
    

## 設置的專案的快速示例

    window.localStorage.setItem("key", "value");
    

## 獲取專案的快速示例

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## 刪除專案快速示例

        window.localStorage.removeItem("key");
    

## 清除快速示例

        window.localStorage.clear();
    

## 完整的示例

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
    

## Windows Phone 7 的怪癖

點標記法是*沒有*可用的 Windows Phone 7。 一定要使用 `setItem` 或 `getItem` ，而不是直接從存儲物件，如便捷鍵`window.localStorage.someKey`.
