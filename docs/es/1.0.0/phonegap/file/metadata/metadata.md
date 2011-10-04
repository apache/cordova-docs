Metadata
==========

Esta interfaz proporciona información acerca de los estados de un fichero o directorio.

Atributos
----------

- __modificationTime:__ La ultima vez que fue modificado este directorio o fichero. _(Date)_

Detalles
--------

El objeto `Metadata` proporciona toda la información sobre el estado de un fichero o directorio. Puedes obtener una instancia del objeto Metadata llamando a los métodos `DirectoryEntry.getMetadata` y `FileEntry.getMetadata`.

Plataforma Soportadas
---------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

	function win(metadata) {
		console.log("Ultima modificación: " + metadata.modificationTime);
	}
	
	// Solicita el objeto metadata de esta entrada
	entry.getMetadata(win, null);
