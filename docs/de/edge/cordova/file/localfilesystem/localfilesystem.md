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

Dieses Objekt bietet eine Möglichkeit, Root-Dateisysteme zu erhalten.

## Methoden

*   **RequestFileSystem**: ein Dateisystem anfordert. *(Funktion)*

*   **ResolveLocalFileSystemURI**: Abrufen einer `DirectoryEntry` oder `FileEntry` mit lokalen URI. *(Funktion)*

## Konstanten

*   `LocalFileSystem.PERSISTENT`: Verwendet für die Speicherung, die nicht vom User Agent Anwendung oder Benutzer unerlaubt entfernt werden sollte.

*   `LocalFileSystem.TEMPORARY`: Verwendet für die Speicherung mit keine Garantie für Dauerhaftigkeit.

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
    

## Lokale Datei System URI kurzes Beispiel zu lösen

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Vollständiges Beispiel

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

> Fordern Sie ein Dateisystem zum Speichern von Anwendungsdaten.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **Fenster**: Verweis auf den globalen Window-Objekt
*   **Typ**: lokale Datei Systemtyp, siehe LocalFileSystem-Konstanten
*   **Größe**: gibt an, wieviel Speicherplatz in Byte, die Anwendung erwartet, müssen
*   **SuccessCallback**: mit einem Dateisystem Objekt aufgerufen
*   **ErrorCallback**: aufgerufen, wenn Fehler beim Abrufen des Dateisystem auftritt

## Schnelle System-Beispieldatei anfordern

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);