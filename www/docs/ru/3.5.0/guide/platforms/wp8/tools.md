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

# Windows Phone средств командной строки

`cordova`Утилиты командной строки является высокого уровня инструмент, который позволяет вам создавать приложения сразу на нескольких платформах. Старые версии структуры Cordova предоставляет наборы средств командной строки для каждой платформы. Чтобы использовать их в качестве альтернативы для CLI, вам нужно скачать эту версию Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните узел платформы, которую вы хотите цели. Инструменты, описанные здесь обычно доступны в профиле верхнего уровня `bin` каталог, в противном случае консультироваться с файлом **README** для получения более подробной направлениях.

 [1]: http://cordova.apache.org

Сведения о низкоуровневый интерфейс командной строки, который позволяет плагины см с помощью Plugman для управления плагинами. Смотрите приложение плагины обзор.

## Windows Phone

Средства командной строки Windows Phone поддерживает создание, строительство и запуск новых проектов. Команды должны быть запущены из строки cmd или powershell.

Репо WP8 теперь включает в себя код для построения WP7 + WP8 apps. Repo есть подкаталоги для каждого: `wp7/` и`wp8/`.

## Создание проекта

Есть 2 способа идти о создании нового приложения Apache Cordova WP7 или WP8.

### Запустите пакетный файл для создания и установки шаблонов

*   Содержит корень репо `createTemplates.bat` файл. Дважды она генерирует два `.zip` файлы: `CordovaWP7_x_x_x.zip` и `CordovaWP8_x_x_x.zip` , где *ххх* — номер текущей версии. Чтобы легко использовать эти файлы в Visual Studio, скопируйте их в `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` . Затем вы могл создать Apache Cordova Windows Phone приложения из Visual Studio **файл → новый проект** меню.

*   Если вы запустите пакетный файл из командной строки, вы также можете позвонить с параметром для автоматической установки

Запустите сценарий:

    >createTemplates.bat -install
    

### Использовать скрипты Create в командной строке

Запуск `create` команду, указав существующий путь к проекту, реверс домен стиль пакета идентификатор и отображаемое имя приложения. Вот синтаксис для Windows Phone 7 и 8:

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Запустите Visual Studio и откройте файл решения (SLN) в (C:\path\to\my\_new\_project)

Построить и запустить его

## Построение проекта (чистой, а затем построить)

*   Отладка
    
    $ C:\path\to\my\_new\_project\cordova\build --debug

*   Релиз
    
    $ C:\path\to\my\_new\_project\cordova\build --release

## Запуск приложения

Выполните команду «run» со следующими *необязательными* параметрами

*   Целевая спецификация. Это включает в себя `--emulator` , `--device` , или`--target=<targetID>`.

*   Создание спецификации. Это включает в себя `--debug` , `--release` , или`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[Target\] \[Build\]

По умолчанию `run` команда вызывается с `--emulator --debug` если флаги не предоставляются.

## Очистка

    $ C:\path\to\my_new_project\cordova\clean