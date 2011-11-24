SQLResultSet
============

Lorsque la méthode executeSql est appelée depuis un objet SQLTransaction, la fonction de callback sera appelée avec en argument un objet SQLResultSet.

Properties
----------

- __insertId__: L'identifiant de l'enregistrement que l'instruction SQL de notre objet SQLResultSet a inséré en base.
- __rowAffected__: Le nombre d'enregistrements qui ont été impactés par l'instruction SQL.  Si aucun enregistrement n'a été impacté, alors cette valeur sera 0.
- __rows__: Un objet SQLResultSetRowList représentant les enregistrements retournés.  Si aucun enregistrement n'est retourné alors cet objet sera vide.

Détails
-------

Lorsque vous faites appel à la méthode executeSql de SQLTransaction, la fonction de callback associée sera appelé avec en argument un objet SQLResultSet.  Cet objet possède trois propriétés.  La première, `insertId`, contient l'identifiant de l'enregistrement qui a été ajouté par une instruction INSERT fructueuse.  Si l'instruction n'est pas un INSERT, alors le `insertId` n'est pas rempli.  Le `rowAffected` vaut toujours 0 dans le cas d'une instruction de type SELECT.  Dans la cas d'instructions de type INSERT ou UPDATE, il contient le nombre d'enregistrements qui ont été modifiés.  La dernière propriété est un SQLResultSetList contenant les données retournées par une instruction SQL de type SELECT.

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
		// Ceci affichera 0 puisqu'aucun enregistrement n'a été ajouté
		console.log("Identifiant de l'insertion = " + results.insertId);
		// Ceci affichera 0 puisqu'il s'agit d'un SELECT
		console.log("Enregistrements impactés = " + results.rowAffected);
		// Le nombre d'enregistrements retournés par l'instruction SELECT
		console.log("Nombre d'enregistrements = " + results.rows.length);
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
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
		}

		// Interrogation de la base
		//
		function queryDB(tx) {
			tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
		}

		// Fonction de callback en cas d'interrogation réussie
		//
		function querySuccess(tx, results) {
			// Ceci affichera 0 puisqu'aucun enregistrement n'a été ajouté
			console.log("Identifiant de l'insertion = " + results.insertId);
			// Ceci affichera 0 puisqu'il s'agit d'un SELECT
			console.log("Enregistrements impactés = " + results.rowAffected);
			// Le nombre d'enregistrements retournés par l'instruction SELECT
			console.log("Nombre d'enregistrements = " + results.rows.length);
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
