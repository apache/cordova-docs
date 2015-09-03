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


# Datei

> Eine API zum Lesen, schreiben und navigieren Sie Datei-System-Hierarchien, basierend auf der [w3c Datei api][1].

 [1]: http://www.w3.org/TR/FileAPI

## Objekte

*   DirectoryEntry
*   DirectoryReader
*   Datei
*   FileEntries
*   FileError
*   FileReader
*   Dateisystem
*   FileTransfer
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   Flaggen
*   LocalFileSystem
*   Metadaten

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Um die Dateiübertragung-Plugin zu verwenden, müssen Sie, die separat hinzufügen.

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

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
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


# Datei

Dieses Objekt enthält Attribute einer einzelnen Datei.

## Eigenschaften

*   **Name**: der Name der Datei. *(DOM-String und enthält)*

*   **FullPath**: der vollständige Pfad der Datei, einschließlich des Dateinamens. *(DOM-String und enthält)*

*   **Typ**: den Mime-Typ der Datei. *(DOM-String und enthält)*

*   **LastModifiedDate**: das letzte Mal die Datei geändert wurde. *(Datum)*

*   **Größe**: die Größe der Datei in Bytes. *(lange)*

## Methoden

*   **Segment**: Wählen Sie nur einen Teil der Datei gelesen werden.

## Informationen

Das `File` -Objekt enthält Attribute einer einzelnen Datei. Erhalten Sie eine Instanz ein `File` Objekt durch Aufruf einer `FileEntry` des Objekts `file()` Methode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Scheibe

Zurück ein neues `File` Objekt, für die `FileReader` gibt nur den angegebenen Teil der Datei. Negative Werte für `start` oder `end` sind, gemessen vom Ende der Datei. Indizes sind relativ das aktuelle Segment positioniert. (Siehe das vollständige Beispiel weiter unten.)

**Parameter:**

*   **Start**: der Index des ersten Bytes zu lesen, inklusive.

*   **Ende**: der Index des Bytes nach dem letzten zu lesen.

**Kleines Beispiel**

    var slicedFile = file.slice(10, 30);
    

**Vollständiges Beispiel**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Unterstützte Plattformen**

*   Android
*   iOS


# FileReader

Die `FileReader` ermöglicht einfachen Zugriff auf eine Datei.

## Eigenschaften

*   **ReadyState**: einer der Leser der drei Staaten möglich, entweder `EMPTY` , `LOADING` oder`DONE`.

*   **Ergebnis**: der Inhalt der Datei, die gelesen wurden. *(DOM-String und enthält)*

*   **Fehler**: ein Objekt, die Fehler enthalten. *(FileError)*

*   **Onloadstart**: wird aufgerufen, wenn die Lese beginnt. *(Funktion)*

*   **OnLoad**: wird aufgerufen, wenn der Lesevorgang erfolgreich abgeschlossen wurde. *(Funktion)*

*   **OnAbort**: wird aufgerufen, wenn der Lesevorgang abgebrochen wurde. Z. B. durch Aufrufen der `abort()` Methode. *(Funktion)*

*   **OnError**: wird aufgerufen, wenn das Lesen fehlgeschlagen ist. *(Funktion)*

*   **Onloadend**: wird aufgerufen, wenn die Anforderung (entweder für Erfolg oder Misserfolg) abgeschlossen hat. *(Funktion)*

**Hinweis:** Die folgende Porperty wird nicht unterstützt:

*   **OnProgress**: aufgerufen, beim Lesen der Datei Fortschrittsbericht im Hinblick auf `progress.loaded` / `progress.total` . *(Funktion)*

## Methoden

*   **Abbrechen**: Abbrüche, die Datei zu lesen.

*   **ReadAsDataURL**: Datei und Rückgabedaten base64-codierte Daten im URL.

*   **ReadAsText**: liest Text-Datei.

*   **ReadAsBinaryString**: liest als Binär-Datei und eine binäre Zeichenfolge zurückgibt.

*   **ReadAsArrayBuffer**: liest Datei als eine`ArrayBuffer`.

## Informationen

Das `FileReader` -Objekt bietet eine Möglichkeit, Dateien aus dem Dateisystem des Geräts zu lesen. Dateien können als Text oder als eine base64-codierte Daten-Zeichenfolge gelesen werden. Ereignis-Listener empfangen die `loadstart` , `progress` , `load` , `loadend` , `error` , und `abort` Ereignisse.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## readAsDataURL

