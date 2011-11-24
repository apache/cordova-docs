FileReader
==========

Un objet `FileReader` permet de lire un fichier.

Propriétés
----------

- __readyState:__ L'un des trois états dans lesquels peut être un FileReader : EMPTY, LOADING ou DONE.
- __result:__ Le contenu du fichier qui a été lu. _(DOMString)_
- __error:__ Un objet d'erreur. _(FileError)_
- __onloadstart:__ Appelé lorsque la lecture commence. _(Function)_
- __onprogress:__ Appelé pendant la lecture du fichier, retourne l'état d'avancement (progess.loaded/progress.total). _(Function)_ -NON SUPPORTÉ
- __onload:__ Appelé lorsque la lecture s'est terminée avec succès. _(Function)_
- __onabort:__ Appelé lorsque la lecture a été abandonnée. Par exemple, suite à un appel à la méthode abort(). _(Function)_
- __onerror:__ Appelé lorsque la lecture a échoué. _(Function)_
- __onloadend:__ Appelé lorsque la lecture s'est terminée (que ce soit avec succès ou en échec).  _(Function)_

Méthodes
--------

- __abort__: Abandonner la lecture du fichier. 
- __readAsDataURL__: Lire un fichier et retourner son contenu sous forme d'URL de données encodéees en Base64.
- __readAsText__: Lire un fichier texte.

Détails
-------

L'objet `FileReader` permet de lire des fichiers depuis le système de fichiers du mobile.  Les fichiers peuvent être lus comme du texte ou comme un flux de données encodées en Base64.  Il est possible d'associer ses propres fonctions aux évènements loadstart, progress, load, loadend, error et abort.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Read As Data URL 
----------------

__Paramètres :__
- file - L'objet File à lire


Exemple rapide
--------------

	function win(file) {
		var reader = new FileReader();
		reader.onloadend = function(evt) {
        	console.log("Lecture réussie");
            console.log(evt.target.result);
        };
		reader.readAsDataURL(file);
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.file(win, fail);

Read As Text
------------

__Paramètres :__

- file - L'objet File à lire
- encoding - L'encodage à utiliser pour encoder le contenu du fichier. UTF8 par défaut.

Exemple rapide
--------------

	function win(file) {
		var reader = new FileReader();
		reader.onloadend = function(evt) {
        	console.log("Lecture réussie");
            console.log(evt.target.result);
        };
		reader.readAsText(file);
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.file(win, fail);

Exemple rapide Abort
--------------------

	function win(file) {
		var reader = new FileReader();
		reader.onloadend = function(evt) {
        	console.log("Lecture réussie");
            console.log(evt.target.result);
        };
		reader.readAsText(file);
		reader.abort();
	};

    function fail(error) {
    	console.log(error.code);
    }
	
    entry.file(win, fail);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple FileReader</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
		
		function gotFS(fileSystem) {
			fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
		}
		
		function gotFileEntry(fileEntry) {
			fileEntry.file(gotFile, fail);
		}
		
        function gotFile(file){
			readDataUrl(file);
			readAsText(file);
		}
        
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Lire en tant qu'URL de données");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
        
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Lire en tant que texte");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
        
        function fail(evt) {
            console.log(evt.target.error.code);
        }
        
        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>Lecture de fichier</p>
      </body>
    </html>

Singularités iOS
----------------
- __encoding__ Ce paramètre n'est pas supporté, l'encodage UTF8 sera toujours utilisé.