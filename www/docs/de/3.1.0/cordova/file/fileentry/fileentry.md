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

# FileEntries

Eine <a href="../fileobj/fileobj.html">Datei</a> in einem <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a> darstellt, wie in der [W3C-Verzeichnisse und Systeme][1] -Spezifikation definiert.

 [1]: http://www.w3.org/TR/file-system-api/

## Eigenschaften

*   **IsFile**: immer `true` . *(boolesch)*

*   **IsDirectory**: immer `false` . *(boolesch)*

*   **Name**: der Name der `FileEntry` , ohne den Pfad zu es führen. *(DOM-String und enthält)*

*   **FullPath**: der vollständige absolute Pfad von der Wurzel an der `FileEntry` . *(DOM-String und enthält)*

**Hinweis:** Das folgende Attribut wird durch die W3C-Spezifikation definiert, aber wird *nicht* unterstützt:

*   **<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a>**: das <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a>, auf dem der `FileEntry` befindet. *(FileSystem)*

## Methoden

*   **GetMetadata**: Nachschlagen <a href="../metadata/metadata.html">Metadaten</a> über eine <a href="../fileobj/fileobj.html">Datei</a>.

*   **SetMetadata**: <a href="../metadata/metadata.html">Metadaten</a> für eine <a href="../fileobj/fileobj.html">Datei</a> festlegen.

*   **MoveTo**: Verschieben einer <a href="../fileobj/fileobj.html">Datei</a> an einen anderen <a href="../../storage/storage.html">Speicher</a>ort im <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a>.

*   **CopyTo**: Kopieren Sie eine <a href="../fileobj/fileobj.html">Datei</a> an einen anderen <a href="../../storage/storage.html">Speicher</a>ort im <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a>.

*   **Besuch**: Rückkehr einen URL, die verwendet werden kann, um eine <a href="../fileobj/fileobj.html">Datei</a> zu suchen.

*   **Entfernen**: Löschen einer <a href="../fileobj/fileobj.html">Datei</a>.

*   **GetParent**: das übergeordnete Verzeichnis nachschlagen.

*   **CreateWriter**: erstellt ein `<a href="../filewriter/filewriter.html">FileWriter</a>` -Objekt, das verwendet werden kann, um in eine <a href="../fileobj/fileobj.html">Datei</a> schreiben.

*   **<a href="../fileobj/fileobj.html">Datei</a>**: erstellt ein `File` -Objekt, <a href="../fileobj/fileobj.html">Datei</a>eigenschaften.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## getMetadata

Suchen Sie <a href="../metadata/metadata.html">Metadaten</a> zu einer <a href="../fileobj/fileobj.html">Datei</a>.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `Metadata` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Abrufen der `Metadata` . Aufgerufene mit einem `<a href="../fileerror/fileerror.html">FileError</a>` Objekt. *(Funktion)*

**Kleines Beispiel**

    Function success(metadata) {console.log ("Datum der letzten Änderung:" + metadata.modificationTime);}
    
    Function fail(error) {alert(error.code);}
    
    / / Anfrage das <a href="../metadata/metadata.html">Metadaten</a>objekt für diesen Eintrag entry.getMetadata (Erfolg, Fehler);
    

## setMetadata

<a href="../metadata/metadata.html">Metadaten</a> in einer <a href="../fileobj/fileobj.html">Datei</a>.

**Derzeit funktioniert nur auf iOS.**

*   Dadurch wird die erweiterten Attribute einer <a href="../fileobj/fileobj.html">Datei</a> festgelegt.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der ausgeführt wird, wenn die <a href="../metadata/metadata.html">Metadaten</a> festgelegt ist. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn die <a href="../metadata/metadata.html">Metadaten</a> nicht erfolgreich festgelegt ist. *(Funktion)*

*   **MetadataObject**: ein Objekt, das der <a href="../metadata/metadata.html">Metadaten</a> Schlüssel und Werte enthält. *(Objekt)*

**Kleines Beispiel**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS Quirk**

*   Nur die `com.apple.MobileBackup` erweitertes Attribut wird unterstützt. Legen Sie den Wert auf `1` zu verhindern, dass die <a href="../fileobj/fileobj.html">Datei</a> auf iCloud gesichert wird. Legen Sie den Wert auf `` , die <a href="../fileobj/fileobj.html">Datei</a> zu iCloud gesichert werden wieder zu aktivieren.

**Kleines Beispiel**

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
    
        window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

Verschieben Sie eine <a href="../fileobj/fileobj.html">Datei</a> an einen anderen <a href="../../storage/storage.html">Speicher</a>ort im <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a>. Ein Fehler auftritt, wenn die app versucht:

