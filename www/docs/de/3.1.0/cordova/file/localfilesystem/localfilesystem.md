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

# LocalFileSystem

Dieses Objekt bietet eine Möglichkeit, Root-<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a>e zu erhalten.

## Methoden

*   **RequestFileSystem**: ein <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a> anfordert. *(Funktion)*

*   **ResolveLocalFileSystemURI**: Abrufen einer `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` oder `FileEntry` mit lokalen URI. *(Funktion)*

## Konstanten

*   `LocalFileSystem.PERSISTENT`: Verwendet für die <a href="../../storage/storage.html">Speicher</a>ung, die nicht vom User Agent Anwendung oder Benutzer unerlaubt entfernt werden sollte.

*   `LocalFileSystem.TEMPORARY`: Verwendet für die <a href="../../storage/storage.html">Speicher</a>ung mit keine Garantie für Dauerhaftigkeit.

## Informationen

Die `LocalFileSystem` sind Objektmethoden definiert, auf das `window` Objekt.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Schnelle System-Beispieldatei anfordern

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Lokale <a href="../fileobj/fileobj.html">Datei</a> System URI kurzes Beispiel zu lösen

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> Fordern Sie ein <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a> zum <a href="../../storage/storage.html">Speicher</a>n von Anwendungsdaten.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **Fenster**: Verweis auf den globalen Window-Objekt
*   **Typ**: lokale <a href="../fileobj/fileobj.html">Datei</a> Systemtyp, siehe LocalFileSystem-Konstanten
*   **Größe**: gibt an, wieviel <a href="../../storage/storage.html">Speicher</a>platz in Byte, die Anwendung erwartet, müssen
*   **SuccessCallback**: mit einem <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a> Objekt aufgerufen
*   **ErrorCallback**: aufgerufen, wenn Fehler beim Abrufen des <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a> auftritt

## Schnelle System-Beispieldatei anfordern

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);