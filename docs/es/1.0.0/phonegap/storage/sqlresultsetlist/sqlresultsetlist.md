SQLResultSetList
=======

Uno de los atributos de `SQLResultSet`, contiene las filas retornadas por la consulta SQL.

Atributos
---------

- __length__: El numero de filas retornadas por la consulta SQL

Métodos
-------

- __item__: Retorna las filas con el índice especificado, representado por un objeto JavaScript.

Detalles
--------

`SQLResultSetList` contiene los datos retornados por la sentencia SQL 'select'. Este objeto contiene un atributo `length` mostrándote cuantas filas fueron retornadas por la sentencia 'select'. Para obtener una de las filas, deberás llamar al método `item` especificando el índice de la fila. El método item retorna un objeto JavaScript donde los atributos son las columnas de la sentencia SQL ejecutada.

- Android
- BlackBerry WebWorks (OS 6.0 y superior)
- iPhone

Ejemplo Rápido de executeSql
----------------------------

	function queryDB(tx) {
		tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	}

	function querySuccess(tx, results) {
		var len = results.rows.length;
		console.log("Tabla DEMO: " + len + " filas encontradas.");
		for (var i=0; i<len; i++){
		    console.log("Fila = " + i + " ID = " + results.rows.item(i).id + " Datos =  " + results.rows.item(i).data);
		}
	}
	
	function errorCB(err) {
		alert("Error procesando SQL: "+err.code);
	}
	
	var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
	db.transaction(queryDB, errorCB);

Ejemplo Completo
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

		// Rellena la base de datos
		//
		function populateDB(tx) {
			tx.executeSql('DROP TABLE IF EXISTS DEMO');
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Primera fila")');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Segunda fila")');
		}

		// Consulta a la base de datos
		//
		function queryDB(tx) {
			tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
		}

		// Función 'callback' con el resultado de la consulta
		//
		function querySuccess(tx, results) {
			var len = results.rows.length;
			console.log("Tabla DEMO: " + len + " filas encontradas.");
			for (var i=0; i<len; i++){
				console.log("Fila = " + i + " ID = " + results.rows.item(i).id + " Datos =  " + results.rows.item(i).data);
			}
		}

		// Función 'callback' de error de transacción
		//
		function errorCB(err) {
			console.log("Error procesando SQL: "+err.code);
		}

		// Función 'callback' de transacción correcta
		//
		function successCB() {
			var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
			db.transaction(queryDB, errorCB);
		}

		// PhoneGap esta listo
		//
		function onDeviceReady() {
			var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
			db.transaction(populateDB, errorCB, successCB);
		}
	
        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Database</p>
      </body>
    </html>
