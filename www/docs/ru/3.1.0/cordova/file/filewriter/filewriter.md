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

# Уничтожал

Как объект, который позволяет создавать и записывать данные в файл.

## Свойства

*   **свойство readyState**: один из трех возможных состояний, либо `INIT` , `WRITING` , или`DONE`.

*   **имя файла**: имя файла для записи. *(DOMString)*

*   **Длина**: длина файла для записи. *(длинная)*

*   **позиция**: текущее положение указателя файла. *(длинная)*

*   **Ошибка**: объект, который содержит ошибки. *(FileError)*

*   **onwritestart**: вызывается, когда начинается запись. *(Функция)*

*   **onwrite**: вызывается, когда запрос выполнен успешно. *(Функция)*

*   **OnAbort**: вызывается, когда запись была прервана. К примеру путем вызова метода abort(). *(Функция)*

*   **OnError**: вызывается при записи не удалось. *(Функция)*

*   **onwriteend**: вызывается при завершении запроса (либо в успех или неудача). *(Функция)*

Следующее свойство *не* поддерживается:

*   **OnProgress**: вызывается при записи файла, отчетности прогресс в плане `progress.loaded` / `progress.total` . *(Функция)*

## Методы

*   **прервать**: прерывает записи файла.

*   **Искать**: перемещает указатель файла в указанный байт.

*   **усечение**: сокращает файл до указанной длины.

*   **написать**: записывает данные в файл.

## Подробная информация

`FileWriter`Объект предлагает способ для записи файлов в кодировке UTF-8 на файловую систему устройства. Приложения отвечают на `writestart` , `progress` , `write` , `writeend` , `error` , и `abort` события.

Каждый `FileWriter` соответствует один файл, на который данные могут быть записаны во много раз. `FileWriter`Поддерживает этот файл `position` и `length` атрибуты, которые позволяют приложению `seek` и `write` где-нибудь в файле. По умолчанию `FileWriter` пишет в начале файла, перезаписи существующих данных. Задать необязательный `append` логическое для `true` в `FileWriter` в конструктор для записи в конце файла.

Текстовые данные поддерживается на всех платформах, перечисленных ниже. Текст кодируется как UTF-8 перед записью в файловой системе. Некоторые платформы поддерживают также двоичные данные, которые могут быть переданы в качестве ArrayBuffer или Blob.

## Поддерживаемые платформы

Текст и двоичные поддержки:

*   Андроид
*   iOS

Текстовая поддержка:

*   WebWorks ежевики (OS 5.0 и выше)
*   Windows Phone 7 и 8
*   ОС Windows 8

## Искать быстрый пример

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Усечение быстрый пример

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Написать краткий пример

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
    

## Двоичные записи быстрый пример

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
    

## Добавить быстрый пример

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
    

## Прервать быстрый пример

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
    

## Полный пример

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