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

> Кордова события жизненного цикла.

## Типы событий

*   deviceready
*   Пауза
*   резюме
*   онлайн
*   автономном режиме
*   backbutton
*   batterycritical
*   batterylow
*   batterystatus
*   menubutton
*   searchButton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Доступ к функции

Начиная с версии 3.0, состояние аккумулятора Cordova реализует и другие устройства уровня API как *плагины*. Доступ ко всем событиям, не связанные с статус батареи включены по умолчанию. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы включить или отключить аккумулятор события:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   iOS (в`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   Tizen (в`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Ссылка: [манифест приложения для Tizen веб-приложения][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


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


# Пауза

Событие возникает, когда приложение находится в фоновом режиме.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Подробная информация

`pause`Событие возникает, когда родной платформе ставит приложения в фоновом режиме, как правило, когда пользователь переключается на другое приложение.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

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

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

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


# онлайн

Это событие возникает, когда приложение выходит в онлайн, и устройство становится подключен к Интернету.

    document.addEventListener("online", yourCallbackFunction, false);
    

## Подробная информация

`online`Событие возникает, когда ранее несвязанных устройство получает связь сети, чтобы разрешить приложению доступ к Интернету. Он опирается на ту же информацию, подключение API и пожары, когда значение `connection.type` становится`NONE`.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   Tizen
*   ОС Windows 8

## Быстрый пример

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS причуды

Во время первоначального запуска первая `online` событий (если применимо) занимает по меньшей мере второе огонь, до которой `connection.type` является`UNKNOWN`.

## Windows Phone 7 причуды

Когда заработает в эмуляторе, `connection.status` всегда является неизвестным, так что это событие будет *не* огонь.

## Windows Phone 8 причуды

Эмулятор сообщает тип подключения как `Cellular` , которая не меняется, поэтому события будет *не* огонь.


# автономном режиме

Событие возникает, когда приложение переходит в автономный режим, и устройство не подключено к сети Интернет.

    document.addEventListener("offline", yourCallbackFunction, false);
    

## Подробная информация

`offline`Событие возникает, когда ранее подключенное устройство теряет подключение к сети, так что приложение больше не может получить доступ к Интернет. Он опирается на ту же информацию, подключение API и применяется при `connection.type` изменяется от `NONE` в любое значение.

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   Tizen
*   ОС Windows 8

## Быстрый пример

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
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
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS причуды

Во время первоначального запуска первый автономный событие (если применимо) принимает по крайней мере второй на огонь.

## Windows Phone 7 причуды

Когда заработает в эмуляторе, `connection.status` всегда является неизвестным, так это событие не *не* огонь.

## Windows Phone 8 причуды

Эмулятор сообщает тип подключения как `Cellular` , которая не меняется, поэтому событие не *не* огонь.


# backbutton

Событие возникает, когда пользователь нажимает кнопку "назад".

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Подробная информация

Чтобы переопределить поведение по умолчанию кнопки back, зарегистрируйте прослушиватель событий для `backbutton` событий, обычно путем вызова `document.addEventListener` после того как вы получите `deviceready` событие. Это уже не нужно любой другой метод для переопределения поведения кнопки back.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   Windows Phone 7 и 8

## Быстрый пример

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Полный пример

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


# batterycritical

Событие возникает, когда батарея достигла критического уровня порога.

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## Подробная информация

Событие возникает, когда процент заряда батареи достиг порога почти полной разрядки батарей. Значение конкретного устройства.

`batterycritical`Обработчику передается объект, содержащий два свойства:

*   **уровень**: процент заряда батареи (0-100). *(Число)*

*   **isPlugged**: логическое значение, указывающее, является ли устройство подключено дюйма *(Boolean)*

Приложения обычно должны использовать `window.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   iOS
*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   Tizen

## Быстрый пример

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>
    
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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterylow

Событие возникает, когда батареи достигает низкого уровня порога.

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## Подробная информация

Событие возникает, когда процент заряда батареи достигает низкого заряда батареи порог, значение конкретного устройства.

`batterylow`Обработчику передается объект, содержащий два свойства:

*   **уровень**: процент заряда батареи (0-100). *(Число)*

*   **isPlugged**: логическое значение, указывающее, является ли устройство подключено дюйма *(Boolean)*

Приложения обычно должны использовать `document.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   iOS
*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   Tizen

## Быстрый пример

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
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
            window.addEventListener("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterystatus

Событие возникает, когда есть изменения в состояние батареи.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## Подробная информация

Это событие возникает при изменении процент заряда батареи по крайней мере на 1%, или если устройство подключен или отключен от сети.

Обработчик статуса батареи передается объект, содержащий два свойства:

*   **уровень**: процент заряда батареи (0-100). *(Число)*

*   **isPlugged**: логическое значение, указывающее, является ли устройство подключено дюйма *(Boolean)*

Приложения обычно должны использовать `window.addEventListener` прикрепить прослушиватель событий после `deviceready` пожаров события.

## Поддерживаемые платформы

*   iOS
*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   Windows Phone 7 и 8
*   Tizen

## Windows Phone 7 и 8 причуды

Windows Phone 7 не обеспечивает родной API, чтобы определить уровень заряда батареи, так что `level` свойство недоступно. `isPlugged`Параметр *это* поддерживает.

## Быстрый пример

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
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

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)

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


# searchButton

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

*   WebWorks ежевики (OS 5.0 и выше)

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

*   WebWorks ежевики (OS 5.0 и выше)

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

*   WebWorks ежевики (OS 5.0 и выше)

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

*   WebWorks ежевики (OS 5.0 и выше)

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
