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


# Хранения

> Предоставляет доступ к параметрам устройства хранения.

Этот API предлагает варианты хранения на основе двух различных спецификаций W3C:

*   [Спецификации API хранения веб][1] позволяет вам получить доступ к данным через пар простой ключ/значение. Смотрите секцию на localStorage для получения подробной информации на этот интерфейс.

*   [Спецификация SQL базы данных Web][2] предлагает больше таблиц базы данных, полнофункциональный доступ через SQL запросы. Краткое изложение этого интерфейса немедленно появляется ниже.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova предоставляет доступ к обоим интерфейсам для меньшинства устройств, которые уже не поддерживают их. В противном случае применяются встроенных реализаций.

## Методы

*   openDatabase

## Аргументы

*   database_name
*   database_version
*   database_displayname
*   database_size

## Объекты

*   Базы данных
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   SQLError

## Доступ к функции

Начиная с версии 3.0 доступ к API хранения встроена в Cordova и не требует использования командной строки для добавления плагинов, как описано в интерфейс командной строки.

Если вы используете старые набор инструментов Cordova, которые предшествуют CLI, по-прежнему необходимы следующие параметры конфигурации платформы:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="Storage">
            <param name="android-package" value="org.apache.cordova.Storage" />
        </feature>
        

*   Ежевика WebWorks (в`www/config.xml`)
    
        <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# openDatabase

Возвращает новый объект `Database` объект.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## Описание

Этот метод создает новую базу данных SQL Lite и возвращает `Database` объект, который позволяет манипулирования данными.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 6.0 и выше)
*   iOS
*   Tizen

## Быстрый пример

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

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

Имя базы данных.


# database_version

Версия базы данных.


# database_displayname

Отображаемое имя базы данных.


# database_size

Размер базы данных в байтах.


# Базы данных

Обеспечивает доступ к базе данных SQL.

## Методы

*   **сделка**: запускает транзакцию базы данных.

*   **changeVersion**: позволяет сценариям автоматически проверить номер версии и изменить его при обновлении схемы.

## Подробная информация

`window.openDatabase()`Метод возвращает `Database` объект.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 6.0 и выше)
*   iOS
*   Tizen

## Быстрый пример транзакции

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
    

## Изменения версии быстрый пример

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");
    

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

Разрешает выполнение инструкций SQL в базе данных.

## Методы

*   **executeSql**: выполняет инструкцию SQL.

## Подробная информация

Вызов `Database` метод объекта транзакции, проходит `SQLTransaction` объект для заданного метода обратного вызова.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 6.0 и выше)
*   iOS
*   Tizen

## Выполнение SQL быстрый пример

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


# SQLResultSetRowList

Одним из свойств `SQLResultSet` содержащие строки возвращенных запросом SQL.

## Свойства

*   **Длина**: количество строк, возвращенных запросом SQL.

## Методы

*   **пункт**: Возвращает строку с указанным индексом, представленное объектом JavaScript.

## Подробная информация

`SQLResultSetRowList`Содержит данные, возвращаемые SQL `select` заявление. Объект содержит `length` свойство, указывающее, сколько строк `select` возвращает заявление. Чтобы получить строки данных, вызовите `item` метод, чтобы указать индекс. Он возвращает JavaScript `Object` , свойства которых являются столбцами базы данных `select` против был выполнен оператор.

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


# SQLError

A `SQLError` объект создается при возникновении ошибки.

## Свойства

*   **код**: один из кодов стандартных ошибок, перечисленные ниже.

*   **сообщение**: описание ошибки.

## Константы

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## Описание

`SQLError`Объект создается при возникновении ошибки при обработке базы данных.


# localStorage

Обеспечивает доступ к W3C [интерфейс веб-хранилища][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Методы

*   **ключ**: Возвращает имя ключа в указанной позиции.

*   **getItem**: Возвращает элемент, определяемый указанным ключом.

*   **setItem**: присваивает значение элемента с ключом.

*   **removeItem**: Удаляет элемент с указанным ключом.

*   **Удалить**: удаляет все пары ключ/значение.

## Подробная информация

`window.localStorage`Интерфейс реализует W3C [интерфейс веб-хранилища][2]. Приложение может использовать его для сохранения постоянных данных с использованием пар ключ значение. `window.sessionStorage`Интерфейс работает таким же образом во всех отношениях, за исключением того, что все данные очищается каждый раз, когда приложение закрывается. Каждая база данных содержит отдельное пространство имен.

 [2]: http://dev.w3.org/html5/webstorage/

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 6.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8

## Ключевые быстрый пример

    var keyName = window.localStorage.key(0);
    

## Быстрый пример набора элементов

    window.localStorage.setItem("key", "value");
    

## Получить быстрый пример элемента

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Удалить пункт быстрый пример

        window.localStorage.removeItem("key");
    

## Снимите небольшой пример

        window.localStorage.clear();
    

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
    

## Windows Phone 7 причуды

Точечная нотация является *не* доступны на Windows Phone 7. Обязательно используйте `setItem` или `getItem` , а не доступ к ключи напрямую из объекта хранилища, такие как`window.localStorage.someKey`.