**Parameter:**

*   **Datei**: das Dateiobjekt zu lesen.

## Kleines Beispiel

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

**Parameter:**

*   **Datei**: das Dateiobjekt zu lesen.

*   **Codierung**: Codierung zum Codieren des Dateiinhalts. Standardwert ist UTF8.

## Kleines Beispiel

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
    

## Abbruch

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
    

## Vollständiges Beispiel

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
    

## iOS Macken

*   Der **encoding** -Parameter wird nicht unterstützt und UTF8-Codierung ist immer wirksam.

## readAsBinaryString

Derzeit unterstützt nur auf iOS und Android.

**Parameter:**

*   **Datei**: das Dateiobjekt zu lesen.

## Kleines Beispiel

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

Derzeit unterstützt nur auf iOS und Android.

**Parameter:**

*   **Datei**: das Dateiobjekt zu lesen.

## Kleines Beispiel

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

Als Objekt, das Sie erstellen und Daten in eine Datei schreiben kann.

## Eigenschaften

*   **ReadyState**: eines der drei möglichen Zuständen, entweder `INIT` , `WRITING` , oder`DONE`.

*   **Dateiname**: der Name der Datei geschrieben werden. *(DOM-String und enthält)*

*   **Länge**: die Länge der Datei geschrieben werden. *(lange)*

*   **Lage**: die aktuelle Position des Dateizeigers. *(lange)*

*   **Fehler**: ein Objekt, die Fehler enthalten. *(FileError)*

*   **Onwritestart**: wird aufgerufen, wenn der Schreibvorgang beginnt. *(Funktion)*

*   **Onwrite**: wird aufgerufen, wenn die Anforderung erfolgreich abgeschlossen wurde. *(Funktion)*

*   **OnAbort**: wird aufgerufen, wenn der Schreibvorgang abgebrochen wurde. Z. B. durch Aufrufen der abort()-Methode. *(Funktion)*

*   **OnError**: wird aufgerufen, wenn das Schreiben fehlgeschlagen ist. *(Funktion)*

*   **Onwriteend**: wird aufgerufen, wenn die Anforderung (entweder für Erfolg oder Misserfolg) abgeschlossen hat. *(Funktion)*

Die folgende Eigenschaft wird *nicht* unterstützt:

*   **OnProgress**: aufgerufen, beim Schreiben der Datei Fortschrittsbericht im Hinblick auf `progress.loaded` / `progress.total` . *(Funktion)*

## Methoden

*   **Abbrechen**: bricht die Datei schreibt.

*   **Suchen**: bewegt den Dateizeiger auf das angegebene Byte.

*   **abschneiden**: die Datei auf die angegebene Länge verkürzt.

*   **schreiben**: schreibt Daten in die Datei.

## Informationen

Das `FileWriter` -Objekt bietet eine Möglichkeit zum Schreiben von UTF-8 kodierten Dateien in Dateisystem des Geräts. Anwendungen reagieren auf `writestart` , `progress` , `write` , `writeend` , `error` , und `abort` Ereignisse.

Jeder `FileWriter` entspricht einer Datei, auf die Daten können viele Male geschrieben werden. Die `FileWriter` behält der Datei `position` und `length` Attribute, die die app zu ermöglichen `seek` und `write` an einer beliebigen Stelle in der Datei. In der Standardeinstellung der `FileWriter` schreibt an den Anfang der Datei überschreiben vorhandene Daten. Legen Sie das optionale `append` boolesche zu `true` in der `FileWriter` der Konstruktor, bis zum Ende der Datei zu schreiben.

Text-Daten werden von allen unten aufgelisteten Plattformen unterstützt. Text wird als UTF-8 codiert, bevor Sie in das Dateisystem geschrieben werden. Einige Plattformen unterstützen auch Binärdaten, die in als ein ArrayBuffer oder ein Blob übergeben werden können.

## Unterstützte Plattformen

Text- und Binär-Unterstützung:

*   Android
*   iOS

Nur-Text Unterstützung:

*   BlackBerry WebWorks (OS 5.0 und höher)
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel zu suchen

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Kleines Beispiel abschneiden

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Kleines Beispiel zu schreiben

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
    

## Binär schreiben kurzes Beispiel

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
    

## Kleines Beispiel anfügen

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
    

## Kleines Beispiel Abbrechen

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
    

## Vollständiges Beispiel

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


