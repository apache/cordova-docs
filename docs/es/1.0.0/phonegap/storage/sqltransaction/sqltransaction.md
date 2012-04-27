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

SQLTransaction
=======

Este objeto tiene métodos que permiten al usuario ejecutar sentencias SQL en la base de datos.

Métodos
-------

- __executeSql__: Ejecuta una sentencia SQL

Detalles
----.---

Cuando uses el método `Database.transaction`, se le pasara un objeto `SQLTransaction` a su función callback, cuando hagas una transacción puedes usar el método executeSql varias veces.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 y superior)
- iPhone

Ejemplo Rápido de executeSql
----------------------------

	function populateDB(tx) {
		 tx.executeSql('DROP TABLE IF EXISTS DEMO');
		 tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
		 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Primera fila")');
		 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Segunda fila")');
	}
	
	function errorCB(err) {
		alert("Error procesando SQL: "+err);
	}
	
	function successCB() {
		alert("Correcto!");
	}
	
	var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
	db.transaction(populateDB, errorCB, successCB);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
			var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
			db.transaction(populateDB, errorCB, successCB);
        }
		
		// Rellena la base de datos
		//
		function populateDB(tx) {
			 tx.executeSql('DROP TABLE IF EXISTS DEMO');
			 tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
			 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Primera fila")');
			 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Segunda fila")');
		}
		
		// Función 'callback' de error de transacción
		//
		function errorCB(err) {
			alert("Error procesando SQL: "+err);
		}
		
		// Función 'callback' de transacción correcta
		//
		function successCB() {
			alert("success!");
		}
	
        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>SQLTransaction</p>
      </body>
    </html>
