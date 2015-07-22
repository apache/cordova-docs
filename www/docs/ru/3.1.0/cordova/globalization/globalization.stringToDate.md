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