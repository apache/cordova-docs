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

Запустите команду `create`, указав существующий путь к проекту, идентификатор пакета в стиле обратного формата доменных имен и отображаемое имя приложения.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Построение проекта

        $ /path/to/my_new_project/cordova/build
    

## Запустить приложение на эмуляторе

        $ /path/to/my_new_project/cordova/run --emulator
    

## Запуск приложения на устройстве

        $ /path/to/my_new_project/cordova/run --device
    

## Подпись приложения

Вы можете узнать больше о подписании, распространение приложений для iOS, создание сертификата и подготовке профиля на сайте [Библиотека разработчика iOS][2].

 [2]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html

Чтобы подписать приложение с помощью Cordova необходимо следующее:

*   Подпись кода (`--codeSignIdentity`): [С помощью XCode][3] можно создать новую подпись iOS, и добавить ее в Вашу связку ключей. Тип подписи кода - как правило распространение или разработка, должны быть определены здесь. Тип подписи кода - как правило распространение или разработка, должны быть определены здесь.

*   Профиль подготовки (`--provisioningProfile`): [Используя Apple Member Center][4] вы можете создать профиль подготовки. Скачать профиль подготовки на компьютер и запустить его в XCode чтобы его зарегистрировать. Он копируется в это расположение на вашем Mac: ~/Library/MobileDevice/Provisioning\ Profiles/. При его открытии в текстовом редакторе, вы можете найти идентификатор UUID, который должен быть указан здесь.

*   Правила ресурсов для подписывания кода (`--codeSignResourceRules`) (необязательно): позволяет указать пользовательские правила подписания ресурсов.

 [3]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6
 [4]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61

Эти параметры могут быть заданы с помощью аргументов командной строки указанных выше для `построения` или `запуска` скриптов:

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 
    

Кроме того их можно указать в файле конфигурации сборки (build.json) с помощью аргумента (`--buildConfig`). Ниже приведен пример файла конфигурации построения:

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }
    

Существует также поддержка смешивания и комбинирования аргументов командной строки и параметров в файле build.json. Значения из аргументов командной строки будет получить приоритет.

## Ведение журнала

        $ /path/to/my_new_project/cordova/log