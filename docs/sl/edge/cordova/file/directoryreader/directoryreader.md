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

Predmet, ki navaja datotekah in imenikih znotraj imenika, kakor je opredeljeno v specifikaciji [W3C imenikov in sistemov][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Metode

*   **readEntries**: prebrati vnosov v imenik.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## readEntries

Prebrati vnosov v tem imeniku.

**Parametri**:

*   **successCallback**: povratni klic, ki je opravil paleto `FileEntry` in `DirectoryEntry` predmetov. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri pridobivanju naslovnik obrobljanje. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

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