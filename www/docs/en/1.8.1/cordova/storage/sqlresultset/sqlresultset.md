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

title: SQLResultSet
---

SQLResultSet
=======

When the executeSql method of a [SQLTransaction](../sqltransaction/sqltransaction.html) is called it will invoke it's callback with a SQLResultSet.

Properties
-------

- __insertId__: the row ID of the row that the SQLResultSet object's SQL statement inserted into the database
- __rowsAffected__: the number of rows that were changed by the SQL statement.  If the statement did not affect any rows then it is set to 0. 
- __rows__: a SQLResultSetRowList representing the rows returned.  If no rows are returned the object will be empty.

Details
-------

When you call the [SQLTransaction](../sqltransaction/sqltransaction.html) executeSql method its callback methods will be called with a SQLResultSet object.  The result object has three properties.  The first is the `insertId` which will return the row number of a success SQL insert statement.  If the SQL statement is not an insert then the `insertId` is not set.  The `rowsAffected` is always 0 for a SQL select statement.  For insert or update statements it returns the number of rows that have been modified.  The final property is of type [SQLResultSetList](../sqlresultsetlist/sqlresultsetlist.html) and it contains the data returned from a SQL select statement.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- webOS

Execute SQL Quick [Example](../storage.opendatabase.html)
------------------

	function queryDB(tx) {
		tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	}

	function querySuccess(tx, results) {
    console.log("Returned rows = " + results.rows.length);
    // this will be true since it was a select statement and so rowsAffected was 0
    if (!resultSet.rowsAffected) {
      console.log('No rows affected!');
      return false;
    }
    // for an insert statement, this property will return the ID of the last inserted row
    console.log("Last inserted row ID = " + results.insertId);
	}
	
	function errorCB(err) {
		alert("Error processing SQL: "+err.code);
	}
	
	var db = window.openDatabase("[Database](../database/database.html)", "1.0", "Cordova Demo", 200000);
	db.transaction(queryDB, errorCB);

Full [Example](../storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.8.1.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
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
			var db = window.openDatabase("[Database](../database/database.html)", "1.0", "Cordova Demo", 200000);
			db.transaction(queryDB, errorCB);
		}

		// Cordova is ready
		//
		function onDeviceReady() {
			var db = window.openDatabase("[Database](../database/database.html)", "1.0", "Cordova Demo", 200000);
			db.transaction(populateDB, errorCB, successCB);
		}
	
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Database</p>
      </body>
    </html>