*   Verschieben einer <a href="../fileobj/fileobj.html">Datei</a> in seinem übergeordneten Element, sofern ein anderen von seinen aktuellen Namen ist nicht;

*   Verschieben einer <a href="../fileobj/fileobj.html">Datei</a> auf einen Pfad, der von einem Verzeichnis besetzt;

Darüber hinaus versucht das Verschieben einer <a href="../fileobj/fileobj.html">Datei</a> auf eine vorhandene <a href="../fileobj/fileobj.html">Datei</a> löschen und die <a href="../fileobj/fileobj.html">Datei</a> zu ersetzen.

**Parameter:**

*   **Eltern**: das übergeordnete Verzeichnis, in das die <a href="../fileobj/fileobj.html">Datei</a> verschoben. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

*   **NewName**: der neue Name der <a href="../fileobj/fileobj.html">Datei</a>. Der Standardwert ist der aktuelle Name, wenn kein Wert angegeben. *(DOM-String und enthält)*

*   **SuccessCallback**: ein Rückruf, der übergeben wird, der neuen <a href="../fileobj/fileobj.html">Datei</a> `FileEntry` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, die <a href="../fileobj/fileobj.html">Datei</a> zu verschieben. Aufgerufene mit einem `<a href="../fileerror/fileerror.html">FileError</a>` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

Kopieren Sie eine <a href="../fileobj/fileobj.html">Datei</a> an einen neuen <a href="../../storage/storage.html">Speicher</a>ort im <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">Datei</a>system</a>. Ein Fehler auftritt, wenn die app versucht:

*   Kopieren Sie eine <a href="../fileobj/fileobj.html">Datei</a> in übergeordneten, wenn ein anderen von seinen aktuellen Namen nicht angegeben ist.

**Parameter:**

*   **Eltern**: das übergeordnete Verzeichnis, in das die <a href="../fileobj/fileobj.html">Datei</a> kopiert. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

*   **NewName**: der neue Name der <a href="../fileobj/fileobj.html">Datei</a>. Der Standardwert ist der aktuelle Name, wenn kein Wert angegeben. *(DOM-String und enthält)*

*   **SuccessCallback**: ein Rückruf, der übergeben wird, der neuen <a href="../fileobj/fileobj.html">Datei</a> `FileEntry` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Versuch, die <a href="../fileobj/fileobj.html">Datei</a> zu kopieren. Aufgerufene mit einem `<a href="../fileerror/fileerror.html">FileError</a>` Objekt. *(Funktion)*

**Kleines Beispiel**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## Besuch

Gibt einen URL, die verwendet werden kann, um die <a href="../fileobj/fileobj.html">Datei</a> zu suchen.

**Kleines Beispiel**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## Entfernen

Löscht eine <a href="../fileobj/fileobj.html">Datei</a>.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der ausgeführt wird, nachdem die <a href="../fileobj/fileobj.html">Datei</a> gelöscht wurde. Ohne Parameter aufgerufen. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, die <a href="../fileobj/fileobj.html">Datei</a> zu löschen. Aufgerufene mit einem `<a href="../fileerror/fileerror.html">FileError</a>` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

Suchen Sie den übergeordneten `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` mit der <a href="../fileobj/fileobj.html">Datei</a>.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der die <a href="../fileobj/fileobj.html">Datei</a> übergeordnete übergeben wird `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` . *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, das übergeordnete Element abrufen `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` . Aufgerufene mit einem `<a href="../fileerror/fileerror.html">FileError</a>` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>
    entry.getParent(success, fail);
    

## createWriter

Erstellen einer `<a href="../filewriter/filewriter.html">FileWriter</a>` vom dargestellten <a href="../fileobj/fileobj.html">Datei</a> zugeordnete Objekt der`FileEntry`.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `<a href="../filewriter/filewriter.html">FileWriter</a>` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Versuch, die <a href="../filewriter/filewriter.html">FileWriter</a> erstellen. Aufgerufene mit einem `<a href="../fileerror/fileerror.html">FileError</a>` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a <a href="../filewriter/filewriter.html">FileWriter</a> to write to the file
    entry.createWriter(success, fail);
    

## <a href="../fileobj/fileobj.html">Datei</a>

Zurück, ein `File` -Objekt, das den aktuellen Zustand der <a href="../fileobj/fileobj.html">Datei</a> darstellt, dass dies `FileEntry` darstellt.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `File` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Erstellen der `File` Objekt, z. B. wenn die <a href="../fileobj/fileobj.html">Datei</a> nicht mehr vorhanden ist. Aufgerufene mit einem `<a href="../fileerror/fileerror.html">FileError</a>` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);