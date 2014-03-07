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