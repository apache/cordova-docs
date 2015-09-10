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

# <a href="../fileobj/fileobj.html">File</a>Entry

Rappresenta un file su un file system, come definito nella specifica [W3C directory e sistemi][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Proprietà

*   **is<a href="../fileobj/fileobj.html">File</a>**: sempre `true` . *(booleano)*

*   **isDirectory**: sempre `false` . *(booleano)*

*   **nome**: il nome della `<a href="../fileobj/fileobj.html">File</a>Entry` , escludendo il sentiero che conduce ad esso. *(DOMString)*

*   **fullPath**: il percorso completo assoluto dalla radice per il `<a href="../fileobj/fileobj.html">File</a>Entry` . *(DOMString)*

**Nota:** Il seguente attributo è definito nella specifica W3C, ma *non* è supportato:

*   **filesystem**: il filesystem su cui il `<a href="../fileobj/fileobj.html">File</a>Entry` risiede. *(<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>)*

## Metodi

*   **getMetadata**: cercare i metadati relativi a un file.

*   **setMetadata**: impostare i metadati in un file.

*   **moveTo**: spostare un file in una posizione diversa del file System.

*   **copyTo**: copiare un file in un'altra posizione nel file System.

*   **toURL**: restituire un URL che può essere utilizzato per individuare un file.

*   **rimuovere**: eliminare un file.

*   **getParent**: cercare la directory padre.

*   **createWriter**: crea un `<a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a>` che può essere utilizzato per scrivere in un file.

*   **file**: crea un `<a href="../fileobj/fileobj.html">File</a>` oggetto contenente le proprietà del file.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## getMetadata

Cercare i metadati relativi a un file.

**Parametri:**

*   **successCallback**: un callback passato un `Metadata` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante il recupero del `Metadata` . Invocato con un `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` oggetto. *(Funzione)*

**Esempio rapido**

    funzione success(metadata) {console ("ultima modifica:" + metadata.modificationTime);}
    
    funzione fail(error) {alert(error.code)};
    
    / / Richiesta oggetto dei metadati per questa voce entry.getMetadata (successo, fail);
    

## setMetadata

<a href="../metadata/metadata.html">Metadati</a> impostati su un file.

**Attualmente funziona solo su iOS.**

*   Questo imposterà gli attributi estesi di un file.

**Parametri:**

*   **successCallback**: un callback che viene eseguito quando i metadati sono impostato. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito quando i metadati non sono impostato correttamente. *(Funzione)*

*   **per il metadataObject**: un oggetto che contiene dei metadati chiavi e valori. *(Oggetto)*

**Esempio rapido**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS Quirk**

*   Solo il `com.apple.MobileBackup` attributo esteso è supportato. Impostare il valore `1` per impedire il file di backup a iCloud. Impostare il valore `` per abilitare nuovamente il file di backup a iCloud.

**Esempio rapido**

    function set<a href="../fileobj/fileobj.html">File</a>Metadata(local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>, filePath, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGet<a href="../fileobj/fileobj.html">File</a>Win = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGet<a href="../fileobj/fileobj.html">File</a>Fail = function() {
            console.log("error getting file")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.get<a href="../fileobj/fileobj.html">File</a>(filePath, {create: true, exclusive: false}, onGet<a href="../fileobj/fileobj.html">File</a>Win, onGet<a href="../fileobj/fileobj.html">File</a>Fail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>, 0, onFSWin, onFSFail);
    }
    
        set<a href="../fileobj/fileobj.html">File</a>Metadata(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

Spostare un file in una posizione diversa del file System. Un errore risultati se tenta di app:

*   spostare un file nel suo padre se non è fornito un nome diverso dal suo attuale uno;

*   spostare un file in un percorso occupato da una directory;

Inoltre, lo spostamento di un file in cima a un file esistente tenta di eliminare e sostituire quel file.

**Parametri:**

*   **padre**: directory superiore, per cui spostare il file. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

*   **newName**: il nuovo nome del file. Impostazioni predefinite per il nome attuale, se non specificato. *(DOMString)*

*   **successCallback**: un callback passato il nuovo file `<a href="../fileobj/fileobj.html">File</a>Entry` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di spostare il file. Invocato con un `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` oggetto. *(Funzione)*

**Esempio rapido**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function move<a href="../fileobj/fileobj.html">File</a>(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "new<a href="../fileobj/fileobj.html">File</a>.txt", success, fail);
    }
    

## copyTo

Copiare un file in una nuova posizione nel file System. Un errore risultati se tenta di app:

*   copiare un file in suo padre, se non viene fornito un nome diverso dal suo attuale uno.

**Parametri:**

*   **padre**: la directory genitore in cui copiare il file. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

*   **newName**: il nuovo nome del file. Impostazioni predefinite per il nome attuale, se non specificato. *(DOMString)*

*   **successCallback**: un callback passato il nuovo file `<a href="../fileobj/fileobj.html">File</a>Entry` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di copiare il file. Invocato con un `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` oggetto. *(Funzione)*

**Esempio rapido**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copy<a href="../fileobj/fileobj.html">File</a>(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## toURL

Restituisce un URL che può essere utilizzato per individuare il file.

**Esempio rapido**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## rimuovere

Elimina un file.

**Parametri:**

*   **successCallback**: un callback che viene eseguito dopo che il file è stato eliminato. Richiamato senza parametri. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di eliminare il file. Invocato con un `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` oggetto. *(Funzione)*

**Esempio rapido**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

Cercare il padre `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` che contiene il file.

**Parametri:**

*   **successCallback**: un callback passato padre del file `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` . *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di recuperare il padre `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` . Invocato con un `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` oggetto. *(Funzione)*

**Esempio rapido**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>
    entry.getParent(success, fail);
    

## createWriter

Creare un `<a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a>` oggetto associato al file rappresentato dalla`<a href="../fileobj/fileobj.html">File</a>Entry`.

**Parametri:**

*   **successCallback**: un callback passato un `<a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a>` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante il tentativo di creare il <a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a>. Invocato con un `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` oggetto. *(Funzione)*

**Esempio rapido**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a <a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a> to write to the file
    entry.createWriter(success, fail);
    

## file

Restituire un `<a href="../fileobj/fileobj.html">File</a>` oggetto che rappresenta lo stato corrente del file che questa `<a href="../fileobj/fileobj.html">File</a>Entry` rappresenta.

**Parametri:**

*   **successCallback**: un callback passato un `<a href="../fileobj/fileobj.html">File</a>` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante la creazione del `<a href="../fileobj/fileobj.html">File</a>` oggetto, ad esempio quando il file non esiste più. Invocato con un `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` oggetto. *(Funzione)*

**Esempio rapido**

    function success(file) {
        console.log("<a href="../fileobj/fileobj.html">File</a> size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);