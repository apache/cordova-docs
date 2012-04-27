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

Cuando se ejecuta el método `SQLTransaction.executeSql` se llamara a esta función 'callback' pasándole el resultado de la consulta.

Atributos
---------

- __insertId__: El ID de la fila que el objeto `SQLResultSet` inserto en la base de datos.
- __rowAffected__: El numero de filas que cambiaron por la sentencia SQL.  Si la sentencia no afecto a ninguna fila se retornara 0. 
- __rows__: Un objeto `SQLResultSetRowList` representando la fila retornada. Si no se retorno ninguna, este objeto estará vacio.

Detalles
--------

Cuando llamas al método `SQLTransaction.executeSql`, esta función sera llamada pasándole un objeto SQLResultSet. Este objeto tendrá tres atributos, el primero  (`insertId`) retornara el numero de fila de una sentencia 'insert' satisfactoria. Si la sentencia SQL no fuera una sentencia 'insert', este atributo no sera establecido. El atributo `rowAffected` es siempre 0 para una sentencia SQL de tipo 'select'.  Para sentencias 'insert' o 'update' retornara el numero de filas que fueron afectadas.  El ultimo atributo es de tipo `SQLResultSetList` y contiene los datos retornados por una sentencia SQL de tipo 'select'.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 y superior)
- iPhone

Ejemplo Rápido
--------------

	function queryDB(tx) {
		tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	}

	function querySuccess(tx, results) {
		// debería estar vacio ya que se inserto nada
		console.log("ID insert = " + results.insertId);
		// Sera 0 debido que es una sentencia SQL de tipo 'select'
		console.log("Filas afectadas = " + results.rowAffected);
		// El numero de filas retornadas
		console.log("Filas retornadas = " + results.rows.length);
	}
	
	function errorCB(err) {
		alert("Error procesando SQL: "+err.code);
	}
	
	var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
	db.transaction(queryDB, errorCB);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

		// Componemos la base de datos
		//
		function populateDB(tx) {
			tx.executeSql('DROP TABLE IF EXISTS DEMO');
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Primera fila")');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Segunda fila")');
		}

		// Consultamos la base de datos
		//
		function queryDB(tx) {
			tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
		}

		// Función 'callback' con el resultado de la consulta
		//
		function querySuccess(tx, results) {
			// debería estar vacio ya que se inserto nada
			console.log("ID insert = " + results.insertId);
			// Sera 0 debido que es una sentencia SQL de tipo 'select'
			console.log("Filas afectadas = " + results.rowAffected);
			// El numero de filas retornadas
			console.log("Filas retornadas = " + results.rows.length);
		}

		// Función 'callback' de error
		//
		function errorCB(err) {
			console.log("Error procesando SQL: "+err.code);
		}

		// Función 'callback' de transacción satisfactoria
		//
		function successCB() {
			var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
			db.transaction(queryDB, errorCB);
		}

		// PhoneGap esta lista
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
