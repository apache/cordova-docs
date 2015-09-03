---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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


# Archivo

> Una API para leer, escribir y navegar por las jerarquías de sistema de archivo, basadas en la [api de archivo w3c][1].

 [1]: http://www.w3.org/TR/FileAPI

## Objetos

*   DirectoryEntry
*   DirectoryReader
*   Archivo
*   FileEntry
*   FileError
*   FileReader
*   FileSystem
*   FileTransfer
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   Flags
*   LocalFileSystem
*   Metadata

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Para usar el plugin de transferencia de archivos es necesario agregar por separado.

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="FileTransfer">
            <param name="blackberry-package" value="org.apache.cordova.http.FileTransfer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   (en iOS`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


# Archivo

Este objeto contiene los atributos de un solo archivo.

## Propiedades

*   **nombre**: el nombre del archivo. *(DOMString)*

*   **fullPath**: la ruta de acceso completa del archivo incluyendo el nombre del archivo. *(DOMString)*

*   **tipo**: el tipo mime del archivo. *(DOMString)*

*   **lastModifiedDate**: la última vez que el archivo fue modificado. *(Fecha)*

*   **tamaño**: el tamaño del archivo en bytes. *(largo)*

## Métodos

*   **rebanada**: seleccionar sólo una parte del archivo a leer.

## Detalles

El `File` objeto contiene atributos de un solo archivo. Usted puede obtener una instancia de un `File` objeto llamando a una `FileEntry` del objeto `file()` método.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## rebanada

Devolver un nuevo `File` objeto, para que `FileReader` devuelve sólo la porción especificada del archivo. Para valores negativos `start` o `end` se miden desde el final del archivo. Los índices se colocan en relación con el segmento actual. (Véase el siguiente ejemplo completo).

**Parámetros:**

*   **Inicio**: el índice del primer byte para leer, inclusive.

*   **final**: el índice del byte después de la última a leer.

**Ejemplo rápido**

    var slicedFile = file.slice(10, 30);
    

**Ejemplo completo**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Plataformas soportadas**

*   Android
*   iOS


# FileReader

El `FileReader` permite el acceso básico a un archivo.

## Propiedades

*   **readyState**: uno del lector de tres Estados posibles, ya sea `EMPTY` , `LOADING` o`DONE`.

*   **resultado**: el contenido del archivo que ha leído. *(DOMString)*

*   **error**: un objeto que contiene errores. *(FileError)*

*   **onloadstart**: cuando comienza la lectura. *(Función)*

*   **OnLoad**: cuando la lectura ha completado con éxito. *(Función)*

*   **onabort**: cuando la lectura ha sido abortada. Por ejemplo, invocando el `abort()` método. *(Función)*

*   **OnError**: cuando la lectura ha fallado. *(Función)*

*   **onloadend**: llamado cuando se haya completado la solicitud (ya sea en el éxito o el fracaso). *(Función)*

**Nota:** No se admite la propiedad siguiente:

*   **OnProgress**: llamado al leer el archivo, informe de progreso en términos de `progress.loaded` / `progress.total` . *(Función)*

## Métodos

*   **abortar**: interrupciones leer el archivo.

*   **readAsDataURL**: leer archivos y datos de retorno como un enlace de datos codificados en base64.

*   **readAsText**: fichero de texto que Lee.

*   **readAsBinaryString**: Lee el archivo como binarios y devuelve una cadena binaria.

*   **readAsArrayBuffer**: Lee del archivo como una`ArrayBuffer`.

## Detalles

El `FileReader` objeto ofrece una manera de leer los archivos de sistema de archivos del dispositivo. Pueden leer archivos de texto o como una cadena de datos codificados en base64. Detectores de eventos reciben el `loadstart` , `progress` , `load` , `loadend` , `error` , y `abort` eventos.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## readAsDataURL

**Parámetros:**

*   **archivo**: el objeto de archivo a leer.

