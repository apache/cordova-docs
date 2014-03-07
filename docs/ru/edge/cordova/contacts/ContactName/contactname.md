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

# ContactName

Содержит различные виды информации о `Contact` имя объекта.

## Свойства

*   **Формат**: полное имя контакта. *(DOMString)*

*   **familyName**: семья имя контакта. *(DOMString)*

*   **givenName**: имя контакта. *(DOMString)*

*   **отчество**: отчество контакта. *(DOMString)*

*   **honorificPrefix**: контакта префикс (например, *г-н* или *д-р*) *(DOMString)*

*   **honorificSuffix**: контакта суффикс (например, *эсквайр*). *(DOMString)*

## Подробная информация

`ContactName`Объект сохраняет свойства имени контакта.

## Поддерживаемые платформы

*   Android 2.X
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i ++) {
                alert("Formatted: " + contacts[i].name.formatted       + "\n" +
                    "Family Name: " + contacts[i].name.familyName      + "\n" +
                    "Given Name: "  + contacts[i].name.givenName       + "\n" +
                    "Middle Name: " + contacts[i].name.middleName      + "\n" +
                    "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
                    "Prefix: "      + contacts[i].name.honorificPrefix);
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Андроид причуды

*   **Формат**: частично поддерживается и только для чтения. Возвращает объединение `honorificPrefix` , `givenName` , `middleName` , `familyName` , и`honorificSuffix`.

## Причуды ежевики WebWorks (OS 5.0 и выше)

*   **Формат**: частично поддерживается. Возвращает сцепление BlackBerry полей **firstName** и **lastName** .

*   **familyName**: поддерживается. Хранится в поле **«Фамилия»** BlackBerry.

*   **givenName**: поддерживается. Хранится в поле **firstName** ежевики.

*   **отчество**: не поддерживается, возвращая`null`.

*   **honorificPrefix**: не поддерживается, возвращая`null`.

*   **honorificSuffix**: не поддерживается, возвращая`null`.

## iOS причуды

*   **Формат**: частично поддерживается. Возвращает iOS составного имени, но только для чтения.