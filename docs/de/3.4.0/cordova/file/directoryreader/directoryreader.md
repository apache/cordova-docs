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

Ein Objekt, das Dateien und Verzeichnisse in einem Verzeichnis listet in der [W3C-Verzeichnisse und Systeme][1] -Spezifikation definiert.

 [1]: http://www.w3.org/TR/file-system-api/

## Methoden

*   **ReadEntries**: Lesen Sie die Einträge in einem Verzeichnis.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## readEntries

Lesen Sie die Einträge in diesem Verzeichnis.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der ein Array von übergeben wird `FileEntry` und `DirectoryEntry` Objekte. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Abrufen der Verzeichnisliste. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

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