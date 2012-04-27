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

FileReader
==========

`FileReader` es un objeto que permite leer un fichero.

Atributos
---------

- __readyState:__ Puede tener tres estados EMPTY, LOADING o DONE.
- __result:__ El contenido del archivo que se ha leído. _(DOMString)_
- __error:__ Un objeto que contiene los errores. _(FileError)_
- __onloadstart:__ Una función 'callback' que sera llamada cuando la lectura empieza. _(Function)_
- __onprogress:__ Una función 'callback' que sera llamada mientras se lee el archivo, reportar progresos (progess.loaded/progress.total). _(Function)_ -NO SOPORTADA
- __onload:__ Una función 'callback' que sera llamada cuando la lectura finalice satisfactoriamente. _(Function)_
- __onabort:__ Una función 'callback' que sera llamada cuando se aborte el proceso de lectura. (llamando al método `abort()`). _(Function)_
- __onerror:__ Una función 'callback' que sera llamada cuando la lectura falla. _(Function)_
- __onloadend:__ Una función 'callback' que sera llamada cuando la lectura termine (Tanto si falla o no). _(Function)_

Métodos
-------

- __abort__: Aborta la lectura del fichero. 
- __readAsDataURL__: Lee el fichero y devuelve los datos como una URL codificada en base64.
- __readAsText__: Lee el fichero como texto plano.

Detalles
--------

El objeto `FileReader` permite leer ficheros del sistema de archivos del dispositivo. Los ficheros pueden ser leídos como texto plano o codificados en base64. Los desarrolladores pueden registrar sus propias funciones a los eventos 'loadstart', 'progress', 'load', 'loadend', 'error' y 'abort'.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Leer como URL 
-------------

__Argumentos:__
- file - El objeto `File` a leer.


Ejemplo Rápido
--------------

	function win(file) {
		var reader = new FileReader();
		reader.onloadend = function(evt) {
        	console.log("read success");
            console.log(evt.target.result);
        };
		reader.readAsDataURL(file);
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.file(win, fail);

Leer como texto
---------------

__Argumentos:__

- file - El objeto `File` a leer
- encoding - La codificación a usar para codificar el contenido del fichero. Por defecto se usara UTF8.

Ejemplo Rápido
--------------

	function win(file) {
		var reader = new FileReader();
		reader.onloadend = function(evt) {
        	console.log("read success");
            console.log(evt.target.result);
        };
		reader.readAsText(file);
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.file(win, fail);

Ejemplo Rápido del método 'abort'
---------------------------------

	function win(file) {
		var reader = new FileReader();
		reader.onloadend = function(evt) {
        	console.log("read success");
            console.log(evt.target.result);
        };
		reader.readAsText(file);
		reader.abort();
	};

    function fail(error) {
    	console.log(error.code);
    }
	
    entry.file(win, fail);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de FileReader</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que phonegap se inicie
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap esta listo
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
		
		function gotFS(fileSystem) {
			fileSystem.root.getFile("readme.txt", {create: true}, gotFileEntry, fail);
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
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
        
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
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
        <h1>Ejemplo</h1>
        <p>Lectura de ficheros</p>
      </body>
    </html>

Peculiaridades iOS
------------------
- __encoding__ este parámetro no esta soportado, se usara siempre UTF8.
