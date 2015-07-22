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