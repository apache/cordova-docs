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

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
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