# Dateisystem

Dieses Objekt stellt ein Dateisystem.

## Eigenschaften

*   **Name**: der Name des Dateisystems. *(DOM-String und enthält)*

*   **Wurzel**: das Root-Verzeichnis des Dateisystems. *(DirectoryEntry)*

## Informationen

Das `FileSystem` Objekt stellt Informationen über das Dateisystem. Der Name des Dateisystems ist eindeutig die Liste der exponierten Dateisysteme. Die Root-Eigenschaft enthält ein `DirectoryEntry` -Objekt, das Dateisystem Root-Verzeichnis darstellt.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Schnelle System-Beispieldatei

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## Vollständiges Beispiel

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


# DirectoryReader

Ein Objekt, das Dateien und Verzeichnisse in einem Verzeichnis listet in der [W3C-Verzeichnisse und Systeme][1] -Spezifikation definiert.

 [1]: http://www.w3.org/TR/file-system-api/

## Methoden

*   **ReadEntries**: Lesen Sie die Einträge in einem Verzeichnis.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## readEntries

Lesen Sie die Einträge in diesem Verzeichnis.

**Parameter:**

*   **SuccessCallback**: ein Rückruf, der ein Array von übergeben wird `FileEntry` und `DirectoryEntry` Objekte. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Abrufen der Verzeichnisliste. Aufgerufene mit einem `FileError` Objekt. *(Funktion)*

**Kleines Beispiel**

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

Das `FileTransfer` -Objekt können Sie hoch-oder Herunterladen von Dateien zu und von einem Server.

## Eigenschaften

*   **OnProgress**: aufgerufen, wobei ein `ProgressEvent` wann wird eine neue Datenmenge übertragen. *(Funktion)*

## Methoden

*   **Upload**: sendet eine Datei an einen Server.

*   **Download**: lädt eine Datei vom Server.

*   **Abbrechen**: Abbruch eine Übertragung in Bearbeitung.

## Informationen

Das `FileTransfer` Objekt bietet eine Möglichkeit zum Hochladen von Dateien auf einem remote-Server mithilfe einer mehrteiligen HTTP-POST-Anforderung. HTTP- und HTTPS-Protokolle werden unterstützt. Optionale Parameter können angegeben werden, indem Sie übergeben ein `FileUploadOptions` gegen die `upload()` Methode. Auf erfolgreichen Upload ein `FileUploadResult` -Objekt wird an den Erfolg-Rückruf übergeben. Wenn ein Fehler auftritt, ein `FileTransferError` -Objekt wird an den Fehler-Rückruf übergeben. Es ist auch möglich (nur auf iOS und Android), eine Datei von einem remote-Server herunterladen und speichern Sie es auf dem Gerät.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Upload

**Parameter:**

*   **FilePath**: vollständigen Pfad der Datei auf das Gerät.

*   **Server**: URL des Servers, die Datei zu empfangen, wie kodiert`encodeURI()`.

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `Metadata` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Abrufen der `Metadata` . Aufgerufene mit einem `FileTransferError` Objekt. *(Funktion)*

*   **Optionen**: optionale Parameter wie z. B. Dateinamen und Mimetype.

*   **TrustAllHosts**: Optionaler Parameter, wird standardmäßig auf `false` . Wenn legen Sie auf `true` , es akzeptiert alle Sicherheitszertifikate. Dies ist nützlich, da Android selbstsignierte Zertifikate ablehnt. Nicht für den produktiven Einsatz empfohlen. Auf Android und iOS unterstützt. *(Boolean)*

**Kleines Beispiel**

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
    

**Vollständiges Beispiel**

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
    

**Einstellung-Upload-Header**

Auf Android und iOS unterstützt

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
    

**Android Macken**

Legen Sie die `chunkedMode` -option, um `false` Probleme beim Hochladen auf einen Nginx-Server zu verhindern.

## Download

**Parameter:**

*   **Quelle**: URL des Servers, um die Datei herunterzuladen, wie kodiert`encodeURI()`.

*   **Ziel**: vollständige Pfad der Datei auf das Gerät.

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `FileEntry` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Abrufen der `Metadata` . Aufgerufene mit einem `FileTransferError` Objekt. *(Funktion)*

