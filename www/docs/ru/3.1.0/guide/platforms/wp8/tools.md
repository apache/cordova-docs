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

title: Windows Phone средств командной строки
---

# Windows Phone средств командной строки

`cordova`Утилиты командной строки является высокого уровня инструмент, который позволяет вам создавать приложения сразу на нескольких платформах. Старые версии структуры Cordova предоставляет наборы средств командной строки для каждой платформы. Чтобы использовать их в качестве альтернативы для CLI, вам нужно скачать эту версию Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните узел платформы, которую вы хотите цели. Инструменты, описанные здесь обычно доступны в профиле верхнего уровня `bin` каталог, в противном случае консультироваться с файлом **README** для получения более подробной направлениях.

 [1]: http://cordova.apache.org

## Windows Phone

Средства командной строки Windows Phone поддерживает создание, строительство и запуск новых проектов. Команды должны быть запущены из строки cmd или powershell.

Репо WP8 теперь включает в себя код для построения WP7 + WP8 apps. Репо содержит подкаталоги для каждого: `wp7/` и`wp8/`.

## Создание проекта

Есть 2 способа идти о создании нового приложения Apache Cordova WP7 или РГ.8.

### Запустите пакетный файл для создания и установки шаблонов.

*   Корень репо содержит файл createTemplates.bat. Дважды щелкнув этот файл будет генерировать 2 ZIP-файлов. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip, где ХХХ это номер текущей версии) Легко использовать эти файлы в Visual Studio, копировать их «Мои документы\Visual Studio 2012\Templates\ProjectTemplates\» вы затем сможете для создания новых приложений Apache Cordova Windows Phone из файла Visual Studio-> меню новый проект.

*   Если вы запустите пакетный файл из командной строки, вы также можете позвонить с параметром для автоматической установки

Запустите сценарий:

    >createTemplates.bat -install
    

### Использовать скрипты create в командной строке

Запустите `create` команду, указав существующий путь к проекту, реверс домен стиль пакет идентификатор и отображаемое имя приложения. Вот синтаксис для Windows Phone 7 и 8:

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Запустите Visual Studio и откройте файл решения (SLN) в (C:\path\to\my\_new\_project)

Постройте и запустите его

## Построение проекта (затем очищает сборки)

*   Отладка
    
    $ C:\path\to\my\_new\_project\cordova\build --debug

*   Релиз
    
    $ C:\path\to\my\_new\_project\cordova\build --release

## Выполнение приложения

Запустите команду «run» со следующими *необязательными* параметрами

*   Целевая спецификация. Это включает в себя `--emulator` , `--device` , или`--target=<targetID>`.

*   Создание спецификации. Это включает в себя `--debug` , `--release` , или`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[Target\] \[Build\]

По умолчанию `run` команда будет называться с `--emulator --debug` если флаги не предоставляются.

## Очистка

    $ C:\path\to\my_new_project\cordova\clean