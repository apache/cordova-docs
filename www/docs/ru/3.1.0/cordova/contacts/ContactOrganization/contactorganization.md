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

# ContactOrganization

Содержит `Contact` свойства объекта в Организации.

## Свойства

*   **pref**: набор `true` Если `ContactOrganization` содержит значение предпочтительный для пользователя. *(логический)*

*   **тип**: строка, указывающая тип поля это, *дома* например. _(DOMString)

*   **имя**: название организации. *(DOMString)*

*   **Отдел**: Отдел контракт работает для. *(DOMString)*

*   **название**: название контакта в Организации. *(DOMString)*

## Подробная информация

`ContactOrganization`Объект сохраняет свойства контакта Организации. A `Contact` объект хранит один или более `ContactOrganization` объектов в массиве.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
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
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
                }
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
    

## Причуды Android 2.X

*   **pref**: не поддерживается устройствами Android 2.X, возвращая`false`.

## Причуды ежевики WebWorks (OS 5.0 и выше)

*   **pref**: не поддерживается на устройствах BlackBerry, возвращая`false`.

*   **тип**: не поддерживается на устройствах BlackBerry, возвращая`null`.

*   **имя**: частично поддерживается. Первый название организации хранится в поле **компания** BlackBerry.

*   **Департамент**: не поддерживается, возвращая`null`.

*   **название**: частично поддерживается. Первый титул организации хранится в поле **название должности** BlackBerry.

## iOS причуды

*   **pref**: не поддерживается на устройствах iOS, возвращая`false`.

*   **тип**: не поддерживается на устройствах iOS, возвращая`null`.

*   **имя**: частично поддерживается. Первый название организации хранится в поле **kABPersonOrganizationProperty** iOS.

*   **Департамент**: частично поддерживается. Имя первого отдела хранится в поле **kABPersonDepartmentProperty** iOS.

*   **название**: частично поддерживается. Первый титул хранится в поле **kABPersonJobTitleProperty** iOS.