* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Руководство по инструментам командной строки Android

В этом руководстве показано, как использовать набор платформо-ориентированных инструментов Cordova для разработки приложений на Android. Этот путь разработки, описанный в разделе "Обзор", может предложить вам больший спектр вариантов разработки чем кросс платформенный инструмент CLI, описанные в разделе "Интерфейс командной строки". Например вам нужно использовать инструменты командной строки при развертывании настраиваемого Cordova WebView наряду с собственными компонентами. Перед использованием любой путь разработки, сначала необходимо настроить среду Android SDK, как описано в разделе "Руководство платформы Android".

Чтобы включить инструменты оболочки для Android, скачайте Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните каждый, для которого вы хотите разрабатывать который, `android` в данном случае. Соответствующие инструменты обычно доступны в папке верхнего уровня `bin`, в противном случае проконсультируйтесь в файле **README** для более подробные инструкции.

 [1]: http://cordova.apache.org

Эти инструменты командной строки позволят вам создавать, собирать и запускать приложения для Android. За информаций о дополнительных интерфейсах командной строки которые позволяют встраивать возможности плагинов среди разных платформ, смотрите раздел "Использование Plugman для управления плагинами". Смотрите приложение плагины для подробной информации о том, как разрабатывать плагины.

## Создание проекта

Запуск `create` команду, указав существующий путь к проекту, реверс домен стиль пакета идентификатор и отображаемое имя приложения. Вот синтаксис для Mac/Linux и Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Сборка

Это удаляет, затем выполняет построение проекта.

Отладка, на Windows или Mac/Linux:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Релиз, на Windows или Mac/Linux:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Запуск приложения

Команда `run` принимает следующие *необязательные* параметры:

*   Целевая спецификация. Это включает в себя `--emulator` , `--device`, или`--target=<targetID>`.

*   Спецификация сборки. Это включает в себя `--debug` , `--release` , или`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Убедитесь, что вы создали по крайней мере одно виртуальное устройство Android, в противном случае вам будет предложено сделать это с помощью команды `android`. Если несколько AVD доступны как цель, вам будет предложено выбрать одно из них. По умолчанию команда `run` определяет подключенное устройство, или в настоящее время работающий эмулятор, если устройство не найдено.

## Ведение журнала

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Очистка

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Ручное использование муравей

Если вы хотите позвонить муравей непосредственно из командной строки, такие как `ant debug install` , вам нужно указать дополнительные параметры в команду ant:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

Это потому что каталоги, используемые в Cordova муравей скрипты отличается от по умолчанию. Это делается чтобы избежать конфликтов при запуске из командной строки против муравьев внутри Eclipse/ADT.

Эти дополнительные параметры добавляются автоматически для вас при использовании `cordova/build` и `cordova/run` сценариев, описанных выше. По этой причине рекомендуется использовать `cordova/build` и `cordova/run` сценарии вместо вызова муравей непосредственно из командной строки.