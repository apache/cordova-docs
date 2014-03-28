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

# CaptureAudioOptions

> Инкапсулирует параметры конфигурации аудио захвата.

## Свойства

*   **ограничение**: максимальное количество аудио клипы, устройства пользователь может записывать в одном захвата. Значение должно быть больше или равно 1 (по умолчанию 1).

*   **Продолжительность**: максимальная продолжительность звука звукового клипа в секундах.

## Быстрый пример

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Андроид причуды

*   `duration`Параметр не поддерживается. Запись длины не могут быть ограничены программным способом.

## Ежевика WebWorks совместимости

*   `duration`Параметр не поддерживается. Запись длины не могут быть ограничены программным способом.

## iOS причуды

*   `limit`Параметр не поддерживается, поэтому только одна запись может быть создана для каждого вызова.