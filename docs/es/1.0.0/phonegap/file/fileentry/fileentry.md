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

FileEntry
==========

Este objeto representa un fichero de su sistema de archivos. Esto esta regulado por las especificaciones [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/).

Atributos
---------

- __isFile:__ Siempre `true`. _(boolean)_
- __isDirectory:__ Siempre `false`. _(boolean)_
- __name:__ El nombre del `FileEntry`, excluyendo la ruta. _(DOMString)_
- __fullPath:__ La ruta absoluta desde la raíz hacia el `FileEntry`. _(DOMString)_

NOTA: Los siguientes atributos están especificados por la W3C pero __no están soportados__ por PhoneGap:

- __filesystem:__ El sistema de archivos al que pertenece este `FileEntry`. _(FileSystem)_


Métodos
-------

- __getMetadata__: Busca metadatos sobre el fichero. 
- __moveTo__: Mueve el fichero hacia otra ruta diferente en el sistema de archivos.
- __copyTo__: Copia el fichero hacia otra ruta diferente en el sistema de archivos.
- __toURI__: Retorna una URI que puede ser usada para encontrar el fichero.
- __remove__: Elimina el fichero.  
- __getParent__: Busca el directorio padre.
- __createWriter__: Crea un objeto `FileWriter` que puede ser usado para escribir en el fichero.
- __file__: Crea un objeto `File` que almacena los atributos del fichero.


Plataformas Soportadas
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS


getMetadata
----------------

Busca metadatos en el fichero.

__Argumentos:__

- __successCallback__ - Una función 'callback' a la que se le pasara el objeto `Metadata`. _(Function)_
- __errorCallback__ - Una función 'callback' que sera llamada si ocurre algún error obteniendo los metadatos. Se le pasara un objeto `FileError`. _(Function)_


__Ejemplo Rápido__

    function success(metadata) {
        console.log("Ultima modificación: " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // Solicita los metadatos de este fichero
    entry.getMetadata(success, fail);	


moveTo
------

Mueve el fichero hacia una ruta diferente en el sistema de archivos. Las siguientes acciones se consideran erróneas:

- mover el fichero dentro de su mismo padre sin especificar un nombre diferente.
- mover el fichero hacia una ruta que ya esta ocupada por un directorio;

También, si intentar mover el fichero sobre otro fichero existente, se intentara eliminarlo y reemplazarlo.

__Argumentos:__

- __parent__ - El directorio padre a donde mover el fichero. _(DirectoryEntry)_
- __newName__ - El nuevo nombre del fichero. Si no se especifica ninguno se usara el nombre actual. _(DOMString)_
- __successCallback__ - Una función 'callback' que sera llamada con el objeto `FileEntry` del nuevo fichero. _(Function)_
- __errorCallback__ - Una función 'callback' que sera llamada si ocurre algún error mientras se mueve el fichero. Se le pasa un objeto `FileError`. _(Function)_


__Ejemplo Rápido__

    function success(entry) {
        console.log("Nueva ruta: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // mueve el fichero a un nuevo directorio y lo renombra
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
	

copyTo
------

Copia un fichero hacia una nueva ruta el sistema de archivos. Las siguientes acciones se consideran erróneas:

- copiar el fichero dentro de su mismo padre sin especificar un nombre diferente.

__Argumentos:__

- __parent__ - El directorio padre a donde copiar el fichero. _(DirectoryEntry)_
- __newName__ - El nuevo nombre del fichero. Se usara el mismo nombre si no se especifica ninguno. _(DOMString)_
- __successCallback__ - Una función 'callback' que se llamara pasándole el FileEntry del nuevo fichero. _(Function)_
- __errorCallback__ - Una función 'callback' que se llamara si ocurre un error mientras se copiaba el fichero. Se le pasara un objeto `FileError`. _(Function)_


__Ejemplo Rápido__

    function win(entry) {
	    console.log("Nueva ruta: " + entry.fullPath);
    }

    function fail(error) {
	    alert(error.code);
    }

    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // copia el fichero a un nuevo directorio y lo renombra
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }

	
toURI
-----

Retorna una URI que puede ser usada para localizar el fichero

__Ejemplo Rápido__
	
    // Obtiene la URI de esta entrada
    var uri = entry.toURI();
    console.log(uri);


remove
------

Elimina el fichero.

__Argumentos:__

- __successCallback__ - Una función 'callback' que se llama después de que el fichero sea eliminado. Se invoca sin argumentos. _(Function)_
- __errorCallback__ - Una función 'callback' que se llamara si ocurriera un error mientras se elimina el fichero. Se le pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(entry) {
        console.log("Eliminado satisfactoriamente");
    }

    function fail(error) {
        alert('Error eliminando el archivo: ' + error.code);
    }

    // elimina el archivo
    entry.remove(success, fail);


getParent
---------

Busca el `DirectoryEntry` padre que contiene al archivo. 

__Argumentos:__

- __successCallback__ - Una función 'callback' que se llama pasándole el `DirectoryEntry` padre de este fichero. _(Function)_
- __errorCallback__ - Una función 'callback' a la que se llamara si ocurre un error mientras se recuperaba el `DirectoryEntry` padre. Se le pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(parent) {
        console.log("Nombre del padre: " + parent.name);
    }

    function fail(error) {
        alert(error.code);
    }

    // Obtiene el `DirectoryEntry` padre
    entry.getParent(success, fail);	


createWriter
------------

Crea un objeto `FileWriter` asociado con este `FileEntry`.

__Argumentos:__

- __successCallback__ - Una función 'callback' que recibirá el objeto `FileWriter`. _(Function)_
- __errorCallback__ - Una función 'callback' que es llamada si ocurriera un error mientras se crea el objeto `FileWriter`. Se le pasara un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(writer) {
        writer.write("Vamos a escribir algo...");
    }

    function fail(error) {
        alert(error.code);
    }

    // crea un objeto `FileWriter` para escribir en el archivo
    entry.createWriter(success, fail);	


file
----

Retorna un objeto `File` que modela el estado actual del fichero asociado a este `FileEntry`.

__Argumentos:__

- __successCallback__ - Una función 'callback' a la que se le pasa el objeto `File`. _(Function)_
- __errorCallback__ - Una función 'callback' que sera llamada si ocurre algún error cuando creemos el objeto `File` (Ejemplo: El archivo ya no existe). Se le pasara como argumento un objeto `FileError`. _(Function)_

__Ejemplo Rápido__
	
    function success(file) {
        console.log("Tamaño del archivo: " + file.size);
    }

    function fail(error) {
        alert("No se pudo obtener las propiedades del fichero: " + error.code);
    }
 
    // obtiene las propiedades del fichero
    entry.file(success, fail);	
