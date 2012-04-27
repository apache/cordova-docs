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

FileWriter es un objeto que permite escribir en un archivo.

Atributos
---------

- __readyState:__ Uno de los tres estados, INIT, WRITING o DONE.
- __fileName:__ El nombre del fichero que sera escrito. _(DOMString)_
- __length:__ La longitud del archivo a ser escrito. _(long)_
- __position:__ La posición actual del puntero del archivo. _(long)_
- __error:__ Un objeto conteniendo errores. _(FileError)_
- __onwritestart:__ Llamada cuando la escritura comienza. _(Function)_
- __onprogress:__ Llamada mientras se escribe el archivo, reporta el progreso (progess.loaded/progress.total). _(Function)_ -NO SOPORTADO
- __onwrite:__ Llamada cuando la escritura se completo satisfactoriamente. _(Function)_
- __onabort:__ Llamada cuando la escritura sea abortada. Por ejemplo cuando se llama al método `FileWriter.abort`. _(Function)_
- __onerror:__ Llamada cuando la escritura falle. _(Function)_
- __onwriteend:__ Llamada cuando la escritura finalice (Satisfactoriamente o no).  _(Function)_

Métodos
-------

- __abort__: Aborta el proceso de escritura. 
- __seek__: Mueve el puntero hacia el byte especificado.
- __truncate__: Trunca el archivo a la longitud indicada.
- __write__: Escribe los datos al archivo.

Detalles
--------

El objeto `FileWriter` es una forma de escribir ficheros al sistema de archivos del dispositivo. Los desarrolladores pueden registrar sus propias funciones 'callbacks' a los eventos 'writestart', 'progress', 'write', 'writeend', 'error' y 'abort'.

Se creara un FileWriter para un solo fichero. Puedes usarlo para escribir un fichero múltiples veces. El objeto `FileWriter` mantiene los atributos de posición y longitud, por lo que podrás usar `FileWriter.seek` y `FileWriter.write` en cualquier posición del archivo. Por defecto el objeto `FileWriter` escribe al inicio del fichero (sobreescribiendo información). Indica el atributo opcional `append` a `true` en el constructor de `FileWriter` para iniciar la escritura desde el final del archivo.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido de Seek 
----------------------

	function win(writer) {
		// Adelanta rápidamente el puntero hacia el final del archivo
		writer.seek(writer.length);	
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Ejemplo Rápido de Truncate 
--------------------------

	function win(writer) {
		writer.truncate(10);	
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Ejemplo Rápido de Write
-----------------------

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("Se escribió satisfactoriamente");
        };
		writer.write("Un texto de ejemplo");
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Ejemplo Rápido de Append
------------------------

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("Se escribió satisfactoriamente");
        };
        writer.seek(writer.length);
		writer.write("texto añadido");
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);
	
Ejemplo Rápido de Abort
-----------------------

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("Se escribió satisfactoriamente");
        };
		writer.write("Un texto de ejemplo");
		writer.abort();
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Ejemplo Completo
----------------
    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de FileWriter</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta lista
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
		
		function gotFS(fileSystem) {
			fileSystem.root.getFile("leeme.txt", {create: true}, gotFileEntry, fail); 
		}
		
		function gotFileEntry(fileEntry) {
			fileEntry.createWriter(gotFileWriter, fail);
		}
		
		function gotFileWriter(writer) {
	        writer.onwrite = function(evt) {
                console.log("Se escribió satisfactoriamente");
            };
            writer.write("some sample text");
			// El contenido del fichero ahora es 'some sample text'
			writer.truncate(11);
			// El contenido del fichero ahora es 'some sample'
			writer.seek(4);
			// El contenido del fichero aun es 'some sample' pero el puntero apunta después del carácter 'e' de 'some'
			writer.write(" different text");
			// El contenido del fichero ahora es 'some different text'
		}
        
        function fail(error) {
            console.log(error.code);
        }
        
        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Escritura de ficheros</p>
      </body>
    </html>
