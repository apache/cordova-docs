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


# События

> События жизненного цикла Cordova.

## Типы событий

*   deviceready
*   Пауза
*   резюме
*   backbutton
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## События добавляемые [org.apache.cordova.battery-status][1]

 [1]: https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

*   batterycritical
*   batterylow
*   batterystatus

## События добавляемые [org.apache.cordova.network-information][2]

 [2]: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md

*   online
*   offline


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


# backbutton

Событие возникает, когда пользователь нажимает кнопку "назад".

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Подробная информация

Чтобы переопределить поведение по умолчанию кнопки back, зарегистрируйте обработчик события `backbutton`, обычно путем вызова `document.addEventListener`, после того как вы произойдет событий `deviceready`. Более не требуется вызывать никакой другой метод для переопределения поведения кнопки back.

## Поддерживаемые платформы

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Windows Phone 7 и 8

## Краткий пример

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Развернутый пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

Событие возникает, когда пользователь нажимает кнопку меню.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Подробности

Применение обработчик событий переопределяет поведение кнопки меню по умолчанию.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   Amazon Fire ОС
*   Android
*   BlackBerry 10

## Быстрый пример

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Полный пример

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

Событие возникает, когда пользователь нажимает кнопку Поиск на Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## Подробная информация

Если необходимо переопределить поведение по умолчанию поиск кнопки на Android вы можете зарегистрировать прослушиватель событий для события «searchbutton».

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   Андроид

## Быстрый пример

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Полный пример

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

Событие возникает, когда пользователь нажимает кнопку вызова start.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## Подробная информация

Если необходимо переопределить поведение по умолчанию начала вызова вы можете зарегистрировать прослушиватель событий для `startcallbutton` событие.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   BlackBerry 10

## Быстрый пример

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Полный пример

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

Это событие вызывается, когда пользователь нажимает кнопку вызова.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## Подробная информация

Событие переопределяет поведение по умолчанию конца вызова.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   BlackBerry 10

## Быстрый пример

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## Полный пример

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

Событие возникает, когда пользователь нажимает кнопку уменьшения громкости.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## Подробная информация

Если необходимо переопределить по умолчанию громкости поведение вы можете зарегистрировать прослушиватель событий для `volumedownbutton` событие.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   BlackBerry 10

## Быстрый пример

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## Полный пример

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

Событие возникает, когда пользователь нажимает том вверх по кнопке.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## Подробная информация

Если необходимо переопределить по умолчанию громкости поведение вы можете зарегистрировать прослушиватель событий для `volumeupbutton` событие.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   BlackBerry 10

## Быстрый пример

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## Полный пример

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