## Ejemplo rápido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**Parámetros:**

*   **archivo**: el objeto de archivo a leer.

*   **codificación**: la codificación a utilizar para codificar el contenido del archivo. Valor por defecto es UTF8.

## Ejemplo rápido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## abortar

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS rarezas

*   No se admite el parámetro de **codificación** y codificación UTF8 siempre está en efecto.

## readAsBinaryString

Actualmente apoyado sólo en iOS y Android.

**Parámetros:**

*   **archivo**: el objeto de archivo a leer.

## Ejemplo rápido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

Actualmente apoyado sólo en iOS y Android.

**Parámetros:**

*   **archivo**: el objeto de archivo a leer.

## Ejemplo rápido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);


# FileWriter

Como objeto que le permite crear y escribir datos en un archivo.

## Propiedades

*   **readyState**: uno de los tres Estados posibles, ya sea `INIT` , `WRITING` , o`DONE`.

*   **nombre de archivo**: el nombre del archivo a ser escrito. *(DOMString)*

*   **longitud**: la longitud del archivo a ser escrito. *(largo)*

*   **posición**: la posición actual del puntero del archivo. *(largo)*

*   **error**: un objeto que contiene errores. *(FileError)*

*   **onwritestart**: cuando comienza la escritura. *(Función)*

*   **onwrite**: cuando la solicitud se ha completado con éxito. *(Función)*

*   **onabort**: cuando la escritura ha sido abortada. Por ejemplo, invocando el método abort(). *(Función)*

*   **OnError**: cuando la escritura ha fallado. *(Función)*

*   **onwriteend**: llamado cuando se haya completado la solicitud (ya sea en el éxito o el fracaso). *(Función)*

La siguiente propiedad *no* es compatible:

*   **OnProgress**: llamado al escribir el archivo, informe de progreso en términos de `progress.loaded` / `progress.total` . *(Función)*

## Métodos

*   **anular**: anula el archivo de la escritura.

*   **Buscar**: mueve el puntero del archivo en el byte especificado.

*   **truncar**: acorta el archivo a la longitud especificada.

*   **escribir**: escribe los datos en el archivo.

## Detalles

El `FileWriter` objeto ofrece una manera de escribir archivos codificado en UTF-8 en el sistema de archivos del dispositivo. Aplicaciones responden a `writestart` , `progress` , `write` , `writeend` , `error` , y `abort` eventos.

Cada `FileWriter` corresponde a un solo archivo, a la que se pueden escribir datos muchas veces. El `FileWriter` mantiene el archivo `position` y `length` atributos, que permiten la aplicación para `seek` y `write` en el archivo. De forma predeterminada, el `FileWriter` escribe al principio del archivo, sobrescribiendo los datos existentes. Conjunto opcional `append` booleana a `true` en el `FileWriter` del constructor para escribir en el final del archivo.

Datos de texto es apoyados por todas las plataformas que se enumeran a continuación. Texto es codificado como UTF-8 antes de que se escriben en el sistema de archivos. Algunas plataformas soportan datos binarios, que pueden pasar en un ArrayBuffer o un Blob.

## Plataformas soportadas

Texto y soporte binario:

*   Android
*   iOS

Soporte de sólo texto:

*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Windows Phone 7 y 8
*   Windows 8

## Buscar ejemplo rápido

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Truncar ejemplo rápido

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Escribir rápido ejemplo

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Binario escribir ejemplo rápido

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Anexar ejemplo rápido

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Abortar ejemplo rápido

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>


# Sistema de archivos

Este objeto representa un sistema de archivos.

## Propiedades

*   **nombre**: el nombre del sistema de archivos. *(DOMString)*

*   **raíz**: el directorio raíz del sistema de archivos. *(DirectoryEntry)*

## Detalles

