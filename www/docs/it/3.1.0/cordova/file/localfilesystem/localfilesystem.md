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

# Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>

Questo oggetto fornisce un modo per ottenere il filesystem di root.

## Metodi

*   **request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>**: richiede un filesystem. *(Funzione)*

*   **resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI**: recuperare un `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` o `<a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a>` utilizzando URI locale. *(Funzione)*

## Costanti

*   `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT`: Utilizzato per l'archiviazione che non deve essere rimosse dall'agente utente senza autorizzazione applicazione o utente.

*   `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.TEMPORARY`: Utilizzato per l'archiviazione senza garanzia di persistenza.

## Dettagli

I `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>` sono definiti metodi oggetto sul `window` oggetto.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Richiesta <a href="../fileobj/fileobj.html">File</a> sistema rapido esempio

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, onError);
    

## Risolvere il sistema di <a href="../fileobj/fileobj.html">File</a> locale URI esempio rapido

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI("file:///example.txt", onSuccess, onError);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local <a href="../fileobj/fileobj.html">File</a> System <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, on<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>Success, fail);
            window.resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function on<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>Success(fileSystem) {
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
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Local <a href="../fileobj/fileobj.html">File</a> System</p>
      </body>
    </html>
    

# request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>

> Richiedere un file system in cui archiviare i dati dell'applicazione.

     window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(type, size, successCallback, errorCallback)
    

*   **finestra**: riferimento a un oggetto globale window
*   **tipo**: locale tipo di sistema di file, vedere costanti Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>
*   **dimensione**: indica quanto spazio di archiviazione, in byte, l'applicazione prevede di bisogno
*   **successCallback**: viene richiamato con un oggetto <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>
*   **errorCallback**: viene richiamato se l'errore si verifica il sistema di recupero file

## Richiesta <a href="../fileobj/fileobj.html">File</a> sistema rapido esempio

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, onError);