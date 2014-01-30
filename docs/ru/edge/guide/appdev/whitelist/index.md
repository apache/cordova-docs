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

# Whitelist Путеводитель

Белый список доменов является модель безопасности, которая контролирует доступ во внешние домены, на которые вам приложение не имеет контроля. Кордова по умолчанию политика безопасности позволяет получить доступ к любому сайту. Прежде чем переносить приложение для производства, следует сформулировать белый и разрешить доступ к определенным сетевым домены и поддомены.

Кордова придерживается в спецификации [W3C виджета доступ][1] , которая опирается на `<access>` элемент в app `config.xml` файл, чтобы включить доступ по сети к отдельным доменам. Для проектов, которые полагаются на CLI рабочего процесса, описанного в интерфейс командной строки, этот файл расположен в рамках проекта верхнего уровня `www` каталог. В противном случае для путей развития платформы, места перечислены в разделах ниже. (См. различные платформы руководства для получения дополнительной информации на каждой платформе.)

 [1]: http://www.w3.org/TR/widgets-access/

В следующих примерах демонстрируется синтаксис белый список:

*   Доступ к [google.com][2]:
    
        <access origin="http://google.com" />
        

*   Доступ к безопасной [google.com][3] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Доступ к поддомен [maps.google.com][4]:
    
        <access origin="http://maps.google.com" />
        

*   Доступ для всех поддоменов на [google.com][2], например, [mail.google.com][5] и [адресу docs.google.com][6]:
    
        <access origin="http://*.google.com" />
        

*   Доступ ко *всем* доменам, например, [google.com][2] и [developer.mozilla.org][7]:
    
        <access origin="*" />
        
    
    Это значение по умолчанию для вновь созданных проектов CLI.

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

## Android Whitelisting

Платформа специфического whitelisting правила находятся в`res/xml/config.xml`.

**Примечание**: на Android 2.3 и ранее, домен whitelisting работает только для `href` гиперссылки, нет ссылки на ресурсы, такие как изображения и скрипты. Принять меры, чтобы избежать сценариев от инъекции в приложение.

Переход к не whitelisted доменов через `href` гиперссылки вызывает страницу, чтобы открыть в браузере по умолчанию, а не в пределах приложения. (Сравните это с iOS на поведение ниже.)

## iOS Whitelisting

Правила whitelisting платформы находятся в каталоге именованного приложения `config.xml` файл.

Происхождение указан без протокола, такие как `www.apache.org` вместо `http://www.apache.org` , по умолчанию ко всем `http` , `https` , `ftp` , и `ftps` схемы.

Подстановочные знаки на платформе iOS являются более гибкими, чем в спецификации [W3C виджета доступ][1] . Например, следующее обращается к все дочерние домены и домены верхнего уровня таких как `.com` и `.net` :

        <access origin="*.google.*" />
    

В отличие от платформы Android, отмечалось выше, переход к не whitelisted доменов через `href` Гиперссылка на iOS запрещает странице открывать на всех.

## Белый blackBerry 10

Whitelisting правила находятся в`www/config.xml`.

BlackBerry 10 Использование подстановочных знаков отличается от других платформ двумя способами:

*   Любой контент, доступ к `XMLHttpRequest` должны быть объявлены явным образом. Установка `origin="*"` в этом случае не работает. Кроме того, все веб-безопасности можно отключить с помощью `WebSecurity` предпочтение, описанных в конфигурации ежевики:
    
        <preference name="websecurity" value="disable" />
        

*   Как альтернатива параметру `*.domain` , установить дополнительный `subdomains` приписывают `true` . Он должен быть задан `false` по умолчанию. Например, следующее позволяет получить доступ к `google.com` , `maps.google.com` , и `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Следующие сужается доступ к `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Укажите доступ ко всем доменам, в том числе местных `file://` протокол:
    
    <access origin="*" subdomains="true" />

(Дополнительные сведения о поддержке, см BlackBerry в документации [элемента доступа][8].)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## iOS изменения в 3.1.0

До версии 3.1.0 Кордова iOS включены некоторые нестандартные расширения домена whilelisting схемы, поддерживаемые другими платформами Кордова. По состоянию на 3.1.0 белый iOS теперь соответствует ресурсов whitelist синтаксис, описанный в верхней части этого документа. Если вы модернизируете от pre-3.1.0, и вы были с помощью этих расширений, возможно, придется изменить ваш `config.xml` файл для того, чтобы продолжить whitelisting тот же набор ресурсов, как раньше.

В частности эти модели должны быть обновлены:

*   `apache.org`(без протокола): это значение будет совпадать с ранее `http` , `https` , `ftp` , и `ftps` протоколы. Изменить на « `*://apache.org/*` » чтобы включить все протоколы, или включить строку для каждого протокола, необходимо поддерживать.

*   `http://apache.*`(подстановочный знак в конце домена): это будет ранее матч все верхнего-уровня-домены, включая все возможные ДВУ двух букв (но не полезно домены как. co.uk). Включить строку для каждого TLD, который вы фактически контролировать и нуждаются в белый список.

*   `h*t*://ap*he.o*g`(подстановочные знаки для случайных недостающие буквы): они больше не поддерживаются; изменения включить строку для каждого домена и протокол, что вам действительно нужно в белый список.

## Windows Phone Whitelisting

Белый список правил для Windows Phone 7 и 8 находятся в app `config.xml` файл.

## Tizen Whitelisting

Whitelisting правила находятся в app `config.xml` файл. Платформа опирается на том же `subdomains` атрибут как платформы BlackBerry. (Дополнительные сведения о поддержке, см Tizen в документации [элемента доступа][9].)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm