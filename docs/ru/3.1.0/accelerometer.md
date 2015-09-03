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


# Accelerometer

> Отслеживание движения устройства в направлении по осям *x*, *y* и *z*.

## Методы

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## Аргументы

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## Объекты (только для чтения)

*   Acceleration

## Доступ к расширениям

Начиная с версии 3.0 Cordova реализует интерфейсы API как *plugins*. Используйте команду CLI `plugin`, описанные в интерфейс командной строки, чтобы добавить или удалить расширения для проекта:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

Эти команды применяются для всех платформ, но имеют отличия конфигурации для платформ описанных ниже:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="Accelerometer">
            <param name="android-package" value="org.apache.cordova.AccelListener" />
        </feature>
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Accelerometer">
            <param name="blackberry-package" value="org.apache.cordova.accelerometer.Accelerometer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="org.apache.cordova" required="true" version="1.0.0" />
        

*   iOS (в`config.xml`)
    
        <feature name="Accelerometer">
            <param name="ios-package" value="CDVAccelerometer" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Ссылка: [Application Manifest for Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# accelerometer.getCurrentAcceleration

Возвращает текущее ускорение вдоль осей *x*, *y* и *z*.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

## Описание

Акселерометр это датчик движения, который отслеживает изменение (*delta*) в движении по отношению к текущей ориентации устройства, в трех измерениях вдоль осей *x*, *y* и *z*.

Эти значения ускорения возвращается функций обратного вызова `accelerometerSuccess`.

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
    

## Особенности iOS

*   iOS не поддерживает автоматическое обновление текущего ускорение.

*   Вы должны самостоятельно отслеживать изменение ускорение и считывать данные в учетом интервалов времени.

*   Таким образом функция `getCurrentAcceleration` возвращает последнее значение, полученное из вызова `watchAccelerometer`.


# accelerometer.watchAcceleration

Возвращяет ускорение вдоль осей *x*, *y* и *z* в определенный момент времени.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

## Описание

Акселерометр это датчик движения, который отслеживает изменение (delta) в движении относительно текущей позиции. Акселерометр может отслеживать 3D перемещения по *x*, *y* и *z* осям.

Метод `accelerometer.watchAcceleration` извлекает текущий объект `Acceleration` в определенные промежутки времени, и выполняет функцию обратного вызова `accelerometerSuccess`. Задает интервал в миллисекундах через параметр `frequency` объекта `acceleratorOptions`.

Идентификатор watchID ссылается на акселерометр может использоваться с `accelerometer.clearWatch` чтобы остановить отслеживание акселерометра.

## Поддерживаемые платформы

*   Андроид
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
    
    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    

## Развернутый пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchAcceleration`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the acceleration
        //
        function startWatch() {
    
            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    
        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                                'Acceleration Y: ' + acceleration.y         + '<br />' +
                                'Acceleration Z: ' + acceleration.z         + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
      </body>
    </html>
    

## Особенности iOS

API вызывает функцию обратного вызова с интервалом, но имеет ограничение по частоте запросов устройства в промежутке между 40 мс и 1000 мс. Например если вы запрашиваете интервал 3 секунды, (3000 мс), API запрашивает данные от устройства каждую секунду, но функция обратного вызова будет срабатывать только каждые 3 секунды.


# accelerometer.clearWatch

Перестать отслеживать изменения объекта `Acceleration`, на который ссылается параметр `watchID`.

    navigator.accelerometer.clearWatch(watchID);
    

*   **watchID**: идентификатор, возвращяемый `accelerometer.watchAcceleration`.

## Поддерживаемые платформы

*   Android
*   BlackBerry WebWorks (OS 5.0 или выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   Windows 8

## Краткий пример

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    

## Развернутый пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchAcceleration`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the acceleration
        //
        function startWatch() {
    
            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    
        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
    
            element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                'Acceleration Y: ' + acceleration.y + '<br />' +
                                'Acceleration Z: ' + acceleration.z + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
            <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>


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


# accelerometerSuccess

Функция обратного вызова onSuccess, предоставляет доступ к данным объекта `Acceleration`.

    function(acceleration) {
        // Do something
    }
    

## Параметры

*   **значений**: ускорение в определенный момент времени. (Ускорение)

## Пример

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };


# accelerometerError

Функция обратного вызова в случае возникновения ошибки.

    function() {
        // Handle the error
    }


# accelerometerOptions

Необязательный параметр, используется для конфигурации значений получаемых от акселерометра.

## Параметры

*   **frequency**: частота обновленя данных получаемых из объекта `Acceleration` в миллисекундах. *(Число)* (По умолчанию: 10000)
