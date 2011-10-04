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

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
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
