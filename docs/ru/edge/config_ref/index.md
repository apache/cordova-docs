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

# Справочник по настройке

Многими аспектами поведения приложения можно управлять с помощью файла настроек `config.xml`, который базируется на основе спецификации W3C [Packaged Web Apps (Widgets)][1].

 [1]: http://www.w3.org/TR/widgets/

Для проектов, созданных с помощью Cordova CLI (описанный в разделе "интерфейс командной строки") этот файл можно найти в каталоге верхнего уровня `www`. Использование CLI для построения проектов восстанавливает версии файла в разных подкаталогах в пределах `platforms` . Для проектов-CLI каждый файл платформа специфического служит источником.

Расположение в то время как `config.xml` файл может меняться в зависимости от платформы, его содержание, как правило, не. Некоторые функции платформы также указаны в том же файле конфигурации. Детали перечислены ниже:

*   iOS конфигурации
*   Андроид конфигурации
*   BlackBerry конфигурации

## config.xml элементы

Проект [Apache Cordova][2] стремится особенности абстрактных прочь родной платформе через web вдохновил и веб-абстракций, которые в значительной степени стандарты инициативе и принятые на веб-сообщества. Пожалуйста, уделите несколько минут, чтобы ознакомиться с [Спецификация файла config.xml][1], чтобы понять тип метаданных приложения проекта Apache Cordova направлен на абстрактных и обеспечивают простые отправными точками для.

 [2]: http://cordova.io

Пример:

        <widget>
            <preference name="MySetting" value="true" />
            <feature name="MyPlugin" value="MyPluginClass" />
            <access origin="*" />
            <content src="index.html" />
        </widget>
    

Список поддерживаемых элементов для основных платформах в Apache Cordova.

### `<feature>`

Этот элемент описывает список функций нативных API доступ к которым имеет приложение. Во время выполнения, Apache Cordova framework сопоставляет `<feature>` элементы в машинный код для включения Cordova-приложение для доступа к устройству API-интерфейсы недоступны для типичных веб-приложений.

### `<access>`

Эти элементы определяют, как работает ваш список разрешенных доменов. Пожалуйста, смотрите руководство по Whitelist для получения дополнительной информации.

### `<content>`

Этот элемент определяет начальную страницу вашего приложения относительно корневого каталога проекта. Этот элемент необязателен, по умолчанию используется `index.html`.