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

# резюме

Событие возникает, когда приложение извлекается от фона.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Подробная информация

`resume`Событие возникает, когда родной платформе вытаскивает приложения от фона.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   Amazon Fire ОС
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 и 8
*   Windows 8

## Быстрый пример

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
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
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS причуды

Любых интерактивных функций, вызываемых из `pause` обработчик событий выполнять позже когда приложение возобновляет, как сигнализируется `resume` событие. К ним относятся оповещения, `console.log()` и все вызовы из плагинов или Кордова API, которые идут через Objective-C.

*   **Активные** мероприятия
    
    Специфичные для iOS `active` событие доступно как альтернатива `resume` и определяет, когда пользователям отключить кнопку **замка** , чтобы разблокировать устройство с app работает на переднем плане. Если приложение (и устройство) включена для поддержки многозадачности, это находится в паре с последующим `resume` событие, но только под iOS 5. По сути всех заблокированных приложений в iOS 5, которые имеют многозадачных включена выталкиваются на задний план. Для приложений, чтобы функционировать, когда locked под iOS 5, отключить приложения многозадачности, установив [UIApplicationExitsOnSuspend][1] `YES` . Чтобы запустить когда locked на iOS 4, этот параметр не имеет значения.

*   **возобновить** событие
    
    При вызове из `resume` обработчика событий, интерактивных функций, таких как `alert()` должны быть обернуты в `setTimeout()` вызов с таймаутом нулю, или же в приложение зависает. Например:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html