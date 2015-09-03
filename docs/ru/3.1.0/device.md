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


# Устройство

> `device`Объект описывает аппаратного и программного обеспечения устройства.

## Свойства

*   device.model
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.name

## Область действия переменной

Поскольку `device` присваивается `window` объект, это неявно в глобальной области.

    // These reference the same `device`
    var phoneModel = window.device.model;
    var phoneModel = device.model;
    

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.device
        $ cordova plugin ls
        [ 'org.apache.cordova.device' ]
        $ cordova plugin rm org.apache.cordova.device
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.Device" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Device">
            <param name="blackberry-package" value="org.apache.cordova.device.Device" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app" required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>read_device_identifying_information</rim:permit>
        </rim:permissions>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
            <Capability Name="ID_CAP_IDENTITY_DEVICE" />
            <Capability Name="ID_CAP_IDENTITY_USER" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][1]

*   Tizen (в`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Ссылка: [манифест приложения для Tizen веб-приложения][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

Получите имя модели устройства.

    var string = device.name;
    

## Описание

`device.name`Возвращает имя устройства модели или продукта. Это значение устанавливается производителем устройства и могут отличаться в разных версиях того же продукта.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## Андроид причуды

*   Получает [имя продукта][1] , а не [имя модели][2], которое часто является именем кода производства. Например, Nexus один из них возвращает `Passion` , и возвращает Motorola дроидов`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Windows Phone 7 и 8 причуды

*   Возвращает модель устройства, указанной заводом-изготовителем. Например Samsung фокус возвращается`SGH-i917`.

## Tizen причуды

*   Возвращает модель устройства, назначенного вендором, например,`TIZEN`


# device.cordova

Получите версию Cordova, работающего на устройстве.

    var string = device.cordova;
    

## Описание

`device.cordova`Возвращает версию Cordova, работающего на устройстве.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    var name = device.cordova;
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


# device.platform

Получите имя устройства операционной системы.

    var string = device.platform;
    

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## Причуды ежевики

Устройства может вернуть номер версии платформы устройства вместо имя платформы. Например Storm2 9550 возвращает значение, таких как`2.13.0.95`.

## Windows Phone 7 причуды

Windows Phone 7 устройства сообщают платформа как`WinCE`.

## Windows Phone 8 причуды

Устройства Windows Phone 8 сообщают платформа как`Win32NT`.


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
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
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


# device.version

Возвращает версию операционной системы.

    var string = device.version;
    

## Поддерживаемые платформы

*   Android 2.1 +
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Краткий пример

    / / Android: Froyo ОС будет возвращать «2.2» / / Eclair OS будет возвращение «2.1», «2.0.1» или «2.0» / / версия также может возвращать обновить уровень «2.1-update1» / / / / BlackBerry: факел 9800, используя OS 6.0 будет вернуть «6.0.0.600» / / / / iPhone: iOS 3.2 возвращает «3.2» / / / / Windows Phone 7: Возвращает номер текущей версии ОС, ex. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

## Развернутый пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
