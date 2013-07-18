---
license: Licensed to the Apache Software Foundation (ASF) under one
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

SQLResultSet
=======

When a `SQLTransaction` object's `executeSql` method is called, the
specified callback executes with a `SQLResultSet` parameter.

Properties
-------

- __insertId__: The row ID of the row that the `SQLResultSet` object's SQL statement inserted into the database.
- __rowsAffected__: The number of rows changed by the SQL statement, zero if the statement did not affect any rows.
- __rows__: a `SQLResultSetRowList` representing the rows returned, empty if no rows are returned.

Details
-------

When a `SQLTransaction` object's `executeSql` method is called, the
specified callback executes with a `SQLResultSet` parameter containing
three properties:

* The `insertId` returns the row number of a successly SQL insertion
  statement.  If the SQL does not insert any rows, the `insertId` is
  not set.

* The `rowsAffected` is always `0` for a SQL `select` statement.  For
  `insert` or `update` statements it returns the number of modified
  rows.

* The final `SQLResultSetList` contains the data returned from a SQL
  select statement.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen

Execute SQL Quick Example
------------------

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

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
