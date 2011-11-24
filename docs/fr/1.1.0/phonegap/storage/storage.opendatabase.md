openDatabase
============

Retourne un nouvel objet Database.

    var dbShell = window.openDatabase(name, version, display_name, size);

Description
-----------

window.openDatabase retourne un nouvel objet Database.

Cette méthode crée une nouvelle base de données SQL Lite et retourne un objet Database décrivant celle-ci.  Il faut utiliser cet objet Database pour manipuler la base de données.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 et plus récent)
- iPhone

Exemple rapide
--------------

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

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
			var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
		
        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>OpenDatabase</p>
      </body>
    </html>
