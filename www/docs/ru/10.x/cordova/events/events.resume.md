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

title: resume
---

# resume

Событие возникает, когда приложение восстанавливается из фонового режима.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Подробности

Событие `resume` возникает, когда платформа переводит приложения из фонового режима.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `[deviceready](events.deviceready.html)`.

## Поддерживаемые платформы

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Краткий пример

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Развернутый пример

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
    

## Особенности iOS

Любых интерактивных функций, вызываемых из обработкика события `[pause](events.pause.html)` выполнять позже, когда приложение возобновляет свою работу, как сигнализируется событием `resume`. К этому относятся оповещения, вызовы `console.log()` и все вызовы из плагинов или Cordova API, которые идут через Objective-C.

*   Событие **active**
    
    Специфичные для iOS `active` событие доступно как альтернатива `resume` и определяет, когда пользователям отключить кнопку **замка** , чтобы разблокировать устройство с приложением работающим на переднем плане. Если для приложения (и устройства) включена поддержка многозадачности, это находится в паре с последующим событием `resume`, но только под iOS 5. По сути всех заблокированных приложений в iOS 5, которые поддерживают многозадачность переводятся в фоновый режим. Чтобы приложение работало когда устройство заблокировано под iOS 5, необходимо отключить многозадачность приложения, установив [UIApplicationExitsOnSuspend][1] в значение `YES`. Чтобы выполняться когда устройство заблокировано на iOS 4, этот параметр не имеет значения.

*   Событие **resume**
    
    При вызове из обработчика событий `resume`, интерактивных функций, таких как `alert()`, эти функции должны быть обернуты в `setTimeout()` вызов с таймаутом нулю, или же в приложение зависает. Например:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html