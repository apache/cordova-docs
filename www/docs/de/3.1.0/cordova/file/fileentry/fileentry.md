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

# FileEntries

Eine Datei in einem Dateisystem darstellt, wie in der [W3C-Verzeichnisse und Systeme][1] -Spezifikation definiert.

 [1]: http://www.w3.org/TR/file-system-api/

## Eigenschaften

*   **IsFile**: immer `true` . *(boolesch)*

*   **IsDirectory**: immer `false` . *(boolesch)*

*   **Name**: der Name der `FileEntry` , ohne den Pfad zu es führen. *(DOM-String und enthält)*

*   **FullPath**: der vollständige absolute Pfad von der Wurzel an der `FileEntry` . *(DOM-String und enthält)*

**Hinweis:** Das folgende Attribut wird durch die W3C-Spezifikation definiert, aber wird *nicht* unterstützt:

*   **Dateisystem**: das Dateisystem, auf dem der `FileEntry` befindet. *(FileSystem)*

## Methoden

*   **GetMetadata**: Nachschlagen Metadaten über eine Datei.

*   **SetMetadata**: Metadaten für eine Datei festlegen.

*   **MoveTo**: Verschieben einer Datei an einen anderen Speicherort im Dateisystem.

*   **CopyTo**: Kopieren Sie eine Datei an einen anderen Speicherort im Dateisystem.

*   **Besuch**: Rückkehr einen URL, die verwendet werden kann, um eine Datei zu suchen.

*   **Entfernen**: Löschen einer Datei.

*   **GetParent**: das übergeordnete Verzeichnis nachschlagen.

*   **CreateWriter**: erstellt ein `FileWriter` -Objekt, das verwendet werden kann, um in eine Datei schreiben.

*   **Datei**: erstellt ein `File` -Objekt, Dateieigenschaften.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## getMetadata

Suchen Sie Metadaten zu einer Datei.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `Metadata` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Abrufen der `Metadata` . Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    Function success(metadata) {console.log ("Datum der letzten Änderung:" + metadata.modificationTime);}
    
    Function fail(error) {alert(error.code);}
    
    / / Anfrage das Metadatenobjekt für diesen Eintrag entry.getMetadata (Erfolg, Fehler);
    

## setMetadata

Metadaten in einer Datei.

**Derzeit funktioniert nur auf iOS.**

*   Dadurch wird die erweiterten Attribute einer Datei festgelegt.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der ausgeführt wird, wenn die Metadaten festgelegt ist. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn die Metadaten nicht erfolgreich festgelegt ist. *(Funktion)*

*   **MetadataObject**: ein Objekt, das der Metadaten Schlüssel und Werte enthält. *(Objekt)*

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

*   Nur die `com.apple.MobileBackup` erweitertes Attribut wird unterstützt. Legen Sie den Wert auf `1` zu verhindern, dass die Datei auf iCloud gesichert wird. Legen Sie den Wert auf `` , die Datei zu iCloud gesichert werden wieder zu aktivieren.

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
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(LocalFileSystem.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

Verschieben Sie eine Datei an einen anderen Speicherort im Dateisystem. Ein Fehler auftritt, wenn die app versucht:

*   Verschieben einer Datei in seinem übergeordneten Element, sofern ein anderen von seinen aktuellen Namen ist nicht;

*   Verschieben einer Datei auf einen Pfad, der von einem Verzeichnis besetzt;

Darüber hinaus versucht das Verschieben einer Datei auf eine vorhandene Datei löschen und die Datei zu ersetzen.

**Parameter:**

*   **Eltern**: das übergeordnete Verzeichnis, in das die Datei verschoben. *(DirectoryEntry)*

*   **NewName**: der neue Name der Datei. Der Standardwert ist der aktuelle Name, wenn kein Wert angegeben. *(DOM-String und enthält)*

*   **SuccessCallback**: ein Rückruf, der übergeben wird, der neuen Datei `FileEntry` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, die Datei zu verschieben. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

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
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

Kopieren Sie eine Datei an einen neuen Speicherort im Dateisystem. Ein Fehler auftritt, wenn die app versucht:

*   Kopieren Sie eine Datei in übergeordneten, wenn ein anderen von seinen aktuellen Namen nicht angegeben ist.

**Parameter:**

*   **Eltern**: das übergeordnete Verzeichnis, in das die Datei kopiert. *(DirectoryEntry)*

*   **NewName**: der neue Name der Datei. Der Standardwert ist der aktuelle Name, wenn kein Wert angegeben. *(DOM-String und enthält)*

*   **SuccessCallback**: ein Rückruf, der übergeben wird, der neuen Datei `FileEntry` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Versuch, die Datei zu kopieren. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

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
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## Besuch

Gibt einen URL, die verwendet werden kann, um die Datei zu suchen.

**Kleines Beispiel**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## Entfernen

Löscht eine Datei.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der ausgeführt wird, nachdem die Datei gelöscht wurde. Ohne Parameter aufgerufen. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, die Datei zu löschen. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

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

Suchen Sie den übergeordneten `DirectoryEntry` mit der Datei.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der die Datei übergeordnete übergeben wird `DirectoryEntry` . *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, das übergeordnete Element abrufen `DirectoryEntry` . Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

Erstellen einer `FileWriter` vom dargestellten Datei zugeordnete Objekt der`FileEntry`.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `FileWriter` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Versuch, die FileWriter erstellen. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## Datei

Zurück, ein `File` -Objekt, das den aktuellen Zustand der Datei darstellt, dass dies `FileEntry` darstellt.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `File` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Erstellen der `File` Objekt, z. B. wenn die Datei nicht mehr vorhanden ist. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);