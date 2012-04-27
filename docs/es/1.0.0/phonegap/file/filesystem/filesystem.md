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

FileSystem
==========

Este objeto modela al sistema de archivos.

Atributos
----------

- __name:__ El nombre del sistema de archivos. _(DOMString)_
- __root:__ El directorio raíz del sistema de archivos. _(DirectoryEntry)_

Detalles
--------

El objeto `FileSystem` representa toda la información del sistema de archivos. El nombre del sistema de archivos sera único entre todos los sistemas de archivos. El atributo `root` contiene un objeto `DirectoryEntry` que representa el directorio raíz de este sistema de archivos.

Plataformas Soportadas
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido del Sistema de Archivos
--------------------------------------

	function onSuccess(fileSystem) {
		console.log(fileSystem.name);
		console.log(fileSystem.root.name);
	}
	
	// Solicita el sistema de archivos persistente
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de FileSystem</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        }

		function onFileSystemSuccess(fileSystem) {
			console.log(fileSystem.name);
			console.log(fileSystem.root.name);
		}
		
		function fail(evt) {
			console.log(evt.target.error.code);
		}
		
        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Sistema de Archivos</p>
      </body>
    </html>
