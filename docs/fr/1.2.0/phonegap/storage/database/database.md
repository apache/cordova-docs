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
========

Contient des méthodes permettant à l'utilisateur de manipuler une base de données.

Méthodes
--------

- __transaction__: Effectuer une transaction avec la base de données. 
- __changeVersion__: Vérifier et modifier le numéro de version d'une base de données, utile lorsque l'on fait évoluer le modèle de données. 

Détails
-------

Un objet Database est retourné par un apppel à `window.openDatabase()`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 et plus récent)
- iPhone

Exemple rapide Transaction
--------------------------
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

Exemple rapide ChangeVersion
----------------------------

	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.changeVersion("1.0", "1.1");

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.2.0.js"></script>
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
        <p>Database</p>
      </body>
    </html>

Singularités Android 1.X
------------------------

- __changeVersion:__ Cette méthode n'est pas supportée par les mobiles sous Android 1.X.
