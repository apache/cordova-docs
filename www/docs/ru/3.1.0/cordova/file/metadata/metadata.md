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