---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

# device.uuid

Получить универсального уникального идентификатора ([UUID][1] устройства).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## Описание

Подробная информация о как UUID генерируется определяются изготовителем устройства и являются специфическими для платформы или модель устройства.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    / / Android: Возвращает случайное 64-разрядное целое число (в виде строки, опять!) / / целое число генерируется при первой загрузке устройства / / / / BlackBerry: Возвращает номер PIN устройства / / это 9 значный уникальный целочисленный (как строка, хотя!) / / / / iPhone: (Перефразировано от документации класса UIDevice) / / возвращает строку хэш-значения, созданные из нескольких аппаратных определяет.
    / / Это гарантированно является уникальным для каждого устройства и не может быть привязана / / учетной записи пользователя.
    / / Windows Phone 7: Возвращает хэш устройство + текущего пользователя, / / если пользователь не определен, guid формируется и будет сохраняться до тех пор, пока приложение удаляется / / Tizen: возвращает устройства IMEI (Международный идентификатор мобильного оборудования или IMEI это число / / уникальный для каждого мобильного телефона GSM и UMTS.
    var deviceID = device.uuid;
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + <a href="device.model.html">device.model</a>    + '<br />' +
                                'Device Cordova: '  + <a href="device.cordova.html">device.cordova</a>  + '<br />' +
                                'Device Platform: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + <a href="device.version.html">device.version</a>  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS галтель

`uuid`На iOS не является уникальным для устройства, но варьируется для каждого приложения, для каждой установки. Он изменяет, если удалить и повторно установить приложение, и возможно также когда вы обновить iOS, или даже обновить ваше приложение в версии (явно в iOS 5.1). `uuid`Не является надежным.

## Windows Phone 7 и 8 причуды

`uuid`Для Windows Phone 7 требует разрешения `ID_CAP_IDENTITY_DEVICE` . Microsoft будет скорее всего скоро Опознайте это свойство. Если возможность недоступна, приложение создает постоянные guid, который сохраняется на время установки приложения на устройстве.