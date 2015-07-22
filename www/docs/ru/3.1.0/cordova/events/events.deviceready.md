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

title: deviceready
---

# deviceready

Событие возникает, когда Кордова полностью загружен.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Подробная информация

Это событие имеет важное значение для любого приложения. Он сигнализирует, что Кордова в устройства API загружены и готовы для доступа к.

Кордова состоит из двух кодовых баз: родной и JavaScript. В то время как машинный код загружает, отображается изображение пользовательской загрузки. Однако JavaScript загружает только после того, как DOM загружает. Это означает, что веб-приложение потенциально может вызвать функцию Cordova JavaScript, прежде чем соответствующий машинный код доступен.

`deviceready`Событие возникает после полной загрузки Cordova. Когда событие происходит, вы можете безопасно звонить Cordova интерфейсов API. Приложения обычно придают прослушиватель событий с `document.addEventListener` после загрузки DOM HTML-документа.

`deviceready`Событий поведение несколько отличается от других. Любой обработчик событий, зарегистрированных после `deviceready` пожаров событие имеет свою функцию обратного вызова вызывается немедленно.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>