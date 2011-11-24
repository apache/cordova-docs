SQLResultSetList
================

Une des propriétés de SQLResultSet contenant les enregistrements retournés par une requête SQL de type SELECT.

Properties
----------

- __length__: Le nombre d'enregistrements retournés par la requête SQL

Méthodes
--------

- __item__: Retourne sous forme d'objet JavaScript l'enregistrement à l'index spécifié.

Détails
-------

L'objet SQLResultSetList contient des enregistrements retournés par une requête SQL de type SELECT.  Il contient une propriété `length` indiquant combien d'enregistrements ont été retournés par le SELECT.  Pour récupérer un enregistrement, il faut appeler la méthode `item` avec son index en argument.  La méthode `item` retourne un objet JavaScript dont les propriétés correspondent aux colonnes de la base qui sont sélectionnées par le SELECT.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 et plus récent)
- iPhone

Exemple rapide ExecuteSQL
-------------------------

	function queryDB(tx) {
		tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	}

	function querySuccess(tx, results) {
		var len = results.rows.length;
		console.log("Table DEMO : " + len + " enregistrements trouvés.");
		for (var i=0; i<len; i++){
			console.log("Enregistrement = " + i + " ID = " + results.rows.item(i).id + " Données =  " + results.rows.item(i).data);
		}
	}
	
	function errorCB(tx, err) {
		alert("Erreur de traitement SQL : "+err.code);
	}
	
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.transaction(queryDB, errorCB);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

		// Alimentation de la base de données
		//
		function populateDB(tx) {
			tx.executeSql('DROP TABLE IF EXISTS DEMO');
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Premier enregistrement")');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Seconde enregistrement")');
		}

		// Interrogation de la base
		//
		function queryDB(tx) {
			tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
		}

		// Fonction de callback en cas d'interrogation réussie
		//
		function querySuccess(tx, results) {
			var len = results.rows.length;
			console.log("Table DEMO : " + len + " enregistrements trouvés.");
			for (var i=0; i<len; i++){
				console.log("Enregistrement = " + i + " ID = " + results.rows.item(i).id + " Données =  " + results.rows.item(i).data);
			}
		}

		// Fonction de callback en cas d'échec de la transaction
		//
		function errorCB(tx, err) {
			console.log("Erreur de traitement SQL : "+err.code);
		}

		// Fonction de callback en cas de réussite de la transaction
		//
		function successCB() {
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(queryDB, errorCB);
		}

		// PhoneGap est prêt
		//
		function onDeviceReady() {
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(populateDB, errorCB, successCB);
		}
	
        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>Database</p>
      </body>
    </html>
