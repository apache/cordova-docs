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

`FileReader`Позволяет базовый доступ к файлу.

## Свойства

*   **свойство readyState**: одним из читателя в три возможности государства, либо `EMPTY` , `LOADING` или`DONE`.

*   **результат**: содержимое файла, которые были прочитаны. *(DOMString)*

*   **Ошибка**: объект, который содержит ошибки. *(FileError)*

*   **onloadstart**: вызывается, когда начинается чтение. *(Функция)*

*   **OnLoad**: вызывается после успешного завершения чтения. *(Функция)*

*   **OnAbort**: вызывается при прерывании чтения. К примеру, путем вызова `abort()` метод. *(Функция)*

*   **OnError**: вызывается, когда произошел сбой чтения. *(Функция)*

*   **onloadend**: вызывается при завершении запроса (либо в успех или неудача). *(Функция)*

**Примечание:** Следующие недвижимость не поддерживается:

*   **OnProgress**: вызывается при чтении файла, отчетности прогресс в плане `progress.loaded` / `progress.total` . *(Функция)*

## Методы

*   **прервать**: прерывание чтения файла.

*   **readAsDataURL**: читать файл и возврат данных в виде URL-адреса base64-кодированные данные.

*   **readAsText**: чтение текстового файла.

*   **readAsBinaryString**: считывает файл как бинарный и возвращает двоичную строку.

*   **readAsArrayBuffer**: читает файл как`ArrayBuffer`.

## Подробная информация

`FileReader`Объект предлагает способ для чтения файлов из файловой системы устройства. Файлы можно читать как текст или как строку данных в кодировке base64. Прослушиватели событий получают `loadstart` , `progress` , `load` , `loadend` , `error` , и `abort` события.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## readAsDataURL

**Параметры:**

*   **файл**: объект файла для чтения.

## Быстрый пример

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

**Параметры:**

*   **файл**: объект файла для чтения.

*   **Кодировка**: кодировка для кодирования содержимого файла. Значение по умолчанию — UTF8.

## Быстрый пример

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
    

## прервать

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
    

## Полный пример

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
    

## iOS причуды

*   Параметр **Кодировка** не поддерживается, и кодировку UTF8 действует всегда.

## readAsBinaryString

В настоящее время поддерживается только на iOS и Android.

**Параметры:**

*   **файл**: объект файла для чтения.

## Быстрый пример

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

В настоящее время поддерживается только на iOS и Android.

**Параметры:**

*   **файл**: объект файла для чтения.

## Быстрый пример

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