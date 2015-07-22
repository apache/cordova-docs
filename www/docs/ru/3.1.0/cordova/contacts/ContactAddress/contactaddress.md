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

# ContactAddress

Содержит свойства адреса для `Contact` объект.

## Свойства

*   **pref**: набор `true` Если `ContactAddress` содержит значение предпочтительный для пользователя. *(логический)*

*   **тип**: строка, указывающая тип поля, *дом* , например. *(DOMString)*

*   **Формат**: полный адрес отформатирован для отображения. *(DOMString)*

*   **streetAddress**: полный почтовый адрес. *(DOMString)*

*   **населенный пункт**: города или населенного пункта. *(DOMString)*

*   **регион**: государства или региона. *(DOMString)*

*   **postalCode**: почтовый индекс или почтовый код. *(DOMString)*

*   **страна**: название страны. *(DOMString)*

## Подробная информация

`ContactAddress`Объект хранит свойства одного адреса контакта. A `Contact` объект может включать более чем один адрес в `ContactAddress[]` массив.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // display the address information for all contacts
    
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
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
            // find all contacts
            var options = new ContactFindOptions();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            // display the address information for all contacts
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].addresses.length; j++) {
                    alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                          "Type: "           + contacts[i].addresses[j].type          + "\n" +
                          "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                          "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                          "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                          "Region: "         + contacts[i].addresses[j].region        + "\n" +
                          "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                          "Country: "        + contacts[i].addresses[j].country);
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

*   **pref**: не поддерживается, возвращая `false` на устройствах Android 2.X.

## Причуды ежевики WebWorks (OS 5.0 и выше)

*   **pref**: не поддерживается на устройствах BlackBerry, возвращая`false`.

*   **тип**: частично поддерживается. Может храниться только один *работы* и *домой* тип адреса каждого контакта.

*   **Формат**: частично поддерживается. Возвращает объединение всех полей адреса BlackBerry.

*   **streetAddress**: поддерживается. Возвращает объединение BlackBerry **Адрес1** и **address2** поля адреса.

*   **населенный пункт**: поддерживается. Хранится в поле адрес **город** ежевики.

*   **регион**: поддерживается. Хранится в поле адреса **stateProvince** ежевики.

*   **postalCode**: поддерживается. Хранится в поле адреса **zipPostal** BlackBerry.

*   **страна**: поддерживается.

## iOS причуды

*   **pref**: не поддерживается на устройствах iOS, возвращая`false`.

*   **Формат**: в настоящее время не поддерживается.