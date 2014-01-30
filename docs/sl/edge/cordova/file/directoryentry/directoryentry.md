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

Ta predmet predstavlja imenik v datotečnem sistemu, kot je opredeljeno v specifikaciji [W3C imenikov in sistemov][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Lastnosti

*   **isFile**: vedno `false` . *(boolean)*

*   **isDirectory**: vedno `true` . *(boolean)*

*   **ime**: ime je `DirectoryEntry` , razen pot, ki vodi nanj. *(DOMString)*

*   **fullPath**: polno absolutna pot od korena do na `DirectoryEntry` . *(DOMString)*

**Opomba**: ta atribut je določen v določilih W3C, vendar je *ne* podpira:

*   **datotečni sistem**: datotečni sistem, na katerem je `DirectoryEntry` prebiva. *(Datotečni sistem)*

## Metode

Naslednje metode lahko prikličete z `DirectoryEntry` predmet:

*   **getMetadata**: iskanje metapodatkov o imeniku.

*   **setMetadata**: Nastavi metapodatkov na imenik.

*   **moveTo**: imenik premakniti na drugo mesto v datotečnem sistemu.

*   **copyTo**: Copy imenik na drugo mesto v datotečnem sistemu.

*   **toURL**: vrnitev URL za iskanje imenik.

*   **odstranite**: izbrisati imenik. Imenik mora biti prazen.

*   **getParent**: Poglej gor starševski imenik.

*   **createReader**: ustvarjanje novega `DirectoryReader` ki lahko preberete vnosi iz imenika.

*   **getDirectory**: ustvarjanje ali Poiščite imenik.

*   **getFile**: ustvarite ali poiščete datoteko.

*   **removeRecursively**: izbrisati mapo in vso njeno vsebino.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## getMetadata

Iskanje metapodatkov o imeniku.

**Parametri**:

*   **successCallback**: povratni klic funkcije vršiti s a `Metadata` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic funkcije vršiti, če pride do napake pri pridobivanju na `Metadata` . Invoked s a `FileError` predmeta. *(Funkcija)*

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

Nastavi podaljšanih atributov imenika ali metapodatkov. *Trenutno deluje samo na iOS.*

**Parametri**:

*   **successCallback**: povratni klic, ki se izvede ko metapodatkov uspešno nastavljena. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede ko metapodatkov ne določi. *(Funkcija)*

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

*   Samo na `com.apple.MobileBackup` podaljšanega atributa je podprta. Nastavite vrednost na `1` imenik preprečiti, da bi se varnostno kopirajo v iCloud. Nastavite vrednost na `` ponovno omogočiti imenik podpreti iCloud.

**Quick primer**

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

Imenik premakniti na drugo mesto v datotečnem sistemu. Napake rezultate če app poskuša:

*   premakniti imenik znotraj samega ali do katerega koli otroka na katerikoli globini.

*   premakniti imenik v svojega nadrejenega, če ne navedete imena, ki se razlikuje od trenutnega imenika.

*   pot, ki zasedajo datoteke premakniti imenik.

*   premakniti imenik pot zasedajo imenika, ki ni prazna.

Selitev imenik na vrhu obstoječ imenik prazen poskuša izbrisati in zamenjati imenik.

**Parametri**:

*   **matična**: nadrejenega imenika v katerega želite premakniti imenik. *(DirectoryEntry)*

*   **novo_ime**: novo ime imenika. Privzete nastavitve za trenutno ime, če ni določen. *(DOMString)*

*   **successCallback**: povratni klic, ki se izvaja z na `DirectoryEntry` predmeta za nov imenik. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu, da premakniti imenik. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

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

Copy imenik na drugo mesto v datotečnem sistemu. Napake rezultate če app poskuša:

*   kopiranje imenika znotraj samega na katerikoli globini.

*   kopirati imenik v svojega nadrejenega, če ne navedete imena, ki se razlikuje od trenutnega imenika.

Imenik kopije so vedno rekurzivni in ulitek vsi vsebina imenika.

**Parametri**:

*   **matična**: nadrejenega imenika v katerega želite kopirati imenik. *(DirectoryEntry)*

*   **novo_ime**: novo ime imenika. Privzete nastavitve za trenutno ime, če ni določen. *(DOMString)*

*   **successCallback**: povratni klic, ki se izvaja z na `DirectoryEntry` predmeta za nov imenik. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake ob poskusu kopiranja v osnovni imenik. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

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

Vrne URL, ki se lahko uporabljajo za iskanje v imeniku.

**Quick primer**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## Odstrani

Izbriše imenik. Napake rezultate če app poskuša:

*   izbrisati naslovnik, ki ni prazna.

*   brisanje korenskega imenika datotečnega sistema.

**Parametri**:

*   **successCallback**: povratni klic, ki se izvede po imeniku se črta. Uveljavlja brez parametrov. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu zbrisati imenik. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing directory: ' + error.code);
    }
    
    // remove this directory
    entry.remove(success, fail);
    

