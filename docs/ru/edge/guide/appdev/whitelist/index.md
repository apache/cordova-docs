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

# Руководство по работе со списком разрешенных доменов

## Обзор

Список разрешенных доменов это модель безопасности, которая контролирует доступ к внешним доменам, например к `http://google.com`. Политика безопасности по умолчанию Apache Cordova позволяет получить доступ к любому сайту. Прежде чем переносить приложение к производству, следует посмотреть на свой список разрешенных доменов и настроить доступ к определенным сетевым доменам и поддоменам.

## Спецификация

Домен whitelisting закладывает основу для спецификации [W3C виджет доступа][1] . В спецификации доступа виджет `<access>` элемент используется для объявления доступа к конкретной сети доменов. В будущем Apache Cordova будет абстракция платформы whitelisting реализаций спецификации W3C виджет доступа. Однако в настоящее время каждой платформы необходимо реализовать свой собственный домен whitelisting.

 [1]: http://www.w3.org/TR/widgets-access/

## Синтаксис

Доступ к [google.com][2]:

 [2]: http://google.com

    http://google.com
    

Доступ по защищенному протоколу к [google.com][3] (`https://`):

 [3]: https://google.com

    https://google.com
    

Доступ к поддомену [maps.google.com][4]:

 [4]: http://maps.google.com

    http://maps.google.com
    

Доступ ко всем дочерним доменам на [google.com][2] (например, [mail.google.com][5] и [адресу docs.google.com][6]):

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

Доступ ко всем доменам (например, [google.com][2] и [developer.mozilla.org][7]):

 [7]: http://developer.mozilla.org

    *
    

## Андроид

### Подробная информация

Белый разрешенных доменов находится в файле `res/xml/config.xml` и объявил через элемент `<access origin="..." />`.

Android полностью поддерживает синтаксис "whitelisting".

### Синтаксис

Доступ к [google.com][2]:

    <access origin="http://google.com" />
    

## Ежевика

### Подробная информация

Whitelisting правила находятся в `www/config.xml` и объявил с элементом`<access uri="..." />`.

Полный справочник смотрите в [документации элемента доступа WebWorks ежевики][8].

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### Синтаксис

Доступ к [google.com][2]:

    <access uri="http://google.com" subdomains="false" />
    

Доступ к [maps.google.com][4]:

    <access uri="http://maps.google.com" subdomains="false" />
    

Доступ ко всем дочерним доменам на [google.com][2]:

    <access uri="http://google.com" subdomains="true" />
    

Доступ ко всем доменам, в том числе `file://` протокол:

    <access uri="*" subdomains="true" />
    

## iOS

### Подробная информация

Whitelisting правила находятся в `AppName/config.xml` и объявил с элементом`<access origin="..." />`.

iOS полностью поддерживает синтаксис "белый список".

**Примечание:** происхождение, указан без протокола, такие как `www.apache.org` вместо `http://www.apache.org` , по умолчанию для всех `http` , `https` , `ftp` , и `ftps` схемы.

### Синтаксис

Подстановочные знаки на iOS ( `*` ) являются более гибкими, чем спецификации [W3C виджет доступа][1] .

Доступ ко всем поддоменов и ДВУ ( `.com` , `.net` , и т.д.):

    *.google.*
    

## Windows Phone (7 и 8)

Whitelisting правила находятся в `config.xml` и объявил с элементом`<access origin="..." />`.

Android полностью поддерживает синтаксис "белый список".

### Синтаксис

Доступ к [google.com][2]:

    <access origin="http://google.com" />
    

## Tizen

### Подробная информация

Корневой каталог приложения `config.xml` файл определяет правила белый список доменов, используя `<access origin="..." />` элемент. Полный справочник, см \[Tizen доступ к внешним сетевым ресурсам\] \[10\].

### Синтаксис

Доступ к [google.com][2]:

    <access origin="http://google.com" subdomains="false" />
    

Доступ к безопасной [google.com][3] ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

Доступ ко всем дочерним доменам на [google.com][2]:

    <access origin="http://google.com" subdomains="true" />
    

Доступ ко всем доменам, в том числе `file://` протокол:

    <access origin="*" subdomains="true" />