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

# Пауза

Событие возникает, когда приложение находится в фоновом режиме.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Подробная информация

`pause`Событие возникает, когда родной платформе ставит приложения в фоновом режиме, как правило, когда пользователь переключается на другое приложение.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   Amazon Fire ОС
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 и 8
*   Windows 8

## Быстрый пример

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
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
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS причуды

В `pause` обработчик, все вызовы API Кордова или родного плагинов, которые идут через Objective-C не работают, а также любых интерактивных вызовов, например оповещения или `console.log()` . Они только обрабатываются, когда приложение возобновляется на следующий цикл выполнения.

Специфичные для iOS `resign` событие доступно как альтернатива `pause` и определяет, когда пользователям включить кнопку **замка** заблокировать устройство с app работает на переднем плане. Если приложение (и устройство) включена для поддержки многозадачности, это находится в паре с последующим `pause` событие, но только под iOS 5. По сути всех заблокированных приложений в iOS 5, которые имеют многозадачных включена выталкиваются на задний план. Для приложений, чтобы функционировать, когда locked под iOS 5, отключить приложения многозадачности, установив [UIApplicationExitsOnSuspend][1] `YES` . Чтобы запустить когда locked на iOS 4, этот параметр не имеет значения.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html