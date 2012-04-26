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

DirectoryEntry
==============

Este objeto modela un directorio en el sistema de archivos.  Esta API esta regulada por la especificación [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/).

Atributos
---------

- __isFile:__ Siempre `false`. _(boolean)_
- __isDirectory:__ Siempre `true`. _(boolean)_
- __name:__ El nombre del  `DirectoryEntry`, Excluyendo la ruta. _(DOMString)_
- __fullPath:__ La ruta absoluta desde la raíz hacia el objeto `DirectoryEntry`. _(DOMString)_

NOTA: Los siguientes atributos están definidos en las especificaciones W3C pero __no están soportados__ por PhoneGap:

- __filesystem:__ El sistema de archivos donde reside este `DirectoryEntry`. _(FileSystem)_ 

Métodos
-------

Los siguientes métodos pueden ser llamados en un objeto `DirectoryEntry`:

- __getMetadata__: Busca metadatos sobre el directorio. 
- __moveTo__: Mueve un directorio hacia otro destino dentro del sistema de archivos.
- __copyTo__: Copia el directorio hacia otro destino dentro del sistema de archivos.
- __toURI__: Retorna una URI que puede usarse para localizar el directorio.
- __remove__: Elimina el directorio, previamente debe estar vacio.
- __getParent__: Busca el padre del directorio.
- __createReader__: Crea un nuevo objeto `DirectoryReader` que puede leer entradas de un directorio.
- __getDirectory__: Crea o busca un directorio.
- __getFile__: Crea o busca un fichero.
- __removeRecursively__: Elimina el directorio y todo su contenido.


Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

getMetadata
-----------

Busca metadatos sobre el directorio.

__Argumentos:__

- __successCallback__ - Una función 'callback' a la que se le pasara el objeto `Metadata`. _(Function)_
- __errorCallback__ - Una función 'callback' que sera llamada si algo falla mientras se obtienen los metadatos. Se le pasara un objeto `FileError`. _(Function)_


