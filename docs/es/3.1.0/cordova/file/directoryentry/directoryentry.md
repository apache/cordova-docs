---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# DirectoryEntry

Este objeto representa un directorio en un sistema de archivos, como se define en la especificación [W3C directorios y sistemas][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Propiedades

*   **isFile**: siempre `false` . *(booleano)*

*   **isDirectory**: siempre `true` . *(booleano)*

*   **nombre**: el nombre de la `DirectoryEntry` , excluyendo el camino que conduce a ella. *(DOMString)*

*   **fullPath**: la ruta absoluta completa desde la raíz a la `DirectoryEntry` . *(DOMString)*

**Nota:** El siguiente atributo está definido por la especificación del W3C, pero *no* es compatible:

*   **sistema de archivos**: el sistema de archivo en el cual el `DirectoryEntry` reside. *(FileSystem)*

## Métodos

Los métodos siguientes pueden invocarse en un `DirectoryEntry` objeto:

*   **getMetadata**: ver metadatos de un directorio.

*   **setMetadata**: establezca los metadatos en un directorio.

*   **moveTo**: mover un directorio a una ubicación diferente en el sistema de archivos.

*   **copyTo**: copiar un directorio en una ubicación diferente en el sistema de archivos.

*   **visita**: devolver una dirección URL para ayudar a localizar a un directorio.

*   **eliminar**: elimina un directorio. El directorio debe estar vacío.

*   **getParent**: ver el directorio padre.

*   **createReader**: crear un nuevo `DirectoryReader` que puede leer las entradas de un directorio.

*   **getDirectory**: crear o buscar un directorio.

*   **getFile**: crear o buscar un archivo.

*   **removeRecursively**: eliminar un directorio y todo su contenido.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## getMetadata

Ver metadatos de un directorio.

**Parámetros:**

*   **successCallback**: una función de devolución de llamada para ejecutar con un `Metadata` objeto. *(Función)*

*   **errorCallback**: una función de devolución de llamada que se ejecutarán si se produce un error al recuperar los `Metadata` . Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(metadata) {console.log ("última modificación:" + metadata.modificationTime);}
    
    function fail(error) {alert(error.code)};
    
    / / Solicitud objeto de metadatos para esta entrada entry.getMetadata (éxito, fail);
    

## setMetadata

Establece los atributos extendidos de un directorio, o metadatos. *Actualmente sólo funciona en iOS.*

**Parámetros:**

*   **successCallback**: una devolución de llamada que se ejecuta cuando los metadatos es fijado con éxito. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta cuando los metadatos no logra establecerse. *(Función)*

*   **metadataObject**: un objeto que contiene de los metadatos claves y valores. *(Objeto)*

**Ejemplo rápido**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS Quirk**

*   Solamente el `com.apple.MobileBackup` se admite el atributo extendido. Establezca el valor en `1` para evitar que el directorio se hace backup de iCloud. Establezca el valor en `` para volver a habilitar el directorio para realizar backup de iCloud.

**Ejemplo rápido**

    function setFolderMetadata(localFileSystem, subFolder, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetDirectoryWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetDirectoryFail = function() {
            console.log("error getting dir")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getDirectory(subFolder, {create: true, exclusive: false}, onGetDirectoryWin, onGetDirectoryFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFolderMetadata(LocalFileSystem.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);
    

## moveTo

Mover un directorio a una ubicación diferente en el sistema de archivos. Un error de los resultados si la aplicación intenta:

*   mover un directorio dentro de sí mismo o a cualquier niño a cualquier profundidad.

*   mover un directorio a su padre si no se proporciona un nombre diferente a su directorio actual.

*   hacia una ruta ocupada por un archivo de un directorio.

*   mover un directorio a una ruta ocupada por un directorio que no está vacío.

Mover un directorio en la cima de un directorio vacío existente intenta eliminar y reemplazar ese directorio.

**Parámetros:**

*   **padres**: el directorio al que se mueva el directorio padre. *(DirectoryEntry)*

*   **newName**: el nuevo nombre del directorio. Por defecto el nombre actual si no se especifica. *(DOMString)*

*   **successCallback**: una devolución de llamada que se ejecuta con el `DirectoryEntry` objeto para el nuevo directorio. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar mover el directorio. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the directory to a new directory and rename it
        entry.moveTo(parentEntry, newName, success, fail);
    }
    

## copyTo

Copiar un directorio en una ubicación diferente en el sistema de archivos. Un error de los resultados si la aplicación intenta:

*   copiar un directorio dentro de sí mismo a cualquier profundidad.

*   copiar un directorio en su matriz si no se proporciona un nombre diferente a su directorio actual.

Directorio copias son siempre recursivo y copiar todo el contenido del directorio.

**Parámetros:**

*   **padres**: el directorio al que copiar el directorio padre. *(DirectoryEntry)*

*   **newName**: el nuevo nombre del directorio. Por defecto el nombre actual si no se especifica. *(DOMString)*

*   **successCallback**: una devolución de llamada que se ejecuta con el `DirectoryEntry` objeto para el nuevo directorio. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar copiar el directorio subyacente. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the directory to a new directory and rename it
        entry.copyTo(parentEntry, newName, success, fail);
    }
    

## Visita

Devuelve una dirección URL que se puede utilizar para localizar el directorio.

**Ejemplo rápido**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## quitar

Elimina un directorio. Un error de los resultados si la aplicación intenta:

*   eliminar un directorio que no está vacío.

*   eliminar el directorio raíz de un sistema de archivos.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se ejecuta después de que el directorio se borra. Se invoca sin parámetros. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar borrar el directorio. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(entry) {console.log ("retiro tuvo éxito");}
    
    function fail(error) {alert ('Error eliminar directorio: ' + error.code);}
    
    / / quitar este directorio entry.remove (éxito, fail);
    

## getParent

Ver el padre `DirectoryEntry` que contiene el directorio.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se pasa a los padres del directorio `DirectoryEntry` . *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar recuperar el padre `DirectoryEntry` . Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

Crea un nuevo DirectoryReader para leer las entradas en un directorio.

**Ejemplo rápido**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

Crea o busca un directorio existente. Un error de los resultados si la aplicación intenta:

*   Cree un directorio cuyo primario inmediato todavía no existe.

**Parámetros:**

*   **ruta**: la ruta al directorio que admiraba o creado. Una ruta absoluta, o una ruta de acceso relativa de este `DirectoryEntry` . *(DOMString)*

*   **Opciones**: opciones para especificar si el directorio va a ser creado si no existe. *(Banderas)*

*   **successCallback**: una devolución de llamada que se ejecuta con un `DirectoryEntry` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al crear o buscar el directorio. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(dirEntry) {console.log ("nombre del directorio:" + dirEntry.name);}
    
    function fail(error) {alert ("no se puede crear nuevo directorio:" + error.code);}
    
    / / Recuperar un directorio existente, o crearlo si no existe ya entry.getDirectory ("newDir", {crear: verdadero, exclusivo: false}, éxito, fail);
    

## getFile

Crea o busca un archivo. Un error de los resultados si la aplicación intenta:

*   crear un archivo cuyo primario inmediato todavía no existe.

**Parámetros:**

*   **ruta**: la ruta del archivo que admiraba o creado. Una ruta absoluta, o una ruta de acceso relativa de este `DirectoryEntry` . *(DOMString)*

*   **Opciones**: opciones para especificar si el archivo es creado si no existe. *(Banderas)*

*   **successCallback**: una devolución de llamada que se pasa un `FileEntry` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al crear o buscar el archivo. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(fileEntry) {console.log ("nombre de archivo:" + fileEntry.name);}
    
    function fail(error) {alert ("error al recuperar el archivo:" + error.code);}
    
    / / Recuperar un archivo existente, o crearlo si no existe entry.getFile ("newFile.txt", {crear: verdadero, exclusivo: false}, éxito, fail);
    

## removeRecursively

Elimina un directorio y todo su contenido. En caso de error (por ejemplo, tratando de eliminar un directorio que contiene un archivo que no se puede quitar), algunos de los contenidos del directorio pueden ser eliminados. Un error de los resultados si la aplicación intenta:

*   eliminar el directorio raíz de un sistema de archivos.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se ejecuta después de la `DirectoryEntry` ha sido eliminado. Se invoca sin parámetros. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar eliminar el `DirectoryEntry` . Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## Rarezas de blackBerry

Puede fallar con un `ControlledAccessException` en los siguientes casos:

*   Una aplicación intenta acceder a un directorio creado por una instalación anterior de la aplicación.

> Solución: Asegúrese de directorios temporales se limpian manualmente, o por la aplicación antes de la reinstalación.

*   Si el dispositivo está conectado por USB.

> Solución: Desconecte el cable USB desde el dispositivo y vuelva a ejecutar.