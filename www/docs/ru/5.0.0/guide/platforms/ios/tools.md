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

title: Руководство по инструментам командной строки iOS
---

# Руководство по инструментам командной строки iOS

В этом руководстве показано, как использовать Кордова в набор инструментов по центру платформы shell для разработки приложений для iOS. Этот путь разработки, описанный в разделе "[Введение](../../overview/index.html)", может предложить вам больший спектр вариантов разработки чем кросс платформенный инструмент CLI, описанные в разделе "[Интерфейс командной строки](../../cli/index.html)". Например вам нужно использовать инструменты оболочки при развертывании настраиваемого Cordova WebView наряду с собственными компонентами. Перед тем как использовать какой то путь разработки, сначала необходимо настроить среду SDK, как описано в разделе "[Руководство для платформы iOS](index.html)". Эти инструменты полагаются на командной строки средства Xcode таких как `xcode-select` и`xcodebuild`.

Чтобы включить инструменты оболочки для iOS, скачайте Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните каждый вы хотите настроить таргетинг, `ios` в данном случае. Соответствующие инструменты обычно доступны в профиле верхнего уровня `bin` каталог, в противном случае консультироваться файл **README** для получения более подробной направлениях.

 [1]: http://cordova.apache.org

Эти инструменты позволяют создавать, строить и запускать приложения для iOS. За информаций о дополнительных интерфейсах командной строки которые позволяют встраивать возможности плагинов среди разных платформ, смотрите раздел "[Использование Plugman для управления расширениями](../../../plugin_ref/plugman.html)". Смотрите раздел "Плагины приложения" для детальной информации о том как разрабатывать плагины.

## Создание проекта

Запустите `create` команду, указав существующий путь к проекту, реверс домен стиль пакет идентификатор и отображаемое имя приложения.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Построение проекта

        $ /path/to/my_new_project/cordova/build
    

## Запустить приложение на эмуляторе

        $ /path/to/my_new_project/cordova/run --emulator
    

## Запуск приложения на устройстве

        $ /path/to/my_new_project/cordova/run --device
    

## Релиз

        $ /path/to/my_new_project/cordova/build --release
    

(измените `cordova/build-release.xcconfig` файл для указания вашего сертификата подписи кода)

## Ведение журнала

        $ /path/to/my_new_project/cordova/log