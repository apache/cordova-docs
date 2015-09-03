---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---


# Контакты

> `contacts`Объект предоставляет доступ к базе данных контактов устройства.

**Важных конфиденциальности Примечание:** Сбор и использование данных контактов поднимает вопросы, важные конфиденциальности. Политика конфиденциальности вашего приложения должна обсудить, как приложение использует контактные данные и является ли она совместно с другими сторонами. Контактная информация считается конфиденциальной, потому что он показывает людей, с которыми взаимодействует человек. Таким образом в дополнение к политике конфиденциальности вашего приложения, настоятельно рекомендуется точно в срок уведомления до вашего приложения доступ или используя контактные данные (если операционной системы устройства не так уже). Это уведомление должно обеспечивать ту же информацию, отметили выше, а также получения разрешения пользователя (например, путем представления выбора **OK** и **Нет, спасибо**). Обратите внимание, что некоторые торговые площадки app может потребоваться приложению уведомлять just-in-time и получить разрешение от пользователя до доступе к контактным данным. Четкие и легко к понимать пользовательский опыт, окружающие использование контактных данных поможет избежать недоразумений и предполагаемых злоупотреблений контактных данных. Для получения дополнительной информации пожалуйста, смотрите в руководстве конфиденциальности.

## Методы

*   contacts.create
*   contacts.find

## Аргументы

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Объекты