El `FileSystem` objeto representa la información sobre el sistema de archivos. El nombre del sistema de archivos es único en toda la lista de sistemas de archivos expuestos. La propiedad raíz contiene una `DirectoryEntry` objeto que representa el directorio raíz del sistema de archivos.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo de archivo de sistema rápido

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
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
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>


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


# DirectoryReader

Un objeto que enumera los archivos y directorios dentro de un directorio, tal como se define en la especificación [W3C directorios y sistemas][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Métodos

*   **readEntries**: leer las entradas en un directorio.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## readEntries

Leer las entradas en este directorio.

**Parámetros:**

*   **successCallback**: una devolución de llamada que se pasa una matriz de `FileEntry` y `DirectoryEntry` los objetos. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al recuperar el listado del directorio. Invocado con un `FileError` objeto. *(Función)*

**Ejemplo rápido**

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }
    
    function fail(error) {
        alert("Failed to list directory contents: " + error.code);
    }
    
    // Get a directory reader
    var directoryReader = dirEntry.createReader();
    
    // Get a list of all the entries in the directory
    directoryReader.readEntries(success,fail);


# File Transfer

El `FileTransfer` objeto permite cargar o descargar archivos desde y hacia un servidor.

## Propiedades

*   **OnProgress**: llama con un `ProgressEvent` cuando se transfiere un nuevo paquete de datos. *(Función)*

## Métodos

*   **cargar**: envía un archivo a un servidor.

*   **Descargar**: descarga un archivo del servidor.

*   **abortar**: aborta una transferencia en curso.

## Detalles

El `FileTransfer` objeto proporciona una manera para subir archivos a un servidor remoto mediante peticiones HTTP POST multi-partes. Se admiten los protocolos HTTP y HTTPS. Los parámetros opcionales pueden ser especificados por pasar un `FileUploadOptions` contra el `upload()` método. En subida exitosa, un `FileUploadResult` objeto se pasa a la devolución de llamada de éxito. Si se produce un error, un `FileTransferError` objeto se pasa el callback de error. También es posible (en iOS y Android) Descargar un archivo desde un servidor remoto y guardarla en el dispositivo.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## subir

**Parámetros:**

*   **ruta**: ruta de acceso completa del archivo en el dispositivo.

*   **servidor**: dirección URL del servidor para recibir el archivo, como codificada por`encodeURI()`.

*   **successCallback**: una devolución de llamada que se pasa un `Metadata` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error recuperar la `Metadata` . Invocado con un `FileTransferError` objeto. *(Función)*

*   **Opciones**: parámetros opcionales como nombre de archivo y el tipo MIME.

*   **trustAllHosts**: parámetro opcional, por defecto es `false` . Si establece en `true` , acepta todos los certificados de seguridad. Esto es útil ya que Android rechaza certificados autofirmados seguridad. No se recomienda para uso productivo. Compatible con iOS y Android. *(boolean)*

**Ejemplo rápido**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**Ejemplo completo**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**Ajuste Upload cabeceras**

Compatible con iOS y Android

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Rarezas Android**

Establezca el `chunkedMode` opción de `false` para evitar problemas de subir a un servidor Nginx.

## descargar

**Parámetros:**

*   **fuente**: dirección URL del servidor para descargar el archivo, como codificada por`encodeURI()`.

*   **objetivo**: ruta de acceso completa del archivo en el dispositivo.

*   **successCallback**: una devolución de llamada que se pasa un `FileEntry` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al recuperar los `Metadata` . Invocado con un `FileTransferError` objeto. *(Función)*

*   **trustAllHosts**: parámetro opcional, por defecto es `false` . Si a `true` entonces aceptará todos los certificados de seguridad. Esto es útil como Android rechaza los certificados de seguridad firmado del uno mismo. No se recomienda para uso productivo. Compatible con iOS y Android. *(boolean)*

*   **Opciones**: parámetros opcionales, actualmente sólo soporta cabeceras (como autorización (autenticación básica), etc.).

