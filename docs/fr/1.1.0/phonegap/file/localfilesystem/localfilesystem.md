LocalFileSystem
===============

Un objet `LocalFileSystem` permet d'atteindre la racine d'un système de fichier.

Méthodes
--------

- __requestFileSystem :__ Demander un FileSystem. _(Function)_
- __resolveLocalFileSystemURI :__ Retrouver un DirectoryEntry ou FileEntry à partir d'un URI locale. _(Function)_

Constantes
----------

- `LocalFileSystem.PERSISTENT`: Utilisé pour atteindre un sytème de fichier où les fichiers stockés ne doivent pas être effacés par l'agent utilisateur ("user agent") sans la permission de l'application ou de l'utilisateur.
- `LocalFileSystem.TEMPORARY`: Utilisé pour atteindre un sytème de fichier où le stockage est sans garantie de persistence.

Détails
-------

Les méthodes de l'objet `LocalFileSystem` sont disponibles au niveau de l'objet __window__.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide RequestFileSystem
--------------------------------

	function onSuccess(fileSystem) {
		console.log(fileSystem.name);
	}
	
	// Atteindre le système de fichier persistant
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

Exemple rapide ResolveLocalFileSystemURI
----------------------------------------

	function onSuccess(fileEntry) {
		console.log(fileEntry.name);
	}

	window.resolveLocalFileSystemURI("file:///exemple.txt", onSuccess, onError);
	
Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple LocalFileSystem</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
			window.resolveLocalFileSystemURI("file:///exemple.txt", onResolveSuccess, fail);
        }

		function onFileSystemSuccess(fileSystem) {
			console.log(fileSystem.name);
		}

		function onResolveSuccess(fileEntry) {
			console.log(fileEntry.name);
		}
		
		function fail(evt) {
			console.log(evt.target.error.code);
		}
		
        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>LocalFileSystem</p>
      </body>
    </html>
