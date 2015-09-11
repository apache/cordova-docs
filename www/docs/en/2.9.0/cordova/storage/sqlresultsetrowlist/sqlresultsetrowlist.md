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

<a href="../sqlresultset/sqlresultset.html">SQLResultSet</a>RowList
=======

One of the properties of the `<a href="../sqlresultset/sqlresultset.html">SQLResultSet</a>` containing the rows
returned from a SQL query.

Properties
-------

- __length__: the number of rows returned by the SQL query.

Methods
-------

- __item__: returns the row at the specified index represented by a JavaScript object.

Details
-------

The `<a href="../sqlresultset/sqlresultset.html">SQLResultSet</a>RowList` contains the data returned from a SQL
`select` statement.  The object contains a `length` property
indicating how many rows the `select` statement returns.  To get a row
of data, call the `item` method to specify an index.  It returns a
JavaScript `Object` whose properties are the database columns the
`select` statement was executed against.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen

Execute SQL Quick <a href="../storage.opendatabase.html">Example</a>
------------------

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

        var db = window.<a href="../storage.opendatabase.html">open<a href="../database/database.html">Database</a></a>("<a href="../database/database.html">Database</a>", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);

Full <a href="../storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../storage.html">Storage</a> <a href="../storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

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
            var db = window.<a href="../storage.opendatabase.html">open<a href="../database/database.html">Database</a></a>("<a href="../database/database.html">Database</a>", "1.0", "Cordova Demo", 200000);
            db.transaction(queryDB, errorCB);
        }

        // device APIs are available
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            var db = window.<a href="../storage.opendatabase.html">open<a href="../database/database.html">Database</a></a>("<a href="../database/database.html">Database</a>", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }

        </script>
      </head>
      <body>
        <h1><a href="../storage.opendatabase.html">Example</a></h1>
        <p><a href="../database/database.html">Database</a></p>
      </body>
    </html>
