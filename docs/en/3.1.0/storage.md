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


# Storage

> Provides access to the device's storage options.

This API offers storage options based on two different W3C
specifications:

* The
  [Web Storage API Specification](http://dev.w3.org/html5/webstorage/)
  allows you to access data via simple key/value pairs.  See the
  section on localStorage for complete details on this interface.

* The
  [Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/)
  offers more full-featured database tables accessed via SQL queries.
  A summary of this interface appears immediately below.

Cordova provides access to both interfaces for the minority of devices
that don't already support them. Otherwise the built-in
implementations apply.

## Methods

- openDatabase

## Arguments

- database_name
- database_version
- database_displayname
- database_size

## Objects

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetRowList
- SQLError

## Accessing the Feature

As of version 3.0, access to Storage APIs is built into Cordova, and
does not require using the CLI to add plugins as described in The
Command-line Interface.

If you are using the older set of Cordova tools that precede the CLI,
the following platform-specific configuration settings are still
required:

* Android (in `app/res/xml/config.xml`)

        <feature name="Storage">
            <param name="android-package" value="org.apache.cordova.Storage" />
        </feature>

* BlackBerry WebWorks (in `www/config.xml`)

        <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />

Some platforms may support this feature without requiring any special
configuration.  See _Platform Support_ in the Overview section.



# openDatabase

Returns a new `Database` object.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);

## Description

The method creates a new SQL Lite Database and returns a `Database`
object that allows manipulation of the data.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen

## Quick Example

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

## Full Example

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

The name of the database.



# database_version

The version of the database.



# database_displayname

The display name of the database.



# database_size

The size of the database in bytes.



# Database

Provides access to an SQL database.

## Methods

- __transaction__: Runs a database transaction.

- __changeVersion__: Allows scripts to automatically verify the version number and change it when updating a schema.

## Details

The `window.openDatabase()` method returns a `Database` object.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen

## Transaction Quick Example

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

## Change Version Quick Example

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");

## Full Example

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

Allows execution of SQL statements against the Database.

## Methods

- __executeSql__: executes a SQL statement.

## Details

Calling a `Database` object's transaction method, passes a
`SQLTransaction` object to the specified callback method.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen

## Execute SQL Quick Example

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

## Full Example

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

When a `SQLTransaction` object's `executeSql` method is called, the
specified callback executes with a `SQLResultSet` parameter.

## Properties

- __insertId__: The row ID of the row that the `SQLResultSet` object's SQL statement inserted into the database.

- __rowsAffected__: The number of rows changed by the SQL statement, zero if the statement did not affect any rows.

- __rows__: a `SQLResultSetRowList` representing the rows returned, empty if no rows are returned.

## Details

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

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen

## Execute SQL Quick Example

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

## Full Example

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

One of the properties of the `SQLResultSet` containing the rows
returned from a SQL query.

## Properties

- __length__: the number of rows returned by the SQL query.

## Methods

- __item__: returns the row at the specified index represented by a JavaScript object.

## Details

The `SQLResultSetRowList` contains the data returned from a SQL
`select` statement.  The object contains a `length` property
indicating how many rows the `select` statement returns.  To get a row
of data, call the `item` method to specify an index.  It returns a
JavaScript `Object` whose properties are the database columns the
`select` statement was executed against.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen

## Execute SQL Quick Example

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

## Full Example

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

A `SQLError` object is thrown when an error occurs.

## Properties

- __code__: One of the predefined error codes listed below.

- __message__: A description of the error.

## Constants

- `SQLError.UNKNOWN_ERR`
- `SQLError.DATABASE_ERR`
- `SQLError.VERSION_ERR`
- `SQLError.TOO_LARGE_ERR`
- `SQLError.QUOTA_ERR`
- `SQLError.SYNTAX_ERR`
- `SQLError.CONSTRAINT_ERR`
- `SQLError.TIMEOUT_ERR`

## Description

The `SQLError` object is thrown when an error occurs when manipulating a database.



# localStorage

Provides access to the W3C's
[Web Storage interface](http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;

## Methods

- __key__: Returns the name of the key at the specified position.

- __getItem__: Returns the item identified by the specified key.

- __setItem__: Assigns a keyed item's value.

- __removeItem__: Removes the item identified by the specified key.

- __clear__: Removes all of the key/value pairs.

## Details

The `window.localStorage` interface implements the W3C's [Web Storage
interface](http://dev.w3.org/html5/webstorage/).  An app can use it to
save persistent data using key-value pairs.  The
`window.sessionStorage` interface works the same way in every respect,
except that all data is cleared each time the app closes. Each
database provides a separate namespace.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8

## Key Quick Example

    var keyName = window.localStorage.key(0);

## Set Item Quick Example

    window.localStorage.setItem("key", "value");

## Get Item Quick Example

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"

## Remove Item Quick Example

        window.localStorage.removeItem("key");

## Clear Quick Example

        window.localStorage.clear();

## Full Example

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

## Windows Phone 7 Quirks

Dot notation is _not_ available on Windows Phone 7. Be sure to use
`setItem` or `getItem`, rather than accessing keys directly from the
storage object, such as `window.localStorage.someKey`.


