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

title: SQLResultSetRowList
---

SQLResultSetRowList
=======

One of the properties of the [SQLResultSet](../sqlresultset/sqlresultset.html) containing the rows returned from a SQL query.

Properties
-------

- __length__: the number of rows returned by the SQL query

Methods
-------

- __item__: returns the row at the specified index represented by a JavaScript object.

Details
-------

The SQLResultSetRowList contains the data returned from a SQL select statement.  The object contains a length property letting you know how many rows the select statement has been returned.  To get a row of data you would call the `item` method specifying an index.  The item method returns a JavaScript Object who's properties are the columns of the database the select statement was executed against.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- webOS
- Tizen

Execute SQL Quick [Example](../storage.opendatabase.html)
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
	
	var db = window.openDatabase("[Database](../database/database.html)", "1.0", "Cordova Demo", 200000);
	db.transaction(queryDB, errorCB);

Full [Example](../storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
