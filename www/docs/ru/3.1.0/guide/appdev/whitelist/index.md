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

title: Whitelist Путеводитель
---

# Whitelist Путеводитель

## Обзор

Белый список ресурсов является модель безопасности, которая контролирует доступ к внешним сетевым ресурсам, таким как `http://google.com` . Политика безопасности по умолчанию Apache Cordova позволяет получить доступ к любому ресурсу на любой сайт в Интернете. Прежде чем переносить приложение к производству, следует пересмотреть свою whitelist и объявить доступ к определенным сетевым домены и поддомены.

## Спецификация

Домен whitelisting закладывает основу для спецификации [W3C виджет доступа][1] . В спецификации доступа виджет `<access>` элемент используется для объявления доступа к определенным сетевым ресурсам. Apache Cordova расширяет это понятие, чтобы позволить whitelisting отдельных сетевых ресурсов (URL). В будущем Apache Cordova будет аннотация белый список реализаций платформы. Однако в настоящее время каждая платформа реализует свой ресурс или домена whitelisting. Далее в этом документе описаны различия между реализациями платформы.

 [1]: http://www.w3.org/TR/widgets-access/

Общий формат для записи whitelist соответствует спецификации «[шаблону][2]» для Google Chrome упакованных приложений. Ресурсы указываются в URL, но звездочка (*) персонаж может использоваться как «шаблон» в нескольких местах для обозначения «любое значение может пойти здесь». Ниже приводятся конкретные примеры.

 [2]: http://developer.chrome.com/apps/match_patterns.html

## Синтаксис

Доступ ко всем ресурсам на [google.com][3]:

 [3]: http://google.com

    http://google.com/*
    

Доступ ко всем ресурсам в безопасной [google.com][4] ( `https://` ):

 [4]: https://google.com

    HTTPS://Google.com/ *
    

Доступ к конкретным поддомен [maps.google.com][5]:

 [5]: http://maps.google.com

    http://maps.google.com/*
    

Доступ ко всем дочерним доменам на [google.com][3] (например, [mail.google.com][6] и [адресу docs.google.com][7]):

 [6]: http://mail.google.com
 [7]: http://docs.google.com

    http://*.google.com/*
    

Доступ ко всем ресурсам на [www.google.com][8] по пути «/ мобильный»:

 [8]: http://www.google.com

    http://www.google.com/mobile/*
    

Доступ к [google.com][3] на любой протокол (например, HTTP, HTTPS, FTP и т.д):

    *://google.com/*
    

Доступ для всех ресурсов в Интернете (например, [google.com][3] и [developer.mozilla.org][9]):

 [9]: http://developer.mozilla.org

    *
    

## Андроид

### Подробная информация

Whitelisting правила находятся в `res/xml/config.xml` и объявил с элементом`<access origin="..." />`.

Android полностью поддерживает синтаксис "белый список".

### Синтаксис

Доступ к [google.com][3]:

    <access origin="http://google.com/*" />
    

## Ежевика 10

### Подробная информация

Whitelisting правила находятся в `www/config.xml` и объявил с элементом`<access origin="..." />`.

Ежевика 10 обрабатывает символы по-разному чем другие платформы двумя способами:

1) Доступ к XMLHttpRequest содержимому должны быть объявлены явным образом. происхождения = «*» не будут соблюдаться для этот случай использования. Кроме того все веб-безопасности может быть отключена с помощью предпочтение.

2) поддомены = "true" может быть использован вместо «* .domain»

### Синтаксис

Доступ к [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Доступ к [maps.google.com][5]:

    <access origin="http://maps.google.com" subdomains="false" />
    

Доступ ко всем дочерним доменам на [google.com][3]:

    <access origin="http://google.com" subdomains="true" />
    

Доступ ко всем доменам, в том числе `file://` протокол:

    <access origin="*" subdomains="true" />
    

Отключите все веб-безопасности:

    <preference name="websecurity" value="disable" />
    

## iOS

### Подробная информация

Whitelisting правила находятся в `AppName/config.xml` и объявил с элементом`<access origin="..." />`.

iOS полностью поддерживает синтаксис "белый список".

### Изменена 3.1.0:

До версии 3.1.0 Кордова iOS включены некоторые нестандартные расширения схемы whilelisting домена, поддерживаемой другими платформами Cordova. По состоянию на 3.1.0 белый iOS теперь соответствует ресурсов whitelist синтаксис, описанный в верхней части этого документа. Если вы модернизируете от pre-3.1.0, и вы использовали эти расширения, может потребоваться изменить ваш `config.xml` файл для того чтобы продолжать whitelisting тот же набор ресурсов, как раньше.

В частности эти модели должны быть обновлены:

*   « `apache.org` » (не протокол): это будет соответствовать ранее `http` , `https` , `ftp` , и `ftps` протоколы. Изменить на « `*://apache.org/*` » включить все протоколы, или включать строку для каждого протокола, необходимо поддерживать.

*   « `http://apache.*` » (подстановочный знак в конце домена): это будет соответствовать ранее все верхнего-уровня-домены, включая все возможные двухбуквенные ДВУ (но не полезно домены как. co.uk). Включить строку для каждого TLD, который вы фактически контролировать и нуждаются в белый список.

*   « `h*t*://ap*he.o*g` » (подстановочные знаки для случайных недостающие буквы): они больше не поддерживаются; изменения будет включать строку для каждого домена и протоколу что вы на самом деле нужно whitelist.

### Синтаксис

Доступ к [google.com][3]:

    <access origin="http://google.com/*" />
    

## Windows Phone (7 и 8)

Whitelisting правила находятся в `config.xml` и объявил с элементом`<access origin="..." />`.

### Синтаксис

Доступ к [google.com][3]:

    <access origin="http://google.com" />
    

## Tizen

### Подробная информация

Корневой каталог приложения `config.xml` файл определяет правила белый список доменов, используя `<access origin="..." />` элемент. Полный справочник смотрите в [документации Tizen доступ к внешним сетевым ресурсам][10].

 [10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources

### Синтаксис

Доступ к [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Доступ к безопасной [google.com][4] ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

Доступ ко всем дочерним доменам на [google.com][3]:

    <access origin="http://google.com" subdomains="true" />
    

Доступ ко всем доменам, в том числе `file://` протокол:

    <access origin="*" subdomains="true" />