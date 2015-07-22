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

# deviceready

Событие возникает, когда Cordova загружена полностью.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Подробная информация

Это событие имеет важное значение для любого приложения. Оно сигнализирует, что Cordova API для устройств загружены и готовы для работы.

Кордова состоит из двух наборов исходных кодов: родной язык платформы и JavaScript. В то время как основной код загружается, отображается экран загрузки. Однако JavaScript загружает только после того, как загружен DOM. Это означает, что веб-приложение потенциально может вызвать JavaScript функцию Cordova, прежде тем как соответствующий машинный код будет доступен.

Событие `deviceready` возникает после полной загрузки Cordova. Когда событие происходит, вы можете безопасно вызывать API Cordova. Приложения обычно устанавливают обработчик события с помощью `document.addEventListener` после загрузки DOM HTML-документа.

Поведение события `deviceready` несколько отличается от других событий. Любой обработчик событий, зарегистрированных после того событие `deviceready` произошло, вызывается немедленно.

## Поддерживаемые платформы

*   Amazon Fire ОС
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   Windows 8

## Краткий пример

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Развернутый пример

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