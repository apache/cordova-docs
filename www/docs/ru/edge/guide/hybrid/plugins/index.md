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

title: Руководство по разработке плагинов
---

# Руководство по разработке плагинов

*Плагин* представляет собой пакет из встраиваемого кода, который позволяет WebView Cordova, в котором отображается приложение, взаимодействовать с платформой, на которой работает плагин. Плагины предоставляют доступ к функциям устройства и платформы, которые обычно недоступны для веб-приложений. Все основные функции Cordova API реализованы в виде плагинов, и многие другие доступны, что включение функций, таких как сканеры штрих-кодов, NFC-коммуникации, или адаптировать календарь интерфейсов. Существует [реестр][1] доступных плагинов.

 [1]: http://plugins.cordova.io

Плагины составляют единый интерфейс JavaScript наряду с соответствующей библиотеки машинного кода для каждой поддерживаемой платформы. По сути это скрывает различные реализации машинного кода за общий интерфейс JavaScript.

Этот раздел шаги через простой *эхо* плагин, который передает строку из JavaScript на родной платформе и обратно, один, который можно использовать в качестве модели для создания гораздо более сложные функции. В этом разделе обсуждаются основные плагинная структура и интерфейс JavaScript с видом на улицу. Для каждого соответствующего родной интерфейс см. список в конце этого раздела.

В дополнение к этим инструкциям, при подготовке к написать плагин, то лучше посмотреть на [Существующие плагины][2] для руководства.

 [2]: http://cordova.apache.org/#contribute

## Создание плагина

Разработчики приложений используют команду CLI `plugin add` (обсуждается в разделе "[Интерфейс командной строки](../../cli/index.html)") чтобы применить плагин к проекту. Аргумент для этой команды является URL-адрес для *git* -репозиторий, содержащий код плагина. Этот пример реализует API устройств в Кордова:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

Репозиторий плагинов должен предоставлять файл манифеста верхнего уровня `plugin.xml` . Есть много способов для настройки этого файла, подробности о которых доступны в "[Спецификация расширений](../../../plugin_ref/spec.html)". Эта сокращенная версия плагина `Device` обеспечивает простой пример для использования в качестве модели:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="cordova-plugin-device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

Атрибут `id` тега верхнего уровня `plugin` использует тот же формат реверс домена для идентификации плагина как и приложения, к которым он добавляется. Тег `js-module` указывает путь к общим интерфейсом JavaScript. Тег `platform` указывает соответствующий набор кода платформы, для платформы `ios` в данном случае. Тег `config-file` инкапсулирует тег `feature`, который вводится доабавляется в платформо-зависимый файл `config.xml`, чтобы уведомить платформу о дополнительном коде библиотеки. Теги `header-file` и `source-file` указывают путь к файлам библиотеки компонентов.

## Проверка плагина

Вы можете использовать `plugman` утилита для проверки, является ли плагин устанавливает правильно для каждой платформы. Установка `plugman` с помощью следующей команды [node][3] :

 [3]: http://nodejs.org/

        $ npm install -g plugman
    

Вам нужен корректный каталог исходного кода приложения, например каталог верхнего уровня `www`, включенных в проект, созданный CLI, как описано в разделе "[Интерфейс командной строки](../../cli/index.html)". Убедитесь, что домашняя страница приложения `index.html` ссылаются на имя файла интерфейса плагина JavaScript, как будто он расположен в той же директории с исходным кодом:

        <script src="myplugin.js"></script>
    

Затем выполните команду, такую как нижеуказанную, для тестирования что iOS зависимости загрузились должным образом:

         $ plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin
    

Для подробной информации о параметрах `plugman`, см. "[Использование Plugman для управления расширениями](../../../plugin_ref/plugman.html)". Для получения информации о том, как на самом деле *отладки* плагины увидеть родной интерфейс каждой из платформ, перечисленных в нижней части этой страницы.

## Интерфейс JavaScript

