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