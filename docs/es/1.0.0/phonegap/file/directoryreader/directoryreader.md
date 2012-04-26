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
