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

Database
=======

Contiene métodos que permiten al usuario manipular la base de datos.

Métodos
-------

- __transaction__: Ejecuta una transacción en la base de datos. 
- __changeVersion__: Permite a los scripts comprobar atómicamente el numero de versión y cambiarlo a la vez que actualiza el esquema. 

Detalles
--------

Un objeto `Database` es retornado de la llamada `window.openDatabase()`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 y superior)
- iPhone

Ejemplo Rápido de Transaction
----------------------------
	function populateDB(tx) {
		 tx.executeSql('DROP TABLE IF EXISTS DEMO');
		 tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
		 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Primera fila")');
		 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Segunda fila")');
	}
	
	function errorCB(err) {
		alert("Error procesando SQL: "+err.code);
	}
	
	function successCB() {
		alert("Correcto!");
	}
	
	var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
	db.transaction(populateDB, errorCB, successCB);

Ejemplo Rápido de Cambio de Versión
-----------------------------------

	var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 200000);
	db.changeVersion("1.0", "1.1");

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
		function errorCB(tx, err) {
			alert("Error procesando SQL: "+err);
		}
		
		// Función 'callback' de transacción satisfactoria
		//
		function successCB() {
			alert("bien!");
		}
	
        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Base de datos</p>
      </body>
    </html>

Peculiaridades Android 1.X
--------------------------

- __changeVersion:__ Este método no esta soportado por los dispositivos Android 1.X.