*   **TrustAllHosts**: Optionaler Parameter, wird standardmäßig auf `false` . Wenn legen Sie auf `true` , dann es alle Sicherheitszertifikate akzeptieren wird. Dies ist nützlich, da Android selbst signierte Zertifikate ablehnt. Nicht für den produktiven Einsatz empfohlen. Auf Android und iOS unterstützt. *(Boolean)*

*   **Optionen**: optionale Parameter, derzeit nur unterstützt Kopfzeilen (z. B. Autorisierung (Standardauthentifizierung), etc.).

**Kleines Beispiel**

    // !! Übernimmt FilePath ist ein gültiger Pfad auf den Gerät-Var-FileTransfer = neue FileTransfer();
    Var Uri = EncodeURI ("http://some.server.com/download.php");
    
    fileTransfer.download (Uri, FilePath, function(entry) {console.log ("Download abgeschlossen:" + entry.fullPath);
        }, function(error) {console.log ("Download Fehlerquelle" + error.source);
            Console.log ("Download-Fehler-Ziel" + error.target);
            Console.log ("Upload Error Code" + error.code);
        }, falsche, {Header: {"Autorisierung": "grundlegende dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA =="}});
    

## Abbruch

Bricht einen in-Progress-Transfer. Der Onerror-Rückruf wird ein FileTransferError-Objekt übergeben, die einen Fehlercode FileTransferError.ABORT_ERR hat.

**Unterstützte Plattformen**

*   Android
*   iOS

**Kleines Beispiel**

    // !! Wird davon ausgegangen, Variable FileURI enthält einen gültigen URI in eine Textdatei auf dem Gerät Var gewinnen = function(r) {console.log ("sollte nicht aufgerufen werden.");}
    
    Var Fehler = function(error) {/ / error.code == FileTransferError.ABORT_ERR Alert ("Fehler: Code =" + error.code);
        Console.log ("Upload-Fehlerquelle" + error.source);
        Console.log ("Upload-Fehler-Ziel" + error.target);}
    
    Var Optionen = neue FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    Var ft = neue FileTransfer();
    ft.Upload (FileURI, EncodeURI ("http://some.server.com/upload.php"), Win, Fail, Optionen);
    ft.Abort();
    

## OnProgress

Mit einer ProgressEvent aufgerufen, wenn eine neue Datenmenge übertragen wird.

**Unterstützte Plattformen**

*   Android
*   iOS

**Beispiel**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Quirks** - auf beide Android ein iOS, LengthComputable ist `false` für Downloads, die Gzip-Codierung verwenden.


# FileUploadOptions

A `FileUploadOptions` Objekt übergeben werden kann, um die `FileTransfer` des Objekts `upload()` Methode, um zusätzliche Parameter an den Upload-Skript angeben.

## Eigenschaften

*   **FileKey**: der Name des Form-Elements. Wird standardmäßig auf `file` . (DOM-String und enthält)

*   **Dateiname**: der Dateiname beim Speichern der Datei auf dem Server verwendet. Wird standardmäßig auf `image.jpg` . (DOM-String und enthält)

*   **MimeType**: den Mime-Typ der Daten hochzuladen. Wird standardmäßig auf `image/jpeg` . (DOM-String und enthält)

*   **Params**: eine Reihe von optionalen Schlüssel/Wert-Paaren in der HTTP-Anforderung übergeben. (Objekt)

*   **ChunkedMode**: ob die Daten in "Chunked" streaming-Modus hochladen. Wird standardmäßig auf `true` . (Boolean)

*   **Header**: eine Karte von Header-Name-Header-Werte. Verwenden Sie ein Array, um mehr als einen Wert anzugeben. (Objekt)

## Beschreibung

A `FileUploadOptions` Objekt übergeben werden kann, um die `FileTransfer` des Objekts `upload()` Methode, um zusätzliche Parameter an den Upload-Skript angeben.

## WP7 Quirk

*   **ChunkedMode:**: wird bei WP7 ignoriert.


# FileUploadResult

A `FileUploadResult` -Objekt wird an den Erfolg-Rückruf des übergeben die `FileTransfer` des Objekts `upload()` Methode.

## Eigenschaften

*   **BytesSent**: die Anzahl der Bytes, die als Teil des Uploads an den Server gesendet. (lange)

*   **ResponseCode**: die HTTP-Response-Code vom Server zurückgegeben. (lange)

*   **Antwort**: der HTTP-Antwort vom Server zurückgegeben. (DOM-String und enthält)

## Beschreibung

