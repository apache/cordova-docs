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

title: pause
---

# pause

Событие возникает, когда приложение переводят в фоновом режиме.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Подробности

Событие `pause` возникает, когда платформа переводит приложения в фоновом режиме, как правило, когда пользователь переключается на другое приложение.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `[deviceready](events.deviceready.html)`.

## Поддерживаемые платформы

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Краткий пример

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Развернутый пример

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
    

## Особенности iOS

В обработчик события `pause`, все вызовы API Cordova или плагинов, которые идут через Objective-C не работают, а также любых интерактивных вызовов, например оповещения или вызовы `console.log()` . Они обрабатываются только когда приложение возобновляет работу, на следующий цикл выполнения.

Специфичное для iOS событие `resign` доступно как альтернатива `pause` и определяет, когда пользователи включили кнопку **замка** чтобы заблокировать устройство с приложением работающим на переднем плане. Если приложение (и устройство) поддерживает многозадачность, это событие находится в паре с последующим событием `pause`, но только при работе в iOS 5. По сути всех заблокированных приложений в iOS 5, которые поддерживают многозадачность переводятся в фоновый режим. Чтобы приложение работало когда устройство заблокировано под iOS 5, необходимо отключить многозадачность приложения, установив [UIApplicationExitsOnSuspend][1] в значение `YES` . Чтобы выполняться когда устройство заблокировано на iOS 4, этот параметр не имеет значения.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html