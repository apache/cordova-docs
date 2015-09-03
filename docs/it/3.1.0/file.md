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


# File

> Un'API per leggere, scrivere e navigare gerarchie file di sistema, basati sul [w3c file api][1].

 [1]: http://www.w3.org/TR/FileAPI

## Oggetti

*   DirectoryEntry
*   DirectoryReader
*   File
*   FileEntry
*   FileError
*   FileReader
*   FileSystem
*   FileTransfer
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   Bandiere
*   LocalFileSystem
*   Metadati

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Per utilizzare il plugin di trasferimento file è necessario aggiungere che separatamente.

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="FileTransfer">
            <param name="blackberry-package" value="org.apache.cordova.http.FileTransfer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   iOS (in`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


# File

Questo oggetto contiene gli attributi di un singolo file.

## Proprietà

*   **nome**: il nome del file. *(DOMString)*

*   **fullPath**: il percorso completo del file compreso il nome del file. *(DOMString)*

*   **tipo**: il tipo mime del file. *(DOMString)*

*   **lastModifiedDate**: l'ultima volta che il file è stato modificato. *(Data)*

*   **dimensioni**: le dimensioni del file in byte. *(lungo)*

## Metodi

*   **fetta**: selezionare solo una porzione del file da leggere.

## Dettagli

Il `File` oggetto contiene gli attributi di un singolo file. È possibile ottenere un'istanza di un `File` oggetto chiamando un `FileEntry` dell'oggetto `file()` metodo.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## fetta

