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


# Компас

> Получает направление, указывая устройство.

## Методы

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (устаревший)
*   compass.clearWatchFilter (устаревший)

## Аргументы

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   iOS (в`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# compass.getCurrentHeading

Получите текущий курс.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
    

## Описание

Компас является датчик, который определяет направление или заголовок, что устройство указал, обычно из верхней части устройства. Он измеряет направление в градусах от 0 до 359,99 градусов, где 0 — север.

Курс информация возвращается через `CompassHeading` объект с помощью `compassSuccess` функции обратного вызова.

## Поддерживаемые платформы

*   Андроид
*   Ежевика 10
*   iOS
*   Tizen
*   Windows Phone 7 и 8 (при наличии в аппаратной)
*   ОС Windows 8

## Быстрый пример

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    
    function onError(error) {
        alert('CompassError: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>


# compass.watchHeading

На регулярные промежутки времени получите компаса направление в градусах.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## Описание

Компас является датчик, который определяет направление или заголовок, что устройство является острый. Он измеряет направление в градусах от 0 до 359,99 градусов.

`compass.watchHeading`Получает текущий заголовок устройства в регулярном интервале. Каждый раз, когда извлекается заголовок, `headingSuccess` выполняется функция обратного вызова. Задайте интервал в миллисекундах через `frequency` параметр в `compassOptions` объект.

Идентификатор возвращаемой смотреть ссылается на компас смотреть интервал. Часы, идентификатор может быть использован с `compass.clearWatch` чтобы остановить смотреть компас.

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
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
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
                navigator.compass.clearWatch(watchID);
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
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
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

В iOS `compass.watchHeading` также можете получить заголовок текущего устройства, когда она меняется на указанное число градусов. Каждый раз изменения заголовка на указанное число градусов или больше, `headingSuccess` выполняет функции обратного вызова. Укажите степень изменения через `filter` параметр в `compassOptions` объект. Снимите часы как обычно, передав идентификатор возвращаемый часы, чтобы `compass.clearWatch` . Эта функция заменяет ранее разрозненные, iOS только `watchHeadingFilter` и `clearWatchFilter` функции, которые были удалены в версии 1.6.

Только один `watchHeading` может быть в силе в одно время в iOS. Если `watchHeading` использует фильтр, вызов `getCurrentHeading` или `watchHeading` для указания изменения заголовка используется существующее значение фильтра. Наблюдая изменения заголовка с помощью фильтра является более эффективным, чем с интервалами времени.


# compass.clearWatch

Перестать смотреть компас, на которую ссылается параметр ID часы.

    navigator.compass.clearWatch(watchID);
    

*   **watchID**: возвращенный идентификатор`compass.watchHeading`.

## Поддерживаемые платформы

*   Андроид
*   Ежевика 10
*   iOS
*   Tizen
*   Windows Phone 7 и 8 (при наличии в аппаратной)
*   ОС Windows 8

## Быстрый пример

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
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
                navigator.compass.clearWatch(watchID);
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
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>


# compass.watchHeadingFilter

Больше не поддерживается начиная с 1.6, см `compass.watchHeading` для эквивалентной функциональности.


# compass.clearWatchFilter

Больше не поддерживается начиная с 1.6. См.`compass.clearWatch`.


# compassSuccess

Функция обратного вызова onSuccess, предоставляет информацию курс через `compassHeading` объект.

    function(heading) {
        // Do something
    }
    

## Параметры

*   **заголовок**: сведения заголовка. *(compassHeading)*

## Пример

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };


# compassError

Функция обратного вызова в onError для компас функций.

## Пример

    function(CompassError) {
        // Handle the error
    }


# compassOptions

Необязательный параметр для настройки поиска компаса.

## Параметры

*   **Частота**: как часто получить курс в миллисекундах. *(Число)* (По умолчанию: 100)

*   **Фильтр**: изменения в градусах, требуемых для инициирования обратного вызова успех watchHeading. *(Число)*

Андроид причуды

---

*   `filter`не поддерживается.

## Tizen причуды

*   `filter`не поддерживается.

## Windows Phone 7 и 8 причуды

*   `filter`не поддерживается.


# compassHeading

A `CompassHeading` объект возвращается к `compassSuccess` функции обратного вызова.

## Свойства

*   **magneticHeading**: направление в градусах от 0-359,99 в один момент времени. *(Число)*

*   **trueHeading**: заголовок относительно географического Северного полюса в градусах 0-359,99 в один момент времени. Отрицательное значение указывает, что истинный заголовок не может быть определено. *(Число)*

*   **headingAccuracy**: отклонение в градусах между сообщил заголовок и заголовок верно. *(Число)*

*   **отметка времени**: время, на котором был определен этот заголовок. *(в миллисекундах)*

## Описание

`CompassHeading`Объект возвращается к `compassSuccess` функции обратного вызова.

## Андроид причуды

*   `trueHeading`не поддерживается, но сообщает то же значение`magneticHeading`

*   `headingAccuracy`Это всегда 0 потому, что нет никакой разницы между `magneticHeading` и`trueHeading`.

## iOS причуды

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Для устройств iOS 4 и выше, заголовок факторов в текущей ориентации устройства, не со ссылкой на свою абсолютную позицию для приложений, который поддерживает что ориентация.


# CompassError

A `CompassError` объект возвращается к `compassError` функции обратного вызова при возникновении ошибки.

## Свойства

*   **код**: один из кодов стандартных ошибок, перечисленные ниже.

## Константы

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## Описание

Когда возникает ошибка, `CompassError` объект передается как параметр `compassError` функции обратного вызова.
