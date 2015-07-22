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

# compassHeading

A `CompassHeading` объект возвращается к `compassSuccess` функции обратного вызова.

## Свойства

*   **magneticHeading**: направление в градусах от 0-359,99 в один момент времени. *(Число)*

*   **trueHeading**: заголовок относительно географического Северного полюса в градусах 0-359,99 в один момент времени. Отрицательное значение указывает, что истинный заголовок не может быть определено. *(Число)*

*   **headingAccuracy**: отклонение в градусах между сообщил заголовок и заголовок верно. *(Число)*

*   **отметка времени**: время, на котором был определен этот заголовок. *(в миллисекундах)*

## Описание

`CompassHeading`Объект возвращается к `compassSuccess` функции обратного вызова.

## Андроид причуды

*   `trueHeading`не поддерживается, но сообщает то же значение`magneticHeading`

*   `headingAccuracy`Это всегда 0 потому, что нет никакой разницы между `magneticHeading` и`trueHeading`.

## iOS причуды

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Для устройств iOS 4 и выше, заголовок факторов в текущей ориентации устройства, не со ссылкой на свою абсолютную позицию для приложений, который поддерживает что ориентация.