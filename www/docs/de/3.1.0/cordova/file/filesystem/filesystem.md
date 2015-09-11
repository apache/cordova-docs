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

# <a href="../fileobj/fileobj.html">Datei</a>system

Dieses Objekt stellt ein <a href="../fileobj/fileobj.html">Datei</a>system.

## Eigenschaften

*   **Name**: der Name des <a href="../fileobj/fileobj.html">Datei</a>systems. *(DOM-String und enthält)*

*   **Wurzel**: das Root-Verzeichnis des <a href="../fileobj/fileobj.html">Datei</a>systems. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

## Informationen

Das `FileSystem` Objekt stellt Informationen über das <a href="../fileobj/fileobj.html">Datei</a>system. Der Name des <a href="../fileobj/fileobj.html">Datei</a>systems ist eindeutig die Liste der exponierten <a href="../fileobj/fileobj.html">Datei</a>systeme. Die Root-Eigenschaft enthält ein `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` -Objekt, das <a href="../fileobj/fileobj.html">Datei</a>system Root-Verzeichnis darstellt.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Schnelle System-Beispieldatei

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, 0, onSuccess, null);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, 0, onFileSystemSuccess, fail);
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
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>File System</p>
      </body>
    </html>