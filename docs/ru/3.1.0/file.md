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


# Файл

> Интерфейс API, чтобы читать, писать и навигации по иерархиям файловой системы, основанные на [w3c файла api][1].

 [1]: http://www.w3.org/TR/FileAPI

## Объекты

*   DirectoryEntry
*   DirectoryReader
*   Файл
*   FileEntry
*   FileError
*   FileReader
*   Файловая система
*   FileTransfer
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   Уничтожал
*   Флаги
*   LocalFileSystem
*   Метаданные

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Чтобы использовать плагин передачи файлов необходимо добавить что отдельно.

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   Ежевика WebWorks
    
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
        

*   iOS (в`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# Файл

Этот объект содержит атрибуты в одном файле.

## Свойства

*   **имя**: имя файла. *(DOMString)*

*   **полный путь**: полный путь к файлу, включая имя файла. *(DOMString)*

*   **тип**: тип mime файла. *(DOMString)*

*   **lastModifiedDate**: время последнего изменения файла. *(Дата)*

*   **Размер**: Размер файла в байтах. *(длинная)*

## Методы

*   **фрагмент**: выберите только часть файла для чтения.

## Подробная информация

`File`Объект содержит атрибуты в одном файле. Вы можете получить экземпляр `File` объект путем вызова `FileEntry` объекта `file()` метод.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## срез

Возвращают новую `File` объект, для которого `FileReader` возвращает только указанную часть файла. Отрицательные значения для `start` или `end` измеряются от конца файла. Индексы располагаются относительно текущего фрагмента. (См. ниже полный пример.)

**Параметры:**

*   **Начало**: индекс первого байта для чтения, включительно.

*   **конец**: индекс байта после последнего один для чтения.

**Быстрый пример**

    var slicedFile = file.slice(10, 30);
    

**Полный пример**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Поддерживаемые платформы**

*   Андроид
*   iOS


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


# Файловая система

Этот объект представляет файловую систему.

## Свойства

*   **имя**: имя файловой системы. *(DOMString)*

*   **корень**: корневой каталог в файловой системе. *(DirectoryEntry)*

## Подробная информация

`FileSystem`Объект представляет сведения о файловой системе. Имя файловой системы является уникальным через список открытых файловых систем. Свойство root содержит `DirectoryEntry` объект, представляющий корневой каталог в файловой системе.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример файловой системы

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## Полный пример

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


# FileEntry

Представляет файл в файловой системе, как определено в спецификации [W3C каталогов и систем][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Свойства

*   **isFile**: всегда `true` . *(логический)*

*   **isDirectory**: всегда `false` . *(логический)*

*   **имя**: имя `FileEntry` , исключая путь, ведущий к нему. *(DOMString)*

*   **полный путь**: полный абсолютный путь от корня к `FileEntry` . *(DOMString)*

**Примечание:** Следующий атрибут определен в спецификации W3C, но *не* поддерживается:

*   **Файловая система**: файловая система, на которой `FileEntry` проживает. *(Файловая система)*

## Методы

*   **getMetadata**: искать метаданные о файле.

*   **setMetadata**: задать метаданные файла.

*   **moveTo**: перемещение файла в другую папку в файловой системе.

*   **copyTo**: копировать файл в другое расположение в файловой системе.

*   **toURL**: Возвращает URL-адрес, который может использоваться для поиска файла.

*   **Удалить**: удалить файл.

*   **getParent**: Посмотрите вверх родительского каталога.

*   **createWriter**: создает `FileWriter` объект, который может быть использован для записи в файл.

*   **файл**: создает `File` объект, содержащий свойства файла.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## getMetadata

Искать метаданные о файле.

**Параметры:**

*   **successCallback**: обратного вызова, передаваемого `Metadata` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при получении `Metadata` . Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    Функция success(metadata) {console.log («последнего изменения: «+ metadata.modificationTime);}
    
    Функция fail(error) {alert(error.code)};
    
    / / Запрос объекта метаданных для этой записи entry.getMetadata (успех, неудача);
    

## setMetadata

Метаданные набора на файл.

**В настоящее время работает только на iOS.**

*   Это установит расширенных атрибутов файла.

**Параметры:**

*   **successCallback**: обратного вызова, который выполняется, когда метаданные набора. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, когда метаданные не заданы успешно. *(Функция)*

*   **метаданных (MetadataObject)**: объект, содержащий ключи и значения метаданных. *(Объект)*

**Быстрый пример**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS галтель**

*   Только `com.apple.MobileBackup` поддерживается Расширенный атрибут. Задайте значение `1` для предотвращения файла резервного копирования с iCloud. Задайте значение `` для повторного включения файлов для резервного копирования в iCloud.

**Быстрый пример**

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

Перемещение файла в другую папку в файловой системе. Если приложение пытается приводит к ошибке:

*   Переместите файл в его родителя, если не указано имя, отличное от его текущего;

*   Перемещение файла в путь, занимаемый директорией;

Кроме того перемещение файла поверх существующего файла пытается удалить и заменить этот файл.

**Параметры:**

*   **родитель**: родительский каталог, в который необходимо переместить файл. *(DirectoryEntry)*

*   **newName**: новое имя файла. По умолчанию используется имя текущей, если значение не указано. *(DOMString)*

*   **successCallback**: обратный вызов, который передается новый файл `FileEntry` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке переместить файл. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

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

Копирование файла в новое расположение в файловой системе. Если приложение пытается приводит к ошибке:

*   Скопируйте файл в его родителя, если не указано имя, отличное от его текущего.

**Параметры:**

*   **родитель**: родительский каталог, в который необходимо скопировать файл. *(DirectoryEntry)*

*   **newName**: новое имя файла. По умолчанию используется имя текущей, если значение не указано. *(DOMString)*

*   **successCallback**: обратный вызов, который передается новый файл `FileEntry` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке копирования файла. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

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

Возвращает URL-адрес, который может использоваться для поиска файла.

**Быстрый пример**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## удалить

Удаляет файл.

**Параметры:**

*   **successCallback**: обратного вызова, который выполняется после того, как файл был удален. Вызывается без параметров. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке удалить файл. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

Посмотрите вверх родительского `DirectoryEntry` файл.

**Параметры:**

*   **successCallback**: обратного вызова, передаваемого файла родительского `DirectoryEntry` . *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке получить родительского `DirectoryEntry` . Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

Создание `FileWriter` объект, связанный с файла, представленного`FileEntry`.

**Параметры:**

*   **successCallback**: обратного вызова, передаваемого `FileWriter` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке создания уничтожал. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## файл

Возвращение `File` объект, представляющий текущее состояние файла что это `FileEntry` представляет.

**Параметры:**

*   **successCallback**: обратного вызова, передаваемого `File` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при создании `File` объекта, например, когда файл больше не существует. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);


# DirectoryEntry

Этот объект представляет каталог в файловой системе, как определено в спецификации [W3C каталогов и систем][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Свойства

*   **isFile**: всегда `false` . *(логический)*

*   **isDirectory**: всегда `true` . *(логический)*

*   **имя**: имя `DirectoryEntry` , исключая путь, ведущий к нему. *(DOMString)*

*   **полный путь**: полный абсолютный путь от корня к `DirectoryEntry` . *(DOMString)*

**Примечание:** Следующий атрибут определен в спецификации W3C, но *не* поддерживается:

*   **Файловая система**: файловая система, на которой `DirectoryEntry` проживает. *(Файловая система)*

## Методы

Следующие методы могут быть вызваны на `DirectoryEntry` объект:

*   **getMetadata**: искать метаданные каталога.

*   **setMetadata**: задать метаданные каталога.

*   **moveTo**: переместить каталог в другое место в файловой системе.

*   **copyTo**: копирования каталога в другое место в файловой системе.

*   **toURL**: Возвращает URL-адрес, чтобы помочь найти каталог.

*   **Удалить**: удалить каталог. Каталог должен быть пустым.

*   **getParent**: Посмотрите вверх родительского каталога.

*   **createReader**: создать новую `DirectoryReader` , можно читать записи из каталога.

*   **getDirectory**: создать или найти каталог.

*   **getFile**: создать или найти файл.

*   **removeRecursively**: удалить каталог и все его содержимое.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## getMetadata

Поиск метаданных каталога.

**Параметры:**

*   **successCallback**: функцию обратного вызова для выполнения с `Metadata` объект. *(Функция)*

*   **errorCallback**: функцию обратного вызова для выполнения, если происходит ошибка при получении `Metadata` . Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    Функция success(metadata) {console.log («последнего изменения: «+ metadata.modificationTime);}
    
    Функция fail(error) {alert(error.code)};
    
    / / Запрос объекта метаданных для этой записи entry.getMetadata (успех, неудача);
    

## setMetadata

Устанавливает дополнительные атрибуты каталога или метаданные. *В настоящее время работает только на iOS.*

**Параметры:**

*   **successCallback**: обратного вызова, который выполняется, когда метаданные успешно установлены. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, когда метаданные не удается установить. *(Функция)*

*   **метаданных (MetadataObject)**: объект, содержащий ключи и значения метаданных. *(Объект)*

**Быстрый пример**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS галтель**

*   Только `com.apple.MobileBackup` поддерживается Расширенный атрибут. Задайте значение `1` для предотвращения в каталог резервного копирования для iCloud. Задайте значение `` для повторного включения в каталог для резервного копирования в iCloud.

**Быстрый пример**

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

Переместите каталог в другое место в файловой системе. Если приложение пытается приводит к ошибке:

*   Переместите каталог внутри себя или любому ребенку на любой глубине.

*   Переместите каталог в его родителя, если не указано имя, отличное от текущего каталога.

*   Переместите каталог в путь, занимаемых файл.

*   Переместите каталог в путь, занимаемый директорией, которая не является пустым.

Перемещение каталога поверх существующих пустой каталог пытается удалить и заменить этот каталог.

**Параметры:**

*   **родитель**: родительский каталог для перемещения каталога. *(DirectoryEntry)*

*   **newName**: новое имя каталога. По умолчанию используется имя текущей, если значение не указано. *(DOMString)*

*   **successCallback**: обратного вызова, который выполняется с `DirectoryEntry` объект для нового каталога. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке переместить каталог. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

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

Копирования каталога в другое место в файловой системе. Если приложение пытается приводит к ошибке:

*   Скопируйте каталог внутри себя на любой глубине.

*   Скопируйте каталог в его родительского, если не указано имя, отличное от текущего каталога.

Каталог копии всегда являются рекурсивными и скопируйте все содержимое каталога.

**Параметры:**

*   **родитель**: родительский каталог, в который необходимо скопировать в каталог. *(DirectoryEntry)*

*   **newName**: новое имя каталога. По умолчанию используется имя текущей, если значение не указано. *(DOMString)*

*   **successCallback**: обратного вызова, который выполняется с `DirectoryEntry` объект для нового каталога. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке копирования базового каталога. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

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

Возвращает URL-адрес, который может использоваться для поиска в каталоге.

**Быстрый пример**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## удалить

Удаляет каталог. Если приложение пытается приводит к ошибке:

*   Удалите каталог, который не является пустым.

*   Удалите корневой папке файловой системы.

**Параметры:**

*   **successCallback**: обратного вызова, который выполняется после удаления каталога. Вызывается без параметров. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке удалить каталог. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    Функция success(entry) {console.log («удаление успешно");}
    
    Функция fail(error) {alert (' ошибка при удалении каталога: ' + error.code);}
    
    / / удалить этот каталог entry.remove (успех, неудача);
    

## getParent

Посмотрите вверх родительского `DirectoryEntry` содержащий каталог.

**Параметры:**

*   **successCallback**: обратный вызов, который передается родительского каталога `DirectoryEntry` . *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке получить родительского `DirectoryEntry` . Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

Создает новый DirectoryReader для чтения записей в каталоге.

**Быстрый пример**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

Создает или ищет существующий каталог. Если приложение пытается приводит к ошибке:

*   Создайте каталог, чьи непосредственный родительский еще не существует.

**Параметры:**

*   **путь**: путь к каталогу посмотрел вверх или создан. Либо абсолютный путь, или относительный путь от этого `DirectoryEntry` . *(DOMString)*

*   **опции**: параметры, чтобы указать, является ли каталог будет создан, если он не существует. *(Флаги)*

*   **successCallback**: обратного вызова, который выполняется с `DirectoryEntry` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при создании или поиска каталога. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    Функция success(dirEntry) {console.log («имя каталога:» + dirEntry.name);}
    
    Функция fail(error) {alert ("не удается создать новый каталог: «+ error.code);}
    
    / / Получить существующий каталог, или создайте его, если он еще не существует entry.getDirectory («newDir» {создать: true, эксклюзивные: false}, успех, неудача);
    

## getFile

Создает или ищет файл. Если приложение пытается приводит к ошибке:

*   Создайте файл которого непосредственный родительский еще не существует.

**Параметры:**

*   **путь**: путь к файлу посмотрел вверх или создан. Либо абсолютный путь, или относительный путь от этого `DirectoryEntry` . *(DOMString)*

*   **опции**: параметры, чтобы указать, создается ли файл, если он не существует. *(Флаги)*

*   **successCallback**: обратного вызова, передаваемого `FileEntry` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при создании или поиска файла. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    Функция success(fileEntry) {console.log ("имя файла:» + fileEntry.name);}
    
    Функция fail(error) {alert ("удалось получить файл:» + error.code);}
    
    / / Получить существующий файл, или создайте его, если он не существует entry.getFile («newFile.txt», {создать: Правда, эксклюзивные: false}, успех, неудача);
    

## removeRecursively

Удаляет каталог и все его содержимое. В случае ошибки (например, попытке удалить каталог, содержащий файл, который не может быть удален) некоторые из содержимого каталога могут быть удалены. Если приложение пытается приводит к ошибке:

*   Удалите корневой папке файловой системы.

**Параметры:**

*   **successCallback**: обратного вызова, который выполняется после `DirectoryEntry` был удален. Вызывается без параметров. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при попытке удалить `DirectoryEntry` . Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## Причуды ежевики

Может завершиться с `ControlledAccessException` в следующих случаях:

*   Приложение пытается получить доступ к каталогу, созданный предыдущей установки приложения.

> Решение: Убедитесь, что временные папки убираются вручную, или приложением до переустановки.

*   Если устройство подключено к USB.

> Решение: отключите USB-кабель от устройства и запустите снова.


# DirectoryReader

Объект, который содержит список файлов и каталогов в каталоге, как определено в спецификации [W3C каталогов и систем][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Методы

*   **readEntries**: чтение записей в каталоге.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## readEntries

Чтение записей в этом каталоге.

**Параметры:**

*   **successCallback**: обратный вызов, который передается массив из `FileEntry` и `DirectoryEntry` объектов. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при извлечении листинг каталога. Вызываемый с `FileError` объект. *(Функция)*

**Быстрый пример**

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

`FileTransfer`Объект позволяет загружать файлы на сервер и обратно.

## Свойства

*   **OnProgress**: называется с `ProgressEvent` всякий раз, когда новый фрагмент данных передается. *(Функция)*

## Методы

*   **добавлено**: отправляет файл на сервер.

*   **скачать**: Скачать файл с сервера.

*   **прервать**: прерывает передачу в прогресс.

## Подробная информация

`FileTransfer`Объект предоставляет способ для загрузки файлов на удаленный сервер с помощью нескольких частей запроса POST HTTP. Поддерживаются протоколы HTTP и HTTPS. Необязательные параметры можно указать путем передачи `FileUploadOptions` объектов для `upload()` метода. При успешной отправке `FileUploadResult` объект передается в метод обратного вызова успех. Если возникает ошибка, `FileTransferError` объект передается в метод обратного вызова ошибки. Это также возможно (только на iOS и Android), чтобы загрузить файл с удаленного сервера и сохранить его на устройстве.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## загрузить

**Параметры:**

*   **filePath**: полный путь к файлу на устройстве.

*   **сервер**: URL-адрес сервера, чтобы получить файл, как закодированные`encodeURI()`.

*   **successCallback**: обратного вызова, передаваемого `Metadata` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется в случае получения ошибки `Metadata` . Вызываемый с `FileTransferError` объект. *(Функция)*

*   **опции**: необязательные параметры, такие как имя файла и тип MIME.

*   **trustAllHosts**: необязательный параметр, по умолчанию равен `false` . Если значение `true` , она принимает все сертификаты безопасности. Это полезно, поскольку Android отвергает самозаверяющие сертификаты. Не рекомендуется для использования в производстве. Поддерживается на Android и iOS. *(логическое значение)*

**Быстрый пример**

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
    

**Полный пример**

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
    

**Параметр Загружать заголовки**

Поддерживается на Android и iOS

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
    

**Андроид причуды**

Установите `chunkedMode` вариант для `false` чтобы предотвратить проблемы с загрузкой на сервер Nginx.

## Скачать

**Параметры:**

*   **источник**: URL-адрес сервера для загрузки файла, как закодированные`encodeURI()`.

*   **Цель**: полный путь к файлу на устройстве.

*   **successCallback**: обратного вызова, передаваемого `FileEntry` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при получении `Metadata` . Вызываемый с `FileTransferError` объект. *(Функция)*

*   **trustAllHosts**: необязательный параметр, по умолчанию равен `false` . Если значение `true` , то он будет принимать все сертификаты безопасности. Это полезно, как Android отвергает самостоятельной подписанные сертификаты. Не рекомендуется для использования в производстве. Поддерживается на Android и iOS. *(логическое значение)*

*   **опции**: необязательные параметры, в настоящее время только поддерживает заголовки (например авторизации (базовая аутентификация) и т.д.).

**Быстрый пример**

    // !! Предполагается filePath представляет собой допустимый путь на устройство var fileTransfer = новый FileTransfer();
    var uri = encodeURI («http://some.server.com/download.php»);
    
    fileTransfer.download (uri, filePath, function(entry) {console.log («скачать полный:» + entry.fullPath);
        }, function(error) {console.log («источник ошибки загрузки» + error.source);
            Console.log («скачать Ошибка цель» + error.target);
            Console.log («код ошибки загрузки» + error.code);
        }, значение false, {заголовки: {«Авторизация»: «основные dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA == "}});
    

## прервать

Прерывает передачу в прогресс. Onerror обратного вызова передается объект FileTransferError, который имеет код ошибки FileTransferError.ABORT_ERR.

**Поддерживаемые платформы**

*   Андроид
*   iOS

**Быстрый пример**

    // !! Предполагается переменная fileURI содержит допустимый URI в текстовый файл на устройство победить var = function(r) {console.log («не должен вызываться.");}
    
    Сбой var = function(error) {/ / error.code == FileTransferError.ABORT_ERR оповещения («произошла ошибка: код =» + error.code);
        Console.log («источник ошибки загрузки» + error.source);
        Console.log («загрузить ошибка цель» + error.target);}
    
    Параметры var = новый FileUploadOptions();
    options.fileKey="file»;
    options.fileName="myphoto.jpg»;
    options.mimeType="image/jpeg»;
    
    var ft = новый FileTransfer();
    ft.upload (fileURI, encodeURI («http://some.server.com/upload.php»), победа, fail, варианты);
    ft.Abort();
    

## OnProgress

Вызывается с ProgressEvent всякий раз, когда новый фрагмент данных передается.

**Поддерживаемые платформы**

*   Андроид
*   iOS

**Пример**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Причуды** - на обоих Android и iOS, lengthComputable является `false` для загрузки, которые используют кодировку gzip.


# FileUploadOptions

A `FileUploadOptions` объект может быть передан `FileTransfer` объекта `upload()` метод, чтобы задать дополнительные параметры для загрузки сценария.

## Свойства

*   **fileKey**: имя элемента form. По умолчанию `file` . (DOMString)

*   **имя файла**: имя файла для использования при сохранении файла на сервере. По умолчанию `image.jpg` . (DOMString)

*   **тип MIME**: тип mime данных для загрузки. По умолчанию `image/jpeg` . (DOMString)

*   **params**: набор пар дополнительный ключ/значение для передачи в HTTP-запросе. (Объект)

*   **chunkedMode**: следует ли загружать данные в фрагментах потоковом режиме. По умолчанию `true` . (Логическое значение)

*   **заголовки**: Карта значений заголовок имя заголовка. Используйте массив для указания более одного значения. (Объект)

## Описание

A `FileUploadOptions` объект может быть передан `FileTransfer` объекта `upload()` метод, чтобы задать дополнительные параметры для загрузки сценария.

## WP7 галтель

*   **chunkedMode:**: в WP7 игнорируется.


# FileUploadResult

Объект `FileUploadResult` передается на успех обратного вызова метода `upload()` объекта `FileTransfer`.

## Параметры

*   **bytesSent**: количество байт, отправленных на сервер как часть загрузки. (длинная)

*   **responseCode**: код ответа HTTP, возвращаемых сервером. (длинная)

*   **ответ**: ответ HTTP, возвращаемых сервером. (DOMString)

## Описание

`FileUploadResult`Объект возвращается через успех обратного вызова `FileTransfer` объекта `upload()` метод.

## iOS причуды

*   Не поддерживает `responseCode` или`bytesSent`.


# Флаги

Аргументы для `DirectoryEntry` объекта `getFile()` и `getDirectory()` методы, которые смотрят или создавать файлы и каталоги, соответственно.

## Свойства

*   **создать**: указывает, что файл или каталог следует создать, если он еще не существует. *(логический)*

*   **эксклюзивные**: имеет не влияет сама по себе, но при использовании с `create` вызывает создание файла или каталога на провал, если целевой путь уже существует. *(логический)*

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    / / Получить каталог данных, создавая его, если он не существует.
    dataDir = fileSystem.root.getDirectory («данные», {создать: true});
    
    / / Создать файл блокировки только в том случае, если он не существует.
    lockFile = dataDir.getFile («lockfile.txt» {создать: Правда, эксклюзивные: true});


# LocalFileSystem

Этот объект обеспечивает способ получения корневых файловых систем.

## Методы

*   **requestFileSystem**: просит файловой системы. *(Функция)*

*   **resolveLocalFileSystemURI**: получить `DirectoryEntry` или `FileEntry` с помощью местных URI. *(Функция)*

## Константы

*   `LocalFileSystem.PERSISTENT`: Используется для хранения, который не должен быть удален агент пользователя без разрешения приложения или пользователя.

*   `LocalFileSystem.TEMPORARY`: Используется для хранения без гарантии сохранения.

## Подробная информация

`LocalFileSystem`Методы объекта определяются на `window` объект.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Запрос файловой системы быстрый пример

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Разрешить быстрый пример локальной файловой системы URI

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Полный пример

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

> Запросить файловую систему для хранения данных приложения.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **окно**: ссылка на объект глобального окна
*   **тип**: местные системы тип файла, см. LocalFileSystem константы
*   **Размер**: указывает, сколько места, в байтах, приложение и ожидает ее нужно
*   **successCallback**: вызывается с помощью объекта файловой системы
*   **errorCallback**: вызывается, если ошибка происходит извлечение файловой системы

## Запрос файловой системы быстрый пример

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);


# Метаданные

Интерфейс, который предоставляет сведения о состоянии файла или каталога.

## Свойства

*   **modificationTime**: время, время последнего изменения файла или каталога. *(Дата)*

## Подробная информация

`Metadata`Объект представляет сведения о состоянии файла или каталога. Вызов `DirectoryEntry` или `FileEntry` объекта `getMetadata()` метода `Metadata` экземпляра.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);


# FileError

A `FileError` объект устанавливается при возникновении ошибки в любом из файлов API методов.

## Свойства

*   **код**: один из кодов стандартных ошибок, перечисленные ниже.

## Константы

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

## Описание

`FileError`Объект является единственным параметром, для любой из обратных вызовов API файлов ошибок. Чтобы определить тип ошибки, сравните его `code` свойства любой из выше предложения.


# FileTransferError

A `FileTransferError` объект передается при ошибке обратного вызова при возникновении ошибки.

## Свойства

*   **код**: один из кодов стандартных ошибок, перечисленные ниже. (Число)

*   **источник**: URI на источник. (Строка)

*   **Цель**: URI в целевой объект. (Строка)

*   **http_status**: код состояния HTTP. Этот атрибут доступен только при код ответа от HTTP-соединения. (Число)

## Константы

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Описание

`FileTransferError`Ошибка обратного вызова передается объект, когда происходит ошибка при загрузке или Загрузка файла.
