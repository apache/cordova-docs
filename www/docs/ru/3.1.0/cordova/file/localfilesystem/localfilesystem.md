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