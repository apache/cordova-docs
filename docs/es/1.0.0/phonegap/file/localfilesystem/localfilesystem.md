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

LocalFileSystem
===============

Este objeto proporciona la forma de obtener la raíz del sistema de archivos.

Métodos
-------

- __requestFileSystem:__ Solicita un sistema de archivos. _(Function)_
- __resolveLocalFileSystemURI:__ Recupera un `DirectoryEntry` o un `FileEntry` usando una URI local. _(Function)_

Constantes
----------

- `LocalFileSystem.PERSISTENT`: Usada para el almacenamiento que no debería ser eliminado sin solicitud o permiso del usuario.
- `LocalFileSystem.TEMPORARY`: Usado para el almacenamiento sin garantía de persistencia.

Detalles
-------

El objeto `LocalFileSystem` esta definido en el objeto __window__.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido de Petición del Sistema de Archivos
--------------------------------------------------

	function onSuccess(fileSystem) {
		console.log(fileSystem.name);
	}
	
	// Solicita el sistema de archivos persistente
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

Ejemplo Rápido de Resolución URI
--------------------------------

	function onSuccess(fileEntry) {
		console.log(fileEntry.name);
	}

	window.resolveLocalFileSystemURI("file:///ejemplo.txt", onSuccess, onError);
	
Ejemplo Completo
---------------


    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de LocalFileSystem</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
			window.resolveLocalFileSystemURI("file:///ejemplo.txt", onResolveSuccess, fail);
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
        <h1>Ejemplo</h1>
        <p>Sistema de Archivos Local</p>
      </body>
    </html>