## getParent

Poglej gor matično `DirectoryEntry` vsebuje imenik.

**Parametri**:

*   **successCallback**: povratni klic, ki je podan v imenik staršev `DirectoryEntry` . *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu pridobivanje matičnega `DirectoryEntry` . Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

Ustvari novo DirectoryReader prebrati vnosov v imenik.

**Quick primer**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

Ustvari ali poišče obstoječi imenik. Napake rezultate če app poskuša:

*   ustvarite imenik, čigar neposredni nadrejeni še ne obstaja.

**Parametri**:

*   **pot**: pot do imenika pogledal ali ustvarili. Absolutna pot ali relativna pot iz tega `DirectoryEntry` . *(DOMString)*

*   **možnosti**: možnosti za določitev, ali imenik je treba ustvariti, če ne obstaja. *(Zastave)*

*   **successCallback**: povratni klic, ki se izvaja s a `DirectoryEntry` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake, ko ustvarjate ali pogledala v imenik. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(dirEntry) {
        console.log("Directory Name: " + dirEntry.name);
    }
    
    function fail(error) {
        alert("Unable to create new directory: " + error.code);
    }
    
    // Retrieve an existing directory, or create it if it does not already exist
    entry.getDirectory("newDir", {create: true, exclusive: false}, success, fail);
    

## getFile

Ustvari ali poišče datoteko. Napake rezultate če app poskuša:

*   ustvarite datoteko, čigar neposredni nadrejeni še ne obstaja.

**Parametri**:

*   **pot**: pot do datoteke pogledal ali ustvarili. Absolutna pot ali relativna pot iz tega `DirectoryEntry` . *(DOMString)*

*   **možnosti**: možnosti za določitev, ali je datoteka ustvarjena, če ne obstaja. *(Zastave)*

*   **successCallback**: povratni klic, ki je prešla v `FileEntry` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri ustvarjanju ali iskanje datoteke. Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(fileEntry) {
        console.log("File Name: " + fileEntry.name);
    }
    
    function fail(error) {
        alert("Failed to retrieve file: " + error.code);
    }
    
    // Retrieve an existing file, or create it if it does not exist
    entry.getFile("newFile.txt", {create: true, exclusive: false}, success, fail);
    

## removeRecursively

Izbriše imenik in vso njeno vsebino. V primeru napake (kot je poskušal izbrisati mapo, ki vsebuje datoteko, ki je ni mogoče odstraniti), nekatere vsebine imenika zavržena. Napake rezultate če app poskuša:

*   brisanje korenskega imenika datotečnega sistema.

**Parametri**:

*   **successCallback**: povratni klic, ki se izvaja po na `DirectoryEntry` je bila izbrisana. Uveljavlja brez parametrov. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri poskusu brisanja je `DirectoryEntry` . Invoked s a `FileError` predmeta. *(Funkcija)*

**Quick primer**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## BlackBerry Quirks

Morda ne z a `ControlledAccessException` v naslednjih primerih:

*   App poskusi za dostop do imenika, ki je ustvaril prejšnja namestitev app.

> Rešitev: zagotovitev začasne imenike čistijo ročno ali z uporabo pred reinstallation.

*   Če je naprava z USB.

> Rešitev: prekinite povezavo USB kabel iz naprave in znova zaženite.