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

# Android средства командной строки

`cordova`Утилиты командной строки является высокого уровня инструментом, который позволяет создавать приложения на нескольких платформах за один раз. Старой версии Cordova framework предоставляет наборы средств командной строки для каждой платформы. Чтобы использовать их в качестве альтернативы для CLI, вам нужно скачать эту версию Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните узел платформы, которую вы хотите цели. Инструменты, описанные здесь обычно доступны в верхнего уровня `bin` каталог, в противном случае консультироваться с файлом **README** для получения более подробной направлениях.

 [1]: http://cordova.apache.org

Сведения о низкоуровневый интерфейс командной строки, который позволяет плагины см с помощью Plugman для управления плагинами. Смотрите приложение плагины обзор.

## Создание проекта

Запустите `create` команду, указав существующий путь к проекту, идентификатор домена реверсивные пакета и отображаемое имя приложения. Вот синтаксис для Mac и Windows:

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## Построить

Это удаляет, затем выполняет построение проекта.

Отладка, на Mac или Windows:

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

Релиз, на Mac или Windows:

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## Запуск приложения

`run`Команда принимает следующие *необязательные* параметры:

*   Целевая спецификация. Это включает в себя `--emulator` , `--device` , или`--target=<targetID>`.

*   Создание спецификации. Это включает в себя `--debug` , `--release` , или`--nobuild`.
    
    $ /path/to/project/cordova/run \[Target\] \[Build\] $ C:\path\to\project\cordova\run.bat \[Target\] \[Build\]

Убедитесь, что вы создаете по крайней мере один Android виртуальное устройство, в противном случае вам будет предложено сделать это с `android` команды. Если более чем одна AVD доступен как цель, вам будет предложено выбрать один. По умолчанию `run` команда обнаружит подключенное устройство, или в настоящее время работающий эмулятор, если устройство не найдено.

## Ведение журнала

    $ /path/to/project/cordova/log
    $ C:\path\to\project\cordova\log.bat
    

### Очистка

    $ /path/to/project/cordova/clean
    $ C:\path\to\project\cordova\clean.bat