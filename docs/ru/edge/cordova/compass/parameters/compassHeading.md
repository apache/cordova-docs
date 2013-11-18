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

*   **trueHeading**: заголовок относительно географического Северного полюса в градусах 0-359,99 в один момент времени. Отрицательное значение указывает, что заголовок правда не может быть определено. *(Число)*

*   **headingAccuracy**: отклонение в градусах между сообщил заголовок и заголовок верно. *(Число)*

*   **отметка времени**: время, на котором был определен этот заголовок. *(в миллисекундах)*

## Описание

`CompassHeading`Объект возвращается к `compassSuccess` функции обратного вызова.

## Андроид причуды

*   `trueHeading`Свойство не поддерживается, но сообщает то же значение`magneticHeading`.

*   `headingAccuracy`Свойство всегда имеет 0 потому, что нет никакой разницы между `magneticHeading` и`trueHeading`.

## iOS причуды

*   `trueHeading`Свойства возвращается только для служб определения местоположения включена через`navigator.geolocation.watchLocation()`.

*   Для устройств iOS 4 и выше заголовок факторы в текущей ориентации устройства и не ссылаться на его абсолютное положение, для приложений, которые поддерживает эту ориентацию.