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