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