Das `FileUploadResult` -Objekt wird über den Erfolg-Rückruf des zurückgegeben die `FileTransfer` des Objekts `upload()` Methode.

## iOS Macken

*   Unterstützt keine `responseCode` oder`bytesSent`.


# Flags

Liefert Argumente für die `DirectoryEntry` des Objekts `getFile()` und `getDirectory()` Methoden, die nachschlagen oder erstellen Sie Dateien und Verzeichnisse.

## Eigenschaften

*   **Erstellen**: gibt an, dass die Datei oder das Verzeichnis erstellt werden soll, wenn es nicht bereits vorhanden ist. *(boolesch)*

*   **exklusiv**: hat wirkt sich nicht von selbst, aber mit `create` bewirkt die Datei oder das Verzeichnis-Erstellung schlägt fehl, wenn der Zielpfad bereits vorhanden ist. *(boolesch)*

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    / / Get das Datenverzeichnis, die ihn herstellen, wenn es nicht vorhanden ist.
    DataDir = fileSystem.root.getDirectory ("Daten", {erstellen: True});
    
    / / Die Lock-Datei zu erstellen, wenn es nicht vorhanden ist.
    LockFile = dataDir.getFile ("lockfile.txt", {erstellen: echte, exklusive: True});


# LocalFileSystem

Dieses Objekt bietet eine Möglichkeit, Root-Dateisysteme zu erhalten.

## Methoden

*   **RequestFileSystem**: ein Dateisystem anfordert. *(Funktion)*

*   **ResolveLocalFileSystemURI**: Abrufen einer `DirectoryEntry` oder `FileEntry` mit lokalen URI. *(Funktion)*

## Konstanten

*   `LocalFileSystem.PERSISTENT`: Verwendet für die Speicherung, die nicht vom User Agent Anwendung oder Benutzer unerlaubt entfernt werden sollte.

*   `LocalFileSystem.TEMPORARY`: Verwendet für die Speicherung mit keine Garantie für Dauerhaftigkeit.

## Informationen

Die `LocalFileSystem` sind Objektmethoden definiert, auf das `window` Objekt.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Schnelle System-Beispieldatei anfordern

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Lokale Datei System URI kurzes Beispiel zu lösen

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Vollständiges Beispiel

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

> Fordern Sie ein Dateisystem zum Speichern von Anwendungsdaten.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **Fenster**: Verweis auf den globalen Window-Objekt
*   **Typ**: lokale Datei Systemtyp, siehe LocalFileSystem-Konstanten
*   **Größe**: gibt an, wieviel Speicherplatz in Byte, die Anwendung erwartet, müssen
*   **SuccessCallback**: mit einem Dateisystem Objekt aufgerufen
*   **ErrorCallback**: aufgerufen, wenn Fehler beim Abrufen des Dateisystem auftritt

## Schnelle System-Beispieldatei anfordern

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);


# Metadaten

Eine Schnittstelle, die Informationen über den Status einer Datei oder eines Verzeichnisses angibt.

## Eigenschaften

*   **ModificationTime**: die Zeit, wann die Datei oder das Verzeichnis zuletzt geändert wurde. *(Datum)*

## Informationen

Das `Metadata` -Objekt stellt Informationen über den Status einer Datei oder eines Verzeichnisses dar. Aufruf einer `DirectoryEntry` oder `FileEntry` des Objekts `getMetadata()` Methode führt eine `Metadata` Instanz.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);


# FileError

A `FileError` -Objekt festgelegt ist, tritt ein Fehler in der Datei API-Methoden.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

## Konstanten

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

## Beschreibung

Das `FileError` -Objekt ist der einzige Parameter, die die Datei-API-Fehler-Rückrufe. Um den Typ des Fehlers festzustellen, vergleichen die `code` -Eigenschaft auf eines der oben genannten Angebote.


# FileTransferError

A `FileTransferError` Objekt wird an eine Fehler-Callback übergeben, wenn ein Fehler auftritt.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt. (Anzahl)

*   **Quelle**: URI zur Quelle. (String)

*   **Ziel**: URI zum Ziel. (String)

*   **HTTP_STATUS**: HTTP-Statuscode. Dieses Attribut ist nur verfügbar, wenn ein Response-Code aus der HTTP-Verbindung eingeht. (Anzahl)

## Konstanten

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Beschreibung

Das `FileTransferError` -Objekt wird an den Rückruf Fehler übergeben, tritt ein Fehler beim Up- oder Download einer Datei.
