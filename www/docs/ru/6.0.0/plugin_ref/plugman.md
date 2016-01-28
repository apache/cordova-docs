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

title: Использование Plugman для управления расширениями
---

# Использование Plugman для управления расширениями

Начиная с версии 3.0 Cordova реализует все API устройства как плагины и оставляет их по умолчанию отключенными. Она также поддерживает два различных способа добавления и удаления плагинов, в зависимости от вашего выбора рабочего процесса, как описано в разделе "[Введение](../guide/overview/index.html)":

*   Если вы используете кросс платформенный рабочий процесс, используйте утилиту CLI `cordova` для добавления плагинов, как описано в разделе "[Интерфейс командной строки](../guide/cli/index.html)". CLI изменяет плагины для всех платформ одновременно.

*   Если вы используете платформо-ориентированный процесс разработки, вы используете низкоуровневый инструмент командной строки [Plugman][1], индивидуально для каждой целевой платформы.

 [1]: https://github.com/apache/cordova-plugman/

В этом разделе описывается утилита Plugman. Для более детальной информации об использовании Plugman как node модуля или изменения исходного кода см. [README файл в его репозитории][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Установка Plugman

Чтобы установить plugman, вам потребуется установить [node.js][3] на свою машину. Затем можно запустить следующую команду в вашем окружении, чтобы установить plugman глобально, так чтобы он был доступен из любого каталога:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

Вы также должны иметь `git` добавленный в переменную окружения `PATH`, для того чтобы иметь возможность устанавливать плагины непосредственно из удаленных репозитариев Git.

**Подсказка**: Если вы обнаружили что после установки plugman с помощью `npm` вы по прежнему не можете запустить никакую из команд `plugman`,удостоверьтесь что вы добавили каталог `/npm/` в вашу переменную `PATH`.

**Примечание**: этот шаг можно пропустить, если вы не хотите загрязнять глобальное пространство имен `npm`, устанавливая Plugman глобально. Если это ваш случай, то когда вы создаете проект Cordova с использованием командной строки, создастся каталог `node_modules` внутри вашего проекта, которая содержит Plugman. Посколько вы не установили глобально, вам необходимо вызывать `node` для каждой команды Plugman, к примеру `node
./node_modules/plugman/main.js -version`. Остальная часть этой инструкции предполагает что вы установили Plugman глобально, что означает что вы можете вызывать его с использованием просто `plugman`.

## Создайте проект Cordova

Перед тем как использовать Plugman, вы должны создать проект Cordova. Вы можете сделать это либо с использование Интерфейса командной строки или с использованием низкоуровневых утилит командной строки. [Инструкции](../index.html) по использованию утилит командной строки для создания вашего проекта, расположены в различных разделах "Инструменты командной строки" указанных на странице "[Руководство по поддерживаемым платформам](../guide/platforms/index.html)".

## Добавление плагина

После того как вы установили Plugman и создали проект Cordova, вы можете начать добавлять плагины к платформе с помощью:

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Используя минимальные параметры эта команда установит плагин в проект Cordova. Вы должны указать платформу и расположение проекта Cordоva для этой платформы. Также вы должны указать добавляемый плагин, с использованием различных форм параметра `--plugin`:

*   `name`: Имя каталога где расположено содержимое плагина. Имя должно соответствовать существующему каталогу расположенному по пути, указанному в параметре `--plugins_dir` (смотрите ниже за подробной информацией) или имени плагина в реестре плагинов Cordova.
*   `url`: URL начинающийся с https:// или git://, и указывающий на существующий репозиторий Git который можно клонировать, и который содержит файл `plugin.xml`. Содержимое этого репозитория будет скопировано в `--plugins_dir`.
*   `path`: Путь к каталогу, содержащему плагин, который включает в себя файл `plugin.xml`. Содержимое расположенное по этому пути будет скопировано в `--plugins_dir`.

Другие параметры:

*   `--plugins_dir` по умолчанию, `<project>/cordova/plugins`, но может быть любым каталогом, котобый содержит подкаталог для каждого загруженного плагина.
*   `--www` поумолчанию каталог `www`, но может быть любой директорией которая будет использоваться проектом Cordova как каталог содержащий веб ресурсы приложения.
*   `--variable` позволяет указывать определенные переменные во время установки, для некоторых плагинов необходимо указывать ключи API или другие настраиваемые параметры. Обратитесь к [спецификации плагинов][4] для получения дополнительной информации.

 [4]: plugin_ref_spec.md.html#Plugin%20Specification

## Удаление плагина

Для удаления плагина, вы должны просто указать флаг `--uninstall` и указать код плагина (ID плагина).

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Команды справки

Plugman поддерживает общую команду help которая может помочь вам если вы в тупике или испытываете проблемы. Она отобразит список доступных команд Plugman и их синтаксис:

    plugman -help
    plugman  # same as above
    

**Примечание**: `plugman -help` может показывать некоторые дополнительные команды по работе с реестром плагинов. Эти команды предназначены для разработчиков плагинов и могут быть не реализованы в реестрах плагинов третьих сторон.

Вы также можете добавить флаг `--debug|-d` к любой команде Plugman для того чтобы запустить эту команду в диагностическом режиме, который будет отображать внутренние отладочные сообщения, по мере их формирования, что может помочь вам отследить проблемы, как например отсутствующие файлы в плагине.

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin cordova-plugin-battery-status
    

Наконец, вы можете использовать флаг `--version|-v` для того чтобы узнать какую версию Plugman вы используете.

    plugman -v
    

## Действия с реестром плагинов

Существует несколько команд plugman которые могут быть использованы для взаимодействия с [Реестром плагинов][5]. Пожалуйста обратите внимание что эти команды реестра специфичны для реестра плагинов *plugins.cordova.io* и могут не быть реализованы реестрами плагинов от посторонних поставщиков.

 [5]: http://plugins.cordova.io

### Поиск плагина

Вы можете использовать Plugman для поиска в [Реестре плагинов][5] плагинов, которые соответствуют указанному списку ключевых слов, разделенных между собой запятыми.

    plugman search <plugin keywords>
    

### Смена реестра плагинов

Вы можете получить или установить URL текущего реестра плагинов который использует plugman. Большей частью вы должны оставить это значение установленным в http://registry.cordova.io за исключением если вы хотите использовать реестр плагинов постороннего поставщика.

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### Получение информации о плагине

Вы можете получить информацию о определенном плагине, сохраненном в реестре с помощью:

    plugman info <id>
    

Эта команда свяжется с реестром плагинов и получит информацию, такую как номер версии плагина.

## Установка базовых плагинов

Приведенные ниже примеры показывают, как добавлять плагины по мере необходимости, так чтобы любая часть Cordova API, которую вы используете в вашем проекте, по-прежнему продолжала работать после обновления до версии 3.0. Для каждой команды, необходимо выбрать целевую платформы, и ссылаться на каталог проекта платформы.

*   cordova-plugin-battery-status
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-battery-status`

*   cordova-plugin-camera
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-camera`

*   cordova-plugin-console
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-console`

*   cordova-plugin-contacts
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-contacts`

*   cordova-plugin-device
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device`

*   cordova-plugin-device-motion (accelerometer)
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device-motion`

*   cordova-plugin-device-orientation (compass)
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device-orientation`

*   cordova-plugin-dialogs
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-dialogs`

*   cordova-plugin-file
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-file`

*   cordova-plugin-file-transfer
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-file-transfer`

*   cordova-plugin-geolocation
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-geolocation`

*   cordova-plugin-globalization
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-globalization`

*   cordova-plugin-inappbrowser
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-inappbrowser`

*   cordova-plugin-media
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-media`

*   cordova-plugin-media-capture
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-media-capture`

*   cordova-plugin-network-information
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-network-information`

*   cordova-plugin-splashscreen
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-splashscreen`

*   cordova-plugin-vibration
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-vibration`