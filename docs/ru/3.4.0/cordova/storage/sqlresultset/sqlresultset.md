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

Когда `SQLTransaction` объекта `executeSql` вызывается метод, заданный обратный вызов выполняется с `SQLResultSet` параметр.

## Свойства

*   **insertId**: идентификатор строки строки, `SQLResultSet` объекта SQL заявление вставляется в базу данных.

*   **rowsAffected**: количество строк, изменены инструкцией SQL, нуль, если заявление не затронула ни одной строки.

*   **строки**: `SQLResultSetRowList` представляющие возвращенных строк, empty, если строки не возвращаются.

## Подробная информация

Когда `SQLTransaction` объекта `executeSql` вызывается метод, заданный обратный вызов выполняется с `SQLResultSet` параметр, содержащий три свойства:

*   `insertId`Возвращает номер строки successly оператора вставки SQL. Если SQL не вставить строки, `insertId` не задано.

*   `rowsAffected`Всегда `` для SQL `select` заявление. Для `insert` или `update` заявления, она возвращает количество измененные строки.

*   Финал `SQLResultSetList` содержатся данные, возвращенные инструкцией SQL select.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 6.0 и выше)
*   iOS
*   Tizen

## Выполнение SQL быстрый пример

    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }
    
    function querySuccess(tx, results) {
        console.log("Returned rows = " + results.rows.length);
        // this will be true since it was a select statement and so rowsAffected was 0
        if (!results.rowsAffected) {
            console.log('No rows affected!');
            return false;
        }
        // for an insert statement, this property will return the ID of the last inserted row
        console.log("Last inserted row ID = " + results.insertId);
    }
    
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(queryDB, errorCB);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Populate the database
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }
    
        // Query the database
        //
        function queryDB(tx) {
            tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
        }
    
        // Query the success callback
        //
        function querySuccess(tx, results) {
            console.log("Returned rows = " + results.rows.length);
            // this will be true since it was a select statement and so rowsAffected was 0
            if (!results.rowsAffected) {
                console.log('No rows affected!');
                return false;
            }
            // for an insert statement, this property will return the ID of the last inserted row
            console.log("Last inserted row ID = " + results.insertId);
        }
    
        // Transaction error callback
        //
        function errorCB(err) {
            console.log("Error processing SQL: "+err.code);
        }
    
        // Transaction success callback
        //
        function successCB() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(queryDB, errorCB);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Database</p>
      </body>
    </html>