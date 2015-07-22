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

# MediaFile.getFormatData

> Извлекает формат сведений о файле записи СМИ.

    mediaFile.getFormatData(
        MediaFileDataSuccessCB successCallback,
        [MediaFileDataErrorCB errorCallback]
    );
    

## Описание

Эта функция асинхронно пытается извлечь сведения о формате для файла мультимедиа. Если успешно, он вызывает `MediaFileDataSuccessCB` обратного вызова с `MediaFileData` объект. Если попытка завершается неудачей, то функция вызывает `MediaFileDataErrorCB` обратного вызова.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Ежевика WebWorks совместимости

Не предоставляет API для получения информации о медиа-файлов, так что все `MediaFileData` объекты возвращают со значениями по умолчанию.

## Андроид причуды

API для доступа к медиа файла формата информации ограничено, поэтому не все `MediaFileData` свойства поддерживаются.

## iOS причуды

API для доступа к медиа файла формата информации ограничено, поэтому не все `MediaFileData` свойства поддерживаются.