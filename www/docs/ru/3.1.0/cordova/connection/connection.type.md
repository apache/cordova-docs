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

# connection.type

Проверяет в настоящее время активное сетевое подключение.

## Описание

Это свойство предоставляет быстрый способ для определения состояния подключения устройства сети и тип подключения.

## Поддерживаемые платформы

*   iOS
*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    function checkConnection() {
        var networkState = navigator.connection.type;
    
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
    
        alert('Connection type: ' + states[networkState]);
    }
    
    checkConnection();
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.connection.type Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            checkConnection();
        }
    
            function checkConnection() {
                var networkState = navigator.connection.type;
    
                var states = {};
                states[Connection.UNKNOWN]  = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI]     = 'WiFi connection';
                states[Connection.CELL_2G]  = 'Cell 2G connection';
                states[Connection.CELL_3G]  = 'Cell 3G connection';
                states[Connection.CELL_4G]  = 'Cell 4G connection';
                states[Connection.CELL]     = 'Cell generic connection';
                states[Connection.NONE]     = 'No network connection';
    
                alert('Connection type: ' + states[networkState]);
            }
    
        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>
    

## Изменения API

До Кордова 2.3.0 `Connection` был доступ к объекту через `navigator.network.connection` , после которого оно было изменено на `navigator.connection` в соответствии со спецификацией консорциума W3C. Он все еще доступен в его исходном расположении, но является устаревшим и в конечном итоге будут удалены.

## iOS причуды

*   iOS не может определить тип подключения к сотовой сети. 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Windows Phone причуды

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone не может определить тип подключения к сотовой сети.
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Tizen причуды

*   Tizen может только обнаружить Wi-Fi или сотовой связи. 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.