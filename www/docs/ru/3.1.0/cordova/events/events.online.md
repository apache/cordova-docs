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