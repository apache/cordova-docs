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

# <a href="Contact/contact.html">Контакт</a>ы

> `contacts`Объект предоставляет доступ к базе данных контактов устройства.

**Важных конфиденциальности Примечание:** Сбор и использование данных контактов поднимает вопросы, важные конфиденциальности. Политика конфиденциальности вашего приложения должна обсудить, как приложение использует контактные данные и является ли она совместно с другими сторонами. <a href="Contact/contact.html">Контакт</a>ная информация считается конфиденциальной, потому что он показывает людей, с которыми взаимодействует человек. Таким образом в дополнение к политике конфиденциальности вашего приложения, настоятельно рекомендуется точно в срок уведомления до вашего приложения доступ или используя контактные данные (если операционной системы устройства не так уже). Это уведомление должно обеспечивать ту же информацию, отметили выше, а также получения разрешения пользователя (например, путем представления выбора **OK** и **Нет, спасибо**). Обратите внимание, что некоторые торговые площадки app может потребоваться приложению уведомлять just-in-time и получить разрешение от пользователя до доступе к контактным данным. Четкие и легко к понимать пользовательский опыт, окружающие использование контактных данных поможет избежать недоразумений и предполагаемых злоупотреблений контактных данных. Для получения дополнительной информации пожалуйста, смотрите в руководстве конфиденциальности.

## Методы

*   <a href="contacts.create.html">contacts.create</a>
*   <a href="contacts.find.html">contacts.find</a>

## Аргументы

*   <a href="parameters/contactFields.html">contactFields</a>
*   <a href="parameters/contactSuccess.html">contactSuccess</a>
*   <a href="parameters/contactError.html">contactError</a>
*   <a href="parameters/contactFindOptions.html">contactFindOptions</a>

## Объекты

*   Contact
*   <a href="ContactName/contactname.html">ContactName</a>
*   <a href="ContactField/contactfield.html">ContactField</a>
*   <a href="ContactAddress/contactaddress.html">ContactAddress</a>
*   <a href="ContactOrganization/contactorganization.html">ContactOrganization</a>
*   <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>
*   <a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>

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