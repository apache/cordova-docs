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


# Глобализация

Получает информацию и выполняет операции, специфичные для пользователя язык и часовой пояс.

## Объекты

*   GlobalizationError

## Методы

*   globalization.getPreferredLanguage
*   globalization.getLocaleName
*   globalization.dateToString
*   globalization.stringToDate
*   globalization.getDatePattern
*   globalization.getDateNames
*   globalization.isDayLightSavingsTime
*   globalization.getFirstDayOfWeek
*   globalization.numberToString
*   globalization.stringToNumber
*   globalization.getNumberPattern
*   globalization.getCurrencyPattern

## Область действия переменной

`globalization`Объект является потомком `navigator` объект, и поэтому имеет глобальную область действия.

    // The global globalization object
    var globalization = navigator.globalization;
    

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Android (в `app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# globalization.getPreferredLanguage

Получите идентификатор строки для текущего языка клиента.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## Описание

Возвращает строку идентификатора языка для `successCallback` с `properties` объект в качестве параметра. Этот объект должен иметь `value` свойство с `String` значение.

Если есть ошибка, как язык, то `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.UNKNOWN\_ERROR`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, это должно показать всплывающее диалоговое окно с текстом `language: English` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getPreferredLanguage Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">Click for language</button>
      </body>
    </html>
    

## Windows Phone 8 причуды

*   Возвращает двухбуквенный код ISO 639-1 для текущего языка.


# globalization.getLocaleName

Получите идентификатор строки для текущей локали клиента.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## Описание

Возвращает строку идентификатора языкового стандарта для `successCallback` с `properties` объект в качестве параметра. Этот объект должен иметь `value` свойство с `String` значение.

Если есть ошибка получения языкового стандарта, то `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.UNKNOWN\_ERROR`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, это выводит всплывающее диалоговое окно с текстом`locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getLocaleName Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">Click for locale</button>
      </body>
    </html>
    

## Windows Phone 8 причуды

*   Возвращает двухбуквенный код, определенный в формате ISO 3166 для текущей страны или региона.


# globalization.dateToString

Возвращает дату в формате строки согласно локали клиента и часовой пояс.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Описание

Возвращает отформатированную дату `String` через `value` свойств, доступных из объекта, переданного в качестве параметра для`successCallback`.

Входящий `date` параметр должен иметь тип`Date`.

Если есть ошибка форматирования даты, то `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.FORMATTING\_ERROR`.

`options`Параметр является необязательным, и его значения по умолчанию являются:

    {formatLength:'short', selector:'date and time'}
    

`options.formatLength`Может быть `short` , `medium` , `long` , или`full`.

`options.selector`Может быть `date` , `time` или`date and time`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Если браузер настроен `en\_US` языка, это выводит всплывающее диалоговое окно с текстом похож на `date: 9/25/2012 4:21PM` с использованием параметров по умолчанию:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 причуды

*   `formatLength`Вариант поддерживает только `short` и `full` значения.


# globalization.stringToDate

Анализирует дату форматированы в виде строки, по словам клиента предпочтения пользователя и календарь с помощью часовой пояс клиента и возвращает соответствующий объект date.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Описание

Возвращает дату в успех обратного вызова с `properties` объект в качестве параметра. Этот объект должен иметь следующие свойства:

*   **год**: год четыре цифры. *(Число)*

*   **месяц**: на месяц от (0-11). *(Число)*

*   **день**: день от (1-31). *(Число)*

*   **Отдел**: отдел от (0-23). *(Число)*

*   **минута**: минута от (0-59). *(Число)*

*   **второй**: второй от (0-59). *(Число)*

*   **миллисекунды**: миллисекунд (от 0-999), не доступны на всех платформах. *(Число)*

Входящий `dateString` параметр должен иметь тип`String`.

`options`Параметр является необязательным и по умолчанию имеет следующие значения:

    {formatLength:'short', selector:'date and time'}
    

`options.formatLength`Может быть `short` , `medium` , `long` , или `full` . `options.selector`Может быть `date` , `time` или`date and
time`.

Если есть ошибка при разборе строки даты, то `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.PARSING\_ERROR`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, это выводит всплывающее диалоговое окно с текстом похож на `month:8 day:25 year:2012` . Обратите внимание, что целое число является один месяц меньше, чем строка, как целое число месяца представляет индекс массива.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 причуды

*   `formatLength`Вариант поддерживает только `short` и `full` значения.


# globalization.getDatePattern

Возвращает строку шаблона для форматирования и разбора даты согласно предпочтениям пользователя клиента.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Описание

Возвращает шаблон для `successCallback` . Объект, переданный в качестве параметра содержит следующие свойства:

*   **шаблон**: Дата и время шаблон для форматирования и разбора дат. Шаблоны следуют технического стандарта Unicode #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(Строка)*

*   **Часовой пояс**: сокращенное название часового пояса на клиентском компьютере. *(Строка)*

*   **utc_offset**: текущий разница в секундах между часовой пояс и всеобщее скоординированное время клиента. *(Число)*

*   **dst_offset**: текущее смещение на летнее время в секундах между клиента не-летнее время часовой пояс и летнее клиента сохранение в часовой пояс. *(Число)*

Если есть ошибка получения шаблона, `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.PATTERN\_ERROR`.

`options`Параметр является необязательным и по умолчанию имеет следующие значения:

    {formatLength:'short', selector:'date and time'}
    

`options.formatLength` может быть `short`, `medium`, `long` или `full`. `options.selector`Может быть `date` , `time` или`date and
time`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, в этом примере отображается всплывающее диалоговое окно с текстом, таких как `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 причуды

*   `formatLength`Поддерживает только `short` и `full` значения.

*   `pattern`Для `date and time` шаблона возвращает только полное datetime формат.

*   `timezone`Возвращает имя полный часового пояса.

*   `dst_offset`Свойство не поддерживается, и всегда возвращает нуль.


# globalization.getDateNames

Возвращает массив, содержащий имена месяцев и дней недели, в зависимости от предпочтений пользователя и календарь клиента.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Описание

Возвращает массив имен для `successCallback` с `properties` объект в качестве параметра. Этот объект содержит `value` свойство с `Array` из `String` значения. Имена функций массива, начиная с либо в первый месяц, в год или в первый день недели, в зависимости от выбранного варианта.

Если есть ошибка получения имена, а затем `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.UNKNOWN\_ERROR`.

`options`Параметр является необязательным, и его значения по умолчанию являются:

    {type:'wide', item:'months'}
    

Значение `options.type` может быть `narrow` или`wide`.

Значение `options.item` может быть `months` или`days`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, в этом примере отображается серия двенадцати всплывающих диалоговых окон, одной в месяц, с текстом похож на `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>


# globalization.isDayLightSavingsTime

Указывает, является ли летнее время в силе для заданной даты, с использованием клиента часовой пояс и календаря.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Описание

Указывает, является ли или не летнее время в силе до `successCallback` с `properties` объект в качестве параметра. Этот объект должен иметь `dst` свойство с `Boolean` значение. A `true` значение указывает, что летнее время в силе для заданной даты и `false` показывает, что это не.

Входящий параметр `date` должен иметь тип`Date`.

Если произошла ошибка при чтении Дата, то `errorCallback` выполняет. Ожидаемый код ошибки`GlobalizationError.UNKNOWN\_ERROR`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

В течение лета и если браузер настроен на часовой пояс, летнее время с поддержкой, это должно отображать всплывающее диалоговое окно с текстом похож на `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>


# globalization.getFirstDayOfWeek

Возвращает первый день недели согласно календарь предпочтения пользователя и клиента.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## Описание

Дни недели нумеруются от 1, где 1 считается воскресенье. Возвращает день в `successCallback` с `properties` объект в качестве параметра. Этот объект должен иметь `value` свойство с `Number` значение.

Если есть ошибка получения шаблона, то свойство `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.UNKNOWN\_ERROR`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, это выводит всплывающее диалоговое окно с текстом похож на`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getFirstDayOfWeek Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">Click for first day of week</button>
      </body>
    </html>


# globalization.numberToString

Возвращает число, которое форматируется как строка согласно предпочтениям пользователя клиента.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## Описание

Возвращает форматируемую строку номер для `successCallback` с `properties` объект в качестве параметра. Этот объект должен иметь `value` свойство с `String` значение.

Если есть ошибка форматирования числа, то `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.FORMATTING\_ERROR`.

`options`Параметр является необязательным, и его значения по умолчанию являются:

    {type:'decimal'}
    

`options.type` может быть 'decimal', 'percent' или 'currency'.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, это выводит всплывающее диалоговое окно с текстом похож на `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>numberToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for number</button>
      </body>
    </html>


# globalization.stringToNumber

Анализирует число, которое форматируется как строка согласно предпочтениям пользователя клиента и возвращает соответствующий номер.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Описание

Возвращает номер для `successCallback` с `properties` объект в качестве параметра. Этот объект должен иметь `value` свойство с `Number` значение.

Если есть ошибка при разборе номер строки, а затем `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.PARSING\_ERROR`.

`options`Параметр является необязательным и по умолчанию имеет следующие значения:

    {type:'decimal'}
    

`options.type`Может быть `decimal` , `percent` , или`currency`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, это должно отображать всплывающее диалоговое окно с текстом похож на `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToNumber Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.stringToNumber(
            '1234.56',
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for parsed number</button>
      </body>
    </html>


# globalization.getNumberPattern

Возвращает строку шаблона для форматирования и разбора чисел согласно предпочтениям пользователя клиента.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Описание

Возвращает шаблон для `successCallback` с `properties` объект в качестве параметра. Этот объект содержит следующие свойства:

*   **шаблон**: шаблон номера для форматирования и разбора чисел. Шаблоны следуют технического стандарта Unicode #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(Строка)*

*   **символ**: символ для использования при форматировании и синтаксическом разборе, таких как символ валюты и процентов. *(Строка)*

*   **фракция**: количество дробных разрядов для использования при синтаксического анализа и форматирования чисел. *(Число)*

*   **округления**: округление увеличить для использования при синтаксического анализа и форматирования. *(Число)*

*   **позитивные**: символ для положительных чисел, когда синтаксический анализ и форматирование. *(Строка)*

*   **отрицательные**: символ для отрицательных чисел, когда синтаксический анализ и форматирование. *(Строка)*

*   **десятичные**: десятичный символ использовать для синтаксического анализа и форматирования. *(Строка)*

*   **Группировка**: символ группировки использовать для синтаксического анализа и форматирования. *(Строка)*

Если есть ошибка получения шаблона, то свойство `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.PATTERN\_ERROR`.

`options`Параметр является необязательным, и значения по умолчанию являются:

    {type:'decimal'}
    

`options.type` может быть `decimal`, `percent` или `currency`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 8

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт, это должно отображать всплывающее диалоговое окно с текстом аналогичные результаты, которые следуют за:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

Результаты:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 причуды

*   `pattern`Свойство не поддерживается и retuens является пустой строкой.

*   `fraction`Свойство не поддерживается, и возвращает ноль.


# globalization.getCurrencyPattern

Возвращает строку шаблона для форматирования и синтаксического анализа значения валюты клиента предпочтения пользователя и код валюты ISO 4217.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Описание

Возвращает шаблон для `successCallback` с `properties` объект в качестве параметра. Этот объект должен содержать следующие свойства:

*   **шаблон**: валюты шаблон для форматирования и синтаксического анализа значения валюты. Шаблоны следуют технического стандарта Unicode #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(Строка)*

*   **код**: код валюты ISO 4217 для шаблона. *(Строка)*

*   **фракция**: количество дробных разрядов для использования при синтаксического анализа и форматирования валюты. *(Число)*

*   **округления**: округление увеличить для использования при синтаксического анализа и форматирования. *(Число)*

*   **десятичные**: десятичный символ использовать для синтаксического анализа и форматирования. *(Строка)*

*   **Группировка**: символ группировки использовать для синтаксического анализа и форматирования. *(Строка)*

Входящий `currencyCode` параметр должен быть `String` одной из ISO 4217 кодов валют, например «USD».

Если есть ошибка получения шаблона, то свойство `errorCallback` выполняет с `GlobalizationError` объект в качестве параметра. Ожидаемый код ошибки`GlobalizationError.FORMATTING\_ERROR`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS

## Быстрый пример

Когда браузер имеет значение `en\_US` языковой стандарт и выбранной валюты долларов США, этот пример отображает всплывающее диалоговое окно с текстом аналогичные результаты, которые следуют за:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

Ожидаемые результаты:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>


# GlobalizationError

Объект, представляющий ошибку от глобализации API.

## Свойства

*   **код**: Один из следующих кодов, представляющих тип ошибки *(Число)* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **сообщение**: текстовое сообщение, которое включает пояснение об ошибке и/или детали *(String)*

## Описание

Этот объект создается и населенная Cordova и возвращается обратный вызов в случае ошибки.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS

## Быстрый пример

Когда следующий ошибка обратного вызова выполняется, он отображает всплывающее диалоговое окно с текстом похож на `code: 3` и`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## Полный пример

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>
