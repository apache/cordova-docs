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

Kot predmet, ki vam omogoča, da ustvarite in zapisovanje podatkov v datoteko.

## Lastnosti

*   **readyState**: ena od treh možnih stanj, bodisi `INIT` , `WRITING` , ali`DONE`.

*   **ime datoteke**: ime datoteke za pisanje. *(DOMString)*

*   **dolžina**: dolžina datoteke za pisanje. *(dolgo)*

*   **položaj**: trenutni položaj datotečnega kazalca. *(dolgo)*

*   **napaka**: objekt, ki vsebuje napake. *(FileError)*

*   **onwritestart**: pozval ob zagonu napisati. *(Funkcija)*

*   **onwrite**: imenoval ko zahtevo je uspešno. *(Funkcija)*

*   **OnAbort**: poklical, ko je pisanje je bila prekinjena. Na primer s klicanjem metode abort(). *(Funkcija)*

*   **NaNapaki**: poklical, ko je pisanje ni uspela. *(Funkcija)*

*   **onwriteend**: imenoval ko zahtevo zaključil (bodisi v uspeh ali neuspeh). *(Funkcija)*

Te lastnosti *ni* podprto:

*   **onprogress**: imenovane pri zapisovanju datoteke, poročanje o napredku glede na `progress.loaded` / `progress.total` . *(Funkcija)*

## Metode

*   **prekinitev**: prekine pisanje datoteke.

*   **iščejo**: premakne datotečnega kazalca določen bajt.

*   **Prireži**: skrajša datoteko na določeno dolžino.

*   **napisati**: piše podatke v datoteko.

## Podrobnosti

Z `FileWriter` predmet ponuja način za pisanje UTF-8 kodirane datoteke načrt datotečni sistem. Aplikacije, ki se odzivajo na `writestart` , `progress` , `write` , `writeend` , `error` , in `abort` dogodkov.

Vsak `FileWriter` ustreza eni datoteki, ki podatke mogoče zapisati večkrat. Na `FileWriter` trdi, da je datoteka `position` in `length` lastnosti, ki omogočajo app za `seek` in `write` kjerkoli v datoteki. Privzeto je `FileWriter` piše na začetek datoteke, prepisovanja obstoječih podatkov. Set je neobvezno `append` logično, da `true` v na `FileWriter` 's konstruktor za pisanje na konec datoteke.

Besedilni podatki podpirajo vse platforme, ki so navedeni spodaj. Besedilo je kodirano kot UTF-8 pred napisane v datotečni sistem. Nekatere platforme podpira tudi binarnih podatkov, ki se lahko prenesejo v kot na ArrayBuffer ali nič.

## Podprte platforme

Besedilom in binarno podpora:

*   Android
*   iOS

Samo besedilo podporo:

*   BlackBerry WebWorks 5.0 +
*   Windows Phone 7 in 8
*   Windows 8

## Iščejo hiter primer

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Prireži hiter primer

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Napisati hiter primer

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
    

## Binary napisati hiter primer

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
    

## Quick primer za dodajanje

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
    

## Prekiniti hitro primer

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
    

## Celoten primer

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