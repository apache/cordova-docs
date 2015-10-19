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

title: Файл config.xml
---

# Файл config.xml

Многие аспекты поведения приложения можно управлять с помощью глобальной конфигурации файла `config.xml` , то есть в верхнего уровня веб-каталог активов, а также на домашней странице приложения. Этот XML-файл платформа агностик форматируются основаны на спецификации W3C [Упакованы веб-приложений (виджетов)][1] и продлил указать основные Cordova API функции, плагины и платформо зависимые параметры.

 [1]: http://www.w3.org/TR/widgets/

Для проектов, созданных с помощью Cordova CLI (описанный в разделе "интерфейс командной строки") этот файл можно найти в каталоге верхнего уровня `www`. Использование CLI для построения проекта восстанавливает версии файла в разных подкаталогах в пределах `platforms` . Если вы используете CLI для создания проекта, но затем переход рабочего процесса на пакет SDK, файл платформа специфического служит источником.

В этом разделе описываются параметры конфигурации глобальных и кросс платформенной. В следующих разделах для конкретной платформы вариантов:

*   [iOS конфигурации](../guide/platforms/ios/config.html)
*   Андроид конфигурации
*   [BlackBerry конфигурации](../guide/platforms/blackberry10/config.html)

Помимо различных параметров конфигурации, подробно описаны ниже можно также настроить приложения основной набор образов для каждой целевой платформы. Увидеть иконки и заставки для получения дополнительной информации.

## Основные элементы конфигурации

Этот пример показывает значение по умолчанию `config.xml` порожденных CLI `create` команды, описанные в интерфейс командной строки:

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
            <preference name="Fullscreen" value="true" />
            <preference name="WebViewBounce" value="true" />
        </widget>
    

<!-- QUERY: is WebViewBounce superseded by DisallowOverscroll? -->

Следующие элементы конфигурации отображаются в профиле верхнего уровня `config.xml` файл и поддерживаются на всех поддерживаемых платформах Кордова:

*   `<widget>`Элемента `id` атрибут предоставляет идентификатор реверс домена приложения и `version` его полный номер версии в нотации майор/несовершеннолетнего/патч.

*   `<name>`Элемент определяет официальное имя приложения, как он отображается на главном экране устройства и в магазине app интерфейсы.

*   `<description>`И `<author>` элементы определяют метаданные и контактную информацию, которая может появиться в магазине app списки.

*   Необязательный `<content>` элемент определяет начальную страницу вашего приложения в каталоге верхнего уровня веб-активы. Значением по умолчанию является `index.html` , которая обычно появляется в проекте верхнего уровня `www` каталог.

*   `<access>`элементы определяют набор внешних доменов, которое приложение разрешается общаться с. Значение по умолчанию, показано выше позволяет доступ к любому серверу. Руководстве Whitelist домена для деталей.

*   `<preference>`Тег задает различные параметры как пар `name` / `value` атрибуты. Каждый предпочтение `name` регистр не учитывается. Многие параметры являются уникальными для конкретных платформ, перечисленных в верхней части этой страницы. В следующих разделах подробно описаны настройки, которые применяются к более чем одной платформы.

## Глобальная предпочтений

Следующие глобальные настройки применяются для всех платформ:

*   `Fullscreen`позволяет скрыть строку состояния в верхней части экрана. Значение по умолчанию — `false` . Пример:
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation`позволяет заблокировать ориентации и проворачиваться в ответ на изменения в ориентации интерфейс. Возможные значения `default` , `landscape` , или `portrait` . Пример:
    
        <preference name="Orientation" value="landscape" />
        
    
    **Примечание:** `default`Значение означает включены *как* альбомной и портретной ориентации. Если вы хотите использовать настройки по умолчанию каждой платформы (обычно только для портрет), оставьте этот тег из `config.xml` файла. Кроме того, ежевика использует `auto` вместо `default` в его `config.xml` файл. Если указать `default` в глобальной `config.xml` , оно переводится `auto` в построении BlackBerry.

## Multi-платформы предпочтения

Следующие настройки применяются к более чем одной платформы, но не все из них:

*   `DisallowOverscroll`(логическое значение, по умолчанию `false` ): набор `true` Если вы не хотите интерфейс для отображения каких-либо обратной связи, когда пользователи прокрутки за начало или конец содержимого.
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    Применяется к Android и iOS. На iOS, overscroll жесты причиной контента чтобы отскочить назад в исходное положение. На Android они производят более тонкий светящийся эффект вдоль верхнего или нижнего края содержание.

*   `BackgroundColor`: Задайте цвет фона приложения. Поддерживает шестнадцатеричное значение размером 4 байта, с первый байт, представляющий альфа-канал и стандартные значения RGB для следующих трех байтов. В этом примере указывается голубой:
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    Применяется к Android и BlackBerry. Переопределяет CSS в противном случае доступны на *всех* платформах, например:`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(логическое значение, по умолчанию `false` ): набор `true` Скрыть дополнительную панель инструментов, которая появляется над клавиатурой, помогая пользователям перемещаться из одной формы ввода на другой.
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    Применяется к iOS и BlackBerry.
    
    **Примечание:** Для BlackBerry, допустимые значения находятся в `enable` или`disable`.

## `<feature>`Элемент

Если вы используете CLI для построения приложений, используется `plugin` команду, чтобы включить устройство API-интерфейсы. Это не изменяет верхнего уровня `config.xml` файл, так что `<feature>` элемент не применяется к ваш рабочий процесс. Если вы работаете непосредственно в SDK и с помощью платформа специфического `config.xml` файл в качестве источника, вы используете `<feature>` тег, чтобы включить уровень устройства API и внешних плагинов. Они обычно появляются в этой форме:

        <feature name="Plugin" value="PluginID" />
    

Они часто появляются с пользовательские значения в конкретной платформы `config.xml` файлов. Например вот как для указания устройства API для Android проектов:

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Вот как элемент отображается для iOS проектов:

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Подробную информацию о том, как указать каждую функцию в справочнике API. Руководстве плагин развития для получения дополнительной информации на плагины.