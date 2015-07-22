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