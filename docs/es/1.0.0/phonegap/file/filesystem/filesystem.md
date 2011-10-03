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

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
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
