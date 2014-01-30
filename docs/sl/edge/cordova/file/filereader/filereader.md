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

`FileReader` omogoča osnovni dostop do datoteke.

## Lastnosti

*   **readyState**: eden od bralca na tri mogoče navaja, niti `EMPTY` , `LOADING` ali`DONE`.

*   **rezultat**: vsebino datoteke prebrana. *(DOMString)*

*   **napaka**: objekt, ki vsebuje napake. *(FileError)*

*   **onloadstart**: imenoval ko začne brati. *(Funkcija)*

*   **onload**: pozval čas za branje je uspešno. *(Funkcija)*

*   **OnAbort**: imenoval, ko je bila prekinjena za branje. Na primer, s sklicevanjem na `abort()` način. *(Funkcija)*

*   **NaNapaki**: pokliče, ko ni bilo mogoče prebrati. *(Funkcija)*

*   **onloadend**: imenoval ko zahtevo zaključil (bodisi v uspeh ali neuspeh). *(Funkcija)*

**Opomba**: ne podpira naslednje porperty:

*   **onprogress**: imenovane pri branju datoteke, poročanje o napredku glede na `progress.loaded` / `progress.total` . *(Funkcija)*

## Metode

*   **prekinitev**: prekine branje datoteke.

*   **readAsDataURL**: preberite datoteko in Vrni podatke kot base64 kodirane podatke URL.

*   **readAsText**: bere besedilno datoteko.

*   **readAsBinaryString**: prebere datoteko kot binarna in vrne dvojiški niz.

*   **readAsArrayBuffer**: bere datoteko, kot je`ArrayBuffer`.

## Podrobnosti

Z `FileReader` predmet ponuja način za branje datotek iz naprave datotečni sistem. Datoteke je mogoče brati kot besedilo ali kot niz base64 kodirane podatke. Dogodek poslušalcev prejeli na `loadstart` , `progress` , `load` , `loadend` , `error` , in `abort` dogodkov.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## readAsDataURL

**Parametri**:

*   **Datoteka**: datoteka predmet čitati.

## Quick primer

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

**Parametri**:

*   **Datoteka**: datoteka predmet čitati.

*   **encoding**: encoding rabiti za kodiranje vsebine datoteke. Privzeto je UTF8.

## Quick primer

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
    

## prekinitev

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
    

## Celoten primer

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
    

## iOS Quirks

*   Parameter **kodiranje** ni podprt, in kodiranju UTF8 je vedno v veljavi.

## readAsBinaryString

Trenutno podprti na iOS in Android samo.

**Parametri**:

*   **Datoteka**: datoteka predmet čitati.

## Quick primer

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

Trenutno podprti na iOS in Android samo.

**Parametri**:

*   **Datoteka**: datoteka predmet čitati.

## Quick primer

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