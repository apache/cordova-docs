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

title: Обновление для Windows 8
---

# Обновление для Windows 8

В этом руководстве показано, как изменить проекты Windows 8 для обновления старых версий Кордова. Большинство этих инструкций применимы для проектов, созданных со старым набором средств командной строки, которые предшествуют утилите CLI `cordova`. Смотрите раздел "[Интерфейс командной строки](../../cli/index.html)" для получения информации как обновить версию CLI.

## Обновление до 4.0.0 с 3.1.0 или позднее

Для проектов, которые были созданы с помощью cordova CLI:

1.  Обновите версию `cordova` CLI. Смотрите "[Интерфейс командной строки](../../cli/index.html)".

2.  Запуск`cordova platform update windows8`.

Для проектов, не созданных с помощью cordova CLI выполните:

        bin\update <project_path>
    

## Обновление до 3.1.0

Кордова CLI поддержка для Windows 8 была введена в Кордове 3.1.0. Для обновления, мы предлагаем создание новой CLI Cordova проекта и движущихся над всеми необходимыми активами.

## Обновление до 2.9.0 с 2.8.0

Следующие команды должно быть сделано из среды Visual Studio чтобы убедиться что обновление/удаляются все ссылки на проект.

1.  Удалить `cordova-2.8.0.js` из проекта `www` каталог.

2.  Добавить `cordova.js` файл из источника в проект `www` каталог. (Обратите внимание, что файл больше не содержит номер версии в имени файла).

3.  Построение и тестирование!

## Обновление до 2.8.0 с 2.7.0

Следующие команды должно быть сделано из среды Visual Studio чтобы убедиться что обновление/удаляются все ссылки на проект.

1.  Удалить `cordova-2.7.0.js` из проекта `www` каталог.

2.  Добавить `cordova.js` файл из источника в проект `www` каталог. (Обратите внимание, что файл больше не содержит номер версии в имени файла).

3.  Построение и тестирование!