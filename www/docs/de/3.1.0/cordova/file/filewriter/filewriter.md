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