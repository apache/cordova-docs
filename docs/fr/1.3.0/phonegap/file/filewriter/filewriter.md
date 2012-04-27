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

FileWriter
==========

FileWriter est un objet qui permet d'écrire dans un fichier.

Propriétés
----------

- __readyState:__ L'un des trois états dans lesquels le FileWriter peut être : INIT, WRITING or DONE.
- __fileName:__ Le nom du fichier dans lequel écrire. _(DOMString)_
- __length:__ La taille du fichier dans lequel écrire. _(long)_
- __position:__ La position courante du pointeur dans le fichier. _(long)_
- __error:__ Un objet contenant une erreur survenue. _(FileError)_
- __onwritestart:__ Appelé lorsque l'écriture commence. _(Function)_
- __onprogress:__ Appelé pendant l'écriture du fichier, fournit l'avancement (progess.loaded/progress.total). _(Function)_ -NON SUPPORTE
- __onwrite:__ Appelé lorsque l'écriture s'est terminée correctement.  _(Function)_
- __onabort:__ Appelé lorsque l'écriture a été suspendue. Par exemple, suite à un appel de méthode abort(). _(Function)_
- __onerror:__ Appelé lorsque l'écriture a échouée. _(Function)_
- __onwriteend:__ Appelé lorsque l'écriture s'est terminée (correctement ou non).  _(Function)_

Méthodes
--------

- __abort__: Suspend l'écriture de fichier. 
- __seek__: Positionne le pointeur d'écriture à l'octet donné.
- __truncate__: Réduit la taille du fichier à celle donnée.
- __write__: Ecrit du contenu dans le fichier.

Détails
-------

L'objet `FileWriter` permet d'écrire dans des fichiers du système de fichier du mobile.  Les développeurs peuvent définir les écouteurs pour les évènements writestart, progress, write, writeend, error et abort.

Un objet FileWriter ne concerne qu'un fichier. Il peut être utilisé pour écrire dans un même fichier plusieurs fois. Le FileWriter gère les attributs de position et de longueur, vous pouvez donc vous positionner et écrire à n'importe quel endroit du fichier. Par défaut, le FileWriter écrit en début de fichier (en écrasant le contenu existant).

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide Seek
-------------------

	function win(writer) {
		// positionne le pointeur d'écriture à la fin du fichier
		writer.seek(writer.length);	
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Exemple rapide Truncate
-----------------------

	function win(writer) {
		writer.truncate(10);	
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Exemple rapide Write
--------------------

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("écriture réussie");
        };
		writer.write("exemple de texte");
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Exemple rapide Append
---------------------

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("écriture réussie");
        };
        writer.seek(writer.length);
		writer.write("texte concaténé");
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);
	
Exemple rapide Abort
--------------------

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("écriture réussie");
        };
		writer.write("exemple de texte");
		writer.abort();
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Exemple complet
---------------
    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple FileWriter</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
		
		function gotFS(fileSystem) {
			fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
		}
		
		function gotFileEntry(fileEntry) {
			fileEntry.createWriter(gotFileWriter, fail);
		}
		
		function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("le fichier contient maintenant 'exemple de texte'");
                writer.truncate(10);  
                writer.onwriteend = function(evt) {
                    console.log("le fichier contient maintenant 'exemple de'");
                    writer.seek(7);
                    writer.write(" différent de texte");
                    writer.onwriteend = function(evt){
                        console.log("le fichier contient maintenant 'exemple différent de texte'");
                    }
                };
            };
            writer.write("exemple de texte");
        }
        
        function fail(error) {
            console.log(error.code);
        }
        
        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>Ecriture de fichier</p>
      </body>
    </html>
