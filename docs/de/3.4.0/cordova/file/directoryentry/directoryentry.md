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

Dieses Objekt stellt ein Verzeichnis auf einem Dateisystem, wie durch die [W3C-Verzeichnisse und Systeme][1] -Spezifikation definiert.

 [1]: http://www.w3.org/TR/file-system-api/

## Eigenschaften

*   **IsFile**: immer `false` . *(boolesch)*

*   **IsDirectory**: immer `true` . *(boolesch)*

*   **Name**: der Name der `DirectoryEntry` , ohne den Pfad zu es führen. *(DOM-String und enthält)*

*   **FullPath**: der vollständige absolute Pfad von der Wurzel an der `DirectoryEntry` . *(DOM-String und enthält)*

**Hinweis:** Das folgende Attribut wird durch die W3C-Spezifikation definiert, aber wird *nicht* unterstützt:

*   **Dateisystem**: das Dateisystem, auf dem der `DirectoryEntry` befindet. *(FileSystem)*

## Methoden

Die folgenden Methoden aufgerufen werden können, auf ein `DirectoryEntry` Objekt:

*   **GetMetadata**: Metadaten über ein Verzeichnis nachschlagen.

*   **SetMetadata**: Metadaten für ein Verzeichnis festgelegt.

*   **MoveTo**: Verschieben Sie ein Verzeichnis an einen anderen Speicherort im Dateisystem.

*   **CopyTo**: Kopieren eines Verzeichnisses in einem anderen Speicherort im Dateisystem.

*   **Besuch**: Rückkehr eine URL zu helfen, ein Verzeichnis zu suchen.

*   **Entfernen**: Löschen eines Verzeichnisses. Das Verzeichnis muss leer sein.

*   **GetParent**: das übergeordnete Verzeichnis nachschlagen.

*   **CreateReader**: Erstellen Sie eine neue `DirectoryReader` , die können Einträge aus dem Verzeichnis lesen.

*   **GetDirectory**: Erstellen oder ein Verzeichnis nachschlagen.

*   **GetFile**: Erstellen oder eine Datei nachschlagen.

*   **RemoveRecursively**: ein Verzeichnis und seinen Inhalt zu löschen.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## getMetadata

Metadaten über ein Verzeichnis nachschlagen.

**Parameter:**

*   **SuccessCallback**: eine Callback-Funktion mit einem `Metadata` Objekt. *(Funktion)*

*   **ErrorCallback**: eine Callback-Funktion ausführen, tritt ein Fehler beim Abrufen der `Metadata` . Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    Function success(metadata) {console.log ("Datum der letzten Änderung:" + metadata.modificationTime);}
    
    Function fail(error) {alert(error.code);}
    
    / / Anfrage das Metadatenobjekt für diesen Eintrag entry.getMetadata (Erfolg, Fehler);
    

## setMetadata

Legt ein Verzeichnis erweiterte Attribute oder Metadaten. *Funktioniert derzeit nur auf iOS.*

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der ausgeführt wird, wenn die Metadaten erfolgreich festgelegt ist. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn die Metadaten nicht festgelegt werden. *(Funktion)*

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

*   Nur die `com.apple.MobileBackup` erweitertes Attribut wird unterstützt. Legen Sie den Wert, um `1` zu verhindern, dass das Verzeichnis auf iCloud gesichert wird. Legen Sie den Wert auf `` , das Verzeichnis zu iCloud gesichert werden wieder zu aktivieren.

**Kleines Beispiel**

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

Verschieben Sie ein Verzeichnis an einen anderen Speicherort im Dateisystem. Ein Fehler auftritt, wenn die app versucht:

*   Verschieben Sie ein Verzeichnis in sich selbst oder an jedes Kind in jede Tiefe.

*   Verschieben Sie ein Verzeichnis in übergeordneten, wenn ein Name unterscheidet sich von seinem aktuellen Verzeichnis nicht bereitgestellt wird.

*   Verschieben Sie ein Verzeichnis auf einen Pfad, der von einer Datei belegt.

*   Verschieben Sie ein Verzeichnis auf einen Pfad, belegt durch ein Verzeichnis, das nicht leer ist.

Verschieben eines Verzeichnisses auf einem vorhandenen leeren Verzeichnis versucht löschen und ersetzen dieses Verzeichnis.

**Parameter:**

*   **Eltern**: das übergeordnete Verzeichnis, in das Verzeichnis verschoben. *(DirectoryEntry)*

*   **NewName**: der neue Name des Verzeichnisses. Der Standardwert ist der aktuelle Name, wenn kein Wert angegeben. *(DOM-String und enthält)*

*   **SuccessCallback**: ein Rückruf, der mit führt das `DirectoryEntry` -Objekt für das neue Verzeichnis. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, das Verzeichnis zu verschieben. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

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

Kopieren Sie ein Verzeichnis an einen anderen Speicherort im Dateisystem. Ein Fehler auftritt, wenn die app versucht:

*   Kopieren eines Verzeichnisses in sich in beliebiger Tiefe.

*   Kopieren eines Verzeichnisses in übergeordneten, wenn ein Name unterscheidet sich von seinem aktuellen Verzeichnis nicht bereitgestellt wird.

Verzeichnis-Kopien sind immer rekursive, und kopieren Sie alle Inhalte des Verzeichnisses.

