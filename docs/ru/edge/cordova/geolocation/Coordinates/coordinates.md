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

# Координаты

Набор свойств, которые описывают географические координаты позиции.

## Свойства

*   **Широта**: Широта в десятичных градусах. *(Число)*

*   **Долгота**: Долгота в десятичных градусах. *(Число)*

*   **Высота**: высота позиции в метрах над эллипсоидом. *(Число)*

*   **точность**: уровень точности координат широты и долготы в метрах. *(Число)*

*   **altitudeAccuracy**: уровень точности координат высоты в метрах. *(Число)*

*   **заголовок**: направление движения, указанный в градусах, считая по часовой стрелке относительно истинного севера. *(Число)*

*   **скорость**: Текущая скорость земли устройства, указанного в метрах в секунду. *(Число)*

## Описание

`Coordinates`Объект присоединен к `Position` объект, который доступен для обратного вызова функций в запросы для текущей позиции.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback
    //
    var onError = function() {
        alert('onError!');
    };
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Display `Position` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
    
            div.innerHTML = 'Latitude: '             + position.coords.latitude         + '<br/>' +
                            'Longitude: '            + position.coords.longitude        + '<br/>' +
                            'Altitude: '             + position.coords.altitude         + '<br/>' +
                            'Accuracy: '             + position.coords.accuracy         + '<br/>' +
                            'Altitude Accuracy: '    + position.coords.altitudeAccuracy + '<br/>' +
                            'Heading: '              + position.coords.heading          + '<br/>' +
                            'Speed: '                + position.coords.speed            + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    

## Андроид причуды

**altitudeAccuracy**: не поддерживается Android устройств, возвращая`null`.