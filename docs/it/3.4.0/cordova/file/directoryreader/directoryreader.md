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

Un oggetto che elenca i file e le directory all'interno di una directory, come definito nella specifica [W3C directory e sistemi][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Metodi

*   **readEntries**: leggere le voci in una directory.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## readEntries

Leggere le voci in questa directory.

**Parametri:**

*   **successCallback**: un callback che viene passato un array di `FileEntry` e `DirectoryEntry` oggetti. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante il recupero dell'elenco di directory. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

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