* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# iOS оболочки инструмент руководство

В этом руководстве показано, как использовать Кордова в набор инструментов по центру платформы shell для разработки приложений для iOS. Этот путь развития, говорится в обзоре, может предложить вам большей спектр вариантов развития для iOS, чем кросс платформенный инструмент CLI, описанные в интерфейс командной строки. Например вам нужно использовать инструменты оболочки при развертывании настраиваемого Cordova WebView наряду с собственными компонентами. Перед использованием любой путь развития, сначала необходимо настроить среды SDK, как описано в руководстве платформы iOS. Эти инструменты полагаются на командной строки средства Xcode таких как `xcode-select` и`xcodebuild`.

Чтобы включить инструменты оболочки для iOS, скачайте Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните каждый вы хотите настроить таргетинг, `ios` в данном случае. Соответствующие инструменты обычно доступны в профиле верхнего уровня `bin` каталог, в противном случае консультироваться файл **README** для получения более подробной направлениях.

 [1]: http://cordova.apache.org

Эти инструменты позволяют создавать, строить и запускать приложения для iOS. Для получения информации о дополнительных интерфейс командной строки, который позволяет использовать возможности плагина на всех платформах смотрите с помощью Plugman для управления плагинами. Смотрите приложение плагины для подробной информации о том, как разрабатывать плагины.

## Создание проекта

Запустите `create` команду, указав существующий путь к проекту, реверс домен стиль пакет идентификатор и отображаемое имя приложения.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Построение проекта

        $ /path/to/my_new_project/cordova/build
    

## Запустить приложение на эмуляторе

        $ /path/to/my_new_project/cordova/run
    

## Освобождение

        $ /path/to/my_new_project/cordova/release
    

## Ведение журнала

        $ /path/to/my_new_project/cordova/log