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

# MediaFileData

> Инкапсулирует сведения о файле мультимедиа формате.

## Свойства

*   **кодеки**: фактический формат аудио и видео контента. (DOMString)

*   **битрейт**: средний битрейт содержание. Значение равно нулю для изображений. (Число)

*   **Высота**: высота изображения или видео в пикселях. Значение равно нулю для аудио клипы. (Число)

*   **Ширина**: ширина изображения или видео в пикселях. Значение равно нулю для аудио клипы. (Число)

*   **Продолжительность**: длина видео- или звукового клипа в секундах. Значение равно нулю для изображений. (Число)

## Ежевика WebWorks совместимости

Нет API предоставляет сведения о формате для мультимедийных файлов, так что `MediaFileData` объект, возвращенный `MediaFile.getFormatData` имеет следующие значения по умолчанию:

*   **кодеки**: не поддерживается и возвращает`null`.

*   **битрейт**: не поддерживается и возвращает ноль.

*   **Высота**: не поддерживается и возвращает ноль.

*   **Ширина**: не поддерживается и возвращает ноль.

*   **Продолжительность**: не поддерживается и возвращает ноль.

## Андроид причуды

Поддерживает следующие `MediaFileData` Свойства:

*   **кодеки**: не поддерживается и возвращает`null`.

*   **битрейт**: не поддерживается и возвращает ноль.

*   **Высота**: поддерживается: только изображения и видео файлы.

*   **Ширина**: поддерживается: только изображения и видео файлы.

*   **Продолжительность**: Поддерживаемые: аудио и видео файлы только.

## iOS причуды

Поддерживает следующие `MediaFileData` Свойства:

*   **кодеки**: не поддерживается и возвращает`null`.

*   **битрейт**: поддерживается на устройствах iOS4 для только аудио. Возвращает значение 0 для изображений и видео.

*   **Высота**: поддерживается: только изображения и видео файлы.

*   **Ширина**: поддерживается: только изображения и видео файлы.

*   **Продолжительность**: Поддерживаемые: аудио и видео файлы только.