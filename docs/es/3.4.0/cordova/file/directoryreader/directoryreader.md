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