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


Storage
==========

> Provides access to the devices storage options.

This API is based on the [W3C Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/) and [W3C Web Storage API Specification](http://dev.w3.org/html5/webstorage/). Some devices already provide an implementation of this spec. For those devices, the built-in support is used instead of replacing it with Cordova's implementation. For devices that don't have storage support, Cordova's implementation should be compatible with the W3C specification.

Methods
-------

- openDatabase

Arguments
---------

- database_name
- database_version
- database_displayname
- database_size

Objects
-------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Storage" value="org.apache.cordova.Storage" />

### Bada

    No permissions are required.

### BlackBerry WebWorks

#### www/config.xml

    <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />

### iOS

    No permissions are required.

### webOS

    No permissions are required.

### Windows Phone

    No permissions are required.



openDatabase
===============

Returns a new Database object.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);

Description
-----------

window.openDatabase returns a new Database object.

This method will create a new SQL Lite Database and return a Database object.  Use the Database Object to manipulate the data.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- webOS

Quick Example
-------------

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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



database_name
============

The name of the database.


database_version
=============

The version of the database.



database_displayname
==================

The display name of the database.


database_size
==============

The size of the database in bytes.


Database
=======

Contains methods that allow the user to manipulate the Database

Methods
-------

- __transaction__: Runs a database transaction. 
- __changeVersion__: method allows scripts to atomically verify the version number and change it at the same time as doing a schema update. 

Details
-------

A Database object is returned from a call to `window.openDatabase()`.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- webOS

Transaction Quick Example
------------------
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

Change Version Quick Example
-------------------

	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.changeVersion("1.0", "1.1");

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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

Android 1.X Quirks
------------------

- __changeVersion:__ This method is not support by Android 1.X devices.



SQLTransaction
=======

Contains methods that allow the user to execute SQL statements against the Database.

Methods
-------

- __executeSql__: executes a SQL statement

Details
-------

When you call a Database objects transaction method it's callback methods will be called with a SQLTransaction object.  The user can build up a database transaction by calling the executeSql method multiple times.  

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- webOS

Execute SQL Quick Example
------------------

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

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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



SQLResultSet
=======

When the executeSql method of a SQLTransaction is called it will invoke it's callback with a SQLResultSet.

Properties
-------

- __insertId__: the row ID of the row that the SQLResultSet object's SQL statement inserted into the database
- __rowsAffected__: the number of rows that were changed by the SQL statement.  If the statement did not affect any rows then it is set to 0. 
- __rows__: a SQLResultSetRowList representing the rows returned.  If no rows are returned the object will be empty.

Details
-------

When you call the SQLTransaction executeSql method its callback methods will be called with a SQLResultSet object.  The result object has three properties.  The first is the `insertId` which will return the row number of a success SQL insert statement.  If the SQL statement is not an insert then the `insertId` is not set.  The `rowsAffected` is always 0 for a SQL select statement.  For insert or update statements it returns the number of rows that have been modified.  The final property is of type SQLResultSetList and it contains the data returned from a SQL select statement.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- webOS

Execute SQL Quick Example
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
	
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(queryDB, errorCB);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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
			var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
			db.transaction(queryDB, errorCB);
		}

		// Cordova is ready
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



SQLResultSetList
=======

One of the properties of the SQLResultSet containing the rows returned from a SQL query.

Properties
-------

- __length__: the number of rows returned by the SQL query

Methods
-------

- __item__: returns the row at the specified index represented by a JavaScript object.

Details
-------

The SQLResultSetList contains the data returned from a SQL select statement.  The object contains a length property letting you know how many rows the select statement has been returned.  To get a row of data you would call the `item` method specifying an index.  The item method returns a JavaScript Object who's properties are the columns of the database the select statement was executed against.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- webOS

Execute SQL Quick Example
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
	
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(queryDB, errorCB);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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
			var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
			db.transaction(queryDB, errorCB);
		}

		// Cordova is ready
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



SQLError
========

A `SQLError` object is thrown when an error occurs.

Properties
----------

- __code:__ One of the predefined error codes listed below.
- __message:__ A description of the error.

Constants
---------

- `SQLError.UNKNOWN_ERR`
- `SQLError.DATABASE_ERR`
- `SQLError.VERSION_ERR`
- `SQLError.TOO_LARGE_ERR`
- `SQLError.QUOTA_ERR`
- `SQLError.SYNTAX_ERR`
- `SQLError.CONSTRAINT_ERR`
- `SQLError.TIMEOUT_ERR`

Description
-----------

The `SQLError` object is thrown when an error occurs when manipulating a database.




localStorage
===============

Provides access to a W3C Storage interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

    var storage = window.localStorage;

Methods
-------

- __key__: Returns the name of the key at the position specified. 
- __getItem__: Returns the item identified by it's key.
- __setItem__: Saves and item at the key provided.
- __removeItem__: Removes the item identified by it's key.
- __clear__: Removes all of the key value pairs.

Details
-----------

localStorage provides an interface to a W3C Storage interface.  It allows one to save data as key-value pairs.

Note: window.sessionStorage provides the same interface, but is cleared between app launches.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- Windows Phone 7
- webOS

Key Quick Example
-------------

    var keyName = window.localStorage.key(0);

Set Item Quick Example
-------------

    window.localStorage.setItem("key", "value");

Get Item Quick Example
-------------

	var value = window.localStorage.getItem("key");
	// value is now equal to "value"

Remove Item Quick Example
-------------

	window.localStorage.removeItem("key");

Clear Quick Example
-------------

	window.localStorage.clear();

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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


Windows Phone 7 Quirks
-------------

- dot notation is NOT available on Windows Phone. Be sure to use : window.localStorage.setItem/getItem, and not the w3 spec defined calls to window.localStorage.someKey = 'someValue';

