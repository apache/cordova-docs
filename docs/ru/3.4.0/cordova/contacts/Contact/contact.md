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

# Контакт

Содержит свойства, которые описывают контакта, например личных или деловых контактов пользователя.

## Свойства

*   **ID**: глобальный уникальный идентификатор. *(DOMString)*

*   **displayName**: имя этого контакта, подходящую для отображения для конечных пользователей. *(DOMString)*

*   **имя**: объект, содержащий все компоненты имя лица. *(ContactName)*

*   **прозвище**: случайные имя, чтобы адрес контакта. *(DOMString)*

*   **phoneNumbers**: массив все контактные телефонные номера. *(ContactField[])*

*   **письма**: массив адресов электронной почты всех контактов. *(ContactField[])*

*   **адреса**: массив адресов всех контактов. *(ContactAddress[])*

*   **IMS**: массив адресов IM все контакты. *(ContactField[])*

*   **организаций**: массив всех контактов организаций. *(ContactOrganization[])*

*   **день рождения**: день рождения контакта. *(Дата)*

*   **Примечание**: Примечание о контакте. *(DOMString)*

*   **фотографии**: массив фотографии контакта. *(ContactField[])*

*   **категории**: массив все определяемые пользователем категории, связанные с контактом. *(ContactField[])*

*   **URL-адреса**: массив веб-страниц, связанных с контактом. *(ContactField[])*

## Методы

*   **клон**: возвращает новый `Contact` объект, являющийся глубокой копией вызывающего объекта с `id` свойству присвоено значение`null`.

*   **Удалить**: удаляет контакта из базы данных контактов устройства, в противном случае выполняет обратный вызов ошибка с `ContactError` объект.

*   **сохранить**: сохраняет новый контакт в базе данных контактов устройства или обновления существующего контакта, если контакт с тем же **идентификатором** уже существует.

## Подробная информация

`Contact`Представляет объект пользователя контакта. Контакты можно созданы, хранятся или удалены из базы данных контактов устройства. Контакты могут также быть получены (индивидуально или навалом) из базы данных путем вызова `contacts.find` метод.

**Примечание:** На каждой платформе устройства поддерживаются не все поля контактов, перечисленных выше. Пожалуйста, проверьте раздел *причуды* каждой платформы для деталей.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Сохранить быстрый пример

    function onSuccess(contact) {
        alert("Save Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save to device
    contact.save(onSuccess,onError);
    

## Быстрый пример клон

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## Удалить быстрый пример

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

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
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new ContactName();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;
    
            // save
            contact.save(onSaveSuccess,onSaveError);
    
            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);
    
            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }
    
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Причуды Android 2.X

*   **категории**: не поддерживается на устройствах Android 2.X, возвращая`null`.

## Причуды ежевики WebWorks (OS 5.0 и выше)

*   **ID**: поддерживается. Присвоенный устройства, при сохранении контакта.

*   **displayName**: поддерживается. Хранится в поле **user1** ежевики.

*   **прозвище**: не поддерживается, возвращая`null`.

*   **phoneNumbers**: частично поддерживается. Телефонные номера хранятся в BlackBerry поля **homePhone1** и **homePhone2** , если *тип* является 'дом', **workPhone1** и **workPhone2** если *тип* 'работа', **мобильный телефон** , если *тип* является 'Мобильный', **faxPhone** , если *тип* является «Факс», **pagerPhone** , если *тип* является «пейджера» и **otherPhone** , если *тип* является ни один из выше.

*   **письма**: частично поддерживается. Первые три адреса хранятся в BlackBerry **email1**, **email2**и **email3** полей, соответственно.

*   **адреса**: частично поддерживается. Первый и второй адреса хранятся в полях BlackBerry **homeAddress** и **workAddress** соответственно.

*   **IMS**: не поддерживается, возвращая`null`.

*   **организаций**: частично поддерживается. **Имя** и **титул** первой организации хранятся в полях **компании** и **название** BlackBerry, соответственно.

*   **фотографии**: частично поддерживается. Поддерживается один эскиз фото. Чтобы установить фотографию контакта, передайте или base64-формата изображения, или URL-адрес, указывающий на изображение. Изображение масштабируется перед сохранением в базе данных контактов ежевики. Контакт Фото возвращается как изображения в кодировке base64.

*   **категории**: частично поддерживается. Поддерживаются только *личной* и *деловой* категории.

*   **URL-адреса**: частично поддерживается. Первый URL-адрес хранится в поле **веб-страницы** ежевики.

## iOS причуды

*   **displayName**: не поддерживается на iOS, возвращая `null` Если нет ни `ContactName` указан, в этом случае он возвращает имя составного, **прозвище** или `""` , соответственно.

*   **день рождения**: необходимо ввести как JavaScript `Date` объекта, таким же образом, он возвращается.

*   **фотографии**: Возвращает URL-адрес файла изображения, которое хранится во временном каталоге приложения. Содержание временного каталога удаляются при выходе из приложения.

*   **категории**: это свойство в настоящее время не поддерживается, возвращая`null`.

## Windows Phone 7 и 8 причуды

*   **displayName**: при создании контакта, значение, предоставленное для параметра отображаемое имя отличается от отображаемого имени получены при поиске контакта.

*   **URL-адреса**: при создании контакта, пользователям ввода и сохранять более чем одного веб-адрес, но доступен только один доступен при поиске контакта.

*   **phoneNumbers**: *pref* параметр не поддерживается. *Тип* не поддерживается в операции *поиска* . Только один `phoneNumber` для каждого *типа* допускается.

*   **письма**: *pref* параметр не поддерживается. Товары для дома и личной ссылки же запись электронной почты. Разрешена только одна запись для каждого *типа*.

*   **адреса**: поддерживает только работе и дома/личного *типа*. Ссылка на *тип* домашних и личных же записи адреса. Разрешена только одна запись для каждого *типа*.

*   **организаций**: только один разрешено и не поддерживает атрибуты *pref*, *тип*и *Департамента* .

*   **Примечание**: не поддерживается, возвращая`null`.

*   **IMS**: не поддерживается, возвращая`null`.

*   **день рождения**: не поддерживается, возвращая`null`.

*   **категории**: не поддерживается, возвращая`null`.