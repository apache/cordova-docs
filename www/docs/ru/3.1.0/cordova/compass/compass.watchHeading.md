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

# compass.watchHeading

На регулярные промежутки времени получите компаса направление в градусах.

    var watchID = navigator.compass.watchHeading(<a href="parameters/compassSuccess.html">compassSuccess</a>, <a href="parameters/compassError.html">compassError</a>, [<a href="parameters/compassOptions.html">compassOptions</a>]);
    

## Описание

<a href="compass.html">Компас</a> является датчик, который определяет направление или заголовок, что устройство является острый. Он измеряет направление в градусах от 0 до 359,99 градусов.

`compass.watchHeading`Получает текущий заголовок устройства в регулярном интервале. Каждый раз, когда извлекается заголовок, `headingSuccess` выполняется функция обратного вызова. Задайте интервал в миллисекундах через `frequency` параметр в `<a href="parameters/compassOptions.html">compassOptions</a>` объект.

Идентификатор возвращаемой смотреть ссылается на компас смотреть интервал. Часы, идентификатор может быть использован с `<a href="compass.clearWatch.html">compass.clearWatch</a>` чтобы остановить смотреть компас.

## Поддерживаемые платформы

*   Андроид
*   Ежевика 10
*   iOS
*   Tizen
*   Windows Phone 7 и 8 (при наличии в аппаратной)
*   ОС Windows 8

## Быстрый пример

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(<a href="parameters/compassError.html">compassError</a>) {
        alert('Compass error: ' + <a href="parameters/compassError.html">compassError</a>.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.<a href="compass.clearWatch.html">compass.clearWatch</a>(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(<a href="parameters/compassError.html">compassError</a>) {
            alert('Compass error: ' + <a href="parameters/compassError.html">compassError</a>.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS причуды

В iOS `compass.watchHeading` также можете получить заголовок текущего устройства, когда она меняется на указанное число градусов. Каждый раз изменения заголовка на указанное число градусов или больше, `headingSuccess` выполняет функции обратного вызова. Укажите степень изменения через `filter` параметр в `<a href="parameters/compassOptions.html">compassOptions</a>` объект. Снимите часы как обычно, передав идентификатор возвращаемый часы, чтобы `<a href="compass.clearWatch.html">compass.clearWatch</a>` . Эта функция заменяет ранее разрозненные, iOS только `watchHeadingFilter` и `clearWatchFilter` функции, которые были удалены в версии 1.6.

Только один `watchHeading` может быть в силе в одно время в iOS. Если `watchHeading` использует фильтр, вызов `getCurrentHeading` или `watchHeading` для указания изменения заголовка используется существующее значение фильтра. Наблюдая изменения заголовка с помощью фильтра является более эффективным, чем с интервалами времени.