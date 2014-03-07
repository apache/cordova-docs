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