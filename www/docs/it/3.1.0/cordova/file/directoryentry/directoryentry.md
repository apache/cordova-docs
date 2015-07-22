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

# DirectoryEntry

Questo oggetto rappresenta una directory in un file system, come definita dalla specifica [W3C directory e sistemi][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Proprietà

*   **isFile**: sempre `false` . *(booleano)*

*   **isDirectory**: sempre `true` . *(booleano)*

*   **nome**: il nome della `DirectoryEntry` , escludendo il sentiero che conduce ad esso. *(DOMString)*

*   **fullPath**: il percorso completo assoluto dalla radice per il `DirectoryEntry` . *(DOMString)*

**Nota:** Il seguente attributo è definito nella specifica W3C, ma *non* è supportato:

*   **filesystem**: il filesystem su cui il `DirectoryEntry` risiede. *(FileSystem)*

## Metodi

I seguenti metodi possono essere richiamati su un `DirectoryEntry` oggetto:

*   **getMetadata**: cercare i metadati relativi a una directory.

*   **setMetadata**: Set di metadati su una directory.

*   **moveTo**: spostare una directory in un'altra posizione nel file System.

*   **copyTo**: copiare una directory in un'altra posizione nel file System.

*   **toURL**: restituire un URL per aiutare a individuare una directory.

*   **rimuovere**: eliminare una directory. La directory deve essere vuota.

*   **getParent**: cercare la directory padre.

*   **createReader**: creare un nuovo `DirectoryReader` che può leggere le voci da una directory.

*   **getDirectory**: creare o cercare una directory.

*   **getFile**: creare o cercare un file.

*   **removeRecursively**: Cancella una directory e tutti i suoi contenuti.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## getMetadata

Cercare i metadati relativi a una directory.

**Parametri:**

*   **successCallback**: una funzione di callback da eseguire con un `Metadata` oggetto. *(Funzione)*

*   **errorCallback**: una funzione di callback da eseguire se si verifica un errore durante il recupero del `Metadata` . Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    funzione success(metadata) {console ("ultima modifica:" + metadata.modificationTime);}
    
    funzione fail(error) {alert(error.code)};
    
    / / Richiesta oggetto dei metadati per questa voce entry.getMetadata (successo, fail);
    

## setMetadata

Imposta gli attributi estesi di una directory, o metadati. *Attualmente funziona solo con iOS.*

**Parametri:**

*   **successCallback**: un callback che viene eseguito quando i metadati sono impostato correttamente. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito quando i metadati non riesce a essere impostato. *(Funzione)*

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

*   Solo il `com.apple.MobileBackup` attributo esteso è supportato. Impostare il valore `1` per impedire la directory di backup a iCloud. Impostare il valore `` per abilitare nuovamente la directory di backup a iCloud.

**Esempio rapido**

    function setFolderMetadata(localFileSystem, subFolder, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetDirectoryWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetDirectoryFail = function() {
            console.log("error getting dir")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getDirectory(subFolder, {create: true, exclusive: false}, onGetDirectoryWin, onGetDirectoryFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFolderMetadata(LocalFileSystem.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);
    

## moveTo

Spostare una directory in un'altra posizione nel file System. Un errore risultati se tenta di app:

*   spostare una directory all'interno di se stesso o a qualsiasi bambino a qualsiasi profondità.

*   spostare una directory in suo padre, se non viene fornito un nome diverso dalla directory corrente.

*   spostare una directory in un percorso occupato da un file.

*   spostare una directory in un percorso occupato da una directory non è vuota.

Lo spostamento di una directory in cima a una directory vuota esistente tenta di eliminare e sostituire quella directory.

**Parametri:**

*   **padre**: directory a cui spostare la directory padre. *(DirectoryEntry)*

*   **newName**: il nuovo nome della directory. Impostazioni predefinite per il nome attuale, se non specificato. *(DOMString)*

*   **successCallback**: un callback che viene eseguito con il `DirectoryEntry` oggetto per la nuova directory. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di spostare la directory. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the directory to a new directory and rename it
        entry.moveTo(parentEntry, newName, success, fail);
    }
    

## copyTo

Copiare una directory in un'altra posizione nel file System. Un errore risultati se tenta di app:

*   copiare una directory all'interno della stessa a qualsiasi profondità.

*   copiare una directory in suo padre, se non viene fornito un nome diverso dalla directory corrente.

Directory copie sono sempre ricorsivi e copiare tutto il contenuto della directory.

**Parametri:**

*   **padre**: directory in cui copiare la directory padre. *(DirectoryEntry)*

*   **newName**: il nuovo nome della directory. Impostazioni predefinite per il nome attuale, se non specificato. *(DOMString)*

*   **successCallback**: un callback che viene eseguito con il `DirectoryEntry` oggetto per la nuova directory. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di copiare la directory sottostante. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the directory to a new directory and rename it
        entry.copyTo(parentEntry, newName, success, fail);
    }
    

## toURL

Restituisce un URL che può essere utilizzato per individuare la directory.

**Esempio rapido**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## rimuovere

Elimina una directory. Un errore risultati se tenta di app:

*   eliminare una directory non è vuota.

*   eliminare la directory radice di un filesystem.

**Parametri:**

*   **successCallback**: un callback che viene eseguito dopo che la directory viene eliminata. Richiamato senza parametri. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di eliminare la directory. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    funzione success(entry) {console ("riuscita rimozione");}
    
    funzione fail(error) {alert (' errore rimozione directory: ' + Error);}
    
    / / Rimuovi questa directory entry.remove (successo, fail);
    

## getParent

Cercare il padre `DirectoryEntry` contenente la directory.

**Parametri:**

*   **successCallback**: un callback passato padre della directory `DirectoryEntry` . *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di recuperare il padre `DirectoryEntry` . Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

Crea un nuovo DirectoryReader per leggere le voci in una directory.

**Esempio rapido**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

Crea o cerca una directory esistente. Un errore risultati se tenta di app:

*   creare una directory in cui padre immediato non esiste ancora.

**Parametri:**

*   **percorso**: il percorso della directory di essere cercati o creato. Un percorso assoluto o un percorso relativo da questo `DirectoryEntry` . *(DOMString)*

*   **opzioni**: opzioni per specificare se la directory deve essere creata se non esiste. *(Bandiere)*

*   **successCallback**: un callback che viene eseguito con un `DirectoryEntry` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante la creazione o ricerca di directory. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    funzione success(dirEntry) {console ("nome Directory:" + dirEntry.name);}
    
    funzione fail(error) {alert ("Impossibile creare la nuova directory:" + Error);}
    
    / / Recuperare una directory esistente, o crearla se non esiste già entry.getDirectory ("newDir", {creare: vero, esclusivo: false}, successo, fail);
    

## getFile

Crea o cerca un file. Un errore risultati se tenta di app:

*   creare un file di cui padre immediato non esiste ancora.

**Parametri:**

*   **percorso**: il percorso del file per essere guardato o creato. Un percorso assoluto o un percorso relativo da questo `DirectoryEntry` . *(DOMString)*

*   **opzioni**: opzioni per specificare se il file viene creato se non esiste. *(Bandiere)*

*   **successCallback**: un callback passato un `FileEntry` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante la creazione o la ricerca di file. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    funzione success(fileEntry) {console ("Nome File:" + fileEntry.name);}
    
    funzione fail(error) {alert ("Impossibile recuperare il file:" + Error);}
    
    / / Recuperare un file esistente, o crearla se non esiste entry.getFile ("NewFile", {creare: vero, esclusivo: false}, successo, fail);
    

## removeRecursively

Elimina una directory e tutti i suoi contenuti. In caso di errore (ad esempio cercando di eliminare una directory contenente un file che non può essere rimosso), parte del contenuto della directory possono essere eliminati. Un errore risultati se tenta di app:

*   eliminare la directory radice di un filesystem.

**Parametri:**

*   **successCallback**: un callback che viene eseguito dopo il `DirectoryEntry` è stato eliminato. Richiamato senza parametri. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di eliminare il `DirectoryEntry` . Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## Stranezze di blackBerry

Potrebbe non riuscire con un `ControlledAccessException` nei seguenti casi:

*   Un'applicazione tenta di accedere a una directory creata da una precedente installazione di app.

> Soluzione: verificare le directory temporanee vengono pulite manualmente o mediante l'applicazione prima della reinstallazione.

*   Se la periferica è collegata tramite USB.

> Soluzione: scollegare il cavo USB dal dispositivo ed eseguire nuovamente.