__Ejemplo Rápido__

    function success(metadata) {
        console.log("Ultima modificación: " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // Solicita el objeto Metadata de esta entrada
    entry.getMetadata(success, fail);	


moveTo
------

Mueve un directorio a un sitio diferente en el sistema de archivos. Las siguientes acciones se consideran erróneas:

- mover un directorio dentro de si mismo o a cualquier hijo descendiente;
- mover un directorio dentro de su mismo padre sin especificar un nombre diferente.
- mover un directorio hacia una ruta actualmente ocupada por un fichero;
- mover un directorio hacia una ruta ocupada por un directorio que no este vacio.

Además, al mover un directorio sobre otro directorio vacio, se intentara eliminarlo y reemplazarlo.

__Argumentos:__

- __parent__ - El directorio padre al que mover el directorio. _(DirectoryEntry)_
- __newName__ - El nuevo nombre del directorio. Si no se especifica ninguno, se usara el mismo por defecto. _(DOMString)_
- __successCallback__ - Una función 'callback' que sera llamada pasándole el objeto `DirectoryEntry` del nuevo directorio. _(Function)_
- __errorCallback__ - Una función 'callback' que sera llamada si ocurre algún error mientras se intentaba mover el directorio. Se le pasara un objeto `FileError`. _(Function)_


__Ejemplo Rápido__

    function success(entry) {
        console.log("Nueva ruta: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }
	
	function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // moverá este directorio hacia un nuevo directorio y luego lo renombrara
        entry.moveTo(parentEntry, newName, success, fail);
    }

copyTo
------

Copia un directorio hacia otro diferente en el sistema de archivos. Las siguientes acciones se consideran erróneas:

- copiar un directorio dentro de si mismo a cualquier nivel descendiente;
- copiar un directorio dentro de su mismo padre sin especificar un nombre diferente.

Las copias de directorios son siempre recursivas, esto quiere decir que se copia todo el contenido del directorio.

__Argumentos:__

- __parent__ - El directorio padre a donde copiar el directorio. _(DirectoryEntry)_
- __newName__ - El nuevo nombre del directorio. Si no se especifica ninguno, se usara el mismo nombre por defecto. _(DOMString)_
- __successCallback__ - Una función 'callback' que se disparara pasándole el objeto 'DirectoryEntry' del nuevo directorio. _(Function)_
- __errorCallback__ - Una función 'callback' que sera llamada si ocurre algún error mientras se copia el directorio. Se le pasara un objeto `FileError` como argumento. _(Function)_


__Ejemplo Rápido__

	function win(entry) {
		console.log("Nueva ruta: " + entry.fullPath);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // moverá este directorio hacia un nuevo directorio y lo renombrara
        entry.copyTo(parentEntry, newName, success, fail);
    }


toURI
-----

Retorna una URI que podrá ser usada para localizar el directorio.

__Ejemplo Rápido__
	
    // Obtiene la URI de este directorio
    var uri = entry.toURI();
    console.log(uri);


remove
------

Elimina el directorio. Las siguientes acciones se consideran erróneas:

- eliminar un directorio que no esta vacio;
- eliminar el directorio raíz del sistema de archivos.

__Argumentos:__

- __successCallback__ - Una función 'callback' que sera llamada después de que el directorio sea eliminado. Sera invocada sin parámetros. _(Function)_
- __errorCallback__ - Una función 'callback' que sera llamada si ocurre algún error mientras se elimina el directorio. Se le pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(entry) {
        console.log("Eliminado satisfactoriamente");
    }

    function fail(error) {
        alert('Hubo un error eliminando el directorio: ' + error.code);
    }

    // elimina el directorio
    entry.remove(success, fail);


getParent
---------

Busca el `DirectoryEntry` padre que contiene al directorio. 

__Argumentos:__

- __successCallback__ - Una función 'callback' que sera llamada pasándole el objeto `DirectoryEntry` padre. _(Function)_
- __errorCallback__ - Una función 'callback' que sera llamada si ocurre algún error mientras se obtiene el padre. Se pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(parent) {
        console.log("Nombre del padre: " + parent.name);
    }
 
    function fail(error) {
        alert('Ocurrió un error obteniendo el padre: ' + error.code);
    }
	
	// Obtiene el DirectoryEntry padre
	entry.getParent(success, fail);	


createReader
------------

Crea un nuevo objeto `DirectoryReader` para leer las entradas en un directorio.

__Ejemplo Rápido__
	
    // crea un lector de directorios
    var directoryReader = entry.createReader();	


getDirectory
------------

Crea o busca un directorio existente. Es un error el intentar:

- crear un directorio que todavía no tenga un padre.

__Argumentos:__

- __path__ - la ruta del directorio donde mirar o crearlo. Una ruta absoluta o una relativa de este `DirectoryEntry`. _(DOMString)_
- __options__ - Opciones para indicar si se debería crear cuando no exista ninguno.  _(Flags)_
- __successCallback__ - Una función 'callback' que sera llamada con el objeto `DirectoryEntry` object. _(Function)_
- __errorCallback__ - Una función 'callback' que se llamara si ocurre algún error creando o buscando el directorio. Se le pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(parent) {
        console.log("Nombre del padre: " + parent.name);
    }

    function fail(error) {
        alert("No se pudo crear el nuevo directorio: " + error.code);
    }

    // Retorna un directorio existe, o lo crea si no existiera
    entry.getDirectory("newDir", {create: true, exclusive: false}, success, fail);	


getFile
-------

Crea o busca un fichero. Es un error el intentar:

- crear un fichero que todavía no tiene un padre.

__Argumentos:__

- __path__ - La ruta hacia el fichero donde buscarlo o crearlo. Una ruta absoluta o una relativa hacia este objeto `DirectoryEntry`. _(DOMString)_
- __options__ - Opciones para indicar si se debería crear cuando no exista ninguno.  _(Flags)_
- __successCallback__ - Una función 'callback' que sera llamada con el objeto `FileEntry` object. _(Function)_
- __errorCallback__ - Una función 'callback' que se llamara si ocurre algún error creando o buscando el fichero. Se le pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(parent) {
        console.log("Nombre del padre: " + parent.name);
    }

    function fail(error) {
        alert("Ocurrió un error recuperando el fichero: " + error.code);
    }

    // Retorna un fichero existe, o lo crea si no existiera
    entry.getFile("newFile.txt", {create: true, exclusive: false}, success, fail);	


removeRecursively
-----------------

Elimina un directorio y todo su contenido, si durante el proceso algún fichero no puede ser eliminado y se dispara el evento `errorCallback`, lo mas seguro es que parte del contenido ya halla sido eliminado.

Las siguientes acciones se consideran erróneas:

- eliminar el directorio raíz del sistema de fichero.

__Argumentos:__

- __successCallback__ - Una función 'callback' que es llamada después de que `DirectoryEntry` sea eliminado. Se invocara sin parámetros. _(Function)_
- __errorCallback__ - Una función 'callback' que se llamara si ocurriera un error al eliminar el `DirectoryEntry`. Se le pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(parent) {
        console.log("Eliminación recursiva terminada");
    }

    function fail(error) {
        alert("Ocurrió un error al eliminar el directorio y su contenido: " + error.code);
    }

    // elimina el directorio y todo su contenido
    entry.removeRecursively(success, fail);	
