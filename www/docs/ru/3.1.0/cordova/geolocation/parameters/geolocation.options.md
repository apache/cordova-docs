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

# geolocationOptions

Необязательные параметры для настройки поиска географического расположения`Position`.

    {maximumAge: 3000, тайм-аут: 5000, enableHighAccuracy: true};
    

## Параметры

*   **enableHighAccuracy**: предоставляет подсказку, что приложению требуются наилучшие результаты. По умолчанию устройство пытается получить `Position` с использованием методов на основе сети. Установка этого свойства значение `true` указывает среде использовать более точные методы, например спутникового позиционирования. *(Логическое значение)*

*   **время ожидания**: максимальная длина времени (в миллисекундах), которое разрешено пройти от вызова `geolocation.getCurrentPosition` или `geolocation.watchPosition` до соответствующего `geolocationSuccess` выполняет обратный вызов. Если `geolocationSuccess` обратного вызова не вызывается в течение этого времени, `geolocationError` обратного вызова передается `PositionError.TIMEOUT` код ошибки. (Обратите внимание, что при использовании в сочетании с `geolocation.watchPosition` , `geolocationError` обратный вызов может быть вызван на интервале каждые `timeout` миллисекунд!) *(Число)*

*   **maximumAge**: принять кэшированное положение, возраст которых не превышает указанного времени в миллисекундах. *(Число)*

## Андроид причуды

Android 2.x эмуляторы не возвращать результат геолокации, если `enableHighAccuracy` параметр имеет значение`true`.