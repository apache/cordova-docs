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