**Parameter:**

*   **Eltern**: das übergeordnete Verzeichnis in das Verzeichnis kopiert. *(DirectoryEntry)*

*   **NewName**: der neue Name des Verzeichnisses. Der Standardwert ist der aktuelle Name, wenn kein Wert angegeben. *(DOM-String und enthält)*

*   **SuccessCallback**: ein Rückruf, der mit führt das `DirectoryEntry` -Objekt für das neue Verzeichnis. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Versuch, vom zugrunde liegenden Verzeichnis kopieren. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

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
    

## Besuch

Gibt einen URL, die verwendet werden kann, um das Verzeichnis zu suchen.

**Kleines Beispiel**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## Entfernen

Löscht ein Verzeichnis. Ein Fehler auftritt, wenn die app versucht:

*   Löschen Sie ein Verzeichnis, das nicht leer ist.

*   Löschen Sie das Root-Verzeichnis des Dateisystems.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der ausgeführt wird, nachdem das Verzeichnis gelöscht wird. Ohne Parameter aufgerufen. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, das Verzeichnis zu löschen. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    Function success(entry) {console.log ("Entfernung erfolgreich");}
    
    Funktion fail(error) {Alert (' Fehler beim Entfernen der Verzeichnis: ' + error.code);}
    
    / / Entfernen dieses Verzeichnis entry.remove (Erfolg, Fehler);
    

## getParent

Suchen Sie den übergeordneten `DirectoryEntry` mit dem Verzeichnis.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der das Verzeichnis übergeordnete übergeben wird `DirectoryEntry` . *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, das übergeordnete Element abrufen `DirectoryEntry` . Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

Erstellt eine neue DirectoryReader um Einträge in einem Verzeichnis zu lesen.

**Kleines Beispiel**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

Erstellt oder ein vorhandenes Verzeichnis sucht. Ein Fehler auftritt, wenn die app versucht:

*   Erstellen Sie ein Verzeichnis, dessen unmittelbar übergeordnete noch nicht vorhanden ist.

**Parameter:**

*   **Pfad**: der Pfad zu dem Verzeichnis nachgeschlagen oder erstellt werden. Ein absoluter Pfad oder einen relativen Pfad von diesem `DirectoryEntry` . *(DOM-String und enthält)*

*   **Optionen**: Optionen, um anzugeben, ob das Verzeichnis erstellt werden, wenn er nicht vorhanden ist. *(Flags)*

*   **SuccessCallback**: ein Rückruf, der mit führt ein `DirectoryEntry` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Erstellen oder suchen Sie das Verzeichnis. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    Function success(dirEntry) {console.log ("Directory Name:" + dirEntry.name);}
    
    Function fail(error) {Alert ("neues Verzeichnis erstellt:" + error.code);}
    
    / / Ein vorhandenes Verzeichnis abrufen oder erstellen Sie ihn, wenn es nicht bereits, entry.getDirectory vorhanden ist ("NewDir", {erstellen: echte, exklusive: False}, Erfolg, Fehler);
    

## getFile

Erstellt oder eine Datei sucht. Ein Fehler auftritt, wenn die app versucht:

*   Erstellen Sie eine Datei, deren unmittelbar übergeordnete noch nicht vorhanden ist.

**Parameter:**

*   **Pfad**: der Pfad zu der Datei nachgeschlagen oder erstellt werden. Ein absoluter Pfad oder einen relativen Pfad von diesem `DirectoryEntry` . *(DOM-String und enthält)*

*   **Optionen**: Optionen, um anzugeben, ob die Datei erstellt wird, wenn es nicht vorhanden ist. *(Flags)*

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `FileEntry` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Erstellen oder suchen Sie die Datei. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    Function success(fileEntry) {console.log ("Dateiname:" + fileEntry.name);}
    
    Function fail(error) {Alert ("Fehler beim Abrufen der Datei:" + error.code);}
    
    / / Abrufen eine vorhandene Datei, oder erstellen Sie ihn, wenn er nicht, entry.getFile vorhanden ist ("newFile.txt", {erstellen: echte, exklusive: False}, Erfolg, Fehler);
    

## removeRecursively

Löscht ein Verzeichnis und seinen Inhalt. Im Falle eines Fehlers (z. B. versuchen, Löschen eines Verzeichnisses mit einer Datei, die nicht entfernt werden), können einige der den Inhalt des Verzeichnisses gelöscht werden. Ein Fehler auftritt, wenn die app versucht:

*   Löschen Sie das Root-Verzeichnis des Dateisystems.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der nach dem führt die `DirectoryEntry` gelöscht wurden. Ohne Parameter aufgerufen. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, wenn ein Fehler auftritt, wenn Sie versuchen, löschen Sie die `DirectoryEntry` . Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## BlackBerry Macken

Möglicherweise nicht mit einem `ControlledAccessException` in den folgenden Fällen:

*   Eine Anwendung versucht, ein Verzeichnis erstellt von einer vorherigen Installation der app zugreifen.

> Lösung: Stellen Sie sicher, dass temporäre Verzeichnisse manuell oder durch die Anwendung vor der Neuinstallation gereinigt werden.

*   Wenn das Gerät per USB angeschlossen ist.

> Lösung: Trennen Sie das USB-Kabel vom Gerät und erneut ausführen.