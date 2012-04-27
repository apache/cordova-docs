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
==============

Contient des méthodes permettant à l'utilisateur d'exécuter des instructions SQL en base de données.

Méthodes
--------

- __executeSql__: Exécuter une instruction SQL

Détails
-------

Lorsque l'on appelle la méthode `transaction` d'un objet `Database`, l'une de ses fonctions de callback sera appelée avec un objet `SQLTransaction`.  L'utilisateur peut effectuer une transaction en appelant à plusieurs reprises la méthode `executeSql`.  

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 et plus récent)
- iPhone

Exemple rapide ExecuteSQL
-------------------------

	function populateDB(tx) {
		 tx.executeSql('DROP TABLE IF EXISTS DEMO');
		 tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
		 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Première ligne")');
		 tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Seconde ligne")');
	}
	
	function errorCB(tx, err) {
		alert("Erreur de traitement SQL : "+err.code);
	}
	
	function successCB() {
		alert("Succès !");
	}
	
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.transaction(populateDB, errorCB, successCB);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(populateDB, errorCB, successCB);
        }
		
		// Alimentation de la base de données
		//
		function populateDB(tx) {
			tx.executeSql('DROP TABLE IF EXISTS DEMO');
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Premier enregistrement")');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Seconde enregistrement")');
		}
		
		// Fonction de callback en cas d'échec de la transaction
		//
		function errorCB(tx, err) {
			alert("Erreur de traitement SQL : "+err.code);
		}
		
		// Fonction de callback en cas de réussite de la transaction
		//
		function successCB() {
			alert("Succès !");
		}
	
        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>SQLTransaction</p>
      </body>
    </html>
