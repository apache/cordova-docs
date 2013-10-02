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

# device.model

Получите имя модели устройства.

    var string = device.model;
    

## Описание

`device.model`Возвращает имя устройства модели или продукта. Значение устанавливается производителем устройства и могут отличаться в разных версиях того же продукта.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    / / Android: Nexus один возвращает «Страсть» (Nexus один кодовое название) / / Motorola Droid возвращает «полевки» / / BlackBerry: факел 9800 возвращает «9800» / / iOS: для iPad Mini, возвращает iPad2, 5; iPhone 5 является iPhone 5,1. См http://theiphonewiki.com/wiki/index.php?title=Models / / var модель = device.model;
    

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
    

## Андроид причуды

*   Получает [имя продукта][1] , а не [имя модели][2], которое часто является именем кода производства. Например, Nexus один из них возвращает `Passion` , и возвращает Motorola дроидов`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Tizen причуды

*   Возвращает модель устройства, назначенного вендором, например,`TIZEN`

## Windows Phone 7 и 8 причуды

*   Возвращает модель устройства, указанной заводом-изготовителем. Например Samsung фокус возвращается`SGH-i917`.