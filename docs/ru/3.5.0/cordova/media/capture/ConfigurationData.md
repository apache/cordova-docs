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

# ConfigurationData

> Инкапсулирует набор параметров захвата средств массовой информации, которые поддерживает устройство.

## Описание

Описывает режимы захвата мультимедиа поддерживается устройством. Данные конфигурации включает в себя тип MIME и размеры захвата для захвата видео или изображения.

Типы MIME должны присоединиться к [RFC2046][1]. Примеры:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `video/3gpp`
*   `video/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Свойства

*   **тип**: кодировке ASCII нижнего регистра строка, представляющая тип средств массовой информации. (DOMString)

*   **Высота**: высота изображения или видео в пикселях. Значение равно нулю для звуковых клипов. (Число)

*   **Ширина**: ширина изображения или видео в пикселях. Значение равно нулю для звуковых клипов. (Число)

## Быстрый пример

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

Не поддерживается на любой платформе. Все массивы данных конфигурации являются пустыми.