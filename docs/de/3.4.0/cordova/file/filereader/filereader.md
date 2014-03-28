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