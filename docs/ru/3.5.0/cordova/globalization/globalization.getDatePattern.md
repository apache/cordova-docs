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