JavaScript предоставляет интерфейс передней, что делает его может быть самой важной частью плагин. Ваш плагин JavaScript можно структурировать, однако вам нравится, но вам нужно вызвать `cordova.exec` для взаимодействия с родной платформой, используя следующий синтаксис:

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

Вот как работает каждого параметра:

*   `function(winParam) {}`: Функция обратного вызова успех. Предполагая ваш `exec` вызов завершается успешно, эта функция выполняет наряду с каких-либо параметров, вы проходите к нему.

*   `function(error) {}`: Функция обратного вызова ошибки. Если операция не завершена успешно, эта функция выполняется с параметром необязательные ошибки.

*   `"service"`: Имя службы, для вызова на родной стороне. Это соответствует в родной класс, для которого более подробная информация доступна в родной гидов, перечисленных ниже.

*   `"action"`: Имя действия вызова на родной стороне. Это обычно соответствует методу собственного класса. Смотрите собственного руководства, перечисленных ниже.

*   `[/* arguments */]`: Массив аргументов для передачи в родной среде.

## Пример JavaScript

В этом примере показан один из способов реализовать интерфейс JavaScript плагин:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

В этом примере плагин прикрепляется к `window` объект как `echo` функция, которая плагин пользователей назвал бы следующим образом:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Посмотрите на три последние аргументы для `cordova.exec` функции. Первые звонки `Echo` *службы*, имя класса. Второй просит `echo` *действий*, метода в этом классе. В-третьих, массив аргументов, содержащих строку эхо, которая является `window.echo` функция в первый параметр.

Успех обратного вызова передается в `exec` это просто ссылка на функцию обратного вызова `window.echo` принимает. Если родной платформе инициирует обратный вызов для ошибки, он просто вызывает успех обратного вызова и передает ему строку по умолчанию.

## Интерфейсы

После того, как вы определяете JavaScript для вашего плагина, необходимо дополнить его по крайней мере один собственной реализации. Детали для каждой платформы перечислены ниже, и каждый основывается на простой пример эхо плагин выше:

*   [Плагины для Amazon Fire OS](../../platforms/amazonfireos/plugin.html)
*   [Плагины для Android](../../platforms/android/plugin.html)
*   [Плагины для iOS](../../platforms/ios/plugin.html)
*   [Плагины для BlackBerry 10](../../platforms/blackberry10/plugin.html)
*   [Плагины Windows](../../platforms/win8/plugin.html) Phone 8
*   [Плагины Windows](../../platforms/win8/plugin.html)

Платформа Tizen не поддерживает плагины.

## Публикации плагинов

После того как вы развивать ваш плагин, вы можете опубликовать и поделиться им с сообществом. Вы можете опубликовать ваш плагин в любой `npmjs` реестра, но рекомендованный реестр это [основной NPM реестр][4]. Пожалуйста, прочитайте наше [ руководство по публикации плагинов в npm][5].

 [4]: https://www.npmjs.com
 [5]: http://plugins.cordova.io/npm/developers.html

**Примечание**: [Реестр плагинов Кордова][6] переходит в состояние только для чтения. Команды `publish`/`unpublish` будут удалены из `plugman`, так что вы должны использовать соответствующие команды `npm`.

 [6]: https://plugins.cordova.io

Другие разработчики могут установить ваш плагин автоматически с помощью `plugman` или Cordova CLI. (Подробную информацию о каждом пути разработки, см. "[Использование Plugman для управления расширениями](../../../plugin_ref/plugman.html)" и "[Интерфейс командной строки](../../cli/index.html)".)

Чтобы опубликовать плагин в реестр NPM, необходимо выполнить следующие шаги:

*   Создайте файл `package.json` для вашего плагина:
    
        $ plugman createpackagejson /path/to/your/plugin

*   опубликуйте его:
    
        $ npm adduser # that is if you don't have an account yet
        $ npm publish /path/to/your/plugin
        

Вот и все!

Запуск `plugman--help` перечислит другие доступные команды для работы с реестром.