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

# iOS утилиты командной строки

`cordova`Утилиты командной строки является высокого уровня инструмент, который позволяет вам создавать приложения сразу на нескольких платформах. Старые версии структуры Cordova предоставляет наборы средств командной строки для каждой платформы. Чтобы использовать их в качестве альтернативы для CLI, вам нужно скачать эту версию Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните узел платформы, которую вы хотите цели. Инструменты, описанные здесь обычно доступны в профиле верхнего уровня `bin` каталог, в противном случае консультироваться с файлом **README** для получения более подробной направлениях.

 [1]: http://cordova.apache.org

Средства командной строки iOS строятся на скрипты shell и полагаться на Xcode инструментов командной строки, таких как `xcode-select` и`xcodebuild`.

Сведения о низкоуровневый интерфейс командной строки, который позволяет плагины см с помощью Plugman для управления плагинами. Смотрите приложение плагины обзор.

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