Restituire un nuovo `File` oggetto, per cui `FileReader` restituisce solo la parte specificata del file. Negativi i valori per `start` o `end` sono misurati dalla fine del file. Gli indici sono posizionati rispetto alla sezione corrente. (Vedere l'esempio completo sotto.)

**Parametri:**

*   **iniziare**: l'indice del primo byte da leggere, inclusiva.

*   **conclusione**: l'indice del byte dopo l'ultima lettura.

**Esempio rapido**

    var slicedFile = file.slice(10, 30);
    

**Esempio completo**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Piattaforme supportate**

*   Android
*   iOS


# FileReader

Il `FileReader` permette l'accesso a un file di base.

## Proprietà

*   **readyState**: uno del lettore di tre possibili stati, o `EMPTY` , `LOADING` o`DONE`.

*   **risultato**: il contenuto del file che è stati letti. *(DOMString)*

*   **errore**: oggetto contenente errori. *(FileError)*

*   **onloadstart**: chiamato quando inizia la lettura. *(Funzione)*

*   **OnLoad**: chiamato quando ha completato con successo la lettura. *(Funzione)*

*   **OnAbort**: chiamato quando la lettura è stata interrotta. Per esempio, richiamando il `abort()` metodo. *(Funzione)*

*   **OnError**: chiamato quando la lettura non è riuscita. *(Funzione)*

*   **onloadend**: chiamato quando la richiesta è stata completata (sia nel successo o fallimento). *(Funzione)*

**Nota:** Non è supportato il seguente nel Real Estate:

*   **OnProgress**: chiamato durante la lettura del file, relazioni sull'avanzamento in termini di `progress.loaded` / `progress.total` . *(Funzione)*

## Metodi

*   **Abort**: interrompe la lettura del file.

*   **readAsDataURL**: leggere file e restituiscono i dati come URL dati con codifica base64.

*   **readAsText**: file di testo di legge.

*   **readAsBinaryString**: legge file binario e restituisce una stringa binaria.

*   **readAsArrayBuffer**: letture del file come un`ArrayBuffer`.

## Dettagli

Il `FileReader` oggetto offre un modo per leggere i file dal sistema di file del dispositivo. I file possono essere letti come testo o come una stringa di dati con codifica base64. Listener di eventi ricevono il `loadstart` , `progress` , `load` , `loadend` , `error` , e `abort` eventi.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## readAsDataURL

**Parametri:**

*   **file**: il file oggetto per leggere.

## Esempio rapido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**Parametri:**

*   **file**: il file oggetto per leggere.

*   **codifica**: la codifica da utilizzare per codificare il contenuto del file. Predefinito è UTF8.

## Esempio rapido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## Abort

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS stranezze

*   Il parametro di **codifica** non è supportato, e codifica UTF8 è sempre attivo.

## readAsBinaryString

Attualmente supportato solo su iOS e Android.

**Parametri:**

*   **file**: il file oggetto per leggere.

## Esempio rapido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

Attualmente supportato solo su iOS e Android.

**Parametri:**

*   **file**: il file oggetto per leggere.

## Esempio rapido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);


# FileWriter

Come oggetto che permette di creare e scrivere dati in un file.

## Proprietà

*   **readyState**: uno dei tre possibili stati, o `INIT` , `WRITING` , o`DONE`.

*   **nome file**: il nome del file da scrivere. *(DOMString)*

*   **lunghezza**: la lunghezza del file da scrivere. *(lungo)*

*   **posizione**: la posizione corrente del puntatore del file. *(lungo)*

*   **errore**: oggetto contenente errori. *(FileError)*

*   **onwritestart**: chiamato quando inizia la scrittura. *(Funzione)*

*   **OnWrite**: chiamato quando la richiesta è stata completata. *(Funzione)*

*   **OnAbort**: chiamato quando la scrittura è stata interrotta. Per esempio, richiamando il metodo di neutralizzare. *(Funzione)*

*   **OnError**: chiamato quando la scrittura non è riuscita. *(Funzione)*

*   **onwriteend**: chiamato quando la richiesta è stata completata (sia nel successo o fallimento). *(Funzione)*

La seguente proprietà *non* è supportata:

*   **OnProgress**: chiamato durante la scrittura del file, relazioni sull'avanzamento in termini di `progress.loaded` / `progress.total` . *(Funzione)*

## Metodi

*   **Abort**: interrompe la scrittura del file.

*   **cercare**: sposta il puntatore del file in byte specificato.

*   **troncare**: accorcia il file alla lunghezza specificata.

*   **scrivere**: scrive i dati nel file.

## Dettagli

Il `FileWriter` oggetto offre un modo per scrivere i file con codificata UTF-8 per il file system del dispositivo. Applicazioni rispondono a `writestart` , `progress` , `write` , `writeend` , `error` , e `abort` eventi.

Ogni `FileWriter` corrisponde a un singolo file, per cui dati possono essere scritto molte volte. Il `FileWriter` mantiene il file `position` e `length` attributi di consentono l'applicazione di `seek` e `write` ovunque nel file. Per impostazione predefinita, il `FileWriter` scrive all'inizio del file, sovrascrivendo i dati esistenti. Impostare l'opzionale `append` booleano per `true` nel `FileWriter` di costruttore di scrivere alla fine del file.

Dati di testo sono supportati da tutte le piattaforme elencate di seguito. Testo è codificato come UTF-8 prima di essere scritto al filesystem. Alcune piattaforme supportano anche dati binari, che possono essere passati come un ArrayBuffer o un Blob.

## Piattaforme supportate

Testo e supporto binario:

*   Android
*   iOS

Supporto di solo testo:

*   BlackBerry WebWorks (OS 5.0 e superiori)
*   Windows Phone 7 e 8
*   Windows 8

## Cercare rapido esempio

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Troncare rapido esempio

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Scrivere rapido esempio

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Binario scrivere rapido esempio

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Rapido esempio Append

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Abortire rapido esempio

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>


# FileSystem

Questo oggetto rappresenta un file system.

## Proprietà

*   **nome**: il nome del file system. *(DOMString)*

*   **radice**: la directory radice del file system. *(DirectoryEntry)*

## Dettagli

Il `FileSystem` oggetto rappresenta le informazioni relative al file system. Il nome del file system è univoco tra l'elenco dei sistemi di file esposti. La proprietà della radice contiene un `DirectoryEntry` oggetto che rappresenta la directory radice del file system.

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
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
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
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>


# FileEntry

Rappresenta un file su un file system, come definito nella specifica [W3C directory e sistemi][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Proprietà

*   **isFile**: sempre `true` . *(booleano)*

*   **isDirectory**: sempre `false` . *(booleano)*

*   **nome**: il nome della `FileEntry` , escludendo il sentiero che conduce ad esso. *(DOMString)*

*   **fullPath**: il percorso completo assoluto dalla radice per il `FileEntry` . *(DOMString)*

**Nota:** Il seguente attributo è definito nella specifica W3C, ma *non* è supportato:

*   **filesystem**: il filesystem su cui il `FileEntry` risiede. *(FileSystem)*

## Metodi

*   **getMetadata**: cercare i metadati relativi a un file.

*   **setMetadata**: impostare i metadati in un file.

*   **moveTo**: spostare un file in una posizione diversa del file System.

*   **copyTo**: copiare un file in un'altra posizione nel file System.

*   **toURL**: restituire un URL che può essere utilizzato per individuare un file.

*   **rimuovere**: eliminare un file.

*   **getParent**: cercare la directory padre.

*   **createWriter**: crea un `FileWriter` che può essere utilizzato per scrivere in un file.

*   **file**: crea un `File` oggetto contenente le proprietà del file.

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

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante il recupero del `Metadata` . Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    funzione success(metadata) {console ("ultima modifica:" + metadata.modificationTime);}
    
    funzione fail(error) {alert(error.code)};
    
    / / Richiesta oggetto dei metadati per questa voce entry.getMetadata (successo, fail);
    

## setMetadata

Metadati impostati su un file.

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

    function setFileMetadata(localFileSystem, filePath, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetFileWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetFileFail = function() {
            console.log("error getting file")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getFile(filePath, {create: true, exclusive: false}, onGetFileWin, onGetFileFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(LocalFileSystem.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

Spostare un file in una posizione diversa del file System. Un errore risultati se tenta di app:

*   spostare un file nel suo padre se non è fornito un nome diverso dal suo attuale uno;

*   spostare un file in un percorso occupato da una directory;

Inoltre, lo spostamento di un file in cima a un file esistente tenta di eliminare e sostituire quel file.

**Parametri:**

*   **padre**: directory superiore, per cui spostare il file. *(DirectoryEntry)*

*   **newName**: il nuovo nome del file. Impostazioni predefinite per il nome attuale, se non specificato. *(DOMString)*

*   **successCallback**: un callback passato il nuovo file `FileEntry` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di spostare il file. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

Copiare un file in una nuova posizione nel file System. Un errore risultati se tenta di app:

*   copiare un file in suo padre, se non viene fornito un nome diverso dal suo attuale uno.

**Parametri:**

*   **padre**: la directory genitore in cui copiare il file. *(DirectoryEntry)*

*   **newName**: il nuovo nome del file. Impostazioni predefinite per il nome attuale, se non specificato. *(DOMString)*

*   **successCallback**: un callback passato il nuovo file `FileEntry` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di copiare il file. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
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

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di eliminare il file. Invocato con un `FileError` oggetto. *(Funzione)*

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

Cercare il padre `DirectoryEntry` che contiene il file.

**Parametri:**

*   **successCallback**: un callback passato padre del file `DirectoryEntry` . *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore quando si tenta di recuperare il padre `DirectoryEntry` . Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

Creare un `FileWriter` oggetto associato al file rappresentato dalla`FileEntry`.

**Parametri:**

*   **successCallback**: un callback passato un `FileWriter` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante il tentativo di creare il FileWriter. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## file

Restituire un `File` oggetto che rappresenta lo stato corrente del file che questa `FileEntry` rappresenta.

**Parametri:**

*   **successCallback**: un callback passato un `File` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante la creazione del `File` oggetto, ad esempio quando il file non esiste più. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);


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


# DirectoryReader

Un oggetto che elenca i file e le directory all'interno di una directory, come definito nella specifica [W3C directory e sistemi][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Metodi

*   **readEntries**: leggere le voci in una directory.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## readEntries

Leggere le voci in questa directory.

**Parametri:**

*   **successCallback**: un callback che viene passato un array di `FileEntry` e `DirectoryEntry` oggetti. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante il recupero dell'elenco di directory. Invocato con un `FileError` oggetto. *(Funzione)*

**Esempio rapido**

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


# FileTransfer

Il `FileTransfer` oggetto consente di caricare o scaricare file da e verso un server.

## Proprietà

*   **OnProgress**: chiamata con un `ProgressEvent` ogni volta che un nuovo blocco di dati viene trasferito. *(Funzione)*

## Metodi

*   **caricare**: invia un file a un server.

*   **Scarica**: Scarica un file dal server.

*   **Abort**: interrompe un trasferimento in corso.

## Dettagli

Il `FileTransfer` oggetto fornisce un modo per caricare i file su un server remoto utilizzando una richiesta HTTP di POST multiparte. Sono supportati i protocolli HTTP e HTTPS. Parametri facoltativi possono essere specificati passando un `FileUploadOptions` oggetto per il `upload()` metodo. Su carica di successo, un `FileUploadResult` oggetto viene passato al metodo di callback successo. Se si verifica un errore, un `FileTransferError` oggetto viene passato al metodo di callback errore. È anche possibile (solo su iOS e Android) per scaricare un file da un server remoto e salvarli sul dispositivo.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## caricare

**Parametri:**

*   **filePath**: percorso completo del file sul dispositivo.

*   **server**: URL del server per ricevere il file, come codificato dal`encodeURI()`.

*   **successCallback**: un callback passato un `Metadata` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore recuperando il `Metadata` . Invocato con un `FileTransferError` oggetto. *(Funzione)*

*   **opzioni**: parametri opzionali come nome file e il tipo MIME.

*   **trustAllHosts**: parametro opzionale, valore predefinito è `false` . Se impostata su `true` , accetta tutti i certificati di sicurezza. Questo è utile poiché Android respinge i certificati autofirmati sicurezza. Non raccomandato per uso in produzione. Supportato su Android e iOS. *(boolean)*

**Esempio rapido**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**Esempio completo**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**Impostazione Upload intestazioni**

Supportato su Android e iOS

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Stranezze Android**

Impostare il `chunkedMode` opzione per `false` per evitare problemi di caricamento su un server Nginx.

## Scarica

**Parametri:**

*   **fonte**: URL del server per scaricare il file, come codificato dal`encodeURI()`.

*   **destinazione**: percorso completo del file sul dispositivo.

*   **successCallback**: un callback passato un `FileEntry` oggetto. *(Funzione)*

*   **errorCallback**: un callback che viene eseguito se si verifica un errore durante il recupero del `Metadata` . Invocato con un `FileTransferError` oggetto. *(Funzione)*

*   **trustAllHosts**: parametro opzionale, valore predefinito è `false` . Se impostato su `true` poi accetterà tutti i certificati di sicurezza. Questo è utile come Android respinge certificati auto sicurezza firmato. Non raccomandato per uso in produzione. Supportato su Android e iOS. *(boolean)*

*   **opzioni**: parametri facoltativi, attualmente solo supporti intestazioni (ad esempio autorizzazione (autenticazione di base), ecc.).

**Esempio rapido**

    // !! Presuppone filePath è un percorso valido sul dispositivo var fileTransfer = nuovo FileTransfer();
    var uri = encodeURI ("http://some.server.com/download.php");
    
    fileTransfer.download (uri, filePath, function(entry) {console ("download completo:" + entry.fullPath);
        }, function(error) {console ("fonte di errore di download" + Error);
            console ("download errore obiettivo" + error.target);
            console ("codice di errore di caricamento" + Error);
        }, false, {intestazioni: {"Autorizzazione": "dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA base = ="}});
    

## Abort

Interrompe un trasferimento in corso. Il callback onerror viene passato un oggetto FileTransferError che presenta un codice di errore di FileTransferError.ABORT_ERR.

**Piattaforme supportate**

*   Android
*   iOS

**Esempio rapido**

    // !! Assume la variabile fileURI contiene un URI valido per un file di testo su win dispositivo var = function(r) {console ("non deve essere chiamato.");}
    
    fallire var = function(error) {/ / Error = = FileTransferError.ABORT_ERR alert ("errore: codice =" + Error);
        console ("fonte di errore caricamento" + Error);
        console ("upload errore obiettivo" + error.target);}
    
    var opzioni = nuovo FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    var ft = FileTransfer() nuovo;
    ft.upload (fileURI, encodeURI ("http://some.server.com/upload.php"), vittoria, fail, opzioni);
    ft.Abort();
    

## OnProgress

Chiamato con un ProgressEvent ogni volta che un nuovo blocco di dati viene trasferito.

**Piattaforme supportate**

*   Android
*   iOS

**Esempio**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Stranezze** - su entrambi Android un iOS, lengthComputable è `false` per i download che utilizzano la codifica gzip.


# FileUploadOptions

A `FileUploadOptions` oggetto può essere passato per il `FileTransfer` dell'oggetto `upload()` metodo per specificare ulteriori parametri per lo script di upload.

## Proprietà

*   **fileKey**: il nome dell'elemento form. Valore predefinito è `file` . (DOMString)

*   **nome file**: il nome del file da utilizzare quando si salva il file sul server. Valore predefinito è `image.jpg` . (DOMString)

*   **mimeType**: il tipo mime dei dati da caricare. Valore predefinito è `image/jpeg` . (DOMString)

*   **params**: un insieme di coppie chiave/valore opzionale per passare nella richiesta HTTP. (Oggetto)

*   **chunkedMode**: se a caricare i dati in modalità streaming chunked. Valore predefinito è `true` . (Boolean)

*   **intestazioni**: mappa di valori nome/intestazione intestazione. Utilizzare una matrice per specificare più valori. (Oggetto)

## Descrizione

A `FileUploadOptions` oggetto può essere passato per il `FileTransfer` dell'oggetto `upload()` metodo per specificare ulteriori parametri per lo script di upload.

## WP7 Quirk

*   **chunkedMode:**: ignorato su WP7.


# FileUploadResult

A `FileUploadResult` oggetto viene passato al metodo di callback di successo il `FileTransfer` dell'oggetto `upload()` metodo.

## Proprietà

*   **bytesSent**: il numero di byte inviati al server come parte dell'upload. (lungo)

*   **responseCode**: codice di risposta HTTP restituito dal server. (lungo)

*   **risposta**: risposta HTTP restituito dal server. (DOMString)

## Descrizione

Il `FileUploadResult` viene restituito l'oggetto tramite il callback di successo del `FileTransfer` dell'oggetto `upload()` metodo.

## iOS stranezze

*   Non supporta `responseCode` o`bytesSent`.


# Bandiere

Fornisce argomenti per la `DirectoryEntry` dell'oggetto `getFile()` e `getDirectory()` metodi, che cercare o creano file e directory, rispettivamente.

## Proprietà

*   **creare**: indica che il file o la directory dovrebbe essere creata se non esiste già. *(booleano)*

*   **esclusivo**: ha non ha alcun effetto di per sé, ma quando viene utilizzato con `create` provoca la creazione di file o directory a fallire se il percorso di destinazione esiste già. *(booleano)*

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    / / Ottenere la directory di dati, creandola se non esiste.
    dataDir = fileSystem.root.getDirectory ("dati", {creare: true});
    
    / / Creare il file di blocco, se e solo se esso non esiste.
    lockFile = dataDir.getFile ("lockfile.txt", {creare: vero, esclusivo: true});


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


# Metadati

Un'interfaccia che fornisce informazioni sullo stato di un file o una directory.

## Proprietà

*   **modificationTime**: il tempo quando il file o la directory è stata modificata. *(Data)*

## Dettagli

Il `Metadata` oggetto rappresenta informazioni sullo stato di un file o una directory. Chiamare un `DirectoryEntry` o `FileEntry` dell'oggetto `getMetadata()` metodo si traduce in un `Metadata` istanza.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);


# FileError

A `FileError` oggetto viene impostato quando si verifica un errore in uno qualsiasi dei metodi File API.

## Proprietà

*   **codice**: uno dei codici di errore predefiniti elencati di seguito.

## Costanti

*   `FileError.NOT_FOUND_ERR`
*   `FileError.SECURITY_ERR`
*   `FileError.ABORT_ERR`
*   `FileError.NOT_READABLE_ERR`
*   `FileError.ENCODING_ERR`
*   `FileError.NO_MODIFICATION_ALLOWED_ERR`
*   `FileError.INVALID_STATE_ERR`
*   `FileError.SYNTAX_ERR`
*   `FileError.INVALID_MODIFICATION_ERR`
*   `FileError.QUOTA_EXCEEDED_ERR`
*   `FileError.TYPE_MISMATCH_ERR`
*   `FileError.PATH_EXISTS_ERR`

## Descrizione

Il `FileError` oggetto è l'unico parametro fornito a qualsiasi callback di errore il File API. Per determinare il tipo di errore, confrontare le `code` proprietà a nessuna delle liste qui sopra.


# FileTransferError

A `FileTransferError` oggetto viene passato a un callback di errore quando si verifica un errore.

## Proprietà

*   **codice**: uno dei codici di errore predefiniti elencati di seguito. (Numero)

*   **fonte**: URI all'origine. (String)

*   **destinazione**: URI di destinazione. (String)

*   **http_status**: codice di stato HTTP. Questo attributo è disponibile solo quando viene ricevuto un codice di risposta della connessione HTTP. (Numero)

## Costanti

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Descrizione

Il `FileTransferError` oggetto viene passato al metodo di callback errore quando si verifica un errore quando caricare o scaricare un file.
