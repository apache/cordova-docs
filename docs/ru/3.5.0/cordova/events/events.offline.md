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