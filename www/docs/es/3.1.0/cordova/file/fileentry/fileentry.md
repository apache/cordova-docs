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

# FileEntry

Representa un archivo en un sistema de archivos, como se define en la especificación [W3C directorios y sistemas][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Propiedades

*   **isFile**: siempre `true` . *(booleano)*

*   **isDirectory**: siempre `false` . *(booleano)*

*   **nombre**: el nombre de la `FileEntry` , excluyendo el camino que conduce a ella. *(DOMString)*

*   **fullPath**: la ruta absoluta completa desde la raíz a la `FileEntry` . *(DOMString)*

**Nota:** El siguiente atributo está definido por la especificación del W3C, pero *no* es compatible:

*   **sistema de archivos**: el sistema de archivo en el cual el `FileEntry` reside. *(FileSystem)*

## Métodos

*   **getMetadata**: ver metadatos de un archivo.

*   **setMetadata**: establezca los metadatos en un archivo.

*   **moveTo**: mover un archivo a una ubicación diferente en el sistema de archivos.

*   **copyTo**: copiar un archivo en una ubicación diferente en el sistema de archivos.

*   **visita**: devolver una dirección URL que puede utilizarse para localizar un archivo.

*   **eliminar**: elimina un archivo.

*   **getParent**: ver el directorio padre.

*   **createWriter**: crea un `FileWriter` objeto que puede ser utilizado para escribir en un archivo.

*   **archivo**: crea un `File` objeto que contiene las propiedades del archivo.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## getMetadata

Ver metadatos de un archivo.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se pasa un `Metadata` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al recuperar los `Metadata` . Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(metadata) {console.log ("última modificación:" + metadata.modificationTime);}
    
    function fail(error) {alert(error.code)};
    
    / / Solicitud objeto de metadatos para esta entrada entry.getMetadata (éxito, fail);
    

## setMetadata

Conjunto de metadatos en un archivo.

**Actualmente sólo funciona en iOS.**

*   Esto ajustará los atributos extendidos de un archivo.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se ejecuta cuando los metadatos se establece. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta cuando los metadatos no se ha establecido con éxito. *(Función)*

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

*   Solamente el `com.apple.MobileBackup` se admite el atributo extendido. Establezca el valor en `1` para evitar que el archivo se hace backup de iCloud. Establezca el valor en `` para volver a habilitar el archivo para realizar backup de iCloud.

**Ejemplo rápido**

    function setFileMetadata(localFileSystem, filePath, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetFileWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetFileFail = function() {
            console.log("error getting file")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getFile(filePath, {create: true, exclusive: false}, onGetFileWin, onGetFileFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(LocalFileSystem.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

Mover un archivo a una ubicación diferente en el sistema de archivos. Un error de los resultados si la aplicación intenta:

*   mover un archivo a su padre si no proporciona un nombre diferente a su actual;

*   mover un archivo a un sendero ocupado por un directorio;

Además, mover un archivo en la cima de un archivo existente intentos eliminar y reemplazar ese archivo.

**Parámetros:**

*   **padres**: el directorio al que se mueva el archivo. *(DirectoryEntry)*

*   **newName**: el nuevo nombre del archivo. Por defecto el nombre actual si no se especifica. *(DOMString)*

*   **successCallback**: una devolución de llamada que se pasa el nuevo archivo `FileEntry` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar mover el archivo. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

Copiar un archivo a una nueva ubicación en el sistema de archivos. Un error de los resultados si la aplicación intenta:

*   copiar un archivo a su padre si no se proporciona un nombre diferente a la actual.

**Parámetros:**

*   **padres**: el directorio al que copiar el archivo. *(DirectoryEntry)*

*   **newName**: el nuevo nombre del archivo. Por defecto el nombre actual si no se especifica. *(DOMString)*

*   **successCallback**: una devolución de llamada que se pasa el nuevo archivo `FileEntry` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar copiar el archivo. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## Visita

Devuelve una dirección URL que se puede utilizar para localizar el archivo.

**Ejemplo rápido**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## quitar

Elimina un archivo.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se ejecuta después de que el archivo se ha eliminado. Se invoca sin parámetros. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar borrar el archivo. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

Ver el padre `DirectoryEntry` que contiene el archivo.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se pasa a los padres del archivo `DirectoryEntry` . *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar recuperar el padre `DirectoryEntry` . Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

Crear un `FileWriter` objeto asociado con el archivo representado por el`FileEntry`.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se pasa un `FileWriter` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al intentar crear el FileWriter. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## archivo

Volver a `File` objeto que representa el estado actual del archivo que esta `FileEntry` representa.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se pasa un `File` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al crear el `File` objeto, por ejemplo, cuando el archivo ya no existe. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);