**Ejemplo rápido**

    // !! Asume filePath es una ruta válida en el dispositivo var fileTransfer = new FileTransfer();
    var uri = encodeURI ("http://some.server.com/download.php");
    
    fileTransfer.download (uri, filePath, function(entry) {console.log ("descarga completa:" + entry.fullPath);
        }, function(error) {console.log ("error al descargar el origen" + error.source);
            Console.log ("descargar error objetivo" + error.target);
            Console.log ("código de error de carga" + error.code);
        }, falso, {encabezados: {"Autorización": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA =="}});
    

## abortar

Aborta a una transferencia en curso. El callback onerror se pasa un objeto FileTransferError que tiene un código de error de FileTransferError.ABORT_ERR.

**Plataformas soportadas**

*   Android
*   iOS

**Ejemplo rápido**

    // !! Asume fileURI variable contiene un URI válido para un archivo de texto en la victoria de dispositivo var function(r) = {console.log ("no se debe llamar.");}
    
    var fallar = function(error) {/ / error.code == FileTransferError.ABORT_ERR alert ("ha ocurrido un error: código =" + error.code);
        Console.log ("error al cargar el origen" + error.source);
        Console.log ("upload error objetivo" + error.target);}
    
    var opciones = new FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    var ft = new FileTransfer();
    Ft.upload (fileURI, encodeURI ("http://some.server.com/upload.php"), win, fail, opciones);
    Ft.Abort();
    

## OnProgress

Llama con un ProgressEvent cuando se transfiere un nuevo paquete de datos.

**Plataformas soportadas**

*   Android
*   iOS

**Ejemplo**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Rarezas** - en ambos Android / iOS, lengthComputable es `false` de descargas que utilizan codificación gzip.


# FileUploadOptions

A `FileUploadOptions` objeto puede pasar a la `FileTransfer` del objeto `upload()` método para especificar parámetros adicionales a la escritura de la carga.

## Propiedades

*   **fileKey**: el nombre del elemento de formulario. Por defecto es `file` . (DOMString)

*   **nombre de archivo**: el nombre del archivo a utilizar al guardar el archivo en el servidor. Por defecto es `image.jpg` . (DOMString)

*   **mimeType**: el tipo mime de los datos para cargar. Por defecto es `image/jpeg` . (DOMString)

*   **params**: un conjunto de pares clave/valor opcional para pasar en la petición HTTP. (Objeto)

*   **chunkedMode**: Si desea cargar los datos en modo de transmisión fragmentado. Por defecto es `true` . (Boolean)

*   **cabeceras**: un mapa de valores de encabezado nombre/cabecera. Utilice una matriz para especificar más de un valor. (Objeto)

## Descripción

A `FileUploadOptions` objeto puede pasar a la `FileTransfer` del objeto `upload()` método para especificar parámetros adicionales a la escritura de la carga.

## WP7 Quirk

*   **chunkedMode:**: ignoran en WP7.


# FileUploadResult

A `FileUploadResult` objeto se pasa a la devolución del éxito de la `FileTransfer` del objeto `upload()` método.

## Propiedades

*   **bytesSent**: el número de bytes enviados al servidor como parte de la carga. (largo)

*   **responseCode**: código de respuesta HTTP el devuelto por el servidor. (largo)

*   **respuesta**: respuesta el HTTP devuelto por el servidor. (DOMString)

## Descripción

El `FileUploadResult` objeto es devuelto vía el callback de éxito de la `FileTransfer` del objeto `upload()` método.

## iOS rarezas

*   No es compatible con `responseCode` o`bytesSent`.


# Banderas

Proporciona argumentos para la `DirectoryEntry` del objeto `getFile()` y `getDirectory()` los métodos, que buscar o crean archivos y directorios, respectivamente.

## Propiedades

*   **crear**: indica que el archivo o directorio debe ser creado si no existe ya. *(booleano)*

*   **exclusivo**: ha no tiene ningún efecto por sí mismo, pero cuando se utiliza con `create` provoca la creación de archivo o directorio a fracasar si la ruta de destino ya existe. *(booleano)*

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    / / Obtener el directorio de datos, creándola si no existe.
    dataDir = fileSystem.root.getDirectory ("datos", {crear: true});
    
    / / Crear el archivo de bloqueo, si y sólo si no existe.
    lockFile = dataDir.getFile ("lockfile.txt", {crear: verdadero, exclusivo: true});


# LocalFileSystem

Este objeto proporciona una manera de obtener sistemas de archivos root.

## Métodos

*   **requestFileSystem**: pide un sistema de archivos. *(Función)*

*   **resolveLocalFileSystemURI**: recuperar un `DirectoryEntry` o `FileEntry` usando URI local. *(Función)*

## Constantes

*   `LocalFileSystem.PERSISTENT`: Utilizado para el almacenamiento de información que no debe ser retirada por el agente de usuario sin el permiso de aplicación o usuario.

*   `LocalFileSystem.TEMPORARY`: Utilizado para el almacenamiento sin ninguna garantía de persistencia.

## Detalles

La `LocalFileSystem` métodos del objeto se definen en el `window` objeto.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo de archivo de sistema rápida de solicitar

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Resolver el sistema de archivos Local URI ejemplo rápido

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
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
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> Solicite un sistema de archivos para almacenar datos de la aplicación.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **window**: referencia al objeto ventana global
*   **type**: local tipo de sistema de archivo, vea constantes del LocalFileSystem
*   **size**: indica cuánto espacio de almacenamiento, en bytes, la aplicación espera que necesitas
*   **successCallback**: se invoca con un objeto de sistema de archivos
*   **errorCallback**: invoca si produce error de sistema de archivos de recuperación

## Ejemplo de archivo de sistema rápida de solicitar

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);


# Metadatos

Una interfaz que proporciona información sobre el estado de un archivo o directorio.

## Propiedades

*   **modificationTime**: el tiempo cuando el archivo o directorio última modificación. *(Fecha)*

## Detalles

El `Metadata` objeto representa la información sobre el estado de un archivo o directorio. Llamando a `DirectoryEntry` o `FileEntry` del objeto `getMetadata()` método da como resultado un `Metadata` instancia.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);


# FileError

A `FileError` objeto se establece cuando se produce un error en cualquiera de los métodos de archivo API.

## Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación.

## Constantes

*   `FileError.NOT_FOUND_ERR`
*   `FileError.SECURITY_ERR`
*   `FileError.ABORT_ERR`
*   `FileError.NOT_READABLE_ERR`
*   `FileError.ENCODING_ERR`
*   `FileError.NO_MODIFICATION_ALLOWED_ERR`
*   `FileError.INVALID_STATE_ERR`
*   `FileError.SYNTAX_ERR`
*   `FileError.INVALID_MODIFICATION_ERR`
*   `FileError.QUOTA_EXCEEDED_ERR`
*   `FileError.TYPE_MISMATCH_ERR`
*   `FileError.PATH_EXISTS_ERR`

## Descripción

El `FileError` objeto es el único parámetro proporcionado a cualquiera de los callbacks de error de la API archivo. Para determinar el tipo de error, comparar su `code` propiedad a cualquiera de los listados arriba.


# FileTransferError

A `FileTransferError` objeto se pasa a un callback de error cuando se produce un error.

## Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación. (Número)

*   **fuente**: URI a la fuente. (String)

*   **objetivo**: URI a la meta. (String)

*   **HTTP_STATUS**: código de estado HTTP. Este atributo sólo está disponible cuando se recibe un código de respuesta de la conexión HTTP. (Número)

## Constantes

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Descripción

El `FileTransferError` objeto se pasa el callback de error cuando se produce un error al cargar o descargar un archivo.
