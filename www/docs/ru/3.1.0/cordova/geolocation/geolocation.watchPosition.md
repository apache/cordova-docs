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

# geolocation.watchPosition

Часы для изменения в текущее положение устройства.

    var watchId = navigator.geolocation.watchPosition(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>,
                                                      [<a href="parameters/geolocationError.html">geolocationError</a>],
                                                      [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);
    

## Параметры

*   **<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>**: обратный вызов, который передается в текущей позиции.

*   **<a href="parameters/geolocationError.html">geolocationError</a>**: (необязательно) обратного вызова, который выполняется при возникновении ошибки.

*   **<a href="parameters/geolocation.options.html">geolocationOptions</a>**: параметры (необязательно) географического расположения.

## Возвращает

*   **Строка**: Возвращает идентификатор часы, ссылается на часы позиции интервала. Идентификатор часы должны использоваться с `<a href="geolocation.clearWatch.html">geolocation.clearWatch</a>` чтобы остановить просмотр изменений в позиции.

## Описание

`geolocation.watchPosition`Это асинхронные функции. Возвращает текущую позицию устройства при обнаружении изменения в позиции. Когда устройство получает новое местоположение, `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` обратного вызова выполняется с `Position` объект в качестве параметра. Если есть ошибка, `<a href="parameters/geolocationError.html">geolocationError</a>` обратного вызова выполняется с `<a href="PositionError/positionError.html">PositionError</a>` объект в качестве параметра.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a <a href="PositionError/positionError.html">PositionError</a> object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a <a href="PositionError/positionError.html">PositionError</a> object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>