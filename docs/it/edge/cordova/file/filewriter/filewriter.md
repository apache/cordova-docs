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