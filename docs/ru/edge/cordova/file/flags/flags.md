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