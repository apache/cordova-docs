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

The SQLResultSetList contains the data returned from a SQL select statement.  The object contains a length property letting you know how many rows the select statement has been returned.  To get a row of data you would call the `item` method specifing an index.  The item method returns a JavaScript Object who's properties are the columns of the database the select statement was executed against.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone

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
	
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.transaction(queryDB, errorCB);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
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
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(queryDB, errorCB);
		}

		// PhoneGap is ready
		//
		function onDeviceReady() {
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(populateDB, errorCB, successCB);
		}
	
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Database</p>
      </body>
    </html>
