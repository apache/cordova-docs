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

title: Инструкция по доступу к внешним ресурсам
---

# Инструкция по доступу к внешним ресурсам

Список разрешенных доменов это модель безопасности, которая контролирует доступ во внешние домены, к которому ваше приложение не имеет доступа. Cordova предоставляет настраиваемую политику безопасности для определения, к каким внешним сайтам может быть получен доступ. По умолчанию новые приложения настроены для доступа к любому сайту. Прежде чем переносить приложение для рабочую среду, следует сформулировать список разрешений и разрешить доступ к определенным сетевым доменам и поддоменам.

Для Android и iOS (по состоянию на их версии 4.0) политики безопасности Cordova могут быть расширяемым через инерфейс плагина. Ваше приложение должно использовать [cordova-plugin-whitelist][1], так как он обеспечивает лучшую безопасность и настраиваемость, чем более ранние версии Cordova. Хотя это возможно осуществить свой собственный плагин управления доступом к внешним ресурсам, это не рекомендуется, за исключением случая если ваше приложение имеет весьма специфические требования политики безопасности. Смотрите [cordova-plugin-whitelist][1] за подробностями об использовании и настройке.

 [1]: https://github.com/apache/cordova-plugin-whitelist

Cordova следует спецификации [W3C Доступ виджета][2], которая опирается на элемент `<access>` в файле `config.xml` приложения, чтобы включить сетевой доступ к отдельным доменам. Для проектов которые погалаются на процесс с использованием командной строки, описанный в разделе "[Интерфейс командной строки](../../cli/index.html)", этот файл расположен в корневой папке проекта. В противном случае при использовании пути разработки с использованием платформо-ориентированного кода, места расположения указаны в разделах ниже. (См. различные разделы "[Руководство по поддерживаемым платформам](../../platforms/index.html)" для получения дополнительной информации на каждой платформе.)

 [2]: http://www.w3.org/TR/widgets-access/

В следующих примерах демонстрируется синтаксис `<access>` списка разрешенных ресурсов:

*   Доступ к [google.com][3]:
    
        <access origin="http://google.com" />

*   Доступ по защищенному протоколу к [google.com][4] (`https://`):
    
        <access origin="https://google.com" />

*   Доступ к поддомену [maps.google.com][5]:
    
        <access origin="http://maps.google.com" />

*   Доступ для всех поддоменов для домена [google.com][3], например, [mail.google.com][6] и [docs.google.com][7]:
    
        <access origin="http://*.google.com" />

*   Доступ ко *всем* доменам, например, [google.com][3] и [developer.mozilla.org][8]:
    
        <access origin="*" />
    
    Это значение по умолчанию для вновь созданных проектов CLI.

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

Имейте ввиду что некоторые сайты могут автоматически перенаправить вас со своей домашней страницы на другой URL, например используя протокол HTTPS или на домен специфичный для страны пользователя. Например http://www.google.com будет перенаправлять на использование протокола SSL/TLS по адресу https://www.google.com и затем может перенаправить на оснввании вашего географического расположения, например https://www.google.co.uk. Такие сценарии могут потребовать измененных или дополнительных записей в списке разрешенных доменов по отношению к вашим первоначальным требованиям. Пожалуйста, учитывайте это, когда вы строите ваш список разрешенных доменов.

Обратите внимание, что список разрешенных доменов применяется только к основным WebView Cordova и не применяется к InAppBrowser WebView или при открытии ссылки в веб-браузере системы.

## Список разрешений Amazon Fire OS

Список разрешений расположен в`res/xml/config.xml`.

## Список разрешений Android

Как указано выше см. [cordova-plugin-whitelist][1] для подробностей. Для cordova-android до 4.0.0 версии смотрите старые версии этой документации.

## Список разрешений iOS

Как указано выше см. [cordova-plugin-whitelist][1] для подробностей. Для cordova-ios до 4.0.0 версии смотрите старые версии этой документации.

## Список разрешений BlackBerry 10

Разрешающие правила могут быть найдены в `www/config.xml`.

Использование шаблонов в BlackBerry 10 отличается от остальных платформы двумя способами:

*   Любой контент, к которому получается доступ с использованием `XMLHttpRequest` должн быть объявлен явным образом. Установка `origin="*"` в этом случае не работает. Как вариант, веб-безопасность можно отключить с помощью параметра `WebSecurity`, описанном в разделе Настройка BlackBerry:
    
        <preference name="websecurity" value="disable" />

*   Как альтернатива параметру `*.domain` , установите дополнительный атрибут `subdomains` со значением `true`. Он установлен в `false` по умолчанию. Например, следующее описание позволяет получить доступ к `google.com` , `maps.google.com` , и `docs.google.com`:
    
        <access origin="http://google.com" subdomains="true" />
    
    А следующее описание ограничивает доступ до `google.com`:
    
        <access origin="http://google.com" subdomains="false" />
    
    Укажите доступ ко всем доменам, в том числе для протокола локальной файловой системы `file://`:
    
        <access origin="*" subdomains="true" />

(За более подробной информацией о поддерживаемых функциях, смотрите документации BlackBerry по [тегу access][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox OS

В Firefox OS нет концепции разрешения определенного домена. Вместо этого есть специальное разрешение называемое [SystemXHR][10]. Существует необходимость добавить это разрешение в `config.xml`:

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

Объект `XMLHttpRequest` должен быть инстанцирован с двумя параметрами `mozAnon` и `mozSystem`:

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

Это решение является прозрачным, так что нет никакой разницы при использовании его совместно с другими платформами.

## Список разрешений Windows Phone

Списки разрешающий правил для Windows Phone 7 и 8 находятся в файле `config.xml` приложения.

## Список разрешений Tizen

Списки разрешающий правил находятся в файле приложения `config.xml`. Платформа рассчитывает на тот же атрибут `subdomains` что и платформа BlackBerry. (За более детальной информацией о поддерживаемых функциях, смотрите документацию Tizen по [тегу access][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm