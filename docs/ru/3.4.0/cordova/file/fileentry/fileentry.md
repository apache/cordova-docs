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