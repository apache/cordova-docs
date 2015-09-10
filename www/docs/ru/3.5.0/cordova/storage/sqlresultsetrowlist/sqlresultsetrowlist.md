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

# <a href="../sqlresultset/sqlresultset.html">SQLResultSet</a>RowList

Одним из свойств `<a href="../sqlresultset/sqlresultset.html">SQLResultSet</a>` содержащие строки возвращенных запросом SQL.

## Свойства

*   **Длина**: количество строк, возвращенных запросом SQL.

## Методы

*   **пункт**: Возвращает строку с указанным индексом, представленное объектом JavaScript.

## Подробная информация

`<a href="../sqlresultset/sqlresultset.html">SQLResultSet</a>RowList`Содержит данные, возвращаемые SQL `select` заявление. Объект содержит `length` свойство, указывающее, сколько строк `select` возвращает заявление. Чтобы получить строки данных, вызовите `item` метод, чтобы указать индекс. Он возвращает JavaScript `Object` , свойства которых являются столбцами базы данных `select` против был выполнен оператор.

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
        var len = results.rows.length;
            console.log("DEMO table: " + len + " rows found.");
            for (var i=0; i<len; i++){
                console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
            }
        }
    
        function errorCB(err) {
            alert("Error processing SQL: "+err.code);
        }
    
        var db = window.<a href="../storage.opendatabase.html">openDatabase</a>("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage <a href="../storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
            var len = results.rows.length;
            console.log("DEMO table: " + len + " rows found.");
            for (var i=0; i<len; i++){
                console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
            }
        }
    
        // Transaction error callback
        //
        function errorCB(err) {
            console.log("Error processing SQL: "+err.code);
        }
    
        // Transaction success callback
        //
        function successCB() {
            var db = window.<a href="../storage.opendatabase.html">openDatabase</a>("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(queryDB, errorCB);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.<a href="../storage.opendatabase.html">openDatabase</a>("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../storage.opendatabase.html">Example</a></h1>
        <p>Database</p>
      </body>
    </html>