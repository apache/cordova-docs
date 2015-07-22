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

# cameraOptions

Необязательные параметры для настройки параметров камеры.

    {качество: 75, destinationType: Camera.DestinationType.DATA_URL, тип источника: Camera.PictureSourceType.CAMERA, allowEdit: Правда, Тип_шифрования: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: CameraPopoverOptions, saveToPhotoAlbum: значение false};
    

## Параметры

*   **качество**: качество сохраняемого изображения, выражается в виде диапазона 0-100, где 100 является обычно полное разрешение без потери от сжатия файлов. *(Число)* (Обратите внимание, что информация о разрешение камеры недоступна.)

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / возвращение изображения в base64-кодировке строки FILE_URI: 1, / / возврат файла изображения URI NATIVE_URI: 2 / / возвращение образа собственного URI (например, Библиотека активов: / / на iOS или содержание: / / на андроиде)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0, камеры: 1, SAVEDPHOTOALBUM: 2};
        

*   **allowEdit**: позволить простое редактирование изображения перед выбором. *(Логический)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0, / / возвращение JPEG кодировке изображения PNG: 1 / / рисунок в формате PNG, возвращение};
        

*   **targetWidth**: ширина для масштабирование изображения в пикселях. Должна использоваться с **targetHeight**. Соотношение остается неизменным. *(Число)*

*   **targetWidth**: ширина для масштабирование изображения в пикселях. Должна использоваться с **targetHeight**. Соотношение остается неизменным. *(Число)*

*   **тип носителя**: Установите тип средств массовой информации, чтобы выбрать из. Работает только если `PictureSourceType` является `PHOTOLIBRARY` или `SAVEDPHOTOALBUM` . Определено в `nagivator.camera.MediaType` *(число)* 
    
        Camera.MediaType = {картинка: 0, / / разрешить выбор еще фотографии только. ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ. Возвращает формат, указанный через DestinationType видео: 1, / / разрешить выбор видео только, будет всегда возвращать ALLMEDIA FILE_URI: 2 / / разрешить выбор со всех типов носителей
        
    
    };

*   **correctOrientation**: вращать изображение, чтобы исправить для ориентации устройства во время захвата. *(Логический)*

*   **saveToPhotoAlbum**: сохранить изображение в фотоальбом на устройстве после захвата. *(Логический)*

*   **popoverOptions**: только для iOS параметры, которые определяют местоположение инструмента в iPad. Определены в`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {обратно: 0, / / использовать обратно, стоящих перед камерой фронт: 1 / / использовать фронтальная камера};
        

## Андроид причуды

*   Любые `cameraDirection` значение результатов в задней стороне фото.

*   Игнорирует `allowEdit` параметр.

*   `Camera.PictureSourceType.PHOTOLIBRARY`и `Camera.PictureSourceType.SAVEDPHOTOALBUM` оба отображения же фотоальбом.

## Причуды ежевики

*   Игнорирует `quality` параметр.

*   Игнорирует `sourceType` параметр.

*   Игнорирует `allowEdit` параметр.

*   Приложение должно иметь разрешения ключевых инъекции закрыть приложение, предназначенное для камеры после того, как пользователь прикрепляет фото.

*   Использование размеров больших изображений может привести к невозможности кодирования изображений на поздней модели устройств (например, факел 9800) что функция камер высокого разрешения.

*   `Camera.MediaType`не поддерживается.

*   Игнорирует `correctOrientation` параметр.

*   Игнорирует `cameraDirection` параметр.

## iOS причуды

*   Задать `quality` ниже 50, чтобы избежать ошибок памяти на некоторых устройствах.

*   При использовании `destinationType.FILE_URI` , фотографии сохраняются во временном каталоге приложения. Вы можете удалить содержимое этого каталога с использованием `navigator.fileMgr` API-интерфейсы если пространство является проблемой.

## Tizen причуды

*   параметры, не поддерживаемые

*   всегда возвращает URI файла

## Windows Phone 7 и 8 причуды

*   Игнорирует `allowEdit` параметр.

*   Игнорирует `correctOrientation` параметр.

*   Игнорирует `cameraDirection` параметр.