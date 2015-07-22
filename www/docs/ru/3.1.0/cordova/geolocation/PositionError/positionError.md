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

# PositionError

A `PositionError` объект передается в `geolocationError` обратного вызова при возникновении ошибки.

## Свойства

*   **код**: один из кодов стандартных ошибок, перечисленные ниже.

*   **сообщение**: сообщение об ошибке с подробными сведениями об ошибке.

## Константы

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Описание

`PositionError`Объект передается в `geolocationError` функцию обратного вызова при возникновении ошибки с geolocation.

### `PositionError.PERMISSION_DENIED`

Возвращается, если пользователь не позволят приложению получить сведения о положении. Это зависит от платформы.

### `PositionError.POSITION_UNAVAILABLE`

Возвращается, если устройство не удается получить позиции. В целом это означает, что прибор не подключен к сети или не удается получить Спутниковое исправить.

### `PositionError.TIMEOUT`

Возвращается, если устройство не удается получить позицию в течение времени, указанного в `geolocationOptions` ' `timeout` Свойства. При использовании с `geolocation.watchPosition` , эта ошибка может быть передан `geolocationError` обратного вызова каждый `timeout` миллисекунд.