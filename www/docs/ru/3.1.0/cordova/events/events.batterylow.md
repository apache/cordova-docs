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