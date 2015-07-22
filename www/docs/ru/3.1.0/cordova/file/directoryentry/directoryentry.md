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