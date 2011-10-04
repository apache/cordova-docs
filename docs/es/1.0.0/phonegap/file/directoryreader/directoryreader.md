DirectoryReader
===============

Un objeto que enumera los ficheros y directorios existentes dentro de un directorio. Esta API esta definida por las especificaciones [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/).

Métodos
-------

- __readEntries__: Lee entradas en un directorio. 

Plataformas Soportadas
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

readEntries
-----------

Lee las entradas de este directorio

__Argumentos:__

- __successCallback__ - Una función 'callback' a la que se le pasara un array de objetos `FileEntry` y `DirectoryEntry`. _(Function)_
- __errorCallback__ - Una función 'callback' que se llamara si ocurre algún error obteniendo el listado. Se le pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }

    function fail(error) {
        alert("Ocurrió un error mientras se obtenía la lista: " + error.code);
    }

    // Obtiene un lector de directorio
    var directoryReader = dirEntry.createReader();

    // Obtiene la lista de todas las entradas de este directorio
    directoryReader.readEntries(success,fail);
