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

# Acceleration

Содержит данные полученные от акселерометра на определенный момент времени.

## Параметры

*   **x**: величина ускорение по оси x. (в м/с ^ 2) *(Число)*
*   **y**: величина ускорение по оси y. (в м/с ^ 2) *(Число)*
*   **z**: величина ускорение по оси z. (в м/с ^ 2) *(Число)*
*   **timestamp**: временая метка в миллисекундах. *(DOMTimeStamp)*

## Описание

Объект `Acceleration` заполняется и возвращает любой из методов `Acceleration` API. Значения величин ускорение включают эффект гравитации (9,81 м/с ^ 2), так что когда устройство находится горизонтально экраном вверх, возвращаемые значения *x*, *y*, и *z* должны быть ``, `` и `9,81`.

## Поддерживаемые платформы

*   Android
*   BlackBerry WebWorks (OS 5.0 или выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   Windows 8

## Краткий пример

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## Развернутый пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>