*   Contact
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   iOS (в`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# contacts.create

Возвращает новый объект контакта.

    var contact = navigator.contacts.create(properties);
    

## Описание

`contacts.create`Метод является синхронным и возвращает новый объект `Contact` объект.

Этот метод не сохраняет объект контакта в базе данных контактов устройства, для которого необходимо вызвать `Contact.save` метод.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8

## Быстрый пример

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

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
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "This contact has a note.";
            console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>


# contacts.find

Запрашивает базу данных контактов устройства и возвращает один или несколько `Contact` объектов, каждый из которых содержит указанные поля.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Описание

`contacts.find`Метод выполняется асинхронно, запрашивая базу контактов устройства и возвращая массив `Contact` объектов. Полученные объекты передаются в `contactSuccess` функции обратного вызова, указанный параметром **contactSuccess** .

Параметр **contactFields** указывает поля, чтобы использоваться в качестве квалификатора Поиск, и только те результаты, которые передаются функции обратного вызова **contactSuccess** . Нулевой длины **contactFields** параметр является недопустимым и приводит к `ContactError.INVALID_ARGUMENT_ERROR` . Значение **contactFields** `"*"` возвращает все поля контактов.

**ContactFindOptions.filter** строка может использоваться как фильтр поиска при запросах к базе данных контактов. Если, без учета регистра, матч частичное значение применяется к каждому полю, указанному в параметре **contactFields** . Если есть совпадение для *любого* из указанных полей, возвращается контакт.

## Параметры

*   **contactFields**: контакт поля для использования в качестве квалификатора поиска. Полученный `Contact` объект только функции значения для этих полей. *(DOMString[])* [Требуется]

*   **contactSuccess**: успех функция обратного вызова вызывается с контактами вернулся из базы данных. [Требуется]

*   **contactError**: ошибка функции обратного вызова, вызывается при возникновении ошибки. [Опционально]

*   **contactFindOptions**: параметры для фильтрации контактов поиска. [Опционально]

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Полный пример

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
                    options.filter = "Bob";
                    var fields = ["displayName", "name"];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }
    
                // onSuccess: Get a snapshot of the current contacts
    
                function onSuccess(contacts) {
                    for (var i = 0; i < contacts.length; i++) {
                        console.log("Display Name = " + contacts[i].displayName);
                    }
                }
    
                // onError: Failed to get the contacts
    
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


# ContactField

Поддерживает общие поля в `Contact` объект. Некоторые свойства хранятся в виде `ContactField` объекты включают адреса электронной почты, Номера телефонов и URL-адреса.

## Свойства

*   **тип**: строка, указывающая тип поля это, *дома* например. *(DOMString)*

*   **значение**: значение поля, например номер телефона или электронной почты адрес. *(DOMString)*

*   **pref**: набор `true` Если `ContactField` содержит значение предпочтительный для пользователя. *(логический)*

## Подробная информация

`ContactField`Объект является многократно используемый компонент, что представляет родово контактные поля. Каждый `ContactField` содержит объект `value` , `type` , и `pref` Свойства. A `Contact` объект хранит несколько свойств в `ContactField[]` массивов, такие как номера телефонов, адреса электронной почты.

В большинстве случаев существует не заранее определенные значения для `ContactField` **тип** атрибута объекта. Например номер телефона можно указать значения **типа** *дома*, *работы*, *мобильных*, *iPhone*или любого другого значения, Поддерживаемые платформы конкретного устройства базы данных контактов. Однако, для `Contact` **фотографии** поля, **тип** поля указывает формат возвращаемого изображения: **URL-адрес,** когда атрибут **value** содержит URL-адрес изображения фото или *base64* , если **значение** содержит строку изображения в кодировке base64. 

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

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
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in ContactField[]
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new ContactFindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                // display phone numbers
                for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                    alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                          "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                          "Preferred: " + contacts[i].phoneNumbers[j].pref);
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
    

## Андроид причуды

*   **pref**: не поддерживается, возвращая`false`.

## Причуды ежевики WebWorks (OS 5.0 и выше)

*   **тип**: частично поддерживается. Используется для телефонных номеров.

*   **значение**: поддерживается.

*   **pref**: не поддерживается, возвращая`false`.

## iOS причуды

*   **pref**: не поддерживается, возвращая`false`.


# ContactFindOptions

Содержит свойства, которые могут использоваться для фильтрации результатов `contacts.find` операции.

## Свойства

*   **Фильтр**: строка поиска, используется для поиска контактов. *(DOMString)* (По умолчанию:`""`)

*   **несколько**: определяет, если операция поиска возвращает несколько контактов. *(Логический)* (По умолчанию:`false`)

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // success callback
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };
    
    // error callback
    function onError(contactError) {
        alert('onError!');
    };
    
    // specify contact search criteria
    var options = new ContactFindOptions();
        options.filter="";        // empty search string returns all contacts
        options.multiple=true;    // return multiple results
        filter = ["displayName"]; // return contact.displayName field
    
        // find contacts
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
            // specify contact search criteria
            var options = new ContactFindOptions();
            options.filter = "";      // empty search string returns all contacts
            options.multiple = true;  // return multiple results
            filter = ["displayName"]; // return contact.displayName field
    
            // find contacts
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
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


# ContactError

A `ContactError` объект передается в `contactError` обратного вызова при возникновении ошибки.

## Свойства

*   **код**: один из кодов стандартных ошибок, перечисленные ниже.

## Константы

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## Описание

`ContactError`Объект возвращается пользователю через `contactError` функцию обратного вызова при возникновении ошибки.


# contactSuccess

Успех функции обратного вызова, который обеспечивает `Contact` массив, обусловленные `contacts.find` операции.

    function(contacts) {
        // Do something
    }
    

## Параметры

*   **Контакты**: контакт массив, результатом операции поиска. *(Контакт)*

## Пример

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }


# contactError

Ошибка функции обратного вызова для контакта функций.

    function(error) {
        // Handle the error
    }


# contactFields

Обязательный параметр для `contacts.find` метод, используемый для указания, какие поля должны быть включены в `Contact` объектов в результате операции поиска.

    [«имя», «phoneNumbers», «письма»]


# contactFindOptions

Необязательный параметр `contacts.find` метод, используемый для фильтрации контактов, возвращаемые из базы данных контактов.

    {фильтр: «», несколько: Правда,};
    

## Параметры

*   **Фильтр**: строка поиска, используемый для фильтрации контактов. *(DOMString)* (По умолчанию:`""`)

*   **несколько**: определяет, если операция поиска возвращает несколько контактов. *(Логический)* (По умолчанию:`false`)
