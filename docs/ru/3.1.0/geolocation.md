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


# Географическое положение

> `geolocation`Объект предоставляет доступ к данным местонахождение на основе GPS-датчик устройства или выведен из сети сигналов.

`Geolocation`содержит сведения о местоположении устройства, такие как широты и долготы. Общие источники информации о местонахождении включают глобальной системы позиционирования (GPS) и местоположение, выведено из сети сигналов, таких как IP-адрес, RFID, WiFi и Bluetooth MAC-адреса и идентификаторы базовых станций сотовой GSM/CDMA. Нет никакой гарантии, что API возвращает фактическое местоположение устройства.

Этот API основан на [Спецификации W3C Geolocation API][1]и выполняется только на устройствах, которые уже не обеспечивают реализацию.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Важных конфиденциальности Примечание:** Сбор и использование данных геопозиционирования поднимает вопросы, важные конфиденциальности. Политика конфиденциальности вашего приложения должна обсудить, как приложение использует данные геопозиционирования, ли она совместно с другими сторонами и уровень точности данных (например, грубый, тонкий, почтовый индекс уровня, т.д.). Географическое расположение данных обычно считается конфиденциальной, потому что она может выявить местонахождение лица и если хранится, история его или ее путешествия. Таким образом в дополнение к политике конфиденциальности вашего приложения, настоятельно рекомендуется точно в срок уведомления до вашего приложения, доступ к данным геопозиционирования (если операционной системы устройства не так уже). Это уведомление должно обеспечивать ту же информацию, отметили выше, а также получения разрешения пользователя (например, путем представления выбора **OK** и **Нет, спасибо**). Для получения дополнительной информации пожалуйста, смотрите в руководстве конфиденциальности.

## Методы

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Аргументы

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Объекты (только для чтения)

