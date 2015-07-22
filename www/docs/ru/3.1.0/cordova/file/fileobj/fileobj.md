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