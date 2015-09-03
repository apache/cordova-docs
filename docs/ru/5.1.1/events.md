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
*   pause
*   resume
*   backbutton
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## События добавленные [cordova-plugin-battery-status][1]

 [1]: https://github.com/apache/cordova-plugin-battery-status/blob/master/README.md

*   batterycritical
*   batterylow
*   batterystatus

## События добавленные [cordova-plugin-network-information][2]

 [2]: https://github.com/apache/cordova-plugin-network-information/blob/master/README.md

*   online
*   offline


# deviceready

Событие возникает, когда Cordova загружена полностью.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Подробности

Это событие имеет важное значение для любого приложения. Оно сигнализирует, что Cordova API для устройств загружены и готовы для работы.

Кордова состоит из двух наборов исходных кодов: родной язык платформы и JavaScript. В то время как основной код загружается, отображается экран загрузки. Однако JavaScript загружает только после того, как загружен DOM. Это означает, что веб-приложение потенциально может вызвать JavaScript функцию Cordova, прежде тем как соответствующий машинный код будет доступен.

Событие `deviceready` возникает после полной загрузки Cordova. Когда событие происходит, вы можете безопасно вызывать API Cordova. Приложения обычно устанавливают обработчик события с помощью `document.addEventListener` после загрузки DOM HTML-документа.

Поведение события `deviceready` несколько отличается от других событий. Любой обработчик событий, зарегистрированных после того событие `deviceready` произошло, вызывается немедленно.

## Поддерживаемые платформы

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 8
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


# pause

Событие возникает, когда приложение переводят в фоновом режиме.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Подробности

Событие `pause` возникает, когда платформа переводит приложения в фоновом режиме, как правило, когда пользователь переключается на другое приложение.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `deviceready`.

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


# resume

Событие возникает, когда приложение восстанавливается из фонового режима.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Подробности

Событие `resume` возникает, когда платформа переводит приложения из фонового режима.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `deviceready`.

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

Любых интерактивных функций, вызываемых из обработкика события `pause` выполнять позже, когда приложение возобновляет свою работу, как сигнализируется событием `resume`. К этому относятся оповещения, вызовы `console.log()` и все вызовы из плагинов или Cordova API, которые идут через Objective-C.

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


# backbutton

Событие возникает, когда пользователь нажимает кнопку "назад".

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Подробности

Чтобы переопределить поведение по умолчанию кнопки back, зарегистрируйте обработчик события `backbutton`, обычно путем вызова `document.addEventListener`, после того как вы произойдет событий `deviceready`. Более не требуется вызывать никакой другой метод для переопределения поведения кнопки back.

## Поддерживаемые платформы

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Windows Phone 8

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

Применение обработчика события переопределяет поведение кнопки меню по умолчанию.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `deviceready`.

## Поддерживаемые платформы

*   Amazon Fire OS
*   Android
*   BlackBerry 10

## Краткий пример

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Развернутый пример

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
    

## Подробности

Если необходимо переопределить поведение по умолчанию кнопки поиск на Android вы можете зарегистрировать обработчик события для события «searchbutton».

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `deviceready`.

## Поддерживаемые платформы

*   Android

## Краткий пример

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Развернутый пример

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

Событие возникает, когда пользователь нажимает кнопку начала звонка.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## Подробности

Если необходимо переопределить поведение по умолчанию начала вызова вы можете зарегистрировать обработчик для события `startcallbutton`.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `deviceready`.

## Поддерживаемые платформы

*   BlackBerry 10

## Краткий пример

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Развернутый пример

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

Это событие вызывается, когда пользователь нажимает кнопку окончания звонка.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## Подробности

Событие переопределяет поведение по умолчанию при окончании звонка.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `deviceready`.

## Поддерживаемые платформы

*   BlackBerry 10

## Краткий пример

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## Развернутый пример

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
    

## Подробности

Если необходимо переопределить поведение по умолчанию кнопки уменьшения громкости вы можете зарегистрировать обработчик для события `volumedownbutton`.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `deviceready`.

## Поддерживаемые платформы

*   BlackBerry 10
*   Android

## Краткий пример

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## Развернутый пример

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

Событие возникает, когда пользователь нажимает кнопку повышения громкости.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## Подробности

Если необходимо переопределить поведение по умолчанию кнопки увличения громкости вы можете зарегистрировать обработчик для события `volumeupbutton`.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `deviceready`.

## Поддерживаемые платформы

*   BlackBerry 10
*   Android

## Краткий пример

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## Развернутый пример

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
