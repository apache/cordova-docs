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

# accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>

Возвращает текущее ускорение вдоль осей *x*, *y* и *z*.

    navigator.accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>(<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>, <a href="parameters/accelerometerError.html">accelerometerError</a>);
    

## Описание

Акселерометр это датчик движения, который отслеживает изменение (*delta*) в движении по отношению к текущей ориентации устройства, в трех измерениях вдоль осей *x*, *y* и *z*.

Эти значения ускорения возвращается функций обратного вызова `<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>`.

## Поддерживаемые платформы

*   Android
*   BlackBerry WebWorks (OS 5.0 или выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   Windows 8

## Краткий пример

    function onSuccess(acceleration) {
        alert('<a href="acceleration/acceleration.html">Acceleration</a> X: ' + acceleration.x + '\n' +
              '<a href="acceleration/acceleration.html">Acceleration</a> Y: ' + acceleration.y + '\n' +
              '<a href="acceleration/acceleration.html">Acceleration</a> Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError);
    

## Развернутый пример

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="acceleration/acceleration.html">Acceleration</a> <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrent<a href="acceleration/acceleration.html">Acceleration</a>(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('<a href="acceleration/acceleration.html">Acceleration</a> X: ' + acceleration.x + '\n' +
                  '<a href="acceleration/acceleration.html">Acceleration</a> Y: ' + acceleration.y + '\n' +
                  '<a href="acceleration/acceleration.html">Acceleration</a> Z: ' + acceleration.z + '\n' +
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
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>getCurrent<a href="acceleration/acceleration.html">Acceleration</a></p>
      </body>
    </html>
    

## Особенности iOS

*   iOS не поддерживает автоматическое обновление текущего ускорение.

*   Вы должны самостоятельно отслеживать изменение ускорение и считывать данные в учетом интервалов времени.

*   Таким образом функция `getCurrent<a href="acceleration/acceleration.html">Acceleration</a>` возвращает последнее значение, полученное из вызова `watch<a href="accelerometer.html">Accelerometer</a>`.