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

# <a href="../fileobj/fileobj.html">File</a>System

Questo oggetto rappresenta un file system.

## Proprietà

*   **nome**: il nome del file system. *(DOMString)*

*   **radice**: la directory radice del file system. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

## Dettagli

Il `<a href="../fileobj/fileobj.html">File</a>System` oggetto rappresenta le informazioni relative al file system. Il nome del file system è univoco tra l'elenco dei sistemi di file esposti. La proprietà della radice contiene un `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` oggetto che rappresenta la directory radice del file system.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio di file di sistema rapido

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.<a href="../localfilesystem/localfilesystem.html">request<a href="../fileobj/fileobj.html">File</a>System</a>(<a href="../localfilesystem/localfilesystem.html">Local<a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, null);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../fileobj/fileobj.html">File</a> System <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.<a href="../localfilesystem/localfilesystem.html">request<a href="../fileobj/fileobj.html">File</a>System</a>(<a href="../localfilesystem/localfilesystem.html">Local<a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, on<a href="../fileobj/fileobj.html">File</a>SystemSuccess, fail);
        }
    
        function on<a href="../fileobj/fileobj.html">File</a>SystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p><a href="../fileobj/fileobj.html">File</a> System</p>
      </body>
    </html>