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

# LocalFileSystem

Questo oggetto fornisce un modo per ottenere il filesystem di root.

## Metodi

*   **requestFileSystem**: richiede un filesystem. *(Funzione)*

*   **resolveLocalFileSystemURI**: recuperare un `DirectoryEntry` o `FileEntry` utilizzando URI locale. *(Funzione)*

## Costanti

*   `LocalFileSystem.PERSISTENT`: Utilizzato per l'archiviazione che non deve essere rimosse dall'agente utente senza autorizzazione applicazione o utente.

*   `LocalFileSystem.TEMPORARY`: Utilizzato per l'archiviazione senza garanzia di persistenza.

## Dettagli

I `LocalFileSystem` sono definiti metodi oggetto sul `window` oggetto.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Richiesta File sistema rapido esempio

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Risolvere il sistema di File locale URI esempio rapido

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Esempio completo

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

> Richiedere un file system in cui archiviare i dati dell'applicazione.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **finestra**: riferimento a un oggetto globale window
*   **tipo**: locale tipo di sistema di file, vedere costanti LocalFileSystem
*   **dimensione**: indica quanto spazio di archiviazione, in byte, l'applicazione prevede di bisogno
*   **successCallback**: viene richiamato con un oggetto FileSystem
*   **errorCallback**: viene richiamato se l'errore si verifica il sistema di recupero file

## Richiesta File sistema rapido esempio

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);