*   Position
*   PositionError
*   Coordinates

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   iOS (в`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# geolocation.getCurrentPosition

Возвращает текущую позицию устройства как `Position` объект.

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);
    

## Параметры

*   **geolocationSuccess**: обратный вызов, который передается в текущей позиции.

*   **geolocationError**: *(необязательно)* обратного вызова, который выполняется при возникновении ошибки.

*   **geolocationOptions**: *(необязательно)* параметры геопозиционирования.

## Описание

`geolocation.getCurrentPosition`Это асинхронные функции. Возвращает текущее положение устройства для `geolocationSuccess` обратного вызова с `Position` объект в качестве параметра. Если есть ошибка, `geolocationError` обратного вызова передается `PositionError` объект.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
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
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
        }
    
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# geolocation.watchPosition

Часы для изменения в текущее положение устройства.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);
    

## Параметры

*   **geolocationSuccess**: обратный вызов, который передается в текущей позиции.

*   **geolocationError**: (необязательно) обратного вызова, который выполняется при возникновении ошибки.

*   **geolocationOptions**: параметры (необязательно) географического расположения.

## Возвращает

*   **Строка**: Возвращает идентификатор часы, ссылается на часы позиции интервала. Идентификатор часы должны использоваться с `geolocation.clearWatch` чтобы остановить просмотр изменений в позиции.

## Описание

`geolocation.watchPosition`Это асинхронные функции. Возвращает текущую позицию устройства при обнаружении изменения в позиции. Когда устройство получает новое местоположение, `geolocationSuccess` обратного вызова выполняется с `Position` объект в качестве параметра. Если есть ошибка, `geolocationError` обратного вызова выполняется с `PositionError` объект в качестве параметра.

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
    
    // onError Callback receives a PositionError object
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
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
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
    
            // onError Callback receives a PositionError object
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


# geolocation.clearWatch

Остановить просмотр для изменения местоположения устройства ссылается `watchID` параметр.

    navigator.geolocation.clearWatch(watchID);
    

## Параметры

*   **watchID**: идентификатор `watchPosition` интервал, чтобы очистить. (Строка)

## Описание

`geolocation.clearWatch`Останавливается наблюдать изменения местоположения устройства, сняв `geolocation.watchPosition` ссылается`watchID`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    / / Опции: наблюдать за изменениями в положении и использовать наиболее / / точная позиция доступный метод приобретения.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
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
    
        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
              alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>


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


# Позиция

Содержит `Position` координаты и отметки времени, созданные API геопозиционирования.

## Свойства

*   **CoOrds**: набор географических координат. *(Координаты)*

*   **штамп времени**: штамп времени создания для `coords` . *(Дата)*

## Описание

`Position`И населенная Cordova и объект возвращается пользователю через функцию обратного вызова.

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
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '          + position.coords.latitude         + '<br />' +
                                'Longitude: '         + position.coords.longitude        + '<br />' +
                                'Altitude: '          + position.coords.altitude         + '<br />' +
                                'Accuracy: '          + position.coords.accuracy         + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: '           + position.coords.heading          + '<br />' +
                                'Speed: '             + position.coords.speed            + '<br />' +
                                'Timestamp: '         + position.timestamp               + '<br />';
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# PositionError

A `PositionError` объект передается в `geolocationError` обратного вызова при возникновении ошибки.

## Свойства

*   **код**: один из кодов стандартных ошибок, перечисленные ниже.

*   **сообщение**: сообщение об ошибке с подробными сведениями об ошибке.

## Константы

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Описание

`PositionError`Объект передается в `geolocationError` функцию обратного вызова при возникновении ошибки с geolocation.

### `PositionError.PERMISSION_DENIED`

Возвращается, если пользователь не позволят приложению получить сведения о положении. Это зависит от платформы.

### `PositionError.POSITION_UNAVAILABLE`

Возвращается, если устройство не удается получить позиции. В целом это означает, что прибор не подключен к сети или не удается получить Спутниковое исправить.

### `PositionError.TIMEOUT`

Возвращается, если устройство не удается получить позицию в течение времени, указанного в `geolocationOptions` ' `timeout` Свойства. При использовании с `geolocation.watchPosition` , эта ошибка может быть передан `geolocationError` обратного вызова каждый `timeout` миллисекунд.


# geolocationSuccess

Функция обратного вызова пользователя, которая выполняется, когда географическое положение становится доступным (при вызове из `geolocation.getCurrentPosition` ), или когда положение изменяется (при вызове из`geolocation.watchPosition`).

    function(position) {
        // Do something
    }
    

## Параметры

*   **позиция**: географическое положение, возвращенной устройством. *(Положение)*

## Пример

    function geolocationSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }


# geolocationError

Функция обратного вызова пользователя, которая выполняется, когда есть ошибка для функций геолокации.

    function(error) {
        // Handle the error
    }
    

## Параметры

*   **Ошибка**: ошибки, возвращенной устройством. *(PositionError)*


# geolocationOptions

Необязательные параметры для настройки поиска географического расположения`Position`.

    {maximumAge: 3000, тайм-аут: 5000, enableHighAccuracy: true};
    

## Параметры

*   **enableHighAccuracy**: предоставляет подсказку, что приложению требуются наилучшие результаты. По умолчанию устройство пытается получить `Position` с использованием методов на основе сети. Установка этого свойства значение `true` указывает среде использовать более точные методы, например спутникового позиционирования. *(Логическое значение)*

*   **время ожидания**: максимальная длина времени (в миллисекундах), которое разрешено пройти от вызова `geolocation.getCurrentPosition` или `geolocation.watchPosition` до соответствующего `geolocationSuccess` выполняет обратный вызов. Если `geolocationSuccess` обратного вызова не вызывается в течение этого времени, `geolocationError` обратного вызова передается `PositionError.TIMEOUT` код ошибки. (Обратите внимание, что при использовании в сочетании с `geolocation.watchPosition` , `geolocationError` обратный вызов может быть вызван на интервале каждые `timeout` миллисекунд!) *(Число)*

*   **maximumAge**: принять кэшированное положение, возраст которых не превышает указанного времени в миллисекундах. *(Число)*

## Андроид причуды

Android 2.x эмуляторы не возвращать результат геолокации, если `enableHighAccuracy` параметр имеет значение`true`.
