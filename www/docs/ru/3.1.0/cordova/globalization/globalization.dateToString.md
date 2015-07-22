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