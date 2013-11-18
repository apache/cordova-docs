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

# Lokalnega datotečnega sistema

Ta predmet omogoča pridobiti korenski datotečni sistemi.

## Metode

*   **requestFileSystem**: zahteva je datotečni sistem. *(Funkcija)*

*   **resolveLocalFileSystemURI**: pridobivanje a `DirectoryEntry` ali `FileEntry` z uporabo lokalnih URI. *(Funkcija)*

## Konstante

*   `LocalFileSystem.PERSISTENT`: Uporablja za skladiščenje, ki ne odstranite uporabnika agent brez dovoljenja aplikacija ali uporabnik.

*   `LocalFileSystem.TEMPORARY`: Uporablja za shranjevanje brez garancije za vztrajnost.

## Podrobnosti

Na `LocalFileSystem` predmeta metode so definirani v `window` predmeta.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Zahtevati pila sistem hiter vzor

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Rešiti tukajšnji pila sistem URI hitro primer

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Celoten primer

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

> Zahtevajo datotečni sistem v katerem spraviti uporabe podatkov.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **okno**: sklic na predmet global okno
*   **Vrsta**: lokalni datotečni sistem tipa, glej konstante lokalnega datotečnega sistema
*   **velikost**: označuje, koliko prostora za shranjevanje, v bajtih, uporaba pričakuje, da potrebujejo
*   **successCallback**: priklican z predmetu datotečnega sistema
*   **errorCallback**: uveljavljati, če pride do napake pri pridobivanju datotečni sistem

## Zahtevati pila sistem hiter vzor

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);