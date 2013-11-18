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

# FileEntry

Predstavlja datoteko na sistemu datotek, kot je določen v specifikaciji [W3C imenikov in sistemov][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Lastnosti

*   **isFile**: vedno `true` . *(boolean)*

*   **isDirectory**: vedno `false` . *(boolean)*

*   **ime**: ime je `FileEntry` , razen pot, ki vodi nanj. *(DOMString)*

*   **fullPath**: polno absolutna pot od korena do na `FileEntry` . *(DOMString)*

**Opomba**: ta atribut je določen v določilih W3C, vendar je *ne* podpira:

*   **datotečni sistem**: datotečni sistem, na katerem je `FileEntry` prebiva. *(Datotečni sistem)*

## Metode

*   **getMetadata**: iskanje metapodatkov o datoteki.

*   **setMetadata**: Nastavi metapodatkov v datoteki.

*   **moveTo**: premakniti datoteke na drugo mesto v datotečnem sistemu.

*   **copyTo**: kopirajte datoteko na drugo mesto v datotečnem sistemu.

*   **toURL**: vrnitev URL, ki se lahko uporabljajo za iskanje datoteke.

*   **odstranite**: izbrišite datoteko.

*   **getParent**: Poglej gor starševski imenik.

*   **createWriter**: ustvari z `FileWriter` predmet, ki se lahko uporabljajo za pisanje v datoteko.

*   **datoteke**: ustvari z `File` predmet, ki vsebuje lastnosti datoteke.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## getMetadata

Iskanje metapodatkov o datoteki.

**Parametri**:

*   **successCallback**: povratni klic, ki je prešla v `Metadata` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri pridobivanju na `Metadata` . Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(success, fail);
    

## setMetadata

Set metapodatkov v datoteki.

**Trenutno deluje samo na iOS.**

*   Ta določa podaljšanih atributov datoteke.

**Parametri**:

*   **successCallback**: povratni klic, ki se izvede ko metapodatke nastavljena. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede ko metapodatkov ni uspešno nastavljena. *(Funkcija)*

*   **metadataObject**: predmet, ki vsebuje metapodatkov je ključe in vrednosti. *(Predmet)*

**Quick primer**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS ovinka**

*   Samo na `com.apple.MobileBackup` podaljšanega atributa je podprta. Nastavite vrednost na `1` datoteko preprečiti, da bi se varnostno kopirajo v iCloud. Nastavite vrednost na `` da jo znova omogočite podpreti iCloud.

**Quick primer**

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

Premakniti datoteke na drugo mesto v datotečnem sistemu. Napake rezultate če app poskuša:

*   premakniti datoteko v svojega nadrejenega, če ni ime, ki je drugačen od njenih sedanjega;

*   premakniti datoteko pot zasedajo imenik;

Poleg tega premikanje datotek na vrhu obstoječe datoteke poskuša izbrisati in zamenjati.

**Parametri**:

*   **matična**: nadrejenega imenika v katerega želite premakniti datoteko. *(DirectoryEntry)*

*   **novo_ime**: novo ime datoteke. Privzete nastavitve za trenutno ime, če ni določen. *(DOMString)*

*   **successCallback**: povratni klic, ki je opravil Nova datoteka `FileEntry` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu, da premaknete datoteko. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

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

Kopirati datoteko na novo lokacijo na datotečni sistem. Napake rezultate če app poskuša:

*   kopiranje datoteke v svojega nadrejenega, če ne navedete imena, ki se razlikuje od trenutno ena.

**Parametri**:

*   **matična**: nadrejenega imenika v katerega želite kopirati datoteke. *(DirectoryEntry)*

*   **novo_ime**: novo ime datoteke. Privzete nastavitve za trenutno ime, če ni določen. *(DOMString)*

*   **successCallback**: povratni klic, ki je opravil Nova datoteka `FileEntry` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu kopiranja datoteke. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

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

Vrne URL, ki se lahko uporabljajo za iskanje datoteke.

**Quick primer**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## Odstrani

Izbriše datoteko.

**Parametri**:

*   **successCallback**: povratni klic, ki se izvede po datoteka je bila izbrisana. Uveljavlja brez parametrov. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu zbrisati datoteko. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

Poglej gor matično `DirectoryEntry` ki vsebuje datoteko.

**Parametri**:

*   **successCallback**: povratni klic, ki je podan staršev datoteke `DirectoryEntry` . *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu pridobivanje matičnega `DirectoryEntry` . Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

Ustvarite a `FileWriter` predmet, ki je povezana z datoteko, ki jo zastopa v`FileEntry`.

**Parametri**:

*   **successCallback**: povratni klic, ki je prešla v `FileWriter` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu ustvarjanja na FileWriter. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## datoteke

Vrniti a `File` predmet, ki predstavlja trenutno stanje datoteke, da je to `FileEntry` predstavlja.

**Parametri**:

*   **successCallback**: povratni klic, ki je prešla v `File` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri ustvarjanju na `File` predmetom, ko datoteka ne obstaja več. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);